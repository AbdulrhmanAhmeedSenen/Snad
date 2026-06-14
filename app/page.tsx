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
            {[
              { icon: '???', title: 'Phase 2: Database Core', desc: 'Neon PostgreSQL + Prisma ORM' },
              { icon: '???', title: 'Phase 3: Multi-Tenant & RBAC', desc: 'Tenant Isolation Middleware + RBAC' },
              { icon: '??', title: 'Phase 4: Platform Core', desc: 'Audit, Activity Logs, Notifications' },
              { icon: '??', title: 'Phase 5: CRM Solution', desc: 'Leads, Customers, Opportunities, Tasks' },
              { icon: '??', title: 'Phase 6: Quotation Platform', desc: 'Quotes, Items, Pricing, Approvals' },
              { icon: '??', title: 'Phase 7: ERP Operations', desc: 'Inventory, Purchase Orders, Vendors' },
              { icon: '??', title: 'Phase 8: HRM Solution', desc: 'Employees, Attendance, Payroll Management' },
              { icon: '??', title: 'Phase 9: Accounting & Finance', desc: 'Chart of Accounts, Invoices, Journal Entries' },
              { icon: '??', title: 'Phase 10: AI & Analytics', desc: 'Dashboard Metrics, AI Insights, Predictive Analytics' },
              { icon: '??', title: 'Phase 11: E-commerce & POS', desc: 'Product Catalog, Orders, POS Device Integration' }
            ].map((phase, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: idx === 9 ? 'rgba(236, 72, 153, 0.1)' : 'rgba(34, 197, 94, 0.1)', borderRadius: '8px', border: idx === 9 ? '1px solid rgba(236, 72, 153, 0.3)' : '1px solid rgba(34, 197, 94, 0.3)' }}>
                <span style={{ fontSize: '1.5rem' }}>{phase.icon}</span>
                <div>
                  <strong>{phase.title}</strong>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: '#cbd5e1' }}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#fbbf24' }}>?? Active API Endpoints</h3>
          <div style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.8', fontFamily: 'monospace', color: '#cbd5e1' }}>
            <p>? GET/POST <span style={{color: '#38bdf8'}}>/api/tenants</span> | <span style={{color: '#38bdf8'}}>/api/users</span> | <span style={{color: '#38bdf8'}}>/api/roles</span></p>
            <p>? GET <span style={{color: '#38bdf8'}}>/api/audit-logs</span> (Protected)</p>
            <p>? GET/POST <span style={{color: '#38bdf8'}}>/api/leads</span> | <span style={{color: '#38bdf8'}}>/api/employees</span> (Protected)</p>
            <p>? GET/POST <span style={{color: '#a855f7'}}>/api/quotations</span> | <span style={{color: '#eab308'}}>/api/invoices</span> (Protected)</p>
            <p>? GET/POST <span style={{color: '#a855f7'}}>/api/analytics</span> | <span style={{color: '#ec4899'}}>/api/orders</span> (Protected)</p>
          </div>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#64748b' }}>
          ?? Core ERP + E-commerce System Complete. Ready for Phase 12: Security & Compliance Hardening.
        </p>
      </div>
    </main>
  )
}
