'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// 生成或获取会话 ID
function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
}

export default function Analytics() {
  const pathname = usePathname();
  const lastPathname = useRef<string | null>(null);

  useEffect(() => {
    // 避免重复记录同一页面
    if (lastPathname.current === pathname) return;
    lastPathname.current = pathname;

    // 不追踪 admin 页面
    if (pathname.startsWith('/admin')) return;

    // 记录页面访问
    const trackPageView = async () => {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: pathname,
            referrer: document.referrer || null,
            sessionId: getSessionId(),
          }),
        });
      } catch (error) {
        // 静默失败，不影响用户体验
        console.error('Analytics error:', error);
      }
    };

    trackPageView();
  }, [pathname]);

  // 这个组件不渲染任何内容
  return null;
}

