import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Server, Cpu, Database, GitBranch, FileCode, CheckSquare, Shield, HardDrive } from 'lucide-react';

const ProjectSpec = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const tabs = [
    { id: 'overview', label: 'Project Overview', icon: Server },
    { id: 'architecture', label: 'Architecture', icon: Cpu },
    { id: 'datamodel', label: 'Data Model', icon: Database },
    { id: 'features', label: 'Features', icon: GitBranch },
    { id: 'mvp', label: 'MVP Backlog', icon: CheckSquare },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'testing', label: 'Testing', icon: HardDrive },
    { id: 'oss', label: 'OSS Libraries', icon: FileCode }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h3 className="font-bold text-lg mb-2">AutoApply - Complete Project Specification</h3>
        <p className="text-gray-700">Automated job search, skills analysis, and auto-application platform</p>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Project Goal</h3>
        <p className="text-gray-700 mb-4">
          Build "AutoApply" — a system that discovers job listings across multiple boards by title/location/radius/filters, 
          analyzes required skills, matches them to a candidate profile, generates/chooses best-fit resume & cover letter, 
          auto-fills application forms and submits applications (where allowed).
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2 text-blue-600">Functional Requirements</h4>
            <ul className="space-y-1 text-sm">
              <li>• Multi-source job discovery</li>
              <li>• Skill extraction & matching</li>
              <li>• Resume & cover letter management</li>
              <li>• Auto-application engine</li>
              <li>• Automation modes</li>
              <li>• Tracking & audit</li>
              <li>• Privacy & compliance</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2 text-green-600">Non-functional Requirements</h4>
            <ul className="space-y-1 text-sm">
              <li>• Scalable architecture</li>
              <li>• Extensible plugin system</li>
              <li>• Resilient automation</li>
              <li>• Secure storage</li>
              <li>• Observability</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Deliverables</h3>
        <ul className="space-y-2">
          <li>• API + Web UI (dashboard) + optional CLI</li>
          <li>• Integrations for LinkedIn, Indeed, Glassdoor, Google Jobs, Greenhouse/Lever/Workday</li>
          <li>• Resume parser, skill extractor (NLP), resume/cover-letter generator</li>
          <li>• Automation engine (Playwright/Selenium)</li>
          <li>• Test suite and deployment scripts (Docker + Kubernetes)</li>
        </ul>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">MVP Scope</h3>
        <ul className="space-y-2">
          <li>• Job discovery (3 job board connectors)</li>
          <li>• Resume parsing</li>
          <li>• Skill matching</li>
          <li>• One-click application for "Easy Apply" jobs</li>
          <li>• UI to review suggestions</li>
          <li>• Application audit log</li>
        </ul>
      </div>
    </div>
  );

  const renderArchitecture = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Architecture Overview</h3>
        <div className="bg-gray-50 p-4 rounded">
          <pre className="text-center text-sm">
{`# Backend API (FastAPI) ←→ Orchestration queue (Celery) ←→ Automation workers (Playwright)

Workers use connector plugins (per job board) + resume/cover-letter generator 
+ resume parser + storage (Postgres + S3). Frontend (React/Vue) displays 
dashboards, matches, and approval flows. Monitoring via Prometheus + Grafana. 
Encrypt secrets with Vault/KMS.`}
          </pre>
        </div>
        
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Backend API</h4>
            <p className="text-sm">FastAPI for REST endpoints</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Orchestration</h4>
            <p className="text-sm">Celery with Redis/RabbitMQ</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Automation</h4>
            <p className="text-sm">Playwright workers</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Tech Stack</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Backend</h4>
            <ul className="space-y-1 text-sm">
              <li>• Python (FastAPI) or Node (Express/Nest)</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2 text-blue-600">Automation</h4>
            <ul className="space-y-1 text-sm">
              <li>• Playwright (recommended)</li>
              <li>• Puppeteer / Selenium</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2 text-blue-600">Scraping</h4>
            <ul className="space-y-1 text-sm">
              <li>• Scrapy for large crawls</li>
              <li>• Modular connectors</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-green-600">NLP</h4>
            <ul className="space-y-1 text-sm">
              <li>• spaCy + transformers</li>
              <li>• OpenAI/LLM (optional)</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2 text-green-600">Storage</h4>
            <ul className="space-y-1 text-sm">
              <li>• PostgreSQL for structured data</li>
              <li>• S3 for documents</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2 text-green-600">Orchestration</h4>
            <ul className="space-y-1 text-sm">
              <li>• Celery/RQ or serverless jobs</li>
              <li>• Kubernetes for scale</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataModel = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Core Data Model</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2 flex items-center">
              <button onClick={() => toggleSection('userprofile')} className="mr-2">
                {expandedSections.userprofile ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              UserProfile
            </h4>
            {expandedSections.userprofile && (
              <div className="ml-6 mt-2">
                <p className="text-sm">Personal info, locations, skills, OAuth tokens, preferences</p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2 flex items-center">
              <button onClick={() => toggleSection('resumevariant')} className="mr-2">
                {expandedSections.resumevariant ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              ResumeVariant
            </h4>
            {expandedSections.resumevariant && (
              <div className="ml-6 mt-2">
                <p className="text-sm">File, metadata, format, skill tags</p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2 flex items-center">
              <button onClick={() => toggleSection('joblisting')} className="mr-2">
                {expandedSections.joblisting ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              JobListing
            </h4>
            {expandedSections.joblisting && (
              <div className="ml-6 mt-2">
                <p className="text-sm">Source, id, title, company, location (lat/lng), salary, raw_html, parsed_fields, posting_date</p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2 flex items-center">
              <button onClick={() => toggleSection('match')} className="mr-2">
                {expandedSections.match ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              Match
            </h4>
            {expandedSections.match && (
              <div className="ml-6 mt-2">
                <p className="text-sm">user_id, job_id, score, missing_skills[], suggested_resume_variant, generated_cover_letter_id</p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2 flex items-center">
              <button onClick={() => toggleSection('application')} className="mr-2">
                {expandedSections.application ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              Application
            </h4>
            {expandedSections.application && (
              <div className="ml-6 mt-2">
                <p className="text-sm">job_id, user_id, status, submission_time, responses, automation_log, screenshot(s)</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Feature Map & Plugins</h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Connectors</h4>
            <p className="text-sm">
              Modular classes that implement search(title, location, radius, filters) and fetch(job_id) — 
              add new job boards by writing small plugin.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Parser</h4>
            <p className="text-sm">
              Resume parser + job description parser → skill extraction.
            </p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Matcher</h4>
            <p className="text-sm">
              Scoring algorithm (weighted skills, experience, location).
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Generator</h4>
            <p className="text-sm">
              LLM or template system to adapt resume/cover letter.
            </p>
          </div>
          
          <div className="bg-red-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Applier</h4>
            <p className="text-sm">
              Playwright-based engine that maps normalized fields → form inputs; supports manual review step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMVPBacklog = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">MVP Backlog (1-2 months)</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
            <div>
              <h4 className="font-semibold">User auth, profile, upload resume</h4>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
            <div>
              <h4 className="font-semibold">Connectors</h4>
              <p className="text-sm text-gray-600">Indeed + LinkedIn + Google Jobs (or two of them depending on API access)</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
            <div>
              <h4 className="font-semibold">Resume parser</h4>
              <p className="text-sm text-gray-600">pyresparser + skill extractor</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</div>
            <div>
              <h4 className="font-semibold">Match scoring + UI</h4>
              <p className="text-sm text-gray-600">List matches in UI</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</div>
            <div>
              <h4 className="font-semibold">One-click apply</h4>
              <p className="text-sm text-gray-600">For Easy Apply jobs using Playwright (sandbox)</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">6</div>
            <div>
              <h4 className="font-semibold">Audit log & application history</h4>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Project Timeline</h3>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="bg-green-100 text-green-800 rounded px-3 py-1 mr-3">Weeks 1-2</div>
            <div>
              <p className="text-sm">Core data model, job discovery connectors (2 boards), resume parsing</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-yellow-100 text-yellow-800 rounded px-3 py-1 mr-3">Weeks 3-4</div>
            <div>
              <p className="text-sm">Skill matching, resume/cover letter generator templates, UI wireframes</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 rounded px-3 py-1 mr-3">Weeks 5-6</div>
            <div>
              <p className="text-sm">Automation engine for "Easy Apply" + human review UI, logging</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-purple-100 text-purple-800 rounded px-3 py-1 mr-3">Weeks 7-8</div>
            <div>
              <p className="text-sm">Security hardening, test coverage, deploy to staging & demo</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Metrics to Measure</h3>
        <ul className="space-y-2">
          <li>• Jobs discovered/day</li>
          <li>• Applications submitted/day</li>
          <li>• Success rate (responses/interviews)</li>
          <li>• False positives in matching</li>
          <li>• Automation failure rate</li>
          <li>• Blocked/suspended attempts</li>
        </ul>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Security, Privacy & Legal Checklist</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <Shield className="text-blue-500 mr-2 mt-1" size={20} />
            <div>
              <h4 className="font-semibold">Authentication</h4>
              <p className="text-sm text-gray-600">Use OAuth when available; do not store plain passwords</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Shield className="text-green-500 mr-2 mt-1" size={20} />
            <div>
              <h4 className="font-semibold">Encryption</h4>
              <p className="text-sm text-gray-600">Encrypt secrets at rest & transit (TLS everywhere)</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Shield className="text-yellow-500 mr-2 mt-1" size={20} />
            <div>
              <h4 className="font-semibold">Consent</h4>
              <p className="text-sm text-gray-600">Provide clear consent screens to users and per-action approvals</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Shield className="text-red-500 mr-2 mt-1" size={20} />
            <div>
              <h4 className="font-semibold">Rate Limiting</h4>
              <p className="text-sm text-gray-600">Throttle automation to avoid abuse; include CAPTCHA manual path</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Shield className="text-purple-500 mr-2 mt-1" size={20} />
            <div>
              <h4 className="font-semibold">Compliance</h4>
              <p className="text-sm text-gray-600">Document compliance with each job board's TOS; add "do not scrape" opt-outs</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Shield className="text-indigo-500 mr-2 mt-1" size={20} />
            <div>
              <h4 className="font-semibold">Monitoring</h4>
              <p className="text-sm text-gray-600">Rate limit per user and monitor for blocks; support proxy pools only for enterprise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTesting = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Testing & CI</h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Unit Tests</h4>
            <p className="text-sm">For parsing & matching</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Integration Tests</h4>
            <p className="text-sm">For connectors in "read-only" sandbox mode</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="font-semibold mb-2">E2E Tests</h4>
            <p className="text-sm">That run in headful Playwright under test account (no mass submits)</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold mb-2">CI Pipelines</h4>
            <p className="text-sm">Run static checks, unit tests, and security lints (bandit, snyk)</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Deployment & Infrastructure</h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Containerization</h4>
            <p className="text-sm">Containerize services; deploy to Kubernetes or Fargate</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Storage</h4>
            <p className="text-sm">Use managed DB (Postgres) and object storage (S3)</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Secrets</h4>
            <p className="text-sm">Secrets in HashiCorp Vault or cloud KMS</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Observability</h4>
            <p className="text-sm">Prometheus metrics, Grafana dashboards, centralized logs (ELK)</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOSSLibraries = () => (
    <div className="space-y-6">
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Recommended Open-Source Libraries & Repos</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 text-blue-600">Resume parsing & resume tools</h4>
            
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">pyresparser</h5>
                <p className="text-sm text-gray-600">
                  Simple Python resume parser (use for extracting name, email, skills, education, experience). 
                  Good starting point for ResumeParser component.
                </p>
                <a href="https://github.com/OmkarPathak/pyresparser" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">ResumeParser (wrapper)</h5>
                <p className="text-sm text-gray-600">
                  Wrapper around pyresparser for simpler CLI/usage. Useful for quick POC.
                </p>
                <a href="https://github.com/ekapoor/ResumeParser" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">OpenResume</h5>
                <p className="text-sm text-gray-600">
                  Open resume builder + parser (can be used as resume management alternative).
                </p>
                <a href="https://github.com/OpenResume/OpenResume" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Job discovery & scraping</h4>
            
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">JobSpy</h5>
                <p className="text-sm text-gray-600">
                  Multi-site job scraper aiming to aggregate LinkedIn/Indeed/Glassdoor/ZipRecruiter etc. 
                  Good reference for multi-source scraping design.
                </p>
                <a href="https://github.com/josephsdavid/JobSpy" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">JobFunnel</h5>
                <p className="text-sm text-gray-600">
                  A tool to scrape job postings into CSV (good for ETL ideas and dedup logic).
                </p>
                <a href="https://github.com/eddielee394/JobFunnel" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">indeed-python / wrappers</h5>
                <p className="text-sm text-gray-600">
                  Client libraries & wrappers to query Indeed's Job Search API (use where API access available rather than scraping).
                </p>
                <a href="https://github.com/andrewrporter/indeed-python" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">Scrapy-based projects</h5>
                <p className="text-sm text-gray-600">
                  Examples like `indeed-python-scrapy-scraper` or SeekSpider (seek.com.au) show Scrapy patterns for job sites. 
                  Useful for building connectors.
                </p>
                <a href="https://github.com/andrewrporter/indeed-python-scrapy-scraper" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">job-board-scraper / levergreen</h5>
                <p className="text-sm text-gray-600">
                  Scraping Greenhouse / Lever company data patterns (useful for company ATS scrapers).
                </p>
                <a href="https://github.com/levergreen/levergreen" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-yellow-600">Automation & Auto-apply (examples)</h4>
            
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">Playwright automation repos</h5>
                <p className="text-sm text-gray-600">
                  Example projects that automate LinkedIn "Easy Apply" flows using Playwright (pattern to implement Auto-applier safely 
                  with session reuse and human-like behavior). See `automate-linkedin-easy-apply-jobs` and similar repos.
                </p>
                <a href="https://github.com/joaosilvalopes/automate-linkedin-easy-apply-jobs" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">Selenium auto-apply examples</h5>
                <p className="text-sm text-gray-600">
                  Repositories demonstrating automation with Selenium for job apply flows (useful design references).
                </p>
                <a href="https://github.com/topics/selenium-job-automation" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">Jobs_Applier_AI_Agent_AIHawk</h5>
                <p className="text-sm text-gray-600">
                  An AI+automation approach for job hunt automation (good for architecture inspiration on AI orchestration).
                </p>
                <a href="https://github.com/AIHawk-FOSS/Jobs_Applier_AI_Agent_AIHawk" className="text-blue-500 text-sm">GitHub Link</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-purple-600">End-to-end or full solutions (inspiration)</h4>
            
            <div className="bg-gray-50 p-3 rounded">
              <h5 className="font-medium">job-app (n8n + AI)</h5>
              <p className="text-sm text-gray-600">
                An automation pipeline using n8n + resume extraction + Google Drive for storage — shows orchestration with no/low code tools. 
                Useful if you want a no-code prototype.
              </p>
              <a href="https://github.com/n8n-io/job-app" className="text-blue-500 text-sm">GitHub Link</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">How to Map OSS Pieces to Components</h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Resume parser</h4>
            <p className="text-sm">
              Start with <code className="bg-white p-1 rounded">pyresparser</code> (fast POC) → replace later with a custom spaCy/TensorFlow model if accuracy needs increase.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Discovery / crawlers</h4>
            <p className="text-sm">
              Use Scrapy and adapt patterns from <code className="bg-white p-1 rounded">JobFunnel</code>, <code className="bg-white p-1 rounded">indeed-python-scrapy-scraper</code>, 
              <code className="bg-white p-1 rounded">JobSpy</code>. Implement adapter interface per site.
            </p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Automation engine</h4>
            <p className="text-sm">
              Implement Playwright workers and learn from <code className="bg-white p-1 rounded">automate-linkedin-easy-apply-jobs</code> and Playwright examples 
              to manage sessions and human-like delays. Add screenshot and logging at each step.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold mb-2">ETL & dedup</h4>
            <p className="text-sm">
              Reuse dedup strategies from JobFunnel and JobSpy, store canonical job fingerprint (source + id + posting_date + hashed title/company).
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'architecture': return renderArchitecture();
      case 'datamodel': return renderDataModel();
      case 'features': return renderFeatures();
      case 'mvp': return renderMVPBacklog();
      case 'security': return renderSecurity();
      case 'testing': return renderTesting();
      case 'oss': return renderOSSLibraries();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AutoApply Project Specification</h1>
          <p className="mt-2 text-gray-600">Complete specification for the automated job application platform</p>
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

export default ProjectSpec;