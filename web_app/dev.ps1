#Requires -Version 5.1
<#
    開發模式：Vite dev server（5182，含 /api proxy）＋ FastAPI 後端（8012）。
    需要 Node.js。使用者版請用 start.ps1（不需要 Node）。

    此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
#>

[CmdletBinding()]
param(
    [int]$Port = 8012,
    [int]$FrontendPort = 5182,
    [string]$SimAIModelDir = "",
    [string]$SimAIModelName = "surface",
    [string]$SimAIOutputField = "gain"
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backend = Join-Path $root "backend"
$frontend = Join-Path $root "frontend"
$venvPy = Join-Path $backend ".venv\Scripts\python.exe"

function Test-PortInUse([int]$p) {
    [bool](Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue)
}

Write-Host "=== 天線佈局 AI 預測工具（開發模式）===" -ForegroundColor Cyan

foreach ($p in @($Port, $FrontendPort)) {
    if (Test-PortInUse $p) {
        $pid0 = (Get-NetTCPConnection -LocalPort $p -State Listen)[0].OwningProcess
        Write-Host "連接埠 $p 已被 PID $pid0 佔用，請先關閉它。" -ForegroundColor Red
        exit 1
    }
}

# 1. 後端環境（uv 優先，沒有就退回 venv + pip）
if (-not (Test-Path $venvPy)) {
    Write-Host "建立後端虛擬環境..." -ForegroundColor Yellow
    $uv = Get-Command uv -ErrorAction SilentlyContinue
    if ($uv) {
        & uv venv (Join-Path $backend ".venv")
        & uv pip install --python $venvPy -r (Join-Path $backend "requirements.lock.txt")
    }
    else {
        & python -m venv (Join-Path $backend ".venv")
        & $venvPy -m pip install --upgrade pip
        & $venvPy -m pip install -r (Join-Path $backend "requirements.lock.txt")
    }
}

# 2. 前端相依
if (-not (Test-Path (Join-Path $frontend "node_modules"))) {
    Write-Host "安裝前端相依..." -ForegroundColor Yellow
    Push-Location $frontend
    try { & npm install --no-audit --no-fund } finally { Pop-Location }
}

# 3. 傳給後端的 SimAI 設定
if ($SimAIModelDir) { $env:SIMAI_MODEL_DIR = $SimAIModelDir }
$env:SIMAI_MODEL_NAME = $SimAIModelName
$env:SIMAI_OUTPUT_FIELD = $SimAIOutputField
$env:PYTHONUTF8 = "1"

$server = $null
$vite = $null
try {
    Write-Host "啟動後端 http://127.0.0.1:$Port ..." -ForegroundColor Yellow
    $server = Start-Process -FilePath $venvPy `
        -ArgumentList @("-m", "uvicorn", "app.main:app", "--host", "127.0.0.1",
                        "--port", "$Port", "--reload") `
        -WorkingDirectory $backend -NoNewWindow -PassThru

    $ready = $false
    for ($i = 0; $i -lt 120; $i++) {
        if ($server.HasExited) { break }
        Start-Sleep -Milliseconds 500
        try {
            $h = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/api/health" `
                -UseBasicParsing -TimeoutSec 2
            if ($h.StatusCode -eq 200) { $ready = $true; break }
        }
        catch { $ready = $false }
    }
    if (-not $ready) {
        Write-Host "後端未能在時限內就緒。" -ForegroundColor Red
        exit 1
    }
    Write-Host "後端就緒。" -ForegroundColor Green

    Write-Host "啟動前端 http://127.0.0.1:$FrontendPort ..." -ForegroundColor Yellow
    $npmCmd = (Get-Command npm.cmd -ErrorAction SilentlyContinue)
    if (-not $npmCmd) { $npmCmd = (Get-Command npm -ErrorAction Stop) }
    $vite = Start-Process -FilePath $npmCmd.Source `
        -ArgumentList @("run", "dev") `
        -WorkingDirectory $frontend -NoNewWindow -PassThru

    Start-Sleep -Seconds 3
    $appUrl = "http://127.0.0.1:$FrontendPort"
    try { Start-Process $appUrl }
    catch { Write-Host "無法自動開啟瀏覽器，請自行貼上：$appUrl" -ForegroundColor Yellow }

    Write-Host ""
    Write-Host "開發伺服器執行中。按 Ctrl+C 結束。" -ForegroundColor Cyan
    while (-not $server.HasExited) { Start-Sleep -Seconds 1 }
}
finally {
    foreach ($proc in @($vite, $server)) {
        if ($null -ne $proc) {
            try {
                if (-not $proc.HasExited) { & taskkill /PID $proc.Id /T /F | Out-Null }
            }
            catch { Write-Host "taskkill 未能收掉程序樹（PID $($proc.Id)）" -ForegroundColor Yellow }
        }
    }
    foreach ($p in @($Port, $FrontendPort)) {
        $left = Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue
        if ($left) {
            Write-Host "警告：埠 $p 仍被佔用（PID $($left[0].OwningProcess)）" -ForegroundColor Red
        }
        else {
            Write-Host "埠 $p 已釋放。" -ForegroundColor Green
        }
    }
}
