---
phase: 02-content-pages
plan: 01
subsystem: ui
tags: [react, jsx, content, hero, landing-page]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: src/screens.jsx with Home function; src/data.js with PROJECTS array via window globals
provides:
  - Home screen hero with real professional identity (Senior Consultant · AI & Analytics · Deloitte)
  - Action-oriented CTA buttons wired to scroll (#work) and nav (go('contact'))
  - Real stat row: 4 Projects / 5 Certifications / 3 Languages
affects:
  - 02-02-projects-data (depends on hero section being finalized before projects grid is filled)
  - 02-03-about-screen (About Nico link in Selected work section now points to go('about'))

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Hero copy editing: targeted replacements within the Home function only — no other functions touched"
    - "Scroll-to-section via getElementById + window.scrollTo preserving offsetTop arithmetic"
    - "View navigation via go(view) state pattern — no URL routing"

key-files:
  created: []
  modified:
    - src/screens.jsx

key-decisions:
  - "Stats row uses 4 Projects / 5 Certifications / 3 Languages — all verifiable from PROJECTS and CERTS arrays and resume; avoids vanity metrics like GitHub stars"
  - "Secondary nav link in Selected work section changed from go('notes') to go('about') since Field Notes is deferred to v2"
  - "h2 'Things I've grown' replaced with 'Selected work' for consistency now that content is real"

patterns-established:
  - "Hero MonoLabel pattern: eyebrow label for role/context above h1"

requirements-completed: [LAND-01, LAND-02, LAND-04]

# Metrics
duration: 1min
completed: 2026-06-03
---

# Phase 02 Plan 01: Landing Hero Content Summary

**Hero section rewritten with real identity: Senior Consultant title, agentic AI positioning statement, 4/5/3 stats, and action-oriented CTA buttons**

## Performance

- **Duration:** ~1 min
- **Started:** 2026-06-03T01:26:28Z
- **Completed:** 2026-06-03T01:27:14Z
- **Tasks:** 1 of 1
- **Files modified:** 1

## Accomplishments

- Replaced all placeholder forest-metaphor hero copy with Nico's real professional identity
- MonoLabel now reads "Senior Consultant · AI & Analytics · Deloitte"
- h1: "I build data systems that make decisions — not just dashboards."
- Lede: real 2-sentence positioning statement citing agentic AI, cloud infrastructure, analytics
- Stats updated from "07/2.3k/12" to "4 Projects / 5 Certifications / 3 Languages" (verifiable real numbers)
- CTA buttons: "View my work" (scroll to #work, preserved) and "Get in touch" (go('contact'), preserved)
- "Selected work" section h2 updated from "Things I've grown" and secondary link changed from go('notes') to go('about')

## Task Commits

1. **Task 1: Replace hero copy with real professional content** - `57bf399` (feat)

## Files Created/Modified

- `src/screens.jsx` - Home function hero section fully rewritten; Selected work section h2 and secondary link updated

## Decisions Made

- Stats row uses 4/5/3 (Projects/Certifications/Languages) — all directly verifiable from PROJECTS array, CERTS array, and resume; more meaningful to recruiters than GitHub stars or city count
- Secondary nav link in Selected work changed from go('notes') to go('about') since Field Notes is v2 scope and About ships in Plan 02-03
- "Things I've grown" heading replaced with "Selected work" for professional consistency

## Deviations from Plan

None - plan executed exactly as written. All 8 targeted replacements applied without touching PROJECTS grid, ProjectDetail, FieldNotes, Contact, or App functions.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Home screen hero is final — Plan 02-02 (projects data) and Plan 02-03 (About screen) can now proceed
- The `go('about')` link in the Selected work section is already wired; Plan 02-03 must implement the About component and add the 'about' branch to App render
- The PROJECTS grid below the hero still shows placeholder Birdsong/Mycelium cards — expected until Plan 02-02 executes

---
*Phase: 02-content-pages*
*Completed: 2026-06-03*
