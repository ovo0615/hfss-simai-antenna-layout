# -*- coding: utf-8 -*-
"""把 HFSS 原始資料轉成 SimAI Pro 吃得下的設計資料夾。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

用法（必須用 SimAI Pro 的 venv python，需要 pyvista）：
    "<SimAI>\\definitions\\simai_pro\\.venv\\Scripts\\python.exe" build_dataset.py

輸入：runs/raw/<id>.json（solve_dataset.py 產生）
輸出：runs/dataset/<id>/surface.vtp ＋ boundary_conditions.json

每個樣本的網格 = 平台表面（幾何變異）＋ 遠場球（輸出場所在）。
SimAI 的模型是「輸入網格 → 同一張網格上的場」，所以要預測遠場，
遠場球就必須是同一張網格的一部分——平台提供幾何訊號，球承載答案。
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent
BACKEND = ROOT.parent / "web_app" / "backend"
sys.path.insert(0, str(BACKEND))

from app.platform_model import RUNS_ROOT  # noqa: E402
from app.platform_model import (  # noqa: E402
    hits_antenna,
    PlatformConfig,
)
from app.vtp_builder import (  # noqa: E402
    REGION_FARFIELD,
    boundary_conditions,
    build_surface,
    farfield_angles,
    n_farfield_nodes,
)

RAW = RUNS_ROOT / "raw"
OUT = RUNS_ROOT / "dataset"
META = RUNS_ROOT / "meta"
BASELINE = RUNS_ROOT / "baseline.json"
DOMAIN = RUNS_ROOT / "domain.json"

# 殘差學習（ADR-0004）：模型學的是「實際場型 − 乾淨平台場型」。
# 三個好處：模型只需要學金屬件造成的擾動、需要的資料量大幅下降；
# 殘差的動態範圍小、數值上好訓練；最重要的是**外插時退化成乾淨天線的
# 場型，而不是退化成垃圾**——那是純資料模型最危險的失效模式，
# 而 demo 現場觀眾拖出來的組態本來就常常在訓練分布之外。
RESIDUAL_FIELD = "gain_residual"
BASELINE_ID = "clean_00"


def _overlapping_metal(config: dict, margin: float = 0.5) -> str | None:
    """回傳第一個與天線導體重疊的金屬件名稱，沒有就回 None。

    用共用的 hits_antenna（涵蓋設定檔裡的**所有**導體片）——
    這裡曾經自己抄一份三片的清單，換一支天線就完全失效。"""
    for m in config.get("metals", []):
        if hits_antenna(m["x"], m["y"], m["w"], m["d"], margin):
            return str(m.get("name", "?"))
    return None


def cap_per_group(files: list[Path]) -> list[Path]:
    """每個（接地面外型, 拓樸）最多取 N 個樣本（環境變數 DATASET_MAX_PER_GROUP）。

    ★ 用途：**在不重跑 HFSS 的前提下**做樣本數實驗。
    求解一次很貴，但「少用一些樣本來訓練」應該要免費。

    這是被實測逼出來的（2026-08-29）：客戶天線從每組 4 個增加到 7 個
    （訓練樣本 96 → 123）之後，在**完全相同的 19 個測試樣本**上
    MAE 反而從 0.85 惡化到 1.08 dB、skill 從 0.287 掉到 0.119。
    已排除兩個解釋——不是訓練的隨機性（同一份資料重訓兩次只差 0.027 skill、
    逐樣本 MAE 相關 0.971），也不是訓練時間預算不足
    （預算加到 3 倍只回到 0.145）。**原因未明。**

    沒有這個開關，要回到比較好的那個設定就只能刪掉原始資料——
    那等於把已經付出的 HFSS 成本丟掉，而且不可逆。
    """
    import os

    cap = os.environ.get("DATASET_MAX_PER_GROUP")
    if not cap:
        return files
    # 兩種寫法："4"（所有板型都一樣）或 "*=7,narrow=4,notch=4"（逐板型指定）。
    # 需要逐板型是因為資料集本來就不對稱：矩形取樣 7 個、其餘 4 個。
    # 一律套同一個數字會連矩形一起砍掉，那是**另一個**設定，不是還原。
    limits: dict[str, int] = {}
    if "=" in cap:
        for part in cap.split(","):
            k, _, v = part.partition("=")
            limits[k.strip()] = int(v)
        default = limits.pop("*", 10 ** 6)
    else:
        default = int(cap)
    seen: dict[tuple[str, str], int] = {}
    kept, dropped = [], 0
    for f in files:
        j = json.loads(f.read_text(encoding="utf-8"))
        cfg = j.get("config") or {}
        key = (j.get("ground_shape") or cfg.get("ground_shape", "rect"),
               j.get("topology") or "?")
        if "clean" in j["id"]:
            kept.append(f)          # 基準樣本一律保留
            continue
        seen[key] = seen.get(key, 0) + 1
        if seen[key] <= limits.get(key[0], default):
            kept.append(f)
        else:
            dropped += 1
    print("樣本上限 %s：保留 %d、略過 %d（原始資料未刪除）"
          % (cap, len(kept), dropped))
    return kept


def main() -> None:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    files = sorted(RAW.glob("*.json"))
    if not files:
        raise SystemExit("找不到原始資料，請先跑 solve_dataset.py")
    files = cap_per_group(files)
    OUT.mkdir(parents=True, exist_ok=True)

    phi_ax, theta_ax = farfield_angles()
    n_ff = n_farfield_nodes()

    # 量測條件必須一致——不同刻度的尺量出來的數字不可混進同一欄。
    # via 專案就是在這裡被 20 GHz 的樣本汙染過訓練集（見 simai skill 3 節）。
    conditions: dict[str, int] = {}
    written, skipped = 0, []

    for f in files:
        data = json.loads(f.read_text(encoding="utf-8"))
        meas = data.get("measurement", {})
        key = json.dumps(meas, sort_keys=True)
        conditions[key] = conditions.get(key, 0) + 1

    main_condition = max(conditions, key=lambda k: conditions[k])

    # 基準場型：乾淨平台（無金屬件）的遠場。殘差以它為原點。
    #
    # ★ 殘差的基準只需要**一致**，不必是特定那一個樣本——它就是一個固定的
    # 參考原點。首選的 clean_00 若因求解失敗而缺席，就退而用其他外型的
    # clean 樣本，而不是讓整個資料集建不起來（實測踩過：客戶天線的
    # rect design 壞掉，61 個樣本只差這一個，整條管線就卡住）。
    # ★ 每種接地面外型用**自己的** clean 樣本當原點。
    # 全部共用一個基準時，殘差裡會混進「板型 A vs 板型 B」的差異——
    # 實測那個差異是 0.83~3.06 dB，跟模型的 MAE 同一個量級甚至更大，
    # 等於逼模型把力氣花在學板型差異，而不是金屬件的擾動。
    # 實測（2026-08-29）：共用基準讓要學的目標放大 32~38%。
    baselines: dict[str, np.ndarray] = {}
    for p in sorted(RAW.glob("*.json")):
        j = json.loads(p.read_text(encoding="utf-8"))
        if "clean" not in j["id"]:
            continue
        shape = j.get("ground_shape") or j.get("config", {}).get("ground_shape", "rect")
        baselines.setdefault(shape, np.asarray(j["farfield"]["gain_dbi"],
                                               dtype="float32"))
    if not baselines:
        raise SystemExit(
            "找不到任何 clean 樣本。殘差學習需要乾淨平台的解——"
            "請先讓 solve_dataset.py 跑出 clean 拓樸。")
    default_shape = "rect" if "rect" in baselines else sorted(baselines)[0]
    base_gain = baselines[default_shape]     # 沒有對應基準的外型用這個
    print("殘差基準：每種外型各自的 clean 樣本 %s（預設 %s）"
          % (sorted(baselines), default_shape))
    BASELINE.write_text(json.dumps({
        "by_shape": {k: [round(float(x), 4) for x in v] for k, v in baselines.items()},
        "default_shape": default_shape,
        "field": RESIDUAL_FIELD,
        "n_farfield": int(len(base_gain)),
        "gain_dbi": [round(float(v), 4) for v in base_gain],   # 相容舊格式
    }, ensure_ascii=False), encoding="utf-8")

    for f in files:
        data = json.loads(f.read_text(encoding="utf-8"))
        did = data["id"]
        meas = data.get("measurement", {})
        if json.dumps(meas, sort_keys=True) != main_condition:
            skipped.append((did, "量測條件與主群不符"))
            continue

        # ★ 品質閘：金屬件不可與天線導體重疊。
        # 重疊等於把天線實體短路，解出來的 −20~−33 dBi 不是「環境擾動」，
        # 是壞掉的幾何。含已知壞解的訓練集比小一點的乾淨訓練集更糟——
        # 模型會把幾何錯誤學成一種設計特徵，而且完全看不出來。
        hit = _overlapping_metal(data["config"])
        if hit:
            skipped.append((did, "金屬件「%s」與天線導體重疊（peak %.1f dBi）"
                            % (hit, data["farfield"]["peak_gain_dbi"])))
            continue

        ff = data["farfield"]
        gain = np.asarray(ff["gain_dbi"], dtype="float32")
        if (len(ff["phi_deg"]) != len(phi_ax) or len(ff["theta_deg"]) != len(theta_ax)
                or len(gain) != n_ff):
            skipped.append((did, "遠場網格與預期不符（%d 點，預期 %d）" % (len(gain), n_ff)))
            continue
        if not np.isfinite(gain).all():
            skipped.append((did, "遠場資料含 NaN"))
            continue

        cfg = PlatformConfig.from_dict(data["config"])
        mesh = build_surface(cfg, with_farfield=True)

        region = np.asarray(mesh["region"])
        ff_mask = region == REGION_FARFIELD
        if int(ff_mask.sum()) != n_ff:
            skipped.append((did, "網格中的遠場節點數不符"))
            continue

        # 平台節點沒有遠場值。填一個物理上惰性的值，模型很容易學會，
        # 也不會被誤讀成某種訊號。誤差只在遠場節點上評估。
        field = np.full(mesh.n_points, float(gain.min()), dtype="float32")
        field[ff_mask] = gain
        mesh["gain_dbi"] = field          # 真值，驗證時比對用

        # 殘差才是模型的輸出目標。平台節點填 0（沒有擾動）。
        # 用**這個樣本自己板型**的基準，殘差才只含金屬件的擾動。
        shape = data.get("ground_shape") or cfg.ground_shape
        residual = np.zeros(mesh.n_points, dtype="float32")
        residual[ff_mask] = gain - baselines.get(shape, base_gain)
        mesh[RESIDUAL_FIELD] = residual

        d = OUT / did
        d.mkdir(parents=True, exist_ok=True)
        mesh.save(d / "surface.vtp", binary=True)
        bc = boundary_conditions(cfg)
        (d / "boundary_conditions.json").write_text(
            json.dumps(bc, ensure_ascii=False, indent=1), encoding="utf-8")

        # ★ meta 必須寫在設計資料夾**外面**。SimAI 的資料掃描規則是
        # 「資料夾裡超過一個 .json 就判定為多個邊界條件檔」而整個退件——
        # 實測 49 個資料夾因為多了一個 meta.json 全部變成不可用，
        # 而 UI 只說「Data could not be validated」，看不出是這個原因。
        META.mkdir(parents=True, exist_ok=True)
        (META / (did + ".json")).write_text(json.dumps({
            "id": did, "topology": data["topology"],
            "topology_id": cfg.topology_id,
            "peak_gain_dbi": ff["peak_gain_dbi"],
            "mean_gain_dbi": ff["mean_gain_dbi"],
            "solve_minutes": data.get("solve_minutes"),
            "config": data["config"],
        }, ensure_ascii=False), encoding="utf-8")
        written += 1

    # ── 訓練定義域 ────────────────────────────────────────────────
    # 模型的信心指標（GP 變異）**抓不到「輸入超出訓練範圍」**：
    # 實測給它 8 個金屬件（訓練最多 2 個）或一塊 80×45×40 的巨石，
    # 信心值只有 0.89（黃燈），而不是該有的紅燈。
    # 所以另外記下訓練資料真正涵蓋的範圍，由後端逐項比對。
    accepted = [json.loads((META / (d.name + ".json")).read_text(encoding="utf-8"))
                for d in OUT.iterdir() if (META / (d.name + ".json")).exists()]
    metals = [m for a in accepted for m in a["config"].get("metals", [])]

    def rng(vals):
        return [round(min(vals), 2), round(max(vals), 2)] if vals else None

    domain = {
        "n_samples": len(accepted),
        "ground_shapes": sorted({a["config"].get("ground_shape", "rect") for a in accepted}),
        # 有自己 clean 樣本、因此殘差原點正確的板型。
        # 板型在訓練集裡、卻沒有自己的基準（例如那個 clean 樣本求解失敗），
        # 推論時會**靜靜地**退回別的板型當原點——加回錯的原點，
        # 而定義域檢查原本看不出來，因為板型本身確實訓練過。
        "baseline_shapes": sorted(baselines),
        "freq_ghz": rng([a["config"].get("freq_ghz", 2.45) for a in accepted]),
        "n_metals": rng([len(a["config"].get("metals", [])) for a in accepted]),
        "metal_kinds": sorted({m.get("kind", "solid") for m in metals}),
        "metal_w": rng([m["w"] for m in metals]),
        "metal_d": rng([m["d"] for m in metals]),
        "metal_h": rng([m["h"] for m in metals]),
        "metal_x": rng([m["x"] for m in metals]),
        "metal_y": rng([m["y"] for m in metals]),
        "metal_z": rng([m["z"] for m in metals]),
        "metal_top_y": rng([m["y"] + m["d"] for m in metals]),
        "total_volume_mm3": rng([sum(m["w"] * m["d"] * m["h"]
                                     for m in a["config"].get("metals", []))
                                 for a in accepted]),
        "peak_gain_dbi": rng([a["peak_gain_dbi"] for a in accepted]),
    }
    DOMAIN.write_text(json.dumps(domain, ensure_ascii=False, indent=1), encoding="utf-8")

    print("=" * 62)
    print("SimAI 訓練資料集")
    print("=" * 62)
    print("寫出 %d 個樣本 → %s" % (written, OUT))
    if written:
        sample = next(OUT.iterdir())
        import pyvista as pv
        m = pv.read(sample / "surface.vtp")
        print("每個樣本：%d 節點（其中遠場球 %d），欄位 %s"
              % (m.n_points, n_ff, m.array_names))
        res_all = []
        for d in OUT.iterdir():
            mm = pv.read(d / "surface.vtp")
            sel = np.asarray(mm["region"]) == REGION_FARFIELD
            res_all.append(np.asarray(mm[RESIDUAL_FIELD])[sel])
        res = np.concatenate(res_all)
        print("殘差目標 %s：範圍 %.2f ~ %.2f dB，標準差 %.2f（基準＝%s）"
              % (RESIDUAL_FIELD, res.min(), res.max(), res.std(),
                 "每種外型各自的 clean"))
        print("邊界條件：%s" % list(json.loads(
            (sample / "boundary_conditions.json").read_text(encoding="utf-8")).keys()))
    topo = {}
    for mf in META.glob("*.json"):
        t = json.loads(mf.read_text(encoding="utf-8"))["topology"]
        topo[t] = topo.get(t, 0) + 1
    print("拓樸分布：%s" % topo)
    print("訓練定義域已寫出 → %s" % DOMAIN.name)
    print("  接地面 %s｜金屬件 %s 個｜種類 %s"
          % (domain["ground_shapes"], domain["n_metals"], domain["metal_kinds"]))
    print("  尺寸 w %s d %s h %s（mm）｜上緣 y %s"
          % (domain["metal_w"], domain["metal_d"], domain["metal_h"],
             domain["metal_top_y"]))
    # 設計資料夾裡只能有一個 .json（邊界條件），多一個就整批退件
    bad = [d.name for d in OUT.iterdir()
           if d.is_dir() and len(list(d.glob("*.json"))) != 1]
    if bad:
        print("⚠ 這些資料夾的 .json 數量不是 1，SimAI 會退件：%s" % bad[:5])
    for did, why in skipped:
        print("  排除 %s：%s" % (did, why))


if __name__ == "__main__":
    main()
