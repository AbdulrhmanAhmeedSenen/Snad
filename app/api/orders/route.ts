export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const orders = await prisma.order.findMany({
      where: { tenantId },
      take: 50,
      orderBy: { createdAt: 'desc' },
      include: { 
        customer: { select: { name: true } },
        _count: { select: { items: true } }
      }
    })

    return Response.json({ success: true, count: orders.length, data: orders })
  } catch (error) {
    console.error('Orders GET Error:', error)
    return Response.json({ success: false, error: 'Failed to fetch orders' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    const body = await request.json()
    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return Response.json({ success: false, error: 'Order must have at least one item' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    // Calculate total
    const totalAmount = body.items.reduce((sum: number, item: any) => sum + (item.quantity * item.unitPrice), 0)

    const order = await prisma.order.create({
      data: {
        tenantId,
        customerId: body.customerId,
        type: body.type || 'ecommerce',
        totalAmount,
        currency: body.currency || 'USD',
        status: body.status || 'pending',
        items: {
          create: body.items.map((item: any) => ({
            productId: item.productId,
            productName: item.productName,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            total: item.quantity * item.unitPrice
          }))
        }
      },
      include: { items: true }
    })

    return Response.json({ success: true, data: order }, { status: 201 })
  } catch (error) {
    console.error('Orders POST Error:', error)
    return Response.json({ success: false, error: 'Failed to create order' }, { status: 500 })
  }
}
