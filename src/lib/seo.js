/**
 * Central SEO configuration for Malviya Studio.
 *
 * Single source of truth for site metadata, business/NAP details, target
 * keywords, and a small helper to build per-page metadata consistently.
 * Used by the root layout, sitemap, robots, JSON-LD, and per-page metadata.
 */

// Production URL — update if the live domain changes.
export const SITE_URL = "https://malviyastudio.com";
export const SITE_NAME = "Malviya Studio";

// Default social-share image (must exist in /public). Replace with a dedicated
// 1200x630 og-image.jpg when available.
export const OG_IMAGE = "/images/hero/caro.jpg";

// Business / NAP (Name-Address-Phone) — used for local SEO + structured data.
// TODO: fill the exact street address, postal code, and geo coordinates for
// the strongest local-rich-result eligibility.
export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Malviya Studio",
  phones: ["+91-8299338931", "+91-9415225291"],
  email: "malviyastudio1@gmail.com",
  streetAddress: "", // TODO: add exact studio street address
  city: "Prayagraj",
  region: "Uttar Pradesh",
  postalCode: "", // TODO
  country: "IN",
  // Areas the studio serves (helps local + nearby-city queries).
  areaServed: ["Prayagraj", "Allahabad", "Uttar Pradesh"],
  socials: {
    instagram: "https://www.instagram.com/malviya__studio/",
    facebook: "https://www.facebook.com/malviyastudio1",
  },
  // TODO: when you have real aggregate ratings, set these for review rich results.
  // rating: { value: "4.9", count: 250 },
};

// Keyword set: the studio's target phrases + high-value long-tail / local terms.
export const KEYWORDS = [
  // --- Core target phrases ---
  "Best Wedding Photographer in Prayagraj",
  "Wedding Photographer in Prayagraj",
  "Best Wedding Photographer in Allahabad",
  "Best Wedding & Pre-Wedding Photographers in Prayagraj",
  "Wedding & Pre-Wedding Photographer in Prayagraj",
  "Pre-wedding photography Prayagraj",
  "Best Photography Studio and Color Lab in Prayagraj",
  "Cinematic Wedding Videographer in Prayagraj",
  "Best Cinematic Videographer Prayagraj",
  "Cinematic photographer Prayagraj",
  "Luxury Wedding Photographer & Cinematographer in Prayagraj",
  "Best Wedding Photography Allahabad",
  "Best photography studio in Allahabad",
  "Wedding photography studio Prayagraj",
  "Malviya Studio",

  // --- Service / style long-tail ---
  "Candid wedding photography Prayagraj",
  "Traditional wedding photography Prayagraj",
  "Wedding cinematography Allahabad",
  "Pre-wedding shoot Prayagraj",
  "Engagement photography Prayagraj",
  "Destination wedding photographer Prayagraj",
  "Bridal photoshoot Prayagraj",
  "Haldi and mehndi photography Prayagraj",
  "Drone wedding photography Prayagraj",
  "Wedding album design Prayagraj",
  "Photo color lab Prayagraj",

  // --- Other shoots ---
  "Baby photoshoot Prayagraj",
  "Newborn photography Prayagraj",
  "Maternity photoshoot Prayagraj",
  "Birthday photoshoot Prayagraj",
  "Event photography Prayagraj",

  // --- Local intent / commercial ---
  "Top wedding photographers in Prayagraj",
  "Affordable wedding photographer Prayagraj",
  "Professional photographer near me Prayagraj",
  "Wedding videographer near me Allahabad",
  "Wedding photography packages Prayagraj",
];

export const DEFAULT_TITLE =
  "Best Wedding Photographer & Cinematographer in Prayagraj | Malviya Studio";

export const DEFAULT_DESCRIPTION =
  "Malviya Studio is the best wedding photographer, pre-wedding & cinematic videographer and photography studio + color lab in Prayagraj (Allahabad). Book luxury wedding, pre-wedding, baby and event shoots.";

/**
 * Build a Metadata object for a page, merged with sensible SEO defaults.
 * Pass a `path` (e.g. "/films") to set a canonical URL + OG url.
 */
export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = KEYWORDS,
  images = [OG_IMAGE],
} = {}) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: title || DEFAULT_TITLE,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: images.map((img) => ({
        url: img,
        width: 1200,
        height: 630,
        alt: title || SITE_NAME,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: title || DEFAULT_TITLE,
      description,
      images,
    },
  };
}
