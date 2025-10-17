import type { MetadataRoute } from "next";
import data from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = data.restaurantInfo.siteUrl;
  const now = new Date();
  const categories = Array.from(new Set(data.menuItems.map((i) => i.category)));

  // پایه سایت‌مپ با تایپ درست
  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/menu`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // حتماً به خروجی map نوع بدیم تا literal union بمونه
  const categoryEntries = categories.map<MetadataRoute.Sitemap[number]>(
    (c) => ({
      url: `${base}/menu/${encodeURIComponent(c)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [...baseEntries, ...categoryEntries];
}
