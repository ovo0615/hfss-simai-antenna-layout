# -*- coding: utf-8 -*-
"""PlatformConfig → SimAI 吃得下的 .vtp（帶節點標註）。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

**只在 SimAI worker 行程裡 import**（需要 numpy 與 pyvista），
FastAPI 後端不碰這個模組。

為什麼是 VTP 不是 STL（ADR-0004）：STL 只有三角形，模型得自己從拓樸猜
「這一片是天線、那一片是電池」。VTP 每個節點可以帶 region 標註，
模型的容量才不會浪費在重新發現我們本來就知道的拓樸上。
via 專案已經付過這個學費——STL 一帶節點特徵就直接拋錯。
"""

from __future__ import annotations

import numpy as np
import pyvista as pv

from app.platform_model import (
    GND_H,
    GND_W,
    GROUND_SHAPES,
    PLATFORM,
    TRACE_RECTS,
    REGION_ANTENNA,
    REGION_GROUND,
    REGION_METAL,
    PlatformConfig,
    metal_boxes,
)

# ★ 全部從 platform.json 讀，不要在這裡再寫一份預設值。
# 這裡曾經寫死 PLATE_DIV=14 與 FF_RADIUS=80，而設定檔裡宣告的是 12 與 55——
# 看起來可設定、其實被忽略。那比沒有這個選項更糟：換平台時你以為改了，
# 但網格根本沒變，而且不會有任何錯誤訊息。
_mesh = PLATFORM.get("mesh", {})
PLATE_DIV = int(_mesh.get("plate_div", 14))
BOX_DIV = int(_mesh.get("box_div", 6))

# 遠場球：輸出場所在的位置。角度網格必須與 HFSS 的遠場取樣完全一致，
# 節點順序也必須與展平後的增益陣列一致，否則場會錯位而完全看不出來。
_ff = PLATFORM.get("farfield", {})
FF_RADIUS = float(_ff.get("radius", 80.0))
FF_CENTER = (GND_W / 2.0, GND_H / 2.0, 0.0)
FF_THETA_STEP = int(_ff.get("theta_step", 10))
FF_PHI_STEP = int(_ff.get("phi_step", 10))
REGION_FARFIELD = 4


def farfield_angles() -> tuple[np.ndarray, np.ndarray]:
    """(phi, theta) 角度軸，與 pipeline/solve_dataset.py 的遠場球設定一致。"""
    theta = np.arange(0.0, 180.0 + 1e-6, float(FF_THETA_STEP))
    phi = np.arange(0.0, 360.0 - FF_PHI_STEP + 1e-6, float(FF_PHI_STEP))
    return phi, theta


def farfield_points() -> np.ndarray:
    """遠場球的節點座標，順序為 (phi 外層, theta 內層)——
    與 solve_dataset.py 展平 gain 網格的順序相同。"""
    phi, theta = farfield_angles()
    pv_, tv_ = np.meshgrid(phi, theta, indexing="ij")
    p = np.radians(pv_.ravel())
    t = np.radians(tv_.ravel())
    x = FF_CENTER[0] + FF_RADIUS * np.sin(t) * np.cos(p)
    y = FF_CENTER[1] + FF_RADIUS * np.sin(t) * np.sin(p)
    z = FF_CENTER[2] + FF_RADIUS * np.cos(t)
    return np.column_stack([x, y, z]).astype("float32")


def _farfield_mesh() -> pv.PolyData:
    """把遠場球節點包成一張 PolyData。用 vertex cell——
    我們要的是節點上的場，不需要面。"""
    pts = farfield_points()
    mesh = pv.PolyData(pts)
    mesh.verts = np.column_stack([
        np.ones(len(pts), dtype=np.int64), np.arange(len(pts), dtype=np.int64)
    ]).ravel()
    return mesh


def _plate(x0: float, y0: float, w: float, h: float, z: float,
           nx: int, ny: int) -> pv.PolyData:
    """z 平面上的矩形板，細分成 nx×ny 的網格。"""
    xs = np.linspace(x0, x0 + w, nx + 1)
    ys = np.linspace(y0, y0 + h, ny + 1)
    grid = pv.StructuredGrid(*np.meshgrid(xs, ys, [z], indexing="ij"))
    return grid.extract_surface().triangulate()


def _box_surface(x0: float, y0: float, z0: float,
                 w: float, d: float, h: float, div: int) -> pv.PolyData:
    """長方體的表面（六面），細分後合併。"""
    box = pv.Box(bounds=(x0, x0 + w, y0, y0 + d, z0, z0 + h))
    surf = box.triangulate()
    for _ in range(max(0, div // 3)):
        surf = surf.subdivide(1)
    return surf


def build_surface(cfg: PlatformConfig, with_farfield: bool = True) -> pv.PolyData:
    """把一個環境組態變成一張帶 region 標註的網格。

    region 值：1=接地板、2=天線、3=金屬件、4=遠場球（見 platform_model 的常數）。

    ★ 訓練資料與推論輸入**必須由同一個函式產生**。節點數或順序只要差一點，
    模型就會安靜地把場對到錯的位置上——不會報錯，只會給出看似合理的錯圖。
    """
    parts: list[tuple[pv.PolyData, int]] = []

    # 接地板。外型定義來自 platform_model.GROUND_SHAPES（唯一真實來源），
    # HFSS 建模與前端預覽都照同一份定義，三邊才不會對不上。
    spec = GROUND_SHAPES.get(cfg.ground_shape, GROUND_SHAPES["rect"])
    x0, y0, x1, y1 = spec["outer"]
    # 細分數依實際尺寸調整，讓不同外型的節點密度一致
    nx = max(6, round(PLATE_DIV * (x1 - x0) / GND_W))
    ny = max(6, round(PLATE_DIV * (y1 - y0) / GND_H))
    gnd = _plate(x0, y0, x1 - x0, y1 - y0, 0.0, nx, ny)
    if spec["cut"]:
        cx0, cy0, cx1, cy1 = spec["cut"]
        hole = pv.Box(bounds=(cx0, cx1, cy0, cy1, -1.0, 1.0))
        gnd = gnd.clip_box(hole, invert=True).extract_surface().triangulate()
    parts.append((gnd, REGION_GROUND))

    # 天線：三片固定的平面導體（泛化軸的定義——它不變）
    for (x, y, w, h) in TRACE_RECTS:
        parts.append((_plate(x, y, w, h, 0.0, 8, 4), REGION_ANTENNA))

    # 金屬件。分解方式來自 platform_model.metal_boxes（唯一真實來源），
    # HFSS 建模與前端預覽都呼叫同一個函式，三者才不會對不上。
    for m in cfg.metals:
        for bx, by, bz, bw, bd, bh in metal_boxes(m.x, m.y, m.z, m.w, m.d, m.h, m.kind):
            parts.append((_box_surface(bx, by, bz, bw, bd, bh, BOX_DIV), REGION_METAL))

    # 遠場球一定放在最後，這樣它的節點就是尾端連續的一段，
    # 可以直接用 [-n_ff:] 對上展平的增益陣列。
    if with_farfield:
        parts.append((_farfield_mesh(), REGION_FARFIELD))

    merged = None
    regions: list[np.ndarray] = []
    for mesh, region in parts:
        regions.append(np.full(mesh.n_points, region, dtype="float32"))
        # ★ merge_points=False 是必要的：預設會把重合節點合併掉，
        # 那會讓節點數與 region 陣列對不上，也會打亂尾端遠場球的對齊——
        # 而且不會報錯，只會給出對到錯位置的場。
        merged = mesh if merged is None else merged.merge(mesh, merge_points=False)

    assert merged is not None
    region_arr = np.concatenate(regions)
    if len(region_arr) != merged.n_points:
        raise RuntimeError(
            "節點數不符：region 標註 %d 個、網格 %d 個。"
            "合併時可能發生了節點合併，遠場球的對齊已不可信。"
            % (len(region_arr), merged.n_points))
    merged["region"] = region_arr
    return merged


def n_farfield_nodes() -> int:
    phi, theta = farfield_angles()
    return len(phi) * len(theta)


def boundary_conditions(cfg: PlatformConfig) -> dict[str, float]:
    """純量輸入。**鍵順序必須與訓練時一致**——SimAI 直接取 .values()
    排成陣列，順序錯了不會報錯，只會安靜地算出錯的答案（見 simai skill 2.7）。
    """
    return {
        "freq_ghz": float(cfg.freq_ghz),
        "n_metals": float(len(cfg.metals)),
        "metal_volume_mm3": float(sum(m.w * m.d * m.h for m in cfg.metals)),
        # ★ 這裡**試過**加入接地面外型（面積），結果更差，已移除。
        # 動機是合理的：模型對板子長什麼樣沒有明確訊號，只能從網格推斷，
        # 而接地面是輻射體的一部分。但實測（160 樣本、留出 battery_deep）：
        #
        #   全域特徵 3 個 → skill 0.569、notch 峰值誤差 8.52 dB
        #   全域特徵 4 個 → skill 0.493、notch 峰值誤差 9.67 dB（全部板型都變差）
        #   全域特徵 6 個 → 訓練跑滿 3 小時未收斂而逾時
        #
        # 與「樣本 96→123 反而讓 skill 從 0.287 掉到 0.110」是同一個現象：
        # **這個模型在目前的訓練預算下已到容量上限，加任何東西都會變差。**
        # 要再加輸入，得先解決容量／預算，不是單獨加特徵。
        # （ground_metrics() 保留在 platform_model，供未來重試時使用。）
    }
