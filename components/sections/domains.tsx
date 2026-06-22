"use client";

import * as React from "react";
import { SectionReveal } from "@/components/section-reveal";
import { Cpu, Globe, Mic, TrendingUp } from "lucide-react";

const DOMAINS = [
  {
    title: "AI",
    description: "探索人工智能的前沿应用，从大模型到 AI Agent，用智能驱动效率革新。",
    icon: Cpu,
  },
  {
    title: "Web3",
    description: "深入去中心化世界，研究区块链协议与链上生态的无限可能。",
    icon: Globe,
  },
  {
    title: "自媒体",
    description: "内容创作与个人品牌，让知识在传播中产生更大的价值。",
    icon: Mic,
  },
  {
    title: "美股",
    description: "深耕美股市场，结合技术与基本面分析，把握投资机遇。",
    icon: TrendingUp,
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
                <div className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-accent-soft flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {domain.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
