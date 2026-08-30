import logo from './assets/logo.png'

function App() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#fff',
      }}
    >
      <img
        src={logo}
        alt="albuera Design"
        style={{
          position: 'absolute',
          top: '32px',
          left: '32px',
          height: '48px',
        }}
      />
      <h1
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          fontSize: '2.5rem',
          color: '#111',
          margin: 0,
          textAlign: 'center',
        }}
      >
        haanhatherz.de
      </h1>
    </div>
  )
}

export default App