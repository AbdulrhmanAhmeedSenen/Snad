export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const logs = await prisma.communicationLog.findMany({
      where: { tenantId },
      take: 50,
      orderBy: { createdAt: 'desc' }
    })

    return Response.json({ success: true, count: logs.length, data: logs })
  } catch (error) {
    console.error('Communications GET Error:', error)
    return Response.json({ success: false, error: 'Failed to fetch communication logs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const tenantId = request.headers.get('x-tenant-id')
    if (!tenantId) {
      return Response.json({ success: false, error: 'Tenant ID is required' }, { status: 400 })
    }

    const body = await request.json()
    if (!body.type || !body.recipient || !body.content) {
      return Response.json({ success: false, error: 'Missing required fields: type, recipient, content' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()

    const log = await prisma.communicationLog.create({
      data: {
        tenantId,
        type: body.type,
        recipient: body.recipient,
        subject: body.subject || null,
        content: body.content,
        status: body.status || 'pending',
        metadata: body.metadata ? JSON.stringify(body.metadata) : null
      }
    })

    // ملاحظة: في بيئة الإنتاج الحقيقية، هنا يتم استدعاء مزود الخدمة الفعلي (مثل SendGrid, Twilio)
    // وتحديث الحالة إلى 'sent' أو 'failed' بناءً على الاستجابة.

    return Response.json({ success: true, data: log }, { status: 201 })
  } catch (error) {
    console.error('Communications POST Error:', error)
    return Response.json({ success: false, error: 'Failed to log communication' }, { status: 500 })
  }
}
