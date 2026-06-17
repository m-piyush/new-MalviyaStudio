import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About the Best Wedding Photographer in Prayagraj | Malviya Studio",
  description:
    "Meet Malviya Studio — Prayagraj's best wedding & pre-wedding photographer and cinematic videographer. Discover our story, photography studio and color lab in Allahabad.",
  path: "/about",
});

export default function AboutLayout({ children }) {
  return children;
}
