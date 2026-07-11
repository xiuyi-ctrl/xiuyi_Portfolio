export const translations = {
  en: {
    nav: {
      brand: "PORTFOLIO",
      links: [
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Strengths", href: "#strengths" },
      ],
      contactBtn: "Contact",
    },
    hero: {
      greeting: "Welcome to",
      highlight: "Xiuyi's Portfolio",
      subtitle:
        "你好，这里是咻咿个人作品集。用 AI 辅助编程，将创意快速转化为可用的产品。",
      cta: "联系我",
    },
    experience: {
      title: "About",
      subtitle: "A brief look into my journey",
      intro1:
        "我是咻咿，热衷于利用 AI 辅助编程工具，将创意快速转化为可用的产品。我相信 AI 正在改变软件开发的方式，让更多人能够实现自己的想法。",
      intro2:
        "从待办清单到记账工具，再到个人信息保险箱，我享受用代码解决实际问题的过程。每个项目都是一次学习和成长的机会。",
      contactLabel: "Let's Connect",
      email: "2998526825@qq.com",
      location: "中国",
      stats: [
        { value: "3", label: "Projects Built" },
        { value: "3", label: "AI Tools Used" },
        { value: "∞", label: "Ideas" },
      ],
    },
    projects: {
      title: "Featured Work",
      subtitle: "Projects built with AI-assisted development.",
    },
    strengths: {
      title: "What I Do Best",
      subtitle: "Core competencies that drive my work",
      items: [
        {
          title: "Vibe Coding",
          description: "Leveraging AI tools to rapidly transform ideas into working products. From concept to deployment in record time.",
          icon: "zap",
        },
        {
          title: "Rapid Prototyping",
          description: "Quickly turning ideas into functional prototypes using modern no-code and low-code platforms combined with AI assistance.",
          icon: "code",
        },
        {
          title: "Product Thinking",
          description: "Focusing on solving real problems with practical solutions. Every project starts with understanding the user's needs.",
          icon: "design",
        },
        {
          title: "Continuous Learning",
          description: "Always exploring new tools and technologies. Passionate about the intersection of AI and software development.",
          icon: "server",
        },
      ],
    },
    contact: {
      title: "Let's Create Something",
      highlight: "Together",
      subtitle: "I'm currently exploring new ideas and projects. Whether you have a concept you want to bring to life or just want to chat about Vibe Coding — I'd love to hear from you.",
      email: "2998526825@qq.com",
      emailLabel: "Send a Message",
      github: "GitHub",
      footer: "Designed & Built with care. All rights reserved.",
    },
  },
  zh: {
    nav: {
      brand: "PORTFOLIO",
      links: [
        { label: "经历", href: "#experience" },
        { label: "项目", href: "#projects" },
        { label: "优势", href: "#strengths" },
      ],
      contactBtn: "联系我",
    },
    hero: {
      greeting: "你好，这里是",
      highlight: "咻咿个人作品集",
      subtitle:
        "用 AI 辅助编程，将创意快速转化为可用的产品。热爱探索新技术，享受从零到一的创造过程。",
      cta: "联系我",
    },
    experience: {
      title: "个人经历",
      subtitle: "一段旅程，无数可能",
      intro1:
        "我是咻咿，热衷于利用 AI 辅助编程工具，将创意快速转化为可用的产品。我相信 AI 正在改变软件开发的方式，让更多人能够实现自己的想法。",
      intro2:
        "从待办清单到记账工具，再到个人信息保险箱，我享受用代码解决实际问题的过程。每个项目都是一次学习和成长的机会。",
      contactLabel: "联系我",
      email: "2998526825@qq.com",
      location: "中国",
      stats: [
        { value: "3", label: "已完成项目" },
        { value: "3", label: "使用AI工具" },
        { value: "∞", label: "创意想法" },
      ],
    },
    projects: {
      title: "精选项目",
      subtitle: "使用 AI 辅助开发的作品集。",
    },
    strengths: {
      title: "核心优势",
      subtitle: "驱动我工作的关键能力",
      items: [
        {
          title: "Vibe Coding",
          description: "利用 AI 工具将创意快速转化为可用的产品。从概念到部署，速度惊人。",
          icon: "zap",
        },
        {
          title: "快速原型",
          description: "结合现代无代码/低代码平台和 AI 辅助，快速将想法转化为可用的功能原型。",
          icon: "code",
        },
        {
          title: "产品思维",
          description: "专注于用实用的解决方案解决真实问题。每个项目都从理解用户需求开始。",
          icon: "design",
        },
        {
          title: "持续学习",
          description: "不断探索新工具和新技术。对 AI 与软件开发的交汇点充满热情。",
          icon: "server",
        },
      ],
    },
    contact: {
      title: "一起创造",
      highlight: "联系我",
      subtitle: "我目前正在探索新的创意和项目。无论你有一个想实现的概念，还是只是想聊聊 Vibe Coding——我都很乐意收到你的消息。",
      email: "2998526825@qq.com",
      emailLabel: "发送邮件",
      github: "GitHub",
      footer: "用心设计与构建。保留所有权利。",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
