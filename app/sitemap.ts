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
          title: "Trilo — From Idea to Execution",
          thumbnail_loc: `${siteUrl}/api/video-thumbnail`,
          description:
            "Watch how Trilo transforms your product idea into a complete engineering blueprint with AI-powered architecture planning, tech stack recommendations, timelines, and cost estimates.",
          content_loc: `${siteUrl}/Trilo__Idea_to_Execution.mp4`,
          publication_date: "2026-03-13T00:00:00Z",
          family_friendly: "yes" as const,
        },
      ],
    },
  ];
}
