import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trilo — Decide, Compare, Build. Continuously.",
    short_name: "Trilo",
    description:
      "A state-aware product development system that continuously guides builders in deciding, comparing, and executing how their product is built — with memory that never resets. Lives inside your editor.",
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
