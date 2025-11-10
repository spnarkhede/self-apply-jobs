import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Database, Code, GitBranch, Layout, Boxes, Network, FileCode, CheckSquare, Server, HardDrive } from 'lucide-react';
import TechnicalSpec from './components/TechnicalSpec';
import ProjectSpec from './components/ProjectSpec';

const AutoApplySpec = () => {
  const [activeView, setActiveView] = useState('spec'); // 'spec', 'tech', or 'project'

  const navItems = [
    { id: 'spec', label: 'System Specification', icon: Layout },
    { id: 'tech', label: 'Technical Specification', icon: Server },
    { id: 'project', label: 'Project Plan', icon: HardDrive }
  ];

  const renderView = () => {
    switch (activeView) {
      case 'spec': return <SystemSpec />;
      case 'tech': return <TechnicalSpec />;
      case 'project': return <ProjectSpec />;
      default: return <SystemSpec />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AutoApply Documentation</h1>
          <p className="mt-2 text-gray-600">Comprehensive documentation for the automated job application platform</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8" aria-label="Views">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`${
                      activeView === item.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                  >
                    <Icon className="mr-2" size={16} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

const SystemSpec = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Layout },
    { id: 'architecture', label: 'Architecture', icon: Boxes },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'api', label: 'API Design', icon: Code },
    { id: 'classes', label: 'Class Diagram', icon: GitBranch },
    { id: 'sequence', label: 'Sequence Flows', icon: Network },
    { id: 'ui', label: 'UI Navigation', icon: Layout },
    { id: 'tasks', label: 'Project Tasks', icon: CheckSquare }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h3 className="font-bold text-lg mb-2">Project: AutoApply</h3>
        <p className="text-gray-700">An end-to-end automated job search, skills analysis, and application system</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold mb-3 text-blue-600">Core Modules</h4>
          <ul className="space-y-2 text-sm">
            <li>• Job Discovery Engine</li>
            <li>• Resume Parser & Skills Analyzer</li>
            <li>• Job-Resume Matcher</li>
            <li>• Document Generator (Resume/Cover Letter)</li>
            <li>• Auto-Application Bot</li>
            <li>• Application Tracker</li>
            <li>• User Dashboard</li>
          </ul>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold mb-3 text-green-600">Tech Stack</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Backend:</strong> Python FastAPI / Node.js</li>
            <li><strong>Frontend:</strong> React + Tailwind CSS</li>
            <li><strong>Database:</strong> PostgreSQL + Redis</li>
            <li><strong>Automation:</strong> Playwright</li>
            <li><strong>NLP:</strong> spaCy + Transformers</li>
            <li><strong>Queue:</strong> Celery + RabbitMQ</li>
            <li><strong>Storage:</strong> AWS S3 / MinIO</li>
          </ul>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <h4 className="font-semibold mb-3">Key Features</h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-purple-600">Discovery</p>
            <p className="text-gray-600">Multi-source job aggregation with intelligent filtering</p>
          </div>
          <div>
            <p className="font-medium text-purple-600">Analysis</p>
            <p className="text-gray-600">AI-powered skill matching and gap analysis</p>
          </div>
          <div>
            <p className="font-medium text-purple-600">Automation</p>
            <p className="text-gray-600">One-click and batch application submission</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderArchitecture = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">System Architecture (Microservices)</h3>
        <pre className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│                         Frontend Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  React SPA   │  │  Mobile App  │  │   Admin UI   │         │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘         │
└─────────┼──────────────────┼──────────────────┼────────────────┘
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
┌────────────────────────────┼────────────────────────────────────┐
│                      API Gateway (Kong/Nginx)                    │
│                    Authentication & Rate Limiting                │
└────────────────────────────┬────────────────────────────────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
┌─────────▼─────────┐ ┌─────▼─────────┐ ┌─────▼─────────┐
│  User Service     │ │ Job Service   │ │ Apply Service │
│  - Auth           │ │ - Discovery   │ │ - Automation  │
│  - Profile        │ │ - Aggregation │ │ - Submission  │
│  - Preferences    │ │ - Filtering   │ │ - Tracking    │
└─────────┬─────────┘ └─────┬─────────┘ └─────┬─────────┘
          │                  │                  │
┌─────────▼─────────┐ ┌─────▼─────────┐ ┌─────▼─────────┐
│ Resume Service    │ │ Match Service │ │ Document Gen  │
│ - Parser          │ │ - Scoring     │ │ - Templates   │
│ - Skill Extract   │ │ - Recommend   │ │ - LLM Gen     │
│ - Storage         │ │ - Gap Analysis│ │ - Versioning  │
└─────────┬─────────┘ └─────┬─────────┘ └─────┬─────────┘
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
┌────────────────────────────┼────────────────────────────────────┐
│                    Message Queue (RabbitMQ)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Job Queue    │  │ Apply Queue  │  │ Notify Queue │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└────────────────────────────────────────────────────────────────┘
          │                  │                  │
┌─────────▼─────────┐ ┌─────▼─────────┐ ┌─────▼─────────┐
│ Scraper Workers   │ │ Apply Workers │ │ Notification  │
│ - Playwright      │ │ - Form Fill   │ │ - Email/Slack │
│ - Proxy Pool      │ │ - Captcha     │ │ - Webhooks    │
│ - Rate Limit      │ │ - Screenshot  │ │ - Push        │
└───────────────────┘ └───────────────┘ └───────────────┘
          │                  │                  │
┌─────────┼──────────────────┼──────────────────┼────────────────┐
│                         Data Layer                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ PostgreSQL   │  │  Redis Cache │  │  S3 Storage  │         │
│  │ (Main DB)    │  │  (Sessions)  │  │  (Documents) │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
          │                  │                  │
┌─────────┼──────────────────┼──────────────────┼────────────────┐
│                    Monitoring & Observability                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Prometheus   │  │   Grafana    │  │  ELK Stack   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘`}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold mb-3">Service Communication</h4>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Synchronous:</strong> REST APIs for user-facing operations</li>
            <li>• <strong>Asynchronous:</strong> Message queues for background jobs</li>
            <li>• <strong>Event-Driven:</strong> Pub/sub for cross-service notifications</li>
            <li>• <strong>gRPC:</strong> Internal service-to-service communication</li>
          </ul>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold mb-3">Plugin Architecture</h4>
          <ul className="space-y-2 text-sm">
            <li>• Job Board Connectors (LinkedIn, Indeed, etc.)</li>
            <li>• Resume Parsers (PDF, DOCX, HTML)</li>
            <li>• Skill Extractors (NLP models)</li>
            <li>• Form Fillers (site-specific automation)</li>
            <li>• Document Generators (templates, LLMs)</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderDatabase = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Entity-Relationship Diagram</h3>
        <pre className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
{`┌─────────────────────┐         ┌─────────────────────┐
│      USERS          │         │   USER_PROFILES     │
├─────────────────────┤         ├─────────────────────┤
│ PK user_id (UUID)   │────────<│ PK profile_id       │
│    email (unique)   │    1:1  │ FK user_id          │
│    password_hash    │         │    full_name        │
│    role             │         │    phone            │
│    is_active        │         │    location_json    │
│    created_at       │         │    skills_json      │
│    updated_at       │         │    experience_years │
│    last_login       │         │    preferences_json │
└─────────────────────┘         │    linkedin_url     │
         │                      │    github_url       │
         │                      │    portfolio_url    │
         │ 1                    └─────────────────────┘
         │
         │ N
┌────────▼──────────────┐
│   RESUME_VARIANTS     │
├───────────────────────┤
│ PK resume_id (UUID)   │
│ FK user_id            │
│    name               │
│    file_path (S3)     │
│    file_format        │
│    is_default         │
│    skills_extracted   │
│    parsed_data_json   │
│    version            │
│    created_at         │
│    updated_at         │
└───────────────────────┘
         │
         │ N
         │
┌────────▼──────────────┐         ┌─────────────────────┐
│   COVER_LETTERS       │         │    JOB_LISTINGS     │
├───────────────────────┤         ├─────────────────────┤
│ PK letter_id (UUID)   │         │ PK job_id (UUID)    │
│ FK user_id            │         │    source           │
│    name               │         │    external_id      │
│    content            │         │    title            │
│    is_template        │         │    company          │
│    created_at         │         │    description      │
└───────────────────────┘         │    location         │
                                  │    lat              │
                                  │    lng              │
         ┌────────────────────────┤    salary_min       │
         │                        │    salary_max       │
         │                        │    employment_type  │
         │ N                      │    experience_level │
         │                        │    skills_required  │
         │                        │    remote_type      │
         │                        │    url              │
         │                        │    posted_at        │
         │                        │    expires_at       │
         │                        │    scraped_at       │
         │                        │    raw_html         │
         │                        │    is_easy_apply    │
         │                        └─────────────────────┘
         │                                 │
         │                                 │ 1
         │                                 │ N
         │                        ┌────────▼──────────────┐
         │                        │      MATCHES          │
         │                        ├───────────────────────┤
         │                        │ PK match_id (UUID)    │
         │                        │ FK user_id            │
         │                        │ FK job_id             │
         │                        │ FK resume_id          │
         │                        │    match_score        │
         │                        │    skill_match_pct    │
         │                        │    missing_skills     │
         │                        │    recommended_action │
         │                        │    status             │
         │                        │    reviewed_at        │
         │                        │    created_at         │
         │                        └───────────────────────┘
         │                                 │
         │                                 │ N
         │                                 │
         │                        ┌────────▼──────────────┐
         │                        │    APPLICATIONS       │
         │                        ├───────────────────────┤
         │                        │ PK application_id     │
         │                        │ FK user_id            │
         │                        │ FK job_id             │
         │                        │ FK match_id           │
         │                        │    status             │
         │                        │    submitted_at       │
         │                        │    applied_at         │
         │                        │    response_received  │
         │                        │    response_content   │
         │                        │    screenshot_path    │
         │                        └───────────────────────┘
         │
┌────────▼──────────────┐
│   SEARCH_QUERIES      │
├───────────────────────┤
│ PK query_id (UUID)    │
│ FK user_id            │
│    keywords           │
│    location           │
│    radius_km          │
│    filters_json       │
│    created_at         │
│    last_run_at        │
└───────────────────────┘`}
        </pre>
      </div>
    </div>
  );

  const renderAPIDesign = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">API Endpoints</h3>
        
        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">User Service</h4>
          <div className="bg-gray-50 p-4 rounded">
            <div className="font-mono text-sm">
              <div className="mb-2"><span className="text-green-600">POST</span> /api/v1/users/register</div>
              <div className="mb-2"><span className="text-blue-600">POST</span> /api/v1/users/login</div>
              <div className="mb-2"><span className="text-purple-600">GET</span> /api/v1/users/profile</div>
              <div className="mb-2"><span className="text-yellow-600">PUT</span> /api/v1/users/profile</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">Job Service</h4>
          <div className="bg-gray-50 p-4 rounded">
            <div className="font-mono text-sm">
              <div className="mb-2"><span className="text-purple-600">GET</span> /api/v1/jobs/search</div>
              <div className="mb-2"><span className="text-purple-600">GET</span> /api/v1/jobs/{'{id}'}</div>
              <div className="mb-2"><span className="text-green-600">POST</span> /api/v1/jobs/scrape</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">Resume Service</h4>
          <div className="bg-gray-50 p-4 rounded">
            <div className="font-mono text-sm">
              <div className="mb-2"><span className="text-green-600">POST</span> /api/v1/resumes/upload</div>
              <div className="mb-2"><span className="text-purple-600">GET</span> /api/v1/resumes/{'{id}'}/skills</div>
              <div className="mb-2"><span className="text-yellow-600">PUT</span> /api/v1/resumes/{'{id}'}</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">Match Service</h4>
          <div className="bg-gray-50 p-4 rounded">
            <div className="font-mono text-sm">
              <div className="mb-2"><span className="text-green-600">POST</span> /api/v1/matches</div>
              <div className="mb-2"><span className="text-purple-600">GET</span> /api/v1/matches/{'{id}'}</div>
              <div className="mb-2"><span className="text-purple-600">GET</span> /api/v1/matches/user/{'{userId}'}</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">Apply Service</h4>
          <div className="bg-gray-50 p-4 rounded">
            <div className="font-mono text-sm">
              <div className="mb-2"><span className="text-green-600">POST</span> /api/v1/applications</div>
              <div className="mb-2"><span className="text-purple-600">GET</span> /api/v1/applications/{'{id}'}</div>
              <div className="mb-2"><span className="text-purple-600">GET</span> /api/v1/applications/user/{'{userId}'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderClassDiagram = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Class Diagram</h3>
        <pre className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│                    Core Domain Classes                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────┐         ┌─────────────────────────┐
│        User             │         │     UserProfile         │
├─────────────────────────┤         ├─────────────────────────┤
│ - userId: UUID          │         │ - profileId: UUID       │
│ - email: String         │         │ - userId: UUID          │
│ - passwordHash: String  │         │ - fullName: String      │
│ - role: UserRole        │         │ - phone: String         │
│ - isActive: Boolean     │         │ - location: Location    │
│ - createdAt: DateTime   │         │ - skills: List<Skill>   │
│ - updatedAt: DateTime   │         │ - experienceYears: Int  │
│ - lastLogin: DateTime   │         │ - preferences: JSON     │
├─────────────────────────┤         │ - linkedinUrl: String   │
│ + register()            │         │ - githubUrl: String     │
│ + login()               │         │ - portfolioUrl: String  │
└─────────────────────────┘         ├─────────────────────────┤
                                    │ + update()              │
┌─────────────────────────┐         │ + addSkill()            │
│       Resume            │         │ + updatePreferences()    │
├─────────────────────────┤         └─────────────────────────┘
│ - resumeId: UUID        │
│ - userId: UUID          │
│ - name: String          │
│ - filePath: String      │
│ - fileFormat: String    │
│ - isDefault: Boolean    │
│ - skillsExtracted: Bool │
│ - parsedData: JSON      │
│ - version: Int          │
│ - createdAt: DateTime   │
│ - updatedAt: DateTime   │
├─────────────────────────┤
│ + upload()              │
│ + parse()               │
│ + extractSkills()       │
│ + setAsDefault()        │
└─────────────────────────┘

┌─────────────────────────┐         ┌─────────────────────────┐
│     CoverLetter         │         │      JobListing         │
├─────────────────────────┤         ├─────────────────────────┤
│ - letterId: UUID        │         │ - jobId: UUID           │
│ - userId: UUID          │         │ - source: String        │
│ - name: String          │         │ - externalId: String    │
│ - content: String       │         │ - title: String         │
│ - isTemplate: Boolean   │         │ - company: String       │
│ - createdAt: DateTime   │         │ - description: String   │
│ - updatedAt: DateTime   │         │ - location: String      │
├─────────────────────────┤         │ - lat: Double           │
│ + generate()            │         │ - lng: Double           │
│ + customize()           │         │ - salaryMin: Int        │
│ + saveAsTemplate()      │         │ - salaryMax: Int        │
│ + fromTemplate()        │         │ - employmentType: Enum  │
└─────────────────────────┘         │ - experienceLevel: Enum │
                                    │ - skillsRequired: List  │
┌─────────────────────────┐         │ - remoteType: Enum      │
│       Match             │         │ - url: String           │
├─────────────────────────┤         │ - postedAt: DateTime    │
│ - matchId: UUID         │         │ - expiresAt: DateTime   │
│ - userId: UUID          │         │ - scrapedAt: DateTime   │
│ - jobId: UUID           │         │ - rawHtml: String       │
│ - resumeId: UUID        │         │ - isEasyApply: Boolean  │
│ - matchScore: Double    │         ├─────────────────────────┤
│ - skillMatchPct: Double │         │ + scrape()              │
│ - missingSkills: List   │         │ + update()              │
│ - recommendedAction:Str │         │ + markExpired()         │
│ - status: MatchStatus   │         └─────────────────────────┘
│ - reviewedAt: DateTime  │         ┌─────────────────────────┐
│ - createdAt: DateTime   │         │     Application         │
├─────────────────────────┤         ├─────────────────────────┤
│ + calculateScore()      │         │ - applicationId: UUID   │
│ + identifyGaps()        │         │ - userId: UUID          │
│ + recommendAction()     │         │ - jobId: UUID           │
│ + updateStatus()        │         │ - matchId: UUID         │
│ + markReviewed()        │         │ - status: AppStatus     │
│                         │         │ - submittedAt: DateTime │
│                         │         │ - appliedAt: DateTime   │
│                         │         │ - responseReceived:Bool │
│                         │         │ - responseContent: Str  │
│                         │         │ - screenshotPath: Str   │
│                         │         ├─────────────────────────┤
│                         │         │ + submit()              │
│                         │         │ + track()               │
│                         │         │ + updateStatus()        │
│                         │         │ + captureScreenshot()   │
│                         │         └─────────────────────────┘
│                         │
└─────────────────────────┘

┌─────────────────────────┐
│    SearchQuery          │
├─────────────────────────┤
│ - queryId: UUID         │
│ - userId: UUID          │
│ - keywords: String      │
│ - location: String      │
│ - radiusKm: Int         │
│ - filters: JSON         │
│ - createdAt: DateTime   │
│ - lastRunAt: DateTime   │
├─────────────────────────┤
│ + execute()             │
│ + save()                │
│ + schedule()            │
└─────────────────────────┘`}
        </pre>
      </div>
    </div>
  );

  const renderSequenceFlows = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Sequence Flows</h3>
        
        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">1. Job Search & Matching Flow</h4>
          <pre className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
{`User -> Frontend: Enter search criteria
Frontend -> JobService: POST /jobs/search
JobService -> SearchQuery: save()
JobService -> ScraperWorkers: enqueue(scrape_job)
ScraperWorkers -> JobBoardAPI: fetch_jobs()
ScraperWorkers -> JobService: return jobs
JobService -> MatchService: calculate_matches(user_id)
MatchService -> ResumeService: get_resume(user_id)
MatchService -> NLPProcessor: analyze_skills(resume, jobs)
NLPProcessor -> MatchService: return_scores()
MatchService -> Match: save()
JobService -> Frontend: return matched_jobs
Frontend -> User: Display results`}
          </pre>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">2. Application Submission Flow</h4>
          <pre className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
{`User -> Frontend: Select job to apply
Frontend -> ApplyService: POST /applications
ApplyService -> Match: get_match(job_id, user_id)
ApplyService -> DocumentGenerator: generate_cover_letter(match)
DocumentGenerator -> LLM: generate_content(template, skills)
LLM -> DocumentGenerator: return_letter
DocumentGenerator -> CoverLetter: save()
ApplyService -> ApplyWorkers: enqueue(apply_job)
ApplyWorkers -> JobPortal: navigate_to_application()
ApplyWorkers -> FormFiller: fill_form(job_data, resume)
FormFiller -> ApplyWorkers: return_status
ApplyWorkers -> ApplyService: update_status()
ApplyService -> Application: save()
ApplyService -> NotificationService: send_confirmation()
NotificationService -> User: Email/SMS confirmation`}
          </pre>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">3. Resume Parsing Flow</h4>
          <pre className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
{`User -> Frontend: Upload resume
Frontend -> ResumeService: POST /resumes/upload
ResumeService -> Storage: save_file()
ResumeService -> ResumeParser: parse(file)
ResumeParser -> PDFProcessor: extract_text()
ResumeParser -> NLPProcessor: extract_entities()
NLPProcessor -> SkillExtractor: identify_skills(text)
SkillExtractor -> ResumeService: return_skills()
ResumeService -> UserProfile: update_skills(skills)
ResumeService -> Frontend: return_parsed_data
Frontend -> User: Display parsed resume`}
          </pre>
        </div>
      </div>
    </div>
  );

  const renderUINavigation = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">UI Navigation Structure</h3>
        
        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">Main Navigation</h4>
          <pre className="bg-gray-50 p-4 rounded text-xs overflow-x-auto">
{`Dashboard
├── Overview
├── Recent Activity
├── Statistics
│
Jobs
├── Search
│   ├── Advanced Filters
│   └── Saved Searches
├── Matches
│   ├── High Priority
│   ├── Recommended
│   └── Applied
├── Applications
│   ├── In Progress
│   ├── Submitted
│   └── Responses
│
Profile
├── Personal Info
├── Skills
├── Experience
├── Education
├── Preferences
│
Documents
├── Resumes
│   ├── Upload New
│   ├── Edit
│   └── Versions
├── Cover Letters
│   ├── Templates
│   ├── Custom
│   └── Generated
├── Portfolio
│
Settings
├── Account
├── Notifications
├── Integrations
└── Privacy`}
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h5 className="font-semibold mb-2">Key Pages</h5>
            <ul className="text-sm space-y-1">
              <li>• Dashboard - Overview of job search progress</li>
              <li>• Job Search - Filter and find jobs</li>
              <li>• Match Results - See job-resume matches</li>
              <li>• Application Tracker - Monitor submissions</li>
              <li>• Resume Builder - Create/edit resumes</li>
              <li>• Cover Letter Generator - AI-powered letters</li>
              <li>• Skill Analyzer - Gap analysis</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h5 className="font-semibold mb-2">User Flows</h5>
            <ul className="text-sm space-y-1">
              <li>• Registration → Profile Setup → Resume Upload</li>
              <li>• Search Jobs → Review Matches → Apply</li>
              <li>• Upload Resume → Skill Analysis → Job Matching</li>
              <li>• Generate Cover Letter → Customize → Save</li>
              <li>• Track Applications → Review Responses → Follow-up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectTasks = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Project Implementation Tasks</h3>
        
        <div className="mb-6">
          <h4 className="font-semibold text-green-600 mb-3">Phase 1: Core Infrastructure (Weeks 1-2)</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Set up project repository with CI/CD pipeline</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Implement user authentication and authorization</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Design and implement database schema</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Create basic API gateway and service structure</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-yellow-600 mb-3">Phase 2: Job Discovery (Weeks 3-4)</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare className="text-yellow-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Implement job board scrapers for LinkedIn, Indeed, Glassdoor</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-yellow-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Build job search and filtering API</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-yellow-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Create job listing storage and deduplication system</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-blue-600 mb-3">Phase 3: Resume & Skills (Weeks 5-6)</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Implement resume parsing for PDF, DOCX, and TXT formats</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Build skills extraction using NLP (spaCy/Transformers)</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-blue-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Create job-resume matching algorithm</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-purple-600 mb-3">Phase 4: Automation (Weeks 7-8)</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare className="text-purple-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Develop browser automation with Playwright</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-purple-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Implement form filling for major job portals</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-purple-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Create application tracking and response monitoring</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-red-600 mb-3">Phase 5: UI & Advanced Features (Weeks 9-10)</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckSquare className="text-red-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Build responsive React frontend with Tailwind CSS</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-red-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Implement dashboard and analytics</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-red-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Add cover letter generation with LLM integration</span>
            </li>
            <li className="flex items-start">
              <CheckSquare className="text-red-500 mt-1 mr-2 flex-shrink-0" size={16} />
              <span>Implement notification system (email, SMS, push)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'architecture': return renderArchitecture();
      case 'database': return renderDatabase();
      case 'api': return renderAPIDesign();
      case 'classes': return renderClassDiagram();
      case 'sequence': return renderSequenceFlows();
      case 'ui': return renderUINavigation();
      case 'tasks': return renderProjectTasks();
      default: return renderOverview();
    }
  };

  return (
    <div>
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
  );
};

export default AutoApplySpec;