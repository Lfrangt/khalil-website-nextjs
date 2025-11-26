import { NextRequest, NextResponse } from 'next/server';
import { recordPageView } from '@/lib/analytics';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, referrer, sessionId } = body;

    if (!path) {
      return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    // 获取请求信息
    const userAgent = request.headers.get('user-agent');
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') ||
               'unknown';
    
    // Vercel 自动添加的地理位置信息
    const country = request.headers.get('x-vercel-ip-country') || null;
    const city = request.headers.get('x-vercel-ip-city') || null;

    const pageView = await recordPageView({
      path,
      referrer,
      userAgent,
      ip,
      country,
      city,
      sessionId,
    });

    return NextResponse.json({ success: true, id: pageView.id });
  } catch (error) {
    console.error('Error tracking page view:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

