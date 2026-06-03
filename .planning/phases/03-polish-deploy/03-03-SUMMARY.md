---
phase: 03-polish-deploy
plan: 03
subsystem: seo
tags: [og-tags, seo, social-preview, linkedin, twitter-card, favicon]
status: partial

# Dependency graph
requires:
  - 03-01 (confirmed live URL: https://nimovi.github.io/heartwood/)
provides:
  - "OG meta tags in index.html — LinkedIn, Slack, Discord unfurls wired"
  - "SVG favicon in index.html head"
  - "Title updated to Nico Mora — AI & Analytics"
affects:
  - social sharing previews on LinkedIn, Slack, Discord, Facebook, X/Twitter

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "OG tags with absolute https:// URLs required on GitHub Pages project subpaths (root-relative /assets/ resolves to wrong host)"

key-files:
  created: []
  modified:
    - "index.html — title, meta description, 8 OG/Twitter meta tags, SVG favicon"

key-decisions:
  - "Base URL confirmed as https://nimovi.github.io/heartwood/ (from 03-01-SUMMARY key-decisions)"
  - "All og:image and og:url use absolute HTTPS URLs — not root-relative paths"
  - "SVG favicon uses existing assets/mark.svg (no new file needed)"

patterns-established:
  - "OG meta block order: description, og:type, og:title, og:description, og:url, og:image, og:image:width, og:image:height, twitter:card, twitter:image"

requirements-completed:
  - DEPLOY-03 (partial — pending OG image and LinkedIn verification)

# Metrics
duration: 10min
completed: 2026-06-03
---

# Phase 03 Plan 03: OG Meta Tags and Social Preview — Summary

**PARTIAL: Task 2 complete (index.html updated). Task 1 (OG image) and Task 3 (LinkedIn verification) pending human action.**

## Status: PARTIAL — Awaiting Human Action

| Task | Name | Status | Commit |
|------|------|--------|--------|
| 1 | Create assets/og-card.png (1200x630) | PENDING (human must create) | — |
| 2 | Update index.html — title + OG meta tags | COMPLETE | ed1713f |
| 3 | Verify OG preview on LinkedIn Post Inspector | PENDING (after Task 1 + deploy) | — |

## Accomplishments (Task 2)

- Updated `<title>` from "Nico Mora — Portfolio" to "Nico Mora — AI &amp; Analytics"
- Added `<meta name="description">` with full role/skill summary
- Added 7 Open Graph tags: `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:image:width`, `og:image:height`
- Added 2 Twitter Card tags: `twitter:card` (summary_large_image), `twitter:image`
- Added SVG favicon: `<link rel="icon" type="image/svg+xml" href="assets/mark.svg">`
- All `og:image` and `og:url` values use full absolute `https://nimovi.github.io/heartwood/` base URL

## Task Commits

1. **Task 1: Create assets/og-card.png** — PENDING
2. **Task 2: Update index.html title and OG meta tags** — `ed1713f` (feat)
3. **Task 3: Verify LinkedIn Post Inspector** — PENDING

## Files Modified

- `index.html` — 16 lines added: title change + 10 meta tags + SVG favicon

## Deviations from Plan

**Execution order deviation:** Tasks were executed out-of-order per explicit orchestrator instructions. Task 2 (auto) was executed before Task 1 (human-action checkpoint) because the meta tags can be wired independently of the image existing. The og:image URL references `assets/og-card.png` at the correct path — once the human drops the PNG in and pushes, LinkedIn will fetch it correctly.

## Known Stubs

- `https://nimovi.github.io/heartwood/assets/og-card.png` — referenced in og:image and twitter:image but `assets/og-card.png` does not yet exist in the repo. LinkedIn/Slack crawlers will see a broken image until Task 1 is complete.

## Human Action Required (Task 1)

Create `assets/og-card.png` at 1200x630 pixels. Two options:

**Option A — Browser screenshot (recommended, matches site aesthetic):**

1. Create a temporary file `og-card-preview.html` in the repo root with this content:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;1,400&family=JetBrains+Mono:wght@500&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #0E1812;
    font-family: 'Spectral', Georgia, serif;
    display: flex; align-items: center; justify-content: center;
  }
  body::before {
    content: "";
    position: fixed; inset: 0;
    background: radial-gradient(120% 90% at 50% -20%, rgba(139,224,106,0.12), transparent 55%);
  }
  .card {
    position: relative; z-index: 1;
    padding: 80px 90px;
    width: 100%;
  }
  .eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px; font-weight: 500; letter-spacing: 0.18em;
    text-transform: uppercase; color: #8BE06A;
    display: flex; align-items: center; gap: 12px; margin-bottom: 28px;
  }
  .eyebrow::before {
    content: ""; display: block; width: 32px; height: 1px; background: #8BE06A; opacity: 0.5;
  }
  h1 {
    font-size: 88px; font-weight: 400; line-height: 1.0;
    letter-spacing: -0.025em; color: #F0EDE8;
  }
  h1 i { font-style: italic; color: #8BE06A; }
  .sub {
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px; color: rgba(240,237,232,0.55);
    letter-spacing: 0.04em; margin-top: 32px;
  }
  .url {
    position: absolute; bottom: 48px; right: 90px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px; color: rgba(240,237,232,0.30); letter-spacing: 0.06em;
  }
</style>
</head>
<body>
<div class="card">
  <div class="eyebrow">Portfolio</div>
  <h1>Nico <i>Mora</i></h1>
  <div class="sub">Senior Consultant &middot; AI &amp; Analytics &middot; Deloitte</div>
  <div class="url">nimovi.github.io</div>
</div>
</body>
</html>
```

2. Open `og-card-preview.html` in Chrome
3. Open DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)
4. Set custom dimensions: exactly **1200 x 630**
5. In DevTools: three-dot menu → "Capture screenshot" (NOT "Capture full size screenshot")
6. Save the downloaded PNG as `assets/og-card.png`
7. Delete `og-card-preview.html` from the repo root after capturing

**Option B — Free web tool:**
- Visit https://og-playground.vercel.app/ or https://ogimagemaker.com/
- Set canvas to 1200x630
- Dark background (#0E1812), name "Nico Mora", subtitle "Senior Consultant · AI & Analytics · Deloitte"
- Download as PNG, save to `assets/og-card.png`

**Minimum requirements:**
- Dimensions: 1200x630 pixels (LinkedIn crops to 1.91:1)
- Format: PNG
- File size: Under 5MB
- Must show: Nico's name and title/role

**After creating the image:**

```bash
git add assets/og-card.png
git commit -m "feat(03-03): add OG social preview card image (1200x630)"
git push origin main
```

Wait 5-10 minutes for GitHub Pages to deploy, then proceed to Task 3.

## Task 3 (After Image + Deploy): Verify LinkedIn Post Inspector

1. Visit https://www.linkedin.com/post-inspector/ (requires LinkedIn login)
2. Enter: `https://nimovi.github.io/heartwood/`
3. Click "Inspect"
4. Expected: preview card shows og-card.png image, title "Nico Mora — AI & Analytics", and description text
5. If stale cached data, click "Inspect" again to force re-scrape

Also check:
- Slack: paste URL in a message, wait 3 seconds for unfurl preview
- Browser tab on live URL should read "Nico Mora — AI & Analytics"
- View-source: confirm og:image is `https://nimovi.github.io/heartwood/assets/og-card.png` (absolute, not root-relative)

**Resume signal:** Type `og-ok` when LinkedIn Post Inspector shows the preview card with image, title, and description.

---
*Phase: 03-polish-deploy*
*Status: Partial — Task 1 and Task 3 pending human action*
*Completed: 2026-06-03 (partial)*
