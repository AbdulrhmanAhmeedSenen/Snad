export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    
    // Fast and safe connection check
    await prisma.$connect()
    await prisma.$disconnect()
    
    return Response.json({ 
      status: "healthy", 
      database: "connected", 
      timestamp: new Date().toISOString(),
      version: "1.0.0-production"
    }, { status: 200 })
  } catch (error) {
    console.error('Health Check Failed:', error)
    return Response.json({ 
      status: "unhealthy", 
      database: "disconnected",
      error: "Database connection failed"
    }, { status: 503 })
  }
}