# -*- coding: utf-8 -*-
"""決定性實驗：能不能從既有的 AEDT 專案匯出帶標註的表面網格？

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

這是「客戶帶自己的天線來」能不能成立的關鍵。目前的管線是從參數產生幾何，
客戶的天線不會是三個矩形——他們有一個既有的 HFSS 專案。
如果匯不出乾淨的、可標註的表面網格，整條路就要重新規劃。

測三件事：
  1. export_3d_model 支不支援 STL
  2. 能不能**逐物件匯出**（這樣 region 標註就自動有了）
  3. 匯出的網格 pyvista 讀不讀得動、節點數合不合理
"""

from __future__ import annotations

import sys
import time
from pathlib import Path

from ansys.aedt.core import Hfss

# ★ 路徑一律相對於這個檔案，不要寫死本機絕對路徑——那會在別人的機器上
# 直接失效，而且發佈時會把開發者的目錄結構一起洩漏出去。
ROOT = Path(__file__).resolve().parent
PROJECT = str(ROOT / "dataset" / "antenna_dataset.aedt")
OUT = ROOT / "runs" / "export_probe"


def main() -> None:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    OUT.mkdir(parents=True, exist_ok=True)

    h = Hfss(project=PROJECT, design="ds", version="2026.1",
             non_graphical=True, new_desktop=True)
    print("物件清單：%s" % h.modeler.object_names, flush=True)

    results = []
    for fmt in (".stl", ".obj", ".step"):
        t0 = time.perf_counter()
        try:
            ok = h.modeler.export_3d_model(
                file_name="probe_all", file_path=str(OUT), file_format=fmt,
                assignment_to_export=["gnd"])
            f = OUT / ("probe_all" + fmt)
            results.append((fmt, ok, f.exists(), f.stat().st_size if f.exists() else 0,
                            round(time.perf_counter() - t0, 2)))
        except Exception as exc:
            results.append((fmt, "例外", False, 0, str(exc)[:60]))

    print("\n=== 格式支援 ===", flush=True)
    for fmt, ok, exists, size, extra in results:
        print("  %-6s 回傳=%-6s 檔案存在=%-5s %8d bytes  %s"
              % (fmt, ok, exists, size, extra), flush=True)

    # 逐物件匯出——這是 region 標註的來源
    print("\n=== 逐物件匯出 ===", flush=True)
    per_obj = {}
    for name in h.modeler.object_names:
        if name == "RadiatingSurface":
            continue          # 空氣盒不要
        try:
            h.modeler.export_3d_model(file_name="obj_%s" % name, file_path=str(OUT),
                                      file_format=".stl", assignment_to_export=[name])
            f = OUT / ("obj_%s.stl" % name)
            per_obj[name] = f.stat().st_size if f.exists() else 0
            print("  %-14s %8d bytes" % (name, per_obj[name]), flush=True)
        except Exception as exc:
            print("  %-14s 失敗：%s" % (name, str(exc)[:70]), flush=True)

    h.close_desktop()

    # pyvista 讀不讀得動（用 SimAI 的環境另外驗，這裡先看檔頭）
    print("\n=== 檔案檢查 ===", flush=True)
    for f in sorted(OUT.glob("*.stl")):
        head = f.read_bytes()[:80]
        kind = "ASCII" if head.lstrip().startswith(b"solid") else "binary"
        print("  %-22s %8d bytes  %s" % (f.name, f.stat().st_size, kind), flush=True)


if __name__ == "__main__":
    main()
