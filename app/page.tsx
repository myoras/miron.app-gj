import {
  ArrowUpRight,
  Check,
  ChevronDown,
  LineChart,
  Mail,
  Sparkles,
  Server,
  Workflow,
} from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Sparkles,
    title: 'KI-Integration',
    description: 'Künstliche Intelligenz dort, wo sie echten Mehrwert schafft – nicht als Gimmick.',
    items: ['Chatbots & KI-Assistenten', 'Dokumenten- & Datenauswertung', 'Lokale LLMs & Datenschutz'],
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Prozess-Automatisierung',
    description: 'Wiederkehrende Aufgaben automatisieren und deine Tools nahtlos miteinander verbinden.',
    items: ['Komplexe n8n-Workflows', 'Intelligente Postfach-Automatisierung', 'API- & Tool-Integrationen'],
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Marketing-Tech & Hosting',
    description: 'Performante Infrastruktur trifft auf datengetriebene Marketing-Prozesse.',
    items: ['Lead-Routing & CRM-Sync', 'Tracking & Data Pipelines', 'High-Speed Hosting (Coolify/VPS)'],
  },
]

export default function Page() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Hauptnavigation">
          <a href="#top" className="wordmark" aria-label="miron.app Startseite">miron<span>.app</span></a>
          <a href="#kontakt" className="nav-contact">Kontakt <ArrowUpRight size={15} strokeWidth={1.8} /></a>
        </nav>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Digitalisierung · Automatisierung · KI</div>
          <h1>Smarte Automatisierung <span className="gradient-text">& KI</span><br />für dein Business.</h1>
          <p className="hero-lead">Ich bin Miron – Freelancer für Digitalisierung aus Leipzig. Ich verbinde modernes Tech-Hosting mit intelligenten Workflows, um deine Geschäftsprozesse effizienter zu machen.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@miron.app">Termin vereinbaren <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#leistungen">Meine Leistungen <ChevronDown size={16} /></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-main"><Sparkles size={46} strokeWidth={1.1} /></div>
          <div className="orb orb-small orb-small-one"><Sparkles size={20} /></div>
          <div className="orb orb-small orb-small-two"><Server size={18} /></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="visual-label label-one">intelligent</span><span className="visual-label label-two">connected</span>
        </div>
        <div className="scroll-hint"><span>Scroll to explore</span><div className="scroll-line" /></div>
      </section>

      <section id="leistungen" className="section container">
        <div className="section-heading"><div><p className="section-kicker">Was ich mache</p><h2>Technologie, die <span className="gradient-text">weiterdenkt.</span></h2></div><p className="section-intro">Von der ersten Idee bis zum laufenden System – ich entwickle Lösungen, die Arbeit abnehmen und Raum für Wachstum schaffen.</p></div>
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, description, items }) => (
            <article className="service-card" key={title}>
              <div className="card-top"><span className="card-number">{number}</span><div className="icon-box"><Icon size={21} strokeWidth={1.5} /></div></div>
              <h3>{title}</h3><p>{description}</p>
              <ul>{items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about container">
          <div className="portrait-wrap"><img src="/placeholder-user.jpg" alt="Porträt-Platzhalter für Miron" /><div className="portrait-caption"><span className="status-dot" /> based in Leipzig, DE</div></div>
          <div className="about-copy"><p className="section-kicker">Über mich</p><h2>Tech-Expertise mit Auge <span className="gradient-text">für das Ganze.</span></h2><p>Hi, ich bin Miron. Aus meinem Standort in Leipzig heraus unterstütze ich Startups und Unternehmen bei der digitalen Transformation.</p><p>Durch meinen Background im Online-Marketing und der Fotografie bringe ich nicht nur tiefes technisches Verständnis mit, sondern achte auch darauf, dass Automatisierungen auf deine Unternehmensziele einzahlen und sich für den Endnutzer perfekt anfühlen.</p><a href="#kontakt" className="text-link">Mehr über meine Arbeitsweise <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section id="kontakt" className="cta-section container"><div className="cta-glow" aria-hidden="true" /><p className="section-kicker">Nächster Schritt</p><h2>Lass uns über deine<br /><span className="gradient-text">Prozesse sprechen.</span></h2><p>Ob beim Startup-Event oder per Videocall – ich freue mich auf den Austausch.</p><div className="cta-actions"><a className="button button-primary" href="mailto:hello@miron.app"><Mail size={17} /> E-Mail schreiben</a><a className="button button-outline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn Profil <ArrowUpRight size={17} /></a></div></section>

      <footer className="footer container"><a href="#top" className="wordmark">miron<span>.app</span></a><span>© 2026 miron.app — Leipzig</span><a href="mailto:hello@miron.app">hello@miron.app</a></footer>
    </main>
  )
}

  
