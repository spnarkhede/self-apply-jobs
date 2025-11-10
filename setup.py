"""
Setup script for the automated job search system.
"""
import os
import subprocess
import sys
import platform

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
    
    # Determine the correct pip path based on OS
    if platform.system() == "Windows":
        pip_path = os.path.join(venv_path, 'Scripts', 'pip.exe')
    else:
        pip_path = os.path.join(venv_path, 'bin', 'pip')
    
    # Try installing with pre-compiled wheels first
    try:
        subprocess.run([pip_path, 'install', '--only-binary=all', '-r', 'requirements.txt'])
        print("Dependencies installed successfully with pre-compiled wheels!")
    except Exception as e:
        print(f"Error installing with pre-compiled wheels: {e}")
        print("Trying alternative installation method...")
        
        # Alternative approach - install packages individually
        essential_packages = [
            'selenium',
            'beautifulsoup4',
            'requests',
            'pandas',
            'numpy',
            'scikit-learn',
            'python-docx',
            'PyPDF2',
            'pdfplumber',
            'nltk',
            'openai',
            'flask',
            'flask-sqlalchemy',
            'psycopg2',
            'sqlalchemy',
            'python-dotenv',
            'schedule'
        ]
        
        for package in essential_packages:
            try:
                subprocess.run([pip_path, 'install', '--only-binary=all', package])
                print(f"Installed {package} successfully")
            except Exception as e:
                print(f"Failed to install {package}: {e}")
                print("Continuing with other packages...")
    
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
    if platform.system() == "Windows":
        print("   Windows: venv\\Scripts\\activate")
    else:
        print("   macOS/Linux: source venv/bin/activate")
    print("3. Run the application: python src/main.py")
    
    return True

def install_build_tools():
    """
    Provide guidance for installing build tools on Windows.
    """
    if platform.system() == "Windows":
        print("\nIf you encounter build errors, you may need to install Microsoft C++ Build Tools:")
        print("1. Download Microsoft C++ Build Tools from:")
        print("   https://visualstudio.microsoft.com/visual-cpp-build-tools/")
        print("2. Install with C++ build tools workload")
        print("3. Restart your command prompt and try again")

if __name__ == "__main__":
    setup_project()
    install_build_tools()