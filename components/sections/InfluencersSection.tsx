'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function InfluencersSection() {
  const { language } = useLanguage();

  const influencers = [
    {
      name: 'Elon Musk',
      nameZh: '埃隆·马斯克',
      title: '科技创新者',
      titleEn: 'Tech Innovator',
      book: '《马斯克传》',
      bookEn: 'Elon Musk Biography',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
      influence: '马斯克让我看到了什么是真正的第一性原理思维。他不被传统束缚，敢于挑战不可能。从PayPal到特斯拉、SpaceX，他用行动证明：只要足够坚持和创新，就能改变世界。他的"Make Life Multiplanetary"愿景激励我在区块链领域追求更大的目标。',
      influenceEn: 'Musk showed me what true first principles thinking means. He\'s not bound by convention and dares to challenge the impossible. From PayPal to Tesla and SpaceX, he proves that with enough persistence and innovation, you can change the world. His "Make Life Multiplanetary" vision inspires me to pursue bigger goals in blockchain.',
      quote: '"When something is important enough, you do it even if the odds are not in your favor."',
      tags: ['第一性原理', '创新精神', '火星梦想'],
      tagsEn: ['First Principles', 'Innovation', 'Mars Vision'],
    },
    {
      name: 'Sam Altman',
      nameZh: '山姆·奥特曼',
      title: 'AI领域先驱',
      titleEn: 'AI Pioneer',
      book: '《山姆·奥特曼传记》',
      bookEn: 'Sam Altman Biography',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Sam_Altman_TechCrunch_2019.jpg',
      influence: '奥特曼的故事让我理解了AI时代的机遇与挑战。他在Y Combinator的经历教会我如何识别和支持创新项目，而OpenAI的发展让我看到技术如何真正改变人类未来。他对AGI的思考和对技术伦理的重视，影响了我对Web3和AI结合的看法。',
      influenceEn: 'Altman\'s story helped me understand the opportunities and challenges of the AI era. His experience at Y Combinator taught me how to identify and support innovative projects, while OpenAI\'s development showed me how technology can truly change humanity\'s future. His thoughts on AGI and emphasis on tech ethics influenced my views on Web3 and AI integration.',
      quote: '"The hard part of building a company is building the product. The really hard part is building the team."',
      tags: ['AI思考', '创业智慧', 'AGI愿景'],
      tagsEn: ['AI Thinking', 'Startup Wisdom', 'AGI Vision'],
    },
    {
      name: 'Jensen Huang',
      nameZh: '黄仁勋',
      title: 'GPU革命领导者',
      titleEn: 'GPU Revolution Leader',
      book: '《黄仁勋传记》',
      bookEn: 'Jensen Huang Biography',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Jensen_Huang_Nvidia_CEO.jpg',
      influence: '黄仁勋30年如一日地坚持GPU技术，最终引领了AI革命。他的故事告诉我：技术积累需要时间，保持专注和耐心至关重要。NVIDIA从游戏显卡到AI芯片的转型，让我明白技术的价值在于找到正确的应用场景。他的"加速计算"理念启发了我对区块链性能优化的思考。',
      influenceEn: 'Huang\'s 30-year dedication to GPU technology ultimately led the AI revolution. His story tells me: technical accumulation takes time, and maintaining focus and patience is crucial. NVIDIA\'s transformation from gaming graphics to AI chips taught me that technology\'s value lies in finding the right application scenarios. His "accelerated computing" concept inspired my thinking on blockchain performance optimization.',
      quote: '"The more you buy, the more you save." (On AI chips)',
      tags: ['长期主义', '技术积累', 'AI基础设施'],
      tagsEn: ['Long-termism', 'Tech Accumulation', 'AI Infrastructure'],
    },
    {
      name: 'Warren Buffett',
      nameZh: '沃伦·巴菲特',
      title: '投资大师',
      titleEn: 'Investment Master',
      book: '《巴菲特传》',
      bookEn: 'The Snowball: Warren Buffett',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Warren_Buffett_KU_Visit.jpg',
      influence: '巴菲特的价值投资哲学深刻影响了我的投资观和人生观。他教会我：投资的本质是买入优秀企业的一部分，而不是赌博。他的"滚雪球"理论让我理解复利的力量和长期持有的重要性。更重要的是，他的生活方式证明了：真正的富足不在于拥有多少，而在于简单、专注和做自己热爱的事。',
      influenceEn: 'Buffett\'s value investing philosophy profoundly influenced my investment and life philosophy. He taught me: the essence of investing is buying a piece of excellent companies, not gambling. His "snowball" theory made me understand the power of compound interest and importance of long-term holding. More importantly, his lifestyle proves that: true wealth is not about how much you have, but simplicity, focus, and doing what you love.',
      quote: '"Price is what you pay. Value is what you get."',
      tags: ['价值投资', '长期持有', '复利思维'],
      tagsEn: ['Value Investing', 'Long-term Hold', 'Compound Thinking'],
    },
    {
      name: 'Charlie Munger',
      nameZh: '查理·芒格',
      title: '智慧导师',
      titleEn: 'Wisdom Mentor',
      book: '《穷查理宝典》',
      bookEn: 'Poor Charlie\'s Almanack',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Charlie_Munger_2010.jpg',
      influence: '芒格的多元思维模型彻底改变了我的思考方式。他教会我用跨学科的视角看待问题，从心理学、经济学、数学到物理学，建立完整的知识体系。他的"格栅理论"让我明白：真正的智慧来自于将不同领域的知识融会贯通。他对阅读的重视、对错误的坦诚，以及"要得到某样东西最好的方法，是让自己配得上它"的人生哲学，成为我终身学习的指南。',
      influenceEn: 'Munger\'s mental models completely changed my way of thinking. He taught me to view problems from interdisciplinary perspectives, from psychology, economics, mathematics to physics, building a complete knowledge system. His "latticework theory" made me understand: true wisdom comes from integrating knowledge from different fields. His emphasis on reading, honesty about mistakes, and life philosophy of "the best way to get what you want is to deserve what you want" became my lifelong learning guide.',
      quote: '"In my whole life, I have known no wise people who didn\'t read all the time — none, zero."',
      tags: ['多元思维', '跨学科学习', '终身阅读'],
      tagsEn: ['Mental Models', 'Interdisciplinary Learning', 'Lifelong Reading'],
    },
    {
      name: 'Friedrich Nietzsche',
      nameZh: '弗里德里希·尼采',
      title: '哲学家',
      titleEn: 'Philosopher',
      book: '《查拉图斯特拉如是说》',
      bookEn: 'Thus Spoke Zarathustra',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg',
      influence: '尼采的"超人哲学"和"永恒轮回"思想深深震撼了我。他教会我：不要被传统道德束缚，要有勇气创造自己的价值观。"上帝已死"不是虚无主义，而是号召我们成为自己命运的主人。他的思想让我在面对困难时更加坚韧，在选择时更加自信。',
      influenceEn: 'Nietzsche\'s "Übermensch philosophy" and "eternal recurrence" deeply shocked me. He taught me: don\'t be bound by traditional morality, have the courage to create your own values. "God is dead" is not nihilism, but a call to become masters of our own destiny. His thoughts made me more resilient in facing difficulties and more confident in making choices.',
      quote: '"He who has a why to live can bear almost any how."',
      tags: ['超人哲学', '自我超越', '价值创造'],
      tagsEn: ['Übermensch', 'Self-transcendence', 'Value Creation'],
    },
    {
      name: 'Stefan Zweig',
      nameZh: '斯蒂芬·茨威格',
      title: '作家、传记家',
      titleEn: 'Writer & Biographer',
      book: '《昨日的世界》',
      bookEn: 'The World of Yesterday',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Stefan_Zweig_%281900%29.jpg',
      influence: '茨威格的《昨日的世界》让我看到了一个时代的兴衰。他对一战前欧洲黄金时代的回忆，以及对战争摧毁文明的哀叹，让我深刻理解和平与文明的珍贵。他细腻的笔触和人文关怀，影响了我对世界的观察方式。他的命运也提醒我：在时代巨变中，个人如何找到自己的位置。',
      influenceEn: 'Zweig\'s "The World of Yesterday" showed me the rise and fall of an era. His memories of Europe\'s golden age before WWI and lament over war\'s destruction of civilization made me deeply understand the preciousness of peace and civilization. His delicate writing and humanistic care influenced how I observe the world. His fate also reminds me: in times of great change, how does one find their place.',
      quote: '"Only the person who has experienced light and darkness, war and peace, rise and fall, only that person has truly experienced life."',
      tags: ['人文关怀', '历史反思', '时代观察'],
      tagsEn: ['Humanism', 'Historical Reflection', 'Era Observation'],
    },
    {
      name: 'Hermann Hesse',
      nameZh: '赫尔曼·黑塞',
      title: '作家、诗人',
      titleEn: 'Writer & Poet',
      book: '《在轮下》',
      bookEn: 'Beneath the Wheel',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Hermann_Hesse_2.jpg',
      influence: '黑塞的《在轮下》描写了教育制度对年轻灵魂的压迫，让我反思现代教育和社会对个人的塑造。主人公汉斯的悲剧提醒我：不要为了迎合他人期待而失去自我。黑塞的作品教会我倾听内心的声音，追求真正的自我实现，而不是外在的成功。',
      influenceEn: 'Hesse\'s "Beneath the Wheel" depicts the oppression of young souls by the education system, making me reflect on modern education and society\'s shaping of individuals. The protagonist Hans\'s tragedy reminds me: don\'t lose yourself to meet others\' expectations. Hesse\'s work taught me to listen to my inner voice and pursue true self-realization, not external success.',
      quote: '"Some of us think holding on makes us strong, but sometimes it is letting go."',
      tags: ['自我探索', '教育反思', '精神自由'],
      tagsEn: ['Self-exploration', 'Education Reflection', 'Spiritual Freedom'],
    },
    {
      name: 'Haruki Murakami',
      nameZh: '村上春树',
      title: '作家',
      titleEn: 'Writer',
      book: '《舞！舞！舞！》',
      bookEn: 'Dance Dance Dance',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Murakami_Haruki_2018.jpg',
      influence: '村上春树的《舞！舞！舞！》用魔幻现实主义的方式探讨了现代都市人的孤独与寻找。主人公在虚幻与现实之间游走，寻找失去的联结。村上的文字让我理解：生活本身就是一场舞蹈，即使孤独，也要继续跳下去。他的作品教会我用更诗意的方式看待生活的荒诞。',
      influenceEn: 'Murakami\'s "Dance Dance Dance" explores modern urban loneliness and searching through magical realism. The protagonist wanders between illusion and reality, seeking lost connections. Murakami\'s words made me understand: life itself is a dance, and even in loneliness, we must keep dancing. His work taught me to view life\'s absurdity in a more poetic way.',
      quote: '"Dance," said the Sheep Man. "As long as the music plays. Dance."',
      tags: ['都市孤独', '魔幻现实', '生活哲学'],
      tagsEn: ['Urban Solitude', 'Magical Realism', 'Life Philosophy'],
    },
  ];

  return (
    <section id="influencers" className="py-24 dark-section">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '影响我的人' : 'People Who Influenced Me'}
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '这些人和他们的作品深刻影响了我的思考方式、价值观和人生选择'
              : 'These people and their works profoundly influenced my way of thinking, values, and life choices'}
          </p>
        </div>

        {/* Influencers Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {influencers.map((person, index) => (
            <div
              key={index}
              className="glass-card influencer-card rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex gap-4 mb-4">
                {/* Avatar */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden ring-2 ring-orange-500/30 bg-slate-800 avatar-ring image-zoom">
                  <Image
                    src={person.image}
                    alt={language === 'zh' ? person.nameZh : person.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {language === 'zh' ? person.nameZh : person.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {language === 'zh' ? person.title : person.titleEn}
                  </p>
                  <span className="inline-block px-3 py-1 bg-white/10 text-gray-100 text-xs rounded-full border border-white/20">
                    📚 {language === 'zh' ? person.book : person.bookEn}
                  </span>
                </div>
              </div>

              {/* Influence */}
              <p className="text-sm text-gray-100 leading-relaxed mb-4">
                {language === 'zh' ? person.influence : person.influenceEn}
              </p>

              {/* Quote */}
              <div className="bg-white/5 p-4 rounded-lg border-l-4 border-orange-500/50 mb-4">
                <p className="text-xs text-gray-100 italic leading-relaxed">
                  {person.quote}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {(language === 'zh' ? person.tags : person.tagsEn).map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10 tag-item cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

