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
if (-not (Test-Path $venvPy)) {
    Write-Msg "首次啟動，建立執行環境（約一分鐘）..." Yellow
    $uv = Get-Command uv -ErrorAction SilentlyContinue
    if ($uv) {
        & uv venv (Join-Path $backend ".venv")
        & uv pip install --python $venvPy -r (Join-Path $backend "requirements.lock.txt")
    }
    else {
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
        & $venvPy -m pip install --upgrade pip uv
        $venvUv = Join-Path $backend ".venv\Scripts\uv.exe"
        if (Test-Path $venvUv) {
            & $venvUv pip install --python $venvPy -r (Join-Path $backend "requirements.lock.txt")
        }
        else {
            & $venvPy -m pip install -r (Join-Path $backend "requirements.lock.txt")
        }
    }
}

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

    $ready = $false
    for ($i = 0; $i -lt 180; $i++) {
        if ($server.HasExited) { break }
        Start-Sleep -Milliseconds 500
        try {
            $h = Invoke-WebRequest -Uri "$appUrl/api/health" -UseBasicParsing -TimeoutSec 2
            if ($h.StatusCode -eq 200) { $ready = $true; break }
        }
        catch { $ready = $false }
    }

    if (-not $ready) {
        Write-Msg "服務未能在時限內就緒。" Red
        exit 1
    }

    Write-Msg "服務就緒：$appUrl" Green
    if (-not $NoBrowser) {
        try { Start-Process $appUrl }
        catch {
            Write-Msg "無法自動開啟瀏覽器，請自行貼上網址：$appUrl" Yellow
        }
    }
    Write-Msg "按 Ctrl+C 結束服務。" Cyan
    while (-not $server.HasExited) { Start-Sleep -Seconds 1 }
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
