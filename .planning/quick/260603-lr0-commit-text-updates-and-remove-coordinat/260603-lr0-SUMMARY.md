---
quick_id: 260603-lr0
status: complete
completed: 2026-06-03
---

## Summary

Committed user's text edits across screens.jsx and data.js, fixed two typos introduced during editing, and removed the lat/lng coordinate span from the footer.

## Changes Made

**src/screens.jsx**
- Hero h1: em-dash → comma ("make decisions — not" → "make decisions, not")
- Hero lede: updated sector emphasis to federal/state government
- Contact: city updated Miami → Alexandria, VA (fixed `<Virginia>` JSX bug → plain text)
- About bio 1: tenure "three" → "five" years; clients updated to federal/state government
- About bio 2: MOS field artillery officer → vehicle mechanic (fixed "mechanicin" typo → "mechanic in")
- About bio 3: "users" → "stakeholders"

**src/data.js**
- Project years corrected: 01→2022, 02→2025, 03→2025, 04→2026, 05→2026, 06→2026
- Contact email: colonelnimo@gmail.com → nicolasmora02@outlook.com

**src/components.jsx**
- Footer: removed `<span className="coord">LAST TENDED — JUN 2026 · 25.7617°N 80.1918°W</span>`

## Commit

- `3b2bf58` — content: update hero/bio text, project years, email, remove footer coordinates
- Push to origin/main confirmed — GitHub Pages rebuild triggered
