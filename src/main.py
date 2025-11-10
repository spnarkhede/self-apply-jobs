"""
Main entry point for the automated job search and application system.
"""
import os
import sys

def main():
    # Load configuration
    try:
        from config.settings import load_config
        config = load_config()
    except Exception as e:
        print(f"Error loading configuration: {e}")
        return
    
    # Initialize modules with error handling
    try:
        from job_aggregator.aggregator import JobAggregator
        job_aggregator = JobAggregator(config)
    except Exception as e:
        print(f"Error initializing job aggregator: {e}")
        job_aggregator = None
    
    try:
        from skills_analysis.analyzer import SkillsAnalyzer
        skills_analyzer = SkillsAnalyzer(config)
    except Exception as e:
        print(f"Error initializing skills analyzer: {e}")
        skills_analyzer = None
    
    try:
        from application_bot.bot import ApplicationBot
        application_bot = ApplicationBot(config)
    except Exception as e:
        print(f"Error initializing application bot: {e}")
        application_bot = None
    
    # Display menu
    while True:
        print("\n=== Automated Job Search & Application System ===")
        print("1. Search Jobs")
        print("2. Analyze Skills")
        print("3. Apply to Jobs")
        print("4. Open Dashboard")
        print("5. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == "1":
            if job_aggregator is None:
                print("Job aggregator module not available.")
                continue
                
            # Job search functionality
            title = input("Job title: ")
            location = input("Location: ")
            radius = input("Radius (km): ")
            
            jobs = job_aggregator.search_jobs(title, location, radius)
            print(f"Found {len(jobs)} jobs")
            
        elif choice == "2":
            if skills_analyzer is None:
                print("Skills analyzer module not available.")
                continue
                
            # Skills analysis functionality
            resume_path = input("Path to resume: ")
            job_description = input("Job description (or leave blank): ")
            
            analysis = skills_analyzer.analyze_resume(resume_path, job_description)
            print("Skills Analysis:")
            print(analysis)
            
        elif choice == "3":
            if application_bot is None:
                print("Application bot module not available.")
                continue
                
            # Application bot functionality
            job_url = input("Job URL: ")
            resume_path = input("Path to resume: ")
            cover_letter_path = input("Path to cover letter (optional): ")
            
            result = application_bot.apply_to_job(job_url, resume_path, cover_letter_path)
            print(f"Application result: {result}")
            
        elif choice == "4":
            # Run dashboard
            try:
                from dashboard.app import run_dashboard
                run_dashboard(config)
            except Exception as e:
                print(f"Error running dashboard: {e}")
                print("Dashboard module not available.")
            
        elif choice == "5":
            print("Exiting...")
            sys.exit(0)
            
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()