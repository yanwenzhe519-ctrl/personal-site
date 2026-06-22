import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { MouseGlow } from "@/components/mouse-glow";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "小u | Developer & Creator",
  description:
    "Full-stack developer crafting elegant digital experiences at the intersection of code and imagination.",
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
