'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function InfluencersPreview() {
  const { language } = useLanguage();

  const influencers = [
    {
      name: 'Elon Musk',
      nameZh: '埃隆·马斯克',
      title: '科技创新者',
      titleEn: 'Tech Innovator',
      book: '《马斯克传》',
      bookEn: 'Elon Musk Biography',
      image: '/images/influencers/elon-musk.png',
      influence: '第一性原理思维，敢于挑战不可能，用行动改变世界',
      influenceEn: 'First principles thinking, daring to challenge the impossible, changing the world through action',
      tags: ['第一性原理', '创新精神'],
      tagsEn: ['First Principles', 'Innovation'],
    },
    {
      name: 'Friedrich Nietzsche',
      nameZh: '弗里德里希·尼采',
      title: '哲学家',
      titleEn: 'Philosopher',
      book: '《查拉图斯特拉如是说》',
      bookEn: 'Thus Spoke Zarathustra',
      image: '/images/influencers/friedrich-nietzsche.png',
      influence: '超人哲学和永恒轮回，教会我创造自己的价值观，成为命运的主人',
      influenceEn: 'Übermensch philosophy and eternal recurrence, taught me to create my own values and become master of my destiny',
      tags: ['超人哲学', '自我超越'],
      tagsEn: ['Übermensch', 'Self-transcendence'],
    },
    {
      name: 'Charlie Munger',
      nameZh: '查理·芒格',
      title: '智慧导师',
      titleEn: 'Wisdom Mentor',
      book: '《穷查理宝典》',
      bookEn: 'Poor Charlie\'s Almanack',
      image: '/images/influencers/charlie-munger.png',
      influence: '多元思维模型改变了我的思考方式，教会我跨学科学习和终身阅读',
      influenceEn: 'Mental models changed my way of thinking, taught me interdisciplinary learning and lifelong reading',
      tags: ['多元思维', '终身阅读'],
      tagsEn: ['Mental Models', 'Lifelong Reading'],
    },
  ];

  return (
    <section className="py-24 dark-section">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {language === 'zh' ? '影响我的人' : 'People Who Influenced Me'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'zh'
              ? '这些人和他们的作品深刻影响了我的思考方式和人生选择'
              : 'These people and their works profoundly influenced my thinking and life choices'}
          </p>
        </div>

        {/* Influencers Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {influencers.map((person, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl p-6 animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-orange-500/30 bg-slate-800 transition-all duration-300 group-hover:ring-4 group-hover:ring-orange-500/50 group-hover:scale-110">
                <Image
                  src={person.image}
                  alt={language === 'zh' ? person.nameZh : person.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Name & Title */}
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-white mb-1 transition-colors duration-300 group-hover:text-orange-400">
                  {language === 'zh' ? person.nameZh : person.name}
                </h3>
                <p className="text-xs text-gray-400 mb-2">
                  {language === 'zh' ? person.title : person.titleEn}
                </p>
                <span className="inline-block px-2 py-1 bg-white/10 text-gray-100 text-xs rounded-full border border-white/20 transition-all duration-300 group-hover:bg-orange-500/20 group-hover:border-orange-500/40">
                  📚 {language === 'zh' ? person.book : person.bookEn}
                </span>
              </div>

              {/* Influence */}
              <p className="text-sm text-gray-100 leading-relaxed mb-4 text-center">
                {language === 'zh' ? person.influence : person.influenceEn}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {(language === 'zh' ? person.tags : person.tagsEn).map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10 transition-all duration-200 hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-500/40 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <Link
            href="/influencers"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 text-white rounded-lg transition-all text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105"
          >
            {language === 'zh' ? '查看更多影响我的人' : 'View More Influencers'}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

