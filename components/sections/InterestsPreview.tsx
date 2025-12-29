'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function InterestsPreview() {
  const { language } = useLanguage();

  const interests = [
    {
      id: 'music',
      icon: '🎵',
      title: '音乐',
      titleEn: 'Music',
      description: '从R&B到Funk，探索我的音乐世界',
      descriptionEn: 'From R&B to Funk, explore my music world',
      longDescription: '音乐是我生活的重要部分。我喜欢方大同温暖的R&B，Cory Wong律动的Funk，张悬真诚的民谣，以及Stevie Wonder永恒的灵魂乐。',
      longDescriptionEn: 'Music is an important part of my life. I love Khalil Fong\'s warm R&B, Cory Wong\'s groovy Funk, Deserts Chang\'s sincere folk, and Stevie Wonder\'s timeless soul music.',
      highlights: ['方大同', 'Cory Wong', '张悬', 'Stevie Wonder'],
      highlightsEn: ['Khalil Fong', 'Cory Wong', 'Deserts Chang', 'Stevie Wonder'],
      count: '6位音乐人',
      countEn: '6 Artists',
      image: '/images/fang.jpeg',
      accentColor: 'from-violet-500 to-purple-600',
      accentBorder: 'group-hover:border-violet-500/30',
      accentText: 'group-hover:text-violet-400',
      link: '/music',
    },
    {
      id: 'movies',
      icon: '🎬',
      title: '电影',
      titleEn: 'Movies',
      description: '用电影观察世界，感受人生百态',
      descriptionEn: 'Observe the world through movies',
      longDescription: '电影让我看到不同的人生可能。从《爱在黎明破晓前》的浪漫对话，到《爱乐之城》追梦的勇气，每部电影都是一次心灵的旅行。',
      longDescriptionEn: 'Movies show me different life possibilities. From the romantic dialogues in Before Sunrise to the courage to chase dreams in La La Land, each film is a spiritual journey.',
      highlights: ['爱在三部曲', '爱乐之城', '天才少女'],
      highlightsEn: ['Before Trilogy', 'La La Land', 'My Brilliant Friend'],
      count: '5部经典作品',
      countEn: '5 Classic Works',
      image: '/images/la-la-land.jpg',
      accentColor: 'from-cyan-500 to-blue-600',
      accentBorder: 'group-hover:border-cyan-500/30',
      accentText: 'group-hover:text-cyan-400',
      link: '/movies',
    },
    {
      id: 'programming',
      icon: '💻',
      title: '编程',
      titleEn: 'Programming',
      description: 'Cardano DApp开发与Web3探索',
      descriptionEn: 'Cardano DApp Development & Web3 Exploration',
      longDescription: '作为Cardano生态的DApp开发者，我专注于构建去中心化应用。从Plutus智能合约到前端集成，我享受将区块链技术变为现实产品的过程。',
      longDescriptionEn: 'As a Cardano DApp developer, I focus on building decentralized applications. From Plutus smart contracts to frontend integration, I enjoy turning blockchain technology into real products.',
      highlights: ['Cardano DApp', 'Plutus智能合约', 'Web3前端', 'Abundra Capital'],
      highlightsEn: ['Cardano DApp', 'Plutus Contracts', 'Web3 Frontend', 'Abundra Capital'],
      count: '3个项目',
      countEn: '3 Projects',
      image: null,
      accentColor: 'from-emerald-500 to-green-600',
      accentBorder: 'group-hover:border-emerald-500/30',
      accentText: 'group-hover:text-emerald-400',
      link: '/programming',
    },
    {
      id: 'investing',
      icon: '📈',
      title: '投资',
      titleEn: 'Investing',
      description: '价值投资理念与长期持有策略',
      descriptionEn: 'Value investing philosophy and long-term holding',
      longDescription: '遵循巴菲特的价值投资理念，我相信长期持有优质资产的力量。投资不仅是财务增长，更是对未来趋势的深度思考。',
      longDescriptionEn: 'Following Buffett\'s value investing philosophy, I believe in the power of long-term holding of quality assets. Investing is not only financial growth, but also deep thinking about future trends.',
      highlights: ['价值投资', 'Web3资产', '美股', '加密货币'],
      highlightsEn: ['Value Investing', 'Web3 Assets', 'US Stocks', 'Crypto'],
      count: '投资组合',
      countEn: 'Portfolio',
      image: null,
      accentColor: 'from-amber-500 to-orange-600',
      accentBorder: 'group-hover:border-amber-500/30',
      accentText: 'group-hover:text-amber-400',
      link: '/investing',
    },
    {
      id: 'reading',
      icon: '📚',
      title: '阅读',
      titleEn: 'Reading',
      description: '通过阅读遇见更广阔的世界',
      descriptionEn: 'Meet a broader world through reading',
      longDescription: '阅读让我与伟大的思想对话。从技术书籍到人文经典，从投资哲学到文学作品，每本书都打开一扇通往新世界的门。',
      longDescriptionEn: 'Reading allows me to dialogue with great minds. From technical books to humanities classics, from investment philosophy to literary works, each book opens a door to a new world.',
      highlights: ['技术成长', '投资哲学', '人文思考', '文学作品'],
      highlightsEn: ['Tech Growth', 'Investment Philosophy', 'Humanities', 'Literature'],
      count: '精选书单',
      countEn: 'Selected Books',
      image: '/images/my-brilliant-friend-hd.jpg',
      accentColor: 'from-rose-500 to-pink-600',
      accentBorder: 'group-hover:border-rose-500/30',
      accentText: 'group-hover:text-rose-400',
      link: '/reading',
    },
  ];

  return (
    <section id="interests" className="py-28 dark-section relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/5 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/5 rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full">
            {language === 'zh' ? '探索' : 'Explore'}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">
              {language === 'zh' ? '关于我' : 'About Me'}
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {language === 'zh'
              ? '探索我的多彩世界，点击了解更多'
              : 'Explore my colorful world, click to learn more'}
          </p>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {interests.map((interest) => (
            <motion.div key={interest.id} variants={cardVariants}>
              <Link href={interest.link} className="block h-full">
                <article
                  className={`group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer glass-card ${interest.accentBorder} transition-all duration-500`}
                >
                  {/* Background Image or Gradient */}
                  {interest.image ? (
                    <>
                      <div className="absolute inset-0">
                        <Image
                          src={interest.image}
                          alt={language === 'zh' ? interest.title : interest.titleEn}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 group-hover:from-zinc-950 group-hover:via-zinc-950/85 transition-all duration-500" />
                    </>
                  ) : (
                    /* Abstract gradient background for cards without images */
                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.accentColor} opacity-10 group-hover:opacity-15 transition-opacity duration-500`} />
                  )}

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6">
                    {/* Top Section */}
                    <div>
                      {/* Icon */}
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                        {interest.icon}
                      </div>

                      {/* Title & Count */}
                      <h3 className={`font-display text-2xl font-bold text-zinc-100 mb-2 ${interest.accentText} transition-colors duration-300`}>
                        {language === 'zh' ? interest.title : interest.titleEn}
                      </h3>
                      <span className="inline-block px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-md border border-zinc-700/50">
                        {language === 'zh' ? interest.count : interest.countEn}
                      </span>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-4">
                      {/* Description */}
                      <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
                        {language === 'zh' ? interest.longDescription : interest.longDescriptionEn}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {(language === 'zh' ? interest.highlights : interest.highlightsEn).slice(0, 3).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs text-zinc-400 bg-zinc-800/60 rounded-md border border-zinc-700/50 backdrop-blur-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* View More Link */}
                      <div className={`flex items-center gap-2 text-sm font-medium text-zinc-400 ${interest.accentText} transition-colors duration-300`}>
                        <span>{language === 'zh' ? '查看详情' : 'View Details'}</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t ${interest.accentColor} blur-3xl opacity-20`} />
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
