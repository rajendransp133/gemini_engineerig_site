import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://geminiengineeringworks.in";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${baseUrl}/logo.webp`,
        `${baseUrl}/hero1.webp`,
        `${baseUrl}/hero2.webp`,
        `${baseUrl}/hero3.webp`,
        `${baseUrl}/stack1.webp`,
        `${baseUrl}/stack2.webp`,
        `${baseUrl}/stack3.webp`,
        `${baseUrl}/stack4.webp`,
        `${baseUrl}/tneb.webp`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${baseUrl}/logo.webp`],
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#products`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/stack1.webp`,
        `${baseUrl}/stack2.webp`,
        `${baseUrl}/stack3.webp`,
        `${baseUrl}/stack4.webp`,
      ],
    },
  ];
}
