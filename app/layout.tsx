import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { MouseGlow } from "@/components/mouse-glow";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "小u | 开发者 & 创造者",
  description:
    "全栈开发者，用代码与想象打造优雅的数字体验。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Nav />
          <MouseGlow />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
