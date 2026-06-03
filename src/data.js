// src/data.js
// Portfolio content data. Edit this file to update projects, notes, certs, and social links.
// IMPORTANT: This is NOT an ES module. Do not use import/export.
// All arrays are exposed via window so components.jsx and screens.jsx can access them.
// Loaded as type="text/babel" BEFORE components.jsx in index.html.

const PROJECTS = [
  {
    id: 'synapse-pipeline',
    n: '01', year: '2024', kind: 'CONSULTING',
    title: 'Enterprise Data Pipeline Modernization',
    blurb: 'Replaced a fragile nightly SSIS batch with a real-time Azure Synapse pipeline serving 40+ downstream reports.',
    tags: ['Azure Synapse', 'Python', 'Power BI'],
    accent: false,
    lede: 'A federal health agency was running its enterprise analytics on a decade-old SSIS batch job — one failed transform away from dark dashboards across the organization.',
    facts: {
      Role: 'Data Engineer / Tech Lead',
      Year: '2024',
      Stack: 'Azure Synapse · Python · SSIS · Power BI',
      Status: 'Deployed',
      Client: 'Federal Health Agency',
    },
    body: [
      'The existing pipeline was a hand-wired SSIS package running nightly, with no monitoring, no retry logic, and schema drift that caused silent data corruption three times in the year before I joined. The client\'s analytics team was spending two days a week firefighting instead of analyzing.',
      'We replaced the batch architecture with an event-driven Azure Synapse pipeline: raw ingest into ADLS Gen2, parameterized transforms in Python, and a curated layer that Power BI reports hit directly. Row-level security was added to restrict sensitive health data by user group — something the old system had never attempted.',
      'The new pipeline handles 200M+ records daily with automated alerting on schema drift and row-count anomalies. The analytics team now spends that two days per week on actual analysis. Incident response time dropped from hours to under ten minutes.',
    ],
    pull: 'The pipeline wasn\'t the problem. The absence of observability was.',
  },
  {
    id: 'agentic-audit',
    n: '02', year: '2024', kind: 'CONSULTING',
    title: 'Agentic AI Audit Workflow',
    blurb: 'Built a Claude-powered agent that processes audit evidence packages and flags control gaps — cutting review time by 60%.',
    tags: ['Claude API', 'Python', 'Azure DevOps'],
    accent: true,
    lede: 'A financial services client was manually reviewing thousands of audit evidence documents per quarter — an analyst reading PDFs and populating a spreadsheet for weeks at a time.',
    facts: {
      Role: 'AI Engineer',
      Year: '2024',
      Stack: 'Python · Claude API · Azure DevOps · Power Apps',
      Status: 'Deployed',
      Client: 'Regional Financial Institution',
    },
    body: [
      'The engagement started as a "can AI help with compliance?" conversation. The answer was yes, but not through a chatbot — through an agent with a defined task, grounded context, and a human review step before any output reached the audit record.',
      'I built an agentic pipeline in Python: documents are chunked and embedded, a retrieval step surfaces relevant control criteria, and Claude evaluates each evidence artifact against the control description with a structured JSON response. Each flag includes a confidence level and the specific text that triggered it — nothing goes into the audit trail without an analyst signing off.',
      'The agent now processes the first-pass review of all evidence packages before human reviewers touch them. Review time dropped 60%. More importantly, it caught two control gaps in the first quarter that had been missed in prior manual reviews.',
    ],
    pull: 'An agent that flags what it\'s unsure about is more useful than one that\'s always confident.',
  },
  {
    id: 'retail-bi',
    n: '03', year: '2023', kind: 'CONSULTING',
    title: 'Retail Analytics Platform',
    blurb: 'Consolidated five disconnected reporting tools into a unified Tableau platform with a single source of truth for 300+ stores.',
    tags: ['Tableau', 'Spark', 'SQL'],
    accent: false,
    lede: 'A national retailer\'s merchandising team was making assortment decisions from five different reports that disagreed with each other on basic inventory numbers.',
    facts: {
      Role: 'Analytics Engineer',
      Year: '2023',
      Stack: 'Tableau · Apache Spark · SQL · SSIS',
      Status: 'Deployed',
      Client: 'Fortune 500 Retailer',
    },
    body: [
      'Five reporting systems had accumulated across five years of acquisitions. Finance used one tool, store operations used another, and the merchandising team had built their own Excel model that nobody fully trusted. When the numbers didn\'t match — which was often — analysts spent hours reconciling instead of deciding.',
      'The solution was a single curated data layer built with Spark on top of the warehouse, with clearly documented metric definitions locked in version control. Tableau dashboards were rebuilt from scratch against this layer, with semantic tags making it impossible to accidentally pull the wrong version of a metric.',
      'At launch, the merchandising team ran their weekly review using the new platform for the first time. Forty minutes in, someone said "wait, we\'ve never all been looking at the same number before." That was the moment.',
    ],
    pull: 'A single source of truth is worth more than three faster wrong answers.',
  },
  {
    id: 'portfolio-agent',
    n: '04', year: '2025', kind: 'PERSONAL',
    title: 'GSD — AI-Driven Dev Workflow',
    blurb: 'A Claude-powered multi-agent system that plans, executes, and verifies software development phases from a single roadmap.',
    tags: ['Claude Code', 'Python', 'Bash'],
    accent: true,
    lede: 'I wanted to build production software with AI assistance without sacrificing the discipline of planning, testing, and verification — so I built the workflow itself.',
    facts: {
      Role: 'Creator / Maintainer',
      Year: '2025',
      Stack: 'Claude Code · Python · Bash · Node.js',
      Status: 'Active',
      Client: 'Personal',
    },
    body: [
      'Most AI coding tools are autocomplete with better marketing. They\'re fast at generating code but have no concept of a project\'s state, what was decided last week, or why a particular architecture was chosen. I wanted something that could hold context across a full development lifecycle.',
      'GSD (Get Shit Done) is a multi-agent workflow built on Claude Code: a planner agent that produces structured PLAN.md files from a roadmap, an executor agent that implements tasks with explicit verification steps, and a checker agent that validates plans before execution. Every decision is recorded in STATE.md; every completed plan produces a SUMMARY.md.',
      'This portfolio site was built entirely with GSD. The workflow is opinionated by design — plans are prompts, not documentation, and nothing ships without a verification step.',
    ],
    pull: 'A workflow that can explain its own decisions is worth more than one that just goes fast.',
  },
  {
    id: 'sql-insight',
    n: '05', year: '2023', kind: 'PERSONAL',
    title: 'SQL Query Profiler',
    blurb: 'A lightweight CLI tool that analyzes slow query logs and surfaces actionable indexing recommendations — no DBA required.',
    tags: ['Python', 'SQL', 'Tableau'],
    accent: false,
    lede: 'Every team I worked with had a list of "known slow queries" that nobody had time to fix — so I built a tool to tell them exactly why they were slow and what to do about it.',
    facts: {
      Role: 'Creator',
      Year: '2023',
      Stack: 'Python · SQL · Tableau Public',
      Status: 'Open source',
      Client: 'Personal',
    },
    body: [
      'Slow query logs are the right data source for understanding database performance problems, but they\'re hard to read and even harder to act on. Most teams either ignore them or pay for an expensive monitoring tool to parse them. Neither option is great.',
      'The profiler ingests slow query logs from MySQL and PostgreSQL, normalizes the query patterns, and runs a rule-based analysis: missing indexes, full table scans, N+1 patterns, and cardinality mismatches. Output is a prioritized list of recommendations with estimated impact and the exact ALTER TABLE or CREATE INDEX statement to run.',
      'I use it on every engagement when I\'m handed a database I didn\'t design. It takes about 90 seconds to go from "we have some slow queries" to a ranked list of what to fix first.',
    ],
    pull: 'Diagnosis is free. Guessing which query to fix is expensive.',
  },
];

const NOTES = [
  { date: 'MAY 2026', title: 'On building things that outlive their hype', excerpt: 'Why I optimize for durability over novelty, and what a 200-year-old oak taught me about technical debt.' },
  { date: 'MAR 2026', title: 'Tiny models, big forests', excerpt: 'Notes from a year of running machine learning on hardware that costs less than lunch.' },
  { date: 'JAN 2026', title: 'The ergonomics of slowness', excerpt: 'Fast tools make fast decisions. Sometimes the kindest interface is one that makes you wait.' },
  { date: 'NOV 2025', title: 'Reading the rings', excerpt: 'A field guide to understanding a codebase by its history rather than its current shape.' },
];

const CERTS = [
  { name: 'Azure Data Engineer Associate', issuer: 'Microsoft',  year: '2024' },
  { name: 'Google Cloud Digital Leader',   issuer: 'Google',     year: '2023' },
  { name: 'Tableau Desktop Specialist',    issuer: 'Salesforce', year: '2023' },
  { name: 'Google Data Analyst',           issuer: 'Google',     year: '2022' },
  { name: 'Claude Code in Action',         issuer: 'Anthropic',  year: '2025' },
];

const SOCIAL = [
  { label: 'GitHub',   href: 'https://github.com/NiMoVi',                       icon: 'git-branch' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nicolas-mora',             icon: 'linkedin'   },
  { label: 'Email',    href: 'mailto:colonelnimo@gmail.com',                     icon: 'mail'       },
];

Object.assign(window, { PROJECTS, NOTES, CERTS, SOCIAL });
