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
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#4ade80' }}>🚀 ALL 15 PHASES COMPLETED 🚀</h2>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.6' }}>
            The SANAD Global AI ERP SaaS platform is now fully implemented, tested, and production-ready. 
            Covering Database, RBAC, CRM, ERP, HRM, Accounting, AI Analytics, E-commerce, Security, and Website Building.
          </p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#fbbf24' }}>🔗 New Phase 15 Endpoints</h3>
          <div style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8', fontFamily: 'monospace', color: '#cbd5e1' }}>
            <p>• GET <span style={{color: '#38bdf8'}}>/api/websites</span> (Website & Page Management)</p>
            <p>• GET <span style={{color: '#ec4899'}}>/api/carts</span> (Shopping Cart & Customer Journey)</p>
            <p>• GET <span style={{color: '#4ade80'}}>/api/health</span> (System Status)</p>
          </div>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#64748b' }}>
          Built with Next.js 14, Prisma ORM, Neon PostgreSQL, and Vercel.
        </p>
      </div>
    </main>
  )
}