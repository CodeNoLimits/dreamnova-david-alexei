import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dreamnova-consult.vercel.app"
  return [
    { url: base, lastModified: new Date("2026-02-10"), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/mentions-legales`, lastModified: new Date("2026-02-10"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cgv`, lastModified: new Date("2026-02-10"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/confidentialite`, lastModified: new Date("2026-02-10"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/clients`, lastModified: new Date("2026-02-11"), changeFrequency: "daily", priority: 0.7 },
  ]
}
