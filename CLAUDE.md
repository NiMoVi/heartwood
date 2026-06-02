<!-- GSD:project-start source:PROJECT.md -->
## Project

**Nico Mora — Portfolio Website**

A personal portfolio website for Nicolas Mora — Senior Consultant in AI & Analytics at Deloitte. The site showcases his expertise in data engineering, agentic AI, cloud infrastructure, and analytics through a curated mix of personal projects and anonymized consulting case studies. It will be deployed to GitHub Pages at https://nimovi.github.io/heartwood.

**Core Value:** A recruiter or potential collaborator lands on this site and immediately understands that Nico is a technically deep AI/Data professional who ships real things — not just a consultant who presents slides.

### Constraints

- **Tech stack**: CDN React only — no npm, no build pipeline, must work as raw static files on GitHub Pages
- **No backend**: Contact form removed in favor of social links; form fields may be stripped or replaced
- **Content confidentiality**: Deloitte client names must be anonymized in case study cards
- **File organization**: No design asset files in repo root (move to src/css/, src/js/, assets/)
- **Resume file**: .docx exists; need a PDF version for download; PDF hosting strategy TBD
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommended Stack
| Layer | Choice | Version | Confidence |
|-------|--------|---------|------------|
| UI framework | React (CDN) | 18.3.1 | High — already in place |
| JSX transpilation | Babel Standalone (CDN) | 7.29.0 | High — already in place, viable for prod at this scale |
| Icons | Lucide | latest | High — already in place |
| Fonts | Google Fonts (Spectral + Hanken Grotesk + JetBrains Mono) | — | High — already in place |
| CSS | Vanilla CSS custom properties | — | High — design system already built |
| Hosting | GitHub Pages | — | High — free, integrates with NiMoVi/heartwood repo |
| Deployment method | Push to `main` branch, serve from root | — | High — simplest path, no CI needed |
## CDN React Assessment
### Babel Standalone in Production — Is It Okay?
- Total visitor volume is low (dozens/day at most); CDN cold-start cost is amortized quickly
- The site's JSX files are small (~5KB each); transpilation is near-instant
- Babel standalone has been stable for years and is explicitly supported for demos/prototyping
- CDN script load + parse: ~800ms on a fast connection (Babel is the heavy one)
- JSX transpilation: ~30-80ms for the existing files
- First Contentful Paint: ~1.5-2.5s — acceptable for a portfolio, not great for a commerce site
- **Preact with htm** — 3KB instead of 900KB Babel, similar API, no JSX transpilation. Could replace React + Babel; requires rewriting JSX to tagged template literals. Medium complexity.
- **Vue 3 CDN** — Good CDN story but requires rewriting all components. High complexity.
- **Vanilla JS** — Most performant, most portable. High rewrite complexity.
## GitHub Pages Deployment Options
| Method | URL | Setup effort | Best for |
|--------|-----|--------------|----------|
| **Root of `main` branch** | `nimovi.github.io/heartwood` | None — default | ✅ This project |
| `docs/` subfolder on `main` | `nimovi.github.io/heartwood` | Move all files into `docs/` | Monorepos with source + site |
| `gh-pages` branch | `nimovi.github.io/heartwood` | Separate branch workflow | Projects with a build step |
| `nimovi.github.io` root repo | `nimovi.github.io` | Rename repo to `nimovi.github.io` | Personal root site (no path prefix) |
- Enable GitHub Pages in repo Settings → Pages → Source: `main` branch, `/ (root)` folder
- `index.html` at root is served at `https://nimovi.github.io/heartwood/`
- No CI, no branch management, no `docs/` folder gymnastics
## What to Avoid
| Anti-pattern | Reason |
|--------------|--------|
| Adding React Router | Adds ~28KB dep, requires 404.html trick or hash routing, no concrete benefit for a 4-view SPA |
| npm / package.json | Introduces build step and CI complexity; CDN approach is working and appropriate |
| Server-side rendering (Next.js, Astro) | GitHub Pages is a static file server; SSR requires a Node server |
| Storing resume as Google Drive link | Breaks when file is moved, permissions errors are common |
| `raw.githubusercontent.com` for PDFs | No MIME type control, browser behavior varies |
| Multiple HTML pages | Breaks the SPA; theme/state would reset on navigation |
| Bootstrap or Tailwind | The existing custom design system is better than either framework for this aesthetic; don't add CSS frameworks on top of it |
## Integrity / Security Notes
- React 18.3.1: `sha384-hD6/rw4ppMLGNu3...` ✓
- ReactDOM 18.3.1: `sha384-u6aeetuaXnQ38...` ✓
- Babel 7.29.0: `sha384-m08KidiNqLdpJq...` ✓
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
