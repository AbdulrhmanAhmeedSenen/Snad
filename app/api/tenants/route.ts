import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const tenants = await prisma.tenant.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { users: true, branches: true }
        }
      }
    })
    
    return NextResponse.json({
      success: true,
      count: tenants.length,
      data: tenants
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Database connection failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    if (!body.name || !body.slug || !body.email) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: name, slug, email'
      }, { status: 400 })
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
    
    return NextResponse.json({
      success: true,
      data: tenant
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to create tenant',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
