import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trilo — From Idea to Architecture in Minutes",
  description:
    "Turn your product idea into a realistic, architecture-driven development plan. Get technology stack recommendations, system design, timelines, and cost estimates.",
  keywords: [
    "software architecture",
    "development planning",
    "tech stack recommendation",
    "solution architect",
    "AI planning",
    "system design",
    "project estimation",
  ],
  openGraph: {
    title: "Trilo — From Idea to Architecture in Minutes",
    description:
      "Describe what you want to build. Get a complete engineering blueprint — stack, architecture, timeline, and cost.",
    type: "website",
    siteName: "Trilo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trilo — From Idea to Architecture in Minutes",
    description:
      "Describe what you want to build. Get a complete engineering blueprint.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
