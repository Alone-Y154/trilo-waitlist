import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import Script from "next/script";
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

const SITE_URL = "https://trilo.dev";
const GA_MEASUREMENT_ID = "G-RJBVRJNB2V";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trilo — From Idea to Architecture in Minutes",
    template: "%s | Trilo",
  },
  description:
    "Turn your product idea into a complete engineering blueprint. Get AI-powered technology stack recommendations, system architecture design, realistic timelines, and cost estimates — then send your plan to Cursor, Replit, or Lovable via MCP to start building.",
  keywords: [
    "software architecture planner",
    "AI development planning",
    "tech stack recommendation tool",
    "solution architect AI",
    "system design tool",
    "project estimation software",
    "software blueprint generator",
    "development cost estimator",
    "architecture decision tool",
    "MCP integration",
    "Model Context Protocol",
    "AI project planning",
    "software development planner",
    "startup tech stack",
    "engineering blueprint",
    "build vs buy analysis",
    "development timeline estimator",
    "Cursor AI integration",
    "Replit integration",
    "Lovable integration",
  ],
  authors: [{ name: "Trilo" }],
  creator: "Trilo",
  publisher: "Trilo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Trilo — From Idea to Architecture in Minutes",
    description:
      "Describe what you want to build. Get a complete engineering blueprint — stack, architecture, timeline, and cost. Then send it to your favorite build platform via MCP.",
    type: "website",
    siteName: "Trilo",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Trilo — AI-Powered Software Architecture Planning",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trilo — From Idea to Architecture in Minutes",
    description:
      "Describe what you want to build. Get a complete engineering blueprint — then send it to Cursor, Replit, or Lovable via MCP.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@trilodev",
    site: "@trilodev",
  },
  category: "Technology",
  classification: "Software Development Tools",
};

/* ── JSON-LD Structured Data ─────────────────────────────────── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trilo",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "AI-powered software architecture and development planning platform.",
  sameAs: [
    "https://twitter.com/trilodev",
    "https://github.com/trilodev",
  ],
  foundingDate: "2025",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Trilo",
  description:
    "Turn your product idea into a complete engineering blueprint with AI-powered architecture planning, tech stack recommendations, timelines, and cost estimates.",
  url: SITE_URL,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    description: "Join the waitlist — launching 2026",
  },
  featureList: [
    "AI-powered tech stack recommendations",
    "System architecture design",
    "Development timeline estimation",
    "Cost estimation",
    "Scenario comparison (build vs buy)",
    "Execution roadmap generation",
    "MCP integration with Cursor, Replit, Lovable, and more",
  ],
  creator: {
    "@type": "Organization",
    name: "Trilo",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trilo — From Idea to Architecture in Minutes",
  description:
    "Turn your product idea into a complete engineering blueprint. AI-powered software architecture planning with MCP integrations.",
  url: SITE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "Trilo",
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Software Architecture Planning",
  },
  significantLink: `${SITE_URL}/#waitlist`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Trilo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trilo is an AI-powered software architecture and development planning platform. You describe what you want to build, and Trilo generates a complete engineering blueprint including technology stack recommendations, system architecture design, development timelines, and cost estimates.",
      },
    },
    {
      "@type": "Question",
      name: "How does Trilo use MCP (Model Context Protocol)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trilo creates your engineering blueprint, then sends it directly to your favorite build platform — like Cursor, Replit, Lovable, Bolt.new, or VS Code — via the Model Context Protocol (MCP). This means you go from idea to code-ready plan to actual building in one seamless workflow.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Trilo for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trilo is built for founders, product managers, solo developers, startup CTOs, and engineering teams who want to make informed architecture decisions before writing code. It eliminates guesswork from technology selection, timeline estimation, and cost planning.",
      },
    },
    {
      "@type": "Question",
      name: "When will Trilo launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trilo is launching in 2026. You can join the waitlist now to get early access and be among the first to plan smarter.",
      },
    },
    {
      "@type": "Question",
      name: "What development platforms does Trilo integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trilo integrates with a wide range of build platforms via MCP, including Cursor, Lovable, Bolt.new, VS Code, Replit, Windsurf, GitHub, Vercel, Supabase, Linear, Notion, Figma, and Builder.io.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${outfit.variable} antialiased`}
      >
        {children}

        {/* ── Google Analytics ── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
