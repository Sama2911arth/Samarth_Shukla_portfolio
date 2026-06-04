import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samarth Shukla | Junior SDE at Aura AI",
  description: "Portfolio of Samarth Shukla, a full-stack and mobile developer building AI-enabled products with Next.js, FastAPI, Flutter, React Native, and cloud-backed workflows.",
  keywords: ["Samarth Shukla", "Full Stack Developer", "AI Developer", "Next.js", "FastAPI", "Flutter", "React Native"],
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
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
