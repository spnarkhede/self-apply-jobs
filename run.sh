#!/bin/bash
# Script to run the automated job search system

echo "Starting Automated Job Search & Application System..."

# Check if virtual environment exists
if [ -f "venv/bin/activate" ]; then
    echo "Activating virtual environment..."
    source venv/bin/activate
else
    echo "Warning: Virtual environment not found. Using system Python."
    echo "Consider running setup.py first."
fi

# Run the main application
echo "Starting application..."
python src/main.py