"""
Main entry point for the automated job search and application system.
"""
import os
import sys
from config.settings import load_config
from job_aggregator.aggregator import JobAggregator
from skills_analysis.analyzer import SkillsAnalyzer
from application_bot.bot import ApplicationBot
from dashboard.app import run_dashboard

def main():
    # Load configuration
    config = load_config()
    
    # Initialize modules
    job_aggregator = JobAggregator(config)
    skills_analyzer = SkillsAnalyzer(config)
    application_bot = ApplicationBot(config)
    
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
            # Job search functionality
            title = input("Job title: ")
            location = input("Location: ")
            radius = input("Radius (km): ")
            
            jobs = job_aggregator.search_jobs(title, location, radius)
            print(f"Found {len(jobs)} jobs")
            
        elif choice == "2":
            # Skills analysis functionality
            resume_path = input("Path to resume: ")
            job_description = input("Job description (or leave blank): ")
            
            analysis = skills_analyzer.analyze_resume(resume_path, job_description)
            print("Skills Analysis:")
            print(analysis)
            
        elif choice == "3":
            # Application bot functionality
            job_url = input("Job URL: ")
            resume_path = input("Path to resume: ")
            cover_letter_path = input("Path to cover letter (optional): ")
            
            result = application_bot.apply_to_job(job_url, resume_path, cover_letter_path)
            print(f"Application result: {result}")
            
        elif choice == "4":
            # Run dashboard
            run_dashboard(config)
            
        elif choice == "5":
            print("Exiting...")
            sys.exit(0)
            
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()