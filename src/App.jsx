import logo from './assets/HHH-Herz-Logo-2026.png'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#fff',
        padding: '64px 24px',
      }}
    >
      <img
        src={logo}
        alt="haanhatherz.de Logo"
        style={{
          width: '160px',
          height: 'auto',
        }}
      />

      <h1
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          fontSize: '2.5rem',
          color: '#111',
          margin: '24px 0 0',
          textAlign: 'center',
        }}
      >
        haanhatherz.de
      </h1>
    </div>
  )
}

export default App
