import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wedding Photography Portfolio & Gallery Prayagraj | Malviya Studio",
  description:
    "Explore Malviya Studio's wedding portfolio in Prayagraj — real wedding, pre-wedding and cinematic photography from the best photography studio in Allahabad.",
  path: "/gallery",
});

export default function GalleryLayout({ children }) {
  return children;
}
