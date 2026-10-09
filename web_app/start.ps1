#Requires -Version 5.1
<#
    發布模式：FastAPI 直接服務 frontend/dist，使用者不需要安裝 Node.js。

    此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
#>

[CmdletBinding()]
param(
    [int]$Port = 8012,
    [string]$SimAIModelDir = "",
    [string]$SimAIModelName = "surface",
    [string]$SimAIOutputField = "gain",
    # 等「網頁服務」起來的上限。模型載入不算在內（背景載入，見下方）。
    [int]$StartupTimeoutSec = 120,
    # 模型載入上限（秒）；0 = 用後端預設 900 秒。新電腦第一次載入特別慢時才需要調。
    [int]$ModelLoadTimeoutSec = 0,
    [switch]$NoBrowser
)

$ErrorActionPreference = "Stop"

# ── 主控台輸出的兩層問題（都不是編碼問題，是渲染問題）──────────────────
# 1. 不要把主控台切到 65001：它把 CJK 的欄寬算錯，字會重複或被吃掉
#    （實測「相容」印成「相相容容」）。對齊到系統 ANSI 碼頁才對。
# 2. 即使碼頁對了，主控台的**自動換行點**仍會把雙寬字元算錯，
#    所以長行要自己依顯示寬度斷行——這就是為什麼壞掉的總是署名與網址那幾行。
$ansi = 950
try { $ansi = [System.Text.Encoding]::Default.CodePage } catch { }
try {
    [Console]::OutputEncoding = [System.Text.Encoding]::GetEncoding($ansi)
} catch { }
$env:PYTHONUTF8 = "1"
# :replace 很重要——日誌裡一個 ✓ 曾經丟 UnicodeEncodeError，
# 把一次成功的求解覆寫成「失敗」。
$env:PYTHONIOENCODING = "cp$($ansi):replace"

function Write-Msg {
    param(
        [Parameter(Position = 0)][AllowEmptyString()][string]$Text = '',
        [Parameter(Position = 1)][string]$Color = ''
    )
    $width = 100
    try {
        $w = $Host.UI.RawUI.WindowSize.Width
        if ($w -gt 20) { $width = $w - 1 }
    } catch { }
    $lines = @(); $buf = ''; $used = 0
    foreach ($ch in $Text.ToCharArray()) {
        $cw = if ([int][char]$ch -ge 0x1100) { 2 } else { 1 }
        if ($used + $cw -gt $width) { $lines += $buf; $buf = ''; $used = 0 }
        $buf += $ch; $used += $cw
    }
    $lines += $buf
    foreach ($line in $lines) {
        if ($Color) { Write-Host $line -ForegroundColor $Color } else { Write-Host $line }
    }
}
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backend = Join-Path $root "backend"
$venvPy = Join-Path $backend ".venv\Scripts\python.exe"
$dist = Join-Path $root "frontend\dist"

function Test-PortInUse([int]$p) {
    [bool](Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue)
}

function Get-ModelStatus([string]$url) {
    try {
        $r = Invoke-WebRequest -Uri "$url/api/health" -UseBasicParsing -TimeoutSec 3
        # PS 5.1 的 .Content 會把沒帶 charset 的 JSON 當 ISO-8859-1 解，中文變亂碼
        $text = [System.Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray())
        return ($text | ConvertFrom-Json).simai
    }
    catch { return $null }
}

function Assert-Step([string]$what) {
    if ($LASTEXITCODE -ne 0) {
        Write-Msg "$what 失敗（結束碼 $LASTEXITCODE）。請檢查網路或 Proxy 後重新執行 start.bat。" Red
        Write-Msg "若一再失敗，刪除 backend\.venv 資料夾後再執行一次。" Yellow
        exit 1
    }
}

Write-Msg "=== 天線佈局 AI 預測工具 ===" Cyan
Write-Msg "HFSS x SimAI｜虎門科技" DarkGray
Write-Msg ""

if (-not (Test-Path $dist)) {
    Write-Msg "找不到前端 dist。維護者請先執行：npm ci; npm run build" Red
    exit 1
}

# 埠被佔用時往後找一個可用的（明確指定 -Port 則不位移）
$explicitPort = $PSBoundParameters.ContainsKey("Port")
if (Test-PortInUse $Port) {
    if ($explicitPort) {
        Write-Msg "連接埠 $Port 已被佔用，且為明確指定，不自動位移。" Red
        exit 1
    }
    # 佔用者是誰？講出 PID 與程式名——使用者才分得出
    # 「我自己剛才沒關」與「別的服務」。
    $owner = ""
    try {
        $conn = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue |
                Select-Object -First 1
        if ($conn) {
            $op = Get-Process -Id $conn.OwningProcess -ErrorAction SilentlyContinue
            if ($op) { $owner = " PID $($op.Id)（$($op.ProcessName)）" }
        }
    } catch { }

    # 佔用者就是本工具的話，沿用它，不要再開第二份後端。
    # 使用者常常只關掉瀏覽器分頁就以為關掉工具了。
    $reuse = $false
    try {
        $h = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/api/health" -UseBasicParsing -TimeoutSec 3
        if ($h.StatusCode -eq 200 -and $h.Content -match '"simai"') { $reuse = $true }
    } catch { }
    if ($reuse) {
        Write-Msg "偵測到本工具已在 http://127.0.0.1:$Port 執行，沿用現有後端。" Green
        if (-not $NoBrowser) {
            try { Start-Process "http://127.0.0.1:$Port" }
            catch { Write-Msg "請自行開啟：http://127.0.0.1:$Port" Yellow }
        }
        exit 0
    }

    $found = $false
    $last = $Port + 20
    for ($p = $Port + 1; $p -le $last; $p++) {
        if (-not (Test-PortInUse $p)) { $Port = $p; $found = $true; break }
    }
    if (-not $found) {
        Write-Msg "連接埠 $($Port) 到 $last 全部被佔用，請先關掉其中一個服務。" Red
        exit 1
    }
    Write-Msg "埠被$owner佔用，改試 $Port。" Yellow
}

# 環境（uv 三層策略：全域 uv → 裝進 venv 的 uv → 純 pip）
# ★ 「裝好了沒」看 .install_ok，不看 python.exe 在不在。
# 第一次安裝被中斷（網路、Proxy）會留下有 python.exe、缺套件的半套 venv；
# 只看 python.exe 的話之後每次都跳過安裝，症狀變成 uvicorn 起不來，
# 完全看不出是安裝的問題。標記檔記下鎖檔雜湊，鎖檔改了也會重裝。
$lockFile = Join-Path $backend "requirements.lock.txt"
$installMark = Join-Path $backend ".venv\.install_ok"
$lockHash = (Get-FileHash $lockFile -Algorithm SHA256).Hash
$installed = $false
if ((Test-Path $venvPy) -and (Test-Path $installMark)) {
    $installed = ((Get-Content $installMark -Raw).Trim() -eq $lockHash)
}
if (-not $installed) {
    if (Test-Path $venvPy) {
        Write-Msg "執行環境不完整或相依套件有更新，重新安裝套件..." Yellow
    }
    else {
        Write-Msg "首次啟動，建立執行環境（約一分鐘）..." Yellow
    }
    $uv = Get-Command uv -ErrorAction SilentlyContinue
    if ($uv) {
        if (-not (Test-Path $venvPy)) {
            & uv venv (Join-Path $backend ".venv")
            Assert-Step "建立執行環境（uv venv）"
        }
        & uv pip install --python $venvPy -r $lockFile
        Assert-Step "安裝套件（uv pip install）"
    }
    else {
        if (-not (Test-Path $venvPy)) {
            $py = $null
            # ★ 只列**實際跑過整套流程**的版本。清單決定使用者拿到哪個直譯器；
            # 列一個沒驗證過的版本，等於讓使用者第一次執行就踩到你沒測過的路徑。
            foreach ($v in @("3.12")) {
                try {
                    & py "-$v-64" -c "exit()" 2>$null
                    if ($LASTEXITCODE -eq 0) { $py = "py -$v-64"; break }
                }
                catch { }   # py.exe 找不到版本時寫 stderr，會被包成終止例外，必須吞掉
            }
            if (-not $py) { $py = "python" }
            & cmd /c "$py -m venv `"$(Join-Path $backend '.venv')`""
            Assert-Step "建立執行環境（$py -m venv）"
        }
        & $venvPy -m pip install --upgrade pip uv
        Assert-Step "安裝 pip 與 uv"
        $venvUv = Join-Path $backend ".venv\Scripts\uv.exe"
        if (Test-Path $venvUv) {
            & $venvUv pip install --python $venvPy -r $lockFile
        }
        else {
            & $venvPy -m pip install -r $lockFile
        }
        Assert-Step "安裝套件"
    }
    Set-Content -Path $installMark -Value $lockHash -Encoding ASCII
    Write-Msg "執行環境安裝完成。" Green
}

if ($ModelLoadTimeoutSec -gt 0) { $env:SIMAI_LOAD_TIMEOUT = "$ModelLoadTimeoutSec" }
if ($SimAIModelDir) { $env:SIMAI_MODEL_DIR = $SimAIModelDir }
$env:SIMAI_MODEL_NAME = $SimAIModelName
$env:SIMAI_OUTPUT_FIELD = $SimAIOutputField
$env:PYTHONUTF8 = "1"
$env:PYTHONIOENCODING = "utf-8"

$appUrl = "http://127.0.0.1:$Port"
$server = $null
try {
    Write-Msg "啟動服務 $appUrl ..." Yellow
    $server = Start-Process -FilePath $venvPy `
        -ArgumentList @("-m", "uvicorn", "app.main:app", "--host", "127.0.0.1", "--port", "$Port") `
        -WorkingDirectory $backend -NoNewWindow -PassThru
    $null = $server.Handle   # 先拿 handle，程序結束後 ExitCode 才讀得到

    # ★ 只等「HTTP 起來」，不等模型載好——模型在後端背景載入，進度下面另外報。
    # 用時間截止，不用圈數：埠還沒開時每次健康檢查會卡滿 2 秒逾時
    # （Windows 對 localhost 的拒絕連線會重試），圈數換算成秒數隨機器而變。
    $ready = $false
    $sw = [System.Diagnostics.Stopwatch]::StartNew()
    while ($sw.Elapsed.TotalSeconds -lt $StartupTimeoutSec) {
        if ($server.HasExited) { break }
        Start-Sleep -Milliseconds 500
        try {
            $h = Invoke-WebRequest -Uri "$appUrl/api/health" -UseBasicParsing -TimeoutSec 2
            if ($h.StatusCode -eq 200) { $ready = $true; break }
        }
        catch { }
    }

    if (-not $ready) {
        if ($server.HasExited) {
            Write-Msg "後端程序已結束（結束碼 $($server.ExitCode)），原因見上方訊息。" Red
            Write-Msg "若是 ModuleNotFoundError，刪除 backend\.venv\.install_ok 後重新執行，會重裝套件。" Yellow
        }
        else {
            Write-Msg "網頁服務在 $StartupTimeoutSec 秒內沒有回應。可加參數 -StartupTimeoutSec 調大上限。" Red
        }
        exit 1
    }

    Write-Msg "服務就緒：$appUrl（模型在背景載入，網頁上會顯示進度）" Green
    if (-not $NoBrowser) {
        try { Start-Process $appUrl }
        catch {
            Write-Msg "無法自動開啟瀏覽器，請自行貼上網址：$appUrl" Yellow
        }
    }
    Write-Msg "按 Ctrl+C 結束服務。" Cyan

    # 主控台每 10 秒報一次模型載入進度，直到就緒或失敗
    $modelState = "loading"
    $nextCheck = 0
    while (-not $server.HasExited) {
        Start-Sleep -Seconds 1
        if ($modelState -ne "loading" -or $sw.Elapsed.TotalSeconds -lt $nextCheck) { continue }
        $nextCheck = $sw.Elapsed.TotalSeconds + 10
        $st = Get-ModelStatus $appUrl
        if ($null -eq $st) { continue }
        $modelState = $st.state
        if ($st.state -eq "loading") {
            Write-Msg "模型載入中…已 $([int]$st.loading_seconds) 秒（上限 $([int]$st.load_timeout) 秒）" DarkGray
        }
        elseif ($st.state -eq "ready") {
            Write-Msg "模型就緒（載入 $($st.load_seconds) 秒），可以開始操作。" Green
        }
        else {
            Write-Msg "模型未就緒：$($st.reason)" Red
            Write-Msg "修正後在網頁上按「重新載入模型」即可，不必重開。" Yellow
        }
    }
}
finally {
    if ($null -ne $server) {
        try {
            if (-not $server.HasExited) { & taskkill /PID $server.Id /T /F | Out-Null }
        }
        catch { Write-Msg "taskkill 未能收掉程序樹" Yellow }
    }
    $left = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    if ($left) {
        Write-Msg "警告：埠 $Port 仍被佔用（PID $($left[0].OwningProcess)）" Red
    }
    else {
        Write-Msg "服務已結束，埠 $Port 已釋放。" Green
    }
}
