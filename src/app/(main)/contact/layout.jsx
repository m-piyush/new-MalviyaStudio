import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact & Book Wedding Photographer in Prayagraj | Malviya Studio",
  description:
    "Contact Malviya Studio to book the best wedding & pre-wedding photographer in Prayagraj. Call +91-8299338931 or +91-9415225291 for cinematic wedding videography.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
