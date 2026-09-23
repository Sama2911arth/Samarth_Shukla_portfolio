import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://samarthshukla.site"),
  title: "Samarth Shukla | Software Engineer",
  description: "Portfolio of Samarth Shukla, a software engineer building AI-enabled products with React, Next.js, FastAPI, Flutter, and AWS-backed cloud workflows.",
  keywords: ["Samarth Shukla", "Software Engineer", "Full Stack Developer", "AI Developer", "Next.js", "FastAPI", "Flutter", "React Native", "AWS"],
  openGraph: {
    title: "Samarth Shukla | Software Engineer",
    description: "Portfolio of Samarth Shukla, a software engineer building AI-enabled products with React, Next.js, FastAPI, Flutter, and AWS-backed cloud workflows.",
    url: "https://samarthshukla.site",
    siteName: "Samarth Shukla",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
