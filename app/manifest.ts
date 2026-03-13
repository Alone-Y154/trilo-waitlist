import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trilo — From Idea to Architecture in Minutes",
    short_name: "Trilo",
    description:
      "AI-powered software architecture and development planning. Turn your idea into a complete engineering blueprint with tech stack, architecture, timeline, and cost — then build via MCP.",
    start_url: "/",
    display: "standalone",
    background_color: "#030305",
    theme_color: "#00e8a2",
    orientation: "portrait-primary",
    categories: ["developer tools", "productivity", "business"],
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
