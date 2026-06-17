import VideoShowcase from "@/components/VideoShowcase";
import { Section, SectionHeading } from "@/components/ui/section";
import { videos } from "@/constant/videos";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cinematic Wedding Films & Videography in Prayagraj | Malviya Studio",
  description:
    "Watch cinematic wedding films, pre-wedding & event videography by Malviya Studio — the best cinematic wedding videographer in Prayagraj (Allahabad).",
  path: "/films",
});

export default function FilmsPage() {
  return (
    <Section className="bg-background pt-28">
      <SectionHeading
        eyebrow="Cinematography"
        title="Our Films"
        description="From the first look to the last dance — we craft cinematic films that let you relive every emotion of your special day."
      />
      <VideoShowcase videos={videos} />
    </Section>
  );
}
