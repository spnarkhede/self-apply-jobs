"""
Dashboard module for tracking job applications and viewing analytics.
"""
from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy

def run_dashboard(config):
    """
    Run the web-based dashboard for the job application system.
    """
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = config['DATABASE_URL']
    db = SQLAlchemy(app)
    
    # Define models
    class JobApplication(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        job_title = db.Column(db.String(200), nullable=False)
        company = db.Column(db.String(200), nullable=False)
        status = db.Column(db.String(50), nullable=False)
        date_applied = db.Column(db.DateTime, nullable=False)
        url = db.Column(db.String(500), nullable=True)
        
        def to_dict(self):
            return {
                'id': self.id,
                'job_title': self.job_title,
                'company': self.company,
                'status': self.status,
                'date_applied': self.date_applied.isoformat() if self.date_applied else None,
                'url': self.url
            }
    
    # Create tables
    with app.app_context():
        db.create_all()
    
    # Routes
    @app.route('/')
    def index():
        return render_template('index.html')
    
    @app.route('/api/applications')
    def get_applications():
        applications = JobApplication.query.all()
        return jsonify([app.to_dict() for app in applications])
    
    @app.route('/api/stats')
    def get_stats():
        total_apps = JobApplication.query.count()
        # Add more stats as needed
        return jsonify({
            'total_applications': total_apps
        })
    
    # Run the app
    app.run(debug=True, host='0.0.0.0', port=5000)

if __name__ == '__main__':
    # This is just for testing the dashboard independently
    # In production, it will be called from main.py
    class MockConfig:
        DATABASE_URL = 'sqlite:///test.db'
    
    run_dashboard(MockConfig())