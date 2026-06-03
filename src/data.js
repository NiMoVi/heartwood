// src/data.js
// Portfolio content data. Edit this file to update projects, notes, certs, and social links.
// IMPORTANT: This is NOT an ES module. Do not use import/export.
// All arrays are exposed via window so components.jsx and screens.jsx can access them.
// Loaded as type="text/babel" BEFORE components.jsx in index.html.

const PROJECTS = [
  // ── CONS-01: State Health Department ──────────────────────────────────────
  {
    id: 'state-health-demographics',
    n: '01', year: '2024', kind: 'CONSULTING',
    title: 'Statewide Demographics Repository',
    blurb: 'Built the first unified demographic data repository for a state health agency — now addressing health inequities for 4M+ residents and being replicated across other state departments.',
    tags: ['Azure Synapse', 'SQL', 'Python', 'SSIS'],
    accent: true,
    lede: 'A state health agency was trying to understand the demographics of 4M+ residents using siloed data scattered across 10+ departments — with no shared definitions, no linked records, and no reliable way to identify health inequities.',
    facts: {
      Role: 'Data Engineer / Tech Lead',
      Year: '2024',
      Stack: 'SQL · SSMS · SSIS · Azure Synapse Analytics · Python/Spark',
      Status: 'Deployed',
      Client: 'State Health Agency',
    },
    body: [
      'I led the design and build of a unified golden-record repository that pulled demographic data from all 10+ source departments, resolved duplicate identities through a deduplication pipeline, and enforced row-level security so each department could see their data and the shared aggregate — but nothing more. The work included survey integration, new data models, stored procedures for ongoing ingestion, and a cloud migration to Azure Synapse Analytics.',
      'The stack was SQL and SSMS for transformation logic, SSIS for pipeline orchestration, Python/Spark for deduplication at scale, and Azure Synapse Analytics as the cloud destination. Data models were designed for longitudinal tracking — the goal was not a one-time export but a living repository that grows with the population.',
      'The repository became the first of its kind for the agency — a single place where health inequities could be surfaced with confidence in the underlying data. Other state health departments began replicating the approach after seeing the results, extending the impact beyond the original engagement.',
    ],
    pull: 'The data had always existed. What was missing was a single place where it could be trusted.',
  },

  // ── CONS-02: State Lottery Cloud Migration ────────────────────────────────
  {
    id: 'state-lottery-cloud-migration',
    n: '02', year: '2023', kind: 'CONSULTING',
    title: 'Lottery Analytics Cloud Migration',
    blurb: 'Migrated a state lottery\'s legacy database environment to Azure Synapse cloud significantly ahead of projected timelines, with minimal disruption to live reporting.',
    tags: ['Azure Synapse', 'SQL', 'Python', 'SSIS'],
    accent: false,
    lede: 'A state lottery authority was running its analytics on aging on-premises databases. The cloud migration had a hard deadline, a complex web of dependent reports, and zero tolerance for reporting downtime — any broken dashboard would be immediately visible to business stakeholders.',
    facts: {
      Role: 'Data Engineer',
      Year: '2023',
      Stack: 'SQL · SSMS · SSIS · Control-M · Azure Synapse Analytics · Python/Spark',
      Status: 'Deployed',
      Client: 'State Lottery Authority',
    },
    body: [
      'My approach was to map the dependency graph before touching anything. I analyzed object dependencies across every report, table, notebook, and stored procedure — then sequenced the migration to prioritize the reports with the most downstream consumers. Each migration was validated against the source before cutover, and Azure DevOps tracked every object through the pipeline so stakeholders had live progress visibility.',
      'The technical migration covered tables, Python/Spark notebooks, SSIS pipelines, Control-M scheduling, and stored procedures — all reconnected to cloud objects in Azure Synapse Analytics. Power BI reports were re-pointed to the new cloud sources in a final cutover wave, after validation confirmed data parity with the legacy environment.',
      'Delivery came in significantly ahead of projected timelines, with minimal disruption to reporting operations during the transition. The sequencing strategy — prioritizing by report impact rather than migrating object-by-object — was the key factor in the clean handoff.',
    ],
    pull: 'Migration risk is a sequencing problem before it\'s a technical one.',
  },

  // ── CONS-03: Federal Financial Management Power App ───────────────────────
  {
    id: 'federal-financial-power-app',
    n: '03', year: '2023', kind: 'CONSULTING',
    title: 'Federal Financial Management Platform',
    blurb: 'Led a team to build a three-tool Power App covering budget, grants, and cash management for federal clients — designed from the start to be replicated across agencies.',
    tags: ['Power Apps', 'Power BI', 'Power Query'],
    accent: false,
    lede: 'Federal clients working in financial management lacked integrated tooling to track budget resources, grants, and cash position in one place. Each function was managed through disconnected spreadsheets and manual processes — with no consistent interface or shared data definitions across the engagement.',
    facts: {
      Role: 'Technical Lead',
      Year: '2023',
      Stack: 'Power BI · Power Query · Power Apps',
      Status: 'Deployed',
      Client: 'Federal Financial Agency',
    },
    body: [
      'I led a team to design and build a three-tool Power App — budget resource management, grants management, and cash management — with Power BI dashboards surfacing the key metrics for each function. My role combined technical delivery with internal consulting: I worked with subject matter experts on each financial domain to get the data models right, and I established UI standards across all three tools so the suite felt like one product rather than three independent builds.',
      'The platform was built on the Microsoft Power Platform stack — Power Apps for the application layer, Power Query for data transformation, and Power BI for dashboarding. The architecture was intentionally modular: each tool could be deployed independently, and the dashboard templates were parameterized so they could be customized per client without rebuilding from scratch.',
      'The result was a replicable multi-client solution. The dashboards and underlying models could be adapted to a new federal environment with configuration changes rather than a ground-up build — compressing future delivery timelines and reducing the risk of inconsistent implementations across similar engagements.',
    ],
    pull: 'A platform that only works once isn\'t a platform — it\'s a custom build you have to repeat.',
  },

  // ── CONS-04: USSGL Compliance Tool ────────────────────────────────────────
  {
    id: 'ussgl-compliance-tool',
    n: '04', year: '2024', kind: 'CONSULTING',
    title: 'USSGL Automated Compliance Tool',
    blurb: 'Automated the manual USSGL ledger compliance process for federal accountants — validating against annually updated rules and generating actionable exception reports.',
    tags: ['Power Apps', 'VS Code', 'GitHub Copilot'],
    accent: true,
    lede: 'Federal accountants were manually checking general ledgers against USSGL compliance rules — a process that consumed significant time each cycle and had to be repeated in full every year when the USSGL rules changed. There was no automation, no audit trail, and no consistent reporting format.',
    facts: {
      Role: 'Developer / Tech Lead',
      Year: '2024',
      Stack: 'Power Apps · VS Code · GitHub Copilot · Claude Code',
      Status: 'Deployed',
      Client: 'Federal Accounting Agency',
    },
    body: [
      'I built a modular Power App that automates ledger validation across every section of the USSGL. The app ingests ledger data, applies the current year\'s compliance rules against every line, and generates a report of items that require attention — replacing the manual lookup-and-flag process with a structured exception workflow. Modularity was a deliberate design choice: each USSGL section is a self-contained rule module, so when the annual rules update, only the affected modules need to change.',
      'The tool was developed in VS Code using GitHub Copilot and Claude Code as accelerants throughout the build. Power Apps handled the application layer and the rules engine. The output reports are formatted for the accountants\' existing workflow — structured to be actionable immediately without reformatting or manual interpretation.',
      'The manual compliance process is now automated or substantially accelerated for the client. Because the tool is modular and parameterized, it is designed to be replicated across other federal environments with similar USSGL compliance obligations — reducing the per-client deployment cost for future engagements.',
    ],
    pull: 'Rules that change every year are a maintenance problem until you build for modularity.',
  },

  // ── PERS-01: SQL Modernization Tools ─────────────────────────────────────
  {
    id: 'sql-modernization-tools',
    n: '05', year: '2024', kind: 'PERSONAL',
    title: 'SQL Modernization Tools',
    blurb: 'Built a PySide6 desktop application with two modular extractors — SQL Stored Procedure and SSIS Package — that parse legacy objects and output structured CSVs, substantially speeding cloud migration analysis.',
    tags: ['Python', 'PySide6', 'GitHub Copilot'],
    accent: false,
    lede: 'Cloud migration projects consistently hit the same bottleneck: no one had a fast, reliable way to audit legacy SQL stored procedures and SSIS packages before migration planning started. The analysis was manual, slow, and inconsistent across practitioners.',
    facts: {
      Role: 'Creator',
      Year: '2024',
      Stack: 'Python · PySide6 · VS Code · GitHub Copilot · Claude Code',
      Status: 'Active',
      Client: 'Personal',
    },
    body: [
      'I built the SQL Modernization Tools as a PySide6 desktop application with two independent modules: a SQL Stored Procedure Extractor and an SSIS Package Extractor. Both tools parse their respective file types, extract the structured metadata relevant to migration planning — object names, dependencies, parameters, transformation logic — and export the results as structured CSVs ready for analysis or import into tracking systems.',
      'The application was built in Python using PySide6 for the GUI layer, developed in VS Code with GitHub Copilot and Claude Code as accelerants. The two-module architecture keeps the tools independent — a practitioner working only with SSIS packages doesn\'t need the stored procedure module, and adding future extractors follows the same pattern without touching existing code.',
      'The tools are in active use across cloud migration projects and have been adopted by multiple practitioners beyond my own work. Substantially speeding the legacy analysis phase — the part of a migration that is usually a black box — directly compresses the time from project start to informed migration sequencing.',
    ],
    pull: 'The migration plan is only as good as the legacy audit that precedes it.',
  },

  // ── PERS-02: Professional Networking Mobile App ───────────────────────────
  {
    id: 'professional-networking-app',
    n: '06', year: '2025', kind: 'PERSONAL',
    title: 'AI-Powered Professional Networking App',
    blurb: 'Co-developing an AI-powered mobile app targeting the DMV-area professional events market — coming soon to Apple App Store and Google Play Store.',
    tags: ['React Native', 'Node.js', 'Claude API', 'PostgreSQL'],
    accent: false,
    lede: 'Professional networking events generate moments of potential connection that rarely turn into lasting relationships — because the facilitation is purely social, with no intelligent structure to help attendees find the right people, remember conversations, or follow up effectively.',
    facts: {
      Role: 'Co-Developer',
      Year: '2025',
      Stack: 'React Native · Expo · Node.js · Express · PostgreSQL · Claude API · pgvector · Docker · Railway',
      Status: 'Coming soon',
      Client: 'Personal',
    },
    body: [
      'I co-developed an AI-powered mobile app designed to solve the facilitation gap in professional networking events. The app targets the DMV-area professional events market and uses AI to help attendees identify relevant connections before an event, surface conversation context during it, and structure follow-up after. The product is being built from scratch as a full-stack mobile application.',
      'The stack is React Native with Expo for cross-platform mobile, a Node.js/Express API backend, PostgreSQL with pgvector for semantic profile matching, and the Anthropic Claude API for intelligent facilitation features. Infrastructure runs on Docker and deploys via Railway. Development has used Claude Code and GitHub Copilot throughout the build.',
      'The app is coming soon to the Apple App Store and Google Play Store. Building it has meant owning the full stack — mobile UI, API design, database schema, AI integration, and deployment infrastructure — which has been a deliberate choice to develop end-to-end product intuition alongside the consulting work.',
    ],
    pull: 'The best networking tool isn\'t one that connects everyone — it\'s one that connects the right people.',
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
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nimovi',                   icon: 'linkedin'   },
  { label: 'Email',    href: 'mailto:colonelnimo@gmail.com',                     icon: 'mail'       },
];

Object.assign(window, { PROJECTS, NOTES, CERTS, SOCIAL });
