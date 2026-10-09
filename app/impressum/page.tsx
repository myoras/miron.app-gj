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
          <h2>Datenschutz</h2>
          <p>
            Verantwortlicher für die Verarbeitung personenbezogener Daten auf dieser Website ist der oben genannte Anbieter.
          </p>
          <h3>Hosting</h3>
          <p>
            Diese Website wird bei Hetzner gehostet. Beim Aufruf der Website können technisch erforderliche Zugriffsdaten wie IP-Adresse, Datum und Uhrzeit sowie aufgerufene Seiten in Server-Logdateien verarbeitet werden. Die Verarbeitung erfolgt zur sicheren und stabilen Bereitstellung der Website.
          </p>
          <h3>Reichweitenmessung mit Umami</h3>
          <p>
            Zur datenschutzfreundlichen Reichweitenmessung setzen wir Umami ein. Umami arbeitet ohne Cookies und erstellt keine persönlichen Nutzerprofile. Die Auswertung erfolgt auf Grundlage anonymisierter oder aggregierter Nutzungsdaten, um die Website technisch und inhaltlich zu verbessern.
          </p>
          <p>
            Eine Weitergabe an Dritte zu Werbezwecken findet nicht statt. Personenbezogene Daten werden nur verarbeitet, soweit dies zur Bereitstellung der Website, zur Sicherheit des Betriebs oder aufgrund einer gesetzlichen Verpflichtung erforderlich ist.
          </p>
          <h3>Ihre Rechte</h3>
          <p>
            Sie haben im Rahmen der gesetzlichen Vorschriften das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch gegen die Verarbeitung. Für Fragen zum Datenschutz können Sie sich an die oben genannte E-Mail-Adresse wenden.
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
