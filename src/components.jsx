/* Heartwood Portfolio UI Kit — shared components + content data */

const { useState, useEffect } = React;

/* ---- data ---- */
const PROJECTS = [
  { id: 'birdsong', n: '01', year: '2024', kind: 'EDGE ML', title: 'Birdsong',
    blurb: 'A pocket field recorder that identifies urban birds on-device — no cloud, no latency.',
    tags: ['Rust', 'Edge ML', 'Audio'], accent: false,
    lede: 'A weatherproof recorder the size of an acorn that listens to a city block and names every bird it hears — entirely on a $4 microcontroller.',
    facts: { Role: 'Hardware + ML', Year: '2024', Stack: 'Rust · TinyML · I²S', Status: 'Growing' },
    body: [
      'The premise was stubborn: run a 40-species classifier on a coin cell for a year. Cloud inference was off the table — too power-hungry, too slow, and dead the moment the network drops.',
      'I trained a small convolutional model on mel-spectrograms, then quantized it to fit in 180KB of flash. The recorder wakes on sound, classifies in 90ms, and logs a timestamped sighting to a local SD card.',
      'It now lives on twelve balconies across the city, quietly building a dawn-chorus map that no single observer could.'
    ],
    pull: 'The forest was always computing. We just hadn\'t learned to read its output.'
  },
  { id: 'mycelium', n: '02', year: '2023', kind: 'TOOLING', title: 'Mycelium',
    blurb: 'A build graph that spreads work across idle machines the way roots share nutrients.',
    tags: ['Go', 'Distributed', 'CLI'], accent: true,
    lede: 'A distributed build cache and scheduler that treats your team\'s laptops like a single forest floor — work flows to whoever has spare capacity.',
    facts: { Role: 'Systems design', Year: '2023', Stack: 'Go · gRPC · BLAKE3', Status: 'Open source' },
    body: [
      'Most build farms are top-down: a central queue hands tasks to dumb workers. Forests don\'t work that way. Mycelial networks route resources peer-to-peer, toward need.',
      'Mycelium hashes every build action and gossips results across the local network. If a teammate already compiled that target, you get their artifact in milliseconds.',
      'On a ten-person team it cut median CI time by 61% — mostly by never doing the same work twice.'
    ],
    pull: 'Don\'t schedule the work. Let it find the resources.'
  },
  { id: 'understory', n: '03', year: '2022', kind: 'INSTALLATION', title: 'Understory',
    blurb: 'A responsive light sculpture for a museum atrium that breathes with foot traffic.',
    tags: ['C++', 'LEDs', 'Sensors'], accent: false,
    lede: 'Four hundred suspended fronds of warm LED that bloom and dim in response to how people move through the space beneath them.',
    facts: { Role: 'Creative tech', Year: '2022', Stack: 'C++ · DMX · LiDAR', Status: 'Exhibited' },
    body: [
      'The brief was a single word from the curator: alive. Not animated — alive. Something that felt like it noticed you.',
      'Ceiling LiDAR feeds a flocking model; each frond decides its own brightness from its neighbors and the people below, so the whole canopy ripples without any central choreography.',
      'Visitors slowed down. The average dwell time under the piece was four minutes — long, for a hallway.'
    ],
    pull: 'Make the room notice you, and you start to notice the room.'
  },
  { id: 'rootkit', n: '04', year: '2021', kind: 'OPEN SOURCE', title: 'Rootkit',
    blurb: 'A friendly CLI for growing reproducible dev environments from a single seed file.',
    tags: ['Nix', 'CLI', 'DX'], accent: true,
    lede: 'One declarative file describes your whole toolchain; Rootkit grows an identical environment on any machine, every time.',
    facts: { Role: 'Maintainer', Year: '2021', Stack: 'Nix · Bash · Rust', Status: 'Open source' },
    body: [
      'Reproducible environments are a solved problem that nobody enjoys using. Rootkit is a thin, kind layer over Nix that hides the sharp edges.',
      'You write a seed.toml, run rootkit grow, and get the exact same compilers and tools your teammates have — pinned to the commit.',
      'It has 2.3k stars and, more importantly, a Discord where people are nice to each other.'
    ],
    pull: 'A seed should grow the same tree on every soil.'
  },
];

const NOTES = [
  { date: 'MAY 2026', title: 'On building things that outlive their hype', excerpt: 'Why I optimize for durability over novelty, and what a 200-year-old oak taught me about technical debt.' },
  { date: 'MAR 2026', title: 'Tiny models, big forests', excerpt: 'Notes from a year of running machine learning on hardware that costs less than lunch.' },
  { date: 'JAN 2026', title: 'The ergonomics of slowness', excerpt: 'Fast tools make fast decisions. Sometimes the kindest interface is one that makes you wait.' },
  { date: 'NOV 2025', title: 'Reading the rings', excerpt: 'A field guide to understanding a codebase by its history rather than its current shape.' },
];

/* ---- icon helper (Lucide) ---- */
function Icon({ name, size = 20, className = '', stroke = 1.75 }) {
  return <i data-lucide={name} style={{ width: size, height: size, display: 'inline-flex' }}
            className={className} data-sw={stroke}></i>;
}
function refreshIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.75 } });
}

/* ---- primitives ---- */
function MonoLabel({ children, line = true }) {
  return <span className="mono-label">{line && <span className="ln"></span>}{children}</span>;
}

function Button({ variant = 'primary', children, onClick }) {
  return <button className={`btn btn-${variant}`} onClick={onClick}>{children}</button>;
}

/* ---- header ---- */
function Header({ view, go, theme, toggleTheme }) {
  const links = [['home', 'Work'], ['notes', 'Field notes'], ['contact', 'Contact']];
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a className="brand" onClick={() => go('home')}>
          <img src="assets/mark.svg" alt="" />
          <span className="wm">Heart<i>wood</i></span>
        </a>
        <nav className="nav">
          {links.map(([k, label]) => (
            <a key={k} className={view === k || (k === 'home' && view === 'project') ? 'active' : ''}
               onClick={() => go(k)}>{label}</a>
          ))}
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
          </button>
        </nav>
      </div>
    </header>
  );
}

/* ---- work card ---- */
function WorkCard({ p, onClick, delay }) {
  return (
    <article className={`work-card rise ${delay}`} onClick={onClick}>
      <div className={`wc-thumb ${p.accent ? 'amber' : ''}`}></div>
      <div className="wc-body">
        <div className="wc-top">
          <span className="wc-meta">{p.n} / {p.year} · {p.kind}</span>
          <span className="wc-arr"><Icon name="arrow-up-right" size={18} /></span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.blurb}</p>
        <div className="wc-tags">{p.tags.map(t => <span key={t} className="chip">{t}</span>)}</div>
      </div>
    </article>
  );
}

/* ---- LinkedIn (outline, Lucide-matched — Lucide dropped brand icons) ---- */
function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ---- footer ---- */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <span className="coord">LAST TENDED — MAY 2026 · 51.5074°N 0.1278°W</span>
        <div className="socials">
          <a aria-label="GitHub"><Icon name="git-branch" size={18} /></a>
          <a aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
          <a aria-label="Email"><Icon name="mail" size={18} /></a>
          <a aria-label="RSS"><Icon name="rss" size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { PROJECTS, NOTES, Icon, refreshIcons, MonoLabel, Button, Header, WorkCard, Footer });
