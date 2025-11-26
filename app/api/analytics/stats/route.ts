import { NextRequest, NextResponse } from 'next/server';
import { getAnalyticsStats, verifyAdminToken } from '@/lib/analytics';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    // 验证管理员身份
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token || !verifyAdminToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const stats = await getAnalyticsStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error getting analytics stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

