import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wnetrza.deweloperskie.pl",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://wnetrza.deweloperskie.pl/en",
        },
      },
    },
    {
      url: "https://wnetrza.deweloperskie.pl/oferta",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://wnetrza.deweloperskie.pl/en/oferta",
        },
      },
    },
    {
      url: "https://wnetrza.deweloperskie.pl/katowice-1",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://wnetrza.deweloperskie.pl/en/katowice-1",
        },
      },
    },
    {
      url: "https://wnetrza.deweloperskie.pl/katowice-2",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://wnetrza.deweloperskie.pl/en/katowice-2",
        },
      },
    },
    {
      url: "https://wnetrza.deweloperskie.pl/katowice-3",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://wnetrza.deweloperskie.pl/en/katowice-3",
        },
      },
    },
    {
      url: "https://wnetrza.deweloperskie.pl/dane-osobowe",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: "https://wnetrza.deweloperskie.pl/polityka-prywatnosci",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
  ];
}
