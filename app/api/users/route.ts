export const dynamic = 'force-dynamic'

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return Response.json({ 
      success: false, 
      error: 'DATABASE_URL is missing in environment variables' 
    }, { status: 500 })
  }

  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    
    const users = await prisma.user.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: { tenant: true }
    })
    
    return Response.json({ 
      success: true, 
      count: users.length, 
      data: users 
    })
  } catch (error) {
    console.error('Prisma Error:', error)
    return Response.json({ 
      success: false, 
      error: 'Database connection failed' 
    }, { status: 500 })
  }
}
