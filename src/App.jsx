import { useState } from 'react'
import logo from './assets/HHH-Herz-Logo-2026_02.png'
import './App.css'

const NAV_LINKS = [
  { href: '#aktion', label: 'Die Aktion' },
  { href: '#initiativen', label: 'Initiativen' },
  { href: '#kontakt', label: 'Kontakt' },
]

const STEPS = [
  {
    title: 'Black Friday',
    text: 'Teilnehmende Geschäfte aus Haan spenden einen individuellen Prozentsatz ihres Tagesumsatzes oder des Umsatzes ausgewählter Artikel.',
  },
  {
    title: 'Bewusster Konsum',
    text: 'Ein Statement gegen übermäßigen Konsum und große Rabattschlachten – für Nachhaltigkeit und Gemeinschaft.',
  },
  {
    title: 'Rund 15 Geschäfte',
    text: 'Seit 2025 machen zahlreiche Haaner Einzelhändlerinnen und Einzelhändler bei der Aktion mit.',
  },
]

const INITIATIVES = [
  {
    title: 'Förderkreis Kipkel e.V.',
    text: 'Die Hälfte der gesammelten Spenden geht an den Förderkreis Kipkel e.V.',
  },
  {
    title: 'Bürgerstiftung für Haan & Gruiten',
    text: 'Die andere Hälfte kommt der Bürgerstiftung für Haan & Gruiten zugute.',
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
          <p className="eyebrow">Eine Aktion des Haaner Einzelhandels</p>
          <h1>Gemeinschaft stärken.</h1>
          <p className="hero-text">
            Am Black Friday spenden teilnehmende Geschäfte aus Haan einen Teil
            ihres Umsatzes an lokale Initiativen – ein Zeichen für bewussten
            Konsum statt großer Rabattschlachten.
          </p>
          <a href="#kontakt" className="button">
            Kontakt aufnehmen
          </a>
        </section>

        <section id="aktion" className="services">
          <h2>Die Aktion</h2>
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

        <section id="initiativen" className="about">
          <div className="about-visual" aria-hidden="true">
            <img src={logo} alt="" />
          </div>
          <div className="about-text">
            <h2>Wer profitiert</h2>
            <p>
              Die Spendengelder aus der Aktion werden zu gleichen Teilen an zwei
              Haaner Initiativen verteilt.
            </p>
            <ul className="initiative-list">
              {INITIATIVES.map((initiative) => (
                <li key={initiative.title}>
                  <strong>{initiative.title}</strong>
                  <span>{initiative.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kontakt" className="contact">
          <h2>Kontakt</h2>
          <p>
            Ansprechpartnerin bei der Stadt Haan: <strong>Frau Schwabe</strong>
          </p>
          <div className="contact-details">
            <a href="tel:+492129911241">+49 (2129) 911 – 241</a>
            <a href="mailto:wirtschaftsfoerderung@stadt-haan.de">
              wirtschaftsfoerderung@stadt-haan.de
            </a>
            <a href="mailto:kultur@stadt-haan.de">kultur@stadt-haan.de</a>
            <a
              href="https://www.instagram.com/haanhatherz"
              target="_blank"
              rel="noreferrer"
            >
              @haanhatherz auf Instagram
            </a>
          </div>
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
