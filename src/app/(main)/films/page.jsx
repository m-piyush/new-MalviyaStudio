import VideoShowcase from "@/components/VideoShowcase";
import { Section, SectionHeading } from "@/components/ui/section";
import { videos } from "@/constant/videos";

export const metadata = {
  title: "Films & Videography | Malviya Studio",
  description:
    "Cinematic wedding films, pre-wedding shoots, and event videography by Malviya Studio in Allahabad / Prayagraj.",
};

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
