# -*- coding: utf-8 -*-
"""可行性篩檢：花 15 分鐘決定「這支天線值不值得建模」。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

用法（用一般 Python，不是 SimAI 的 venv——這一步只跑 HFSS）：
    python pipeline/screen_platform.py [每種擾動幾個樣本] [AEDT埠]
    set PLATFORM_CONFIG=customer_iot_monopole   # 換平台

★ 為什麼需要這一步
完整流程要 2~3 小時（HFSS 求解 ＋ SimAI 訓練）才知道結果。
實測踩過：客戶天線第一版跑完三小時，skill score 只有 0.047——
資料集裡有 29% 的樣本擾動源遠在近場之外，等於白跑。

篩檢只解 1 個乾淨樣本 ＋ 少數幾個**刻意貼著天線**的極端樣本，
量出「可學訊號」有多大。那個數字就是 skill score 的分母：

    skill = 1 − 模型MAE / 可學訊號

模型的絕對誤差有下限（兩個平台實測都在 0.6~0.9 dB），
所以可學訊號太小時，skill 再怎麼調都上不去——那不是模型的問題，
是**這支天線對這些擾動本來就不敏感**。

對客戶而言那也是個有用的答案：「你的零件怎麼擺影響都不大」。
與其花三小時做出一個低分模型再解釋，不如十五分鐘就講清楚。
"""

from __future__ import annotations

import json
import random
import sys
import time
import zlib
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT.parent / "web_app" / "backend"))

from ansys.aedt.core import Hfss  # noqa: E402

from app.platform_model import GND_H, GND_W, PLATFORM_ID, RUNS_ROOT  # noqa: E402
from solve_dataset import (  # noqa: E402
    PROJECT,
    build_design,
    clear_stale_lock,
    create_base,
    extract_farfield,
    make_config,
)

OUT = RUNS_ROOT / "screening.json"

# 判讀門檻。★ 這些不是猜的，是從兩個已完成的平台反推出來的：
#   內建 PIFA  可學訊號 3.23 dB → skill 0.569
#   客戶單極   可學訊號 1.19 dB → skill 0.261
# 模型 MAE 的下限實測在 0.6~0.9 dB，代入 skill = 1 − MAE/訊號：
#   訊號 1.0 dB → skill 最多約 0.2（做出來也很難說服人）
#   訊號 2.0 dB → skill 約 0.6（值得做）
THRESH_GOOD = 2.0
THRESH_MARGINAL = 1.0


def main() -> None:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    n_each = int(sys.argv[1]) if len(sys.argv) > 1 else 2
    port = int(sys.argv[2]) if len(sys.argv) > 2 else 0

    # 只挑**最容易產生效應**的拓樸。篩檢不是要涵蓋分布，
    # 是要回答「最大能有多大效應」——所以刻意取極端，不取代表值。
    probes = ["battery_deep", "battery_near", "twin_near"]

    print("可行性篩檢：平台 %s（%g × %g mm）" % (PLATFORM_ID, GND_W, GND_H), flush=True)
    print("解 1 個乾淨樣本 ＋ %d 種極端擾動 × %d 個 = %d 個樣本"
          % (len(probes), n_each, 1 + len(probes) * n_each), flush=True)

    clear_stale_lock(PROJECT)
    # ★ 傳了 port 但那個 session 其實不存在時，PyAEDT 會**自己開一個新的**。
    # 若照「有 port 就是借用的、不要關」處理，那個新開的 session 就變成孤兒，
    # 佔著約 800 MB 記憶體直到有人手動殺掉（實測踩過）。
    # 所以先看那個 port 是不是真的有人在聽，再決定收尾要不要關掉它。
    borrowed = False
    if port:
        import socket

        with socket.socket() as s:
            s.settimeout(1.0)
            borrowed = s.connect_ex(("127.0.0.1", port)) == 0
    if port and borrowed:
        hfss = Hfss(project=PROJECT, design="screen", solution_type="Modal",
                    port=port, new_desktop=False)
        print("沿用既有的 AEDT session（port %d）" % port, flush=True)
    else:
        hfss = Hfss(project=PROJECT, design="screen", solution_type="Modal",
                    version="2026.1", non_graphical=True, new_desktop=True)
        print("已啟動專屬的 AEDT session（收尾時會關閉）", flush=True)

    results: list[dict] = []
    t_start = time.perf_counter()
    try:
        create_base(hfss, "rect")

        # 乾淨基準
        t0 = time.perf_counter()
        build_design(hfss, {"ground_shape": "rect", "metals": []})
        if not hfss.analyze_setup("Setup1"):
            raise SystemExit("乾淨樣本求解失敗——先確認模型本身能解。")
        clean = extract_farfield(hfss)
        print("  clean            peak=%.2f dBi  %.1f 分鐘"
              % (clean["peak_gain_dbi"], (time.perf_counter() - t0) / 60), flush=True)
        base = np.asarray(clean["gain_dbi"], dtype="float64")

        for topo in probes:
            rng = random.Random(zlib.crc32(("screen|%s" % topo).encode("utf-8")))
            for k in range(n_each):
                cfg = make_config(topo, rng)
                t0 = time.perf_counter()
                build_design(hfss, cfg)
                hfss.cleanup_solution(variations="All", entire_solution=True,
                                      field=True, mesh=True, linked_data=True)
                if not hfss.analyze_setup("Setup1"):
                    print("  %-16s 求解失敗，略過" % ("%s_%d" % (topo, k)), flush=True)
                    continue
                ff = extract_farfield(hfss)
                g = np.asarray(ff["gain_dbi"], dtype="float64")
                # 「可學訊號」＝這個擾動讓場型改變了多少（與乾淨平台逐點比）
                signal = float(np.nanmean(np.abs(g - base)))
                dpeak = float(ff["peak_gain_dbi"] - clean["peak_gain_dbi"])
                results.append({
                    "id": "%s_%d" % (topo, k), "topology": topo,
                    "pattern_change_db": round(signal, 3),
                    "peak_change_db": round(dpeak, 3),
                    "peak_gain_dbi": round(ff["peak_gain_dbi"], 3),
                    "solve_minutes": round((time.perf_counter() - t0) / 60, 2),
                    "config": cfg,
                })
                print("  %-16s 場型改變 %.2f dB  峰值 %+.2f dB  %.1f 分鐘"
                      % (results[-1]["id"], signal, dpeak,
                         results[-1]["solve_minutes"]), flush=True)
    finally:
        try:
            hfss.close_project(save=False)
        except Exception:
            pass
        try:
            hfss.release_desktop(close_projects=True, close_on_exit=not borrowed)
        except Exception:
            pass

    if not results:
        raise SystemExit("沒有任何擾動樣本解成功，無法判讀。")

    changes = [r["pattern_change_db"] for r in results]
    signal = float(max(changes))          # 取**最大**：篩檢問的是「最多能有多大效應」
    median = float(np.median(changes))

    if signal >= THRESH_GOOD:
        verdict, advice = "值得做", (
            "可學訊號 %.2f dB 明顯大於模型的誤差下限（0.6~0.9 dB），"
            "建模後應該能得到有意義的 skill score。" % signal)
    elif signal >= THRESH_MARGINAL:
        verdict, advice = "灰區", (
            "可學訊號 %.2f dB 只比模型誤差下限大一點。做得出來，但 skill score "
            "會偏低（約 0.2~0.4），要先跟客戶說清楚那代表什麼。"
            "或者把擾動源放得更靠近天線再篩一次。" % signal)
    else:
        verdict, advice = "不建議", (
            "可學訊號只有 %.2f dB，與模型的誤差下限同一量級——"
            "做出來的模型不會比「永遠輸出平均場型」好多少。\n"
            "     但這本身就是給客戶的答案：**這支天線對這些零件不敏感，"
            "擺放位置不必糾結**。這個結論十五分鐘就拿到了，"
            "不必花三小時做一個低分模型再解釋。" % signal)

    summary = {
        "platform": PLATFORM_ID,
        "n_probes": len(results),
        "learnable_signal_db": round(signal, 3),
        "median_change_db": round(median, 3),
        "clean_peak_dbi": round(clean["peak_gain_dbi"], 3),
        "verdict": verdict,
        "minutes": round((time.perf_counter() - t_start) / 60, 1),
        "thresholds": {"good": THRESH_GOOD, "marginal": THRESH_MARGINAL},
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"summary": summary, "probes": results},
                              ensure_ascii=False, indent=1), encoding="utf-8")

    print()
    print("=" * 62)
    print("可行性篩檢結果：%s" % verdict)
    print("=" * 62)
    print("可學訊號（最大場型改變）  %.2f dB" % signal)
    print("中位改變                  %.2f dB" % median)
    print("乾淨平台峰值              %.2f dBi" % clean["peak_gain_dbi"])
    print("耗時                      %.1f 分鐘（完整流程約 2~3 小時）" % summary["minutes"])
    print()
    print("  → %s" % advice)
    print()
    print("最有效應的擾動：")
    for r in sorted(results, key=lambda x: -x["pattern_change_db"])[:3]:
        print("   %-16s 場型 %.2f dB  峰值 %+.2f dB"
              % (r["id"], r["pattern_change_db"], r["peak_change_db"]))
    print()
    print("已寫入 %s" % OUT)


if __name__ == "__main__":
    main()
