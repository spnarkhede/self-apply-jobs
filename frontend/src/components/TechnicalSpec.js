import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Database, Code, GitBranch, FileCode, CheckSquare, Server, Cpu, HardDrive } from 'lucide-react';

const TechnicalSpec = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Server },
    { id: 'api', label: 'API Endpoints', icon: Code },
    { id: 'database', label: 'Database Schema', icon: Database },
    { id: 'classes', label: 'Class Definitions', icon: GitBranch },
    { id: 'payloads', label: 'JSON Payloads', icon: FileCode },
    { id: 'flow', label: 'Job Flow', icon: Cpu }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h3 className="font-bold text-lg mb-2">AutoApply - Technical Specification</h3>
        <p className="text-gray-700">Detailed technical specification for the automated job discovery, skills analysis, and auto-application platform</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold mb-3 text-blue-600">Tech Stack</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Backend:</strong> Python 3.11 + FastAPI</li>
            <li><strong>Orchestration:</strong> Celery with Redis broker</li>
            <li><strong>Automation:</strong> Playwright (Python) in containers</li>
            <li><strong>Database:</strong> PostgreSQL (UUID primary keys)</li>
            <li><strong>Storage:</strong> S3-compatible for binary assets</li>
            <li><strong>Authentication:</strong> OAuth2 (Bearer tokens)</li>
            <li><strong>Frontend:</strong> React + Tailwind CSS</li>
          </ul>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold mb-3 text-green-600">High-level Components</h4>
          <ul className="space-y-2 text-sm">
            <li>• API Server (FastAPI)</li>
            <li>• Worker Pool (Celery)</li>
            <li>• Automation Workers (Playwright)</li>
            <li>• Connectors (Plugin modules)</li>
            <li>• Storage (Postgres + S3)</li>
            <li>• Auth & Secrets (OAuth + Vault)</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderAPIEndpoints = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">API Endpoints (REST)</h3>
        <p className="text-gray-600 mb-4">Base URL: <code className="bg-gray-100 p-1 rounded">https://api.autoapply.example/v1</code></p>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('auth')} className="mr-2">
              {expandedSections.auth ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Auth
          </h4>
          {expandedSections.auth && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <div className="font-mono text-sm mb-3">
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/auth/register</div>
                <div className="text-gray-600 text-xs mb-2">Create user account</div>
                <pre className="bg-white p-2 rounded text-xs mb-3">
{`{
  "email": "s@example.com",
  "password": "..."
}`}
                </pre>
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/auth/login</div>
                <div className="text-gray-600 text-xs mb-2">User login</div>
                <pre className="bg-white p-2 rounded text-xs mb-3">
{`{
  "email": "s@example.com",
  "password": "..."
}`}
                </pre>
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/auth/oauth/callback</div>
                <div className="text-gray-600 text-xs mb-2">Third-party OAuth callback</div>
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/auth/refresh</div>
                <div className="text-gray-600 text-xs">Refresh tokens</div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('user')} className="mr-2">
              {expandedSections.user ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            User Profile & Preferences
          </h4>
          {expandedSections.user && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <div className="font-mono text-sm mb-3">
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/users/me</div>
                <div className="text-gray-600 text-xs mb-2">Get profile</div>
                <div className="mb-2"><span className="text-yellow-600">PUT</span> /v1/users/me</div>
                <div className="text-gray-600 text-xs mb-2">Update profile/preferences</div>
                <pre className="bg-white p-2 rounded text-xs">
{`{
  "display_name": "Shubham Narkhede",
  "locations": [
    {
      "label": "Stuttgart, DE",
      "lat": 48.777,
      "lng": 9.1829,
      "radius_km": 40
    }
  ],
  "skills": ["Angular", "TypeScript", "Playwright"],
  "daily_apply_limit": 5,
  "auto_apply_mode": "manual_review"
}`}
                </pre>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('resume')} className="mr-2">
              {expandedSections.resume ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Resume Management
          </h4>
          {expandedSections.resume && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <div className="font-mono text-sm mb-3">
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/users/me/resumes</div>
                <div className="text-gray-600 text-xs mb-2">Upload resume file (multipart)</div>
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/users/me/resumes</div>
                <div className="text-gray-600 text-xs mb-2">List resume variants</div>
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/users/me/resumes/{'{resume_id}'}</div>
                <div className="text-gray-600 text-xs mb-2">Download resume</div>
                <div className="mb-2"><span className="text-red-600">DELETE</span> /v1/users/me/resumes/{'{resume_id}'}</div>
                <div className="text-gray-600 text-xs">Delete resume</div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('job')} className="mr-2">
              {expandedSections.job ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Job Discovery / Search
          </h4>
          {expandedSections.job && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <div className="font-mono text-sm mb-3">
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/jobs/search</div>
                <div className="text-gray-600 text-xs mb-2">Search for jobs</div>
                <pre className="bg-white p-2 rounded text-xs mb-3">
{`{
  "title": "Frontend Engineer",
  "keywords": ["Angular", "TypeScript"],
  "location": {
    "lat": 48.777,
    "lng": 9.183,
    "radius_km": 50
  },
  "remote": "hybrid",
  "sources": ["linkedin","indeed","company_career"],
  "posted_within_days": 14,
  "max_results": 100
}`}
                </pre>
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/jobs/{'{job_id}'}</div>
                <div className="text-gray-600 text-xs mb-2">Get job detail</div>
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/jobs/import</div>
                <div className="text-gray-600 text-xs">Manually add job by URL</div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('match')} className="mr-2">
              {expandedSections.match ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Matching & Skill Analysis
          </h4>
          {expandedSections.match && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <div className="font-mono text-sm mb-3">
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/match/score</div>
                <div className="text-gray-600 text-xs mb-2">Calculate match score</div>
                <pre className="bg-white p-2 rounded text-xs mb-3">
{`{
  "user_id": "...",
  "job_id": "...",
  "resume_id": "..."
}`}
                </pre>
                <pre className="bg-white p-2 rounded text-xs mb-3">
{`{
  "score": 0.82,
  "missing_skills": ["Redux"],
  "suggestions": [...]
}`}
                </pre>
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/match/{'{job_id}'}/candidates</div>
                <div className="text-gray-600 text-xs">Find matching users (admin)</div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('application')} className="mr-2">
              {expandedSections.application ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Application / Automation
          </h4>
          {expandedSections.application && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <div className="font-mono text-sm mb-3">
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/applications/preview</div>
                <div className="text-gray-600 text-xs mb-2">Prepare application payload</div>
                <pre className="bg-white p-2 rounded text-xs mb-3">
{`{
  "user_id": "...",
  "job_id": "...",
  "resume_id": "...",
  "cover_letter_template_id": "...",
  "answers": {
    "q1": "Answer text"
  }
}`}
                </pre>
                <pre className="bg-white p-2 rounded text-xs mb-3">
{`{
  "application_id": "...",
  "status": "queued"
}`}
                </pre>
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/applications/submit</div>
                <div className="text-gray-600 text-xs mb-2">Submit application</div>
                <pre className="bg-white p-2 rounded text-xs mb-3">
{`{
  "user_id": "...",
  "job_id": "...",
  "resume_id": "...",
  "cover_letter_template_id": "...",
  "auto_confirm": false,
  "answers": {
    "q1": "..."
  }
}`}
                </pre>
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/applications/{'{application_id}'}</div>
                <div className="text-gray-600 text-xs mb-2">Get application status</div>
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/applications?user_id=...</div>
                <div className="text-gray-600 text-xs">List applications</div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('connectors')} className="mr-2">
              {expandedSections.connectors ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Connectors (Admin)
          </h4>
          {expandedSections.connectors && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <div className="font-mono text-sm mb-3">
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/connectors</div>
                <div className="text-gray-600 text-xs mb-2">List connectors</div>
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/connectors</div>
                <div className="text-gray-600 text-xs mb-2">Create connector config</div>
                <div className="mb-2"><span className="text-green-600">POST</span> /v1/connectors/{'{id}'}/test</div>
                <div className="text-gray-600 text-xs">Test connector</div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('admin')} className="mr-2">
              {expandedSections.admin ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Admin / Observability
          </h4>
          {expandedSections.admin && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <div className="font-mono text-sm mb-3">
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/admin/metrics</div>
                <div className="text-gray-600 text-xs mb-2">Get metrics</div>
                <div className="mb-2"><span className="text-purple-600">GET</span> /v1/admin/audit/logs</div>
                <div className="text-gray-600 text-xs">Get audit logs</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderDatabaseSchema = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Database Schema (PostgreSQL)</h3>
        <p className="text-gray-600 mb-4">Using UUIDs for primary keys. Timestamps are UTC.</p>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('users')} className="mr-2">
              {expandedSections.users ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Users
          </h4>
          {expandedSections.users && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`CREATE TABLE users (
  id uuid PRIMARY KEY,
  email text UNIQUE NOT NULL,
  display_name text,
  hashed_password text NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  preferences jsonb DEFAULT '{}'
);`}
              </pre>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('user_locations')} className="mr-2">
              {expandedSections.user_locations ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            UserLocations
          </h4>
          {expandedSections.user_locations && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`CREATE TABLE user_locations (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  label text,
  lat double precision,
  lng double precision,
  radius_km integer,
  created_at timestamptz DEFAULT now()
);`}
              </pre>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('resumes')} className="mr-2">
              {expandedSections.resumes ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Resumes
          </h4>
          {expandedSections.resumes && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`CREATE TABLE resumes (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES users(id),
  filename text,
  s3_key text,
  size_bytes bigint,
  parsed jsonb,
  tags text[],
  created_at timestamptz DEFAULT now()
);`}
              </pre>
              <p className="text-gray-600 text-sm mt-2">
                <code>parsed</code> example: 
                <code className="bg-white p-1 rounded">{"{\"name\":\"Shubham\",\"emails\":[\"...\"],\"skills\":[\"Angular\",\"TypeScript\"],\"education\":[...],\"experience\": [...]}"}</code>
              </p>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('jobs')} className="mr-2">
              {expandedSections.jobs ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Jobs
          </h4>
          {expandedSections.jobs && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`CREATE TABLE jobs (
  id uuid PRIMARY KEY,
  source text NOT NULL, -- linkedin, indeed, greenhouse, company
  source_job_id text, -- original id in source
  title text,
  company text,
  location jsonb, -- {"label": "Stuttgart, DE", "lat":48.7, "lng":9.18}
  remote boolean DEFAULT false,
  raw_html_s3_key text,
  parsed jsonb,
  url text,
  posted_at timestamptz,
  discovered_at timestamptz DEFAULT now(),
  indexed boolean DEFAULT false
);`}
              </pre>
              <p className="text-gray-600 text-sm mt-2">
                <code>parsed</code> example: 
                <code className="bg-white p-1 rounded">{"{\"description\": \"...\", \"skills\": [\"Angular\",\"Playwright\"], \"salary\": null, \"employment_type\":\"full_time\"}"}</code>
              </p>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('matches')} className="mr-2">
              {expandedSections.matches ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Matches
          </h4>
          {expandedSections.matches && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`CREATE TABLE matches (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES users(id),
  job_id uuid REFERENCES jobs(id),
  resume_id uuid REFERENCES resumes(id),
  score numeric(3,2), -- 0.00 - 1.00
  missing_skills text[],
  suggestions jsonb,
  created_at timestamptz DEFAULT now()
);`}
              </pre>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('applications')} className="mr-2">
              {expandedSections.applications ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Applications
          </h4>
          {expandedSections.applications && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`CREATE TABLE applications (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES users(id),
  job_id uuid REFERENCES jobs(id),
  resume_id uuid REFERENCES resumes(id),
  cover_letter_s3_key text,
  status text, -- queued, running, applied, failed, rejected
  worker_logs text[],
  screenshots_s3_keys text[],
  submitted_at timestamptz,
  created_at timestamptz DEFAULT now()
);`}
              </pre>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('connectors')} className="mr-2">
              {expandedSections.connectors_db ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Connectors / Connector Config
          </h4>
          {expandedSections.connectors_db && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`CREATE TABLE connectors (
  id uuid PRIMARY KEY,
  name text,
  type text, -- api, scraping, generic
  config jsonb,
  last_tested_at timestamptz
);`}
              </pre>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('audit')} className="mr-2">
              {expandedSections.audit ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Audit / Events (append-only)
          </h4>
          {expandedSections.audit && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`CREATE TABLE audit_events (
  id uuid PRIMARY KEY,
  user_id uuid,
  event_type text,
  payload jsonb,
  created_at timestamptz DEFAULT now()
);`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderClassDefinitions = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Backend Class & Interface Definitions (Python / FastAPI)</h3>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('models')} className="mr-2">
              {expandedSections.models ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Models (Pydantic)
          </h4>
          {expandedSections.models && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`from pydantic import BaseModel, Field
from typing import List, Optional
from uuid import UUID

class Location(BaseModel):
    label: str
    lat: float
    lng: float
    radius_km: Optional[int]

class UserProfile(BaseModel):
    id: UUID
    email: str
    display_name: Optional[str]
    skills: List[str] = []
    locations: List[Location] = []
    auto_apply_mode: str = 'manual_review'

class JobListing(BaseModel):
    id: UUID
    source: str
    source_job_id: Optional[str]
    title: str
    company: Optional[str]
    location: Optional[Location]
    url: Optional[str]
    parsed: dict

class MatchResult(BaseModel):
    score: float
    missing_skills: List[str]
    suggestions: dict`}
              </pre>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('connector_interface')} className="mr-2">
              {expandedSections.connector_interface ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Connector Interface (abstract)
          </h4>
          {expandedSections.connector_interface && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`from abc import ABC, abstractmethod

class Connector(ABC):
    @abstractmethod
    def search(self, title: str, keywords: List[str], location: dict, limit: int=50) -> List[JobListing]:
        """Search for jobs and return normalized JobListing list."""
    @abstractmethod
    def fetch(self, source_job_id: str) -> JobListing:
        """Fetch full job detail from source."""
    @abstractmethod
    def supports_auto_apply(self) -> bool:
        """Return True if connector can support structured auto apply via API"""`}
              </pre>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('automation_worker')} className="mr-2">
              {expandedSections.automation_worker ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Automation Worker Interface
          </h4>
          {expandedSections.automation_worker && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`class AutomationWorker:
    def __init__(self, job_id: UUID, application_id: UUID, user_credentials: dict):
        # setup Playwright browser/context
        pass

    def prepare_application(self, rendered_resume_s3: str, rendered_cover_letter_s3: str, answers: dict) -> dict:
        # map normalized fields to form inputs
        return {"field_map": {...}}

    def submit(self, auto_confirm: bool = False) -> dict:
        # run playwright flows, save screenshots, logs
        return {"status":"applied", "s3_screenshots":[...], "logs":[...]}`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderJSONPayloads = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Example JSON Payloads</h3>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('job_listing')} className="mr-2">
              {expandedSections.job_listing ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            JobListing (normalized)
          </h4>
          {expandedSections.job_listing && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`{
  "id": "b2f9c3b8-4d3a-4d20-9e8b-5a1f2f23a8d9",
  "source": "indeed",
  "source_job_id": "12345",
  "title": "Senior Frontend Engineer",
  "company": "ACME GmbH",
  "location": {
    "label": "Stuttgart, DE",
    "lat": 48.777,
    "lng": 9.1829
  },
  "url": "https://indeed.example/jobs/12345",
  "parsed": {
    "skills": ["Angular","TypeScript"],
    "employment_type": "full_time"
  }
}`}
              </pre>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('match_response')} className="mr-2">
              {expandedSections.match_response ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Match response
          </h4>
          {expandedSections.match_response && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`{
  "score": 0.79,
  "missing_skills": ["Redux","RxJS"],
  "suggestions": {
    "upskilling_courses": ["Advanced RxJS (Udemy)"],
    "resume_changes": ["Highlight 3 projects using Angular and RxJS in Experience section"]
  }
}`}
              </pre>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3 flex items-center">
            <button onClick={() => toggleSection('application_preview')} className="mr-2">
              {expandedSections.application_preview ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            Application preview response
          </h4>
          {expandedSections.application_preview && (
            <div className="bg-gray-50 p-4 rounded ml-6">
              <pre className="bg-white p-4 rounded text-xs overflow-x-auto">
{`{
  "application_id": "f9d8a6...",
  "rendered_resume_url": "https://s3.example/resumes/userid/resume_applied.pdf",
  "rendered_cover_letter_url": "https://s3.example/cover/userid/cl_123.pdf",
  "form_map": {
    "first_name": "Shubham",
    "last_name": "Narkhede",
    "email": "s@example.com",
    "upload_resume": "s3://.../resume_applied.pdf",
    "answers": {
      "work_authorization": "Yes"
    }
  },
  "estimated_time_seconds": 12
}`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderJobFlow = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Job Search & Apply Flow (sequence)</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
            <div>
              <p className="font-medium">User issues search via UI</p>
              <p className="text-gray-600 text-sm">→ <code className="bg-gray-100 p-1 rounded">POST /jobs/search</code> → API uses connectors (sync or queued) to gather listings.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
            <div>
              <p className="font-medium">Listings saved to database</p>
              <p className="text-gray-600 text-sm">Listings saved to <code className="bg-gray-100 p-1 rounded">jobs</code> table with raw_html S3 key.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
            <div>
              <p className="font-medium">Skill matching</p>
              <p className="text-gray-600 text-sm">For a selected job, UI requests <code className="bg-gray-100 p-1 rounded">POST /match/score</code> → server computes skill-match using parsed job description + user's parsed resume.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</div>
            <div>
              <p className="font-medium">Application preview</p>
              <p className="text-gray-600 text-sm">User requests preview → <code className="bg-gray-100 p-1 rounded">/applications/preview</code> → server renders resume/cover letter templates using Jinja or LLM and returns assets.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</div>
            <div>
              <p className="font-medium">Application submission</p>
              <p className="text-gray-600 text-sm">User confirms → <code className="bg-gray-100 p-1 rounded">/applications/submit</code> → server enqueues job to Celery.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">6</div>
            <div>
              <p className="font-medium">Automation execution</p>
              <p className="text-gray-600 text-sm">Automation worker picks task, loads user session or OAuth token, opens Playwright context, fills fields, uploads files, takes screenshots, returns logs.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">7</div>
            <div>
              <p className="font-medium">Status update</p>
              <p className="text-gray-600 text-sm">API updates application status in database with results from automation worker.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'api': return renderAPIEndpoints();
      case 'database': return renderDatabaseSchema();
      case 'classes': return renderClassDefinitions();
      case 'payloads': return renderJSONPayloads();
      case 'flow': return renderJobFlow();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AutoApply Technical Specification</h1>
          <p className="mt-2 text-gray-600">Comprehensive technical documentation for the automated job application platform</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                  >
                    <Icon className="mr-2" size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnicalSpec;