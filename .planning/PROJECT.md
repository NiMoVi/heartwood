# Nico Mora — Portfolio Website

## What This Is

A personal portfolio website for Nicolas Mora — Senior Consultant in AI & Analytics at Deloitte. The site is live at https://nimovi.github.io/heartwood/ and showcases his expertise in data engineering, agentic AI, cloud infrastructure, and analytics through a curated mix of personal projects and anonymized consulting case studies.

## Core Value

A recruiter or potential collaborator lands on this site and immediately understands that Nico is a technically deep AI/Data professional who ships real things — not just a consultant who presents slides.

## Current Milestone: v1.1 Real Projects Content Refresh

**Goal:** Replace the 5 generic placeholder projects with 6 authentic real-world projects, each professionally written in a Context → Action → Technology → Result/Impact framework.

**Target features:**
- 6 new project entries (4 consulting, 2 personal) replacing the current 5
- Each project written using the CATR 4-part narrative structure
- Projects: State Health Dept demographics repository, State Lottery cloud migration, Federal financial management Power App, USSGL compliance tool, SQL Modernization Tools, Professional networking mobile app

## Previous State (v1.0 — shipped 2026-06-03)

- **Live URL:** https://nimovi.github.io/heartwood/
- **Tech:** CDN React 18 + Babel Standalone + Lucide Icons (no build step)
- **Pages:** Hero/Landing, Projects (with detail views), About, Contact
- **Content:** 5 real projects (3 anonymized Deloitte case studies + 2 personal), full bio, 5 certs, wired social links
- **Mobile:** Responsive at 360px–430px via @media (max-width: 480px) in kit.css
- **Social sharing:** OG meta tags + 1200×630 preview card; LinkedIn Post Inspector confirmed
- **LOC:** ~1,125 lines across CSS + JSX + data + HTML

## Requirements

### Validated (v1.0)

- [x] Design assets reorganized out of root into `src/css/`, `src/` — Phase 1
- [x] Heartwood → "Nico Mora" rebrand in header wordmark — Phase 1
- [x] Content data extracted into `src/data.js` (PROJECTS, NOTES, CERTS, SOCIAL via window globals) — Phase 1
- [x] Resume `.docx` moved to `assets/resume/` — Phase 1
- [x] Landing hero with real title, positioning statement, verifiable stats (4 projects / 5 certs / 3 languages) — Phase 2
- [x] Projects page: 5 real cards with detail views, anonymized Deloitte client names — Phase 2
- [x] About page: Army → FIU → Deloitte bio, trilingual callout, 5-cert grid, resume download — Phase 2
- [x] Contact section: LinkedIn / GitHub / email links, no form — Phase 2
- [x] Footer wired to SOCIAL map with correct LinkedIn slug (nimovi) — Phase 2
- [x] GitHub Pages live at https://nimovi.github.io/heartwood/ — Phase 3
- [x] Mobile-responsive layout at 360px–430px (confirmed mobile-ok) — Phase 3
- [x] OG card image (1200×630) + meta tags + LinkedIn preview confirmed — Phase 3
- [x] `<title>` updated to "Nico Mora — AI & Analytics" — Phase 3
- [x] SVG favicon wired via `assets/mark.svg` — Phase 3

### Active (v1.1)

- [x] 6 real project entries in `src/data.js` replacing existing 5 placeholders — Phase 4
- [x] Each project formatted in CATR framework (Context, Action, Technology, Result/Impact) — Phase 4
- [x] 4 consulting projects (State Health, State Lottery, Federal Financial Mgmt, USSGL Compliance) — Phase 4
- [x] 2 personal projects (SQL Modernization Tools, Professional Networking Mobile App) — Phase 4
- [x] Live site updated: stat counter reads "6 Projects", all 6 cards and detail views render without errors — Phase 5

### Future (v1.2 candidates)

- [ ] Custom domain setup (e.g., nicomora.dev or similar)
- [ ] Field Notes / blog section with real writing
- [ ] Performance: `<link rel="preload">` for Babel Standalone to improve FCP
- [ ] `sitemap.xml` for SEO crawlability
- [ ] Dark/light theme toggle (design already exists)

### Out of Scope

| Feature | Reason |
|---------|--------|
| Backend contact form | GitHub Pages is static; social links are sufficient |
| CMS / admin panel | Hardcoded data is fine at this scale |
| npm / build pipeline | CDN React works; no build step introduced |
| Mobile app / PWA | Not a mobile app use case |
| Authentication | Public portfolio needs no auth |
| Real-time analytics dashboard | Over-engineered for a portfolio |

## Context

**Stack:** CDN React 18.3.1, ReactDOM, Babel Standalone 7.29.0, Lucide (latest), Google Fonts (Spectral + Hanken Grotesk + JetBrains Mono), vanilla CSS custom properties.

**Architecture:** Single `index.html` at repo root. Three `<script type="text/babel">` tags load `src/data.js`, `src/components.jsx`, `src/screens.jsx` in order. Data exposed via `Object.assign(window, {...})` — the only viable inter-file pattern for CDN Babel (no ES module imports). React mounted to `<div id="root">`.

**Hosting:** GitHub Pages, `main` branch, `/(root)` folder. Repo: NiMoVi/heartwood (renamed from heartwood-NicoMora during Phase 3 deployment).

**`.nojekyll`** at repo root disables Jekyll processing — required for CDN React/Babel JSX files to serve as-is.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| CDN React, no build | Simplest path to GitHub Pages; no CI needed | ✓ Confirmed — site deployed cleanly, no build step |
| "Nico Mora" branding over "Heartwood" | Real name is the brand | ✓ Done — header wordmark + page title updated |
| Social links instead of contact form | Static hosting; avoids third-party form dependency | ✓ Contact section uses SOCIAL.map |
| Projects = personal + anonymized case studies | Consulting work shows impact; personal shows builder instinct | ✓ 3 Deloitte + 2 personal |
| `.planning/` not committed to git | User preference — keep planning local | ✓ Confirmed, .gitignore in place |
| `data.js` via window globals, not ES modules | CDN Babel doesn't support `import`; `Object.assign(window)` is the only viable pattern | ✓ Implemented and stable |
| Repo renamed heartwood-NicoMora → heartwood | Cleaner live URL; matches original REQUIREMENTS.md text | ✓ Pages re-deployed automatically |
| OG image via browser screenshot (not generative) | No build tooling; Chrome DevTools Device Mode screenshot matches site aesthetic | ✓ 1200×630 PNG committed |

## Constraints

- **Tech stack**: CDN React only — no npm, no build pipeline
- **No backend**: Contact form replaced with social links
- **Content confidentiality**: Deloitte client names anonymized in case study cards
- **File organization**: No design asset files in repo root — all in `src/css/`, `src/`, `assets/`

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-03 — Phase 5 complete: live site verified — 6 projects, all cards and detail views rendering correctly*
