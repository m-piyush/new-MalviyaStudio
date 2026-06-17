import { SITE_URL } from "@/lib/seo"

/**
 * Generates /robots.txt. Allows all crawlers and points to the sitemap.
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
