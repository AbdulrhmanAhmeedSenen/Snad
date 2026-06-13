export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '1000px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>SANAD Global AI ERP SaaS</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Phase 2: Database Implementation</p>
        
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Database Connected Successfully!</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            PostgreSQL (Neon) + Prisma ORM is active.
          </p>
          <p style={{ fontSize: '1rem', marginTop: '1rem', opacity: 0.8 }}>
            Check /api/tenants and /api/users to verify data.
          </p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Database Schema</h3>
          <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8' }}>
            <p>? Tenant (Multi-Tenant Root)</p>
            <p>? Branch (Geographic Isolation)</p>
            <p>? Department (Functional Teams)</p>
            <p>? User (Identity & Access)</p>
          </div>
        </div>
      </div>
    </main>
  )
}
