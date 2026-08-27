import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOKESH D | Software Engineer & AI Developer",
  description: "Portfolio of Yokesh D, an M.Tech Software Engineering student skilled in building AI-driven applications, cloud systems, and NLP solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
