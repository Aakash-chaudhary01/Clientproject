import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADITYA KUMAR — Video Editor | Visual Storyteller",
  description:
    "Portfolio of Aditya Kumar, video editor crafting cinematic visuals, high-impact commercial reels, brand promotions, and documentary stories.",
  keywords: [
    "Aditya Kumar",
    "Video Editor",
    "Visual Storyteller",
    "Cinematic Reels",
    "Color Grading",
    "Sound Design",
    "NaxAi",
  ],
  authors: [{ name: "Aditya Kumar" }],
  openGraph: {
    title: "ADITYA KUMAR — Video Editor | Visual Storyteller",
    description: "I turn ideas into feelings. High-impact commercial reels, brand stories, and editorial post-production.",
    siteName: "ADITYA KUMAR",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADITYA KUMAR — Video Editor & Visual Storyteller",
    description: "I turn ideas into feelings. High-impact commercial reels, brand stories, and editorial post-production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-black text-[#F5F5F5] antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-[#F5F5F5] selection:bg-[#D7FF64] selection:text-black">
        {children}
      </body>
    </html>
  );
}
