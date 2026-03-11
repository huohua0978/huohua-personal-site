@echo off
setlocal
cd /d D:\????\ai\codex project\personal-site

set /p msg=Commit message (default: update): 
if "%msg%"=="" set msg=update

git add -A
if errorlevel 1 goto :err

git commit -m "%msg%"
if errorlevel 1 goto :err

git push
if errorlevel 1 goto :err

echo.
echo Done. Changes pushed to GitHub.
pause
exit /b 0

:err
echo.
echo Publish failed. Check the output above.
pause
exit /b 1
