import {
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Mail,
  Sparkles,
  Server,
  Workflow,
} from 'lucide-react'

const showWorkflowDemo = true

const services = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Digitalisierung',
    description: 'Digitale Abläufe und Systeme entwickeln, die Informationen besser nutzbar machen und deinem Unternehmen mehr Übersicht und Effizienz geben. Dabei achte ich auf eine datenschutzkonforme Umsetzung.',
    items: ['Digitale Potenzialanalyse', 'Daten und Dokumente strukturieren', 'Individuelle Lösungen statt Insellösungen'],
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Prozessautomatisierung',
    description: 'Wiederkehrende Geschäftsprozesse automatisieren und bestehende Systeme verbinden, damit dein Team Zeit spart und sich auf wichtige Aufgaben konzentriert. Die Lösungen werden datenschutzkonform geplant und umgesetzt.',
    items: ['Automatisierte Geschäftsprozesse', 'Intelligente E-Mail-Verarbeitung', 'Schnittstellen und Systemverbindungen'],
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'KI-Integration',
    description: 'Künstliche Intelligenz sicher und datenschutzkonform in bestehende Arbeitsabläufe integrieren, damit Informationen schneller verarbeitet und Entscheidungen fundierter getroffen werden.',
    items: ['KI-Assistenten für den Arbeitsalltag', 'Auswertung von Dokumenten und Daten', 'Datenschutzbewusste KI-Lösungen'],
  },
]

function OptionalSections() {
  return (
    <>
      <section className="use-cases-section container" aria-labelledby="use-cases-heading">
        <div className="section-heading"><div><p className="section-kicker">Konkrete Anwendungsfälle</p><h2 id="use-cases-heading">Weniger Aufwand für <span className="gradient-text">mehr Wirkung.</span></h2></div><p className="section-intro">Praxisnahe Digitalisierung und Automatisierung dort, wo sie im Unternehmen sofort Zeit spart und Abläufe zuverlässig verbessert.</p></div>
        <div className="use-cases-grid">
          <article className="use-case"><span>01</span><h3>Intelligente E-Mail-Sortierung</h3><p><strong>Problem:</strong> Überlaufendes Postfach, lange Antwortzeiten.</p><p><strong>Lösung:</strong> KI kategorisiert Mails, priorisiert sie und erstellt direkt passende Antwortentwürfe.</p></article>
          <article className="use-case"><span>02</span><h3>Automatisiertes Lead-Routing</h3><p><strong>Problem:</strong> Manuelle CRM-Pflege und verzögerter Vertriebskontakt.</p><p><strong>Lösung:</strong> Web-Leads werden automatisch im CRM angelegt und der Vertrieb sofort in Teams oder Slack informiert.</p></article>
          <article className="use-case"><span>03</span><h3>Digitale Belegerfassung</h3><p><strong>Problem:</strong> Beleg-Chaos am Monatsende.</p><p><strong>Lösung:</strong> KI extrahiert Rechnungsdaten aus PDFs und übergibt sie geordnet an die Buchhaltung.</p></article>
          <article className="use-case"><span>04</span><h3>Nahtloses Kunden-Onboarding</h3><p><strong>Problem:</strong> Zäher administrativer Aufwand bei Neukunden.</p><p><strong>Lösung:</strong> Automatische Erstellung von Projektboards, Kundenordnern und Versand von Willkommens-Unterlagen.</p></article>
          <article className="use-case"><span>05</span><h3>Preflight-Checks für Dokumente</h3><p><strong>Problem:</strong> Zeitaufwendiges Prüfen von PDFs und Vorgaben.</p><p><strong>Lösung:</strong> Automatisierter KI-Scan von Dokumenten auf Richtlinien und Vollständigkeit.</p></article>
          <article className="use-case"><span>06</span><h3>Proaktives System-Monitoring</h3><p><strong>Problem:</strong> Unbemerkte Fehler bei Zahlungen oder Fristen.</p><p><strong>Lösung:</strong> Automatische Überwachung mit Echtzeit-Alerts an das zuständige Team bei Abweichungen.</p></article>
        </div>
      </section>
      {showWorkflowDemo && (
        <section className="demo-section container" aria-labelledby="demo-heading">
          <div className="section-heading"><div><p className="section-kicker">Live-Demonstration</p><h2 id="demo-heading">Automatisierung <span className="gradient-text">in Aktion.</span></h2></div><p className="section-intro">Erlebe hier beispielhaft, wie ein digitaler Arbeitsablauf durch Prozessautomatisierung einfacher, schneller und zuverlässiger werden kann.</p></div>
          <div className="demo-frame"><div className="demo-placeholder"><Workflow size={28} strokeWidth={1.2} /><strong>Live-Demo hier einfügen</strong><span>Ersetze diesen Bereich durch ein eingebettetes Video oder einen interaktiven iframe.</span></div></div>
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
          <h1>Digitalisierung und Automatisierung, die <span className="gradient-text">Zeit spart.</span></h1>
          <p className="hero-lead">Ich bin Miron und unterstütze Unternehmen aus Leipzig und darüber hinaus bei der Digitalisierung. Ich entwickle klare digitale Prozesse, die Zeit sparen, manuelle Arbeit reduzieren und Raum für wichtige Aufgaben schaffen.</p>
          <div className="hero-actions">
            <a className="button button-primary" data-cal-link="dein-cal-link" href="#kontakt">Termin buchen <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="mailto:hello@miron.app">Kontakt aufnehmen <Mail size={16} /></a>
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
        <div className="section-heading"><div><p className="section-kicker">Leistungen</p><h2>Digitale Lösungen für <span className="gradient-text">effizientere Abläufe.</span></h2></div><p className="section-intro">Mit einer strukturierten Prozessanalyse erkenne ich, wo Abläufe Zeit kosten, Fehler entstehen und Potenzial ungenutzt bleibt. Daraus entwickle ich passende und datenschutzkonforme Lösungen für Digitalisierung, Prozessautomatisierung und die sichere Integration künstlicher Intelligenz.</p></div>
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
          <div className="portrait-wrap"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portrait%20von%20Miron%20-%20Digitalisierung%20und%20Automatisierung%20in%20Leipzig-59QZ2oNkqRbSOORIltO12ZiAdz5WXm.jpg" alt="Schwarzweiß-Porträt von Miron aus Leipzig" /><div className="portrait-caption"><span className="status-dot" /> aus Leipzig, Deutschland</div></div>
          <div className="about-copy"><p className="section-kicker">Über mich</p><h2>Technisches Wissen mit Blick <span className="gradient-text">für das Ganze.</span></h2><p>Ich bin Miron und unterstütze Unternehmen von Leipzig aus dabei, digitale Prozesse zu vereinfachen und effizienter zu arbeiten.</p><p>Durch meine Erfahrung im Online-Marketing und in der Fotografie verbinde ich technisches Verständnis mit einem klaren Blick für Nutzer und Geschäftsziele. Jede Lösung soll messbar entlasten, datenschutzkonform im Alltag funktionieren und langfristig einen echten Mehrwert schaffen.</p><a href="#kontakt" className="text-link">Mehr über meine Arbeitsweise <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section id="kontakt" className="cta-section container"><div className="cta-glow" aria-hidden="true" /><p className="section-kicker">Nächster Schritt</p><h2>Lass uns über deine<br /><span className="gradient-text">Prozesse sprechen.</span></h2><p>Welche Aufgaben kosten dein Unternehmen heute unnötig Zeit? Lass uns gemeinsam herausfinden, wo Digitalisierung und intelligente Automatisierung deine Abläufe spürbar verbessern können.</p><div className="cta-actions"><a className="button button-primary" data-cal-link="dein-cal-link" href="#kontakt">Termin buchen <ArrowUpRight size={17} /></a><a className="button button-outline" href="mailto:hello@miron.app">Kontakt aufnehmen <Mail size={17} /></a></div></section>

      <footer className="footer container"><a href="#top" className="wordmark">miron<span>.app</span></a><span>© 2026 miron.app, Leipzig</span><a href="mailto:hello@miron.app">hello@miron.app</a></footer>
    </main>
  )
}

  
