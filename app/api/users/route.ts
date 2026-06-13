import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      take: 20,
      orderBy: { createdAt: 'desc' },
      include: {
        tenant: true,
        branch: true,
        department: true
      }
    })
    
    return NextResponse.json({
      success: true,
      count: users.length,
      data: users
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Database connection failed'
    }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    if (!body.email || !body.name || !body.tenantId) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: email, name, tenantId'
      }, { status: 400 })
    }
    
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        tenantId: body.tenantId,
        branchId: body.branchId,
        departmentId: body.departmentId,
        role: body.role || 'user',
      }
    })
    
    return NextResponse.json({
      success: true,
      data: user
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to create user'
    }, { status: 500 })
  }
}
