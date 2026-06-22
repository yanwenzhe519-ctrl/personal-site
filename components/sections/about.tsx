import { SectionReveal } from "@/components/section-reveal";

const STATS = [
  { label: "从业经验", value: "4+" },
  { label: "项目", value: "12" },
  { label: "领域", value: "4" },
  { label: "终身学习", value: "∞" },
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
              在 AI、Web3 与金融的
              <span className="text-accent">交汇处</span>
              持续探索
            </h2>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                我是 <span className="text-accent font-medium">Venz</span>，一个穿梭在代码、加密世界与金融市场之间的探索者。
                我相信技术的力量，更相信持续学习能让一切边界变得模糊。
              </p>
              <p>
                从 AI Agent 到区块链协议，从美股分析到内容创作 &mdash;
                我关注那些正在重塑世界的技术浪潮，并致力于理解它们之间的内在联系。
              </p>
              <p>
                「币股融合」是我目前深耕的方向：研究加密货币与美股市场的联动规律，
                用数据驱动的方法在两大市场之间寻找机会。
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
