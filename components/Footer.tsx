'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { href: '/music', label: language === 'zh' ? '音乐' : 'Music' },
      { href: '/movies', label: language === 'zh' ? '电影' : 'Movies' },
      { href: '/reading', label: language === 'zh' ? '阅读' : 'Reading' },
    ],
    work: [
      { href: '/programming', label: language === 'zh' ? '项目' : 'Projects' },
      { href: '/investing', label: language === 'zh' ? '投资' : 'Investing' },
    ],
  };

  const socialLinks = [
    {
      href: 'https://github.com/lfrangt',
      label: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      href: 'https://twitter.com/wuhuaguor',
      label: 'X / Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: 'https://www.instagram.com/lfrangt',
      label: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <h3 className="font-display text-2xl font-bold gradient-text">Khalil</h3>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              {language === 'zh'
                ? 'Cardano DApp 开发者 & 计算机科学学生。专注于区块链技术，热爱音乐与电影。'
                : 'Cardano DApp Developer & Computer Science Student. Focused on blockchain technology, passionate about music and movies.'}
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">
                {language === 'zh' ? '可联系' : 'Available for projects'}
              </span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-zinc-200 uppercase tracking-wider">
              {language === 'zh' ? '探索' : 'Explore'}
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-amber-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-zinc-200 uppercase tracking-wider">
              {language === 'zh' ? '工作' : 'Work'}
            </h4>
            <ul className="space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-amber-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-zinc-500 order-2 sm:order-1">
            <span>&copy; {currentYear} Khalil. </span>
            <span className="hidden sm:inline">
              {language === 'zh' ? '用 ' : 'Built with '}
            </span>
            <span className="text-amber-500">Next.js</span>
            <span className="hidden sm:inline">
              {language === 'zh' ? ' 构建' : ''}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 group"
                aria-label={link.label}
              >
                <span className="group-hover:scale-110 block transition-transform duration-300">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0" />
    </footer>
  );
}
