export type Language = 'zh' | 'en';

export const translations = {
  zh: {
    nav: {
      home: '首页',
      influencers: '影响',
      music: '音乐',
      movies: '电影',
      programming: '计算机',
      investing: '投资',
      reading: '阅读',
    },
    hero: {
      greeting: '你好，我是 Khalil',
      subtitle: 'Cardano DApp开发者 & 计算机科学专业学生',
      description: '专注于区块链技术、去中心化应用开发，热爱音乐与电影',
    },
    about: {
      title: '关于我',
      subtitle: '我是一名充满热情的 Cardano DApp 开发者和计算机科学专业的学生',
      bio: '简介',
      interests: '兴趣爱好',
    },
    music: {
      title: '音乐品味',
      subtitle: '音乐是我生活中不可或缺的一部分，这些是我最喜欢的音乐人',
    },
    movies: {
      title: '电影品味',
      subtitle: '电影是我观察世界的另一个窗口，这些作品深深影响了我',
    },
    programming: {
      title: '编程项目',
      subtitle: '我的项目和技术栈',
      skills: '技能水平',
    },
    investing: {
      title: '投资理念',
      subtitle: '投资不是短期的投机，而是长远的规划',
      portfolio: '投资组合',
    },
    reading: {
      title: '阅读书单',
      subtitle: '阅读让我遇见更广阔的世界',
    },
    common: {
      learnMore: '了解更多',
      viewProjects: '查看项目',
      contact: '联系我',
    },
    contact: {
      title: '联系方式',
      email: '📧 邮箱',
      location: '📍 位置',
      locationValue: '温哥华，加拿大',
    },
  },
  en: {
    nav: {
      home: 'Home',
      influencers: 'Influencers',
      music: 'Music',
      movies: 'Movies',
      programming: 'Programming',
      investing: 'Investing',
      reading: 'Reading',
    },
    hero: {
      greeting: 'Hi, I\'m Khalil',
      subtitle: 'Cardano DApp Developer & Computer Science Student',
      description: 'Focused on blockchain technology, decentralized application development, passionate about music and movies',
    },
    about: {
      title: 'About Me',
      subtitle: 'I am a passionate Cardano DApp developer and Computer Science student',
      bio: 'Bio',
      interests: 'Interests',
    },
    music: {
      title: 'Music Taste',
      subtitle: 'Music is an essential part of my life. Here are my favorite artists',
    },
    movies: {
      title: 'Movies',
      subtitle: 'Movies are another window through which I observe the world. These works have deeply influenced me',
    },
    programming: {
      title: 'Programming',
      subtitle: 'My projects and tech stack',
      skills: 'Skills',
    },
    investing: {
      title: 'Investing',
      subtitle: 'Investing is not short-term speculation, but long-term planning',
      portfolio: 'Portfolio',
    },
    reading: {
      title: 'Reading',
      subtitle: 'Reading allows me to meet a broader world',
    },
    common: {
      learnMore: 'Learn More',
      viewProjects: 'View Projects',
      contact: 'Contact Me',
    },
    contact: {
      title: 'Contact',
      email: '📧 Email',
      location: '📍 Location',
      locationValue: 'Vancouver, Canada',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.zh;
