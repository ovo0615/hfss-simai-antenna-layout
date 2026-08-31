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
import subprocess
import sys
import threading
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parent.parent

# SimAI Pro 26.1.0 的預設安裝位置。可用環境變數覆寫。
DEFAULT_SIMAI_PYTHON = (
    r"C:\Program Files\Ansys Inc\Ansys Solutions\Ansys SimAI Pro Solution"
    r"\26.1.0\definitions\simai_pro\.venv\Scripts\python.exe"
)


class WorkerDead(RuntimeError):
    pass


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
    因為模型推論本來就只有一份，排隊比多開行程便宜得多。"""

    def __init__(self) -> None:
        self.python = _from_config("SIMAI_PYTHON", DEFAULT_SIMAI_PYTHON)
        self.model_dir = _from_config("SIMAI_MODEL_DIR", "")
        self.model_name = _from_config("SIMAI_MODEL_NAME", "surface")
        self.output_field = _from_config("SIMAI_OUTPUT_FIELD", "gain_dbi")
        self.input_fields = _from_config("SIMAI_INPUT_FIELDS", "region")
        self.baseline = _from_config("SIMAI_BASELINE", "")
        self.baseline_sha = _from_config("SIMAI_BASELINE_SHA", "")
        self._proc: subprocess.Popen | None = None
        self._lock = threading.Lock()
        self._ids = itertools.count(1)
        self.ready = False
        self.reason = "尚未啟動"
        self.load_seconds = 0.0
        self.global_width = 0
        self.residual = False

    # ── 生命週期 ────────────────────────────────────────────────────
    def start(self) -> None:
        with self._lock:
            self._start_locked()

    def _start_locked(self) -> None:
        if not Path(self.python).is_file():
            self.ready = False
            self.reason = ("找不到 SimAI 的 python：%s\n"
                           "請設定環境變數 SIMAI_PYTHON 指向 SimAI Pro 的 "
                           r".venv\Scripts\python.exe" % self.python)
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
        try:
            self._proc = subprocess.Popen(
                [self.python, "-u", "-m", "app.simai_worker"],
                cwd=str(BACKEND_ROOT),
                stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                stderr=subprocess.DEVNULL,
                text=True, encoding="utf-8", errors="replace", env=env,
            )
        except Exception as exc:
            self.ready = False
            self.reason = "啟動 worker 失敗：%s" % exc
            return

        # 等 ready 訊息（模型載入要幾秒到幾十秒）
        line = self._proc.stdout.readline() if self._proc.stdout else ""
        if not line:
            self.ready = False
            self.reason = "worker 沒有回應就結束了"
            return
        try:
            msg = json.loads(line)
        except Exception:
            self.ready = False
            self.reason = "worker 的第一則訊息不是 JSON：%s" % line[:200]
            return
        self.ready = bool(msg.get("ready"))
        self.reason = msg.get("reason", "")
        self.load_seconds = float(msg.get("load_seconds") or 0.0)
        self.global_width = int(msg.get("global_width") or 0)
        self.residual = bool(msg.get("residual"))

    def stop(self) -> None:
        with self._lock:
            proc = self._proc
            self._proc = None
            self.ready = False
            if proc and proc.poll() is None:
                try:
                    if proc.stdin:
                        proc.stdin.write(json.dumps({"cmd": "shutdown"}) + "\n")
                        proc.stdin.flush()
                    proc.wait(timeout=5)
                except Exception:
                    proc.kill()

    @property
    def alive(self) -> bool:
        return self._proc is not None and self._proc.poll() is None

    # ── 推論 ────────────────────────────────────────────────────────
    def predict(self, config: dict | None = None, geometry_path: str | None = None,
                bc: dict | None = None, with_ci: bool = True) -> dict:
        with self._lock:
            if not self.alive:
                self._start_locked()
            if not self.ready:
                raise WorkerDead(self.reason or "SimAI worker 未就緒")

            req = {"id": str(next(self._ids)), "cmd": "predict",
                   "with_ci": bool(with_ci)}
            if geometry_path:
                req["geometry_path"] = geometry_path
            if config is not None:
                req["config"] = config
            if bc:
                req["bc"] = bc

            proc = self._proc
            assert proc is not None and proc.stdin and proc.stdout
            try:
                proc.stdin.write(json.dumps(req, ensure_ascii=False) + "\n")
                proc.stdin.flush()
            except Exception as exc:
                self.ready = False
                raise WorkerDead("送出請求失敗，worker 可能已結束：%s" % exc)

            line = proc.stdout.readline()
            if not line:
                self.ready = False
                raise WorkerDead("worker 在回應前結束了")
            msg = json.loads(line)
            if msg.get("type") == "error":
                raise RuntimeError(msg.get("message", "推論失敗"))
            return msg.get("result", {})

    def status(self) -> dict:
        return {
            "alive": self.alive,
            "ready": self.ready,
            "reason": self.reason,
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
