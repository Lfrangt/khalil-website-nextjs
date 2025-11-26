import { cookies } from 'next/headers';

// 访问记录类型
export interface PageView {
  id: string;
  path: string;
  referrer: string | null;
  userAgent: string | null;
  ip: string | null;
  country: string | null;
  city: string | null;
  timestamp: number;
  sessionId: string;
}

// 访问统计类型
export interface AnalyticsStats {
  totalViews: number;
  uniqueVisitors: number;
  todayViews: number;
  weekViews: number;
  topPages: { path: string; views: number }[];
  recentViews: PageView[];
  viewsByDay: { date: string; views: number }[];
  viewsByHour: { hour: number; views: number }[];
  browsers: { name: string; count: number }[];
  countries: { name: string; count: number }[];
}

// 使用内存存储 (生产环境建议使用数据库如 Vercel KV, Supabase 等)
// 这个数据会在服务器重启后丢失，但对于个人网站演示足够了
let pageViews: PageView[] = [];

// 生成唯一 ID
function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// 解析 User-Agent 获取浏览器信息
function parseBrowser(userAgent: string | null): string {
  if (!userAgent) return 'Unknown';
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
  if (userAgent.includes('Edg')) return 'Edge';
  if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
  return 'Other';
}

// 记录页面访问
export async function recordPageView(data: {
  path: string;
  referrer?: string | null;
  userAgent?: string | null;
  ip?: string | null;
  country?: string | null;
  city?: string | null;
  sessionId?: string;
}): Promise<PageView> {
  const pageView: PageView = {
    id: generateId(),
    path: data.path,
    referrer: data.referrer || null,
    userAgent: data.userAgent || null,
    ip: data.ip || null,
    country: data.country || null,
    city: data.city || null,
    timestamp: Date.now(),
    sessionId: data.sessionId || generateId(),
  };

  pageViews.push(pageView);

  // 只保留最近 10000 条记录以防内存溢出
  if (pageViews.length > 10000) {
    pageViews = pageViews.slice(-10000);
  }

  return pageView;
}

// 获取统计数据
export async function getAnalyticsStats(): Promise<AnalyticsStats> {
  const now = Date.now();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStart = today.getTime();
  const weekStart = todayStart - 7 * 24 * 60 * 60 * 1000;

  // 总访问量
  const totalViews = pageViews.length;

  // 唯一访客数（基于 sessionId）
  const uniqueVisitors = new Set(pageViews.map(pv => pv.sessionId)).size;

  // 今日访问量
  const todayViews = pageViews.filter(pv => pv.timestamp >= todayStart).length;

  // 本周访问量
  const weekViews = pageViews.filter(pv => pv.timestamp >= weekStart).length;

  // 热门页面
  const pageViewCounts = pageViews.reduce((acc, pv) => {
    acc[pv.path] = (acc[pv.path] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const topPages = Object.entries(pageViewCounts)
    .map(([path, views]) => ({ path, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  // 最近访问记录
  const recentViews = [...pageViews].reverse().slice(0, 20);

  // 按天统计（最近7天）
  const viewsByDay: { date: string; views: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(todayStart - i * 24 * 60 * 60 * 1000);
    const dateStr = date.toISOString().split('T')[0];
    const dayStart = date.getTime();
    const dayEnd = dayStart + 24 * 60 * 60 * 1000;
    const views = pageViews.filter(pv => pv.timestamp >= dayStart && pv.timestamp < dayEnd).length;
    viewsByDay.push({ date: dateStr, views });
  }

  // 按小时统计（24小时）
  const viewsByHour: { hour: number; views: number }[] = [];
  for (let hour = 0; hour < 24; hour++) {
    const count = pageViews.filter(pv => {
      const pvHour = new Date(pv.timestamp).getHours();
      return pvHour === hour;
    }).length;
    viewsByHour.push({ hour, views: count });
  }

  // 浏览器统计
  const browserCounts = pageViews.reduce((acc, pv) => {
    const browser = parseBrowser(pv.userAgent);
    acc[browser] = (acc[browser] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const browsers = Object.entries(browserCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  // 国家统计
  const countryCounts = pageViews.reduce((acc, pv) => {
    const country = pv.country || 'Unknown';
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const countries = Object.entries(countryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return {
    totalViews,
    uniqueVisitors,
    todayViews,
    weekViews,
    topPages,
    recentViews,
    viewsByDay,
    viewsByHour,
    browsers,
    countries,
  };
}

// 清除所有数据
export async function clearAnalytics(): Promise<void> {
  pageViews = [];
}

// 验证管理员密码
export function verifyAdminPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD || 'khalil2024';
  return password === adminPassword;
}

// 生成管理员令牌
export function generateAdminToken(): string {
  const secret = process.env.ADMIN_SECRET || 'khalil-admin-secret-key';
  const timestamp = Date.now();
  const token = Buffer.from(`${secret}:${timestamp}`).toString('base64');
  return token;
}

// 验证管理员令牌
export function verifyAdminToken(token: string): boolean {
  try {
    const secret = process.env.ADMIN_SECRET || 'khalil-admin-secret-key';
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [tokenSecret, timestamp] = decoded.split(':');
    
    if (tokenSecret !== secret) return false;
    
    // 令牌有效期 24 小时
    const tokenTime = parseInt(timestamp);
    const now = Date.now();
    const maxAge = 24 * 60 * 60 * 1000;
    
    return now - tokenTime < maxAge;
  } catch {
    return false;
  }
}

