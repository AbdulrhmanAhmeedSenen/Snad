export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    // ??????? ???????? ???? Next.js ?? ????? Prisma ????? ??????
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const roles = await prisma.role.findMany({
      where: { tenantId },
      include: {
        permissions: {
          include: { permission: true }
        },
        _count: {
          select: { userRoles: true }
        }
      },
      orderBy: { isSystem: 'desc' }
    })

    return Response.json({ success: true, count: roles.length, data: roles })
  } catch (error) {
    console.error('Role GET Error:', error)
    return Response.json({ success: false, error: 'Failed to fetch roles' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    const body = await request.json()
    if (!body.name) {
      return Response.json({ success: false, error: 'Role name is required' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const role = await prisma.role.create({
      data: {
        tenantId,
        name: body.name,
        description: body.description || '',
        isSystem: false
      }
    })

    return Response.json({ success: true, data: role }, { status: 201 })
  } catch (error) {
    console.error('Role POST Error:', error)
    return Response.json({ success: false, error: 'Failed to create role' }, { status: 500 })
  }
}
