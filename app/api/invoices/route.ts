export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const invoices = await prisma.invoice.findMany({
      where: { tenantId },
      take: 50,
      orderBy: { createdAt: 'desc' },
      include: { 
        customer: { select: { name: true } },
        vendor: { select: { name: true } },
        _count: { select: { payments: true } }
      }
    })

    return Response.json({ success: true, count: invoices.length, data: invoices })
  } catch (error) {
    console.error('Invoices GET Error:', error)
    return Response.json({ success: false, error: 'Failed to fetch invoices' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    const body = await request.json()
    if (!body.type || !body.totalAmount) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const invoiceNumber = 'INV-' + Date.now().toString().slice(-6)

    const invoice = await prisma.invoice.create({
      data: {
        tenantId,
        customerId: body.customerId,
        vendorId: body.vendorId,
        type: body.type,
        invoiceNumber,
        totalAmount: body.totalAmount,
        dueDate: body.dueDate ? new Date(body.dueDate) : undefined,
        status: body.status || 'draft'
      }
    })

    return Response.json({ success: true, data: invoice }, { status: 201 })
  } catch (error) {
    console.error('Invoices POST Error:', error)
    return Response.json({ success: false, error: 'Failed to create invoice' }, { status: 500 })
  }
}
