# Automated Job Search & Application System

An end-to-end automated platform that:

- Finds relevant jobs based on filters (title, location, radius)
- Analyzes candidate skills vs. job requirements
- Auto-fills job applications and attaches files (resume, cover letter)
- Submits job applications automatically and tracks their status

## Project Structure

```
├── src/                     # Backend source code
│   ├── main.py              # Main entry point
│   ├── config/              # Configuration files
│   ├── job_aggregator/      # Job scraping and aggregation
│   ├── skills_analysis/     # Resume parsing and skills extraction
│   ├── application_bot/     # Application automation
│   ├── dashboard/           # Web dashboard for tracking
│   └── utils/               # Utility functions
├── frontend/                # Frontend React application
│   ├── src/                 # Frontend source code
│   │   ├── App.js           # Main application component
│   │   ├── index.js         # Entry point
│   │   ├── components/      # React components
│   │   ├── assets/          # Static assets
│   │   ├── utils/           # Utility functions
│   │   └── styles/          # CSS styles
│   ├── public/              # Public assets
│   └── package.json         # Frontend dependencies
├── requirements.txt         # Backend dependencies
├── setup.py                # Backend setup script
├── run.bat                 # Backend run script (Windows)
├── run.sh                  # Backend run script (Unix)
└── test_system.py          # Test suite
```

## Installation

### Backend Setup

#### For Windows Users (Recommended)

1. Clone the repository
2. Run the setup script:
   ```
   python setup.py
   ```

#### For All Users

1. Clone the repository
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
4. Install the required dependencies:
   ```
   pip install --only-binary=all -r requirements.txt
   ```

5. Set up your environment variables by copying `.env.example` to `.env` and filling in your credentials

6. Run the application:
   ```
   python src/main.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The frontend will be available at http://localhost:3000

## Windows-Specific Installation Notes

If you encounter build errors during installation (common with spaCy and related packages):

1. Install Microsoft C++ Build Tools:
   - Download from: https://visualstudio.microsoft.com/visual-cpp-build-tools/
   - Install with C++ build tools workload

2. Alternatively, use pre-compiled wheels:
   ```
   pip install --only-binary=all -r requirements.txt
   ```

3. If spaCy still causes issues, you can skip it and use the fallback tokenization:
   - Edit requirements.txt and comment out the spaCy line
   - The skills analyzer will automatically use fallback methods

## Modules

### Job Search Aggregator

Scrapes/aggregate jobs from APIs (LinkedIn, Indeed, Stepstone, etc.) and filters by title, location, radius, etc.

### Skills Analysis

Analyzes uploaded resume, compares user skills with job requirements, and recommends upskilling content.

### Autofill & Application Bot

Automatically fills out job portals, attaches personalized resumes and cover letters, and submits applications while logging status.

### Management Dashboard

Provides a web interface to view/track jobs, applications, outcomes, and manage documents and skills profiles.

## Key Features

- Multi-source job aggregation
- Skills gap analysis
- Automated application submission
- Application tracking dashboard
- Resume and cover letter management

## Troubleshooting

### ImportError Issues

If you see import errors, try:

1. Reinstalling with pre-compiled wheels:
   ```
   pip install --force-reinstall --only-binary=all -r requirements.txt
   ```

2. Installing packages individually:
   ```
   pip install --only-binary=all selenium beautifulsoup4 requests pandas numpy
   ```

### Missing Microsoft Visual C++ Error

On Windows, if you get "Microsoft Visual C++ 14.0 or greater is required":

1. Install Microsoft C++ Build Tools as described above
2. Or use pre-compiled wheels with `--only-binary=all` flag

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request