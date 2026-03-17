import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://trilo.dev";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      videos: [
        {
          title: "Trilo — The Lifecycle Protocol",
          thumbnail_loc: `${siteUrl}/api/video-thumbnail`,
          description:
            "See how Trilo continuously guides product development — from architecture decisions to trade-off comparisons to execution tracking. A state-aware system with memory that never resets.",
          content_loc: `${siteUrl}/Trilo__Idea_to_Execution.mp4`,
          publication_date: "2026-03-13T00:00:00Z",
          family_friendly: "yes" as const,
        },
      ],
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
