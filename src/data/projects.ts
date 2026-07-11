import todoImage from "../assets/pictures/done-todo-master.png";
import expenseImage from "../assets/pictures/record-expense.png";
import infoKeeperImage from "../assets/pictures/info-keeper-log.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  descriptionZh: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "待办清单",
    description: "A powerful task management app with full CRUD operations, category management, calendar view, and task reminders. Responsive design helps you plan your work and life anytime, anywhere.",
    descriptionZh: "一款高效任务管理应用。核心功能涵盖待办事项的增删改查、分类管理、日历视图及任务提醒，采用响应式设计，助您随时随地轻松规划工作与生活。",
    image: todoImage,
    tags: ["React 18", "Vite", "Tailwind CSS", "Supabase"],
    link: "https://done-todo-master.nocode.host",
  },
  {
    id: 2,
    title: "记账工具",
    description: "A smart expense tracking app supporting income/expense recording, category statistics, import/export, helping you stay on top of your finances.",
    descriptionZh: "简记是一款智能记账应用，支持收支记录、分类统计、导入导出，助您轻松掌握财务状况。",
    image: expenseImage,
    tags: ["Vite", "TanStack", "TypeScript", "Supabase"],
    link: "https://record-expense.lovable.app",
  },
  {
    id: 3,
    title: "个人信息保险箱",
    description: "A personal information management tool with CRUD operations, field masking, timeline view, and data statistics for secure and efficient sensitive data management.",
    descriptionZh: "我的信息保险箱是一款个人信息管理工具。核心功能包括信息增删改查，字段脱敏、信息时间轴、数据统计等，助您安全高效管理敏感信息。",
    image: infoKeeperImage,
    tags: ["React 19", "TypeScript", "Vite", "Supabase"],
    link: "https://xiuyi-info-keeper-log.lovable.app",
  },
];