# -*- coding: utf-8 -*-
"""留出組的判定——訓練與驗證**必須**用同一份邏輯。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

★ 為什麼要抽成共用模組：這段邏輯原本在 train_model.py 與 validate_model.py
各寫一份。修好其中一份之後，訓練留出了 13 個樣本、驗證卻只評估 1 個——
兩邊對「留出組是什麼」的認知不一致，而且不會有任何錯誤訊息，
只會給出一個用 1 個樣本算出來的、毫無意義的 skill score。

判定順序（用 meta 記下的欄位，**不要用檔名前綴**）：
  1. meta 的 topology 欄位相符
  2. meta 的 config.ground_shape 相符（用接地面外型當留出組時）
  3. 沒有 meta 時才退回檔名前綴——前綴會耦合命名規則：
     非矩形外型的樣本叫 narrow_battery_deep_00，
     用 startswith("battery_deep_") 只抓得到矩形那一個。
"""

from __future__ import annotations

import json
from pathlib import Path


def in_holdout(folder_name: str, holdout: str, meta_dir: Path) -> bool:
    mf = meta_dir / (folder_name + ".json")
    if mf.is_file():
        try:
            meta = json.loads(mf.read_text(encoding="utf-8"))
        except Exception:
            meta = {}
        if meta.get("topology") == holdout:
            return True
        if (meta.get("config") or {}).get("ground_shape") == holdout:
            return True
        if meta:
            return False        # 有 meta 就以 meta 為準，不要再猜檔名
    return folder_name.startswith(holdout + "_")


def split_holdout(names: list[str], holdout: str,
                  meta_dir: Path) -> tuple[list[str], list[str]]:
    """回傳 (訓練, 驗證) 兩份名單。"""
    test = [n for n in names if in_holdout(n, holdout, meta_dir)]
    train = [n for n in names if n not in set(test)]
    return train, test
