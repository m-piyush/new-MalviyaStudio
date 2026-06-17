import { SITE_URL } from "@/lib/seo"

/**
 * Generates /sitemap.xml at build time. Add new routes here as the site grows.
 */
export default function sitemap() {
  const now = new Date()

  // Primary marketing pages (highest priority first).
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.9, changeFrequency: "weekly" },
    { path: "/films", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/album", priority: 0.8, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/testimonials", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  ]

  const staticEntries = routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  // Gallery folders (galleryStrip/[id]) — folders 1..8 exist.
  const galleryEntries = Array.from({ length: 8 }, (_, i) => ({
    url: `${SITE_URL}/galleryStrip/${i + 1}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticEntries, ...galleryEntries]
}
