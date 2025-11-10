"""
Utility functions for the automated job search system.
"""
import os
import json
from datetime import datetime

def save_job_data(jobs, filename=None):
    """
    Save job data to a JSON file.
    """
    if not filename:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"jobs_{timestamp}.json"
    
    with open(filename, 'w') as f:
        json.dump(jobs, f, indent=2)
    
    return filename

def load_job_data(filename):
    """
    Load job data from a JSON file.
    """
    with open(filename, 'r') as f:
        return json.load(f)

def create_directory(path):
    """
    Create a directory if it doesn't exist.
    """
    if not os.path.exists(path):
        os.makedirs(path)
    return path

def format_salary(salary):
    """
    Format salary information for display.
    """
    if isinstance(salary, str):
        return salary
    elif isinstance(salary, (int, float)):
        return f"${salary:,.2f}"
    else:
        return "Not specified"