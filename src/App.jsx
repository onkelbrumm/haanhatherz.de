import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!API_URL) return

    fetch(`${API_URL}/wp-json/wp/v2/posts`)
      .then((res) => {
        if (!res.ok) throw new Error(`WP REST API antwortete mit ${res.status}`)
        return res.json()
      })
      .then(setPosts)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#fff',
        padding: '64px 24px',
      }}
    >
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

      {!API_URL && (
        <p style={{ color: '#888', marginTop: '32px' }}>
          VITE_API_URL ist nicht gesetzt – WordPress-Inhalte werden nicht geladen.
        </p>
      )}

      {error && (
        <p style={{ color: '#c00', marginTop: '32px' }}>
          Fehler beim Laden der WordPress-Inhalte: {error}
        </p>
      )}

      {posts.length > 0 && (
        <ul style={{ marginTop: '32px', maxWidth: '480px', width: '100%' }}>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{ marginBottom: '12px' }}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
