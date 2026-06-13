---
phase: quick
plan: 260613-mmq
subsystem: content
tags: [copy, voice, content-rewrite]
dependency_graph:
  requires: []
  provides: [hero-lede, about-bio, contact-paragraph, project-copy]
  affects: [src/screens.jsx, src/data.js]
tech_stack:
  added: []
  patterns: [copy-only edits, no structural changes]
key_files:
  modified:
    - src/screens.jsx
    - src/data.js
decisions:
  - H1 tag left unchanged per plan constraint
  - Em dash in file comment (screens.jsx line 1) removed to satisfy zero-em-dash policy
metrics:
  duration: ~15 minutes
  completed: 2026-06-13
  tasks_completed: 2
  files_modified: 2
---

# Quick Task 260613-mmq: Rewrite All Website Copy to Be Professional

**One-liner:** Rewrote all public-facing copy in screens.jsx and data.js to match approved casual-professional voice: direct, human, varied rhythm, zero em dashes.

## Tasks Completed

| # | Task | Commit |
|---|------|--------|
| 1 | Rewrite screens.jsx copy (hero lede, about bio, contact) | aae8724 |
| 2 | Rewrite data.js project copy (all 6 projects) | 9568bb4 |

## What Changed

### src/screens.jsx

- **Hero lede:** Replaced "at the intersection of cloud infrastructure, agentic AI, and analytics: shipping production systems, not prototypes" with plain direct voice; adds "Been doing it for five years at Deloitte" as grounding sentence.
- **About bio (3 paragraphs):** Replaced stiff parallelism-heavy version. P1: five-years-in framing; P2: Army Reserve background with casual rhythm; P3: code-every-day assertion, ends on "I stay technical on purpose."
- **Contact paragraph:** Replaced auto-reply-style text with "Based in Alexandria, VA. If you're working on something in AI, data engineering, or analytics, I'm happy to talk. Or if you just want to connect, reach out."
- **File comment:** Replaced em dash in top comment with hyphen (zero-em-dash policy).

### src/data.js

All six projects had `lede`, `body[]`, and `pull` fields rewritten:

- **PERS-01 (Networking App):** Problem-first lede ("poor job of actually connecting people"), action-first body, end-to-end build arc.
- **PERS-02 (SQL Tools):** "hitting the same wall" framing, two-module architecture reasoning made explicit.
- **CONS-01 (USSGL):** Annual rules-reset as the core problem, modularity as the structural answer.
- **CONS-02 (Federal Financial):** Disconnected-function framing, replicable platform as the result.
- **CONS-03 (Lottery Migration):** Sequencing-first approach, dependency-graph rationale explained.
- **CONS-04 (Demographics):** "The data existed. A way to trust it didn't." trust framing; golden-record build narrative.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Em dash in screens.jsx file comment**
- **Found during:** Task 1 verification
- **Issue:** The file header comment `/* Heartwood Portfolio UI Kit — screens + app shell */` contained an em dash, which caused the zero-em-dash verification check to fail.
- **Fix:** Replaced em dash with hyphen: `/* Heartwood Portfolio UI Kit - screens + app shell */`
- **Files modified:** src/screens.jsx
- **Commit:** aae8724 (included in Task 1 commit)

### Plan Verification Script Note

The automated verify for Task 1 in the plan checked for presence of `'at the intersection'` and `'not just dashboards'` as if they were sentinel phrases to confirm. Those phrases appear in the H1 (`not just dashboards`) and were meant to be OLD copy markers. The plan's verify script has an internal inconsistency (it treats removed-content as expected-present). I ran a corrected verification instead that confirmed:
- Old phrases removed from prose (lede, bio, contact)
- New sentinel phrases present (`Been doing it for five years at Deloitte`, `stay technical on purpose`, `Based in Alexandria`)
- Zero em dashes in file

## Known Stubs

None. All copy is fully wired.

## Self-Check: PASSED

- src/screens.jsx exists and verified: no em dashes, approved copy present
- src/data.js exists and verified: all 6 pull quotes present, no em dashes
- Commits aae8724 and 9568bb4 exist in git log
