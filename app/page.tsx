import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  Mail,
  Sparkles,
  Server,
  Workflow,
} from 'lucide-react'

const showCertificates = true
const showReferences = true
const showWorkflowDemo = true

const services = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Digitalisierung',
    description: 'Digitale Lösungen für Daten, Dokumente und Abläufe entwickeln, damit dein Unternehmen übersichtlicher und effizienter arbeitet.',
    items: ['Digitale Potenzialanalysen', 'Strukturen für Daten & Dokumente', 'Individuelle Systeme statt Insellösungen'],
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Prozessautomatisierung',
    description: 'Wiederkehrende Aufgaben automatisieren und bestehende Systeme verbinden, damit dein Team Zeit spart und weniger manuell arbeiten muss.',
    items: ['Automatisierte Geschäftsprozesse', 'Intelligente Postfachverarbeitung', 'API und Tool Integrationen'],
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'KI Integration',
    description: 'Künstliche Intelligenz sinnvoll in deine Arbeitsabläufe integrieren, um Informationen schneller zu verarbeiten und bessere Entscheidungen zu ermöglichen.',
    items: ['KI Assistenten und Chatbots', 'Dokumenten und Datenauswertung', 'Datenschutzbewusste KI Lösungen'],
  },
]

function OptionalSections() {
  return (
    <>
      {showCertificates && (
        <section className="proof-section container" aria-labelledby="zertifikate-heading">
          <div className="section-heading"><div><p className="section-kicker">Qualifikation</p><h2 id="zertifikate-heading">Zertifikate, die <span className="gradient-text">Vertrauen schaffen.</span></h2></div><p className="section-intro">Hier kannst du deine relevanten Zertifikate sichtbar machen und deine fachliche Grundlage zeigen.</p></div>
          <div className="media-slots certificates-slots"><div className="media-slot"><span>+ Zertifikat hinzufügen</span><small>Bild in public einfügen und diesen Platzhalter ersetzen</small></div><div className="media-slot"><span>+ Zertifikat hinzufügen</span><small>Bild in public einfügen und diesen Platzhalter ersetzen</small></div><div className="media-slot"><span>+ Zertifikat hinzufügen</span><small>Bild in public einfügen und diesen Platzhalter ersetzen</small></div></div>
        </section>
      )}
      {showReferences && (
        <section className="references-section" aria-labelledby="referenzen-heading">
          <div className="container"><div className="section-heading"><div><p className="section-kicker">Referenzen</p><h2 id="referenzen-heading">Ergebnisse, die <span className="gradient-text">für sich sprechen.</span></h2></div><p className="section-intro">Logos oder Bilder deiner Referenzkunden kannst du hier unkompliziert ergänzen.</p></div><div className="reference-slots"><div className="reference-slot">Logo oder Bild</div><div className="reference-slot">Logo oder Bild</div><div className="reference-slot">Logo oder Bild</div><div className="reference-slot">Logo oder Bild</div></div></div>
        </section>
      )}
      {showWorkflowDemo && (
        <section className="demo-section container" aria-labelledby="demo-heading">
          <div className="section-heading"><div><p className="section-kicker">Live-Demonstration</p><h2 id="demo-heading">Automatisierung <span className="gradient-text">in Aktion.</span></h2></div><p className="section-intro">Zeige hier einen echten Arbeitsablauf als interaktive Anwendung oder Video.</p></div>
          <div className="demo-frame"><div className="demo-placeholder"><Workflow size={28} strokeWidth={1.2} /><strong>Demo hier einfügen</strong><span>Ersetze diesen Bereich durch einen iframe oder ein Video.</span></div></div>
        </section>
      )}
    </>
  )
}

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
          <h1>Digitale Prozesse, die <span className="gradient-text">Zeit sparen.</span></h1>
          <p className="hero-lead">Ich bin Miron, Freelancer für Digitalisierung aus Leipzig. Ich entwickle klare digitale Abläufe, die Unternehmen Zeit sparen, manuelle Arbeit reduzieren und Raum für das Wesentliche schaffen.</p>
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
          <span className="visual-label label-one">klar</span><span className="visual-label label-two">wirksam</span>
        </div>
        <div className="scroll-hint"><span>Mehr erfahren</span><div className="scroll-line" /></div>
      </section>

      <section id="leistungen" className="section container">
        <div className="section-heading"><div><p className="section-kicker">Was ich mache</p><h2>Digitale Lösungen, die <span className="gradient-text">Zeit sparen.</span></h2></div><p className="section-intro">Mit einer klaren Prozessanalyse erkenne ich, wo Abläufe Zeit kosten und Potenzial verschenken. Daraus entstehen digitale Lösungen, die wiederkehrende Arbeit abnehmen und Raum für wichtigere Aufgaben schaffen.</p></div>
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

      <OptionalSections />

      <section className="about-section">
        <div className="about container">
          <div className="portrait-wrap"><img src="/placeholder-user.jpg" alt="Porträt-Platzhalter für Miron" /><div className="portrait-caption"><span className="status-dot" /> aus Leipzig, Deutschland</div></div>
          <div className="about-copy"><p className="section-kicker">Über mich</p><h2>Technisches Wissen mit Blick <span className="gradient-text">für das Ganze.</span></h2><p>Hi, ich bin Miron. Von Leipzig aus unterstütze ich Unternehmen dabei, digitale Prozesse sinnvoll zu vereinfachen und effizienter zu arbeiten.</p><p>Durch meine Erfahrung im Online-Marketing und in der Fotografie bringe ich nicht nur tiefes technisches Verständnis mit, sondern achte auch darauf, dass Automatisierungen messbar entlasten, auf deine Unternehmensziele einzahlen und sich für den Endnutzer stimmig anfühlen.</p><a href="#kontakt" className="text-link">Mehr über meine Arbeitsweise <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section id="kontakt" className="cta-section container"><div className="cta-glow" aria-hidden="true" /><p className="section-kicker">Nächster Schritt</p><h2>Lass uns über deine<br /><span className="gradient-text">Prozesse sprechen.</span></h2><p>Welche Aufgaben kosten dein Unternehmen heute unnötig Zeit? Lass uns gemeinsam herausfinden, wo intelligente Automatisierung spürbar entlasten kann.</p><div className="cta-actions"><a className="button button-primary" href="mailto:hello@miron.app"><Mail size={17} /> E-Mail schreiben</a><a className="button button-outline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn öffnen <ArrowUpRight size={17} /></a></div></section>

      <footer className="footer container"><a href="#top" className="wordmark">miron<span>.app</span></a><span>© 2026 miron.app, Leipzig</span><a href="mailto:hello@miron.app">hello@miron.app</a></footer>
    </main>
  )
}

  
