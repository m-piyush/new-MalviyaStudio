import { SITE_URL, SITE_NAME, OG_IMAGE, BUSINESS, DEFAULT_DESCRIPTION } from "@/lib/seo"

/**
 * JSON-LD structured data for local SEO.
 * Emits a LocalBusiness/Photographer entity + WebSite, which helps Google
 * understand the studio, its location/service area, and contact details
 * (and makes the site eligible for local + sitelinks-style rich results).
 */
export default function StructuredData() {
  const address = {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  }
  if (BUSINESS.streetAddress) address.streetAddress = BUSINESS.streetAddress
  if (BUSINESS.postalCode) address.postalCode = BUSINESS.postalCode

  const business = {
    "@type": ["LocalBusiness", "Photographer"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    description: DEFAULT_DESCRIPTION,
    telephone: BUSINESS.phones,
    email: BUSINESS.email,
    address,
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "City", name })),
    sameAs: Object.values(BUSINESS.socials),
    priceRange: "₹₹",
  }

  if (BUSINESS.rating) {
    business.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
    }
  }

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      business,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#business` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
