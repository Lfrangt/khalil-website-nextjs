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

  // Assign bento sizes to projects for visual variety
  const bentoSizes: Record<number, string> = {
    0: 'bento-featured',  // Pulse Watch — wide featured
    1: '',                // AgentCon — standard
    2: '',                // Contoso — standard
    3: 'bento-wide',     // Abundra Capital — wide
    4: '',                // Cardano Identity — standard
    5: '',                // Personal Website — standard
    6: 'bento-wide',     // Web3 Learning — wide
    7: '',                // AI Agent — standard
  };

  return (
    <section id="programming" className="py-32 dark-section">
      <div className="max-w-7xl mx-auto px-8 space-y-28 relative z-10">
        {/* Section Title */}
        <div className="text-center space-y-5">
          <h2 className="text-4xl md:text-6xl font-extrabold gradient-text-hero tracking-tight">
            {language === 'zh' ? '编程 & 技术' : 'Programming & Tech'}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            {language === 'zh'
              ? '我的项目、技术栈和学习历程'
              : 'My projects, tech stack and learning journey'}
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center tracking-tight">
            {language === 'zh' ? '项目展示' : 'Projects'}
          </h3>
          <div className="bento-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bento-card animate-fade-in ${bentoSizes[index] || ''}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Status badge */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {language === 'zh' ? project.title : project.titleEn}
                  </h3>
                  <span className={`shrink-0 ml-3 px-3 py-1 text-[11px] rounded-full font-semibold tracking-wide uppercase ${
                    project.status === '已完成' || project.statusEn === 'Completed'
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25'
                      : project.status === '开发中' || project.status === '建设中' || project.statusEn === 'In Development' || project.statusEn === 'Building'
                      ? 'bg-blue-500/15 text-blue-400 border border-blue-500/25'
                      : 'bg-amber-500/15 text-amber-400 border border-amber-500/25'
                  }`}>
                    {language === 'zh' ? project.status : project.statusEn}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm mb-5 leading-relaxed line-clamp-4">
                  {language === 'zh' ? project.detailedDescription : project.detailedDescriptionEn}
                </p>

                <div className="space-y-4 mt-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/[0.06] text-zinc-300 text-xs rounded-lg border border-white/[0.08] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-zinc-500 text-[11px] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                {project.link && project.link !== '#' && project.title !== 'Abundra Capital' && project.title !== 'Cardano Identity DApp' && (
                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
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

        {/* Abundra Capital - Detailed Section */}
        <div>
          <h3 className="text-3xl md:text-5xl font-extrabold gradient-text mb-5 text-center tracking-tight">
            Abundra Capital
          </h3>
          <p className="text-zinc-500 text-center text-sm font-semibold uppercase tracking-widest mb-3">
            {language === 'zh' ? '我的创新项目' : 'My Innovation Project'}
          </p>
          <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-10 leading-relaxed text-lg">
            {language === 'zh'
              ? 'Abundra Capital是我创立的创新项目，致力于构建AI、区块链和数字资产融合的未来金融基础设施。这个项目体现了我对前沿技术的热情和对未来数字经济的愿景。'
              : 'Abundra Capital is an innovative project I founded, dedicated to building future financial infrastructure that integrates AI, blockchain, and digital assets. This project embodies my passion for cutting-edge technology and vision for the future digital economy.'}
          </p>
          <div className="text-center mb-10">
            <a
              href="https://abundra-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {language === 'zh' ? '访问 Abundra Capital 官网' : 'Visit Abundra Capital Website'}
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {abundraModules.map((module, index) => (
              <div key={index} className="bento-card glow-border animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="text-4xl mb-5">{module.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {language === 'zh' ? module.title : module.titleEn}
                </h4>
                <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
                  {language === 'zh' ? module.description : module.descriptionEn}
                </p>
                <ul className="space-y-2.5">
                  {module.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2.5">
                      <span className="text-emerald-500/70">&#10003;</span>
                      <span>{language === 'zh' ? item.text : item.textEn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bento-card border-l-4 border-l-emerald-500/40">
            <blockquote className="text-xl md:text-2xl text-zinc-200 italic text-center leading-relaxed font-light">
              {language === 'zh'
                ? '"财富不仅仅是资本，更是冷静、清晰和代码。"'
                : '"Wealth is not just capital, but calmness, clarity, and code."'}
            </blockquote>
            <p className="text-sm text-zinc-500 mt-4 text-center font-medium">
              — Abundra Capital {language === 'zh' ? '核心理念' : 'Core Philosophy'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
