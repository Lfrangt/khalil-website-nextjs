'use client';

import Card from '@/components/ui/Card';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-24 dark-section relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/8 rounded-full filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {language === 'zh' ? '关于我' : 'About Me'}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {language === 'zh'
              ? '我是一名充满热情的 Cardano DApp 开发者和计算机科学专业的学生'
              : 'I am a passionate Cardano DApp developer and Computer Science student'}
          </p>
        </div>

        {/* Bio Cards Grid - Clean solid cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up delay-200">
          {/* Card 1: DApp Developer */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors duration-300">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {language === 'zh' ? 'DApp 开发' : 'DApp Developer'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'zh'
                ? '专注于Cardano生态的去中心化应用开发'
                : 'Focus on Cardano ecosystem DApp development'}
            </p>
          </div>

          {/* Card 2: Student */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors duration-300">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {language === 'zh' ? '计算机科学学生' : 'CS Student'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'zh'
                ? '在兰加拉学院学习计算机科学'
                : 'Studying CS at Langara College'}
            </p>
          </div>

          {/* Card 3: Location */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors duration-300">
            <div className="text-3xl mb-3">🌏</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {language === 'zh' ? '温州 → 温哥华' : 'Wenzhou → Vancouver'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'zh'
                ? '来自温州，现居温哥华'
                : 'From Wenzhou, now in Vancouver'}
            </p>
          </div>

          {/* Card 4: Blockchain */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors duration-300">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {language === 'zh' ? '区块链学习' : 'Blockchain Learning'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'zh'
                ? '学习智能合约与Plutus、Lucid开发'
                : 'Learning smart contracts, Plutus & Lucid'}
            </p>
          </div>

          {/* Card 5: Music */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors duration-300">
            <div className="text-3xl mb-3">🎸</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {language === 'zh' ? '音乐爱好' : 'Music Lover'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'zh'
                ? '电吉他和钢琴，R&B和Funk'
                : 'Electric guitar & piano, R&B & Funk'}
            </p>
          </div>

          {/* Card 6: Entrepreneur */}
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors duration-300">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Abundra Capital
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'zh'
                ? '探索AI与区块链创新'
                : 'Exploring AI & blockchain innovation'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
