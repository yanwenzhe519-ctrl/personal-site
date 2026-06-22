"use client";

import * as React from "react";
import { SectionReveal } from "@/components/section-reveal";
import { BookOpen, Brain, Target, Repeat } from "lucide-react";

const LEARNING_POINTS = [
  {
    title: "终身学习",
    desc: "技术迭代日新月异，保持空杯心态，每日精进。",
    icon: Brain,
  },
  {
    title: "知行合一",
    desc: "不止于理论，将知识落地为实际产出与价值。",
    icon: Target,
  },
  {
    title: "持续输出",
    desc: "通过写作与分享，让学习形成正向反馈闭环。",
    icon: BookOpen,
  },
  {
    title: "迭代进化",
    desc: "没有终点，只有不断超越昨天的自己。",
    icon: Repeat,
  },
];

export function Learning() {
  return (
    <section id="learning" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8 block">
            Philosophy
          </span>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground mb-6">
            坚持<span className="text-accent">学习</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            在这个瞬息万变的时代，学习不是一种选择，而是一种本能。
            每一次知识积累，都是在为未来的突破积蓄力量。
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNING_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <SectionReveal key={point.title} delay={200 + i * 80}>
                <div className="text-center p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.desc}
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
