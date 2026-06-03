/* Heartwood Portfolio UI Kit — shared components + content data */

const { useState, useEffect } = React;

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
  const links = [['home', 'Work'], ['about', 'About'], ['contact', 'Contact']];
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a className="brand" onClick={() => go('home')}>
          <img src="assets/mark.svg" alt="" />
          <span className="wm">Nico <i>Mora</i></span>
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
        <span className="coord">LAST TENDED — JUN 2026</span>
        <div className="socials">
          {SOCIAL.map(s => (
            <a key={s.label}
               href={s.href}
               aria-label={s.label}
               target={s.href.startsWith('mailto') ? undefined : '_blank'}
               rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}>
              {s.label === 'LinkedIn'
                ? <LinkedInIcon size={18} />
                : <Icon name={s.icon} size={18} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// PROJECTS and NOTES removed — now owned by src/data.js
Object.assign(window, { Icon, refreshIcons, MonoLabel, Button, Header, WorkCard, Footer });
