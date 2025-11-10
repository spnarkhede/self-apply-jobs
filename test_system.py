"""
Test suite for the automated job search system.
"""
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from config.settings import load_config
from job_aggregator.aggregator import JobAggregator
from skills_analysis.analyzer import SkillsAnalyzer
from application_bot.bot import ApplicationBot

def test_config_loading():
    """Test that configuration loads correctly."""
    try:
        config = load_config()
        assert isinstance(config, dict)
        print("✓ Configuration loading test passed")
        return True
    except Exception as e:
        print(f"✗ Configuration loading test failed: {e}")
        return False

def test_job_aggregator():
    """Test the job aggregator module."""
    try:
        config = load_config()
        aggregator = JobAggregator(config)
        jobs = aggregator.search_jobs("Software Engineer", "Remote", "50")
        print("✓ Job aggregator test passed")
        return True
    except Exception as e:
        print(f"✗ Job aggregator test failed: {e}")
        return False

def test_skills_analyzer():
    """Test the skills analyzer module."""
    try:
        config = load_config()
        analyzer = SkillsAnalyzer(config)
        # Using dummy data for testing
        analysis = analyzer.analyze_resume("dummy_path", "Python, JavaScript, AWS")
        assert isinstance(analysis, dict)
        print("✓ Skills analyzer test passed")
        return True
    except Exception as e:
        print(f"✗ Skills analyzer test failed: {e}")
        return False

def test_application_bot():
    """Test the application bot module."""
    try:
        config = load_config()
        bot = ApplicationBot(config)
        # We won't actually submit an application in the test
        print("✓ Application bot initialization test passed")
        return True
    except Exception as e:
        print(f"✗ Application bot test failed: {e}")
        return False

def run_all_tests():
    """Run all tests and report results."""
    print("Running tests for Automated Job Search System...\n")
    
    tests = [
        test_config_loading,
        test_job_aggregator,
        test_skills_analyzer,
        test_application_bot
    ]
    
    passed = 0
    total = len(tests)
    
    for test in tests:
        if test():
            passed += 1
    
    print(f"\nTests completed: {passed}/{total} passed")
    
    if passed == total:
        print("All tests passed! The system is ready to use.")
        return True
    else:
        print("Some tests failed. Please check the implementation.")
        return False

if __name__ == "__main__":
    run_all_tests()