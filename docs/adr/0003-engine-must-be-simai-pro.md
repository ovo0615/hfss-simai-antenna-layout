# 引擎必須是 SimAI Pro 本尊；自製 GNN 排除於本工具、列為長遠目標

工具的敘事是「展現 SimAI 的能力」，因此訓練與推論的目標形態是
地端 SimAI Pro 26.1.0 端到端（方案 A）。退路是方案 B：模型由 SimAI Pro
訓練、推論層自行包裝（直接載入其 PyTorch 權重）——能力仍是 SimAI 的，
只是工程上繞過其服務層。**自製 torch_geometric GNN（方案 C）明確排除**：
那會讓 demo 講的變成「我們自己寫的 GNN」，掛 SimAI 之名即為不誠實。
方案 C 保留為獨立的長遠目標；若哪天真走到 C，工具必須改名改敘事，
不得再以 SimAI 為名。

## Consequences

「SimAI Pro 推論能否程式化呼叫、單次延遲是否 < 2 秒」是階段 0 的
前提驗證之一，必須在任何 web 程式動工之前完成——A／B 的選擇
與前端互動設計（拖動即時更新 vs 放手後計算）都取決於它。

## 2026-08-28 定案：訓練走 GLOW、推論走常駐行程

階段 0 前提二實測完成，架構定為**兩條路徑分工**：

| | 訓練（離線，一次性） | 推論（demo 現場） |
| --- | --- | --- |
| 路徑 | GLOW（REST 或 Python Client） | 常駐行程直接載入 `.pi` 模型 |
| 授權 | **需要**，在 GLOW 執行器內通過 | **不需要**——只有 `fit` 被擋 |
| 延遲 | 8 個玩具設計 2.8 分鐘 | **0.08 秒**（首次 0.68 秒含暖機） |

關鍵測量：透過 GLOW 的 `predict_result` 要 28–31 秒，但那不是推論時間——
`_executor/method_runner.py:49` 的 `multiprocessing.set_start_method("spawn")`
讓每次 `long_running` 呼叫都 spawn 全新行程、重新 import torch＋stochos。
同一個模型在已 import 的常駐行程裡推論只要 0.08 秒。

**因此 demo 後端不透過 GLOW 推論**：啟動時 `GraphModel.load_model()` 載入
訓練好的模型，之後每次互動直接呼叫 `predict()`。這仍然完全誠實——
模型是 SimAI Pro 訓練的，我們只是在暖行程裡載入它做推論。

待確認（對外展示前）：推論端無授權檢查是 Ansys 的設計（訓練授權、部署自由）
還是疏漏。對客戶展示的部署要向 Ansys 確認授權條款。

## 2026-08-28 實測修正：退路 B 的形態被推翻

原本設想的退路 B 是「直接載入 stochos 的 PyTorch 權重、自己包推論層」。
實測發現這條路走不通：訓練／推論／授權邏輯是**加密資產**
（`solution\method_assets\*.py.encrypted`），只有 GLOW 執行器在 step
container 內才會解密執行；直接 `import stochos` 後呼叫 `fit`／`_gen_dbk`
一律拋 `StochosLicenseError`，且 `ANSYSLMD_LICENSE_FILE`、從其模組 frame
呼叫、monkeypatch `fit_avl`／`predict_avl` 都無效。

因此 A 與 B 其實共用同一條正規入口——**GLOW REST API**（SimAI Pro 開著時的
`http://127.0.0.1:55078`）。差別只在前端如何包裝，不在是否繞過服務層。
REST 建專案已實測成功。這把「後端必須是常駐的 SimAI Pro 服務」從實作細節
升級為架構約束：demo 後端不是載模型的 Python 行程，而是 GLOW 服務的用戶端。
單次推論延遲要透過 `predict-result` 端點實測（含 GLOW 交易開銷），
可能高於純 stochos 呼叫，前端互動設計要據此定案。
