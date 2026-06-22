"use client";

import * as React from "react";

export function MouseGlow() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-1000"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle at center, hsl(var(--accent) / 0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
