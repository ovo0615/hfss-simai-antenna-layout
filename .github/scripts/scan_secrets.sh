#!/usr/bin/env bash
# 公開版的洩漏掃描。本機與 CI 跑的是同一支腳本。
#
# 為什麼需要它：這個專案的 pipeline 會把 GLOW 寫在 %APPDATA% 底下的模型目錄
# 原封不動寫進追蹤中的 JSON。手動修過一次，重新訓練之後又寫回來了。
# 寫出端已經改成可攜格式，但那是「不會再犯」，不是「犯了會被擋下來」——
# 這支腳本是後者。
#
# 用法（順序很重要）：
#     git add -A                             ← 先。git grep 只掃已追蹤的檔案，
#     bash .github/scripts/scan_secrets.sh      新加的檔案在 add 之前掃不到。
set -uo pipefail
cd "$(git rev-parse --show-toplevel)"

fail=0

# 二進位與產生物排除；掃描腳本自己也要排除，否則它定義的關鍵字清單
# 會讓它永遠對自己開紅燈。
EXC=(':!*.png' ':!*.jpg' ':!*.ico' ':!*package-lock.json'
     ':!web_app/frontend/dist/*' ':!.github/scripts/scan_secrets.sh')

# 允許清單：Ansys 的安裝路徑與文件裡的佔位符不是洩漏。
# 用 grep -v 濾，不用 lookahead——git grep 的 -E 是 POSIX ERE，不支援
# (?!...)：整條規則會直接 fatal，而不是照你想的那樣運作。
ALLOW='C:\\Program Files|C:\\path\\to|C:/path/to'

check () {   # check <說明> <regex>
  local label="$1" re="$2" out rc
  # ★ git grep 的離開碼：0=有命中、1=沒命中、>1=規則本身壞掉。
  # 不分辨的話，一條寫壞的規則會安靜地回報 [ok]，整份掃描看起來全過
  # 而其實那一項什麼都沒掃。寫這支腳本的過程就真的發生過一次。
  out=$(git grep -n -I -E "$re" -- . "${EXC[@]}"); rc=$?
  if [ "$rc" -gt 1 ]; then
    printf '\n[BROKEN] 規則無法執行（git grep 離開碼 %s）：%s\n' "$rc" "$label"
    fail=1
    return
  fi
  out=$(printf '%s' "$out" | grep -v -E "$ALLOW" || true)
  if [ -n "$out" ]; then
    printf '\n[FAIL] %s\n%s\n\n' "$label" "$(printf '%s' "$out" | cut -c1-160)"
    fail=1
  else
    printf '[ok]   %s\n' "$label"
  fi
}

# 詞界很重要：沒有「前面必須是非英文字母」這個條件，散文裡任何以 d 結尾的
# 字加上冒號反斜線都會命中——"not found:\n" 裡的 founD:\ 就符合字面比對，
# 但跟本機路徑一點關係也沒有。
check '本機絕對路徑（X:\ 或 X:/）' '(^|[^A-Za-z])[A-Za-z]:(\\|/)'
check '使用者家目錄'               '[Uu]sers[\\/][A-Za-z0-9._-]+[\\/]'
check '憑證與金鑰'                 'api[_-]?key|access[_-]?token|BEGIN [A-Z ]*PRIVATE KEY'
# 只在**帶值**時才報。ADR 在說明「授權為什麼擋不掉推論」時會提到
# ANSYSLMD_LICENSE_FILE 這個變數名稱——提到名字不是洩漏，寫出值才是。
check '授權伺服器（帶值）'         '(license[_.-]?server|ANSYSLMD_LICENSE_FILE)[^A-Za-z]{0,8}='
check '內網位址'                   '(^|[^0-9.])(10\.[0-9]+\.[0-9]+\.[0-9]+|192\.168\.[0-9]+\.[0-9]+)'

echo
echo '提醒：圖片是二進位，任何規則都掃不到。新增或重拍的截圖必須自己開來看過。'
if [ "$fail" -ne 0 ]; then
  echo '掃描未通過——上面每一項都要處理掉才能推上公開版。'
  exit 1
fi
echo '掃描通過。'
