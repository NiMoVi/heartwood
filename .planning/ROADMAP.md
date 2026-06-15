# Roadmap: Nico Mora Portfolio

## Milestones

- ✅ **v1.0 Portfolio MVP** — Phases 1–3 (shipped 2026-06-03)
- 🚧 **v1.1 Real Projects Content Refresh** — Phases 4–5 (in progress)

---

## Phases

<details>
<summary>✅ v1.0 Portfolio MVP (Phases 1–3) — SHIPPED 2026-06-03</summary>

- [x] Phase 1: Foundation (4/4 plans) — completed 2026-06-03
- [x] Phase 2: Content & Pages (5/5 plans) — completed 2026-06-03
- [x] Phase 3: Polish & Deploy (3/3 plans) — completed 2026-06-03

Full roadmap archive: `.planning/milestones/v1.0-ROADMAP.md`

</details>

---

### 🚧 v1.1 Real Projects Content Refresh (In Progress)

**Milestone Goal:** Replace 5 generic placeholder projects with 6 authentic real-world projects, each written in the CATR framework and fully rendering in the live site.

- [x] **Phase 4: Project Content Authoring** - Author all 6 project entries (CATR-structured) in src/data.js (completed 2026-06-03)
- [ ] **Phase 5: Implementation & Validation** - Replace PROJECTS array, update stat counter, browser-verify all 6 entries

---

## Phase Details

### Phase 4: Project Content Authoring
**Goal**: All 6 real project entries are authored into src/data.js using the CATR framework — ready to replace the placeholder array
**Depends on**: Phase 3 (v1.0 complete)
**Requirements**: CONS-01, CONS-02, CONS-03, CONS-04, PERS-01, PERS-02
**Success Criteria** (what must be TRUE):
  1. All 4 consulting project entries (State Health, State Lottery, Federal Financial Mgmt, USSGL Compliance) are written with lede, body[0–2], pull, blurb, and a complete facts{} object
  2. Both personal project entries (SQL Modernization Tools, Professional Networking Mobile App) are written with the same structure, positioning Nico as creator with AI tools named as method
  3. Every entry's facts{} object includes all 5 required keys: Role, Year, Stack, Status, Client — with Client anonymized to sector label for consulting entries
  4. Exactly 2 entries carry accent: true and those 2 are non-adjacent in the array order
  5. No invented metrics appear in any entry — all numbers are real, directional, or qualified observables
**Plans**: 1 plan

Plans:
- [ ] 04-01-PLAN.md — Replace PROJECTS array with 6 real CATR-structured entries and verify schema contract

### Phase 5: Implementation & Validation
**Goal**: The live site at https://nimovi.github.io/heartwood/ shows 6 project cards and all detail views render completely with no undefined values
**Depends on**: Phase 4
**Requirements**: DISP-01, DISP-02, DISP-03, DISP-04
**Success Criteria** (what must be TRUE):
  1. The hero stat counter on the landing page reads "6 Projects" (not "5 Projects")
  2. The Projects page displays all 6 cards, each with an accurate title, outcome-first blurb, year, tech tags, and correct CONSULTING or PERSONAL kind badge
  3. Each of the 6 project detail views opens without errors and all fields (lede, body paragraphs, pull quote, facts sidebar) are fully populated — no undefined text visible
  4. Clicking "Next project" from entry 6 wraps correctly to entry 1, and the full sequence 1→2→3→4→5→6→1 navigates without errors
**Plans**: 2 plans

Plans:
- [x] 05-01-PLAN.md — Update hero stat counter (5→6) and push to main
- [x] 05-02-PLAN.md — Browser-verify all 6 cards, detail views, and next-project navigation

---

## Progress

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Foundation | v1.0 | 4/4 | Complete | 2026-06-03 |
| 2. Content & Pages | v1.0 | 5/5 | Complete | 2026-06-03 |
| 3. Polish & Deploy | v1.0 | 3/3 | Complete | 2026-06-03 |
| 4. Project Content Authoring | v1.1 | 1/1 | Complete | 2026-06-03 |
| 5. Implementation & Validation | v1.1 | 0/2 | Not started | - |

### Phase 6: Make recommended mobile and UI improvements

**Goal**: All 13 identified mobile, accessibility, and CDN correctness issues are resolved — the site is usable on 375px phones, keyboard-navigable, and loading production React builds with pinned dependencies.
**Requirements**: MOB-01, MOB-02, MOB-03, MOB-04, MOB-05, MOB-06, MOB-07, MOB-08, MOB-09, MOB-10, MOB-11, MOB-12
**Depends on:** Phase 5
**Plans:** 4 plans

Plans:
- [ ] 06-01-PLAN.md — CSS-only fixes: modal overflow, portrait max-height, section/contact padding, sec-head wrap, contact pills, nav touch target
- [ ] 06-02-PLAN.md — Hamburger nav: Header useState toggle + hamburger/mobile-nav CSS
- [ ] 06-03-PLAN.md — JSX correctness: WorkCard a11y, next-card a11y, href fixes, frameBorder removal, dynamic footer date
- [ ] 06-04-PLAN.md — CDN correctness: React/ReactDOM production builds + Lucide 1.18.0 pin with SRI hashes

---

*Last updated: 2026-06-14 — Phase 6 planned (4 plans)*
