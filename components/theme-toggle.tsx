"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 rounded-full border border-border bg-transparent"
        aria-label="Toggle theme"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-9 h-9 rounded-full",
        "border transition-theme",
        isDark
          ? "border-[#2A2A36] bg-[#1C1C24] hover:bg-[#25252E]"
          : "border-[#D0D0D8] bg-white hover:bg-[#F0F0F2]"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#EDEDEF]" />
        ) : (
          <Moon className="w-4 h-4 text-[#1A1A24]" />
        )}
      </div>
    </button>
  );
}
