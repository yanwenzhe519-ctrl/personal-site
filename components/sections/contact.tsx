"use client";

import * as React from "react";
import { SectionReveal } from "@/components/section-reveal";
import { Mail, Github, MessageCircle, Send } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "yanwenzhe519@gmail.com",
    href: "mailto:yanwenzhe519@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "yanwenzhe519-ctrl",
    href: "https://github.com/yanwenzhe519-ctrl",
    icon: Github,
  },
  {
    label: "WeChat",
    value: "runzeyy",
    href: "#",
    icon: MessageCircle,
  },
  {
    label: "Telegram",
    value: "@wenzherunze",
    href: "https://t.me/wenzherunze",
    icon: Send,
  },
];

function CopyEmailButton() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("yanwenzhe519@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-6 text-sm text-muted-foreground hover:text-accent transition-colors font-mono"
    >
      {copied ? "✓ 已复制！" : "点击复制邮箱"}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-8 block">
            Contact
          </span>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground mb-6">
            保持<span className="text-accent">联系</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-16">
            无论是想一起做项目、合作，还是只是想打个招呼 &mdash; 我都很期待收到你的消息。
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_LINKS.map((link, i) => {
            const Icon = link.icon;

            return (
              <SectionReveal key={link.label} delay={200 + i * 100}>
                <a
                  href={link.href}
                  target={link.label === "WeChat" ? undefined : "_blank"}
                  rel={
                    link.label === "WeChat"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {link.label}
                    </div>
                    <div className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={500}>
          <div className="mt-16 pt-8 border-t border-border text-center">
            <CopyEmailButton />
            <p className="mt-3 text-xs text-muted-foreground font-mono tracking-wide">
              可接 freelance &amp; 合作
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
