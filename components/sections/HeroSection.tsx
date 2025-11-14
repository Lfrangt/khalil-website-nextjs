'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center dark-section relative overflow-hidden">
      {/* 背景装饰元素 - 现代霓虹光晕 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/12 rounded-full filter blur-3xl animate-float-delay"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-pink-500/8 rounded-full filter blur-3xl animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image - Neon glow effect */}
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 mx-auto mb-8 flex items-center justify-center text-4xl font-bold hover-float animate-scale-in cursor-pointer overflow-hidden ring-2 ring-orange-500/50 shadow-2xl shadow-orange-500/50 group">
              <Image
                src="/khalil.jpg"
                alt="Khalil"
                width={128}
                height={128}
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-cyan-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Greeting - 第二个出现 */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight animate-slide-up delay-200 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {t.hero.greeting}
            </h1>

            {/* Subtitle - 第三个出现 */}
            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light animate-slide-up delay-300">
              {t.hero.subtitle}
            </p>

            {/* Description - 第四个出现 */}
            <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
              {t.hero.description}
            </p>
          </div>

          {/* Social Links - Modern gradient cards */}
          <div className="flex flex-wrap gap-3 justify-center pt-4 animate-fade-in delay-450">
            <a
              href="https://www.instagram.com/lfrangt"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 glass-card rounded-xl transition-all text-sm text-white font-semibold border border-pink-500/20 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="group-hover:text-pink-300 transition-colors">@lfrangt</span>
            </a>
            <a
              href="https://twitter.com/wuhuaguor"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 glass-card rounded-xl transition-all text-sm text-white font-semibold border border-cyan-500/20 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span className="group-hover:text-cyan-300 transition-colors">@wuhuaguor</span>
            </a>
            <button
              className="group flex items-center gap-2 px-5 py-3 glass-card rounded-xl transition-all text-sm text-white font-semibold relative border border-green-500/20 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01.181-.556c1.545-1.25 2.5-3.02 2.5-4.896 0-3.594-3.326-6.477-7.419-6.842l-.644-.002zm-2.71 2.171c.585 0 1.055.48 1.055 1.07 0 .591-.47 1.07-1.055 1.07-.583 0-1.054-.479-1.054-1.07 0-.59.47-1.07 1.054-1.07zm5.53 0c.586 0 1.055.48 1.055 1.07 0 .591-.469 1.07-1.054 1.07-.583 0-1.054-.479-1.054-1.07 0-.59.47-1.07 1.054-1.07z"/>
              </svg>
              <span className="group-hover:text-green-300 transition-colors">Khalil6669</span>
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap font-bold shadow-lg shadow-green-500/50 scale-90 group-hover:scale-100">
                📱 微信
              </span>
            </button>
          </div>

          {/* CTA Buttons - Modern gradient buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="/programming"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-xl font-semibold text-sm overflow-hidden shadow-lg shadow-orange-500/50 animate-slide-up delay-500 hover:shadow-2xl hover:shadow-orange-500/60 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.common.viewProjects}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 glass-card text-white rounded-xl font-semibold text-sm animate-slide-up delay-600 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.common.contact}
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Tags/Skills - Colorful gradient tags */}
          <div className="flex flex-wrap justify-center gap-3 pt-12">
            <span className="px-5 py-2.5 glass-card rounded-full text-sm text-white font-semibold hover-lift cursor-default animate-scale-in delay-300 border border-orange-500/30 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20">
              ⚡ Cardano
            </span>
            <span className="px-5 py-2.5 glass-card rounded-full text-sm text-white font-semibold hover-lift cursor-default animate-scale-in delay-400 border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20">
              🚀 DApp Development
            </span>
            <span className="px-5 py-2.5 glass-card rounded-full text-sm text-white font-semibold hover-lift cursor-default animate-scale-in delay-500 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20">
              💎 Web3
            </span>
            <span className="px-5 py-2.5 glass-card rounded-full text-sm text-white font-semibold hover-lift cursor-default animate-scale-in delay-600 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20">
              ⚛️ React
            </span>
            <span className="px-5 py-2.5 glass-card rounded-full text-sm text-white font-semibold hover-lift cursor-default animate-scale-in delay-700 border border-pink-500/30 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20">
              🎸 Guitar & Piano
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
