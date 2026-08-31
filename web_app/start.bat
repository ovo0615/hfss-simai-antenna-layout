@echo off
rem Antenna Layout AI Prediction Tool - launcher
rem ASCII ONLY. cmd.exe tokenizes this file with the system ANSI codepage,
rem so a single non-ASCII byte (even inside a rem comment) can break parsing
rem or silently take the wrong branch of an if/else. All Chinese output
rem lives in start.ps1, which has a Unicode-safe tokenizer.
rem Do NOT switch the console to codepage 65001 here: it miscounts
rem double-width CJK cells and duplicates/eats characters on screen.
rem start.ps1 aligns the console to the system ANSI codepage instead.
set "PYTHONUTF8=1"
rem A safe default; start.ps1 refines this to the system ANSI codepage
rem with :replace, so one stray glyph in a log cannot raise
rem UnicodeEncodeError and overwrite a successful run's status.
set "PYTHONIOENCODING=utf-8"
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0start.ps1" %*
if not "%ERRORLEVEL%"=="0" pause
