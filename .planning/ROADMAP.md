# Roadmap: Nico Mora Portfolio

**Milestone:** v1.0 — Live Portfolio
**Phases:** 3
**Requirements mapped:** 24 / 24

---

## Phases

- [x] **Phase 1: Foundation** — File structure reorganized, paths fixed, branding updated, data layer extracted (completed 2026-06-03)
- [ ] **Phase 2: Content & Pages** — All pages built with real content, social links wired, resume linked
- [ ] **Phase 3: Polish & Deploy** — GitHub Pages live, mobile QA complete, OG image in place

---

## Phase Details

### Phase 1: Foundation
**Goal:** The repo is organized for development — assets in proper directories, paths working, Heartwood branding replaced with Nico Mora, and all content data separated into its own file.
**Depends on:** Nothing (first phase)
**Requirements:** FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05
**UI hint**: yes
**Plans:** 4/4 plans complete

**Success Criteria:**
1. Opening `index.html` in a browser renders the site without console errors — all CSS and JSX files load from their new `src/` paths
2. The header wordmark reads "Nico Mora" and no instance of "Heartwood" appears as a visible identity element on the page
3. A `src/data.js` file exists and exports PROJECTS, NOTES, CERTS, and SOCIAL data — `components.jsx` imports from it rather than defining data inline
4. The resume file lives at `assets/resume/` and is not present in the repo root
5. The directory tree matches the target structure: `src/css/`, `src/data.js`, `src/components.jsx`, `src/screens.jsx`, `assets/resume/`

Plans:
- [x] 01-01-PLAN.md — Move CSS and JSX files to src/ and update all index.html path references
- [x] 01-02-PLAN.md — Replace Heartwood wordmark with Nico Mora in Header component
- [x] 01-03-PLAN.md — Extract PROJECTS, NOTES, CERTS, SOCIAL into src/data.js; remove from components.jsx
- [x] 01-04-PLAN.md — Move _Nicolas_Mora_Resume.docx to assets/resume/

---

### Phase 2: Content & Pages
**Goal:** Every page shows Nico's real professional story — accurate hero copy, real project cards with anonymized case studies, a complete About page with bio and certifications, and all social links wired to live URLs.
**Depends on:** Phase 1
**Requirements:** LAND-01, LAND-02, LAND-03, LAND-04, PROJ-01, PROJ-02, PROJ-03, PROJ-04, ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, ABOUT-05, CONT-01, CONT-02, CONT-03
**UI hint**: yes
**Plans:** 5 plans

**Success Criteria:**
1. The landing page hero displays Nico's name, his Deloitte title, and a 2-3 sentence positioning statement; the stats row shows real numbers (not placeholder "07 projects / 12 cities / 2.3k stars")
2. The projects grid shows 4-5 cards with real titles, blurbs, and tech tags; clicking any card opens a detail view with a key facts table, narrative body, and next-project navigation — all client names are anonymized
3. Navigating to About from the header reaches a page that includes the Army → FIU → Deloitte narrative, explicit trilingual callout, all 5 certifications in a grid, and a working resume download button
4. The contact section (reachable from navigation) shows LinkedIn, GitHub, and email links — no form — and all three links resolve to Nico's real profiles/address
5. Both CTA buttons on the landing hero behave correctly: the primary scrolls to the projects grid and the secondary navigates to the contact section

Plans:
- [ ] 02-01-PLAN.md — Replace hero placeholder copy with real Deloitte title, positioning statement, and stats (Wave 1)
- [ ] 02-02-PLAN.md — Rewrite PROJECTS array with 5 real entries: 3 anonymized Deloitte case studies + 2 personal tools (Wave 1)
- [ ] 02-03-PLAN.md — Build About screen with bio narrative, trilingual callout, cert grid, resume download; wire nav (Wave 2)
- [ ] 02-04-PLAN.md — Strip Contact form, replace with social link grid; update headline and body copy (Wave 2)
- [ ] 02-05-PLAN.md — Wire Footer social icons to real URLs via SOCIAL map; confirm LinkedIn slug (Wave 3)

---

### Phase 3: Polish & Deploy
**Goal:** The site is publicly live at `https://nimovi.github.io/heartwood/`, renders correctly on mobile, and produces a proper link preview when shared on LinkedIn or Slack.
**Depends on:** Phase 2
**Requirements:** DEPLOY-01, DEPLOY-02, DEPLOY-03
**UI hint**: yes

**Success Criteria:**
1. Visiting `https://nimovi.github.io/heartwood/` in a browser loads the portfolio with no 404 errors and no broken assets
2. On a 375px-wide viewport (iPhone SE), every page section is readable and usable — no horizontal scroll, no overlapping text, no clipped buttons
3. Pasting the portfolio URL into LinkedIn's post composer or Slack generates a preview card showing the OG image, site title, and description

**Plans:**
- [ ] 3.1 GitHub Pages config — Enable GitHub Pages on `NiMoVi/heartwood` repo pointing to root of `main`; verify live URL
- [ ] 3.2 Mobile QA — Test all views at 360px, 375px, and 430px widths; fix any layout regressions
- [ ] 3.3 OG image — Create `assets/og-card.png` (1200x630) with Nico's name and title; confirm `<meta og:image>` tag resolves correctly when URL is shared

---

## Requirement Coverage

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Pending |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Pending |
| FOUND-05 | Phase 1 | Pending |
| LAND-01 | Phase 2 | Pending |
| LAND-02 | Phase 2 | Pending |
| LAND-03 | Phase 2 | Pending |
| LAND-04 | Phase 2 | Pending |
| PROJ-01 | Phase 2 | Pending |
| PROJ-02 | Phase 2 | Pending |
| PROJ-03 | Phase 2 | Pending |
| PROJ-04 | Phase 2 | Pending |
| ABOUT-01 | Phase 2 | Pending |
| ABOUT-02 | Phase 2 | Pending |
| ABOUT-03 | Phase 2 | Pending |
| ABOUT-04 | Phase 2 | Pending |
| ABOUT-05 | Phase 2 | Pending |
| CONT-01 | Phase 2 | Pending |
| CONT-02 | Phase 2 | Pending |
| CONT-03 | Phase 2 | Pending |
| DEPLOY-01 | Phase 3 | Pending |
| DEPLOY-02 | Phase 3 | Pending |
| DEPLOY-03 | Phase 3 | Pending |

**Coverage:** 24 / 24 v1 requirements mapped. No orphans.

---

*Roadmap created: 2026-06-02*
*Plans added: 2026-06-02 (Phase 1 — 4 plans, 2 waves)*
*Plans added: 2026-06-02 (Phase 2 — 5 plans, 3 waves)*
