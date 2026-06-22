"use client";

import * as React from "react";
import { SectionReveal } from "@/components/section-reveal";
import { BarChart3, Link2, LineChart, TrendingUp, DollarSign, Activity } from "lucide-react";

const INSIGHTS = [
  {
    title: "宏观联动",
    desc: "加密货币与传统美股市场的相关性分析，捕捉跨市场信号。",
    icon: Link2,
  },
  {
    title: "趋势研判",
    desc: "结合技术指标与链上数据，判断市场周期与关键拐点。",
    icon: LineChart,
  },
  {
    title: "策略融合",
    desc: "将美股的价值投资理念与加密市场的波动特征相结合，构建稳健策略。",
    icon: BarChart3,
  },
  {
    title: "实时跟踪",
    desc: "7×24 小时市场监控，第一时间捕捉币股联动的交易机会。",
    icon: Activity,
  },
];

export function CryptoStock() {
  return (
    <section id="crypto-stock" className="section-padding relative overflow-hidden">
      {/* subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionReveal>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8 block">
            Focus
          </span>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <SectionReveal delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground mb-6">
              <span className="text-accent">币股融合</span>
              <br />
              币股联动
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                加密货币与美股市场之间的联系日益紧密。比特币的走势、
                美联储的政策、宏观经济的脉动 &mdash; 这些要素相互交织，
                共同构成了当今最值得关注的金融图景。
              </p>
              <p>
                我致力于研究两大市场之间的联动规律，
                用数据驱动的方法挖掘跨市场的投资机会，
                在波动中寻找确定性。
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="grid gap-4">
              {INSIGHTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </div>

        {/* Stats bar */}
        <SectionReveal delay={300}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-xl border border-border bg-card/50">
            {[
              { label: "市场覆盖", value: "币股双市" },
              { label: "分析维度", value: "12+" },
              { label: "跟踪标的", value: "50+" },
              { label: "策略类型", value: "多策略" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground font-mono tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
