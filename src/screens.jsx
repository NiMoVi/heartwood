/* Heartwood Portfolio UI Kit — screens + app shell */

function Home({ go, openProject }) {
  return (
    <React.Fragment>
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <div className="rise d1"><MonoLabel>Creative technologist · est. 2019</MonoLabel></div>
            <h1 className="rise d2">I grow software in the <i>understory</i> — quiet tools that take root and last.</h1>
            <p className="lede rise d3">Hardware, machine learning, and the occasional light sculpture. I build things that notice their surroundings and age well.</p>
            <div className="hero-cta rise d4">
              <Button variant="primary" onClick={() => { const el = document.getElementById('work'); if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' }); }}>Walk the grove <Icon name="arrow-down" size={17} /></Button>
              <Button variant="ghost" onClick={() => go('contact')}>Let's plant something</Button>
            </div>
            <div className="hero-stats rise d5">
              <div className="stat"><div className="n">07</div><div className="l">Projects</div></div>
              <div className="stat"><div className="n">2.3k</div><div className="l">GitHub stars</div></div>
              <div className="stat"><div className="n">12</div><div className="l">Cities listening</div></div>
            </div>
          </div>
          <div className="portrait rise d3">
            <span className="ph-tag">◦ PORTRAIT — drop image</span>
          </div>
        </div>
      </section>

      <section className="section wrap" id="work">
        <div className="sec-head">
          <div>
            <MonoLabel>Selected work</MonoLabel>
            <h2>Things I've grown</h2>
          </div>
          <a className="link" onClick={() => go('notes')}>Read the field notes <Icon name="arrow-right" size={15} /></a>
        </div>
        <div className="work-grid">
          {PROJECTS.map((p, i) => (
            <WorkCard key={p.id} p={p} delay={`d${(i % 3) + 1}`} onClick={() => openProject(p)} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

function ProjectDetail({ p, go, openProject }) {
  const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
  return (
    <article className="detail wrap">
      <a className="back" onClick={() => go('home')}><Icon name="arrow-left" size={14} /> ALL WORK</a>
      <div className="rise d1"><MonoLabel>{p.n} / {p.year} · {p.kind}</MonoLabel></div>
      <h1 className="rise d2">{p.title}</h1>
      <p className="lede rise d2">{p.lede}</p>
      <div className="detail-hero rise d3">
        <span className="ph-tag">◦ COVER — drop image</span>
      </div>
      <div className="detail-cols">
        <dl className="facts rise d1">
          {Object.entries(p.facts).map(([k, v]) => (
            <React.Fragment key={k}><dt>{k}</dt><dd>{v}</dd></React.Fragment>
          ))}
        </dl>
        <div className="prose rise d2">
          {p.body.map((para, i) => (
            <React.Fragment key={i}>
              <p>{para}</p>
              {i === 0 && <p className="pull">{p.pull}</p>}
            </React.Fragment>
          ))}
          <div className="sec-head" style={{ marginTop: 56, marginBottom: 20 }}>
            <div><MonoLabel>Next</MonoLabel></div>
          </div>
          <article className="work-card" style={{ maxWidth: 380 }} onClick={() => openProject(next)}>
            <div className={`wc-thumb ${next.accent ? 'amber' : ''}`} style={{ height: 130 }}></div>
            <div className="wc-body">
              <div className="wc-top"><span className="wc-meta">{next.n} / {next.kind}</span><span className="wc-arr"><Icon name="arrow-up-right" size={18} /></span></div>
              <h3>{next.title}</h3>
            </div>
          </article>
        </div>
      </div>
    </article>
  );
}

function FieldNotes() {
  return (
    <section className="section wrap">
      <div className="sec-head">
        <div>
          <MonoLabel>02 / Field notes</MonoLabel>
          <h2>Writing &amp; observations</h2>
        </div>
      </div>
      <div className="notes-list">
        {NOTES.map((n, i) => (
          <div key={i} className="note-row rise" style={{ animationDelay: `${0.05 + i * 0.07}s` }}>
            <span className="note-date">{n.date}</span>
            <div>
              <h3>{n.title}</h3>
              <p>{n.excerpt}</p>
            </div>
            <span className="note-arr"><Icon name="arrow-right" size={18} /></span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="contact wrap">
      <div className="rise d1" style={{ display: 'flex', justifyContent: 'center' }}><MonoLabel>Get in touch</MonoLabel></div>
      <h2 className="rise d2">Let's plant <i>something</i>.</h2>
      <p className="rise d3">I take on a few collaborations a year — hardware, ML, or anything that needs to feel alive. Tell me what you're growing.</p>
      <div className="rise d4" style={{ maxWidth: 460, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <input className="hw-input" placeholder="you@example.com" />
        <textarea className="hw-input" placeholder="What are you building?" rows={3} style={{ resize: 'vertical' }}></textarea>
        <Button variant="primary" onClick={() => setSent(true)}>
          {sent ? 'Seed planted ✳' : 'Send →'}
        </Button>
      </div>
    </section>
  );
}

function App() {
  const [view, setView] = useState('home');
  const [project, setProject] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    refreshIcons();
    window.scrollTo(0, 0);
    setAnimating(true);
    const t = setTimeout(() => setAnimating(false), 1300);
    return () => clearTimeout(t);
  }, [view, project]);

  const go = (v) => { setProject(null); setView(v); };
  const openProject = (p) => { setProject(p); setView('project'); };

  return (
    <div className={`app${animating ? ' animate-in' : ''}`}>
      <Header view={view} go={go} theme={theme} toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      {view === 'home' && <Home go={go} openProject={openProject} />}
      {view === 'project' && project && <ProjectDetail p={project} go={go} openProject={openProject} />}
      {view === 'notes' && <FieldNotes />}
      {view === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
