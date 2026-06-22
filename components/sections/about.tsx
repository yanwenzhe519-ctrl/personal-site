import { SectionReveal } from "@/components/section-reveal";

const STATS = [
  { label: "从业经验", value: "4+" },
  { label: "项目", value: "12" },
  { label: "技术栈", value: "20+" },
  { label: "开源贡献", value: "8" },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8 block">
            About
          </span>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <SectionReveal delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground mb-6">
              把复杂想法变成
              <span className="text-accent">优雅</span>的数字体验
            </h2>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                我是一名全栈开发者，热衷于构建处于技术前沿的产品 &mdash; 从 AI Agent
                和区块链协议到响应式 Web 应用。
              </p>
              <p>
                目前正深入探索 AI 与去中心化系统的交汇点。我相信最有趣的工作，
                往往发生在将看似不相关的想法碰撞在一起的时候。
              </p>
              <p>
                不写代码的时候，我会探索新工具、贡献开源项目，
                或思考技术如何塑造更好的人类体验。
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* Stats */}
        <SectionReveal delay={300}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground font-mono tracking-wide">
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
