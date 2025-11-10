"""
Setup script for the automated job search system.
"""
import os
import subprocess
import sys

def setup_project():
    """
    Setup the project environment and dependencies.
    """
    print("Setting up the Automated Job Search & Application System...")
    
    # Create necessary directories
    directories = ['resumes', 'cover_letters', 'output']
    for directory in directories:
        if not os.path.exists(directory):
            os.makedirs(directory)
            print(f"Created directory: {directory}")
    
    # Check if virtual environment exists
    venv_path = 'venv'
    if not os.path.exists(venv_path):
        print("Creating virtual environment...")
        subprocess.run([sys.executable, '-m', 'venv', venv_path])
    
    # Install dependencies
    print("Installing dependencies...")
    pip_path = os.path.join(venv_path, 'Scripts', 'pip.exe') if os.name == 'nt' else os.path.join(venv_path, 'bin', 'pip')
    
    try:
        subprocess.run([pip_path, 'install', '-r', 'requirements.txt'])
        print("Dependencies installed successfully!")
    except Exception as e:
        print(f"Error installing dependencies: {e}")
        print("Please make sure you have Python and pip installed.")
        return False
    
    # Create .env file from example if it doesn't exist
    if not os.path.exists('.env'):
        if os.path.exists('.env.example'):
            with open('.env.example', 'r') as example_file:
                with open('.env', 'w') as env_file:
                    env_file.write(example_file.read())
            print("Created .env file from .env.example")
            print("Please update .env with your actual credentials!")
        else:
            print("Warning: .env.example not found. Please create .env file manually.")
    
    print("\nSetup completed successfully!")
    print("\nNext steps:")
    print("1. Update the .env file with your actual credentials")
    print("2. Activate the virtual environment:")
    print("   Windows: venv\\Scripts\\activate")
    print("   macOS/Linux: source venv/bin/activate")
    print("3. Run the application: python src/main.py")
    
    return True

if __name__ == "__main__":
    setup_project()