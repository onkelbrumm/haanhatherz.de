import { useState } from 'react'
import logo from './assets/HHH-Herz-Logo-2026_02.png'
import campaignPoster from './assets/haan-hat-herz-2025.png'
import kipkelLogo from './assets/kipkel-logo.png'
import buergerstiftungLogo from './assets/buergerstiftung-logo.png'
import './App.css'

const participantModules = import.meta.glob('./assets/participants/*.png', {
  eager: true,
  import: 'default',
})

const PARTICIPANTS = Object.entries(participantModules)
  .map(([path, src]) => {
    const fileName = path.split('/').pop().replace('.png', '')
    const name = fileName
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    return { name, src }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

const NAV_LINKS = [
  { href: '#aktion', label: 'Die Aktion' },
  { href: '#geschaefte', label: 'Geschäfte' },
  { href: '#initiativen', label: 'Initiativen' },
  { href: '#kontakt', label: 'Kontakt' },
]

const STEPS = [
  {
    title: 'Black Friday 2025',
    text: 'Teilnehmende Geschäfte aus Haan haben einen individuellen Prozentsatz ihres Tagesumsatzes oder des Umsatzes ausgewählter Artikel gespendet.',
  },
  {
    title: 'Bewusster Konsum',
    text: 'Ein Statement gegen übermäßigen Konsum und große Rabattschlachten – für Nachhaltigkeit und Gemeinschaft.',
  },
  {
    title: 'Rund 15 Geschäfte',
    text: '2025 haben rund 15 Haaner Einzelhändlerinnen und Einzelhändler bei der Aktion mitgemacht.',
  },
]

const INITIATIVES = [
  {
    title: 'Förderkreis Kipkel e.V.',
    text: 'Die Hälfte der gesammelten Spenden ging an den Förderkreis Kipkel e.V.',
    logo: kipkelLogo,
  },
  {
    title: 'Bürgerstiftung für Haan & Gruiten',
    text: 'Die andere Hälfte kam der Bürgerstiftung für Haan & Gruiten zugute.',
    logo: buergerstiftungLogo,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand">
          <img src={logo} alt="haanhatherz.de Logo" className="brand-logo" />
          <span>Haan hat Herz</span>
        </a>

        <button
          className="nav-toggle"
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <img src={logo} alt="" className="hero-logo" aria-hidden="true" />
          <p className="eyebrow">Eine Aktion des Haaner Einzelhandels</p>
          <h1>Gemeinschaft stärken.</h1>
          <p className="hero-text">
            Am Black Friday 2025 haben teilnehmende Geschäfte aus Haan einen
            Teil ihres Umsatzes an lokale Initiativen gespendet – ein Zeichen
            für bewussten Konsum statt großer Rabattschlachten.
          </p>
          <p className="hero-note">
            🎉 Auch 2026 ist Haan hat Herz wieder dabei – am Black Friday,
            27. November 2026.
          </p>
          <a href="#kontakt" className="button">
            Kontakt aufnehmen
          </a>
        </section>

        <section id="aktion" className="services">
          <h2>Die Aktion 2025</h2>
          <div className="services-grid">
            {STEPS.map((step) => (
              <div key={step.title} className="service-card">
                <span className="service-mark" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="geschaefte" className="participants">
          <h2>Die teilnehmenden Geschäfte</h2>
          <p className="participants-intro">
            Diese Haaner Geschäfte haben 2025 bei Haan hat Herz mitgemacht.
          </p>
          <div className="participants-grid">
            {PARTICIPANTS.map((participant) => (
              <div key={participant.name} className="participant-card">
                <img src={participant.src} alt={participant.name} />
              </div>
            ))}
          </div>
        </section>

        <section id="initiativen" className="about">
          <div className="about-visual">
            <img src={campaignPoster} alt="Plakat der Aktion Haan hat Herz 2025" />
          </div>
          <div className="about-text">
            <h2>Wer profitiert hat</h2>
            <p>
              Die Spendengelder aus der Aktion 2025 wurden zu gleichen Teilen
              an zwei Haaner Initiativen verteilt.
            </p>
            <ul className="initiative-list">
              {INITIATIVES.map((initiative) => (
                <li key={initiative.title}>
                  <img
                    src={initiative.logo}
                    alt={initiative.title}
                    className="initiative-logo"
                  />
                  <div>
                    <strong>{initiative.title}</strong>
                    <span>{initiative.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kontakt" className="contact">
          <h2>Kontakt</h2>
          <p>
            Initiatorin und Ansprechpartnerin: <strong>Sofia Tschrepp</strong> –
            Dolce Cuore, Haan
          </p>
          <div className="contact-details">
            <a href="tel:+4921295668668">02129 5668668</a>
            <a href="mailto:sofy@dolcecuore.de">sofy@dolcecuore.de</a>
            <a
              href="https://www.instagram.com/haanhatherz"
              target="_blank"
              rel="noreferrer"
            >
              @haanhatherz
            </a>
          </div>
          <p className="contact-address">Kaiserstraße 59 · 42781 Haan</p>
        </section>
      </main>

      <footer className="site-footer">
        <img src={logo} alt="haanhatherz.de Logo" className="footer-logo" />
        <p>© {new Date().getFullYear()} haanhatherz.de</p>
      </footer>
    </>
  )
}

export default App
