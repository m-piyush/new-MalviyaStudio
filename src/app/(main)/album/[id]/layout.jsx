import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wedding Album Gallery in Prayagraj | Malviya Studio",
  description:
    "View a Malviya Studio wedding album gallery from Prayagraj — full-resolution wedding, pre-wedding and event photography by the best photography studio in Allahabad.",
  path: "/album",
});

export default function AlbumDetailLayout({ children }) {
  return children;
}
