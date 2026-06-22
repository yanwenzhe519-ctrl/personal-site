export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono tracking-wide">
          &copy; {new Date().getFullYear()} Venz. 用心打造。
        </p>
        <p className="text-xs text-muted-foreground/60 font-mono">
          Built with Next.js &middot; Tailwind &middot; shadcn/ui
        </p>
      </div>
    </footer>
  );
}
