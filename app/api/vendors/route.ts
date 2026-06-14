export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    const vendors = await prisma.vendor.findMany({ where: { tenantId }, take: 50, orderBy: { createdAt: 'desc' } })
    return Response.json({ success: true, count: vendors.length, data: vendors })
  } catch (error) {
    return Response.json({ success: false, error: 'Failed to fetch vendors' }, { status: 500 })
  }
}
