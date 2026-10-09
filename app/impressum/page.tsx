import Link from 'next/link'

export const metadata = {
  title: 'Impressum | miron.app',
  description: 'Impressum von miron.app für Digitalisierung, Prozessautomatisierung und KI-Integration aus Leipzig.',
}

export default function ImpressumPage() {
  return (
    <main className="site-shell legal-page">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Hauptnavigation">
          <Link href="/" className="wordmark" aria-label="miron.app Startseite">miron<span>.app</span></Link>
          <Link href="/" className="nav-contact">Zur Startseite</Link>
        </nav>
      </header>

      <article className="legal-content container">
        <p className="section-kicker">Rechtliche Hinweise</p>
        <h1>Impressum</h1>
        <p className="legal-intro">Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV.</p>

        <section>
          <h2>Anbieter</h2>
          <p>
            Miron [Nachname / Unternehmensname ergänzen]<br />
            [Straße und Hausnummer ergänzen]<br />
            [PLZ und Ort ergänzen]<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:hello@miron.app">hello@miron.app</a><br />
            Telefon: [optional ergänzen]
          </p>
        </section>

        <section>
          <h2>Hinweis</h2>
          <p>Die Angaben auf dieser Seite sind Platzhalter und müssen vor der Veröffentlichung mit den vollständigen ladungsfähigen Kontaktdaten ergänzt werden.</p>
        </section>
      </article>
    </main>
  )
}
