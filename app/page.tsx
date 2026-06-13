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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>SANAD Global AI ERP SaaS</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#94a3b8' }}>Enterprise Multi-Tenant Platform</p>
        
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#38bdf8' }}>? System Architecture Status</h2>
          
          <div style={{ textAlign: 'left', display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
              <span style={{ fontSize: '1.5rem' }}>???</span>
              <div>
                <strong>Phase 2: Database Core</strong>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: '#cbd5e1' }}>Neon PostgreSQL + Prisma ORM + Multi-Tenant Schema</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
              <span style={{ fontSize: '1.5rem' }}>???</span>
              <div>
                <strong>Phase 3: Multi-Tenant & RBAC</strong>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: '#cbd5e1' }}>Tenant Isolation Middleware + Role-Based Access Control</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
              <span style={{ fontSize: '1.5rem' }}>??</span>
              <div>
                <strong>Phase 4: Platform Core</strong>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: '#cbd5e1' }}>Audit Logs, Activity Logs, and Global Notification Engine</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#fbbf24' }}>?? Active API Endpoints</h3>
          <div style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8', fontFamily: 'monospace', color: '#cbd5e1' }}>
            <p>? GET/POST <span style={{color: '#38bdf8'}}>/api/tenants</span></p>
            <p>? GET/POST <span style={{color: '#38bdf8'}}>/api/users</span></p>
            <p>? GET/POST <span style={{color: '#38bdf8'}}>/api/roles</span> (Protected by x-tenant-id)</p>
            <p>? GET <span style={{color: '#38bdf8'}}>/api/audit-logs</span> (Protected by x-tenant-id)</p>
          </div>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#64748b' }}>
          Ready for Phase 5: CRM Solution Architecture
        </p>
      </div>
    </main>
  )
}
