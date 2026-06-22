"use client";

import * as React from "react";
import { SectionReveal } from "@/components/section-reveal";
import { Cpu, Globe, Mic, TrendingUp, ExternalLink, ChevronRight } from "lucide-react";

const DOMAINS = [
  {
    title: "AI",
    description: "探索人工智能的前沿应用，从大模型到 AI Agent，用智能驱动效率革新。",
    icon: Cpu,
    links: [
      { label: "IP Weave · 链上衍生宇宙 Agent", href: "https://github.com/yanwenzhe519-ctrl" },
    ],
  },
  {
    title: "Web3",
    description: "深入去中心化世界，研究区块链协议与链上生态的无限可能。",
    icon: Globe,
    links: [
      { label: "币安 Binance · 邀请码 VENZ6688", href: "https://www.binance.com/zh-CN/join?ref=VENZ6688" },
      { label: "Bybit · 邀请码 MLEMYJD · 得 $60 返现", href: "https://www.bybit.com/invite?ref=MLEMYJD" },
      { label: "OKX · 注册链接", href: "https://www.sbxgh.top/zh-CN/referral/register?clacCode=KT3LDGF9&from=%2Fzh-CN%2Fevents%2Freferral-all-program&source=events&utmSource=PremierInviter" },
      { label: "Bitget Wallet · 邀请码 venz8888", href: "https://web3.bitget.com/share/2nBYei?inviteCode=venz8888" },
    ],
  },
  {
    title: "自媒体",
    description: "内容创作与个人品牌，让知识在传播中产生更大的价值。",
    icon: Mic,
    links: [],
  },
  {
    title: "美股",
    description: "深耕美股市场，结合技术与基本面分析，把握投资机遇。",
    icon: TrendingUp,
    links: [],
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
                  <div className="w-12 h-12 rounded-lg bg-accent-soft flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {domain.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {domain.description}
                  </p>

                  {domain.links.length > 0 && (
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
                  )}
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
