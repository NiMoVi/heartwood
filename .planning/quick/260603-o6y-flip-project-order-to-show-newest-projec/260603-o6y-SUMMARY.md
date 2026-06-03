---
id: 260603-o6y
type: quick
date: "2026-06-03"
duration: "< 5 min"
tasks_completed: 1
tasks_total: 1
files_modified:
  - src/data.js
commits:
  - hash: 9d7ca24
    message: "feat(260603-o6y): reverse PROJECTS array to show newest projects first"
---

# Quick Task 260603-o6y: Flip Project Order to Show Newest Projects First

Reversed the PROJECTS array in `src/data.js` and renumbered all `n` fields so the 2026 personal projects lead the grid and the 2022 consulting project closes it.

## What Was Done

**Task 1: Reverse PROJECTS array order and renumber n fields**

Reordered all six entries from oldest-first to newest-first:

| Position | ID | Year | Kind |
|----------|----|------|------|
| 01 (was 06) | professional-networking-app | 2026 | PERSONAL |
| 02 (was 05) | sql-modernization-tools | 2026 | PERSONAL |
| 03 (was 04) | ussgl-compliance-tool | 2026 | CONSULTING |
| 04 (was 03) | federal-financial-power-app | 2025 | CONSULTING |
| 05 (was 02) | state-lottery-cloud-migration | 2025 | CONSULTING |
| 06 (was 01) | state-health-demographics | 2022 | CONSULTING |

Updated section comments to reflect new positions. No content, IDs, body text, tags, or other fields were changed.

## Accent Constraint

The `accent: true` constraint (non-adjacent entries) is satisfied: `ussgl-compliance-tool` is at position 03 and `state-health-demographics` is at position 06.

## Deviations from Plan

None — plan executed exactly as written.

## Self-Check

- [x] `PROJECTS[0].id === 'professional-networking-app'` with `n: '01'`
- [x] `PROJECTS[5].id === 'state-health-demographics'` with `n: '06'`
- [x] Both `accent: true` entries at non-adjacent positions (03 and 06)
- [x] Commit 9d7ca24 exists
