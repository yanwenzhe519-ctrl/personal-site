"use client";

import * as React from "react";
import { ScrollIndicator } from "@/components/scroll-indicator";

const TITLE = "Creating at the";
const TITLE_HIGHLIGHT = "Intersection";
const SUBTITLE = "of Code & Imagination";
const TAGLINE = "Full-stack developer · AI explorer · Open source enthusiast";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--accent)/0.03)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
            Portfolio &mdash; 2026
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
          <span className="block text-foreground">{TITLE}</span>
          <span className="block text-accent mt-2">{TITLE_HIGHLIGHT}</span>
          <span className="block text-foreground mt-2">{SUBTITLE}</span>
        </h1>

        {/* Tagline */}
        <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {TAGLINE}
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-accent-soft transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
