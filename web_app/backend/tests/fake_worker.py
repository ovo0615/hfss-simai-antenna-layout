# -*- coding: utf-8 -*-
"""測試用的假 SimAI worker：不需要 SimAI，用環境變數控制行為。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

FAKE_MODE：
  ready         延遲 FAKE_DELAY 秒後回 ready，之後每個 predict 都回 {"peak": 1.0}
  hang          永遠不回 ready（模擬 import 卡死）
  noise         第一行印非 JSON
  exit          往 stderr 寫一行後直接結束
  predict_hang  正常 ready，但收到 predict 就不回
"""

import json
import os
import sys
import time


def _emit(payload: dict) -> None:
    sys.stdout.write(json.dumps(payload) + "\n")
    sys.stdout.flush()


def main() -> None:
    mode = os.environ.get("FAKE_MODE", "ready")
    delay = float(os.environ.get("FAKE_DELAY", "0"))
    sys.stderr.write("fake worker mode=%s\n" % mode)
    sys.stderr.flush()

    if mode == "exit":
        sys.stderr.write("ImportError: torch DLL load failed\n")
        sys.exit(3)
    if mode == "hang":
        time.sleep(3600)
        return
    if mode == "noise":
        sys.stdout.write("Loading stochos...\n")
        sys.stdout.flush()
        time.sleep(3600)
        return

    time.sleep(delay)
    _emit({"type": "ready", "ready": True, "reason": "",
           "load_seconds": delay, "global_width": 2, "residual": False})

    for line in sys.stdin:
        req = json.loads(line)
        if req.get("cmd") == "shutdown":
            _emit({"type": "bye", "id": req.get("id")})
            return
        if mode == "predict_hang":
            time.sleep(3600)
            return
        _emit({"type": "result", "id": req.get("id"), "result": {"peak": 1.0}})


if __name__ == "__main__":
    main()
