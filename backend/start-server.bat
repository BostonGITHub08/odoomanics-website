@echo off
echo ========================================
echo Starting OdooManics Contact Form Backend
echo ========================================
echo.

REM Check if .env exists
if not exist .env (
    echo Creating .env file...
    (
        echo SMTP_HOST=smtp.odoomanics.com
        echo SMTP_PORT=587
        echo SMTP_SECURE=false
        echo SMTP_USER=info@odoomanics.com
        echo SMTP_PASSWORD=WZMYL9nwcMsnw9qZhsFt
        echo SMTP_FROM=info@odoomanics.com
        echo CONTACT_EMAIL=info@odoomanics.com
        echo PORT=3001
    ) > .env
    echo .env file created!
    echo.
)

REM Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting backend server...
echo Server will run on: http://localhost:3001
echo Press Ctrl+C to stop the server
echo.
call npm start

