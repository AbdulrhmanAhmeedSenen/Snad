export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const websites = await prisma.website.findMany({
      where: { tenantId },
      include: { _count: { select: { pages: true } } }
    })
    return Response.json({ success: true, data: websites })
  } catch (error) {
    return Response.json({ success: false, error: 'Failed to fetch websites' }, { status: 500 })
  }
}