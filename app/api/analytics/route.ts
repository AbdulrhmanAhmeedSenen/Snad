export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    // ??? ???? ???????? ??????
    const [metrics, insights] = await Promise.all([
      prisma.dashboardMetric.findMany({
        where: { tenantId },
        orderBy: { date: 'desc' },
        take: 10
      }),
      prisma.aIInsight.findMany({
        where: { tenantId },
        orderBy: { createdAt: 'desc' },
        take: 5
      })
    ])

    return Response.json({ 
      success: true, 
      data: { metrics, insights } 
    })
  } catch (error) {
    console.error('Analytics GET Error:', error)
    return Response.json({ success: false, error: 'Failed to fetch analytics' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    const body = await request.json()
    if (!body.category || !body.title || !body.description) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const insight = await prisma.aIInsight.create({
      data: {
        tenantId,
        category: body.category,
        title: body.title,
        description: body.description,
        confidence: body.confidence || 0.85
      }
    })

    return Response.json({ success: true, data: insight }, { status: 201 })
  } catch (error) {
    console.error('Analytics POST Error:', error)
    return Response.json({ success: false, error: 'Failed to create insight' }, { status: 500 })
  }
}
