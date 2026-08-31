# -*- coding: utf-8 -*-
"""用 GLOW REST 訓練 SimAI 模型，並強制以「拓樸」分組留出驗證。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

用法（任何 Python 3.9+，只用標準函式庫）：
    python train_model.py <API_URL> [留出的拓樸]
例：
    python train_model.py http://127.0.0.1:53093 battery_near

★ 為什麼不呼叫 GLOW 內建的 split-test-train-data：
它是 `train_test_split(..., shuffle=True)`——**隨機**切分。
隨機切 10% 當測試集會給出一個很漂亮但毫無意義的誤差，
因為它量的是同一種拓樸內的內插，那是傳統代理模型免費就有的能力。
我們要量的是「模型沒看過的結構種類」，所以這裡直接寫入 usage 欄位，
把整個拓樸留出去（ADR-0001）。這條規則寫死在腳本裡，不留隨機切的選項——
否則趕時間的時候一定會有人（包括未來的自己）偷用。
"""

from __future__ import annotations

import json
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT.parent / "web_app" / "backend"))
from app.platform_model import RUNS_ROOT  # noqa: E402
from holdout import in_holdout  # noqa: E402

DATASET = RUNS_ROOT / "dataset"
STATE = RUNS_ROOT / "training_state.json"
OUTPUT_FIELD = "gain_residual"


class Api:
    def __init__(self, base: str) -> None:
        self.base = base.rstrip("/")

    def __call__(self, method: str, path: str, body=None):
        data = json.dumps(body).encode() if body is not None else None
        req = urllib.request.Request(
            self.base + path, data=data, method=method,
            headers={"Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=300) as resp:
                raw = resp.read().decode()
        except urllib.error.HTTPError as exc:
            raise RuntimeError("HTTP %s %s %s: %s"
                               % (exc.code, method, path, exc.read().decode()[:600]))
        return json.loads(raw) if raw.strip() else {}

    def run(self, path: str, body=None, timeout=7200, label=""):
        """long_running：POST 觸發、GET 同一路徑輪詢 MethodState。"""
        self(("POST"), path, body if body is not None else {})
        t0 = time.time()
        last = ""
        while time.time() - t0 < timeout:
            st = self("GET", path)
            status = str(st.get("status", ""))
            if status != last:
                print("    %s %s（%.0f 秒）" % (label, status, time.time() - t0), flush=True)
                last = status
            if status.lower().endswith(("completed", "finished", "failed")):
                return status, st
            time.sleep(3)
        return "timeout", {}


def main() -> None:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    api = Api(sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:53093")
    holdout = sys.argv[2] if len(sys.argv) > 2 else "battery_near"
    # ★ SimAI 的訓練是**時間預算制**的：它在這個秒數內做架構搜尋。
    # 資料變多、變多樣時，每一次試驗都更貴，固定預算就只探索得到更少／更小的模型
    # ——症狀是「加了樣本反而變差」。實測（客戶天線、同一個留出組、
    # 在完全相同的 19 個測試樣本上比較）：
    #   96 訓練樣本 ＋ 1440 秒 → MAE 0.85 dB、skill 0.287
    #  123 訓練樣本 ＋ 1440 秒 → MAE 1.08 dB、skill 0.110
    # 而同一份資料重訓一次的變異只有 0.027 skill，所以那個落差是真的。
    build_duration = float(sys.argv[3]) if len(sys.argv) > 3 else 1440.0

    designs = sorted(d for d in DATASET.iterdir() if (d / "surface.vtp").exists())
    if not designs:
        raise SystemExit("找不到資料集，請先跑 build_dataset.py")
    print("資料集：%d 個樣本，留出拓樸＝%s，訓練預算 %.0f 秒"
          % (len(designs), holdout, build_duration))

    proj = api("POST", "/projects", {"display_name": "antenna_%s" % holdout})
    pid = proj["name"].split("/")[-1]
    print("1. 建立專案 %s" % pid)

    ds = "/projects/%s/steps/data-step" % pid
    api("PATCH", ds, {"selected_path": str(DATASET)})
    api.run(ds + ":parse-design-folders", label="parse")
    api.run(ds + ":full-metadata-scan", timeout=3600, label="scan")

    state = api("GET", ds)
    folders = state.get("design_folders", [])
    ok = [f for f in folders if f.get("status") == "Ready for model"]
    print("2. 掃描完成：%d 個資料夾，%d 個可用" % (len(folders), len(ok)))
    if not ok:
        # SimAI 只說「Data could not be validated」，看不出原因。
        # 把它自己記下來的 messages 印出來，才知道是哪一關卡住的。
        for f in folders[:3]:
            print("   %s → %s｜%s" % (f.get("folder_name"), f.get("status"),
                                      "；".join(f.get("messages") or []) or "（無訊息）"))
        raise SystemExit(
            "沒有任何可用樣本。最常見的原因是設計資料夾裡有超過一個 .json"
            "（SimAI 會判定為多個邊界條件檔），或 VTP 讀不到節點。")

    # ★ 依拓樸分組，不隨機切。
    # 比對用 meta.json 記下的 topology / ground_shape 欄位，**不要用檔名前綴**——
    # 前綴會耦合到命名規則：非矩形外型的樣本叫 narrow_battery_deep_00，
    # 用 startswith("battery_deep_") 只會抓到矩形那一個，
    # 驗證集變成 n=1，而那種驗證完全沒有意義（實測踩過）。
    meta_dir = RUNS_ROOT / "meta"
    n_train = n_test = 0
    for f in folders:
        if f.get("status") != "Ready for model":
            continue
        is_holdout = in_holdout(f.get("folder_name", ""), holdout, meta_dir)
        f["usage"] = "Test" if is_holdout else "Train"
        n_test += int(is_holdout)
        n_train += int(not is_holdout)
    api("PATCH", ds, {"design_folders": folders})
    print("3. 分組（留一種拓樸）：訓練 %d、驗證 %d" % (n_train, n_test))
    if n_test == 0:
        raise SystemExit("留出的拓樸 %s 沒有任何樣本" % holdout)

    tr = "/projects/%s/steps/training-step" % pid
    api.run(tr + ":extract-domain-of-analysis", label="domain")

    api("PATCH", tr, {
        "surface_fields": [
            # region 是節點標註（接地板／天線／金屬件／遠場球）。
            # 有了它，模型的容量才不會浪費在重新發現我們本來就知道的拓樸（ADR-0004）。
            {"name": "region", "location": "point", "status": True,
             "dimension": 1, "variable_group": "Model Input"},
            # 殘差學習（ADR-0004）：學「實際 − 乾淨平台場型」而不是絕對值。
            # 外插時模型退化成乾淨天線的場型，而不是退化成垃圾。
            {"name": OUTPUT_FIELD, "location": "point", "status": True,
             "dimension": 1, "variable_group": "Model Output"},
        ],
        "model_name": "antenna_%s" % holdout,
        "build_duration": build_duration,
        # ★ 必須與 vtp_builder.boundary_conditions() 的鍵**完全一致**
        # （數量與順序都是）。不一致時 numpy 只會丟
        # "operands could not be broadcast together"，看不出問題在哪——
        # simai_worker 已經把那個訊息翻譯成看得懂的說明，但最好是別發生。
        "selected_options_bc": ["freq_ghz", "n_metals", "metal_volume_mm3"],
    })
    print("4. 設定完成，開始訓練（這一段需要授權，在 GLOW 執行器內通過）")

    t0 = time.time()
    status, st = api.run(tr + ":build-model", timeout=10800, label="build-model")
    print("5. 訓練 %s，耗時 %.1f 分鐘" % (status, (time.time() - t0) / 60))
    if str(status).lower().endswith("failed"):
        print("   例外：%s" % str(st.get("exception_message"))[:600])
        print("   堆疊：%s" % str(st.get("exception_stack"))[-800:])
        raise SystemExit(1)

    info = api("GET", tr)
    models = info.get("trained_models", [])
    if not models:
        raise SystemExit("訓練回報完成，但沒有產生模型")
    m = models[-1]
    print("6. 模型：%s  輸入=%s  輸出=%s  邊界條件=%s"
          % (m.get("user_name"), m.get("input_names"),
             m.get("output_names"), m.get("boundary_conditions")))

    STATE.parent.mkdir(parents=True, exist_ok=True)
    STATE.write_text(json.dumps({
        "project_id": pid, "api": api.base, "holdout": holdout,
        "model_user_name": m.get("user_name"), "model_fname": m.get("fname"),
        "input_names": m.get("input_names"), "output_names": m.get("output_names"),
        "boundary_conditions": m.get("boundary_conditions"),
        "n_train": n_train, "n_test": n_test,
        "build_duration": build_duration,
        "train_minutes": round((time.time() - t0) / 60, 2),
    }, ensure_ascii=False, indent=1), encoding="utf-8")
    print("狀態已寫入 %s" % STATE)
    print("模型資料夾請用 find_model 取得（見 validate_model.py）")


if __name__ == "__main__":
    main()
