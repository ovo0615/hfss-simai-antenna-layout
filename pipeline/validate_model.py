# -*- coding: utf-8 -*-
"""在留出的拓樸上驗證模型，產生報告檢視要用的數據。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

用法（必須用 SimAI Pro 的 venv python）：
    "<SimAI>\\...\\python.exe" validate_model.py

讀 runs/training_state.json 找到模型，對留出拓樸的每個樣本做推論，
與 HFSS 真解比對，寫出 runs/validation.json。

量的是**跨拓樸泛化**——模型沒看過的結構種類。這比隨機切分難得多，
也是唯一有意義的問題：demo 現場觀眾拖出來的組態，模型本來就沒看過。
"""

from __future__ import annotations

import json
import os
import sys
import time
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent
BACKEND = ROOT.parent / "web_app" / "backend"
sys.path.insert(0, str(BACKEND))
from app.platform_model import RUNS_ROOT  # noqa: E402
from holdout import in_holdout  # noqa: E402

PROJECT_ROOT = ROOT.parent

# ★ 追蹤中的 JSON 不可以帶本機絕對路徑。
# 實測踩過兩次：validation.json 與 active_model.json 的 model_dir 是
# GLOW 寫在 %APPDATA% 底下的目錄，直接照抄就把使用者名稱推上版本庫；
# 手動改掉之後，下一次重新訓練又原封不動寫回來——**手改救不了會被覆寫的檔案，
# 要改的是寫出它的那一行。** 讀取端（simai_client._from_config）已經會
# 展開 %VAR% 並把相對路徑接回專案根目錄。
def _portable(p) -> str:
    if not p:
        return ""
    q = Path(p)
    try:
        return q.relative_to(PROJECT_ROOT).as_posix()
    except ValueError:
        pass
    for var in ("APPDATA", "LOCALAPPDATA", "USERPROFILE"):
        root = os.environ.get(var)
        if not root:
            continue
        try:
            return "%%%s%%\%s" % (var, q.relative_to(root))
        except ValueError:
            continue
    return str(q)


DATASET = RUNS_ROOT / "dataset"
META = RUNS_ROOT / "meta"
STATE = RUNS_ROOT / "training_state.json"
OUT = RUNS_ROOT / "validation.json"
BASELINE = RUNS_ROOT / "baseline.json"
TRUTH_FIELD = "gain_dbi"   # VTP 裡的絕對值真值（不是訓練目標）

# 階段 0 事先寫定的停損門檻（不是事後湊的）
THRESHOLDS = {
    "peak_gain_db": {"pass": 1.0, "grey": 2.0},
    "pattern_mae_db": {"pass": 1.5, "grey": 3.0},
}


def _calib_uncertainty(samples: list[dict]) -> dict | None:
    """用留出樣本的信心值分布，算出這個模型自己的門檻。"""
    u = sorted(x["uncertainty"] for x in samples if x.get("uncertainty") is not None)
    if len(u) < 5:
        return None
    lo, hi, med = u[0], u[-1], u[len(u) // 2]
    spread = (hi - lo) / med if med else 0.0
    return {
        "n": len(u),
        "min": round(lo, 4), "max": round(hi, 4), "median": round(med, 4),
        # 相對變動幅度。太小就代表這個指標對這個模型沒有鑑別度。
        "relative_spread": round(spread, 4),
        # 綠/黃 與 黃/紅 的分界：留出分布的 60% 與 90% 分位。
        # 意思變成「相對這個模型自己而言，這次算得比平常難嗎」。
        "p60": round(u[int(0.60 * (len(u) - 1))], 4),
        "p90": round(u[int(0.90 * (len(u) - 1))], 4),
        # 實測門檻：相對變動小於 5% 時，連排序都沒意義
        "usable": bool(spread >= 0.05),
    }


def _sha(path: Path) -> str:
    import hashlib
    return hashlib.sha256(path.read_bytes()).hexdigest()[:16] if path.exists() else ""


def _by_shape(samples: list[dict]) -> dict:
    """逐接地面外型的誤差，讓報告說得出「哪一種板型不能用」。"""
    out: dict[str, dict] = {}
    for s in samples:
        shp = (s.get("config") or {}).get("ground_shape", "rect")
        out.setdefault(shp, {"n": 0, "peak": [], "pattern": []})
        out[shp]["n"] += 1
        out[shp]["peak"].append(s["peak_error_db"])
        out[shp]["pattern"].append(s["pattern_mae_db"])
    for shp, d in out.items():
        d["peak_gain_mae_db"] = round(float(np.mean(d.pop("peak"))), 3)
        d["pattern_mae_db"] = round(float(np.mean(d.pop("pattern"))), 3)
        d["verdict_peak"] = verdict(d["peak_gain_mae_db"], "peak_gain_db")
    return out


def verdict(value: float, key: str) -> str:
    t = THRESHOLDS[key]
    if value < t["pass"]:
        return "pass"
    return "grey" if value < t["grey"] else "stop"


def _model_dir_from_disk(project_id: str) -> tuple[str, str] | None:
    """直接從磁碟找模型，不經過 GLOW 的 storage scope。

    ★ 為什麼需要這條路：GLOW 的 storage scope 鎖是**日期粒度**的，
    它會驗證「到期日必須在未來」。剛過午夜時到期日仍落在當天，
    驗證就失敗——訊息是看不懂的
    `storage scope client has expired ... Date should be in the future`。
    模型檔本來就在可預測的位置，不必為了拿一個路徑而依賴那個鎖。
    """
    import os

    root = Path(os.environ.get("APPDATA", "")) / "Ansys" / "glow" / \
        "Simai_ProSolution" / "project_files" / project_id
    if not root.is_dir():
        return None
    pis = sorted(root.rglob("*.pi"), key=lambda p: p.stat().st_mtime, reverse=True)
    if not pis:
        return None
    return str(pis[0].parent), pis[0].stem


def resolve_model_dir(state: dict) -> tuple[str, str]:
    try:
        from ansys.saf.glow.client import Client
        from ansys.solutions.simai_pro.solution.definition import Simai_ProSolution

        client = Client[Simai_ProSolution](Simai_ProSolution, url=state["api"])
        project = client.get_project("projects/%s" % state["project_id"])
        m = project.steps.training_step.trained_models[-1]
        with project.get_storage_scope() as scope:
            return str(scope.get_cached(m.path)), m.fname
    except Exception as exc:
        found = _model_dir_from_disk(state["project_id"])
        if not found:
            raise
        print("（GLOW storage scope 不可用，改從磁碟找模型：%s）" % str(exc)[:90])
        return found


def main() -> None:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    state = json.loads(STATE.read_text(encoding="utf-8"))
    holdout = state["holdout"]
    model_dir, fname = resolve_model_dir(state)
    print("模型：%s（%s）" % (model_dir, fname))

    from ansys.solutions.simai_pro.datamodel.enums import VTKLocationEnum
    from ansys.solutions.simai_pro.datamodel.vtk import VTKField
    from ansys.solutions.simai_pro.logic.graph_model_util import GraphModel, PredictionData

    from app.vtp_builder import REGION_FARFIELD, farfield_angles

    t0 = time.perf_counter()
    gm = GraphModel(model_path=model_dir, model_name=fname)
    gm.load_model()
    print("載入模型 %.1f 秒（免授權）" % (time.perf_counter() - t0))

    out_fields = [VTKField(name=state["output_names"][0],
                           location=VTKLocationEnum.POINT, dimension=1)]
    input_names = list(state.get("input_names") or [])
    bc_names = list(state["boundary_conditions"])

    # 殘差模型：預測出來的是「與乾淨平台的差」，要加回基準才是絕對增益。
    base = None
    base_by_shape: dict = {}
    if BASELINE.exists() and state["output_names"][0] != TRUTH_FIELD:
        _b = json.loads(BASELINE.read_text(encoding="utf-8"))
        base = np.asarray(_b["gain_dbi"], dtype="float32")
        base_by_shape = {k: np.asarray(v, dtype="float32")
                         for k, v in (_b.get("by_shape") or {}).items()}
        print("殘差模式：每種外型各自的基準 %s" % (sorted(base_by_shape) or "（單一基準）"))

    import pyvista as pv

    phi_ax, theta_ax = farfield_angles()

    # ── 笨基線：訓練集場型的平均 ─────────────────────────────────────
    # 沒有這個對照，報告會騙人。這個天線的場型本來就長得差不多
    # （實測樣本兩兩之間的平均差只有 0.21 dB），所以一個「永遠輸出平均場型」
    # 的模型也能輕鬆通過 1.5 dB 的 MAE 門檻。真正要問的是：
    # **模型比什麼都不學好多少**（skill score）。
    train_patterns = []
    for d in sorted(DATASET.iterdir()):
        if not (META / (d.name + ".json")).exists():
            continue
        if in_holdout(d.name, holdout, META):
            continue
        m = pv.read(d / "surface.vtp")
        sel = np.asarray(m["region"]) == REGION_FARFIELD
        train_patterns.append(np.asarray(m[TRUTH_FIELD])[sel])
    baseline = np.mean(np.vstack(train_patterns), axis=0) if train_patterns else None

    samples = []
    for d in sorted(DATASET.iterdir()):
        meta_f = META / (d.name + ".json")
        if not meta_f.exists() or not in_holdout(d.name, holdout, META):
            continue
        meta = json.loads(meta_f.read_text(encoding="utf-8"))

        mesh = pv.read(d / "surface.vtp")
        region = np.asarray(mesh["region"])
        ff = region == REGION_FARFIELD
        truth = np.asarray(mesh[TRUTH_FIELD])[ff]     # 一律比對絕對增益

        bc_all = json.loads((d / "boundary_conditions.json").read_text(encoding="utf-8"))
        bc = {k: bc_all[k] for k in bc_names}      # 順序必須與訓練時一致

        t = time.perf_counter()
        data = PredictionData(geometry_path=str(d / "surface.vtp"), entered_bc=bc,
                              input_names=input_names, output_fields=out_fields,
                              data_location=VTKLocationEnum.POINT)
        raw = gm.predict(data.X_coords, X_node_feat=data.X_node_feat,
                         X_global_feat=data.X_global_feat, CI=0.9)
        dt = time.perf_counter() - t
        arr = np.asarray(raw[0] if isinstance(raw, list) else raw)
        pred_all = arr[0, :, 0] if arr.ndim == 3 else arr.reshape(-1)
        band = float(np.mean(arr[2, ff, 0] - arr[1, ff, 0])) if arr.ndim == 3 else None
        pred = pred_all[ff]
        if base is not None:
            # 用**這個樣本板型**的基準，才是它訓練時用的那個原點
            shp = (meta.get("config") or {}).get("ground_shape", "rect")
            pred = pred + base_by_shape.get(shp, base)

        peak_err = abs(float(pred.max()) - float(truth.max()))
        mae = float(np.mean(np.abs(pred - truth)))
        base_mae = (float(np.mean(np.abs(baseline - truth)))
                    if baseline is not None else None)
        base_peak_err = (abs(float(baseline.max()) - float(truth.max()))
                         if baseline is not None else None)
        samples.append({
            "id": meta["id"],
            "topology": meta["topology"],
            "baseline_mae_db": None if base_mae is None else round(base_mae, 3),
            "baseline_peak_error_db": (None if base_peak_err is None
                                       else round(base_peak_err, 3)),
            "hfss_peak_dbi": round(float(truth.max()), 3),
            "simai_peak_dbi": round(float(pred.max()), 3),
            "peak_error_db": round(peak_err, 3),
            "pattern_mae_db": round(mae, 3),
            "uncertainty": None if band is None else round(band, 3),
            "predict_seconds": round(dt, 3),
            "hfss_solve_minutes": meta.get("solve_minutes"),
            "config": meta["config"],
            "truth_pattern": [round(float(v), 2) for v in truth],
            "pred_pattern": [round(float(v), 2) for v in pred],
        })
        print("  %-16s HFSS %.2f  SimAI %.2f  誤差 %.2f dB  MAE %.2f dB  %.2f 秒"
              % (meta["id"], truth.max(), pred.max(), peak_err, mae, dt))

    if not samples:
        raise SystemExit("留出拓樸 %s 沒有樣本" % holdout)

    peak_errs = [s["peak_error_db"] for s in samples]
    maes = [s["pattern_mae_db"] for s in samples]
    base_maes = [s["baseline_mae_db"] for s in samples if s["baseline_mae_db"] is not None]
    base_peaks = [s["baseline_peak_error_db"] for s in samples
                  if s["baseline_peak_error_db"] is not None]
    base_mae_mean = float(np.mean(base_maes)) if base_maes else None
    # skill score：1 表示完美、0 表示與笨基線一樣、負值表示比不學還糟。
    skill = (round(1.0 - float(np.mean(maes)) / base_mae_mean, 3)
             if base_mae_mean else None)
    summary = {
        "baseline_pattern_mae_db": (None if base_mae_mean is None
                                    else round(base_mae_mean, 3)),
        "baseline_peak_mae_db": (round(float(np.mean(base_peaks)), 3)
                                 if base_peaks else None),
        "skill_score": skill,
        # ★ 信心指標的**校準**。它的絕對尺度隨模型而變（實測同一支天線的
        # 不同訓練，留出樣本的信心值中位數從 0.55 到 4.4 都有），
        # 所以介面用固定門檻（<0.5 綠 / >1.2 紅）沒有意義——
        # 有的模型永遠綠、有的永遠紅，兩種都等於沒有資訊。
        #
        # 更糟的是它常常**幾乎不變**：實測某個模型 29 個留出樣本的信心值
        # 落在 1.350~1.354（變動只有中位數的 0.3%），而同一批樣本的
        # 場型 MAE 差了 12.7 倍。那種情況下它連「相對高低」都排不出來。
        #
        # 所以把這個模型自己的分布記下來，讓介面用相對位置著色，
        # 並在鑑別度太低時直接說「這個模型的信心指標沒有鑑別度」。
        "uncertainty_calibration": _calib_uncertainty(samples),
        # 逐板型拆開。★ 單一個總平均會把「大部分板型是好的」藏起來：
        # 實測留出 battery_deep 時總平均 2.98 dB（判定 stop），
        # 但那完全是 notch 一種板型拉出來的（8.52 dB），
        # 其餘三種是 0.67 / 1.46 / 1.48 dB——都在門檻內。
        # 只報一個數字，使用者會以為整個模型不能用。
        "by_ground_shape": _by_shape(samples),
        # 可學的訊號量。skill 是比值，這是它的分母；沒有它就分不出
        # 「模型沒學好」與「本來就沒東西可學」。
        "learnable_signal_db": (round(float(base_mae_mean), 3)
                                if base_mae_mean else None),
        "low_skill_reason": (
            None if (skill is None or skill >= 0.15)
            else ("平台不敏感" if base_mae_mean and base_mae_mean < 1.5
                  else "模型未學好")),
        "holdout_topology": holdout,
        "n_train": state["n_train"],
        "n_test": len(samples),
        "train_minutes": state.get("train_minutes"),
        "peak_gain_mae_db": round(float(np.mean(peak_errs)), 3),
        "peak_gain_max_db": round(float(np.max(peak_errs)), 3),
        "pattern_mae_db": round(float(np.mean(maes)), 3),
        "median_predict_seconds": round(float(np.median(
            [s["predict_seconds"] for s in samples])), 3),
        "mean_hfss_minutes": round(float(np.mean(
            [s["hfss_solve_minutes"] or 0 for s in samples])), 2),
        "thresholds": THRESHOLDS,
        "verdict_peak": verdict(float(np.mean(peak_errs)), "peak_gain_db"),
        "verdict_pattern": verdict(float(np.mean(maes)), "pattern_mae_db"),
        "farfield_grid": {"phi_deg": phi_ax.tolist(), "theta_deg": theta_ax.tolist()},
        "model_dir": _portable(model_dir),
        "model_fname": fname,
        "input_names": input_names,
        "boundary_conditions": bc_names,
    }
    summary["speedup"] = (
        round(summary["mean_hfss_minutes"] * 60 / summary["median_predict_seconds"])
        if summary["median_predict_seconds"] > 0 else None)

    OUT.write_text(json.dumps({"summary": summary, "samples": samples},
                              ensure_ascii=False), encoding="utf-8")

    # ── demo 的劇本組態 ───────────────────────────────────────────
    # 用**留出驗證樣本**當劇本，而不是隨手挑的組態：它們是模型沒看過的、
    # 又有同一套量測條件下的 HFSS 真解，並排比較才有意義。
    # 另外附上乾淨平台當參考點（殘差的基準）。
    scenarios = []
    clean_meta = META / "clean_00.json"
    if clean_meta.exists() and base is not None:
        cm = json.loads(clean_meta.read_text(encoding="utf-8"))
        scenarios.append({
            "key": "乾淨平台（基準）",
            "config": cm["config"],
            "hfss_truth": {"peak_gain_dbi": cm["peak_gain_dbi"],
                           "solve_minutes": cm.get("solve_minutes")},
            "truth_pattern": [round(float(v), 2) for v in base],
            "in_training": True,
        })
    for s in samples:
        scenarios.append({
            "key": s["id"],
            "config": s["config"],
            "hfss_truth": {"peak_gain_dbi": s["hfss_peak_dbi"],
                           "solve_minutes": s["hfss_solve_minutes"]},
            "truth_pattern": s["truth_pattern"],
            "in_training": False,      # 留出樣本：模型沒看過
        })
    (RUNS_ROOT / "scenarios.json").write_text(
        json.dumps({"holdout": holdout, "scenarios": scenarios},
                   ensure_ascii=False), encoding="utf-8")
    print("劇本組態已寫出：%d 個（含 %d 個模型沒看過的留出樣本）"
          % (len(scenarios), len(samples)))

    # ★ 定義域必須跟著**模型**走，不是跟著資料集走。
    # runs/domain.json 是 build_dataset.py 產生的，描述的是「目前的資料集」；
    # 但工具載入的可能是更舊的模型。實測踩過：資料集加了 4 種接地面外型後，
    # 守衛立刻說「四種都在範圍內」，而當時載入的模型只看過矩形一種——
    # 守衛會理直氣壯地放行它根本沒學過的輸入。
    # 所以在這裡把定義域快照進 active_domain.json，與模型同時產生。
    domain_src = RUNS_ROOT / "domain.json"
    if domain_src.exists():
        snap = json.loads(domain_src.read_text(encoding="utf-8"))
        snap["snapshot_of_model"] = state["project_id"]
        snap["holdout"] = holdout
        # ★ 留出的那一組**不在**模型的定義域裡——它整組被排除在訓練之外。
        # domain.json 描述的是資料集，直接照抄會讓守衛替模型背書
        # 它根本沒學過的輸入。實測：留出 notch 的模型 skill score 是 −0.04
        # （比笨基線還差），但守衛若照抄資料集就會說 notch「在範圍內」。
        if holdout in (snap.get("ground_shapes") or []):
            snap["ground_shapes"] = [g for g in snap["ground_shapes"] if g != holdout]
            snap["excluded_by_holdout"] = holdout
        (RUNS_ROOT / "active_domain.json").write_text(
            json.dumps(snap, ensure_ascii=False, indent=1), encoding="utf-8")

    # 讓 web_app 不必帶參數就能找到這個模型
    (RUNS_ROOT / "active_model.json").write_text(json.dumps({
        "model_dir": _portable(model_dir),
        "model_name": fname,
        "output_field": state["output_names"][0],
        "input_fields": ",".join(input_names),
        "baseline": _portable(BASELINE) if base is not None else "",
        # ★ 基準檔的指紋。殘差模型學的是「相對某個原點的差」，
        # 換掉原點卻不重訓，推論就會加回錯的原點——數字看起來完全合理，
        # 不會有任何錯誤。實測：把 PIFA 改成每板型基準卻沒重訓，
        # narrow/notch/shortgnd 的絕對增益會偏掉最多 3 dB。
        # 存指紋，讓 worker 啟動時就能擋下來。
        "baseline_sha": (_sha(BASELINE) if base is not None else ""),
        "holdout": holdout,
        "trained_from": state["project_id"],
    }, ensure_ascii=False, indent=1), encoding="utf-8")
    print()
    print("=" * 62)
    print("留一種拓樸驗證（留出 %s）" % holdout)
    print("=" * 62)
    print("訓練 %d 樣本 / 驗證 %d 樣本" % (summary["n_train"], summary["n_test"]))
    print("峰值增益平均誤差 %.2f dB（門檻 <1.0 通過、<2.0 灰區）→ %s"
          % (summary["peak_gain_mae_db"], summary["verdict_peak"]))
    print("場型逐點 MAE %.2f dB（門檻 <1.5 通過、<3.0 灰區）→ %s"
          % (summary["pattern_mae_db"], summary["verdict_pattern"]))
    if summary["baseline_pattern_mae_db"] is not None:
        print("笨基線（永遠輸出訓練集平均場型）MAE %.2f dB，skill score %.3f"
              % (summary["baseline_pattern_mae_db"], summary["skill_score"]))
        if summary["skill_score"] is not None and summary["skill_score"] < 0.15:
            # ★ skill 低有兩種完全不同的原因，處理方式相反，報告必須分得出來：
            #   (a) 模型沒學好      → 要更多樣本／改模型
            #   (b) 本來就沒東西可學 → 這支天線對這些擾動不敏感，
            #                          「不必糾結擺放位置」本身就是有用的答案
            # 笨基線的 MAE 就是「可學的訊號有多大」：留出樣本離訓練集平均多遠。
            # 實測：同樣是 battery_deep，PIFA 離平均 3.02 dB、
            # 客戶蜿蜒單極只有 1.11 dB——後者的 skill 再怎麼調都上不去，
            # 因為分母本來就小，而模型的絕對誤差有下限。
            sig = summary["baseline_pattern_mae_db"]
            print("  ⚠ 模型幾乎沒有勝過笨基線——通過門檻不代表學到東西。")
            if sig < 1.5:
                print("     但**可學的訊號本來就只有 %.2f dB**（留出樣本離訓練集"
                      "平均場型的距離）。" % sig)
                print("     這比較像是「這個平台對這些擾動不敏感」，而不是"
                      "「模型沒學好」——")
                print("     對客戶而言，『金屬件怎麼擺影響都不大』本身就是結論。")
                print("     要判斷是哪一種：換一支對擾動敏感的天線、或加大擾動"
                      "幅度，看 skill 會不會跟著上去。")
            else:
                print("     可學的訊號有 %.2f dB，不算小 → 比較像是模型沒學好，"
                      "優先加樣本。" % sig)
    bs = summary.get("by_ground_shape") or {}
    if len(bs) > 1:
        worst = max(bs.items(), key=lambda kv: kv[1]["peak_gain_mae_db"])
        okay = [k for k, v in bs.items() if v["verdict_peak"] != "stop"]
        if worst[1]["verdict_peak"] == "stop" and okay:
            print("逐板型拆開後：問題集中在單一板型，不是整個模型")
            for shp, d in sorted(bs.items(), key=lambda kv: -kv[1]["peak_gain_mae_db"]):
                print("   %-10s n=%2d  峰值 %5.2f dB  場型 %5.2f dB  → %s"
                      % (shp, d["n"], d["peak_gain_mae_db"],
                         d["pattern_mae_db"], d["verdict_peak"]))
            print("   → 「%s」不可用；其餘 %s 在門檻內"
                  % (worst[0], "、".join(sorted(okay))))
    print("推論 %.3f 秒 vs HFSS %.1f 分鐘 → 快 %s 倍"
          % (summary["median_predict_seconds"], summary["mean_hfss_minutes"],
             summary["speedup"]))
    print("已寫入 %s" % OUT)


if __name__ == "__main__":
    main()
