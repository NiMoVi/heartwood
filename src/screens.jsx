/* Heartwood Portfolio UI Kit - screens + app shell */

function Home({ go, openProject }) {
  return (
    <React.Fragment>
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <div className="rise d1"><MonoLabel>Senior Consultant · AI & Analytics · Deloitte</MonoLabel></div>
            <h1 className="rise d2">I build data systems that <i>drive decisions</i>.</h1>
            <p className="lede rise d3">AI engineer and data architect with five years at Deloitte building production data systems for federal and state government across defense, finance, health, and lottery. My work covers cloud infrastructure, agentic AI, and analytics.</p>
            <div className="hero-cta rise d4">
              <Button variant="primary" onClick={() => { const el = document.getElementById('work'); if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' }); }}>View my work <Icon name="arrow-down" size={17} /></Button>
              <Button variant="ghost" onClick={() => go('contact')}>Get in touch</Button>
            </div>
            <div className="hero-stats rise d5">
              <div className="stat"><div className="n">6</div><div className="l">Projects</div></div>
              <div className="stat"><div className="n">5</div><div className="l">Certifications</div></div>
              <div className="stat"><div className="n">3</div><div className="l">Languages</div></div>
            </div>
          </div>
          <div className="portrait rise d3">
            <img src="assets/portrait.jpg" alt="Nico Mora" className="portrait-img" />
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
  const [demoOpen, setDemoOpen] = useState(false);
  const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
  return (
    <article className="detail wrap">
      <a className="back" onClick={() => go('home')}><Icon name="arrow-left" size={14} /> ALL WORK</a>
      <div className="rise d1"><MonoLabel>{p.n} / {p.year} · {p.kind}</MonoLabel></div>
      <h1 className="rise d2">{p.title}</h1>
      <p className="lede rise d2">{p.lede}</p>
      <div className={`detail-hero rise d3${p.heroAccent ? ' amber' : ''}`}>
        {p.cover
          ? (
            <div className="detail-hero-cover">
              <img src={p.cover} alt={p.title} className="detail-cover-img" />
              {p.demo && (
                <Button variant="primary" onClick={() => setDemoOpen(true)}>
                  View Demo
                </Button>
              )}
            </div>
          )
          : p.demo
            ? (
              <div className="detail-hero-cover">
                <Button variant="primary" onClick={() => setDemoOpen(true)}>
                  View Demo
                </Button>
              </div>
            )
            : <span className="ph-tag">◦ COVER: drop image</span>
        }
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
      {demoOpen && (
        <div className="demo-modal" onClick={() => setDemoOpen(false)}>
          <div className="demo-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="demo-modal-close" onClick={() => setDemoOpen(false)}>✕</button>
            <iframe
              src={p.demo}
              title={`${p.title} demo`}
              width="100%"
              height="100%"
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin"
              style={{ display: 'block', border: 'none' }}
            />
          </div>
        </div>
      )}
    </article>
  );
}

function Contact() {
  return (
    <section className="contact wrap">
      <div className="rise d1" style={{ display: 'flex', justifyContent: 'center' }}>
        <MonoLabel>Get in touch</MonoLabel>
      </div>
      <h2 className="rise d2">Open to <i>conversation</i>.</h2>
      <p className="rise d3">Based in Alexandria, VA. If you're working on something in AI, data engineering, or analytics, I'm happy to talk. Or if you just want to connect, reach out.</p>
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
          <p>I'm a Senior Consultant in AI &amp; Analytics at Deloitte. Five years in, and most of what I've built has been for federal and state government clients: data pipelines, agentic AI workflows, BI platforms. The kind of work where the system still has to run after you leave.</p>
          <p>Before Deloitte, I spent six years as a vehicle mechanic in the U.S. Army Reserve. That background stays with you: get the plan right, execute under pressure, and own it when something breaks. I studied International Business at Florida International University, graduated Cum Laude, and got into data engineering right around the time AI started showing up in production at scale.</p>
          <p>I code every day. Python, SQL, whatever the job needs. I've shipped Synapse pipelines, built agentic document review systems with Claude, and led BI modernization programs for agencies serving millions of people. Consulting and building happen in the same week for me. That's intentional.</p>
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
{view === 'contact' && <Contact />}
      {view === 'about'   && <About go={go} />}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
