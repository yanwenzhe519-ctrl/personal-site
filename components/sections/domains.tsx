"use client";

import * as React from "react";
import { SectionReveal } from "@/components/section-reveal";
import { Cpu, Globe, TrendingUp, Mic, ExternalLink, ChevronRight, Users } from "lucide-react";

const DOMAINS = [
  {
    title: "AI",
    icon: Cpu,
    subtitle: "从大模型到 AI Agent，驱动效率革命与内容创作飞轮",
    description:
      "探索人工智能前沿应用，结合传统金融知识构建个人 Agent 系统。助力币股研究、内容自动化与精益创业决策。",
    links: [
      { label: "IP Weave · 链上衍生宇宙 Agent", href: "https://github.com/yanwenzhe519-ctrl" },
      { label: "个人知识库 + 多平台内容自动化", href: "#" },
      { label: "AI 驱动的投资研究与社群运营", href: "#" },
    ],
  },
  {
    title: "Web3",
    icon: Globe,
    subtitle: "传统金融 × AI 赋能",
    description:
      "研究区块链协议、链上生态与 DeFi 工具，结合传统金融风控思维，实现币股联动。香港基地，实战分享与社群共建。",
    links: [
      { label: "币安 Binance · 邀请码 VENZ6688", href: "https://www.binance.com/zh-CN/join?ref=VENZ6688" },
      { label: "Bybit · 邀请码 MLEMYJD · 得 $60 返现", href: "https://www.bybit.com/invite?ref=MLEMYJD" },
      { label: "OKX · 注册链接", href: "https://www.sbxgh.top/zh-CN/referral/register?clacCode=KT3LDGF9&from=%2Fzh-CN%2Fevents%2Freferral-all-program&source=events&utmSource=PremierInviter" },
      { label: "Bitget Wallet · 邀请码 venz8888", href: "https://web3.bitget.com/share/2nBYei?inviteCode=venz8888" },
      { label: "社群：200+ 人币股融合学习群", href: "#", icon: Users },
    ],
  },
  {
    title: "美股",
    icon: TrendingUp,
    subtitle: "传统金融 × 全球视野",
    description:
      "结合传统金融出身背景，融合币圈思维，系统拆解美股个股与板块。注重风险控制与长期复利，服务于币股联动投资组合。",
    links: [
      { label: "核心持仓与季度复盘", href: "#" },
      { label: "技术 + 基本面双轮驱动", href: "#" },
      { label: "港股 / A 股 / 美股跨市场联动机会", href: "#" },
      { label: "实战案例分享（社群内）", href: "#" },
    ],
  },
  {
    title: "自媒体",
    icon: Mic,
    subtitle: "@SITm855 · 多平台创作者",
    description:
      "多平台内容创作者之路，以 @SITm855（新号重启版）为主阵地。专注坚持学习、币股融合、精益创业，把传统金融 + AI + Web3 + 美股实战经验转化为个人 IP，打造互帮互助的学习社群。",
    links: [
      { label: "𝕏 主阵地 → @SITm855", href: "https://x.com/sitm855" },
      { label: "视频/图文 → 同步更新于 X + 各视频平台", href: "https://x.com/sitm855" },
      { label: "社群共建 → 私信 @SITm855 申请入群", href: "https://x.com/sitm855" },
      { label: "个人品牌 → 传统金融 × AI/Web3/美股 × 精益创业", href: "https://x.com/sitm855" },
    ],
  },
];

export function Domains() {
  return (
    <section id="domains" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8 block">
            Domains
          </span>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground mb-16">
            探索的<span className="text-accent">领域</span>
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {DOMAINS.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <SectionReveal key={domain.title} delay={150 + i * 100}>
                <div className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-accent-soft flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-1">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {domain.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    {domain.description}
                  </p>

                  <div className="mt-auto space-y-2">
                    <div className="border-t border-border pt-4" />
                    {domain.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ChevronRight className="w-3 h-3 shrink-0 text-accent/60" />
                        <span className="flex-1">{link.label}</span>
                        <ExternalLink className="w-3 h-3 shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
