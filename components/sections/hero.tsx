"use client";

import * as React from "react";
import { ScrollIndicator } from "@/components/scroll-indicator";

const TAGLINE = "AI · Web3 · 币股联动 · 终身学习者";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--accent)/0.03)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Main title */}
        <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-accent">
          Venz
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {TAGLINE}
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#domains"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            探索领域
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-accent-soft transition-colors"
          >
            联系我
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
