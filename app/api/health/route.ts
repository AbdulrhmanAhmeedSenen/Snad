import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'OK',
    message: 'SANAD ERP API is running smoothly on Vercel',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  }, { status: 200 });
}
