"use client";

import * as React from "react";
import { SectionReveal } from "@/components/section-reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8 block">
            Projects
          </span>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground mb-4">
            精选项目
          </h2>
          <p className="text-muted-foreground max-w-lg mb-16">
            这些是我亲手构建、贡献过、倾注了好奇心的项目。
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={150 + i * 100}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative block p-6 md:p-8 rounded-xl",
                  "border border-border bg-card",
                  "transition-all duration-300 ease-out",
                  "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
                  "hover:-translate-y-1"
                )}
              >
                {/* Top accent line on hover */}
                <span
                  className={cn(
                    "absolute top-0 left-6 right-6 h-[2px] rounded-full",
                    "bg-accent/60 scale-x-0 group-hover:scale-x-100",
                    "transition-transform duration-300 ease-out origin-left"
                  )}
                />

                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
