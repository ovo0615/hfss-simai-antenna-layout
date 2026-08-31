# 天線佈局 AI 預測工具（HFSS × SimAI）

拖動機構件，立刻看到天線增益怎麼變——原本要等一次完整 HFSS 求解才有的答案。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

> **要操作這個工具，請看帶截圖的[操作說明](../docs/操作說明.md)。**
> 本檔是給維護者看的架構與踩坑紀錄。

## 這個工具在展示什麼

同一支天線，換不同的金屬環境（電池、螢幕框、支架的形狀與位置），
SimAI 用**訓練過的幾何 → 響應模型**在 0.1 秒內給出預測，
旁邊並排擺著同一組態的 HFSS 真解當對照。

決定天線好壞的那些東西——接地面形狀、附近有什麼金屬、淨空區被誰吃掉——
恰好是參數化方法寫不出來的部分。這正是 SimAI 相對傳統代理模型的價值所在。

## 需要先準備什麼

| 項目 | 用途 | 備註 |
| --- | --- | --- |
| **Ansys SimAI Pro 26.1.0** | 推論引擎 | 必須安裝。工具會用它自己的 `.venv` python 跑推論 worker |
| **Python 3.10+** | 後端 | 建議 3.12。`start.ps1` 會自動建立虛擬環境 |
| **一個訓練好的 SimAI 模型** | 預測 | 見下方「模型從哪裡來」 |
| Node.js 20+ | **只有開發時需要** | 使用者版不需要 |

後端只裝三個套件（`backend/requirements.lock.txt`）：
`fastapi`、`uvicorn[standard]`、`pydantic`。
**torch／stochos／pyvista 刻意不裝**——它們只存在於 SimAI Pro 自己的環境，
由推論 worker 在那個環境裡使用（見 `docs/adr/0003`）。

## 啟動

使用者（雙擊即可）：

```bash
start.bat
```

指定模型與連接埠：

```bash
powershell -ExecutionPolicy Bypass -File start.ps1 -SimAIModelDir "C:\path\to\model_1" -Port 8012
```

開發模式（需要 Node.js，前端有熱重載）：

```bash
powershell -ExecutionPolicy Bypass -File dev.ps1 -SimAIModelDir "C:\path\to\model_1"
```

連接埠：後端 8012、開發前端 5182。
`start.ps1` 在預設埠被佔用時會往後找一個可用的；
但如果你**明確指定** `-Port`，它就不位移，直接報錯。

## 重新產生資料集與模型

四個步驟，每一步都可以單獨重跑（都會跳過已完成的部分）：

```bash
python pipeline/solve_dataset.py 7 0
```

（HFSS 求解，約 25 分鐘／50 個樣本。第二個參數 0 代表自己開專屬的
AEDT session——長時間批次不要借用外部 session。）

```bash
"<SimAI>\...\python.exe" pipeline/build_dataset.py
python pipeline/train_model.py http://127.0.0.1:<API埠> battery_near
"<SimAI>\...\python.exe" pipeline/validate_model.py
```

`train_model.py` 需要 SimAI Pro 開著（API 埠抄 `orchestrator.log`）。
`validate_model.py` 跑完會寫出 `runs/validation.json`（報告檢視的資料）
與 `runs/active_model.json`（讓工具自動找到模型）。

## 模型從哪裡來

訓練走 SimAI Pro（需要授權），推論不需要授權——這是本工具能做到
0.1 秒互動的原因（見 `docs/adr/0003`）。訓練完成後，模型檔在：

```
%APPDATA%\Ansys\glow\Simai_ProSolution\project_files\<專案id>\bdm\method_<id>\model_N\
    surface.pi              ← 把這個資料夾的路徑填給 -SimAIModelDir
    surface_gnn_model.pt
```

環境變數（`start.ps1` 的參數會轉成這些）：

| 變數 | 預設 | 說明 |
| --- | --- | --- |
| `SIMAI_MODEL_DIR` | 空 | 模型資料夾。沒設定時工具會啟動，但預測會回報「尚未設定模型」 |
| `SIMAI_MODEL_NAME` | `surface` | 模型檔名（不含 `.pi`），是訓練時的 `fname` 而非顯示名稱 |
| `SIMAI_OUTPUT_FIELD` | `gain` | 要預測的節點場名稱 |
| `SIMAI_PYTHON` | SimAI Pro 預設安裝路徑 | SimAI 的 `.venv\Scripts\python.exe` |

## 架構

```
瀏覽器 (React + Three.js)
   │  /api/predict  ← 拖動放開後觸發
   ▼
FastAPI (backend/.venv, 只有 fastapi/uvicorn)
   │  stdin/stdout JSON 逐行
   ▼
常駐推論 worker (SimAI Pro 的 .venv python)
   │  啟動時 GraphModel.load_model() 一次（約 15 秒）
   ▼  之後每次推論 0.08 秒
SimAI 模型 (.pi)
```

**為什麼推論要放在獨立的常駐子行程**，三個理由缺一不可：

1. torch＋stochos 的 import 要 15～120 秒。載入一次、活著服務，才有 0.08 秒。
   SimAI Pro 官方的 `predict_result` 每次要 28～31 秒，因為 GLOW 的
   `method_runner` 用 `multiprocessing spawn`，每次都重新 import——那不是計算時間。
2. SimAI 的套件在 Program Files 的 venv 裡，我們不該把 FastAPI 裝進廠商目錄。
3. 商業 EDA/CAD 的 Python 綁定常常不釋放 GIL，放在 thread 裡會凍住整個伺服器。

## 目前的狀態：可以實際操作（2026-08-28）

已有訓練好的真天線模型，工具可直接使用。雙擊 `start.bat` 即可——
模型路徑由 `pipeline/runs/active_model.json` 自動帶入，不必輸入任何參數。

**資料集**：73 個 HFSS 真解，10 種拓樸（clean／battery／bracket／slotted／
twin／battery\_wall／battery\_near／bracket\_near／battery\_deep／twin\_near），
每個樣本 1142 節點（其中 684 個是遠場球）。

**留一種拓樸驗證**（留出 `battery_near`，訓練 65 / 驗證 8）：

| 指標 | 結果 | 門檻 | 判定 |
| --- | --- | --- | --- |
| 峰值增益平均誤差 | **0.26 dB** | <1.0 通過 | **通過** |
| 場型逐點 MAE | **0.63 dB** | <1.5 通過 | **通過** |
| Skill score | 0.646 | — | 明顯勝過笨基線（基線 MAE 1.78 dB） |
| 推論 vs HFSS | 0.17 秒 vs 0.6 分鐘 | — | **快 217 倍** |

兩項停損指標都通過。這是第二版的結果——第一版（49 樣本、直接學絕對值）
是峰值誤差 1.07 dB（灰區）、場型 MAE 1.39 dB、skill 0.362，
而且**漏掉了增益崩掉的極端案例**（HFSS 0.32 dBi 時模型預測 2.43）。

改動只有兩項，都是階段 0 事先寫定的「灰區→只修不擴」動作：

1. **殘差學習**（ADR-0004）：模型改學「實際場型 − 乾淨平台場型」。
   外插時它退化成乾淨天線的場型，而不是退化成垃圾。
2. **補極端區域的樣本**：新增 `battery_deep`（金屬件最深入淨空區）
   與 `twin_near`，把低於 2 dBi 的樣本從 3 個補到 26 個。
   **補的是缺的那一區，不是均勻加大資料量。**

那兩個原本失手的樣本現在的誤差是 0.10 dB 與 0.23 dB。

## 已知的坑（都已處理，記錄供維護參考）

- `.ps1` 含中文必須存成 **UTF-8 with BOM**，否則 PowerShell 5.1 用 cp950 解讀會壞掉。
- `.bat` **不可有 BOM**，且必須 CRLF 換行（`.gitattributes` 已釘死）。
- 啟動腳本絕不產生 PowerShell 子程序（`Start-Job`／`Start-Process powershell`
  是端點防護的行為偵測特徵），只直接啟動 `python.exe`。
- 結束時用 `taskkill /T` 收整棵程序樹——venv 的 python.exe 是 trampoline，
  實測程序樹有三層，只殺回傳的 PID 會留下孤兒佔著埠。
- `tsconfig.node.json` 的 `outDir` 導到暫存目錄，避免編出的 `vite.config.js`
  蓋掉 `vite.config.ts`。
- 邊界條件的**數量與順序**必須與訓練時完全一致。不一致時 numpy 只會說
  「operands could not be broadcast together」，工具已把它翻譯成可行動的訊息。
- **設計資料夾裡只能有一個 `.json`。** SimAI 的掃描規則是「超過一個就判定為
  多個邊界條件檔」而整批退件，UI 只說「Data could not be validated」。
  實測 49 個資料夾因為多放了一個 `meta.json` 全部失格——meta 現在寫在
  `runs/meta/` 而不是設計資料夾內。
- **`analyze_setup` 不要傳 `cores`。** PyAEDT 1.1.0 只要 cores/gpus/tasks 任一為真
  就會走 `set_custom_hpc_options`，那條路徑會拋 `HfssConstants has no attribute
  default_solution`，而且會把整個 gRPC session 弄壞（實測一次失敗後
  後續 31 個樣本全部連鎖失敗）。
- **金屬件由多個長方體組成時不可互相穿插。** HFSS 會直接求解失敗
  （回傳 False，不是例外）。L 形支架的第一版讓兩個盒子重疊，7/7 全滅。
- **`merge()` 要加 `merge_points=False`。** 預設會合併重合節點，讓遠場球的
  尾端對齊失效——不會報錯，只會把場對到錯的位置。
- 取樣要涵蓋**真正有效應的區域**。第一版把金屬件均勻撒在接地板上，
  整批 28 個樣本的增益跨度只有 0.79 dB（金屬放在已經是導體的接地板上
  幾乎沒有影響）。真正的效應在金屬件伸出板緣、進到淨空區時才出現——
  修正取樣後跨度變成約 4 dB。**資料看起來很乾淨，不代表裡面有訊號。**
- **取樣種子不可以用 `hash(字串)`。** Python 的字串 hash 每個行程都不一樣
  （PYTHONHASHSEED 隨機化），同一個 sample id 在不同次執行會產生不同的幾何，
  資料集就再也無法重現。改用 `zlib.crc32`。
- **金屬件不可與天線導體重疊**，否則天線被實體短路，解出來的
  −20~−33 dBi 不是「環境擾動」而是壞掉的幾何。這一關現在由
  `build_dataset.py` 的品質閘自動攔下並列出被排除的樣本
  （曾經有 8 個 `wall_near` 樣本中的 7 個踩到）。
- `wall_near`（薄高牆懸在淨空區）已停用：它會讓自適應網格在
  RadiatingSurface 上產生 0.25 mm 的退化片段，求解在 8 秒內失敗，
  但 **Design validation 顯示 PASSED**，從 API 完全看不出原因——
  要去讀 `*.aedtresults/**/current.g3derr` 才知道。
