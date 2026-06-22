"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { label: "关于", href: "#about" },
  { label: "领域", href: "#domains" },
  { label: "学习", href: "#learning" },
  { label: "币股联动", href: "#crypto-stock" },
  { label: "项目", href: "#projects" },
  { label: "联系", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16 md:h-20">
        <a
          href="#"
          className="font-heading text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          Venz<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-6 md:gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
