# Nico Mora — Portfolio

Personal portfolio site for Nicolas Mora, Senior Consultant in AI and Analytics at Deloitte.

**Live site:** https://nimovi.github.io/heartwood/

## Tech stack

- React 18.3.1 via CDN (unpkg)
- Babel Standalone 7.29.0 via CDN — transpiles JSX in-browser
- Lucide icons via CDN
- Google Fonts: Spectral, Hanken Grotesk, JetBrains Mono
- Vanilla CSS with custom properties
- No build step, no npm, no bundler

## Running locally

Open `index.html` in a browser. No install, no dev server needed.

## Deployment

Push to `main` branch — GitHub Pages serves from the repo root automatically. No CI pipeline.

## Project structure

- `src/data.js` — all content (projects, notes, social links)
- `src/screens.jsx` — page/screen components
- `src/components.jsx` — shared UI components
- `src/css/` — design system (colors, typography, layout)
- `assets/` — images, icons, OG card
