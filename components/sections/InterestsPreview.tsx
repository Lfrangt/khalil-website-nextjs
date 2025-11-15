'use client';

import Card from '@/components/ui/Card';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

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
      gradient: 'from-purple-600 to-pink-600',
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
      gradient: 'from-blue-600 to-cyan-600',
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
      gradient: 'from-green-600 to-emerald-600',
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
      gradient: 'from-yellow-600 to-orange-600',
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
      gradient: 'from-indigo-600 to-violet-600',
      link: '/reading',
    },
  ];

  return (
    <section id="interests" className="py-24 dark-section relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/12 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {language === 'zh' ? '关于我' : 'About Me'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'zh'
              ? '探索我的多彩世界，点击了解更多'
              : 'Explore my colorful world, click to learn more'}
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <Link key={interest.id} href={interest.link}>
              <div
                className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer animate-fade-in transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image or Gradient */}
                {interest.image ? (
                  <>
                    <div className="absolute inset-0">
                      <Image
                        src={interest.image}
                        alt={language === 'zh' ? interest.title : interest.titleEn}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {/* Gradient Overlay for images */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-500"></div>
                  </>
                ) : (
                  /* Pure gradient background for cards without images */
                  <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-500`}></div>
                )}

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  {/* Top: Icon and Title */}
                  <div>
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform filter drop-shadow-lg">
                      {interest.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {language === 'zh' ? interest.title : interest.titleEn}
                    </h3>
                    <p className="text-sm text-gray-200 font-medium mb-4">
                      {language === 'zh' ? interest.count : interest.countEn}
                    </p>
                  </div>

                  {/* Bottom: Description and Tags */}
                  <div className="space-y-4">
                    <p className="text-sm text-gray-100 leading-relaxed">
                      {language === 'zh' ? interest.longDescription : interest.longDescriptionEn}
                    </p>

                    {/* Highlights as tags */}
                    <div className="flex flex-wrap gap-2">
                      {(language === 'zh' ? interest.highlights : interest.highlightsEn).slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* View more link */}
                    <div className="flex items-center gap-1 text-sm text-white group-hover:text-green-400 font-medium transition-colors">
                      {language === 'zh' ? '查看详情' : 'View Details'}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
