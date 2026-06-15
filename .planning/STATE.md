---
gsd_state_version: 1.0
milestone: v1.1
milestone_name: Real Projects Content Refresh
status: executing
last_updated: "2026-06-15T01:44:35.838Z"
last_activity: 2026-06-15
progress:
  total_phases: 3
  completed_phases: 3
  total_plans: 7
  completed_plans: 7
  percent: 0
---

# Project State

**Project:** Nico Mora Portfolio
**Last updated:** 2026-06-03

## Current Phase

Phase: 06 of 6 (make-recommended-mobile-and-ui-improvements)
Plan: Not started
Status: In progress
Last activity: 2026-06-15

Progress: [░░░░░░░░░░] 0% (v1.1)

## Project Reference

See: .planning/PROJECT.md (updated 2026-06-03)

**Core value:** A recruiter or collaborator immediately understands Nico is a technically deep AI/Data professional who ships real things.
**Current focus:** Phase 06 — make-recommended-mobile-and-ui-improvements

## Accumulated Context

### Decisions

- v1.1 is content-only: replace PROJECTS array in src/data.js + one literal in src/screens.jsx line 18 (5 → 6)
- CATR written into existing flat body[] array — no schema changes; lede=Context, body[0]=Action, body[1]=Technology, body[2]=Result
- Client anonymization: anonymize WHO (sector label), never WHAT/HOW/OUTCOME
- Nico is always the subject; AI tools (Claude Code, Copilot) are the method
- 2 of 6 entries carry accent: true; must be non-adjacent in array order
- All 5 facts{} keys required per entry: Role, Year, Stack, Status, Client
- [Phase 06]: Used CSS min(430px, 94vw) for modal width cap rather than a media query override
- [Phase 06]: Portrait max-height placed in 860px breakpoint so it applies to all mobile/tablet widths
- [Phase 06]: sec-head flex-wrap limited to 480px block to preserve inline layout on wider screens
- [Phase 06]: Nav links use href='#' + e.preventDefault() for keyboard accessibility in hamburger menu
- [Phase 06]: hamburger display:none globally, overridden to display:flex inside 480px breakpoint — no min-width query needed
- [Phase 06-03]: Keyboard accessibility pattern: role='button' tabIndex={0} onKeyDown on non-anchor interactive elements
- [Phase 06-03]: SPA link correctness: all anchor navigation tags carry href='#' and e.preventDefault() to enable keyboard focus
- [Phase 06]: Switch React 18.3.1 and ReactDOM 18.3.1 to production.min.js CDN builds with SRI hashes; pin Lucide to 1.18.0 with SRI

### Key Blockers

(none)

### Open Questions

(none)

### Roadmap Evolution

- Phase 6 added: Make recommended mobile and UI improvements

### Quick Tasks Completed

| # | Description | Date | Commit | Directory |
|---|-------------|------|--------|-----------|
| 260603-lr0 | commit text updates and remove coordinates from footer | 2026-06-03 | 3b2bf58 | [260603-lr0-commit-text-updates-and-remove-coordinat](./quick/260603-lr0-commit-text-updates-and-remove-coordinat/) |
| 260603-m62 | embed Burrow demo as iframe in professional-networking-app detail | 2026-06-03 | c4bf5c9 | [260603-m62-embed-burrow-demo-as-iframe-in-professio](./quick/260603-m62-embed-burrow-demo-as-iframe-in-professio/) |
| 260603-mcx | create README.md for the heartwood portfolio repo | 2026-06-03 | 4331cf6 | [260603-mcx-create-readme-md-for-the-heartwood-portf](./quick/260603-mcx-create-readme-md-for-the-heartwood-portf/) |
| 260603-mwi | Add demo modal button and cover image to professional-networking-app detail page | 2026-06-03 | f8b4d6c | [260603-mwi-add-demo-modal-button-and-cover-image-to](./quick/260603-mwi-add-demo-modal-button-and-cover-image-to/) |
| 260603-o6y | flip project order to show newest projects first | 2026-06-03 | 1a89ec9 | [260603-o6y-flip-project-order-to-show-newest-projec](./quick/260603-o6y-flip-project-order-to-show-newest-projec/) |
| 260607-sfe | Add dynamic side padding for mobile/small screens | 2026-06-08 | f7aadb0 | [260607-sfe-add-dynamic-side-padding-for-mobile-smal](./quick/260607-sfe-add-dynamic-side-padding-for-mobile-smal/) |
| 260607-sow | Remove em dashes from website text throughout | 2026-06-08 | 2d79ab3 | [260607-sow-remove-em-dashes-from-website-text-throu](./quick/260607-sow-remove-em-dashes-from-website-text-throu/) |
| 260613-mmq | Rewrite all website copy to match professional-casual voice | 2026-06-13 | 9568bb4 | [260613-mmq-rewrite-all-website-copy-to-be-professio](./quick/260613-mmq-rewrite-all-website-copy-to-be-professio/) |
