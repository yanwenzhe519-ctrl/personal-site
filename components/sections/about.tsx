import { SectionReveal } from "@/components/section-reveal";

const STATS = [
  { label: "Years Building", value: "4+" },
  { label: "Projects", value: "12" },
  { label: "Technologies", value: "20+" },
  { label: "Open Source", value: "8" },
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
              Turning complex ideas into
              <span className="text-accent"> elegant</span> digital experiences
            </h2>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a full-stack developer passionate about building
                products that live at the edge of technology &mdash; from AI
                agents and blockchain protocols to responsive web applications.
              </p>
              <p>
                Currently diving deep into the intersection of AI and
                decentralized systems, I believe the most interesting work
                happens when you bring together seemingly unrelated ideas and
                let them collide.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new
                tools, contributing to open source, or thinking about how
                technology can shape better human experiences.
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
