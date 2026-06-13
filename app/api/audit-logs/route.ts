export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    // Dynamic Import ???? ????? ??????
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const logs = await prisma.auditLog.findMany({
      where: { tenantId },
      take: 50,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { name: true, email: true }
        }
      }
    })

    return Response.json({ success: true, count: logs.length, data: logs })
  } catch (error) {
    console.error('Audit Log GET Error:', error)
    return Response.json({ success: false, error: 'Failed to fetch audit logs' }, { status: 500 })
  }
}
