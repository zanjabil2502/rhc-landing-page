import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static"; // wajib untuk output: "export"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1, images: [`${SITE_URL}/images/hero.webp`] },
    { url: `${SITE_URL}/karir`, lastModified: now, changeFrequency: "monthly", priority: 0.6, images: [`${SITE_URL}/images/tentor.webp`] },
  ];
}
