"""
Skills analysis module for comparing candidate skills with job requirements.
"""
import re

# Global flag for spaCy availability
SPACY_AVAILABLE = False
nlp = None

# Try to import spaCy, but provide fallback if not available
try:
    import importlib
    spacy = importlib.import_module('spacy')
    SPACY_AVAILABLE = True
    try:
        # Use a lighter model if available
        nlp = spacy.load("en_core_web_sm")
    except OSError:
        # If model not found, disable spaCy features
        SPACY_AVAILABLE = False
        print("Warning: spaCy model not found. Using fallback methods.")
except ImportError:
    SPACY_AVAILABLE = False
    print("Warning: spaCy not available. Using fallback tokenization.")

class SkillsAnalyzer:
    def __init__(self, config):
        self.config = config
        # Common tech skills for matching
        self.tech_skills = [
            'Python', 'Java', 'JavaScript', 'C++', 'C#', 'Ruby', 'PHP', 'Swift', 'Go', 'Rust',
            'HTML', 'CSS', 'SQL', 'NoSQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
            'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git', 'Jenkins',
            'React', 'Angular', 'Vue.js', 'Node.js', 'Express', 'Django', 'Flask',
            'Machine Learning', 'Data Science', 'AI', 'NLP', 'Computer Vision',
            'Agile', 'Scrum', 'Project Management'
        ]
    
    def analyze_resume(self, resume_path, job_description=None):
        """
        Analyze a resume and compare with job description if provided.
        """
        # Extract text from resume (placeholder implementation)
        resume_text = self._extract_text_from_resume(resume_path)
        
        # Extract skills from resume
        resume_skills = self._extract_skills(resume_text)
        
        analysis = {
            'resume_skills': resume_skills,
            'skill_match_percentage': 0,
            'missing_skills': [],
            'recommendations': []
        }
        
        if job_description:
            # Extract required skills from job description
            job_skills = self._extract_skills(job_description)
            
            # Calculate skill match percentage
            matching_skills = set(resume_skills) & set(job_skills)
            if job_skills:
                analysis['skill_match_percentage'] = len(matching_skills) / len(job_skills) * 100
            
            # Identify missing skills
            analysis['missing_skills'] = list(set(job_skills) - set(resume_skills))
            
            # Provide recommendations
            analysis['recommendations'] = self._generate_recommendations(analysis['missing_skills'])
        
        return analysis
    
    def _extract_text_from_resume(self, resume_path):
        """
        Extract text content from a resume file.
        """
        # Placeholder implementation
        # In a real implementation, you would parse PDF, DOCX, etc.
        return "Sample resume text with Python, JavaScript, and AWS experience"
    
    def _extract_skills(self, text):
        """
        Extract skills from text using keyword matching.
        """
        found_skills = []
        text_lower = text.lower()
        
        # Enhanced skill extraction with better matching
        for skill in self.tech_skills:
            # Use word boundaries for better matching
            pattern = r'\b' + re.escape(skill.lower()) + r'\b'
            if re.search(pattern, text_lower):
                found_skills.append(skill)
        
        return found_skills
    
    def _generate_recommendations(self, missing_skills):
        """
        Generate recommendations for missing skills.
        """
        recommendations = []
        for skill in missing_skills:
            recommendations.append(f"Consider learning {skill} through online courses")
        return recommendations