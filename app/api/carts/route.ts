export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const carts = await prisma.cart.findMany({
      where: { tenantId, status: 'active' },
      include: { items: true, customer: { select: { name: true } } }
    })
    return Response.json({ success: true, data: carts })
  } catch (error) {
    return Response.json({ success: false, error: 'Failed to fetch carts' }, { status: 500 })
  }
}