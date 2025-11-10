# Automated Job Search & Application System

An end-to-end automated platform that:

- Finds relevant jobs based on filters (title, location, radius)
- Analyzes candidate skills vs. job requirements
- Auto-fills job applications and attaches files (resume, cover letter)
- Submits job applications automatically and tracks their status

## Project Structure

```
src/
├── main.py              # Main entry point
├── config/              # Configuration files
├── job_aggregator/      # Job scraping and aggregation
├── skills_analysis/     # Resume parsing and skills extraction
├── application_bot/     # Application automation
├── dashboard/           # Web dashboard for tracking
└── utils/               # Utility functions
```

## Installation

1. Clone the repository
2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

3. Set up your environment variables by copying `.env.example` to `.env` and filling in your credentials

4. Run the application:

```bash
python src/main.py
```

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

