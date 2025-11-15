'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function ReadingSection() {
  const { language } = useLanguage();

  const books = [
    {
      title: '尼采诗集',
      titleEn: 'Nietzsche Poetry',
      author: '弗里德里希·尼采',
      authorEn: 'Friedrich Nietzsche',
      cover: '/images/books/huang-renxun.JPG',
      review: '尼采的诗歌展现了他对生命、孤独和超越的深刻思考，让我看到哲学的另一面。',
      reviewEn: 'Nietzsche\'s poetry reveals his profound thoughts on life, solitude, and transcendence, showing me another side of philosophy.',
      category: '哲学',
      categoryEn: 'Philosophy',
    },
    {
      title: '美国宪政历程',
      titleEn: '25 Landmark Cases',
      author: '任东来等',
      authorEn: 'Ren Donglai',
      cover: '/images/books/elon-musk.JPG',
      review: '通过25个司法案例深入理解美国宪政精神，法治如何塑造现代社会。',
      reviewEn: 'Understanding American constitutional spirit through 25 judicial cases, how rule of law shapes modern society.',
      category: '法律',
      categoryEn: 'Law',
    },
    {
      title: '查拉图斯特拉如是说',
      titleEn: 'Thus Spoke Zarathustra',
      author: '弗里德里希·尼采',
      authorEn: 'Friedrich Nietzsche',
      cover: '/images/books/sam-altman.JPG',
      review: '尼采的超人哲学和永恒轮回深深震撼了我。教会我创造自己的价值观，成为命运的主人。',
      reviewEn: 'Nietzsche\'s Übermensch philosophy and eternal recurrence deeply shocked me. Taught me to create my own values and become master of my destiny.',
      category: '哲学',
      categoryEn: 'Philosophy',
    },
    {
      title: '昨日的世界',
      titleEn: 'The World of Yesterday',
      author: '斯蒂芬·茨威格',
      authorEn: 'Stefan Zweig',
      cover: '/images/books/usa-constitution.JPG',
      review: '茨威格对一战前欧洲黄金时代的回忆，让我深刻理解和平与文明的珍贵。',
      reviewEn: 'Zweig\'s memories of Europe\'s golden age before WWI made me deeply understand the preciousness of peace and civilization.',
      category: '历史',
      categoryEn: 'History',
    },
    {
      title: '埃隆·马斯克传',
      titleEn: 'Elon Musk',
      author: '沃尔特·艾萨克森',
      authorEn: 'Walter Isaacson',
      cover: '/images/books/zarathustra.jpg',
      review: '深入了解马斯克的思维方式和第一性原理。他敢于挑战不可能，用行动改变世界的精神深深影响了我。',
      reviewEn: 'Deep dive into Musk\'s thinking and first principles. His courage to challenge the impossible and change the world through action profoundly influenced me.',
      category: '传记',
      categoryEn: 'Biography',
    },
    {
      title: '黄仁勋传记',
      titleEn: 'Jensen Huang Biography',
      author: 'Stephen Witt',
      authorEn: 'Stephen Witt',
      cover: '/images/books/yesterday-world.jpg',
      review: '30年坚持GPU技术，最终引领AI革命。他的故事告诉我技术积累需要时间和耐心。',
      reviewEn: '30-year dedication to GPU technology that ultimately led the AI revolution. His story taught me technical accumulation requires time and patience.',
      category: '传记',
      categoryEn: 'Biography',
    },
    {
      title: '在轮下',
      titleEn: 'Beneath the Wheel',
      author: '赫尔曼·黑塞',
      authorEn: 'Hermann Hesse',
      cover: '/images/books/beneath-wheel.JPG',
      review: '黑塞描写的教育压迫让我反思现代教育。不要为了迎合他人期待而失去自我。',
      reviewEn: 'Hesse\'s depiction of educational oppression made me reflect on modern education. Don\'t lose yourself to meet others\' expectations.',
      category: '小说',
      categoryEn: 'Novel',
    },
    {
      title: '奥尔特曼传记',
      titleEn: 'Sam Altman',
      author: '周恒星',
      authorEn: 'Zhou Hengxing',
      cover: '/images/books/nietzsche-poetry.jpg',
      review: 'AI时代的先驱，从Y Combinator到OpenAI的历程让我看到了技术如何真正改变人类未来。',
      reviewEn: 'AI era pioneer. His journey from Y Combinator to OpenAI showed me how technology can truly transform humanity\'s future.',
      category: '传记',
      categoryEn: 'Biography',
    },
    {
      title: '舞！舞！舞！',
      titleEn: 'Dance Dance Dance',
      author: '村上春树',
      authorEn: 'Haruki Murakami',
      cover: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Dance_Dance_Dance_Murakami.jpg',
      review: '村上春树用魔幻现实主义探讨现代都市人的孤独。生活本身就是一场舞蹈，即使孤独，也要继续跳下去。',
      reviewEn: 'Murakami explores modern urban loneliness through magical realism. Life itself is a dance, and even in loneliness, we must keep dancing.',
      category: '小说',
      categoryEn: 'Novel',
    },
    {
      title: '1984',
      titleEn: '1984',
      author: '乔治·奥威尔',
      authorEn: 'George Orwell',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/1984first.jpg',
      review: '奥威尔对极权主义的深刻警示。"老大哥在看着你"这句话让我时刻保持对权力的警惕。',
      reviewEn: 'Orwell\'s profound warning against totalitarianism. "Big Brother is watching you" reminds me to stay vigilant about power.',
      category: '小说',
      categoryEn: 'Novel',
    },
    {
      title: '我的天才女友',
      titleEn: 'My Brilliant Friend',
      author: '埃莱娜·费兰特',
      authorEn: 'Elena Ferrante',
      cover: 'https://upload.wikimedia.org/wikipedia/en/4/4c/My_Brilliant_Friend_cover.jpg',
      review: '费兰特笔下两个女性的成长史诗。友谊、嫉妒、竞争，真实展现了女性之间复杂而深刻的情感。',
      reviewEn: 'Ferrante\'s epic of two women\'s growth. Friendship, jealousy, competition - a真实 portrayal of complex emotions between women.',
      category: '小说',
      categoryEn: 'Novel',
    },
    {
      title: '飘',
      titleEn: 'Gone with the Wind',
      author: '玛格丽特·米切尔',
      authorEn: 'Margaret Mitchell',
      cover: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg',
      review: '一个乱世佳人的传奇。在南北战争的背景下，斯嘉丽的坚韧和对土地的执着让我看到生命的韧性。',
      reviewEn: 'A legend of a southern belle. Against the Civil War backdrop, Scarlett\'s resilience and attachment to land showed me life\'s tenacity.',
      category: '小说',
      categoryEn: 'Novel',
    },
    {
      title: '理想国',
      titleEn: 'The Republic',
      author: '柏拉图',
      authorEn: 'Plato',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Plato-raphael.jpg',
      review: '西方哲学的奠基之作。柏拉图对正义、理想社会的探讨，2000多年后依然深刻。',
      reviewEn: 'Foundation of Western philosophy. Plato\'s exploration of justice and ideal society remains profound after 2000+ years.',
      category: '哲学',
      categoryEn: 'Philosophy',
    },
    {
      title: '纯粹理性批判',
      titleEn: 'Critique of Pure Reason',
      author: '伊曼努尔·康德',
      authorEn: 'Immanuel Kant',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Kant_gemaelde_3.jpg',
      review: '康德三大批判之一。颠覆性地解答了"我能知道什么"这个根本问题，重塑了哲学的边界。',
      reviewEn: 'One of Kant\'s three critiques. Revolutionarily answered "What can I know?" and reshaped philosophy\'s boundaries.',
      category: '哲学',
      categoryEn: 'Philosophy',
    },
    {
      title: '作为意志和表象的世界',
      titleEn: 'The World as Will and Representation',
      author: '叔本华',
      authorEn: 'Arthur Schopenhauer',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Arthur_Schopenhauer_Portrait_by_Ludwig_Sigismund_Ruhl_1815.jpg',
      review: '叔本华的悲观哲学让我重新审视欲望和意志。生命的本质是痛苦，但理解痛苦本身就是一种解脱。',
      reviewEn: 'Schopenhauer\'s pessimistic philosophy made me re-examine desire and will. Life\'s essence is suffering, but understanding suffering itself is liberation.',
      category: '哲学',
      categoryEn: 'Philosophy',
    },
    {
      title: '他人即地狱',
      titleEn: 'No Exit',
      author: '让-保罗·萨特',
      authorEn: 'Jean-Paul Sartre',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Sartre_1967_crop.jpg',
      review: '萨特的存在主义名剧。"他人即地狱"揭示了人际关系的本质和自由选择的重负。',
      reviewEn: 'Sartre\'s existentialist masterpiece. "Hell is other people" reveals the essence of human relations and the burden of free choice.',
      category: '哲学',
      categoryEn: 'Philosophy',
    },
    {
      title: '原野里的百合和飞鸟',
      titleEn: 'The Lily of the Field and the Bird of the Air',
      author: '索伦·克尔凯郭尔',
      authorEn: 'Søren Kierkegaard',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Kierkegaard.jpg',
      review: '克尔凯郭尔用诗意的笔触探讨信仰与存在。百合和飞鸟的隐喻让我理解生命的单纯与自由。',
      reviewEn: 'Kierkegaard explores faith and existence with poetic prose. The metaphor of lilies and birds helped me understand life\'s simplicity and freedom.',
      category: '哲学',
      categoryEn: 'Philosophy',
    },
    {
      title: '追忆似水年华',
      titleEn: 'In Search of Lost Time',
      author: '马塞尔·普鲁斯特',
      authorEn: 'Marcel Proust',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Marcel_Proust_vers_1895.jpg',
      review: '20世纪最伟大的小说之一。普鲁斯特用细腻的笔触重构记忆，探索时间与自我的本质。（未读完）',
      reviewEn: 'One of the greatest 20th century novels. Proust reconstructs memory with delicate prose, exploring time and self. (Unfinished)',
      category: '小说',
      categoryEn: 'Novel',
    },
    {
      title: '穷查理宝典',
      titleEn: 'Poor Charlie\'s Almanack',
      author: '查理·芒格',
      authorEn: 'Charlie Munger',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Charlie_Munger_2010.jpg',
      review: '芒格的多元思维模型彻底改变了我的思考方式。跨学科学习和终身阅读成为我的人生指南。',
      reviewEn: 'Munger\'s mental models completely changed my thinking. Interdisciplinary learning and lifelong reading became my life guide.',
      category: '投资',
      categoryEn: 'Investing',
    },
    {
      title: '论法的精神',
      titleEn: 'The Spirit of Laws',
      author: '孟德斯鸠',
      authorEn: 'Montesquieu',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Montesquieu_1.png',
      review: '三权分立理论的源头。孟德斯鸠对政治制度的分析影响了整个现代民主世界。',
      reviewEn: 'Origin of separation of powers. Montesquieu\'s analysis of political systems influenced the entire modern democratic world.',
      category: '法律',
      categoryEn: 'Law',
    },
    {
      title: '法律之门',
      titleEn: 'The Law School',
      author: '博西格诺',
      authorEn: 'John Bonsignore',
      cover: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Courthouse_columns.jpg',
      review: '法学入门的经典教材。通过案例和故事，让我理解法律不仅是规则，更是社会正义的体现。',
      reviewEn: 'Classic legal studies textbook. Through cases and stories, I understood that law is not just rules, but the embodiment of social justice.',
      category: '法律',
      categoryEn: 'Law',
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
        {/* Hero Section - Apple Style */}
        <div className="text-center animate-fade-in pt-8 md:pt-16 pb-4">
          {/* Large Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {language === 'zh' ? '阅读' : 'Reading'}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '与伟大的思想对话'
              : 'In dialogue with great minds'}
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '每本书都是通往新世界的一扇门，在阅读中寻找智慧、思考和成长'
              : 'Every book is a door to a new world. Finding wisdom, reflection, and growth through reading'}
          </p>
        </div>

        {/* Elegant Quote Card - Apple Style */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/5">
            {/* Quote Mark */}
            <div className="absolute top-6 left-6 text-6xl text-purple-400/20 font-serif">&ldquo;</div>
            
            {/* Quote Text */}
            <blockquote className="text-lg md:text-2xl text-white font-light text-center leading-relaxed relative z-10">
              {language === 'zh'
                ? '在我的一生中，我所认识的聪明人没有不每天阅读的——一个都没有'
                : 'In my whole life, I have known no wise people who didn\'t read all the time — none, zero'}
            </blockquote>
            
            {/* Author */}
            <p className="text-sm md:text-base text-gray-400 mt-6 text-center font-light">
              — Charlie Munger
            </p>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Book Cover - Hover Effect */}
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-3 aspect-[2/3] bg-slate-800 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-2">
                <Image
                  src={book.cover}
                  alt={language === 'zh' ? book.title : book.titleEn}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-xs text-gray-200 leading-relaxed line-clamp-4">
                    {language === 'zh' ? book.review : book.reviewEn}
                  </p>
                </div>
                {/* Category Badge */}
                <div className="absolute top-2 right-2">
                  <span className="inline-block px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded border border-white/20">
                    {language === 'zh' ? book.category : book.categoryEn}
                    </span>
                </div>
              </div>
              
              {/* Book Info */}
              <div className="px-1">
                <h4 className="text-sm font-bold text-white mb-1 line-clamp-2 group-hover:text-orange-400 transition-colors">
                  {language === 'zh' ? book.title : book.titleEn}
                </h4>
                <p className="text-xs text-gray-400">
                  {language === 'zh' ? book.author : book.authorEn}
                </p>
              </div>
            </div>
          ))}
          </div>

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
