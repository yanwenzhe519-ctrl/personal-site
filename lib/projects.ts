export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "IP Weave",
    description:
      "链上衍生宇宙 Agent —— 在 Z.AI 黑客松中构建的去中心化 IP 编织协议，让数字资产在链上自主演化。",
    tags: ["AI", "Blockchain", "Agent"],
    href: "#",
  },
  {
    title: "Nebula UI",
    description:
      "一套基于 React 的组件库，专注于数据可视化与交互式仪表盘，支持主题定制与实时数据流。",
    tags: ["React", "TypeScript", "D3.js"],
    href: "#",
  },
  {
    title: "Echo Shell",
    description:
      "跨平台终端模拟器，集成 AI 命令补全与智能错误诊断，提升命令行工作效率。",
    tags: ["Rust", "TUI", "AI"],
    href: "#",
  },
  {
    title: "Pixel Forge",
    description:
      "实时协作像素艺术编辑器，支持多人在线绘制、历史回溯与 NFT 导出功能。",
    tags: ["WebSocket", "Canvas", "Next.js"],
    href: "#",
  },
];
