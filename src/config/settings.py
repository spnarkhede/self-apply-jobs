"""
Configuration settings for the automated job search system.
"""
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def load_config():
    """
    Load configuration from environment variables.
    """
    return {
        # API Keys
        'OPENAI_API_KEY': os.getenv('OPENAI_API_KEY', ''),
        'LINKEDIN_EMAIL': os.getenv('LINKEDIN_EMAIL', ''),
        'LINKEDIN_PASSWORD': os.getenv('LINKEDIN_PASSWORD', ''),
        
        # Database settings
        'DATABASE_URL': os.getenv('DATABASE_URL', 'sqlite:///jobs.db'),
        
        # Web driver settings
        'WEB_DRIVER': os.getenv('WEB_DRIVER', 'chrome'),
        'HEADLESS': os.getenv('HEADLESS', 'True').lower() == 'true',
        
        # File paths
        'RESUME_PATH': os.getenv('RESUME_PATH', 'resumes/'),
        'COVER_LETTER_PATH': os.getenv('COVER_LETTER_PATH', 'cover_letters/'),
        'OUTPUT_PATH': os.getenv('OUTPUT_PATH', 'output/'),
        
        # Application settings
        'DEFAULT_LOCATION': os.getenv('DEFAULT_LOCATION', 'Remote'),
        'DEFAULT_RADIUS': int(os.getenv('DEFAULT_RADIUS', '50')),
        
        # Skills analysis settings
        'SKILLS_THRESHOLD': float(os.getenv('SKILLS_THRESHOLD', '0.7')),
    }