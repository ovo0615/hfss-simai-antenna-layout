# -*- coding: utf-8 -*-
"""把訓練好的模型打包成一個 zip，讓別人拿到就能跑。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

用法（一般 Python 即可，不需要 SimAI 的 venv）：
    python pipeline/model_bundle.py pack   [輸出.zip]
    python pipeline/model_bundle.py unpack <輸入.zip>
    set PLATFORM_CONFIG=customer_iot_monopole   # 換平台

★ 為什麼需要這個
訓練好的模型**不在版本庫裡**，它是 SimAI 的產物，存在
`%APPDATA%\\Ansys\\glow\\Simai_ProSolution\\project_files\\<專案id>\\...`
底下，而且約 85 MB——超過 GitHub 單檔上限，也不該進版本控制。

沒有這支腳本的話，任何人 clone 之後都得先自己跑完整條管線
（HFSS 求解 ＋ SimAI 訓練，2~3 小時）工具才會動。
那等於「只有訓練它的那台機器能 demo」。

打包內容：
  model/                模型檔（.pi 與 .pt）
  runs/*.json           基準、定義域、驗證報告、劇本組態
  manifest.json         平台、留出組、基準指紋

★ 還原時會**重寫 active_model.json 的 model_dir**指向解開後的位置。
不重寫的話，它會指向打包那台機器的 APPDATA 路徑——那個路徑在別人的
機器上不存在，而 worker 只會說「尚未設定訓練好的模型」，
不會告訴你是因為路徑來自別人的電腦。
"""

from __future__ import annotations

import hashlib
import json
import os
import shutil
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT.parent / "web_app" / "backend"))

from app.platform_model import PLATFORM_ID, PROJECT_ROOT, RUNS_ROOT  # noqa: E402

# 隨模型一起走的設定檔。少了任何一個，工具都會用「看起來正常但是錯的」
# 方式運作（見各檔在 build_dataset / validate_model 裡的說明）。
CONFIG_FILES = [
    "active_model.json",     # 模型位置與殘差基準的指紋
    "baseline.json",         # 殘差原點（每種板型一份）
    "active_domain.json",    # 與這個模型一起快照的定義域
    "domain.json",
    "validation.json",       # 驗證報告分頁的資料
    "scenarios.json",        # 劇本組態（留出樣本＋真解）
    "training_state.json",
]


def _sha16(p: Path) -> str:
    return hashlib.sha256(p.read_bytes()).hexdigest()[:16]


def pack(out: Path) -> None:
    am_path = RUNS_ROOT / "active_model.json"
    if not am_path.exists():
        raise SystemExit("找不到 %s——請先跑 validate_model.py。" % am_path)
    am = json.loads(am_path.read_text(encoding="utf-8"))
    # model_dir 可能是版本庫相對路徑（還原過的）、%APPDATA% 前綴（剛訓練完的），
    # 也可能是絕對路徑。三種都要吃得下。
    model_dir = Path(os.path.expandvars(am["model_dir"]))
    if not model_dir.is_absolute():
        model_dir = PROJECT_ROOT / model_dir
    if not model_dir.is_dir():
        raise SystemExit(
            "模型目錄不存在：%s\n"
            "GLOW 的專案目錄可能已被清掉，需要重新訓練。" % model_dir)

    manifest = {
        "platform": PLATFORM_ID,
        "model_name": am.get("model_name"),
        "output_field": am.get("output_field"),
        "input_fields": am.get("input_fields"),
        "holdout": am.get("holdout"),
        "baseline_sha": am.get("baseline_sha"),
        "trained_from": am.get("trained_from"),
        "files": [],
    }

    out.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as z:
        for f in sorted(model_dir.rglob("*")):
            if not f.is_file():
                continue
            z.write(f, "model/" + f.relative_to(model_dir).as_posix())
            manifest["files"].append("model/" + f.relative_to(model_dir).as_posix())
        for name in CONFIG_FILES:
            p = RUNS_ROOT / name
            if p.exists():
                z.write(p, "runs/" + name)
                manifest["files"].append("runs/" + name)
        b = RUNS_ROOT / "baseline.json"
        if b.exists():
            manifest["baseline_sha_actual"] = _sha16(b)
        z.writestr("manifest.json", json.dumps(manifest, ensure_ascii=False, indent=1))

    size = out.stat().st_size
    print("已打包 %s" % out)
    print("  平台 %s／留出 %s／%d 個檔案／%.1f MB"
          % (manifest["platform"], manifest["holdout"],
             len(manifest["files"]), size / 1e6))
    if manifest.get("baseline_sha") and manifest.get("baseline_sha_actual") \
            and manifest["baseline_sha"] != manifest["baseline_sha_actual"]:
        print("  ⚠ 警告：baseline.json 與模型記錄的指紋不符——"
              "這個模型與現在的殘差基準已經脫鉤，請重新訓練後再打包。")
    if size > 2_000_000_000:
        print("  ⚠ 超過 GitHub Release 單檔 2 GB 上限。")
    else:
        print("  發佈方式：GitHub Releases（版本庫本身放不下 85 MB 的模型）")


def unpack(src: Path) -> None:
    if not src.exists():
        raise SystemExit("找不到 %s" % src)
    dest_model = RUNS_ROOT / "model"
    with zipfile.ZipFile(src) as z:
        try:
            manifest = json.loads(z.read("manifest.json").decode("utf-8"))
        except KeyError:
            raise SystemExit("這個 zip 沒有 manifest.json，不是本工具打包的。")
        if manifest.get("platform") != PLATFORM_ID:
            raise SystemExit(
                "平台不符：這個包是「%s」的，但目前的 PLATFORM_CONFIG 是「%s」。\n"
                "★ 載入另一支天線的模型不會報錯，只會給出看似合理的錯答案，"
                "所以這裡直接擋下來。\n"
                "請設定 PLATFORM_CONFIG=%s 之後再還原。"
                % (manifest.get("platform"), PLATFORM_ID, manifest.get("platform")))

        if dest_model.exists():
            shutil.rmtree(dest_model)
        dest_model.mkdir(parents=True)
        RUNS_ROOT.mkdir(parents=True, exist_ok=True)
        for name in z.namelist():
            if name.startswith("model/"):
                rel = name[len("model/"):]
                if rel:
                    t = dest_model / rel
                    t.parent.mkdir(parents=True, exist_ok=True)
                    t.write_bytes(z.read(name))
            elif name.startswith("runs/"):
                t = RUNS_ROOT / name[len("runs/"):]
                t.parent.mkdir(parents=True, exist_ok=True)
                t.write_bytes(z.read(name))

    # ★ 重寫 model_dir。打包那台機器的 APPDATA 路徑在這裡不存在，
    # 而 worker 只會說「尚未設定訓練好的模型」，不會說是路徑來自別人的電腦。
    am_path = RUNS_ROOT / "active_model.json"
    am = json.loads(am_path.read_text(encoding="utf-8"))
    old = am.get("model_dir", "")
    # ★ 寫**版本庫相對路徑**，不要寫絕對路徑。絕對路徑有兩個問題：
    # 它在別人的機器上無效，而且會把打包者的目錄結構寫進版本庫。
    # 讀取端（simai_client）會把相對路徑接回專案根目錄。
    try:
        am["model_dir"] = dest_model.relative_to(PROJECT_ROOT).as_posix()
        am["baseline"] = (RUNS_ROOT / "baseline.json").relative_to(PROJECT_ROOT).as_posix()
    except ValueError:                      # 不在專案底下就只能寫絕對路徑
        am["model_dir"] = str(dest_model)
        am["baseline"] = str(RUNS_ROOT / "baseline.json")
    am["restored_from"] = src.name
    am_path.write_text(json.dumps(am, ensure_ascii=False, indent=1), encoding="utf-8")

    # 指紋要一併確認：模型學的是「相對某個原點的差」，
    # 換掉原點卻沒重訓，推論會加回錯的原點——數字看起來完全合理，但是錯的。
    b = RUNS_ROOT / "baseline.json"
    ok = (not am.get("baseline_sha")) or (not b.exists()) or \
         _sha16(b) == am["baseline_sha"]

    print("已還原 %s" % src.name)
    print("  平台     %s（留出 %s）" % (manifest["platform"], manifest.get("holdout")))
    print("  模型     %s" % dest_model)
    print("  原路徑   %s" % (old or "（無）"))
    print("  基準指紋 %s" % ("一致" if ok else "★不一致——請重新訓練★"))
    print()
    print("現在可以直接啟動 web_app\\start.bat，不需要再跑訓練。")


def main() -> None:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    if len(sys.argv) < 2 or sys.argv[1] not in ("pack", "unpack"):
        print(__doc__)
        raise SystemExit(1)
    if sys.argv[1] == "pack":
        default = ROOT.parent / ("model_%s.zip" % PLATFORM_ID)
        pack(Path(sys.argv[2]) if len(sys.argv) > 2 else default)
    else:
        if len(sys.argv) < 3:
            raise SystemExit("unpack 需要指定 zip 檔路徑。")
        unpack(Path(sys.argv[2]))


if __name__ == "__main__":
    main()
