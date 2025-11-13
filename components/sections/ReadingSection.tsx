'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function ReadingSection() {
  const { language } = useLanguage();

  const bookCategories = [
    {
      category: '投资与商业',
      categoryEn: 'Investing & Business',
      books: [
        {
          title: '穷查理宝典',
          titleEn: 'Poor Charlie\'s Almanack',
          author: 'Charles Munger',
          review: '查理·芒格的智慧结晶，教会我用多元思维模型看待世界。投资不仅是选股，更是一种跨学科的思维方式。',
          reviewEn: 'Charlie Munger\'s wisdom crystallized. Taught me to view the world through mental models. Investing is not just stock picking, but an interdisciplinary way of thinking.',
          rating: '10/10',
        },
        {
          title: '聪明的投资者',
          titleEn: 'The Intelligent Investor',
          author: 'Benjamin Graham',
          review: '价值投资的圣经，巴菲特称这本书改变了他的一生。教会我区分投资与投机，寻找安全边际。',
          reviewEn: 'The bible of value investing. Buffett said this book changed his life. Taught me to distinguish investment from speculation and find the margin of safety.',
          rating: '9.5/10',
        },
        {
          title: '原则',
          titleEn: 'Principles',
          author: 'Ray Dalio',
          review: '达利欧的生活和工作原则，系统化决策的方法论。将复杂问题简化，用原则指导行动。',
          reviewEn: 'Dalio\'s life and work principles, a systematic decision-making methodology. Simplify complex problems and guide actions with principles.',
          rating: '9/10',
        },
      ],
    },
    {
      category: '技术与创新',
      categoryEn: 'Technology & Innovation',
      books: [
        {
          title: 'Mastering Blockchain',
          titleEn: 'Mastering Blockchain',
          author: 'Imran Bashir',
          review: '深入理解区块链技术的底层原理。从密码学到共识机制，为我的Cardano开发打下坚实基础。',
          reviewEn: 'Deep understanding of blockchain fundamentals. From cryptography to consensus mechanisms, laid a solid foundation for my Cardano development.',
          rating: '9/10',
        },
        {
          title: 'The Innovator\'s Dilemma',
          titleEn: 'The Innovator\'s Dilemma',
          author: 'Clayton Christensen',
          review: '颠覆式创新理论的经典之作。解释了为什么优秀的公司也会失败，对理解科技行业变革很有启发。',
          reviewEn: 'Classic work on disruptive innovation theory. Explains why great companies fail, insightful for understanding tech industry transformation.',
          rating: '8.5/10',
        },
        {
          title: 'Algorithms to Live By',
          titleEn: 'Algorithms to Live By',
          author: 'Brian Christian',
          review: '将计算机科学的算法应用到日常生活决策中。原来算法不仅在代码里，也在生活的每个角落。',
          reviewEn: 'Applying computer science algorithms to daily life decisions. Algorithms are not just in code, but in every corner of life.',
          rating: '8.5/10',
        },
      ],
    },
    {
      category: '自我提升',
      categoryEn: 'Self-Improvement',
      books: [
        {
          title: '认知觉醒',
          titleEn: 'Cognitive Awakening',
          author: '周岭',
          review: '关于自我认知和成长的深度思考。如何打破思维定势，保持持续学习和进步。',
          reviewEn: 'Deep thoughts on self-awareness and growth. How to break mental patterns and maintain continuous learning and progress.',
          rating: '9/10',
        },
        {
          title: '深度工作',
          titleEn: 'Deep Work',
          author: 'Cal Newport',
          review: '在信息爆炸的时代，深度工作能力变得越来越稀缺和珍贵。这本书教我如何培养专注力。',
          reviewEn: 'In the age of information explosion, deep work ability becomes increasingly scarce and valuable. This book taught me how to cultivate focus.',
          rating: '9/10',
        },
        {
          title: 'Atomic Habits',
          titleEn: 'Atomic Habits',
          author: 'James Clear',
          review: '微小习惯的力量。1%的每日进步，一年后将是37倍的提升。习惯塑造人生。',
          reviewEn: 'The power of tiny habits. 1% daily improvement becomes 37x improvement in a year. Habits shape life.',
          rating: '9.5/10',
        },
      ],
    },
    {
      category: '人文思考',
      categoryEn: 'Humanities',
      books: [
        {
          title: '人类简史',
          titleEn: 'Sapiens',
          author: 'Yuval Noah Harari',
          review: '从认知革命到科技革命，重新审视人类历史的宏大叙事。改变了我对历史和未来的认知。',
          reviewEn: 'From cognitive revolution to technological revolution, a grand narrative reexamining human history. Changed my understanding of history and future.',
          rating: '9.5/10',
        },
        {
          title: '思考，快与慢',
          titleEn: 'Thinking, Fast and Slow',
          author: 'Daniel Kahneman',
          review: '诺贝尔经济学奖得主卡尼曼的经典之作。深入理解人类决策的两个系统，避免认知偏差。',
          reviewEn: 'Nobel laureate Kahneman\'s classic. Deep understanding of the two systems of human decision-making, avoiding cognitive biases.',
          rating: '9/10',
        },
        {
          title: '未来简史',
          titleEn: 'Homo Deus',
          author: 'Yuval Noah Harari',
          review: '当AI和生物技术改变人类，我们将走向何方？对未来的深刻洞见。',
          reviewEn: 'Where will we go when AI and biotechnology transform humanity? Profound insights into the future.',
          rating: '9/10',
        },
      ],
    },
  ];

  const readingGoals = [
    {
      goal: '每月至少读完2本书',
      goalEn: 'Read at least 2 books per month',
      progress: 75,
    },
    {
      goal: '技术类与人文类书籍1:1平衡',
      goalEn: 'Balance tech and humanities books 1:1',
      progress: 80,
    },
    {
      goal: '写读书笔记，内化知识',
      goalEn: 'Write reading notes to internalize knowledge',
      progress: 60,
    },
  ];

  return (
    <section id="reading" className="py-24 dark-section">
      <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '阅读书单' : 'Reading List'}
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '阅读让我与伟大的思想对话，每本书都是通往新世界的一扇门'
              : 'Reading allows me to dialogue with great minds. Each book is a door to a new world'}
          </p>
        </div>

        {/* Reading Quote */}
        <div className="glass-card rounded-xl p-6 border-l-4 border-green-500/50">
          <blockquote className="text-lg md:text-xl text-gray-50 italic text-center leading-relaxed">
            {language === 'zh'
              ? '"读书不是为了雄辩和驳斥，也不是为了轻信和盲从，而是为了思考和权衡"'
              : '"Reading is not for eloquence and refutation, nor for credulity and blind obedience, but for thinking and weighing"'}
          </blockquote>
          <p className="text-sm text-gray-400 mt-3 text-center">— Francis Bacon</p>
        </div>

        {/* Books by Category */}
        {bookCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-2xl font-bold text-white mb-6">
              {language === 'zh' ? category.category : category.categoryEn}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.books.map((book, bookIndex) => (
                <div
                  key={bookIndex}
                  className="glass-card rounded-xl p-6 animate-fade-in transition-all duration-500"
                  style={{ animationDelay: `${bookIndex * 80}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {language === 'zh' ? book.title : book.titleEn}
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                    </div>
                    <div className="flex-shrink-0 w-12 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded flex items-center justify-center text-2xl ring-2 ring-green-500/30">
                      📖
                    </div>
                  </div>

                  <p className="text-sm text-gray-50 leading-relaxed mb-3">
                    {language === 'zh' ? book.review : book.reviewEn}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/20">
                    <span className="text-xs text-gray-400 font-medium uppercase">
                      {language === 'zh' ? '评分' : 'Rating'}
                    </span>
                    <span className="text-sm font-bold text-yellow-400">{book.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Reading Goals */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '阅读目标' : 'Reading Goals'}
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {readingGoals.map((goal, index) => (
              <div key={index} className="glass-card rounded-xl p-6 animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">
                    {language === 'zh' ? goal.goal : goal.goalEn}
                  </h4>
                  <span className="text-sm font-bold text-gray-50">{goal.progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
