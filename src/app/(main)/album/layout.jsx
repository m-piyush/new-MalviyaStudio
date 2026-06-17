import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wedding Albums & Photo Albums in Prayagraj | Malviya Studio",
  description:
    "Browse Malviya Studio's wedding albums and photo albums in Prayagraj — curated wedding, pre-wedding and event collections from the best photography studio & color lab.",
  path: "/album",
});

export default function AlbumLayout({ children }) {
  return children;
}
