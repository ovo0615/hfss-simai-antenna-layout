# -*- coding: utf-8 -*-
"""HFSS × SimAI 天線佈局 Demo 工具——後端 API。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

後端只做三件事：
  1. 提供劇本組態與它們的 HFSS 真解（demo 的對照組）
  2. 把前端送來的環境組態轉給常駐 SimAI worker 推論，回傳場與信心指標
  3. 服務前端的靜態檔（發布模式）

真正的推論在 `app.simai_worker`，用 SimAI Pro 的 venv python 常駐執行。
"""

from __future__ import annotations

import time
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from app.platform_model import (
    ANTENNA_TRACES,
    FREQ_GHZ,
    GND_H,
    GND_W,
    GROUND_SHAPES,
    METAL_KINDS,
    PLATFORM,
    PLATFORM_ID,
    RUNS_ROOT,
    SCRIPTED_CONFIGS,
    SCRIPTED_TRUTH,
    PlatformConfig,
    antenna_bbox,
    clearance_intrusion,
)
from app.simai_client import WorkerDead, WorkerLoading, client

BACKEND_ROOT = Path(__file__).resolve().parent.parent
DIST_DIR = BACKEND_ROOT.parent / "frontend" / "dist"

# ★ 這些路徑都必須跟著平台走。換一支天線時，報告、定義域、劇本組態
# 都得換成該平台的——否則會拿另一支天線的模型與範圍替現在這支背書，
# 幾何完全不同卻不會有任何錯誤訊息。
VALIDATION = RUNS_ROOT / "validation.json"
SCENARIOS = RUNS_ROOT / "scenarios.json"
# 優先用「與目前這個模型一起產生的」定義域快照：
# domain.json 描述的是最新的**資料集**，而載入的可能是更舊的模型。
ACTIVE_DOMAIN = RUNS_ROOT / "active_domain.json"
DOMAIN = RUNS_ROOT / "domain.json"

app = FastAPI(title="Antenna with SimAI", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5182", "http://localhost:5182"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class MetalIn(BaseModel):
    name: str = "metal"
    kind: str = "solid"
    x: float
    y: float
    z: float = 0.0
    w: float
    d: float
    h: float


class ConfigIn(BaseModel):
    ground_shape: str = "rect"
    freq_ghz: float = 2.45
    metals: list[MetalIn] = Field(default_factory=list)


@app.get("/api/health")
def health() -> dict:
    return {"status": "ok", "simai": client.status(), "domain": _load_domain(),
            "uncertainty_calibration": _uncertainty_calibration()}


def _uncertainty_calibration() -> dict | None:
    """信心指標的門檻必須用**這個模型自己的**留出分布算。

    ★ 為什麼不能寫死：信心值的絕對尺度隨模型而變。實測同一支天線的
    不同訓練，留出樣本的信心值中位數從 0.55 到 4.4 都有——
    固定門檻（<0.5 綠 / >1.2 紅）會讓有的模型永遠綠、有的永遠紅，
    兩種都等於沒有資訊。

    更常見的是它幾乎不變：實測某個模型 29 個留出樣本的信心值落在
    1.350~1.354（變動只有 0.3%），而同一批樣本的場型 MAE 差了 12.7 倍。
    那種情況要直說「這個模型的信心指標沒有鑑別度」，而不是天天亮紅燈。
    """
    import json as _json

    if not VALIDATION.exists():
        return None
    try:
        return (_json.loads(VALIDATION.read_text(encoding="utf-8"))
                .get("summary", {}).get("uncertainty_calibration"))
    except Exception:
        return None


@app.get("/api/platform")
def platform_spec() -> dict:
    """平台的完整幾何定義（來自 platform.json）。

    ★ 前端必須讀這一份，不可以自己抄一份常數。
    抄的那一份會在改設定時悄悄過期，而症狀是「預覽跟實際算的不一樣」——
    畫面看起來正常，但它騙人。換一支天線時這一點特別致命。
    """
    return {
        "name": PLATFORM.get("name", ""),
        "freq_ghz": FREQ_GHZ,
        "ground": {"w": GND_W, "h": GND_H},
        "antenna_traces": [
            {"name": n, "x": r[0], "y": r[1], "w": r[2], "h": r[3]}
            for n, r in ANTENNA_TRACES
        ],
        "ground_shapes": {
            k: {"outer": list(v["outer"]),
                "cut": list(v["cut"]) if v["cut"] else None,
                "label": v["label"]}
            for k, v in GROUND_SHAPES.items()
        },
        "metal_kinds": METAL_KINDS,
    }


@app.get("/api/scripted")
def scripted() -> dict:
    """劇本組態與預存的 HFSS 真解（demo 的並排對照）。

    優先用 validate_model.py 產生的**留出驗證樣本**——它們是模型沒看過的
    組態，又有同一套量測條件下的真解，並排比較才誠實。
    沒有的話退回內建的階段 0 組態（求解設定不同，只能當粗略參考）。
    """
    if SCENARIOS.exists():
        import json as _json

        return _json.loads(SCENARIOS.read_text(encoding="utf-8"))

    # ★ 內建組態的座標是綁在內建 PIFA 上的（100×60 板、金屬件在 x=56）。
    # 套到別的平台會把金屬件放到板子外面，而且 hfss_truth 是**另一支天線**
    # 的量測值——那不是「粗略參考」，那是錯的資料掛著真解的名義。
    # 換平台又還沒跑 validate_model.py 時，寧可什麼都不給。
    if PLATFORM_ID != "platform":
        return {"holdout": None, "scenarios": [],
                "note": ("這個平台還沒有劇本組態。請先跑 validate_model.py 產生 "
                         "scenarios.json——它會用模型沒看過的留出樣本，"
                         "並附上同一套量測條件下的 HFSS 真解。")}

    out = []
    for key, cfg in SCRIPTED_CONFIGS.items():
        out.append({
            "key": key,
            "config": cfg.to_dict(),
            "hfss_truth": SCRIPTED_TRUTH.get(key),
            "truth_pattern": None,
            "in_training": False,
        })
    return {"holdout": None, "scenarios": out}


@app.post("/api/predict")
def predict(cfg_in: ConfigIn) -> dict:
    """互動推論的熱路徑。目標：整趟 < 2 秒（實測推論本身約 0.08 秒）。"""
    cfg = PlatformConfig.from_dict(cfg_in.model_dump())
    warnings = domain_check(cfg)
    t0 = time.perf_counter()
    try:
        result = client.predict(config=cfg.to_dict())
    except WorkerDead as exc:
        raise HTTPException(status_code=503, detail=str(exc))
    except Exception as exc:
        # 超出定義域時模型常常直接算不動（例如頻率不在訓練集裡，
        # 邊界條件的數值分布完全不同）。把定義域的問題講在前面，
        # 才不會讓人去追一個看不懂的內部錯誤。
        detail = str(exc)
        if warnings:
            detail = ("這個組態超出模型的訓練範圍：\n・%s\n\n（內部錯誤：%s）"
                      % ("\n・".join(warnings), detail[:200]))
        raise HTTPException(status_code=422 if warnings else 500, detail=detail)

    gap = clearance_intrusion(cfg)
    # 輸入在範圍內不代表輸出合理——這是獨立的第三道檢查
    warnings = warnings + output_check(result)
    return {
        "topology_id": cfg.topology_id,
        "clearance_mm": None if gap == float("inf") else round(gap, 2),
        "total_seconds": round(time.perf_counter() - t0, 3),
        "domain_warnings": warnings,
        "result": result,
    }




def _load_domain() -> dict | None:
    import json as _json

    for path in (ACTIVE_DOMAIN, DOMAIN):
        if path.exists():
            try:
                return _json.loads(path.read_text(encoding="utf-8"))
            except Exception:
                continue
    return None


def output_check(result: dict) -> list[str]:
    """預測**出來的值**物理上說得通嗎。

    ★ 為什麼需要第三道守衛：前兩道都擋不住這一種。實測（留出 battery_deep
    的 PIFA 模型）：`notch_battery_deep_00` 的峰值真值是 1.95 dBi，
    模型預測 **12.74 dBi**——小型 PIFA 不可能有那種增益。
    而同一次驗證裡：

      | 樣本                     | 峰值誤差 | 信心區間寬 |
      | notch_battery_deep_00   | 10.79 dB | 0.395     |
      | shortgnd_battery_deep_01|  0.08 dB | 0.396     |

    **信心指標到小數第三位幾乎相同**，完全分辨不出這兩群。
    定義域守衛也擋不住，因為那個輸入組態本身完全在訓練範圍內——
    離譜的是**輸出**，不是輸入。

    場型的平均誤差（MAE）也看不出來：那幾個樣本的 MAE 只有 1.0~1.2 dB，
    因為只有少數幾個節點爆掉，一平均就被稀釋了。峰值是取 max，才藏不住。

    所以：訓練資料看過的增益範圍就是物理上的合理範圍，超出太多就直說。
    """
    d = _load_domain()
    if not d:
        return []
    rng = d.get("peak_gain_dbi")
    peak = result.get("peak")
    if not rng or peak is None:
        return []
    lo, hi = float(rng[0]), float(rng[1])
    margin = 1.5                      # 容許一點外推，不然邊界樣本會一直誤報
    if peak > hi + margin or peak < lo - margin:
        return ["預測峰值 %.2f dBi 落在訓練資料看過的範圍（%.1f ~ %.1f dBi）之外"
                "——這個數字物理上不太可能，請不要採信。"
                "（信心指標抓不到這種錯，它量的是場型難不難預測，"
                "不是數值合不合理）" % (peak, lo, hi)]
    return []


def domain_check(cfg: PlatformConfig) -> list[str]:
    """逐項比對請求與訓練資料實際涵蓋的範圍。

    ★ 為什麼需要這個：模型自帶的信心指標（GP 變異）**抓不到「輸入超出
    訓練範圍」**。實測給它 8 個金屬件（訓練最多 2 個）或一塊 80×45×40 的
    巨石，信心值只有 0.89（黃燈）而不是紅燈；把接地面換成訓練集裡完全
    沒有的切角形狀，信心值甚至是 0.00（全綠）。
    信心指標量的是「這個場型有多難預測」，不是「這個輸入我看過沒有」。
    兩者都要有，工具才不會理直氣壯地給出錯答案。
    """
    d = _load_domain()
    if not d:
        return []
    out: list[str] = []

    shapes = d.get("ground_shapes") or []
    if shapes and cfg.ground_shape not in shapes:
        out.append("接地面形狀「%s」不在訓練資料中（只訓練過：%s）"
                   % (cfg.ground_shape, "、".join(shapes)))

    # 殘差原點：板型訓練過，不代表它有自己的基準。
    bshapes = d.get("baseline_shapes")
    if bshapes and cfg.ground_shape not in bshapes:
        out.append("接地面形狀「%s」沒有自己的乾淨基準，殘差原點會退回「%s」"
                   "——增益的絕對值會偏掉（相對趨勢仍可參考）"
                   % (cfg.ground_shape, bshapes[0] if bshapes else "預設"))

    fr = d.get("freq_ghz")
    if fr and not (fr[0] - 1e-6 <= cfg.freq_ghz <= fr[1] + 1e-6):
        out.append("頻率 %.2f GHz 超出訓練範圍（訓練只有 %.2f GHz）"
                   % (cfg.freq_ghz, fr[0]))

    nm = d.get("n_metals")
    if nm and len(cfg.metals) > nm[1]:
        out.append("金屬件 %d 個，超過訓練上限 %d 個" % (len(cfg.metals), nm[1]))

    kinds = d.get("metal_kinds") or []
    for m in cfg.metals:
        if kinds and m.kind not in kinds:
            out.append("金屬件種類「%s」不在訓練資料中" % m.kind)
            break

    checks = [("w", "寬", "metal_w"), ("d", "深", "metal_d"), ("h", "高", "metal_h")]
    for attr, label, key in checks:
        rg = d.get(key)
        if not rg:
            continue
        bad = [getattr(m, attr) for m in cfg.metals
               if not (rg[0] * 0.85 <= getattr(m, attr) <= rg[1] * 1.15)]
        if bad:
            out.append("金屬件%s %.0f mm 超出訓練範圍 %.0f~%.0f mm"
                       % (label, bad[0], rg[0], rg[1]))

    zr = d.get("metal_z")
    if zr:
        bad = [m.z for m in cfg.metals if not (zr[0] - 3 <= m.z <= zr[1] + 3)]
        if bad:
            out.append("金屬件離板高度 %.0f mm 超出訓練範圍 %.0f~%.0f mm"
                       % (bad[0], zr[0], zr[1]))

    vr = d.get("total_volume_mm3")
    if vr:
        vol = sum(m.w * m.d * m.h for m in cfg.metals)
        if vol > vr[1] * 1.15:
            out.append("金屬總體積 %.0f mm³ 超過訓練上限 %.0f mm³" % (vol, vr[1]))

    return out


@app.get("/api/report")
def report() -> dict:
    """留一種拓樸驗證的結果。由 pipeline/validate_model.py 產生。"""
    if not VALIDATION.exists():
        raise HTTPException(
            status_code=404,
            detail="尚未產生驗證報告。請依序執行 pipeline 的 solve_dataset.py、"
                   "build_dataset.py、train_model.py、validate_model.py。")
    import json as _json

    return _json.loads(VALIDATION.read_text(encoding="utf-8"))


class KeepoutIn(BaseModel):
    config: ConfigIn
    metal_name: str
    x_range: list[float] | None = None     # [起, 迄]；省略就用板子範圍
    y_range: list[float] | None = None
    nx: int = 20
    ny: int = 20
    threshold_db: float = 1.0              # 相對最佳值掉超過這麼多就算禁區


class SweepIn(BaseModel):
    config: ConfigIn
    metal_name: str
    axis: str = "y"          # x / y / z
    start: float
    stop: float
    steps: int = 21


@app.post("/api/keepout")
def keepout(req: KeepoutIn) -> dict:
    """淨空區地圖：把一個金屬件掃過板面的每一格，回傳增益的 2D 分布。

    ★ 為什麼這個功能只有在推論便宜時才存在。
    20×20 = 400 個位置，用 HFSS 要 400 × 0.5 分鐘 ≈ **3.3 小時**，
    所以沒有人會做——實務上機構只能憑經驗畫一個保守的禁區，
    保守到犧牲了本來可以用的空間，或是不夠保守而在 EVT 才發現天線爛掉。
    這裡約 3 分鐘。

    這也是這個工具唯一「機構工程師可以直接拿去用」的輸出：
    不必懂天線，看圖就知道哪裡能放。

    格點會標三種狀態：
      ok       —— 可以放
      degraded —— 增益掉超過門檻，能放但要付代價
      invalid  —— 蓋到天線導體，或超出模型的訓練範圍（**不是預測值，是不予預測**）
    """
    _refuse_while_loading()
    base = PlatformConfig.from_dict(req.config.model_dump())
    metal = next((m for m in base.metals if m.name == req.metal_name), None)
    if metal is None:
        raise HTTPException(status_code=400, detail="找不到金屬件：%s" % req.metal_name)

    nx = max(3, min(40, req.nx))
    ny = max(3, min(40, req.ny))
    # 預設掃整片板子，外加淨空區那一段（天線通常在板緣之外）
    ax0, ay0, ax1, ay1 = antenna_bbox()
    xr = req.x_range or [0.0, float(GND_W)]
    yr = req.y_range or [0.0, max(float(GND_H), ay1) + 2.0]

    t0 = time.perf_counter()
    cells: list[dict] = []
    for iy in range(ny):
        y = yr[0] + (yr[1] - yr[0]) * iy / (ny - 1)
        for ix in range(nx):
            x = xr[0] + (xr[1] - xr[0]) * ix / (nx - 1)
            cfg = PlatformConfig.from_dict(base.to_dict())
            for m in cfg.metals:
                if m.name == req.metal_name:
                    m.x, m.y = x, y
            gap = clearance_intrusion(cfg)
            warn = domain_check(cfg)
            if gap < 0 or warn:
                # 蓋到天線或超出訓練範圍：**不要送進模型**。
                # 給一個數字比不給更糟——那會是模型沒學過的區域的臆測。
                cells.append({"ix": ix, "iy": iy, "x": round(x, 2), "y": round(y, 2),
                              "peak_gain_dbi": None, "state": "invalid",
                              "reason": "蓋到天線導體" if gap < 0 else warn[0][:40]})
                continue
            try:
                r = client.predict(config=cfg.to_dict(), with_ci=False)
                cells.append({"ix": ix, "iy": iy, "x": round(x, 2), "y": round(y, 2),
                              "peak_gain_dbi": round(r["peak"], 3), "state": "ok",
                              "clearance_mm": round(gap, 2)})
            except WorkerLoading as exc:
                raise HTTPException(status_code=503, detail=str(exc))
            except Exception as exc:
                cells.append({"ix": ix, "iy": iy, "x": round(x, 2), "y": round(y, 2),
                              "peak_gain_dbi": None, "state": "invalid",
                              "reason": str(exc)[:60]})

    ok = [c for c in cells if c["peak_gain_dbi"] is not None]
    if ok:
        best = max(c["peak_gain_dbi"] for c in ok)
        worst = min(c["peak_gain_dbi"] for c in ok)
        for c in ok:
            if best - c["peak_gain_dbi"] > req.threshold_db:
                c["state"] = "degraded"
    else:
        best = worst = None

    n_ok = sum(1 for c in cells if c["state"] == "ok")
    return {
        "metal_name": req.metal_name,
        "nx": nx, "ny": ny, "x_range": xr, "y_range": yr,
        "cells": cells,
        "best_dbi": best, "worst_dbi": worst,
        "span_db": None if best is None else round(best - worst, 2),
        "threshold_db": req.threshold_db,
        "n_ok": n_ok, "n_total": nx * ny,
        "antenna_bbox": [round(v, 2) for v in (ax0, ay0, ax1, ay1)],
        "total_seconds": round(time.perf_counter() - t0, 2),
        "hfss_equivalent_minutes": round(nx * ny * 0.5, 1),
    }


@app.post("/api/sweep")
def sweep(req: SweepIn) -> dict:
    """把一個金屬件沿某軸掃過去，回傳增益隨位置的變化。

    這是「推論便宜」才做得到的問題。HFSS 掃 21 個點要約 13 分鐘，
    所以實務上沒有人會為了「往下移 3 mm 能拿回多少」去跑一次掃描——
    大家只能猜。0.2 秒的推論把這個問題從「不值得問」變成「隨手就問」。
    """
    _refuse_while_loading()
    base = PlatformConfig.from_dict(req.config.model_dump())
    if not any(m.name == req.metal_name for m in base.metals):
        raise HTTPException(status_code=400, detail="找不到金屬件：%s" % req.metal_name)
    if req.axis not in ("x", "y", "z"):
        raise HTTPException(status_code=400, detail="軸只能是 x / y / z")
    steps = max(3, min(41, req.steps))

    t0 = time.perf_counter()
    points = []
    for i in range(steps):
        v = req.start + (req.stop - req.start) * i / (steps - 1)
        cfg = PlatformConfig.from_dict(base.to_dict())
        for m in cfg.metals:
            if m.name == req.metal_name:
                setattr(m, req.axis, v)
        warn = domain_check(cfg)
        gap = clearance_intrusion(cfg)
        try:
            r = client.predict(config=cfg.to_dict(), with_ci=False)
            points.append({
                "value": round(v, 2),
                "peak_gain_dbi": round(r["peak"], 3),
                "clearance_mm": None if gap == float("inf") else round(gap, 2),
                # 蓋到天線上或超出訓練範圍的點要標出來，不能混在曲線裡當真
                "valid": gap >= 0 and not warn,
            })
        except WorkerLoading as exc:
            raise HTTPException(status_code=503, detail=str(exc))
        except Exception:
            points.append({"value": round(v, 2), "peak_gain_dbi": None,
                           "clearance_mm": None, "valid": False})

    ok = [p for p in points if p["valid"] and p["peak_gain_dbi"] is not None]
    best = max(ok, key=lambda p: p["peak_gain_dbi"]) if ok else None
    worst = min(ok, key=lambda p: p["peak_gain_dbi"]) if ok else None
    return {
        "axis": req.axis,
        "metal_name": req.metal_name,
        "points": points,
        "best": best,
        "worst": worst,
        "span_db": (round(best["peak_gain_dbi"] - worst["peak_gain_dbi"], 2)
                    if best and worst else None),
        "total_seconds": round(time.perf_counter() - t0, 2),
        "hfss_equivalent_minutes": round(steps * 0.65, 1),
    }


def _refuse_while_loading() -> None:
    """掃描要連打幾百次推論。載入中每一格都會失敗，與其回一張全是
    「不予預測」的圖，不如直接說還在載入。"""
    if client.state == "loading":
        raise HTTPException(status_code=503, detail=client.status()["reason"])


@app.post("/api/worker/restart")
def restart_worker() -> dict:
    # 背景載入：這個請求立即返回，前端看 state 輪詢
    client.stop()
    client.start_async()
    return client.status()


@app.on_event("startup")
def _startup() -> None:
    # 啟動時就開始載入模型，之後每次互動才會是毫秒級。
    # ★ 必須是背景載入：uvicorn 要等 startup 跑完才綁埠，同步載入的話
    # 模型載多久，連 /api/health 都連不上多久，啟動器只能乾等到逾時。
    client.start_async()


@app.on_event("shutdown")
def _shutdown() -> None:
    client.stop()


# ★ StaticFiles 必須掛在所有 /api 路由之後，否則會把 API 請求吃掉
if DIST_DIR.exists():
    app.mount("/", StaticFiles(directory=str(DIST_DIR), html=True), name="frontend")
