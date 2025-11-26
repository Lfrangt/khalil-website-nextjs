'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import type { AnalyticsStats, PageView } from '@/lib/analytics';

// 统计卡片组件
function StatCard({ 
  title, 
  value, 
  icon, 
  color,
  delay = 0 
}: { 
  title: string; 
  value: string | number; 
  icon: React.ReactNode;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-2xl p-6 ${color}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-white/70">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>
        </div>
        <div className="p-3 bg-white/10 rounded-xl">
          {icon}
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full" />
    </motion.div>
  );
}

// 简单的柱状图组件
function BarChart({ data, title }: { data: { label: string; value: number }[]; title: string }) {
  const maxValue = Math.max(...data.map(d => d.value), 1);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="w-16 text-xs text-gray-400 text-right shrink-0">
              {item.label}
            </span>
            <div className="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / maxValue) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              />
            </div>
            <span className="w-10 text-sm text-white font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// 最近访问列表
function RecentVisits({ visits }: { visits: PageView[] }) {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('zh-CN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">最近访问</h3>
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {visits.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-4">暂无访问记录</p>
        ) : (
          visits.map((visit, index) => (
            <motion.div
              key={visit.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium truncate">{visit.path}</p>
                <p className="text-xs text-gray-500">
                  {visit.country || 'Unknown'} · {formatTime(visit.timestamp)}
                </p>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}

// 热门页面
function TopPages({ pages }: { pages: { path: string; views: number }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">热门页面</h3>
      <div className="space-y-3">
        {pages.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-4">暂无数据</p>
        ) : (
          pages.map((page, index) => (
            <div
              key={page.path}
              className="flex items-center justify-between p-3 bg-white/5 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  index === 0 ? 'bg-yellow-500 text-yellow-900' :
                  index === 1 ? 'bg-gray-400 text-gray-900' :
                  index === 2 ? 'bg-amber-600 text-amber-100' :
                  'bg-white/10 text-gray-400'
                }`}>
                  {index + 1}
                </span>
                <span className="text-sm text-white truncate max-w-[200px]">{page.path}</span>
              </div>
              <span className="text-sm font-medium text-purple-400">{page.views} 次</span>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/verify');
      if (!response.ok) {
        router.push('/admin/login');
        return;
      }
      fetchStats();
    } catch (err) {
      router.push('/admin/login');
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/analytics/stats');
      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }
      const data = await response.json();
      setStats(data);
    } catch (err) {
      setError('获取统计数据失败');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const handleRefresh = () => {
    setLoading(true);
    fetchStats();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          <p className="text-gray-400">加载中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-8">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">数据分析</h1>
            <p className="text-gray-400 mt-1">查看网站访问统计</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              刷新
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl hover:bg-red-500/20 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              退出
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="总访问量"
            value={stats?.totalViews || 0}
            color="bg-gradient-to-br from-purple-600 to-purple-800"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
            delay={0.1}
          />
          <StatCard
            title="独立访客"
            value={stats?.uniqueVisitors || 0}
            color="bg-gradient-to-br from-blue-600 to-blue-800"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            delay={0.15}
          />
          <StatCard
            title="今日访问"
            value={stats?.todayViews || 0}
            color="bg-gradient-to-br from-emerald-600 to-emerald-800"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            delay={0.2}
          />
          <StatCard
            title="本周访问"
            value={stats?.weekViews || 0}
            color="bg-gradient-to-br from-amber-600 to-amber-800"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
            delay={0.25}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <BarChart
            title="最近 7 天访问"
            data={(stats?.viewsByDay || []).map(d => ({
              label: d.date.slice(5), // MM-DD
              value: d.views,
            }))}
          />
          <BarChart
            title="浏览器分布"
            data={(stats?.browsers || []).slice(0, 5).map(b => ({
              label: b.name,
              value: b.count,
            }))}
          />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopPages pages={stats?.topPages || []} />
          <RecentVisits visits={stats?.recentViews || []} />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← 返回首页
          </a>
        </div>
      </div>
    </div>
  );
}

