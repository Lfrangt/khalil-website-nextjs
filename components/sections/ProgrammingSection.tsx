'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function ProgrammingSection() {
  const { language } = useLanguage();

  const projects = [
    {
      title: 'Pulse Watch',
      titleEn: 'Pulse Watch',
      description: 'Apple Watch 健康 AI app — 恢复评分、HRV 趋势、训练建议，AI 教练驱动',
      descriptionEn: 'Apple Watch health AI app — recovery scoring, HRV trends, training suggestions, powered by AI coach',
      detailedDescription: 'Pulse Watch 是一款 Apple Watch 原生健身 AI app，基于 HealthKit 实时读取心率、HRV、血氧、睡眠等数据，计算每日恢复评分（0-100），并通过 OpenClaw AI 教练提供个性化训练建议。技术栈：SwiftUI + HealthKit + SwiftData + watchOS Widget，买断制 $4.99 CAD，品牌 Abundra。从 0 到完整产品，50+ commits，独立完成。',
      detailedDescriptionEn: 'Pulse Watch is a native Apple Watch fitness AI app that reads heart rate, HRV, SpO2, and sleep data via HealthKit in real-time, calculates a daily recovery score (0-100), and delivers personalized training recommendations through an OpenClaw AI coach. Built with SwiftUI + HealthKit + SwiftData + watchOS Widgets. One-time purchase at $4.99 CAD under the Abundra brand. Built entirely independently with 50+ commits from scratch.',
      tags: ['iOS', 'watchOS', 'SwiftUI', 'HealthKit', 'AI Coach'],
      tech: ['Swift', 'SwiftUI', 'HealthKit', 'SwiftData', 'WidgetKit', 'OpenClaw'],
      status: '开发中',
      statusEn: 'In Development',
      link: 'https://github.com/Lfrangt/pulse-watch',
    },
    {
      title: 'AgentCon Deep Research',
      titleEn: 'AgentCon Deep Research',
      description: '微软AgentCon活动：构建Deep Research AI Agent',
      descriptionEn: 'Microsoft AgentCon Workshop: Building Deep Research AI Agent',
      detailedDescription: '参加了微软AgentCon Deep Research Workshop（2025年12月），完成了全部12个任务，成功构建了一个功能完整的Deep Research Agent。该Agent能够自动浏览网页、解析PDF文档，并进行深度信息检索和分析。通过这个workshop，深入学习了AI Agent的架构设计、工具调用机制和多模态信息处理。',
      detailedDescriptionEn: 'Participated in Microsoft AgentCon Deep Research Workshop (Dec 2025), completed all 12 tasks and successfully built a fully functional Deep Research Agent. The agent can automatically browse the web, parse PDF documents, and perform deep information retrieval and analysis. Through this workshop, gained deep understanding of AI Agent architecture design, tool calling mechanisms, and multimodal information processing.',
      tags: ['AI Agent', 'Deep Research', 'Microsoft', 'Workshop'],
      tech: ['Python', 'LangChain', 'Web Scraping', 'PDF Parsing', 'Azure'],
      status: '已完成',
      statusEn: 'Completed',
      link: 'https://github.com/IssamLaradji/agentcon_deep_research',
    },
    {
      title: 'Contoso Pizza Workshop',
      titleEn: 'Contoso Pizza Workshop',
      description: '微软Azure AI Foundry：构建PizzaBot智能代理',
      descriptionEn: 'Microsoft Azure AI Foundry: Building PizzaBot Agent',
      detailedDescription: '参加了微软Contoso Pizza Workshop，学习使用Azure AI Foundry构建智能代理。完成了完整的workshop课程，成功构建并部署了PizzaBot Agent。项目使用GitHub Codespaces作为开发环境，部署在Azure Static Web Apps上。通过这个workshop，掌握了Azure云服务和AI Agent开发的实践技能。',
      detailedDescriptionEn: 'Participated in Microsoft Contoso Pizza Workshop, learning to build intelligent agents using Azure AI Foundry. Completed the full workshop curriculum and successfully built and deployed the PizzaBot Agent. The project uses GitHub Codespaces as development environment, deployed on Azure Static Web Apps. Through this workshop, gained practical skills in Azure cloud services and AI Agent development.',
      tags: ['Azure', 'AI Foundry', 'Microsoft', 'Workshop'],
      tech: ['Python', 'Azure Static Web Apps', 'GitHub Codespaces', 'AI Agent'],
      status: '已完成',
      statusEn: 'Completed',
      link: 'https://jolly-field-035345f1e.2.azurestaticapps.net/dev-environment.html',
    },
    {
      title: 'Abundra Capital',
      titleEn: 'Abundra Capital',
      hideLink: true,
      description: '创新的数字资本平台，整合AI、区块链和投资管理',
      descriptionEn: 'Innovative digital capital platform integrating AI, blockchain, and investment management',
      detailedDescription: 'Abundra Capital是我创立的创新项目，旨在将AI技术、区块链和传统投资管理相结合。项目包含三个核心模块：AI Lab用于开发智能投资分析工具，Blockchain R&D专注于DeFi协议和智能合约开发，Digital Capital负责数字资产的配置和管理。目前正在开发基于Cardano的DeFi协议和AI驱动的投资组合优化系统。',
      detailedDescriptionEn: 'Abundra Capital is an innovative project I founded, aiming to combine AI technology, blockchain, and traditional investment management. The project includes three core modules: AI Lab for developing intelligent investment analysis tools, Blockchain R&D focusing on DeFi protocols and smart contracts, and Digital Capital for digital asset allocation and management.',
      tags: ['AI', 'Blockchain', 'Web3', 'DeFi', 'Cardano'],
      tech: ['Python', 'Plutus', 'Haskell', 'React', 'Machine Learning'],
      status: '建设中',
      statusEn: 'Building',
      link: 'https://abundra-website.vercel.app',
    },
    {
      title: 'Cardano Identity DApp',
      titleEn: 'Cardano Identity DApp',
      hideLink: true,
      description: '基于Cardano区块链的去中心化身份验证应用',
      descriptionEn: 'Decentralized identity verification application built on Cardano blockchain',
      detailedDescription: '这是我正在开发的Cardano生态DApp项目，致力于实现去中心化身份验证功能。使用Plutus语言编写智能合约，处理链上身份数据和验证逻辑。前端使用Lucid库与Cardano区块链集成，实现钱包连接、交易构建和链上数据查询。通过这个项目，我正在深入学习eUTxO模型和Cardano的去中心化身份(DID)实现。',
      detailedDescriptionEn: 'This is my ongoing Cardano DApp project implementing decentralized identity verification. Using Plutus for smart contracts to handle on-chain identity data and verification logic. Frontend integrates with Cardano blockchain using Lucid library for wallet connection, transaction building, and on-chain queries.',
      tags: ['Cardano', 'DID', 'Smart Contracts', 'eUTxO', 'Lucid'],
      tech: ['Plutus', 'TypeScript', 'Lucid', 'Blockfrost API', 'Next.js'],
      status: '建设中',
      statusEn: 'Building',
      link: 'https://cardano-identity-dapp.vercel.app/app',
    },
    {
      title: '个人网站',
      titleEn: 'Personal Website',
      description: '使用Next.js + React 19构建的现代化个人网站',
      descriptionEn: 'Modern personal website built with Next.js + React 19',
      detailedDescription: '这个个人网站是我用Next.js 15和React 19从零搭建的全栈项目。采用App Router架构，实现了完整的双语系统（中英文切换）、深色模式、响应式设计。使用Tailwind CSS打造了类似Apple风格的精致UI，包含Liquid Glass效果和流畅的动画。整个项目完全由TypeScript编写，确保类型安全。通过这个项目，我掌握了现代前端开发的最佳实践。',
      detailedDescriptionEn: 'This personal website is a full-stack project I built from scratch using Next.js 15 and React 19. Adopting App Router architecture, implementing complete bilingual system (Chinese/English toggle), dark mode, and responsive design. Using Tailwind CSS to create an Apple-style refined UI with Liquid Glass effects and smooth animations.',
      tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'i18n'],
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
      status: '已完成',
      statusEn: 'Completed',
      link: '#',
    },
    {
      title: 'Web3 学习项目集',
      titleEn: 'Web3 Learning Projects',
      description: '探索以太坊、Solana等多链生态的学习项目',
      descriptionEn: 'Learning projects exploring Ethereum, Solana, and multi-chain ecosystems',
      detailedDescription: '为了全面了解Web3生态，我学习并实践了多个区块链平台的开发。包括使用Solidity开发以太坊智能合约（ERC-20代币、NFT、DeFi协议），使用Rust开发Solana程序，以及跨链桥接和多签钱包的实现。这些项目帮助我理解了不同区块链架构的优劣和适用场景，为专注Cardano开发打下了坚实的基础。',
      detailedDescriptionEn: 'To comprehensively understand the Web3 ecosystem, I learned and practiced development on multiple blockchain platforms. Including developing Ethereum smart contracts with Solidity (ERC-20 tokens, NFT, DeFi protocols), developing Solana programs with Rust, and implementing cross-chain bridges and multi-sig wallets.',
      tags: ['Ethereum', 'Solana', 'Solidity', 'Rust', 'Multi-chain'],
      tech: ['Solidity', 'Hardhat', 'Rust', 'Anchor', 'Web3.js', 'ethers.js'],
      status: '学习中',
      statusEn: 'Learning',
      link: '#',
    },
    {
      title: 'AI Agent 开发',
      titleEn: 'AI Agent Development',
      description: '基于大语言模型的智能代理系统开发',
      descriptionEn: 'Intelligent agent systems based on large language models',
      detailedDescription: '我正在学习如何开发AI Agent系统，使用OpenAI API、Anthropic Claude等大语言模型构建能够自主思考和执行任务的智能代理。项目包括RAG（检索增强生成）系统、多Agent协作框架、以及将AI Agent与区块链结合的创新应用。通过LangChain和自定义工具链，我探索AI如何自动化复杂的投资分析和DApp开发流程。',
      detailedDescriptionEn: 'I am learning how to develop AI Agent systems, using OpenAI API, Anthropic Claude and other large language models to build intelligent agents that can think and execute tasks autonomously. Projects include RAG (Retrieval Augmented Generation) systems, multi-agent collaboration frameworks, and innovative applications combining AI Agent with blockchain.',
      tags: ['AI', 'LLM', 'RAG', 'LangChain', 'Automation'],
      tech: ['Python', 'LangChain', 'OpenAI API', 'Vector DB', 'FastAPI'],
      status: '学习中',
      statusEn: 'Learning',
      link: '#',
    },
  ];

  const skillCategories = [
    {
      category: '前端开发',
      categoryEn: 'Frontend Development',
      skills: [
        { name: 'React / Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML / CSS', level: 95 },
      ],
    },
    {
      category: 'Cardano开发',
      categoryEn: 'Cardano Development',
      skills: [
        { name: 'Plutus智能合约', level: 70, nameEn: 'Plutus Smart Contracts' },
        { name: 'Haskell基础', level: 65, nameEn: 'Haskell Basics' },
        { name: 'DApp架构设计', level: 75, nameEn: 'DApp Architecture' },
        { name: 'Lucid / Blockfrost', level: 80 },
      ],
    },
    {
      category: '区块链 & Web3',
      categoryEn: 'Blockchain & Web3',
      skills: [
        { name: 'Solidity / Ethereum', level: 65 },
        { name: 'Web3集成', level: 75, nameEn: 'Web3 Integration' },
        { name: 'DeFi协议理解', level: 70, nameEn: 'DeFi Protocols' },
        { name: '密码学基础', level: 60, nameEn: 'Cryptography Basics' },
      ],
    },
    {
      category: 'AI & 数据科学',
      categoryEn: 'AI & Data Science',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'LangChain / AI Agent', level: 65 },
        { name: 'RAG系统', level: 60, nameEn: 'RAG Systems' },
        { name: '机器学习基础', level: 55, nameEn: 'ML Basics' },
      ],
    },
  ];

  const learningGoals = [
    {
      goal: '成为Cardano生态的专业DApp开发者',
      goalEn: 'Become a professional Cardano DApp developer',
      description: '深入掌握Plutus智能合约开发，能够独立构建完整的DeFi协议和NFT平台',
      descriptionEn: 'Master Plutus smart contract development, able to build complete DeFi protocols and NFT platforms independently',
    },
    {
      goal: '将AI技术应用于Web3领域',
      goalEn: 'Apply AI technology to Web3',
      description: '探索AI Agent如何自动化区块链开发、投资分析和链上数据分析',
      descriptionEn: 'Explore how AI Agent can automate blockchain development, investment analysis, and on-chain data analysis',
    },
    {
      goal: '为Cardano生态做出开源贡献',
      goalEn: 'Contribute to Cardano ecosystem',
      description: '开发开源工具和库，帮助更多开发者进入Cardano生态',
      descriptionEn: 'Develop open-source tools and libraries to help more developers enter the Cardano ecosystem',
    },
  ];

  const web3Areas = [
    {
      title: '区块链基础',
      titleEn: 'Blockchain Basics',
      icon: '🔗',
      items: [
        { text: '分布式账本技术原理', textEn: 'Distributed Ledger Technology' },
        { text: '共识机制研究(PoW, PoS, Ouroboros)', textEn: 'Consensus Mechanisms (PoW, PoS, Ouroboros)' },
        { text: '智能合约编程', textEn: 'Smart Contract Programming' },
        { text: '密码学与安全性', textEn: 'Cryptography & Security' },
      ],
    },
    {
      title: 'DeFi生态',
      titleEn: 'DeFi Ecosystem',
      icon: '💰',
      items: [
        { text: '去中心化金融协议分析', textEn: 'DeFi Protocol Analysis' },
        { text: '流动性挖矿与收益聚合', textEn: 'Yield Farming & Aggregators' },
        { text: '自动做市商(AMM)模型', textEn: 'Automated Market Maker (AMM) Models' },
        { text: '稳定币机制设计', textEn: 'Stablecoin Mechanism Design' },
      ],
    },
    {
      title: 'Cardano生态系统',
      titleEn: 'Cardano Ecosystem',
      icon: '⚡',
      items: [
        { text: 'Cardano分层架构研究', textEn: 'Cardano Layered Architecture' },
        { text: 'Plutus智能合约开发', textEn: 'Plutus Smart Contract Development' },
        { text: 'Ouroboros共识算法', textEn: 'Ouroboros Consensus Algorithm' },
        { text: 'Hydra扩容解决方案', textEn: 'Hydra Scaling Solution' },
      ],
    },
  ];

  const abundraModules = [
    {
      title: 'AI Lab',
      titleEn: 'AI Lab',
      icon: '🧠',
      description: '先进的AI模型微调、智能投资顾问系统和企业AI工具开发。创建智能解决方案，增强决策制定并自动化复杂流程。',
      descriptionEn: 'Advanced AI model fine-tuning, intelligent investment advisory systems, and enterprise AI tool development. Creating smart solutions that enhance decision-making and automate complex processes.',
      items: [
        { text: 'GPT模型微调', textEn: 'GPT Model Fine-tuning' },
        { text: '智能投资顾问', textEn: 'AI Investment Advisor' },
        { text: '企业AI工具', textEn: 'Enterprise AI Tools' },
        { text: '预测分析', textEn: 'Predictive Analytics' },
      ],
    },
    {
      title: '区块链研发',
      titleEn: 'Blockchain R&D',
      icon: '🔗',
      description: 'Cardano生态系统开发、智能合约工具、DID项目和Web3 API服务。构建明天的去中心化基础设施。',
      descriptionEn: 'Cardano ecosystem development, smart contract tools, DID projects, and Web3 API services. Building tomorrow\'s decentralized infrastructure.',
      items: [
        { text: 'Cardano智能合约', textEn: 'Cardano Smart Contracts' },
        { text: '去中心化身份(DID)', textEn: 'Decentralized Identity (DID)' },
        { text: 'Web3 API开发', textEn: 'Web3 API Development' },
        { text: '区块链基础设施', textEn: 'Blockchain Infrastructure' },
      ],
    },
    {
      title: '数字资本',
      titleEn: 'Digital Capital',
      icon: '₿',
      description: 'BTC储备管理、数字资产配置和早期项目投资。构建抗通胀、抗周期的数字财富结构。',
      descriptionEn: 'BTC reserve management, digital asset allocation, and early-stage project investment. Building inflation-resistant, cycle-resistant digital wealth structures.',
      items: [
        { text: 'BTC储备策略', textEn: 'BTC Reserve Strategy' },
        { text: '数字资产组合', textEn: 'Digital Asset Portfolio' },
        { text: '早期阶段投资', textEn: 'Early-stage Investment' },
        { text: '风险管理', textEn: 'Risk Management' },
      ],
    },
  ];

  const futureResearch = [
    {
      title: 'AI Agent 开发',
      titleEn: 'AI Agent Development',
      icon: '🤖',
      description: '我对自主人工智能代理充满热情，希望深入研究AI Agent的构建与应用。这包括：',
      descriptionEn: 'I am passionate about autonomous AI agents and want to deeply research the construction and application of AI Agents. This includes:',
      items: [
        { text: '多模态AI Agent架构设计', textEn: 'Multimodal AI Agent Architecture' },
        { text: '基于大型语言模型的自主系统', textEn: 'LLM-based Autonomous Systems' },
        { text: 'AI Agent的决策机制与工具使用能力', textEn: 'AI Agent Decision-making & Tool Usage' },
        { text: '探索Agent间协作与集体智能', textEn: 'Multi-agent Collaboration & Collective Intelligence' },
      ],
    },
    {
      title: '区块链与Cardano',
      titleEn: 'Blockchain & Cardano',
      icon: '⛓️',
      description: '我看好Cardano生态系统，计划深入研究其技术基础与应用场景：',
      descriptionEn: 'I am optimistic about the Cardano ecosystem and plan to deeply research its technical foundation and application scenarios:',
      items: [
        { text: 'Cardano的Ouroboros共识机制', textEn: 'Cardano\'s Ouroboros Consensus' },
        { text: 'Plutus智能合约开发', textEn: 'Plutus Smart Contract Development' },
        { text: '区块链可扩展性解决方案', textEn: 'Blockchain Scalability Solutions' },
        { text: '去中心化金融(DeFi)应用开发', textEn: 'DeFi Application Development' },
        { text: '区块链与AI技术的融合可能性', textEn: 'Integration of Blockchain & AI' },
      ],
    },
  ];

  return (
    <section id="programming" className="py-24 dark-section">
      <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '编程 & 技术' : 'Programming & Tech'}
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            {language === 'zh'
              ? '我的项目、技术栈和学习历程'
              : 'My projects, tech stack and learning journey'}
          </p>
        </div>

        {/* Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '项目展示' : 'Projects'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-card rounded-xl p-6 animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {language === 'zh' ? project.title : project.titleEn}
                  </h3>
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                    project.status === '已完成' || project.statusEn === 'Completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : project.status === '开发中' || project.status === '建设中' || project.statusEn === 'In Development' || project.statusEn === 'Building'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {language === 'zh' ? project.status : project.statusEn}
                  </span>
                </div>

                <p className="text-gray-100 text-sm mb-4 leading-relaxed">
                  {language === 'zh' ? project.detailedDescription : project.detailedDescriptionEn}
                </p>

                <div className="space-y-3">
                  {/* Main Tags */}
                  <div>
                    <p className="text-xs text-gray-400 mb-2 font-medium">
                      {language === 'zh' ? '技术领域:' : 'Tech Domains:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 text-gray-200 text-xs rounded-full border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <p className="text-xs text-gray-400 mb-2 font-medium">
                      {language === 'zh' ? '技术栈:' : 'Tech Stack:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Link */}
                {project.link && project.link !== '#' && project.title !== 'Abundra Capital' && project.title !== 'Cardano Identity DApp' && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {language === 'zh' ? '访问项目' : 'Visit Project'}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '技术栈' : 'Tech Stack'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-slate-800 rounded-xl p-6 animate-fade-in" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <h4 className="text-base font-semibold text-white mb-4">
                  {language === 'zh' ? category.category : category.categoryEn}
                </h4>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="text-sm text-gray-300">
                      • {language === 'zh' ? skill.name : (skill.nameEn || skill.name)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web3 & Blockchain Exploration */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {language === 'zh' ? 'Web3与区块链探索' : 'Web3 & Blockchain Exploration'}
          </h3>
          <p className="text-gray-100 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            {language === 'zh'
              ? '作为Web3生态的探索者，我对去中心化技术的潜力充满信心。通过研究与实践，探索区块链技术如何重塑互联网的未来。'
              : 'As a Web3 ecosystem explorer, I am confident in the potential of decentralized technology. Through research and practice, exploring how blockchain technology reshapes the future of the Internet.'}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {web3Areas.map((area, index) => (
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

        {/* Abundra Capital - Detailed Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            🚀 Abundra Capital - {language === 'zh' ? '我的创新项目' : 'My Innovation Project'}
          </h3>
          <p className="text-gray-100 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            {language === 'zh'
              ? 'Abundra Capital是我创立的创新项目，致力于构建AI、区块链和数字资产融合的未来金融基础设施。这个项目体现了我对前沿技术的热情和对未来数字经济的愿景。'
              : 'Abundra Capital is an innovative project I founded, dedicated to building future financial infrastructure that integrates AI, blockchain, and digital assets. This project embodies my passion for cutting-edge technology and vision for the future digital economy.'}
          </p>
          <div className="text-center mb-8">
            <a
              href="https://abundra-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {language === 'zh' ? '访问 Abundra Capital 官网' : 'Visit Abundra Capital Website'}
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {abundraModules.map((module, index) => (
              <div key={index} className="glass-card rounded-xl p-6 animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{module.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {language === 'zh' ? module.title : module.titleEn}
                </h4>
                <p className="text-sm text-gray-100 mb-4 leading-relaxed">
                  {language === 'zh' ? module.description : module.descriptionEn}
                </p>
                <ul className="space-y-2">
                  {module.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-100 flex items-start gap-2">
                      <span className="text-gray-400">✓</span>
                      <span>{language === 'zh' ? item.text : item.textEn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-xl p-6 border-l-4 border-green-500/50">
            <blockquote className="text-lg md:text-xl text-gray-50 italic text-center leading-relaxed">
              {language === 'zh'
                ? '"财富不仅仅是资本，更是冷静、清晰和代码。"'
                : '"Wealth is not just capital, but calmness, clarity, and code."'}
            </blockquote>
            <p className="text-sm text-gray-400 mt-3 text-center">
              — Abundra Capital {language === 'zh' ? '核心理念' : 'Core Philosophy'}
            </p>
          </div>
        </div>

        {/* Future Technology Research */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '未来技术研究方向' : 'Future Research Directions'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {futureResearch.map((research, index) => (
              <div key={index} className="glass-card rounded-xl p-6 animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{research.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {language === 'zh' ? research.title : research.titleEn}
                </h4>
                <p className="text-sm text-gray-100 mb-4 leading-relaxed">
                  {language === 'zh' ? research.description : research.descriptionEn}
                </p>
                <ul className="space-y-2">
                  {research.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-100 flex items-start gap-2">
                      <span className="text-gray-400 mt-1">→</span>
                      <span>{language === 'zh' ? item.text : item.textEn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {language === 'zh' ? '学习目标' : 'Learning Goals'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {learningGoals.map((goal, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center animate-fade-in transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-green-500/30">
                  <span className="text-2xl">{index === 0 ? '🎯' : index === 1 ? '🤖' : '🌟'}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {language === 'zh' ? goal.goal : goal.goalEn}
                </h4>
                <p className="text-sm text-gray-100 leading-relaxed">
                  {language === 'zh' ? goal.description : goal.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
