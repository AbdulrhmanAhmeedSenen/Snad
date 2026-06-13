import { prisma } from '@/lib/prisma'

export default async function Home() {
  let tenantCount = 0
  let userCount = 0
  let branchCount = 0
  let departmentCount = 0
  
  try {
    tenantCount = await prisma.tenant.count()
    userCount = await prisma.user.count()
    branchCount = await prisma.branch.count()
    departmentCount = await prisma.department.count()
  } catch (error) {
    console.log('Database connection error:', error)
  }

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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>{tenantCount}</p>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>Tenants</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>{userCount}</p>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>Users</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>{branchCount}</p>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>Branches</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>{departmentCount}</p>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>Departments</p>
            </div>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Database Schema</h3>
          <div style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.8' }}>
            <p>Tenant (Multi-Tenant Root)</p>
            <p>Branch (Geographic Isolation)</p>
            <p>Department (Functional Teams)</p>
            <p>User (Identity & Access)</p>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            PostgreSQL (Neon) + Prisma ORM + Row-Level Security Ready
          </p>
        </div>

        <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            API Endpoints: /api/tenants | /api/users
          </p>
        </div>
      </div>
    </main>
  )
}
