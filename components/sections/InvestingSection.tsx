'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function InvestingSection() {
  const { language } = useLanguage();

  const principles = [
    {
      icon: '🎯',
      title: '价值投资',
      titleEn: 'Value Investing',
      description: '寻找内在价值被低估的优质企业，关注长期基本面',
      descriptionEn: 'Seek quality companies with undervalued intrinsic value, focus on long-term fundamentals',
    },
    {
      icon: '⏰',
      title: '长期持有',
      titleEn: 'Long-term Holding',
      description: '时间是优质企业的朋友，耐心等待价值实现',
      descriptionEn: 'Time is the friend of quality businesses, patiently wait for value realization',
    },
    {
      icon: '📈',
      title: '复利思维',
      titleEn: 'Compound Thinking',
      description: '相信复利的力量，追求持续稳定的增长',
      descriptionEn: 'Believe in the power of compounding, pursue consistent and stable growth',
    },
  ];

  const portfolioAllocation = [
    { name: '比特币', nameEn: 'Bitcoin', ticker: 'BTC', percentage: 30, color: 'rgba(255, 99, 132, 0.8)' },
    { name: '特斯拉', nameEn: 'Tesla', ticker: 'TSLA', percentage: 25, color: 'rgba(54, 162, 235, 0.8)' },
    { name: '卡尔达诺', nameEn: 'Cardano', ticker: 'ADA', percentage: 20, color: 'rgba(75, 192, 192, 0.8)' },
    { name: '英伟达', nameEn: 'NVIDIA', ticker: 'NVDA', percentage: 15, color: 'rgba(153, 102, 255, 0.8)' },
    { name: '苹果', nameEn: 'Apple', ticker: 'AAPL', percentage: 10, color: 'rgba(255, 159, 64, 0.8)' },
  ];

  const holdings = [
    {
      name: 'Tesla',
      ticker: 'TSLA',
      category: '港美股',
      categoryEn: 'US Stocks',
      description: '清洁能源与电动汽车的领导者',
      descriptionEn: 'Leader in clean energy and electric vehicles',
      thesis: 'Tesla不仅是电动车公司，更是能源和AI公司。其在自动驾驶、电池技术和能源存储领域的领先地位，将在未来几十年持续创造价值。看好Elon Musk的执行力和Tesla的长期愿景。',
      thesisEn: 'Tesla is not just an EV company, but an energy and AI company. Its leadership in autonomous driving, battery technology, and energy storage will create value for decades. Bullish on Elon Musk\'s execution and Tesla\'s long-term vision.',
    },
    {
      name: 'NVIDIA',
      ticker: 'NVDA',
      category: '港美股',
      categoryEn: 'US Stocks',
      description: 'AI芯片领域的领军企业',
      descriptionEn: 'Leading company in AI chips',
      thesis: 'NVIDIA在AI算力基础设施领域拥有绝对优势。随着AI技术的快速发展，对高性能GPU的需求将持续增长。CUDA生态系统的护城河和在数据中心、自动驾驶等领域的布局，使其成为AI时代的核心受益者。',
      thesisEn: 'NVIDIA has absolute dominance in AI computing infrastructure. With rapid AI development, demand for high-performance GPUs will continue growing. CUDA ecosystem moat and positioning in data centers and autonomous driving make it a core AI beneficiary.',
    },
    {
      name: 'Apple',
      ticker: 'AAPL',
      category: '港美股',
      categoryEn: 'US Stocks',
      description: '消费科技巨头',
      descriptionEn: 'Consumer technology giant',
      thesis: '苹果拥有卓越的品牌价值和生态系统优势。硬件、软件、服务的完美结合形成强大的经济护城河。看好其在可穿戴设备、AR/VR和服务领域的长期增长潜力。',
      thesisEn: 'Apple has excellent brand value and ecosystem advantages. The perfect combination of hardware, software, and services creates a strong economic moat. Bullish on its long-term growth potential in wearables, AR/VR, and services.',
    },
    {
      name: '小米集团',
      ticker: '01810.HK',
      category: '港美股',
      categoryEn: 'HK Stocks',
      description: '"手机+AIoT"战略布局',
      descriptionEn: '"Smartphone + AIoT" strategic layout',
      thesis: '小米在智能手机和AIoT（人工智能物联网）领域布局完善。其"手机×AIoT"双引擎战略，通过高性价比产品占领市场，构建了完整的智能生态系统。看好其在智能汽车和国际化扩张方面的潜力。',
      thesisEn: 'Xiaomi has a comprehensive layout in smartphones and AIoT (Artificial Intelligence of Things). Its "Smartphone × AIoT" dual-engine strategy occupies the market with cost-effective products and builds a complete smart ecosystem. Bullish on its potential in smart vehicles and international expansion.',
    },
    {
      name: 'Bitcoin',
      ticker: 'BTC',
      category: '加密货币',
      categoryEn: 'Crypto',
      description: '数字黄金，去中心化价值存储',
      descriptionEn: 'Digital gold, decentralized store of value',
      thesis: 'Bitcoin作为第一个成功的去中心化货币，其稀缺性（2100万枚上限）和去中心化特性使其成为对抗通胀的数字黄金。随着机构采用增加和全球货币政策不确定性，BTC的长期价值存储属性将更加凸显。',
      thesisEn: 'As the first successful decentralized currency, Bitcoin\'s scarcity (21M cap) and decentralization make it digital gold against inflation. With increasing institutional adoption and global monetary policy uncertainty, BTC\'s long-term value storage will become more prominent.',
    },
    {
      name: 'Cardano',
      ticker: 'ADA',
      category: '加密货币',
      categoryEn: 'Crypto',
      description: '下一代区块链平台',
      descriptionEn: 'Next-generation blockchain platform',
      thesis: 'Cardano采用学术研究驱动的开发方式，其eUTxO模型和分层架构设计更加安全和可扩展。随着DeFi和智能合约生态的发展，Cardano有潜力成为下一代区块链基础设施。我也是Cardano开发者，深度了解其技术优势。',
      thesisEn: 'Cardano takes an academic research-driven approach. Its eUTxO model and layered architecture are more secure and scalable. As DeFi and smart contract ecosystem develops, Cardano has potential to be next-gen blockchain infrastructure. As a Cardano developer, I deeply understand its technical advantages.',
    },
  ];

  const investmentBooks = [
    {
      title: '《聪明的投资者》',
      titleEn: 'The Intelligent Investor',
      author: 'Benjamin Graham',
      reason: '价值投资的圣经，教会我如何区分投资与投机',
      reasonEn: 'The bible of value investing, taught me to distinguish investment from speculation',
    },
    {
      title: '《穷查理宝典》',
      titleEn: 'Poor Charlie\'s Almanack',
      author: 'Charlie Munger',
      reason: '多元思维模型的重要性，投资是跨学科的艺术',
      reasonEn: 'Importance of mental models, investing is an interdisciplinary art',
    },
    {
      title: '《投资最重要的事》',
      titleEn: 'The Most Important Thing',
      author: 'Howard Marks',
      reason: '深刻理解市场周期和风险控制的艺术',
      reasonEn: 'Deep understanding of market cycles and the art of risk control',
    },
  ];

  const investmentLessons = [
    {
      lesson: '耐心是投资最重要的美德',
      lessonEn: 'Patience is the most important virtue in investing',
      detail: '优质企业需要时间成长，短期波动是机会而非风险。学会忍受市场的不理性，等待价值的回归。',
      detailEn: 'Quality businesses need time to grow. Short-term volatility is opportunity, not risk. Learn to endure market irrationality and wait for value to return.',
    },
    {
      lesson: '理解你投资的东西',
      lessonEn: 'Understand what you invest in',
      detail: '永远不要投资你不理解的资产。作为Cardano开发者，我深入研究区块链技术后，才开始配置加密货币。技术理解让我在市场恐慌时保持信心。',
      detailEn: 'Never invest in assets you don\'t understand. As a Cardano developer, I only started allocating to crypto after deep research. Technical understanding gives me confidence during market panic.',
    },
    {
      lesson: '在别人恐惧时贪婪',
      lessonEn: 'Be greedy when others are fearful',
      detail: '市场恐慌往往创造最好的买入机会。熊市是积累优质资产的黄金时期，而不是退出的信号。',
      detailEn: 'Market panic often creates best buying opportunities. Bear markets are golden periods to accumulate quality assets, not signals to exit.',
    },
  ];

  const web3Vision = [
    {
      title: '去中心化金融 (DeFi)',
      titleEn: 'Decentralized Finance (DeFi)',
      icon: '🔄',
      items: [
        { text: '无需中介的金融服务', textEn: 'Financial services without intermediaries' },
        { text: '开放、透明的协议', textEn: 'Open and transparent protocols' },
        { text: '流动性挖矿与收益聚合', textEn: 'Yield farming and aggregators' },
        { text: '智能合约驱动的金融应用', textEn: 'Smart contract-driven financial apps' },
      ],
    },
    {
      title: '去中心化自治组织 (DAOs)',
      titleEn: 'Decentralized Autonomous Organizations (DAOs)',
      icon: '🛡️',
      items: [
        { text: '社区共同治理', textEn: 'Community governance' },
        { text: '透明的决策流程', textEn: 'Transparent decision-making process' },
        { text: '代币化的权益分配', textEn: 'Tokenized equity distribution' },
        { text: '自动化执行的规则', textEn: 'Automated rule execution' },
      ],
    },
    {
      title: '区块链基础设施',
      titleEn: 'Blockchain Infrastructure',
      icon: '🔗',
      items: [
        { text: '第三代区块链研究', textEn: 'Third-generation blockchain research' },
        { text: '可扩展性解决方案', textEn: 'Scalability solutions' },
        { text: '跨链互操作性技术', textEn: 'Cross-chain interoperability' },
        { text: 'Layer 2扩容技术', textEn: 'Layer 2 scaling technologies' },
      ],
    },
  ];

  return (
    <section id="investing" className="py-24 dark-section">
      <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '投资哲学' : 'Investment Philosophy'}
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            {language === 'zh'
              ? '投资不是短期的投机，而是长远的价值发现之旅'
              : 'Investing is not short-term speculation, but a long-term journey of value discovery'}
          </p>
        </div>

        {/* Investment Principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div key={index} className="glass-card rounded-xl p-6 text-center animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-5xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {language === 'zh' ? principle.title : principle.titleEn}
              </h3>
              <p className="text-sm text-gray-100 leading-relaxed">
                {language === 'zh' ? principle.description : principle.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="glass-card rounded-xl p-6 border-l-4 border-green-500/50">
          <blockquote className="text-lg md:text-xl text-gray-50 italic text-center leading-relaxed">
            {language === 'zh'
              ? '"投资最重要的品质不是智商，而是性格" — 沃伦·巴菲特'
              : '"The most important quality for an investor is temperament, not intellect" — Warren Buffett'}
          </blockquote>
        </div>

        {/* Portfolio Distribution */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '投资组合分配' : 'Portfolio Allocation'}
          </h3>
          <div className="glass-card rounded-xl p-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Visual representation - Simple bar chart */}
              <div className="space-y-4">
                {portfolioAllocation.map((asset, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-50">
                        {language === 'zh' ? asset.name : asset.nameEn} ({asset.ticker})
                      </span>
                      <span className="text-sm font-bold text-white">{asset.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${asset.percentage}%`,
                          backgroundColor: asset.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend / Summary */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-100 mt-1">
                    {language === 'zh' ? '资产配置' : 'Asset Allocation'}
                  </div>
                </div>
                <div className="space-y-2 border-t border-white/20 pt-4">
                  {portfolioAllocation.map((asset, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: asset.color }}
                        />
                        <span className="text-xs text-gray-50">{asset.ticker}</span>
                      </div>
                      <span className="text-xs font-bold text-white">{asset.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio with Thesis */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '投资组合与逻辑' : 'Portfolio & Thesis'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {holdings.map((holding, index) => (
              <div key={index} className="glass-card rounded-xl p-6 animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {language === 'zh' ? holding.category : holding.categoryEn}
                    </span>
                    <h4 className="text-2xl font-bold text-white mt-1">
                      {holding.ticker}
                    </h4>
                    <p className="text-sm text-gray-100">{holding.name}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{holding.category.includes('股') || holding.categoryEn === 'US Stocks' ? '📊' : '₿'}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-50 leading-relaxed mb-3">
                  {language === 'zh' ? holding.description : holding.descriptionEn}
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2 font-medium uppercase">
                    {language === 'zh' ? '投资逻辑:' : 'Investment Thesis:'}
                  </p>
                  <p className="text-sm text-gray-50 leading-relaxed">
                    {language === 'zh' ? holding.thesis : holding.thesisEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Books */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '投资书单' : 'Investment Books'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {investmentBooks.map((book, index) => (
              <div key={index} className="glass-card rounded-xl p-6 animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {language === 'zh' ? book.title : book.titleEn}
                </h4>
                <p className="text-sm text-gray-100 mb-3">{book.author}</p>
                <p className="text-sm text-gray-50 leading-relaxed">
                  {language === 'zh' ? book.reason : book.reasonEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Lessons */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '投资心得' : 'Investment Lessons'}
          </h3>
          <div className="space-y-6">
            {investmentLessons.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">
                      {language === 'zh' ? item.lesson : item.lessonEn}
                    </h4>
                    <p className="text-sm text-gray-50 leading-relaxed">
                      {language === 'zh' ? item.detail : item.detailEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web3 Vision */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {language === 'zh' ? 'Web3 愿景' : 'Web3 Vision'}
          </h3>
          <p className="text-gray-100 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            {language === 'zh'
              ? '我相信Web3将重塑互联网，创造一个更加去中心化、用户拥有数据的网络生态。区块链技术是这一变革的核心，它提供了一种新的信任机制和价值传递方式。'
              : 'I believe Web3 will reshape the internet, creating a more decentralized network ecosystem where users own their data. Blockchain technology is the core of this transformation, providing a new trust mechanism and value transfer method.'}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {web3Vision.map((area, index) => (
              <div key={index} className="glass-card rounded-xl p-6 animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{area.icon}</div>
                <h4 className="text-lg font-bold text-white mb-4">
                  {language === 'zh' ? area.title : area.titleEn}
                </h4>
                <ul className="space-y-2">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-100 flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{language === 'zh' ? item.text : item.textEn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
