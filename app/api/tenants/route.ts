export const dynamic = 'force-dynamic'

export async function GET() {
  // ?????? ?? ???? ????? ?????? ?????
  if (!process.env.DATABASE_URL) {
    return Response.json({ 
      success: false, 
      error: 'DATABASE_URL is missing in environment variables' 
    }, { status: 500 })
  }

  try {
    // ??????? ???????? ???? Next.js ?? ????? Prisma ????? ??????
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    
    const tenants = await prisma.tenant.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' }
    })
    
    return Response.json({ 
      success: true, 
      count: tenants.length, 
      data: tenants 
    })
  } catch (error) {
    console.error('Prisma Error:', error)
    return Response.json({ 
      success: false, 
      error: 'Database connection failed' 
    }, { status: 500 })
  }
}

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return Response.json({ success: false, error: 'DATABASE_URL is missing' }, { status: 500 })
  }

  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    
    const body = await request.json()
    if (!body.name || !body.slug || !body.email) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }
    
    const tenant = await prisma.tenant.create({
      data: {
        name: body.name,
        slug: body.slug,
        email: body.email,
        status: body.status || 'active',
        plan: body.plan || 'free',
      }
    })
    
    return Response.json({ success: true, data: tenant }, { status: 201 })
  } catch (error) {
    console.error('Prisma Error:', error)
    return Response.json({ success: false, error: 'Failed to create tenant' }, { status: 500 })
  }
}
