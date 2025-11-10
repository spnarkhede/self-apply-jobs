@echo off
REM Script to run the automated job search system

echo Starting Automated Job Search & Application System...

REM Check if virtual environment exists
if exist "venv\Scripts\activate.bat" (
    echo Activating virtual environment...
    call venv\Scripts\activate.bat
) else (
    echo Warning: Virtual environment not found. Using system Python.
    echo Consider running setup.py first.
)

REM Run the main application
echo Starting application...
python src/main.py

pause