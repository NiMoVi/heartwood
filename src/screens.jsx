/* Heartwood Portfolio UI Kit — screens + app shell */

function Home({ go, openProject }) {
  return (
    <React.Fragment>
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <div className="rise d1"><MonoLabel>Senior Consultant · AI & Analytics · Deloitte</MonoLabel></div>
            <h1 className="rise d2">I build data systems that <i>make decisions</i> — not just dashboards.</h1>
            <p className="lede rise d3">AI engineer and data architect with experience across federal health, retail, and financial services. I work at the intersection of cloud infrastructure, agentic AI, and analytics — shipping production systems, not prototypes.</p>
            <div className="hero-cta rise d4">
              <Button variant="primary" onClick={() => { const el = document.getElementById('work'); if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' }); }}>View my work <Icon name="arrow-down" size={17} /></Button>
              <Button variant="ghost" onClick={() => go('contact')}>Get in touch</Button>
            </div>
            <div className="hero-stats rise d5">
              <div className="stat"><div className="n">4</div><div className="l">Projects</div></div>
              <div className="stat"><div className="n">5</div><div className="l">Certifications</div></div>
              <div className="stat"><div className="n">3</div><div className="l">Languages</div></div>
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
            <h2>Selected work</h2>
          </div>
          <a className="link" onClick={() => go('about')}>About Nico <Icon name="arrow-right" size={15} /></a>
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
  return (
    <section className="contact wrap">
      <div className="rise d1" style={{ display: 'flex', justifyContent: 'center' }}>
        <MonoLabel>Get in touch</MonoLabel>
      </div>
      <h2 className="rise d2">Open to <i>conversation</i>.</h2>
      <p className="rise d3">I'm a Senior Consultant at Deloitte based in Miami. If you're working on something in AI, data engineering, or analytics — or you just want to connect — I'd love to hear from you.</p>
      <div className="contact-links rise d4">
        {SOCIAL.map(s => (
          <a key={s.label}
             href={s.href}
             className="contact-link"
             target={s.href.startsWith('mailto') ? undefined : '_blank'}
             rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}>
            {s.label === 'LinkedIn'
              ? <LinkedInIcon size={20} />
              : <Icon name={s.icon} size={20} />}
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function About({ go }) {
  return (
    <React.Fragment>
      <section className="section wrap">
        <div className="sec-head">
          <div>
            <div className="rise d1"><MonoLabel>About</MonoLabel></div>
            <h2 className="rise d2">The story so far.</h2>
          </div>
          <a href="assets/resume/Nicolas_Mora_Resume.pdf"
             download="Nicolas_Mora_Resume.pdf"
             className="btn btn-primary rise d2">
            Download Resume <Icon name="download" size={17} />
          </a>
        </div>
        <div className="about-bio rise d3">
          <p>I'm a Senior Consultant in AI &amp; Analytics at Deloitte, where I've spent the last three years building the data systems that actually run large enterprises — not the slides that describe them. My work spans data pipeline architecture, agentic AI workflows, and BI platforms deployed across federal health, financial services, and retail clients.</p>
          <p>Before Deloitte, I served as a Field Artillery officer in the U.S. Army Reserve from 2013 to 2019. That background — planning under uncertainty, leading technical teams, executing against hard deadlines — shapes how I approach engineering work. I studied International Business at Florida International University, graduating Cum Laude, and then moved into data engineering as AI started becoming a real part of enterprise infrastructure.</p>
          <p>What makes my work distinct is that I build and I consult. I write Python and SQL every day. I've shipped production Synapse pipelines, designed agentic document review systems using Claude, and led BI modernization programs for organizations with millions of users. I'm not a generalist who knows a little about everything — I'm a data and AI specialist who understands the full stack from warehouse to dashboard to autonomous agent.</p>
          <div className="about-langs">
            <MonoLabel line={false}>Languages</MonoLabel>
            <span className="chip">English</span>
            <span className="chip">Spanish</span>
            <span className="chip">Portuguese</span>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="sec-head">
          <div>
            <div className="rise d1"><MonoLabel>Certifications</MonoLabel></div>
            <h2 className="rise d2">Credentials</h2>
          </div>
        </div>
        <div className="cert-grid rise d3">
          {CERTS.map(c => (
            <div key={c.name} className="cert-card">
              <span className="cert-name">{c.name}</span>
              <span className="cert-meta">{c.issuer} · {c.year}</span>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
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
      {view === 'about'   && <About go={go} />}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
