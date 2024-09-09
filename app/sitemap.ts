import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wnetrza.deweloperskie.pl",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
      alternates: {
        languages: {
          en: "https://wnetrza.deweloperskie.pl/en",
        },
      },
    },
    {
      url: "https://wnetrza.deweloperskie.pl/katowice-1",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
      alternates: {
        languages: {
          en: "https://wnetrza.deweloperskie.pl/en/katowice-1",
        },
      },
    },
    {
      url: "https://wnetrza.deweloperskie.pl/katowice-2",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
      alternates: {
        languages: {
          en: "https://wnetrza.deweloperskie.pl/en/katowice-2",
        },
      },
    },
    {
      url: "https://wnetrza.deweloperskie.pl/informacje",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.1,
      alternates: {
        languages: {
          en: "https://wnetrza.deweloperskie.pl/en/informacje",
        },
      },
    },
  ];
}
