'use client';

import Card from '@/components/ui/Card';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'zh' ? '关于我' : 'About Me'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'zh'
              ? '我是一名充满热情的 Cardano DApp 开发者和计算机科学专业的学生'
              : 'I am a passionate Cardano DApp developer and Computer Science student'}
          </p>
        </div>

        {/* Bio Card - More detailed */}
        <Card>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              {language === 'zh' ? (
                <>
                  ⚡ 作为一名 <strong>Cardano生态DApp开发者</strong>，我专注于构建去中心化应用，探索区块链技术如何改变世界。从智能合约到DApp前端，我享受将想法变为现实的过程。
                </>
              ) : (
                <>
                  ⚡ As a <strong>Cardano DApp Developer</strong>, I focus on building decentralized applications and exploring how blockchain technology can change the world.
                </>
              )}
            </p>
            <p>
              {language === 'zh' ? (
                <>
                  🎓 目前在 <strong>兰加拉学院（Langara College）</strong>攻读计算机科学专业，在学习中不断提升技术能力，为未来的职业道路打下坚实基础。
                </>
              ) : (
                <>
                  🎓 Currently studying <strong>Computer Science at Langara College</strong>, constantly improving technical skills and building a solid foundation for my career.
                </>
              )}
            </p>
            <p>
              {language === 'zh' ? (
                <>
                  🌏 来自中国<strong>温州</strong>，现居<strong>温哥华</strong>。跨文化的生活经历让我拥有更开阔的视野和包容的心态。
                </>
              ) : (
                <>
                  🌏 From <strong>Wenzhou, China</strong>, now living in <strong>Vancouver</strong>. Cross-cultural experiences give me a broader perspective and inclusive mindset.
                </>
              )}
            </p>
            <p>
              {language === 'zh' ? (
                <>
                  🔗 精通<strong>区块链技术和智能合约开发</strong>，特别是Cardano生态系统。深入研究Plutus、Lucid等开发工具，构建安全高效的去中心化应用。
                </>
              ) : (
                <>
                  🔗 Proficient in <strong>blockchain technology and smart contract development</strong>, especially the Cardano ecosystem. Deep research in Plutus, Lucid and other tools.
                </>
              )}
            </p>
            <p>
              {language === 'zh' ? (
                <>
                  🎸 <strong>音乐爱好者</strong>，擅长<strong>电吉他和钢琴</strong>。音乐让我在技术之外找到另一种表达自我的方式，从R&B到Funk，音乐是我生活的重要部分。
                </>
              ) : (
                <>
                  🎸 <strong>Music enthusiast</strong>, proficient in <strong>electric guitar and piano</strong>. Music is another way of self-expression beyond technology.
                </>
              )}
            </p>
            <p>
              {language === 'zh' ? (
                <>
                  🚀 创立了 <strong>Abundra Capital</strong>，专注于AI、区块链和数字资产的创新项目。通过整合前沿技术，探索未来金融基础设施的可能性。
                </>
              ) : (
                <>
                  🚀 Founded <strong>Abundra Capital</strong>, focusing on AI, blockchain and digital assets innovation. Exploring future financial infrastructure possibilities.
                </>
              )}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
