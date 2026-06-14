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
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #38bdf8, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SANAD Global AI ERP SaaS</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#94a3b8' }}>Enterprise Multi-Tenant Platform</p>
        
        <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '2rem', borderRadius: '16px', border: '2px solid rgba(34, 197, 94, 0.5)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#4ade80' }}>🚀 PRODUCTION READY 🚀</h2>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.6' }}>
            All 14 architectural phases have been successfully implemented, tested, and deployed. 
            The system is now a fully functional, secure, and scalable Enterprise SaaS platform.
          </p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#fbbf24' }}>🔗 Core Production Endpoints</h3>
          <div style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8', fontFamily: 'monospace', color: '#cbd5e1' }}>
            <p>• <span style={{color: '#4ade80'}}>/api/health</span> (System & Database Status)</p>
            <p>• <span style={{color: '#38bdf8'}}>/api/tenants</span> | <span style={{color: '#38bdf8'}}>/api/users</span> | <span style={{color: '#38bdf8'}}>/api/roles</span></p>
            <p>• <span style={{color: '#a855f7'}}>/api/quotations</span> | <span style={{color: '#eab308'}}>/api/invoices</span> | <span style={{color: '#ec4899'}}>/api/orders</span></p>
            <p>• <span style={{color: '#3b82f6'}}>/api/communications</span> | <span style={{color: '#38bdf8'}}>/api/export</span></p>
          </div>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#64748b' }}>
          Built with Next.js 14, Prisma ORM, Neon PostgreSQL, and Vercel.
        </p>
      </div>
    </main>
  )
}