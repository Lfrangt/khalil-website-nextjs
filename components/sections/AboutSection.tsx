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

        {/* Bio Card - Modern glass card */}
        <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 animate-slide-up delay-200">
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <p className="text-lg group hover:text-white transition-colors">
              {language === 'zh' ? (
                <>
                  <span className="text-2xl mr-2">⚡</span>
                  作为一名 <strong className="text-orange-400 group-hover:text-orange-300">Cardano生态DApp开发者</strong>，我专注于构建去中心化应用，探索区块链技术如何改变世界。从智能合约到DApp前端，我享受将想法变为现实的过程。
                </>
              ) : (
                <>
                  <span className="text-2xl mr-2">⚡</span>
                  As a <strong className="text-orange-400 group-hover:text-orange-300">Cardano DApp Developer</strong>, I focus on building decentralized applications and exploring how blockchain technology can change the world.
                </>
              )}
            </p>
            <p className="group hover:text-white transition-colors">
              {language === 'zh' ? (
                <>
                  <span className="text-2xl mr-2">🎓</span>
                  目前在 <strong className="text-cyan-400 group-hover:text-cyan-300">兰加拉学院（Langara College）</strong>攻读计算机科学专业，在学习中不断提升技术能力，为未来的职业道路打下坚实基础。
                </>
              ) : (
                <>
                  <span className="text-2xl mr-2">🎓</span>
                  Currently studying <strong className="text-cyan-400 group-hover:text-cyan-300">Computer Science at Langara College</strong>, constantly improving technical skills and building a solid foundation for my career.
                </>
              )}
            </p>
            <p className="group hover:text-white transition-colors">
              {language === 'zh' ? (
                <>
                  <span className="text-2xl mr-2">🌏</span>
                  来自中国<strong className="text-pink-400 group-hover:text-pink-300">温州</strong>，现居<strong className="text-pink-400 group-hover:text-pink-300">温哥华</strong>。跨文化的生活经历让我拥有更开阔的视野和包容的心态。
                </>
              ) : (
                <>
                  <span className="text-2xl mr-2">🌏</span>
                  From <strong className="text-pink-400 group-hover:text-pink-300">Wenzhou, China</strong>, now living in <strong className="text-pink-400 group-hover:text-pink-300">Vancouver</strong>. Cross-cultural experiences give me a broader perspective and inclusive mindset.
                </>
              )}
            </p>
            <p className="group hover:text-white transition-colors">
              {language === 'zh' ? (
                <>
                  <span className="text-2xl mr-2">🔗</span>
                  精通<strong className="text-purple-400 group-hover:text-purple-300">区块链技术和智能合约开发</strong>，特别是Cardano生态系统。深入研究Plutus、Lucid等开发工具，构建安全高效的去中心化应用。
                </>
              ) : (
                <>
                  <span className="text-2xl mr-2">🔗</span>
                  Proficient in <strong className="text-purple-400 group-hover:text-purple-300">blockchain technology and smart contract development</strong>, especially the Cardano ecosystem. Deep research in Plutus, Lucid and other tools.
                </>
              )}
            </p>
            <p className="group hover:text-white transition-colors">
              {language === 'zh' ? (
                <>
                  <span className="text-2xl mr-2">🎸</span>
                  <strong className="text-pink-400 group-hover:text-pink-300">音乐爱好者</strong>，擅长<strong className="text-pink-400 group-hover:text-pink-300">电吉他和钢琴</strong>。音乐让我在技术之外找到另一种表达自我的方式，从R&B到Funk，音乐是我生活的重要部分。
                </>
              ) : (
                <>
                  <span className="text-2xl mr-2">🎸</span>
                  <strong className="text-pink-400 group-hover:text-pink-300">Music enthusiast</strong>, proficient in <strong className="text-pink-400 group-hover:text-pink-300">electric guitar and piano</strong>. Music is another way of self-expression beyond technology.
                </>
              )}
            </p>
            <p className="group hover:text-white transition-colors">
              {language === 'zh' ? (
                <>
                  <span className="text-2xl mr-2">🚀</span>
                  创立了 <strong className="text-orange-400 group-hover:text-orange-300">Abundra Capital</strong>，专注于AI、区块链和数字资产的创新项目。通过整合前沿技术，探索未来金融基础设施的可能性。
                </>
              ) : (
                <>
                  <span className="text-2xl mr-2">🚀</span>
                  Founded <strong className="text-orange-400 group-hover:text-orange-300">Abundra Capital</strong>, focusing on AI, blockchain and digital assets innovation. Exploring future financial infrastructure possibilities.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
