// src/data.js
// Portfolio content data. Edit this file to update projects, notes, certs, and social links.
// IMPORTANT: This is NOT an ES module. Do not use import/export.
// All arrays are exposed via window so components.jsx and screens.jsx can access them.
// Loaded as type="text/babel" BEFORE components.jsx in index.html.

const PROJECTS = [
  // ── PERS-01: Professional Networking Mobile App ───────────────────────────
  {
    id: 'professional-networking-app',
    n: '01', year: '2026', kind: 'PERSONAL',
    title: 'AI-Powered Professional Networking App',
    blurb: 'Co-developing an AI-powered mobile app targeting the DMV-area professional events market, coming soon to Apple App Store and Google Play Store.',
    tags: ['React Native', 'Node.js', 'Claude API', 'PostgreSQL'],
    accent: false,
    heroAccent: true,
    demo: 'assets/demos/burrow-app.html',
    cover: 'assets/burrow-wordmark.svg',
    lede: 'Most professional networking events do a poor job of actually connecting people. The introductions are random, the conversations are hard to remember, and follow-up almost never happens. We wanted to build something that fixed all three.',
    facts: {
      Role: 'Developer',
      Year: '2026',
      Stack: 'React Native · Expo · Node.js · Express · PostgreSQL · Claude API · pgvector · Docker · Railway',
      Status: 'Coming soon',
      Client: 'Personal',
    },
    body: [
      'I co-built a mobile app that helps attendees at professional events find the right people, not just any people. Before an event, the app surfaces relevant connections based on professional profiles. During it, you get context on who you\'re talking to. After, it structures the follow-up so conversations don\'t just disappear. The product is built for the DMV-area professional events market and is coming to the Apple App Store and Google Play Store.',
      'The stack is React Native with Expo for cross-platform mobile, a Node.js/Express API, PostgreSQL with pgvector for semantic profile matching, and the Anthropic Claude API for the facilitation layer. Infrastructure runs on Docker and deploys via Railway. I used Claude Code and GitHub Copilot throughout the build as development accelerants.',
      'Building this end-to-end has meant owning everything: mobile UI, API design, database schema, AI integration, and deployment. That was a deliberate choice. The consulting work gives me depth in one layer at a time. This gave me the full picture.',
    ],
    pull: 'The best networking tool isn\'t one that connects everyone. It\'s one that connects the right people.',
  },

  // ── PERS-02: SQL Modernization Tools ─────────────────────────────────────
  {
    id: 'sql-modernization-tools',
    n: '02', year: '2026', kind: 'PERSONAL',
    title: 'SQL Modernization Tools',
    blurb: 'Built a PySide6 desktop application with two modular extractors (SQL Stored Procedure and SSIS Package) that parse legacy objects and output structured CSVs, substantially speeding cloud migration analysis.',
    tags: ['Python', 'PySide6', 'GitHub Copilot'],
    accent: false,
    cover: 'assets/SQL-Modernization-Tools.png',
    lede: 'Cloud migration projects kept hitting the same wall early on: nobody had a fast, reliable way to audit legacy SQL stored procedures and SSIS packages before migration planning started. The work was manual, slow, and inconsistent from one practitioner to the next.',
    facts: {
      Role: 'Creator',
      Year: '2026',
      Stack: 'Python · PySide6 · VS Code · GitHub Copilot · Claude Code',
      Status: 'Active',
      Client: 'Personal',
    },
    body: [
      'I built a PySide6 desktop application with two independent modules: a SQL Stored Procedure Extractor and an SSIS Package Extractor. Each tool parses its file type, pulls the metadata that matters for migration planning (object names, dependencies, parameters, transformation logic), and exports structured CSVs ready for analysis or import into tracking systems.',
      'Built in Python with PySide6 for the GUI, developed in VS Code with GitHub Copilot and Claude Code as accelerants. The two-module architecture is intentional. A practitioner who only works with SSIS packages doesn\'t need the stored procedure module. Adding future extractors follows the same pattern without touching existing code.',
      'The tools are in active use across cloud migration projects and have been picked up by other practitioners beyond my own work. Compressing the legacy analysis phase, the part that\'s usually a black box, directly speeds the time from project start to an informed migration sequencing plan.',
    ],
    pull: 'The migration plan is only as good as the legacy audit that precedes it.',
  },

  // ── CONS-01: USSGL Compliance Tool ────────────────────────────────────────
  {
    id: 'ussgl-compliance-tool',
    n: '03', year: '2026', kind: 'CONSULTING',
    title: 'USSGL Automated Compliance Tool',
    blurb: 'Automated the manual USSGL ledger compliance process for federal accountants, validating against annually updated rules and generating actionable exception reports.',
    tags: ['Power Apps', 'VS Code', 'GitHub Copilot'],
    accent: true,
    lede: 'Federal accountants were manually checking general ledgers against USSGL compliance rules every cycle. The rules changed every year, which meant the process had to be done again from scratch. No automation, no audit trail, no consistent output.',
    facts: {
      Role: 'Developer / Tech Lead',
      Year: '2026',
      Stack: 'Power Apps · VS Code · GitHub Copilot · Claude Code',
      Status: 'Deployed',
      Client: 'Federal Accounting Agency',
    },
    body: [
      'I built a modular Power App that automates ledger validation across every section of the USSGL. The app takes in ledger data, runs the current year\'s compliance rules against every line, and outputs a structured exception report of items that need attention. The manual lookup-and-flag process is replaced by a clean exception workflow.',
      'Modularity was the key design decision. Each USSGL section is a self-contained rule module. When the annual rules update, only the affected modules change. The app was developed in VS Code with GitHub Copilot and Claude Code as accelerants throughout the build.',
      'The manual compliance process is now automated or substantially accelerated for the client. Because the tool is modular and parameterized, it can be replicated across other federal environments with similar USSGL obligations, which compresses the per-client deployment cost for future engagements.',
    ],
    pull: 'Rules that change every year are a maintenance problem until you build for modularity.',
  },

  // ── CONS-02: Federal Financial Management Power App ───────────────────────
  {
    id: 'federal-financial-power-app',
    n: '04', year: '2025', kind: 'CONSULTING',
    title: 'Federal Financial Management Platform',
    blurb: 'Led a team to build a three-tool Power App covering budget, grants, and cash management for federal clients, designed from the start to be replicated across agencies.',
    tags: ['Power Apps', 'Power BI', 'Power Query'],
    accent: false,
    lede: 'Federal clients working in financial management were tracking budget resources, grants, and cash position through disconnected spreadsheets and manual processes. Each function operated separately, with no shared data definitions and no integrated view across the engagement.',
    facts: {
      Role: 'Technical Lead',
      Year: '2025',
      Stack: 'Power BI · Power Query · Power Apps',
      Status: 'Deployed',
      Client: 'Federal Financial Agency',
    },
    body: [
      'I led a team to design and build a three-tool Power App covering budget resource management, grants management, and cash management, with Power BI dashboards surfacing the key metrics for each. My role was both technical and internal-consulting: I worked with subject matter experts on each financial domain to get the data models right, and I set UI standards across all three tools so the suite felt like one product.',
      'The platform runs on the Microsoft Power Platform stack: Power Apps for the application layer, Power Query for data transformation, Power BI for dashboarding. The architecture is modular by design. Each tool deploys independently, and the dashboard templates are parameterized so they can be customized per client without a rebuild from scratch.',
      'The result was a replicable multi-client solution. Adapting it to a new federal environment takes configuration changes, not a ground-up build. That compresses future delivery timelines and reduces the risk of inconsistent implementations across similar engagements.',
    ],
    pull: 'A platform that only works once isn\'t a platform. It\'s a custom build you have to repeat.',
  },

  // ── CONS-03: State Lottery Cloud Migration ────────────────────────────────
  {
    id: 'state-lottery-cloud-migration',
    n: '05', year: '2025', kind: 'CONSULTING',
    title: 'Lottery Analytics Cloud Migration',
    blurb: 'Migrated a state lottery\'s legacy database environment to Azure Synapse cloud significantly ahead of projected timelines, with minimal disruption to live reporting.',
    tags: ['Azure Synapse', 'SQL', 'Python', 'SSIS'],
    accent: false,
    lede: 'A state lottery authority was running its analytics on aging on-premises databases. The migration had a hard deadline, a dense web of dependent reports, and no tolerance for reporting downtime. Any broken dashboard would be immediately visible to business stakeholders.',
    facts: {
      Role: 'Data Engineer',
      Year: '2025',
      Stack: 'SQL · SSMS · SSIS · Control-M · Azure Synapse Analytics · Python/Spark',
      Status: 'Deployed',
      Client: 'State Lottery Authority',
    },
    body: [
      'My approach was to map the dependency graph before touching anything. I analyzed object dependencies across every report, table, notebook, and stored procedure, then sequenced the migration to prioritize the reports with the most downstream consumers. Each object was validated against source before cutover. Azure DevOps tracked everything through the pipeline so stakeholders had live visibility.',
      'The technical migration covered tables, Python/Spark notebooks, SSIS pipelines, Control-M scheduling, and stored procedures, all reconnected to cloud objects in Azure Synapse Analytics. Power BI reports were re-pointed to the new cloud sources in a final cutover wave, after validation confirmed data parity with the legacy environment.',
      'Delivery came in significantly ahead of projected timelines, with minimal disruption to reporting during the transition. Sequencing by report impact rather than migrating object-by-object was the factor that made the handoff clean.',
    ],
    pull: 'Migration risk is a sequencing problem before it\'s a technical one.',
  },

  // ── CONS-04: State Health Department ──────────────────────────────────────
  {
    id: 'state-health-demographics',
    n: '06', year: '2022', kind: 'CONSULTING',
    title: 'Statewide Demographics Repository',
    blurb: 'Built the first unified demographic data repository for a state health agency, now addressing health inequities for 4M+ residents and being replicated across other state departments.',
    tags: ['Azure Synapse', 'SQL', 'Python', 'SSIS'],
    accent: true,
    lede: 'A state health agency was trying to understand the demographics of 4M+ residents using siloed data across 10+ departments. No shared definitions, no linked records, no reliable way to surface health inequities. The data existed. A way to trust it didn\'t.',
    facts: {
      Role: 'Data Engineer / Tech Lead',
      Year: '2022',
      Stack: 'SQL · SSMS · SSIS · Azure Synapse Analytics · Python/Spark',
      Status: 'Deployed',
      Client: 'State Health Agency',
    },
    body: [
      'I led the design and build of a unified golden-record repository that pulled demographic data from all 10+ source departments, resolved duplicate identities through a deduplication pipeline, and enforced row-level security so each department could see their own data and the shared aggregate, but nothing more. The work included survey integration, new data models, stored procedures for ongoing ingestion, and a cloud migration to Azure Synapse Analytics.',
      'The stack was SQL and SSMS for transformation logic, SSIS for pipeline orchestration, Python/Spark for deduplication at scale, and Azure Synapse Analytics as the cloud destination. Data models were designed for longitudinal tracking. The goal wasn\'t a one-time export but a living repository that grows with the population.',
      'The repository became the first of its kind for the agency: a single place where health inequities could be surfaced with confidence in the underlying data. Other state health departments started replicating the approach after seeing the results, extending the impact well beyond the original engagement.',
    ],
    pull: 'The data had always existed. What was missing was a single place where it could be trusted.',
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
  { label: 'Email',    href: 'mailto:nicolasmora02@outlook.com',                     icon: 'mail'       },
];

Object.assign(window, { PROJECTS, NOTES, CERTS, SOCIAL });
