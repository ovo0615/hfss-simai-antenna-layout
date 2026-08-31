# -*- coding: utf-8 -*-
"""產生真天線資料集：拓樸變異 × HFSS 求解 → 遠場增益原始資料。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

用法（需要裝有 ansys-aedt-core 的外部 Python 環境）：
    python solve_dataset.py [每個拓樸的樣本數] [gRPC 埠]

輸出：runs/raw/<design_id>.json，每筆含 config 與遠場增益網格。
可重複執行——已存在的樣本會跳過，所以中斷後直接再跑一次即可續作。

取樣策略是**廣度優先**（ADR-0001）：拓樸種類多、每種少數點。
同樣的求解預算下，6 種拓樸 × 7 點遠勝於 1 種 × 42 點——
因為要模型在「拓樸」這個軸泛化，那個軸上就必須有變異。
"""

from __future__ import annotations

import json
import math
import random
import sys
import time
import zlib
from pathlib import Path

from ansys.aedt.core import Hfss

ROOT = Path(__file__).resolve().parent

# ★ 幾何定義來自 platform.json（唯一真實來源）。
# 這裡曾經有一份自己的副本，結果 L 形支架的分解與訓練網格不一致，
# HFSS 那批樣本 7/7 全滅——而且不是例外，是安靜地回傳 False。
sys.path.insert(0, str(ROOT.parent / "web_app" / "backend"))
from app.platform_model import (  # noqa: E402
    GND_H,
    GND_W,
    GROUND_SHAPES as _GS,
    ANTENNA_TRACES,
    antenna_bbox,
    hits_antenna as _hits_antenna_shared,
    PLATFORM,
    PLATFORM_ID,
    RUNS_ROOT,
    metal_boxes as _metal_boxes,
)

# 每個平台各自的產物目錄與 AEDT 專案，換天線時不會互相汙染
RAW = RUNS_ROOT / "raw"
PROJECT = str(ROOT / "dataset" / ("%s.aedt" % PLATFORM_ID))

FREQ = "%gGHz" % PLATFORM["freq_ghz"]
_ff = PLATFORM["farfield"]
THETA_STEP = int(_ff["theta_step"])
PHI_STEP = int(_ff["phi_step"])
_ANT = PLATFORM["antenna"]


# 天線導體的實際佔用區（不是一個大包圍盒）。用逐一比對才不會把
# 「貼著天線但沒碰到」的關鍵區域一起排除掉。
# 天線佔用區與碰撞判定都用共用的實作（涵蓋**所有**導體片，不只主臂）
_hits_antenna = _hits_antenna_shared
ANT_X0, ANT_X1, ANT_Y0, ANT_Y1 = antenna_bbox()

# 金屬件的取樣範圍。原本寫死成 PIFA 的尺寸，換平台就完全不合用。
_S = PLATFORM.get("sampling", {})
SMP_W = _S.get("metal_w", [16.0, 40.0])
SMP_D = _S.get("metal_d", [8.0, 20.0])
SMP_H = _S.get("metal_h", [3.0, 12.0])
SMP_FAR_Y = _S.get("far_y", [16.0, 70.0])
SMP_NEAR_TOP = _S.get("near_y_top", [GND_H + 0.5, GND_H + 3.4])
SMP_DEEP_TOP = _S.get("deep_y_top", [GND_H + 2.4, GND_H + 3.6])


def _sample_box(rng: random.Random, near_antenna: bool = False,
                deep: bool = False) -> dict:
    """在板子上／附近取一個不與天線導體重疊的金屬件位置。

    ★ `near_antenna=True` 的關鍵是讓金屬件**伸出接地板邊緣（y > 60）進到
    淨空區**，而不只是靠近天線。實測（2026-08-28）：
      · 金屬件待在接地板上（y < 60）→ 峰值 3.5~4.2 dBi，幾乎沒有效應。
        它只是一塊已經是導體的表面上的凸起。
      · 金屬件伸進 y 60~63 的淨空區 → 階段 0 實測掉到 0.71 dBi、S11 從
        −21 dB 崩到 −2.7 dB。
    第一版的排除區把 y > 59 整段擋掉，正好排除了唯一有效應的那一帶，
    導致整批樣本的增益跨度只有 0.79 dB——資料看起來很乾淨，其實沒有訊號。
    """
    for _ in range(400):
        w = rng.uniform(*SMP_W)
        d = rng.uniform(*SMP_D)
        h = rng.uniform(*SMP_H)
        if near_antenna:
            # 讓上緣落在淨空區內（接地板邊緣與天線之間）。
            # deep=True 擠到最靠近天線的那一小段，並強制與天線在 x 方向
            # 大幅重疊——那是增益真正崩掉的區域。
            y_top = rng.uniform(*(SMP_DEEP_TOP if deep else SMP_NEAR_TOP))
            y = y_top - d
            if y < 2.0:
                continue
            # 與天線的 x 範圍重疊；deep 要求重疊更多
            span = ANT_X1 - ANT_X0
            margin = min(span * 0.45, w * 0.55) if deep else min(span * 0.2, w * 0.25)
            lo = max(2.0, ANT_X0 - w + margin)
            hi = min(GND_W - w - 2.0, ANT_X1 - margin)
            if hi <= lo:
                lo, hi = 2.0, max(2.5, GND_W - w - 2.0)
            x = rng.uniform(lo, hi)
        else:
            x = rng.uniform(2.0, max(2.5, GND_W - w - 2.0))
            y = rng.uniform(SMP_FAR_Y[0], max(SMP_FAR_Y[0] + 1.0, SMP_FAR_Y[1] - d))
        if x < 1.0 or x + w > GND_W - 1.0:
            continue
        if _hits_antenna(x, y, w, d):
            continue
        return {"x": round(x, 2), "y": round(y, 2), "z": 0.0,
                "w": round(w, 2), "d": round(d, 2), "h": round(h, 2)}
    # 保底值也要跟著平台縮放，否則換小板子時會落在板外
    return {"x": round(GND_W * 0.1, 2), "y": round(GND_H * 0.35, 2), "z": 0.0,
            "w": round(SMP_W[0], 2), "d": round(SMP_D[0], 2), "h": round(SMP_H[0], 2)}


def make_config(topology: str, rng: random.Random,
                ground_shape: str = "rect") -> dict:
    """依拓樸產生一個具體組態。拓樸決定金屬件的數量與種類（不可參數化的部分），
    在拓樸之內才是位置與尺寸的連續變異。"""
    metals: list[dict] = []
    if topology == "clean":
        pass
    elif topology == "battery":
        metals.append({"name": "battery", "kind": "solid", **_sample_box(rng)})
    elif topology == "bracket":
        metals.append({"name": "bracket", "kind": "lbracket", **_sample_box(rng)})
    elif topology == "slotted":
        metals.append({"name": "frame", "kind": "slotted", **_sample_box(rng)})
    elif topology == "twin":
        a = _sample_box(rng)
        # 兩個金屬件不可互相穿插——HFSS 不接受重疊的實體，會整個求解失敗。
        for _ in range(120):
            b = _sample_box(rng)
            if (a["x"] + a["w"] < b["x"] or b["x"] + b["w"] < a["x"]
                    or a["y"] + a["d"] < b["y"] or b["y"] + b["d"] < a["y"]):
                break
        metals.append({"name": "battery", "kind": "solid", **a})
        metals.append({"name": "module", "kind": "solid", **b})
    elif topology == "battery_near":
        metals.append({"name": "battery", "kind": "solid",
                       **_sample_box(rng, near_antenna=True)})
    elif topology == "bracket_near":
        metals.append({"name": "bracket", "kind": "lbracket",
                       **_sample_box(rng, near_antenna=True)})
    elif topology == "battery_deep":
        # 最深入淨空區的一組。驗證顯示模型漏掉的正是增益崩掉的極端案例，
        # 補樣本要補在那一區——不是均勻加大資料量。
        metals.append({"name": "battery", "kind": "solid",
                       **_sample_box(rng, near_antenna=True, deep=True)})
    elif topology == "wall_near":
        # 貼著天線臂下方、與臂平行的薄高牆：最容易屏蔽掉輻射的形狀。
        #
        # ★ 淨空區（y 60~66）正是天線本體所在，所以牆只能放在那塊真正空著的
        # 區域：饋入片右緣（x > 52.5）之後、天線臂下方（y_top < 64）。
        # 第一版沒有做這個檢查，8 個樣本有 7 個的牆直接穿過饋入片，
        # 天線被實體短路，峰值增益掉到 −33 dBi——那不是環境擾動，是壞掉的幾何。
        wall = None
        for _ in range(200):
            w = rng.uniform(SMP_W[0] * 1.1, SMP_W[1])
            d = rng.uniform(1.5, 3.5)
            h = rng.uniform(SMP_H[1] * 0.7, SMP_H[1] * 2.0)
            y = rng.uniform(*SMP_NEAR_TOP) - d
            x = rng.uniform(2.0, max(2.5, GND_W - w - 2.0))
            if x + w > GND_W - 2.0 or _hits_antenna(x, y, w, d):
                continue
            wall = {"x": round(x, 2), "y": round(y, 2), "z": 0.0,
                    "w": round(w, 2), "d": round(d, 2), "h": round(h, 2)}
            break
        if wall is None:
            continue_wall = {"x": round(GND_W * 0.55, 2), "y": round(GND_H - 1.0, 2),
                             "z": 0.0, "w": round(SMP_W[0], 2), "d": 2.5,
                             "h": round(SMP_H[1], 2)}
            wall = continue_wall
        metals.append({"name": "wall", "kind": "solid", **wall})
    elif topology == "twin_near":
        near = _sample_box(rng, near_antenna=True)
        for _ in range(120):
            far = _sample_box(rng)
            if (near["x"] + near["w"] < far["x"] or far["x"] + far["w"] < near["x"]
                    or near["y"] + near["d"] < far["y"]
                    or far["y"] + far["d"] < near["y"]):
                break
        metals.append({"name": "battery", "kind": "solid", **near})
        metals.append({"name": "module", "kind": "solid", **far})
    elif topology == "battery_wall":
        metals.append({"name": "battery", "kind": "solid", **_sample_box(rng)})
        # 立在天線外側的高牆（螢幕框），尺寸相對於平台縮放
        metals.append({"name": "wall", "kind": "solid",
                       "x": round(rng.uniform(GND_W * 0.1, GND_W * 0.4), 2),
                       "y": round(ANT_Y1 + rng.uniform(1.0, 5.0), 2),
                       "z": round(-rng.uniform(GND_H * 0.03, GND_H * 0.14), 2),
                       "w": round(rng.uniform(GND_W * 0.4, GND_W * 0.7), 2),
                       "d": 2.0,
                       "h": round(rng.uniform(SMP_H[1] * 1.5, SMP_H[1] * 2.6), 2)})
    else:
        raise ValueError("未知拓樸：%s" % topology)
    return {"ground_shape": ground_shape, "freq_ghz": PLATFORM["freq_ghz"],
            "metals": metals}


def metal_boxes(metal: dict) -> list[tuple]:
    """把一個金屬件展開成實際的長方體——直接用共用的分解函式。"""
    return _metal_boxes(metal["x"], metal["y"], metal["z"],
                        metal["w"], metal["d"], metal["h"],
                        metal.get("kind", "solid"))


def build_design(hfss: Hfss, cfg: dict) -> None:
    """在既有 design 上換掉金屬件。天線與接地板固定不動。"""
    m = hfss.modeler
    for name in list(m.object_names):
        if name.startswith("mtl_"):
            m.delete(name)
    for i, metal in enumerate(cfg["metals"]):
        for j, (x, y, z, w, d, h) in enumerate(metal_boxes(metal)):
            m.create_box((x, y, z), (w, d, h),
                         name="mtl_%d_%d" % (i, j), material="copper")


GROUND_SHAPES = _GS      # 同一份定義，不再另抄一份


def create_base(hfss: Hfss, ground_shape: str = "rect") -> None:
    """接地板、天線、埠、輻射邊界、遠場球——每個接地面外型各建一次。

    ★ 天線的短路臂在 y=60 接到接地板，所以所有外型的**上緣都必須維持 y=60**，
    否則天線斷路。變異只發生在遠離天線的方向。
    """
    spec = GROUND_SHAPES[ground_shape]
    gx0, gy0, gx1, gy1 = spec["outer"]
    m = hfss.modeler
    m.model_units = "mm"
    gnd = m.create_rectangle("XY", (gx0, gy0, 0), (gx1 - gx0, gy1 - gy0), name="gnd")
    if spec["cut"]:
        cx0, cy0, cx1, cy1 = spec["cut"]
        hole = m.create_rectangle("XY", (cx0, cy0, 0), (cx1 - cx0, cy1 - cy0),
                                  name="gnd_cut")
        m.subtract(gnd, hole, keep_originals=False)
    # ★ 天線由設定檔展開：幾片、叫什麼名字、接不接地，程式都不假設。
    # 這裡曾經寫死「三片、名字叫 arm/short/feed、一定 unite 到接地面」，
    # 換成客戶的彎折單極（5 片、不接地）立刻壞掉。
    sheets = {}
    for name, (tx, ty, tw, th) in ANTENNA_TRACES:
        sheets[name] = m.create_rectangle("XY", (tx, ty, 0), (tw, th), name=name)

    _p = _ANT["port"]
    portsheet = m.create_rectangle("XY", (_p["x"], _p["y"], 0), (_p["w"], _p["h"]),
                                   name="portsheet")

    # 倒 F 之類的天線要把部分導體併進接地面；單極天線不接地（清單為空）
    to_ground = [sheets[n] for n in _ANT.get("united_with_ground", []) if n in sheets]
    if to_ground:
        m.unite([gnd] + to_ground)
        for n in _ANT.get("united_with_ground", []):
            sheets.pop(n, None)
    # 天線自己的導體片彼此相連（單極必須這樣做，否則是散開的碎片）
    self_u = [sheets[n] for n in _ANT.get("self_united", []) if n in sheets]
    if len(self_u) > 1:
        m.unite(self_u)
        for n in _ANT.get("self_united", [])[1:]:
            sheets.pop(n, None)

    alive = {gnd.name} | set(sheets)
    hfss.assign_perfecte_to_sheets(
        [n for n in _ANT["perfecte"] if n in alive or n == "gnd"])
    hfss.lumped_port(assignment=portsheet.name,
                     integration_line=[list(v) for v in _p["integration_line"]],
                     impedance=float(_p["impedance"]), name="p1", renormalize=True)
    hfss.create_open_region(frequency=FREQ)
    # 預設的 phi 只到 180（半球）。明確設成 0~350 才是完整球面。
    hfss.insert_infinite_sphere(
        name="FF3D",
        theta_start=0, theta_stop=180, theta_step=THETA_STEP,
        phi_start=0, phi_stop=360 - PHI_STEP, phi_step=PHI_STEP,
    )
    setup = hfss.create_setup("Setup1")
    dict.pop(setup.props, "Sweeps", None)   # EditSetup 不接受掃頻子區塊
    for k, v in {"Frequency": FREQ, "MaximumPasses": 8,
                 "MinimumConvergedPasses": 2, "MaxDeltaS": 0.03}.items():
        dict.__setitem__(setup.props, k, v)
    setup.update()


def extract_farfield(hfss: Hfss) -> dict:
    """取 2.45 GHz 的遠場增益網格。回傳 theta/phi 軸與展平的增益值。"""
    import numpy as np

    ff = hfss.post.get_solution_data(
        "dB(RealizedGainTotal)",
        setup_sweep_name="Setup1 : LastAdaptive",
        report_category="Far Fields", context="FF3D",
        variations={"Theta": ["All"], "Phi": ["All"], "Freq": [FREQ]},
        primary_sweep_variable="Theta")
    a = np.asarray(ff.full_matrix_real_imag[0]["dB(RealizedGainTotal)"])
    # 欄位順序：freq, phi, theta, value（已於 2026-08-28 實測確認）
    phi = np.unique(a[:, 1])
    theta = np.unique(a[:, 2])
    grid = np.full((len(phi), len(theta)), np.nan)
    pi = {v: i for i, v in enumerate(phi)}
    ti = {v: i for i, v in enumerate(theta)}
    for row in a:
        grid[pi[row[1]], ti[row[2]]] = row[3]
    return {"phi_deg": phi.tolist(), "theta_deg": theta.tolist(),
            "gain_dbi": grid.ravel().tolist(),
            "peak_gain_dbi": float(np.nanmax(grid)),
            "mean_gain_dbi": float(np.nanmean(grid))}


def clear_stale_lock(project_path: str) -> None:
    """移除已死 session 留下的 .lock，否則整批再也開不起來。

    ★ 2026-08-29 實測：批次跑到一半 AEDT session 消失，`.lock` 留在原地。
    下一次執行會在開專案時就拋 `Project is locked.`——**一個樣本都跑不了**，
    而訊息完全沒提到是哪個行程鎖的、也沒說它早就不在了。
    這個腳本本來就預期 session 會死（見下方的重啟邏輯），
    那就必須把它死掉留下的殘骸也一起處理掉。

    只在鎖檔記錄的 DesktopProcessID **確實已不存在**時才刪——
    有別的 AEDT 真的開著這個專案時絕對不能動，那會毀掉對方的工作。
    """
    import re
    import subprocess

    lock = Path(str(project_path) + ".lock")
    if not lock.is_file():
        return
    m = re.search(r"DesktopProcessID=(\d+)", lock.read_text(errors="replace"))
    if not m:
        return                      # 認不得的格式就不要亂動
    pid = m.group(1)
    alive = subprocess.run(["tasklist", "/FI", "PID eq %s" % pid],
                           capture_output=True, text=True).stdout
    if pid in alive:
        print("專案被 PID %s 鎖住，而它還活著——不動它。" % pid, flush=True)
        return
    lock.unlink()
    print("移除陳舊鎖檔（原持有者 PID %s 已不存在）" % pid, flush=True)


def main() -> None:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    per_topology = int(sys.argv[1]) if len(sys.argv) > 1 else 7
    port = int(sys.argv[2]) if len(sys.argv) > 2 else 49392

    # 順序有意義：貼近天線的拓樸排前面。它們是效應最大、對 demo 最關鍵的樣本，
    # 而這台機器的 AEDT session 會不定時死掉——重要的先跑完才不會被犧牲掉。
    # `wall_near`（薄高牆懸在淨空區上方）已停用：它的幾何會讓 HFSS 的
    # 自適應網格在 RadiatingSurface 上產生 0.25 mm 的退化片段，求解在 8 秒內
    # 失敗（Design validation 卻是 PASSED，所以看不出來）。極端區域的覆蓋
    # 已由 battery_deep／battery_near／bracket_near／twin_near 提供，
    # 不值得為這一種拓樸改動輻射邊界——那會讓既有樣本的量測條件不一致。
    topologies = ["battery_deep", "twin_near",
                  "battery_near", "bracket_near", "battery_wall",
                  "clean", "battery", "bracket", "slotted", "twin"]
    RAW.mkdir(parents=True, exist_ok=True)
    Path(PROJECT).parent.mkdir(parents=True, exist_ok=True)

    # 非矩形接地面只取樣一部分拓樸——目的是讓模型看過「接地面會變」，
    # 不需要在每種外型上重跑全部拓樸。
    SHAPE_TOPOLOGIES = ["clean", "battery", "battery_near", "battery_deep", "twin"]
    OTHER_SHAPES = ["shortgnd", "narrow", "notch"]

    jobs: list[tuple[str, str, int, dict]] = []   # (shape, topo, k, cfg)
    for topo in topologies:
        # ★ 不可以用 hash(topo)：Python 的字串 hash 每個行程都不一樣
        # （PYTHONHASHSEED 隨機化），同一個 sample id 在不同次執行會產生
        # 不同的幾何，資料集就再也無法重現。用 crc32 才是穩定的。
        rng = random.Random(zlib.crc32(topo.encode("utf-8")))
        n = 1 if topo == "clean" else per_topology
        for k in range(n):
            jobs.append(("rect", topo, k, make_config(topo, rng)))
    for shape in OTHER_SHAPES:
        for topo in SHAPE_TOPOLOGIES:
            rng = random.Random(zlib.crc32(("%s|%s" % (shape, topo)).encode("utf-8")))
            # ★ 非矩形外型原本只取 4 個。實測（2026-08-29）矩形有 65 個訓練樣本、
            # 其餘三種各只有 13 個，而峰值增益的失敗**全部集中在後者**：
            # 留出 battery_deep 時，notch 的四個樣本峰值被高估到 7.8~12.7 dBi
            # （真值約 2 dBi），narrow 也有兩個超過 3 dB。shortgnd 反而正常，
            # 所以樣本數不是唯一因素，但它是唯一便宜又可控的那一個。
            n = 1 if topo == "clean" else 7
            for k in range(n):
                jobs.append((shape, topo, k, make_config(topo, rng, shape)))

    def sample_id(shape: str, topo: str, k: int) -> str:
        # 矩形沿用原本的命名，既有的 73 個樣本才不必重跑
        return ("%s_%02d" % (topo, k) if shape == "rect"
                else "%s_%s_%02d" % (shape, topo, k))

    todo = [j for j in jobs
            if not (RAW / (sample_id(j[0], j[1], j[2]) + ".json")).exists()]
    print("總共 %d 個樣本，待求解 %d 個" % (len(jobs), len(todo)), flush=True)
    if not todo:
        print("全部已完成。", flush=True)
        return

    # 每種接地面外型各一個 design：基礎幾何（接地板＋天線＋埠＋遠場球）
    # 只建一次，之後只換金屬件。每個樣本都重建接地板會大幅增加
    # 弄壞 session 的機會，而且天線與接地板是 unite 在一起的，重建等於全部重來。
    todo.sort(key=lambda j: (j[0] != "rect", j[0]))   # 矩形優先，同外型集中

    def design_of(shape: str) -> str:
        return "ds" if shape == "rect" else "ds_%s" % shape

    def open_shape(h: Hfss, shape: str) -> Hfss:
        """切到該外型的 design，必要時建立基礎幾何。"""
        name = design_of(shape)
        if h.design_name != name:
            if name in h.design_list:
                h.set_active_design(name)
            else:
                h.insert_design(name, "Modal")
        if "gnd" not in h.modeler.object_names:
            print("  建立基礎模型（接地面外型＝%s）..." % shape, flush=True)
            create_base(h, shape)
        return h

    clear_stale_lock(PROJECT)

    # port=0 → 自己開一個專屬的非圖形化 session。
    # 長時間批次不要依賴外部管理的 session：2026-08-28 實測，
    # 借用的 session 在第 9 個樣本時消失，腳本就卡在一個永遠不會回來的
    # gRPC 呼叫上（沒有逾時、沒有錯誤，只是安靜地停住）。
    if port:
        hfss = Hfss(project=PROJECT, design="ds", solution_type="Modal",
                    port=port, new_desktop=False)
    else:
        hfss = Hfss(project=PROJECT, design="ds", solution_type="Modal",
                    version="2026.1", non_graphical=True, new_desktop=True)
    print("AEDT session：port=%s pid=%s"
          % (getattr(hfss.desktop_class, "port", "?"),
             getattr(hfss.desktop_class, "aedt_process_id", "?")), flush=True)

    def session_alive(h) -> bool:
        try:
            _ = h.desktop_class.project_list
            return True
        except Exception:
            return False

    def safe_save(h) -> None:
        """存檔失敗不該終止整批——樣本已經寫進 runs/raw 了，專案檔只是副產品。"""
        try:
            h.save_project()
        except Exception as exc:
            print("      （存檔失敗，略過：%s）" % exc, flush=True)

    def new_session():
        """開一個全新的 session。一次 PyAEDT 例外就可能讓 gRPC 連線永久壞掉
        （之後每個呼叫都是 'NoneType' object has no attribute 'objectID'），
        所以偵測到就重開，不要讓一次失敗毀掉整批。"""
        # 死掉的 session 會留下 .lock，新的 session 開同一個專案時
        # 存檔會失敗（GrpcApiError: Save）。先清掉。
        lock = Path(PROJECT + ".lock")
        try:
            if lock.exists():
                lock.unlink()
        except Exception:
            pass
        h = Hfss(project=PROJECT, design="ds", solution_type="Modal",
                 version="2026.1", non_graphical=True, new_desktop=True)
        return h

    t_start = time.time()
    consecutive_fail = 0
    cur_shape = None
    # ★ 一次暫時性失敗不該讓樣本永久消失。原本偵測到 session 壞掉會重開，
    # 但接著就跳到下一個樣本——剛才那個就沒了，而且它可能正好是
    # 殘差學習需要的基準（實測：clean_00 就這樣掉了，整個資料集建不起來）。
    # 重開 session 之後把同一個樣本重試一次。
    attempts: dict[str, int] = {}
    queue = list(todo)
    i = 0
    while queue:
        shape, topo, k, cfg = queue.pop(0)
        i += 1
        did = sample_id(shape, topo, k)
        t0 = time.time()
        try:
            if shape != cur_shape:
                hfss = open_shape(hfss, shape)
                safe_save(hfss)
                cur_shape = shape
            build_design(hfss, cfg)
            hfss.cleanup_solution(variations="All", entire_solution=True,
                                  field=True, mesh=True, linked_data=True)
            # ★ 絕對不要傳 cores：PyAEDT 1.1.0 只要 cores/gpus/tasks 任一為真
            # 就會走 set_custom_hpc_options，那條路徑會拋
            # 'HfssConstants has no attribute default_solution'，
            # 而且會把整個 gRPC session 弄壞（實測 2026-08-28，一次失敗後
            # 後續 31 個樣本全部連鎖失敗）。用 AEDT 自己的 HPC 預設就好。
            ok = hfss.analyze_setup("Setup1")
            if not ok:
                print("  [%d/%d] %s 求解失敗" % (i, len(todo), did), flush=True)
                continue

            ff = extract_farfield(hfss)
            payload = {"id": did, "topology": topo, "ground_shape": shape,
                       "config": cfg, "farfield": ff,
                       "solve_minutes": round((time.time() - t0) / 60, 2),
                       "measurement": {"freq_ghz": 2.45, "theta_step": THETA_STEP,
                                       "phi_step": PHI_STEP, "max_passes": 8,
                                       "max_delta_s": 0.03}}
            (RAW / (did + ".json")).write_text(
                json.dumps(payload, ensure_ascii=False), encoding="utf-8")
            elapsed = (time.time() - t_start) / 60
            eta = elapsed / i * (len(todo) - i)
            print("  [%d/%d] %s  peak=%.2f dBi  %.1f 分鐘  （已用 %.0f 分，預估剩 %.0f 分）"
                  % (i, len(todo), did, ff["peak_gain_dbi"],
                     payload["solve_minutes"], elapsed, eta), flush=True)
            consecutive_fail = 0
        except Exception as exc:
            consecutive_fail += 1
            n_try = attempts.get(did, 0) + 1
            attempts[did] = n_try
            print("  [%d/%d] %s 例外（第 %d 次）：%s"
                  % (i, len(todo), did, n_try, exc), flush=True)
            # 有些 PyAEDT 錯誤（例如 get_solution_data 觸發的
            # 'HfssConstants has no attribute default_solution'）是暫時性的，
            # 換一個乾淨的 session 之後重跑同一個樣本就會過。
            if not session_alive(hfss) or n_try == 1:
                print("      重開 session 並重試這個樣本 ...", flush=True)
                try:
                    hfss = new_session()
                    cur_shape = None          # 新 session 要重新切到正確的 design
                    consecutive_fail = 0
                    if n_try < 2:
                        queue.insert(0, (shape, topo, k, cfg))   # 排回隊首重試
                        i -= 1
                    print("      新 session 就緒。", flush=True)
                except Exception as exc2:
                    print("      重開失敗：%s" % exc2, flush=True)
                    break
            elif consecutive_fail >= 5:
                print("      連續 5 次失敗但 session 仍在，停止以免空燒。", flush=True)
                break

    safe_save(hfss)
    print("完成。原始資料在 %s" % RAW, flush=True)


if __name__ == "__main__":
    main()
