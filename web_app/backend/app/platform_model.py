# -*- coding: utf-8 -*-
"""平台的參數化定義——從 `platform.json` 載入。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

平台由三部分組成（見 CONTEXT.md 的詞彙定義）：
  1. 接地板：外型可變（接地面形狀是拓樸變異的一部分）
  2. 天線：**固定不變**（泛化軸的定義，見 ADR-0001）
  3. 金屬件：代表電池、螢幕框、支架；位置、尺寸、種類皆可變

★ 幾何定義集中在專案根目錄的 `platform.json`。
在那之前，同一份定義重複在四個地方（本檔、vtp_builder、solve_dataset、
前端 geometry.ts），每改一次就要手動同步四處——這個專案裡已經因此
出過三次錯（L 形分解讓 HFSS 全滅、接地面外型、金屬件種類）。
**換一支天線＝改 platform.json，不是改四處程式碼。**

單位一律 mm，接地板位於 z=0 平面，座標原點在接地板左下角。
"""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Literal

import os

PROJECT_ROOT = Path(__file__).resolve().parents[3]
DEFAULT_CONFIG = PROJECT_ROOT / "platform.json"
# 用環境變數切換平台（換一支天線＝換一份設定檔）。
# 名稱可以是完整路徑，或 platforms/ 底下的檔名（可省略 .json）。
CONFIG_PATH = Path(os.environ.get("PLATFORM_CONFIG") or DEFAULT_CONFIG)


def resolve_config(name: str | Path) -> Path:
    p = Path(name)
    if p.is_file():
        return p
    for cand in (PROJECT_ROOT / "platforms" / p.name,
                 PROJECT_ROOT / "platforms" / (p.name + ".json")):
        if cand.is_file():
            return cand
    return p


def load_platform(path: Path | str | None = None) -> dict:
    """載入平台定義。找不到就是硬錯誤——安靜地用預設值會讓
    訓練網格與 HFSS 模型悄悄對不上，那種錯不會報，只會給出錯的答案。"""
    p = resolve_config(path if path else CONFIG_PATH)
    if not p.is_file():
        raise FileNotFoundError(
            "找不到平台定義 %s。它是幾何的唯一真實來源，缺了就無法保證"
            "訓練網格與 HFSS 模型一致。" % p)
    return json.loads(p.read_text(encoding="utf-8"))


PLATFORM = load_platform()

# ★ 每個平台的產物必須分開存放。路徑原本寫死成 runs/raw，
# 換一支天線後客戶的樣本會跟原本的混進同一個資料夾——
# 那正是管線再三警告的「不同量測條件混用」，而且完全看不出來。
PLATFORM_ID: str = resolve_config(CONFIG_PATH).stem
RUNS_ROOT: Path = (PROJECT_ROOT / "pipeline" / "runs"
                   if PLATFORM_ID == "platform"
                   else PROJECT_ROOT / "pipeline" / "runs" / PLATFORM_ID)

# ── 由設定檔展開成模組層級常數（下游程式碼沿用原本的名稱）──────────────
_g = PLATFORM["ground"]
GND_W: float = float(_g["w"])
GND_H: float = float(_g["h"])
FREQ_GHZ: float = float(PLATFORM["freq_ghz"])

ANTENNA_TRACES: list[tuple[str, tuple[float, float, float, float]]] = [
    (t["name"], (float(t["x"]), float(t["y"]), float(t["w"]), float(t["h"])))
    for t in PLATFORM["antenna"]["traces"]
]
# ★ 這裡曾經有 IFA_ARM / IFA_SHORT / IFA_FEED 三個別名，把導體片的**名字**
# 寫死了。換一支客戶天線（彎折單極，5 片，沒有叫 arm 的片）立刻 KeyError。
# 天線是幾片、叫什麼名字，都由設定檔決定，程式不該假設。
TRACE_RECTS: list[tuple[float, float, float, float]] = [r for _, r in ANTENNA_TRACES]
CLEARANCE_Y: float = GND_H      # 淨空區起始 y（接地板上緣）

MetalKind = Literal["solid", "slotted", "lbracket"]
GroundShape = Literal["rect", "shortgnd", "narrow", "notch"]

# 每個金屬件種類拆成幾個長方體，比例相對於該件的 w/d/h。
# 分量之間不可互相穿插，否則 HFSS 求解直接失敗（實測 7/7 全滅）。
METAL_KINDS: dict[str, list[list[float]]] = {
    k: v for k, v in PLATFORM["metal_kinds"].items() if not k.startswith("_")
}


def metal_boxes(x: float, y: float, z: float, w: float, d: float, h: float,
                kind: str) -> list[tuple[float, float, float, float, float, float]]:
    """把一個金屬件展開成實際的長方體清單。

    ★ HFSS 建模、訓練網格、前端預覽都必須用這一個函式的結果，
    否則三者會對不上——而且不會報錯，只會安靜地訓練出錯的模型。"""
    out = []
    for fx, fy, fz, fw, fd, fh in METAL_KINDS.get(kind, METAL_KINDS["solid"]):
        out.append((x + fx * w, y + fy * d, z + fz * h,
                    fw * w, fd * d, fh * h))
    return out

# ── 接地面外型 ────────────────────────────────────────────────────────
# 客戶最常問的其實不是「金屬件放哪」，是「板子外型改了，天線還行嗎」。
# 接地面本身就是天線的一部分（它是輻射體），改變它的效應往往比擺一塊
# 金屬還大。
#
# ★ 物理限制：天線的短路臂在 y=60 接到接地板，所以**不能從天線那一側縮板**，
# 否則天線直接斷路。所有變異都發生在遠離天線的方向，天線本身完全不動
# （泛化軸的定義，見 ADR-0001）。
#
# 每個外型 = 主矩形 (x0, y0, x1, y1) ＋ 可選的挖空矩形。
# 這份定義是唯一真實來源：HFSS 建模（pipeline/solve_dataset.py）、
# 訓練網格（vtp_builder.py）與前端預覽（geometry.ts）必須逐項對應。
GROUND_SHAPES: dict[str, dict] = {
    k: {"outer": tuple(v["outer"]),
        "cut": tuple(v["cut"]) if v.get("cut") else None,
        "label": v.get("label", k)}
    for k, v in PLATFORM["ground_shapes"].items() if not k.startswith("_")
}

# 節點標註（寫進 VTP 的 region 陣列，見 ADR-0004）
REGION_GROUND = 1
REGION_ANTENNA = 2
REGION_METAL = 3


@dataclass
class MetalPart:
    """一個金屬件。座標為左下角，尺寸為 (寬, 深, 高)。"""

    name: str
    kind: MetalKind
    x: float
    y: float
    z: float
    w: float
    d: float
    h: float

    def bounds(self) -> tuple[float, float, float, float, float, float]:
        return (self.x, self.x + self.w, self.y, self.y + self.d,
                self.z, self.z + self.h)


@dataclass
class PlatformConfig:
    """一個環境組態。`topology_id` 是留一種拓樸驗證的分組鍵。"""

    ground_shape: GroundShape = "rect"
    metals: list[MetalPart] = field(default_factory=list)
    freq_ghz: float = FREQ_GHZ

    @property
    def topology_id(self) -> str:
        """拓樸組態的識別：接地面形狀＋金屬件種類組合（不含位置尺寸）。

        這是 GroupKFold 的 group——同一個 topology_id 的樣本絕不可
        跨越訓練／驗證的邊界，否則量到的是組內內插（見 ADR-0001）。
        """
        kinds = "-".join(sorted(m.kind for m in self.metals)) or "none"
        return "%s__%s__n%d" % (self.ground_shape, kinds, len(self.metals))

    def to_dict(self) -> dict:
        return {
            "ground_shape": self.ground_shape,
            "freq_ghz": self.freq_ghz,
            "topology_id": self.topology_id,
            "metals": [
                {"name": m.name, "kind": m.kind, "x": m.x, "y": m.y, "z": m.z,
                 "w": m.w, "d": m.d, "h": m.h}
                for m in self.metals
            ],
        }

    @classmethod
    def from_dict(cls, data: dict) -> "PlatformConfig":
        return cls(
            ground_shape=data.get("ground_shape", "rect"),
            freq_ghz=float(data.get("freq_ghz", FREQ_GHZ)),
            metals=[
                MetalPart(
                    name=m.get("name", "metal_%d" % i),
                    kind=m.get("kind", "solid"),
                    x=float(m["x"]), y=float(m["y"]), z=float(m.get("z", 0.0)),
                    w=float(m["w"]), d=float(m["d"]), h=float(m["h"]),
                )
                for i, m in enumerate(data.get("metals", []))
            ],
        )


def ground_metrics(shape: str) -> tuple[float, float, float]:
    """接地面的（面積, 外框寬, 外框高），單位 mm。

    ★ 為什麼要把這個餵給模型：原本的全域特徵只有頻率、金屬件數量與體積，
    **完全沒有接地面外型的資訊**——板子長什麼樣，GNN 只能自己從網格幾何推斷。
    接地面本身就是天線的輻射體，改它的效應往往比擺一塊金屬還大，
    卻是模型唯一拿不到明確訊號的那個變因。

    面積是必要的：`notch` 與 `rect` 的外框完全相同（100×60），
    只有面積差得出來（6000 vs 5272 mm²）。只給外框尺寸的話，
    模型從全域特徵看這兩者是一模一樣的。
    """
    spec = GROUND_SHAPES.get(shape) or GROUND_SHAPES["rect"]
    x0, y0, x1, y1 = spec["outer"]
    area = (x1 - x0) * (y1 - y0)
    if spec.get("cut"):
        cx0, cy0, cx1, cy1 = spec["cut"]
        area -= (cx1 - cx0) * (cy1 - cy0)
    return float(area), float(x1 - x0), float(y1 - y0)


def clearance_intrusion(cfg: PlatformConfig) -> float:
    """金屬件侵入淨空區的最短距離（mm）。負值代表已經蓋到天線上。

    這不是給模型用的，是給 UI 顯示「這樣擺離天線多近」，
    以及給取樣器擋掉「金屬件穿過天線」這種非物理的組態。
    """
    best = float("inf")
    for m in cfg.metals:
        x0, x1, y0, y1, _, _ = m.bounds()
        # 量到**任何一片**天線導體的最短距離。原本只量到主臂，
        # 那是把「天線＝一根臂」寫死了——客戶的彎折單極有 5 片。
        for tx, ty, tw, th in TRACE_RECTS:
            ax0, ax1, ay0, ay1 = tx, tx + tw, ty, ty + th
            dx = max(ax0 - x1, x0 - ax1, 0.0)
            dy = max(ay0 - y1, y0 - ay1, 0.0)
            if dx == 0.0 and dy == 0.0:
                best = min(best, -min(x1 - ax0, ax1 - x0, y1 - ay0, ay1 - y0))
            else:
                best = min(best, (dx * dx + dy * dy) ** 0.5)
    return best if best != float("inf") else float("inf")


def antenna_bbox() -> tuple[float, float, float, float]:
    """所有天線導體片的包圍盒 (x0, x1, y0, y1)。
    取樣器用它決定「靠近天線」是什麼意思，不必知道天線長什麼樣。"""
    xs0 = [r[0] for r in TRACE_RECTS]
    xs1 = [r[0] + r[2] for r in TRACE_RECTS]
    ys0 = [r[1] for r in TRACE_RECTS]
    ys1 = [r[1] + r[3] for r in TRACE_RECTS]
    return (min(xs0), max(xs1), min(ys0), max(ys1))


def hits_antenna(x: float, y: float, w: float, d: float,
                 margin: float = 0.5) -> bool:
    """金屬件是否與任何一片天線導體重疊（含餘裕）。
    重疊等於把天線實體短路，HFSS 會解出沒有物理意義的結果。"""
    for tx, ty, tw, th in TRACE_RECTS:
        if not (x + w < tx - margin or x > tx + tw + margin
                or y + d < ty - margin or y > ty + th + margin):
            return True
    return False


def clean_platform() -> PlatformConfig:
    """乾淨平台——殘差學習的基準組態（見 ADR-0004）。"""
    return PlatformConfig(ground_shape="rect", metals=[])


# ── demo 的劇本組態（有預存 HFSS 真解，見 ADR 對照組決策）─────────────────
SCRIPTED_CONFIGS: dict[str, PlatformConfig] = {
    "A_clean": clean_platform(),
    "B_battery": PlatformConfig(
        ground_shape="rect",
        metals=[MetalPart("battery", "solid", 56.0, 52.0, 0.0, 30.0, 11.0, 6.0)],
    ),
    "C_battery_wall": PlatformConfig(
        ground_shape="rect",
        metals=[
            MetalPart("battery", "solid", 56.0, 52.0, 0.0, 30.0, 11.0, 6.0),
            MetalPart("wall", "solid", 20.0, 69.0, -5.0, 60.0, 2.0, 25.0),
        ],
    ),
}

# 對應的 HFSS 真解（pipeline/stage0/premise_A.aedt 實測，2026-08-28）
SCRIPTED_TRUTH: dict[str, dict] = {
    "A_clean": {"peak_gain_dbi": 3.44, "s11_db": -21.2, "solve_minutes": 3.3},
    "B_battery": {"peak_gain_dbi": 0.71, "s11_db": -2.7, "solve_minutes": 4.2},
    "C_battery_wall": {"peak_gain_dbi": 0.57, "s11_db": -4.0, "solve_minutes": 3.3},
}
