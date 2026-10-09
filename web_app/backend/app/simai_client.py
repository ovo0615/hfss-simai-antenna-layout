# -*- coding: utf-8 -*-
"""常駐 SimAI worker 的管理端（在 FastAPI 這一側）。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

worker 是用 **SimAI Pro 的 venv python** 啟動的獨立子行程，
本模組負責啟動它、送請求、收結果、以及在它死掉時重啟。
"""

from __future__ import annotations

import itertools
import json
import os
import queue
import subprocess
import threading
import time
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parent.parent

# SimAI Pro 26.1.0 的預設安裝位置。可用環境變數覆寫。
DEFAULT_SIMAI_PYTHON = (
    r"C:\Program Files\Ansys Inc\Ansys Solutions\Ansys SimAI Pro Solution"
    r"\26.1.0\definitions\simai_pro\.venv\Scripts\python.exe"
)

# ★ 兩個等待都要有上限，而且都要能改。
# 本機實測載入 26~37 秒，但新電腦第一次要讓 Defender 掃上千個 DLL／.pyc，
# 數分鐘是可能的——上限給寬，卡死時才會停，不是正常慢的時候停。
DEFAULT_LOAD_TIMEOUT = 900.0       # SIMAI_LOAD_TIMEOUT
DEFAULT_PREDICT_TIMEOUT = 120.0    # SIMAI_PREDICT_TIMEOUT（實測一次推論約 0.08 秒）

# worker 的 stderr。以前導到 DEVNULL，卡住或當掉時沒有任何東西可查。
DEFAULT_STDERR_LOG = BACKEND_ROOT / "runs" / "worker_stderr.log"


class WorkerDead(RuntimeError):
    pass


class WorkerLoading(WorkerDead):
    """模型還在載入。HTTP 層一樣回 503，但訊息是「請稍候」而不是「壞了」。"""


def _timeout_from_env(key: str, default: float) -> float:
    try:
        value = float(os.environ.get(key, ""))
    except ValueError:
        return default
    return value if value > 0 else default


def _pump(stream, lines: queue.Queue) -> None:
    """把 worker 的 stdout 逐行搬進 queue；結束時放 None。
    讀取放在獨立執行緒，主邏輯才能用 queue.get(timeout) 設上限——
    readline() 本身沒有逾時，worker 卡住就會永遠等。"""
    try:
        for line in stream:
            lines.put(line)
    except Exception:
        pass
    lines.put(None)


# 訓練流程留下的作用中模型設定。有了它，start.bat 不必帶任何參數就能啟動。
# ★ 必須跟著平台走。這裡曾經寫死 pipeline/runs/active_model.json，
# 換一支天線後會**載入另一支天線的模型**——幾何完全不同，卻不會有任何錯誤，
# 只會給出看似合理的錯答案。
from app.platform_model import PROJECT_ROOT, RUNS_ROOT  # noqa: E402

ACTIVE_MODEL = RUNS_ROOT / "active_model.json"


def _from_config(key: str, default: str) -> str:
    """環境變數優先，其次讀 active_model.json，最後用預設值。"""
    env = os.environ.get(key)
    if env:
        return env
    try:
        if ACTIVE_MODEL.exists():
            data = json.loads(ACTIVE_MODEL.read_text(encoding="utf-8"))
            value = data.get(key.replace("SIMAI_", "").lower())
            if value:
                # active_model.json 可以放**版本庫相對路徑**（model_bundle.py
                # 還原時就是這樣寫的）。絕對路徑會綁死在打包那台機器上，
                # 而 worker 找不到時只會說「尚未設定訓練好的模型」，
                # 不會告訴你路徑來自別人的電腦。
                v = str(value)
                if key in ("SIMAI_MODEL_DIR", "SIMAI_BASELINE") and v:
                    # validate_model._portable 會把 %APPDATA% 這類前綴寫回去，
                    # 免得把本機使用者名稱寫進追蹤中的 JSON。
                    p = Path(os.path.expandvars(v))
                    if not p.is_absolute():
                        p = PROJECT_ROOT / p
                    return str(p)
                return v
    except Exception:
        pass
    return default


class SimAIClient:
    """單一常駐 worker 的用戶端。呼叫是序列化的（一把鎖），
    因為模型推論本來就只有一份，排隊比多開行程便宜得多。

    ★ 狀態（state）：idle → loading → ready／failed；stop() 之後是 stopped。
    「服務起來」與「模型載好」是兩件事：FastAPI 啟動時只呼叫 start_async()，
    埠馬上開、/api/health 馬上能回 loading。以前 startup 同步載入，
    uvicorn 要等它跑完才綁埠，載入時間整段算進啟動器的等待上限，
    新電腦冷載入一慢就被判「未能在時限內就緒」，整棵程序樹被砍，下次又從頭載。
    """

    def __init__(self) -> None:
        self.python = _from_config("SIMAI_PYTHON", DEFAULT_SIMAI_PYTHON)
        self.model_dir = _from_config("SIMAI_MODEL_DIR", "")
        self.model_name = _from_config("SIMAI_MODEL_NAME", "surface")
        self.output_field = _from_config("SIMAI_OUTPUT_FIELD", "gain_dbi")
        self.input_fields = _from_config("SIMAI_INPUT_FIELDS", "region")
        self.baseline = _from_config("SIMAI_BASELINE", "")
        self.baseline_sha = _from_config("SIMAI_BASELINE_SHA", "")
        # 測試用假 worker 時才會改；正式執行一律是 app.simai_worker
        self.worker_module = os.environ.get("SIMAI_WORKER_MODULE") or "app.simai_worker"
        self.load_timeout = _timeout_from_env("SIMAI_LOAD_TIMEOUT", DEFAULT_LOAD_TIMEOUT)
        self.predict_timeout = _timeout_from_env("SIMAI_PREDICT_TIMEOUT",
                                                 DEFAULT_PREDICT_TIMEOUT)
        self.stderr_log = DEFAULT_STDERR_LOG
        self._proc: subprocess.Popen | None = None
        self._lines: queue.Queue | None = None
        self._lock = threading.Lock()          # 握著它的人在跟 worker 講話
        self._state_lock = threading.Lock()    # 只保護「進入 loading」這一步
        self._gen = 0                          # stop() 遞增；過期的背景載入看到就放棄
        self._ids = itertools.count(1)
        self._load_t0 = 0.0
        # 載入成功過才自動重啟。載入本身失敗（找不到 python、逾時）時自動重試，
        # 只會讓每次推論都再等一輪載入上限。
        self._auto_restart = False
        self.state = "idle"
        self.reason = "尚未啟動"
        self.load_seconds = 0.0
        self.global_width = 0
        self.residual = False

    @property
    def ready(self) -> bool:
        return self.state == "ready"

    @property
    def alive(self) -> bool:
        return self._proc is not None and self._proc.poll() is None

    # ── 生命週期 ────────────────────────────────────────────────────
    def start(self) -> None:
        """同步載入：回來時 state 一定是 ready 或 failed。"""
        with self._state_lock:
            self._set_loading()
            gen = self._gen
        with self._lock:
            self._start_locked(gen)

    def start_async(self) -> None:
        """在背景執行緒載入，立即返回。已經在載入就什麼都不做。"""
        with self._state_lock:
            if self.state == "loading":
                return
            self._set_loading()
            gen = self._gen
        threading.Thread(target=self._load_if_current, args=(gen,),
                         name="simai-load", daemon=True).start()

    def _load_if_current(self, gen: int) -> None:
        with self._lock:
            if gen != self._gen:        # 排隊期間被 stop() 了：不要再生一個 worker
                return
            self._start_locked(gen)

    def _set_loading(self) -> None:
        self.state = "loading"
        self.reason = "模型載入中"
        self._load_t0 = time.monotonic()

    def _fail(self, reason: str, *, auto_restart: bool | None = None) -> None:
        self.state = "failed"
        self.reason = reason
        if auto_restart is not None:
            self._auto_restart = auto_restart

    def _start_locked(self, gen: int) -> None:
        self._kill(self._proc)                  # 保險：不留舊 worker
        self._proc = self._lines = None
        self._set_loading()

        if not Path(self.python).is_file():
            self._fail("找不到 SimAI 的 python：%s\n"
                       "請設定環境變數 SIMAI_PYTHON 指向 SimAI Pro 的 "
                       r".venv\Scripts\python.exe" % self.python, auto_restart=False)
            return

        env = dict(os.environ)
        env.update({
            "SIMAI_MODEL_DIR": self.model_dir,
            "SIMAI_MODEL_NAME": self.model_name,
            "SIMAI_OUTPUT_FIELD": self.output_field,
            "SIMAI_INPUT_FIELDS": self.input_fields,
            "SIMAI_BASELINE": self.baseline,
            "SIMAI_BASELINE_SHA": self.baseline_sha,
            "PYTHONUTF8": "1",
            "PYTHONIOENCODING": "utf-8",
        })
        err = subprocess.DEVNULL
        try:
            # 每次啟動覆寫：只留這一次的，才不會把上一輪的錯誤當成這一輪的
            Path(self.stderr_log).parent.mkdir(parents=True, exist_ok=True)
            err = open(self.stderr_log, "w", encoding="utf-8", errors="replace")
        except OSError:
            pass                                # 寫不了日誌也要能跑
        try:
            proc = subprocess.Popen(
                [self.python, "-u", "-m", self.worker_module],
                cwd=str(BACKEND_ROOT),
                stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=err,
                text=True, encoding="utf-8", errors="replace", env=env,
            )
        except Exception as exc:
            self._fail("啟動 worker 失敗：%s" % exc, auto_restart=False)
            return
        finally:
            if err is not subprocess.DEVNULL:
                err.close()                     # 子行程有自己的一份 handle

        lines: queue.Queue = queue.Queue()
        threading.Thread(target=_pump, args=(proc.stdout, lines),
                         name="simai-stdout", daemon=True).start()
        self._proc, self._lines = proc, lines

        # 等 ready 訊息（本機 26~37 秒；新電腦第一次可能數分鐘）。
        # 分小段等，stop() 才能隨時取消，不必等到上限。
        deadline = time.monotonic() + self.load_timeout
        line: str | None = ""
        while line == "":
            if gen != self._gen:
                self._kill(proc)
                return                          # stop() 會把狀態設成 stopped
            remaining = deadline - time.monotonic()
            if remaining <= 0:
                break
            try:
                line = lines.get(timeout=min(0.5, remaining))
            except queue.Empty:
                pass
        if line == "":
            self._kill(proc)
            self._fail("模型載入超過 %d 秒仍未完成，已結束 worker。"
                       "新電腦第一次載入較慢時，可設環境變數 SIMAI_LOAD_TIMEOUT（秒）"
                       "調大上限後按「重新載入模型」。%s"
                       % (self.load_timeout, self._stderr_tail()), auto_restart=False)
            return
        if line is None:
            self._fail("worker 沒有回應就結束了。%s" % self._stderr_tail(),
                       auto_restart=False)
            return
        try:
            msg = json.loads(line)
        except Exception:
            self._kill(proc)
            self._fail("worker 的第一則訊息不是 JSON：%s%s"
                       % (line[:200], self._stderr_tail()), auto_restart=False)
            return

        self.load_seconds = float(msg.get("load_seconds") or 0.0)
        self.global_width = int(msg.get("global_width") or 0)
        self.residual = bool(msg.get("residual"))
        if msg.get("ready"):
            self.state = "ready"
            self.reason = msg.get("reason", "")
            self._auto_restart = True
        else:
            # worker 活著但模型沒載入（例如尚未設定模型）：留著它，原因照實顯示
            self._fail(msg.get("reason", "") or "模型未就緒", auto_restart=False)

    def stop(self) -> None:
        with self._state_lock:
            self._gen += 1
            loading = self.state == "loading"
        if loading:
            self._kill(self._proc)              # 載入中沒有東西可以優雅收尾
        if not self._lock.acquire(timeout=3):
            # 推論還握著鎖：直接結束 worker，它讀到 EOF 就會放開鎖
            self._kill(self._proc)
            self._lock.acquire()
        try:
            proc, self._proc, self._lines = self._proc, None, None
            if proc and proc.poll() is None:
                try:
                    if proc.stdin:
                        proc.stdin.write(json.dumps({"cmd": "shutdown"}) + "\n")
                        proc.stdin.flush()
                    proc.wait(timeout=5)
                except Exception:
                    self._kill(proc)
            self.state = "stopped"
            self.reason = "已停止"
        finally:
            self._lock.release()

    @staticmethod
    def _kill(proc: subprocess.Popen | None) -> None:
        if proc is not None and proc.poll() is None:
            try:
                proc.kill()
                proc.wait(timeout=5)
            except Exception:
                pass

    def _stderr_tail(self, n: int = 8) -> str:
        path = Path(self.stderr_log)
        try:
            text = path.read_text(encoding="utf-8", errors="replace").strip()
        except OSError:
            text = ""
        if not text:
            return "\n\n（worker 的錯誤輸出：%s，沒有內容）" % path
        tail = "\n".join(text.splitlines()[-n:])
        return "\n\nworker 錯誤輸出的最後幾行（完整內容見 %s）：\n%s" % (path, tail)

    def _loading_text(self) -> str:
        return ("模型載入中（已 %d 秒，上限 %d 秒）。新電腦第一次載入可能要數分鐘，請稍候。"
                % (time.monotonic() - self._load_t0, self.load_timeout))

    # ── 推論 ────────────────────────────────────────────────────────
    def predict(self, config: dict | None = None, geometry_path: str | None = None,
                bc: dict | None = None, with_ci: bool = True) -> dict:
        # 載入中直接回，不要排隊等鎖——載入可能要好幾分鐘
        if self.state == "loading":
            raise WorkerLoading(self._loading_text())
        with self._lock:
            if self.state == "loading":         # 剛排進背景載入、還沒拿到鎖
                raise WorkerLoading(self._loading_text())
            if not self.alive:
                if self._auto_restart or self.state in ("idle", "stopped"):
                    self.start_async()
                    raise WorkerLoading("worker 不在執行，已在背景重新載入模型。"
                                        + self._loading_text())
                raise WorkerDead(self.reason or "SimAI worker 未就緒")
            if self.state != "ready":
                raise WorkerDead(self.reason or "SimAI worker 未就緒")

            req = {"id": str(next(self._ids)), "cmd": "predict",
                   "with_ci": bool(with_ci)}
            if geometry_path:
                req["geometry_path"] = geometry_path
            if config is not None:
                req["config"] = config
            if bc:
                req["bc"] = bc

            proc, lines = self._proc, self._lines
            assert proc is not None and proc.stdin and lines is not None
            try:
                proc.stdin.write(json.dumps(req, ensure_ascii=False) + "\n")
                proc.stdin.flush()
            except Exception as exc:
                self._fail("送出請求失敗，worker 可能已結束：%s" % exc)
                raise WorkerDead(self.reason)

            try:
                line = lines.get(timeout=self.predict_timeout)
            except queue.Empty:
                # 卡住的 worker 一定要結束掉，否則鎖永遠不放、重新載入也卡死
                self._kill(proc)
                self._fail("推論超過 %d 秒沒有回應，已結束 worker；下一次推論會自動重新載入。"
                           "若一再發生，可設環境變數 SIMAI_PREDICT_TIMEOUT（秒）。%s"
                           % (self.predict_timeout, self._stderr_tail()))
                raise WorkerDead(self.reason)
            if line is None:
                self._fail("worker 在回應前結束了。%s" % self._stderr_tail())
                raise WorkerDead(self.reason)
            msg = json.loads(line)
            if msg.get("type") == "error":
                raise RuntimeError(msg.get("message", "推論失敗"))
            return msg.get("result", {})

    def status(self) -> dict:
        loading = self.state == "loading"
        return {
            "state": self.state,
            "alive": self.alive,
            "ready": self.ready,
            "reason": self._loading_text() if loading else self.reason,
            "loading_seconds": round(time.monotonic() - self._load_t0, 1) if loading else 0.0,
            "load_timeout": self.load_timeout,
            "python": self.python,
            "model_dir": self.model_dir,
            "model_name": self.model_name,
            "output_field": self.output_field,
            "input_fields": self.input_fields,
            "load_seconds": round(self.load_seconds, 2),
            "global_width": self.global_width,
            "residual": self.residual,
        }


client = SimAIClient()
