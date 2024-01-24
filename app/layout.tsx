import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { PageFooter, PageNav, QueryProvider } from "@/components";
import { ThemeProvider } from "@/components/ThemeProvider";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Moodee",
  description: "Track and journal your daily mood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <html lang="en" className={GeistSans.className} suppressHydrationWarning>
        <body className="bg-background text-foreground">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen flex flex-col items-center">
              <PageNav />
              {children}
              <PageFooter />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </QueryProvider>
  );
}
