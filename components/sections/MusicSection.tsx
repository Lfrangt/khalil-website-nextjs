'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Genre color mapping
const genreColors: Record<string, { bg: string; text: string; glow: string; accent: string }> = {
  'R&B / Soul': {
    bg: 'from-violet-600/20 to-purple-900/20',
    text: 'text-violet-400',
    glow: 'rgba(139, 92, 246, 0.4)',
    accent: '#8b5cf6',
  },
  'Funk / Jazz': {
    bg: 'from-amber-600/20 to-orange-900/20',
    text: 'text-amber-400',
    glow: 'rgba(245, 158, 11, 0.4)',
    accent: '#f59e0b',
  },
  'Indie / Folk': {
    bg: 'from-emerald-600/20 to-teal-900/20',
    text: 'text-emerald-400',
    glow: 'rgba(16, 185, 129, 0.4)',
    accent: '#10b981',
  },
  'Pop': {
    bg: 'from-pink-600/20 to-rose-900/20',
    text: 'text-pink-400',
    glow: 'rgba(236, 72, 153, 0.4)',
    accent: '#ec4899',
  },
  'Soul / R&B': {
    bg: 'from-yellow-600/20 to-amber-900/20',
    text: 'text-yellow-400',
    glow: 'rgba(234, 179, 8, 0.4)',
    accent: '#eab308',
  },
  'Blues / Rock': {
    bg: 'from-cyan-600/20 to-blue-900/20',
    text: 'text-cyan-400',
    glow: 'rgba(6, 182, 212, 0.4)',
    accent: '#06b6d4',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function MusicSection() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const artists = [
    {
      name: '方大同',
      nameEn: 'Khalil Fong',
      role: '华语R&B代表人物',
      roleEn: 'Chinese R&B Icon',
      genre: 'R&B / Soul',
      image: '/images/fang.jpeg',
      description: '方大同的音乐充满温度和灵魂，他将传统R&B与现代电子音乐完美融合。从《Love Song》到《春风吹》，每首歌都展现了他对音乐的独特理解。',
      descriptionEn: 'Khalil Fong\'s music is full of warmth and soul, perfectly blending traditional R&B with modern electronic music. From "Love Song" to "Spring Wind", each song showcases his unique understanding.',
      highlights: ['Love Song', '春风吹', 'Soulboy', '好不容易'],
      favoriteAlbum: 'Soulboy (2005)',
      featured: true,
    },
    {
      name: 'Cory Wong',
      nameEn: 'Cory Wong',
      role: '现代Funk吉他大师',
      roleEn: 'Modern Funk Guitar Master',
      genre: 'Funk / Jazz',
      image: '/images/corywong.jpg',
      description: 'Cory Wong的Funk吉他风格充满律动和能量，作为Vulfpeck乐队成员，创造了无数让人忍不住摇摆的音乐。',
      descriptionEn: 'Cory Wong\'s Funk guitar style is full of groove and energy. As a member of Vulfpeck, he creates countless music that makes you want to move.',
      highlights: ['Golden', 'Cosmic Sans', 'The Optimist', 'Meditation'],
      favoriteAlbum: 'Motivational Music (2019)',
      featured: true,
    },
    {
      name: '张悬',
      nameEn: 'Deserts Chang',
      role: '独立音乐创作人',
      roleEn: 'Independent Singer-Songwriter',
      genre: 'Indie / Folk',
      image: '/images/IMG_9636.jpeg',
      description: '张悬的音乐真诚而有深度，她的歌词总是能触及内心最柔软的地方。',
      descriptionEn: 'Deserts Chang\'s music is sincere and profound. Her lyrics always touch the softest part of the heart.',
      highlights: ['宝贝', '关于我爱你', '城市', '南国的孩子'],
      favoriteAlbum: 'City (2009)',
      featured: false,
    },
    {
      name: '孙燕姿',
      nameEn: 'Stefanie Sun',
      role: '华语流行天后',
      roleEn: 'Mandopop Queen',
      genre: 'Pop',
      image: '/images/IMG_9637.jpeg',
      description: '孙燕姿的声音独特而富有辨识度，《天黑黑》《遇见》等经典作品陪伴了一代人的青春。',
      descriptionEn: 'Stefanie Sun\'s voice is unique and highly recognizable. Classics like "It\'s Dark" and "Meet" accompanied a generation\'s youth.',
      highlights: ['天黑黑', '遇见', '我怀念的', '逆光'],
      favoriteAlbum: 'The Moment (2003)',
      featured: false,
    },
    {
      name: 'Stevie Wonder',
      nameEn: 'Stevie Wonder',
      role: '灵魂乐传奇',
      roleEn: 'Soul Music Legend',
      genre: 'Soul / R&B',
      image: '/images/IMG_9639.jpeg',
      description: 'Stevie Wonder是真正的音乐天才，他的作品定义了Soul音乐的黄金时代。',
      descriptionEn: 'Stevie Wonder is a true musical genius whose work defined the golden age of Soul music.',
      highlights: ['Superstition', 'Isn\'t She Lovely', 'Sir Duke'],
      favoriteAlbum: 'Songs in the Key of Life (1976)',
      featured: true,
    },
    {
      name: 'John Mayer',
      nameEn: 'John Mayer',
      role: '布鲁斯摇滚吉他手',
      roleEn: 'Blues Rock Guitarist',
      genre: 'Blues / Rock',
      image: '/images/IMG_9640.jpeg',
      description: 'John Mayer将布鲁斯的深度与流行音乐的可听性完美结合，他的吉他技术出众。',
      descriptionEn: 'John Mayer perfectly combines the depth of blues with the accessibility of pop music.',
      highlights: ['Gravity', 'Slow Dancing in a Burning Room', 'New Light'],
      favoriteAlbum: 'Continuum (2006)',
      featured: false,
    },
  ];

  const getGenreStyle = (genre: string) => genreColors[genre] || genreColors['R&B / Soul'];

  return (
    <section className="min-h-screen bg-zinc-950 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet-500/5 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full filter blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/3 rounded-full filter blur-[200px]" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Hero Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative Element */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
            <div className="flex items-center gap-2">
              <span className="text-amber-500 text-2xl">♪</span>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">
                {language === 'zh' ? '音乐收藏' : 'Music Collection'}
              </span>
              <span className="text-amber-500 text-2xl">♫</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {language === 'zh' ? '音乐' : 'Music'}
            </span>
            <span className="bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              {language === 'zh' ? '品味' : ' Taste'}
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '从灵魂乐的温暖到Funk的律动，探索影响我创作与生活的音乐人'
              : 'From the warmth of Soul to the groove of Funk, explore the artists who inspire my work and life'}
          </p>

          {/* Waveform Decoration */}
          <motion.div
            className="flex items-end justify-center gap-1 mt-10 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-amber-500/20 to-amber-500/60 rounded-full"
                animate={{
                  height: [8, 20 + Math.random() * 20, 8],
                }}
                transition={{
                  duration: 0.8 + Math.random() * 0.4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.05,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Artists Grid - Masonry-like Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {artists.map((artist, index) => {
            const genreStyle = getGenreStyle(artist.genre);
            const isHovered = hoveredIndex === index;

            return (
              <motion.article
                key={index}
                variants={itemVariants}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  artist.featured ? 'md:row-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${genreStyle.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors duration-500 rounded-2xl" />

                {/* Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${genreStyle.glow}, transparent 70%)` }}
                />

                <div className="relative p-6 flex flex-col h-full min-h-[480px]">
                  {/* Vinyl Record */}
                  <div className="relative mx-auto mb-6" style={{ width: '200px', height: '200px' }}>
                    {/* Spinning Vinyl */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: 'linear' }}
                    >
                      {/* Vinyl Grooves */}
                      <div className="absolute inset-0 rounded-full bg-zinc-900"
                        style={{
                          background: `repeating-radial-gradient(circle at center,
                            #18181b 0px, #18181b 2px,
                            #27272a 2px, #27272a 4px,
                            #18181b 4px, #18181b 6px)`,
                        }}
                      />

                      {/* Center Label (Album Art) */}
                      <div className="absolute inset-[25%] rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
                        <Image
                          src={artist.image}
                          alt={language === 'zh' ? artist.name : artist.nameEn}
                          fill
                          className="object-cover"
                          sizes="150px"
                        />
                      </div>

                      {/* Center Hole */}
                      <div className="absolute inset-[47%] rounded-full bg-zinc-950 border border-zinc-700" />
                    </motion.div>

                    {/* Playing Indicator */}
                    <motion.div
                      className="absolute -right-2 top-1/2 -translate-y-1/2 w-16 h-1 origin-left"
                      animate={isHovered ? { rotate: -20 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-zinc-600 to-zinc-700 rounded-full" />
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                        style={{ background: genreStyle.accent }}
                      />
                    </motion.div>

                    {/* Genre Badge */}
                    <div
                      className={`absolute -top-2 -right-2 px-3 py-1.5 rounded-full text-xs font-bold ${genreStyle.text} bg-zinc-900/90 border border-current/20 shadow-lg backdrop-blur-sm z-10`}
                    >
                      {artist.genre}
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-zinc-100 transition-colors">
                        {language === 'zh' ? artist.name : artist.nameEn}
                      </h3>
                      <p className={`text-sm ${genreStyle.text} font-medium`}>
                        {language === 'zh' ? artist.role : artist.roleEn}
                      </p>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                      {language === 'zh' ? artist.description : artist.descriptionEn}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {artist.highlights.slice(0, 3).map((track, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs text-zinc-300 bg-zinc-800/50 rounded-md border border-zinc-700/50 group-hover:border-zinc-600/50 transition-colors"
                          >
                            {track}
                          </span>
                        ))}
                      </div>

                      {/* Favorite Album */}
                      <div className="pt-3 border-t border-zinc-800/50 flex items-center gap-2">
                        <span className="text-xs text-zinc-500">
                          {language === 'zh' ? '推荐专辑' : 'Album'}:
                        </span>
                        <span className={`text-xs font-medium ${genreStyle.text}`}>
                          {artist.favoriteAlbum}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: genreStyle.accent }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <blockquote className="text-zinc-500 italic text-lg font-light">
            "{language === 'zh' ? '音乐是灵魂的语言' : 'Music is the language of the soul'}"
          </blockquote>
          <p className="text-zinc-600 text-sm mt-2">— Khalil</p>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .vinyl-spin {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
