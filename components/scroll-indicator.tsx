"use client";

import * as React from "react";

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
        滚动
      </span>
      <div className="w-[1px] h-10 bg-gradient-to-b from-muted-foreground/50 to-transparent animate-bounce-down" />
    </div>
  );
}
