import { useState } from 'react'
import logo from './assets/HHH-Herz-Logo-2026_02.png'
import './App.css'

const NAV_LINKS = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

const SERVICES = [
  {
    title: 'Beratung',
    text: 'Persönliche Beratung, die auf Ihr Anliegen eingeht.',
  },
  {
    title: 'Engagement',
    text: 'Wir setzen uns aktiv für die Menschen in Haan ein.',
  },
  {
    title: 'Vor Ort',
    text: 'Direkt vor Ort erreichbar, wenn Sie uns brauchen.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand">
          <img src={logo} alt="haanhatherz.de Logo" className="brand-logo" />
          <span>haanhatherz.de</span>
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
          <p className="eyebrow">Haan hat Herz</p>
          <h1>Mit Herz für Haan.</h1>
          <p className="hero-text">
            Diese Seite ist im Aufbau. Hier entstehen bald Informationen rund um
            unser Angebot für die Stadt Haan.
          </p>
          <a href="#kontakt" className="button">
            Kontakt aufnehmen
          </a>
        </section>

        <section id="leistungen" className="services">
          <h2>Leistungen</h2>
          <div className="services-grid">
            {SERVICES.map((service) => (
              <div key={service.title} className="service-card">
                <span className="service-mark" aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ueber-uns" className="about">
          <div className="about-visual" aria-hidden="true">
            <img src={logo} alt="" />
          </div>
          <div className="about-text">
            <h2>Über uns</h2>
            <p>
              Haan hat Herz steht für ein Miteinander in Haan – nah, persönlich
              und verlässlich. Mehr über uns erfahren Sie hier in Kürze.
            </p>
          </div>
        </section>

        <section id="kontakt" className="contact">
          <h2>Kontakt</h2>
          <p>Die Kontaktmöglichkeiten folgen in Kürze an dieser Stelle.</p>
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
