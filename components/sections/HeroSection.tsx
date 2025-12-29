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

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

export default function HeroSection() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      href: 'https://www.instagram.com/lfrangt',
      label: '@lfrangt',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      href: 'https://twitter.com/wuhuaguor',
      label: '@wuhuaguor',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: 'https://github.com/lfrangt',
      label: '@lfrangt',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  const skills = [
    { label: 'Cardano', icon: '⚡' },
    { label: 'DApp Development', icon: '🚀' },
    { label: 'Web3', icon: '💎' },
    { label: 'React', icon: '⚛️' },
    { label: 'Guitar & Piano', icon: '🎸' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center dark-section relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary glow - amber accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/10 rounded-full filter blur-[120px] animate-pulse-glow" />
        {/* Secondary glows */}
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-violet-500/6 rounded-full filter blur-[100px] animate-float-delay" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative z-10">
        {/* Main Content Area */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16">

          {/* Left Photo Stack - Desktop only */}
          <div className="hidden xl:flex flex-1 justify-center items-center relative h-[520px]">
            {leftPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="absolute w-48 h-64 cursor-pointer"
                initial={{ rotate: photo.rotate, opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.12, rotate: 0, zIndex: 10 }}
                style={{
                  zIndex: index + 1,
                  top: `${index * 70}px`,
                  left: `${index * 35}px`
                }}
              >
                <div className="polaroid w-full h-full transform transition-all duration-500" style={{ transform: `rotate(${photo.rotate}deg)` }}>
                  <div className="relative w-full h-[calc(100%-32px)] overflow-hidden bg-zinc-100">
                    <Image
                      src={photo.src}
                      alt="Life Photo"
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Content */}
          <motion.div
            className="flex-1 text-center space-y-8 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Image with Glow Ring */}
            <motion.div variants={itemVariants} className="inline-block relative group/avatar">
              {/* Animated glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-full opacity-0 group-hover/avatar:opacity-60 blur-xl transition-all duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/50 via-cyan-500/30 to-violet-500/50 rounded-full animate-rotate-slow opacity-40" />

              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-2 ring-zinc-800 shadow-2xl transition-transform duration-500 group-hover/avatar:scale-105">
                <Image
                  src="/khalil.jpg"
                  alt="Khalil"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full rotate-180"
                  priority
                />
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-zinc-900 animate-pulse" />
            </motion.div>

            {/* Typography */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
              >
                <span className="gradient-text">{t.hero.greeting}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-display text-xl sm:text-2xl text-zinc-300 font-medium tracking-wide"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed"
              >
                {t.hero.description}
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center pt-2"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-sm text-zinc-300 hover:text-white transition-all"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-zinc-400 group-hover:text-amber-400 transition-colors">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </motion.a>
              ))}

              {/* WeChat with tooltip */}
              <motion.button
                className="group flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-sm text-zinc-300 hover:text-white transition-all relative"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-zinc-400 group-hover:text-emerald-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01.181-.556c1.545-1.25 2.5-3.02 2.5-4.896 0-3.594-3.326-6.477-7.419-6.842l-.644-.002zm-2.71 2.171c.585 0 1.055.48 1.055 1.07 0 .591-.47 1.07-1.055 1.07-.583 0-1.054-.479-1.054-1.07 0-.59.47-1.07 1.054-1.07zm5.53 0c.586 0 1.055.48 1.055 1.07 0 .591-.469 1.07-1.054 1.07-.583 0-1.054-.479-1.054-1.07 0-.59.47-1.07 1.054-1.07z" />
                  </svg>
                </span>
                <span className="font-medium">Khalil6669</span>

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800 text-xs text-zinc-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-700">
                  WeChat
                </span>
              </motion.button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.a
                href="/programming"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t.common.viewProjects}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t.common.contact}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 pt-6"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={tagVariants}
                  className="px-4 py-2 bg-zinc-800/60 border border-zinc-700/50 rounded-full text-xs sm:text-sm text-zinc-300 font-medium cursor-default hover:border-amber-500/30 hover:bg-zinc-800 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="mr-1.5">{skill.icon}</span>
                  {skill.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Photo Stack - Desktop only */}
          <div className="hidden xl:flex flex-1 justify-center items-center relative h-[520px]">
            {rightPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="absolute w-48 h-64 cursor-pointer"
                initial={{ rotate: photo.rotate, opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.12, rotate: 0, zIndex: 10 }}
                style={{
                  zIndex: index + 1,
                  top: `${index * 70}px`,
                  right: `${index * 35}px`
                }}
              >
                <div className="polaroid w-full h-full transform transition-all duration-500" style={{ transform: `rotate(${photo.rotate}deg)` }}>
                  <div className="relative w-full h-[calc(100%-32px)] overflow-hidden bg-zinc-100">
                    <Image
                      src={photo.src}
                      alt="Life Photo"
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Photo Gallery */}
        <motion.div
          className="xl:hidden w-full mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Medium screens: Horizontal scroll */}
          <div className="hidden sm:block">
            <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {allPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-44 md:w-52 snap-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="polaroid w-full aspect-[3/4]"
                    style={{ transform: `rotate(${photo.rotate}deg)` }}
                  >
                    <div className="relative w-full h-[calc(100%-32px)] overflow-hidden bg-zinc-100">
                      <Image
                        src={photo.src}
                        alt="Life Photo"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 176px, 208px"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Small screens: Grid layout */}
          <div className="sm:hidden">
            <div className="grid grid-cols-2 gap-4 px-4 max-w-md mx-auto">
              {allPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  className="w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="polaroid w-full aspect-[3/4]"
                    style={{ transform: `rotate(${photo.rotate}deg)` }}
                  >
                    <div className="relative w-full h-[calc(100%-24px)] overflow-hidden bg-zinc-100">
                      <Image
                        src={photo.src}
                        alt="Life Photo"
                        fill
                        className="object-cover"
                        sizes="45vw"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1.5 h-3 bg-amber-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
