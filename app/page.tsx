export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          🎉 SANAD ERP SaaS
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>
          Enterprise AI ERP Platform
        </p>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '2rem',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            ✅ System Connected Successfully!
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            GitHub & Vercel Integration is Working Perfectly
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: '1.5rem', opacity: 0.7 }}>
            Ready for Phase 2: Database Architecture
          </p>
        </div>
      </div>
    </main>
  );
}
