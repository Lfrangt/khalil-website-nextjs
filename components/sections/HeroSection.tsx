'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

const allPhotos = [
  { src: '/images/hero/hero-1.jpg', rotate: -6 },
  { src: '/images/hero/hero-2.jpg', rotate: 3 },
  { src: '/images/hero/hero-3.jpg', rotate: 5 },
  { src: '/images/hero/hero-4.jpg', rotate: -4 },
  { src: '/images/hero/hero-5.jpg', rotate: 7 },
  { src: '/images/hero/hero-6.jpg', rotate: -8 },
];

const leftPhotos = allPhotos.slice(0, 3);
const rightPhotos = allPhotos.slice(3, 6);

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

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative z-10">
        {/* 主要内容区域 */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">

          {/* Left Photo Stack - 只在超大屏幕显示 */}
          <div className="hidden xl:flex flex-1 justify-center items-center relative h-[500px]">
            {leftPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="absolute w-48 h-64 cursor-pointer"
                initial={{ rotate: photo.rotate, opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.15, rotate: 0, zIndex: 10 }}
                style={{
                  zIndex: index + 1,
                  top: `${index * 80}px`,
                  left: `${index * 40}px`
                }}
              >
                <div className="w-full h-full p-2 bg-white shadow-xl rounded-sm transform transition-transform duration-300">
                  <div className="relative w-full h-[85%] overflow-hidden bg-gray-100">
                    <Image
                      src={photo.src}
                      alt="Life Photo"
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <div className="h-[15%]"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center space-y-6 sm:space-y-8 max-w-2xl">
            {/* Profile Image */}
            <div className="inline-block relative group/avatar">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 rounded-full blur-md opacity-50 group-hover/avatar:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-900 mx-auto mb-6 sm:mb-8 flex items-center justify-center text-4xl font-bold cursor-pointer overflow-hidden ring-2 ring-white/20 shadow-2xl transition-transform duration-500 group-hover/avatar:scale-105">
                <Image
                  src="/khalil.jpg"
                  alt="Khalil"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Greeting */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight animate-slide-up delay-200 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {t.hero.greeting}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 font-light animate-slide-up delay-300">
                {t.hero.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400 px-2">
                {t.hero.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center pt-4 animate-fade-in delay-450">
              <a
                href="https://www.instagram.com/lfrangt"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all text-xs sm:text-sm text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @lfrangt
              </a>
              <a
                href="https://twitter.com/wuhuaguor"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all text-xs sm:text-sm text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                @wuhuaguor
              </a>
              <a
                href="https://github.com/lfrangt"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all text-xs sm:text-sm text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                @lfrangt
              </a>
              <button
                className="group flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all text-xs sm:text-sm text-white relative"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01.181-.556c1.545-1.25 2.5-3.02 2.5-4.896 0-3.594-3.326-6.477-7.419-6.842l-.644-.002zm-2.71 2.171c.585 0 1.055.48 1.055 1.07 0 .591-.47 1.07-1.055 1.07-.583 0-1.054-.479-1.054-1.07 0-.59.47-1.07 1.054-1.07zm5.53 0c.586 0 1.055.48 1.055 1.07 0 .591-.469 1.07-1.054 1.07-.583 0-1.054-.479-1.054-1.07 0-.59.47-1.07 1.054-1.07z" />
                </svg>
                Khalil6669
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  微信
                </span>
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
              <a
                href="/programming"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold text-sm animate-slide-up delay-500 transition-colors duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  {t.common.viewProjects}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold text-sm animate-slide-up delay-600 transition-colors duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  {t.common.contact}
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Tags/Skills */}
            <div className="flex flex-wrap justify-center gap-2 pt-6 sm:pt-8">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 rounded-full text-xs text-white cursor-default animate-scale-in delay-300">
                ⚡ Cardano
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 rounded-full text-xs text-white cursor-default animate-scale-in delay-400">
                🚀 DApp Development
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 rounded-full text-xs text-white cursor-default animate-scale-in delay-500">
                💎 Web3
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 rounded-full text-xs text-white cursor-default animate-scale-in delay-600">
                ⚛️ React
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 rounded-full text-xs text-white cursor-default animate-scale-in delay-700">
                🎸 Guitar & Piano
              </span>
            </div>
          </div>

          {/* Right Photo Stack - 只在超大屏幕显示 */}
          <div className="hidden xl:flex flex-1 justify-center items-center relative h-[500px]">
            {rightPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="absolute w-48 h-64 cursor-pointer"
                initial={{ rotate: photo.rotate, opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                whileHover={{ scale: 1.15, rotate: 0, zIndex: 10 }}
                style={{
                  zIndex: index + 1,
                  top: `${index * 80}px`,
                  right: `${index * 40}px`
                }}
              >
                <div className="w-full h-full p-2 bg-white shadow-xl rounded-sm transform transition-transform duration-300">
                  <div className="relative w-full h-[85%] overflow-hidden bg-gray-100">
                    <Image
                      src={photo.src}
                      alt="Life Photo"
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <div className="h-[15%]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 照片画廊 - 在非超大屏幕上显示 */}
        <div className="xl:hidden w-full mt-12 sm:mt-16">
          {/* 中等屏幕：横向滚动 */}
          <div className="hidden sm:block">
            <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {allPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-40 md:w-48 snap-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div
                    className="w-full aspect-[3/4] p-2 bg-white shadow-lg rounded-sm hover:shadow-xl transition-shadow duration-300"
                    style={{ transform: `rotate(${photo.rotate}deg)` }}
                  >
                    <div className="relative w-full h-[85%] overflow-hidden bg-gray-100">
                      <Image
                        src={photo.src}
                        alt="Life Photo"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 160px, 192px"
                      />
                    </div>
                    <div className="h-[15%]"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 小屏幕：网格布局 */}
          <div className="sm:hidden">
            <div className="grid grid-cols-2 gap-3 px-4 max-w-sm mx-auto">
              {allPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  className="w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div
                    className="w-full aspect-[3/4] p-1.5 bg-white shadow-lg rounded-sm"
                    style={{ transform: `rotate(${photo.rotate}deg)` }}
                  >
                    <div className="relative w-full h-[85%] overflow-hidden bg-gray-100">
                      <Image
                        src={photo.src}
                        alt="Life Photo"
                        fill
                        className="object-cover"
                        sizes="45vw"
                      />
                    </div>
                    <div className="h-[15%]"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
