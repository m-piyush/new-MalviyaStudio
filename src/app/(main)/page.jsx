import GalleryGrid from "@/components/GalleryGrid";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import FreqentAskQuestion from "@/components/FreqentAskQuestion";
import ExperienceSection from "@/components/Experience";
import AboutSection from "@/components/About";
import Hero from "@/components/Hero";
import { Section, SectionHeading } from "@/components/ui/section";
import VideoShowcase from "@/components/VideoShowcase";
import { videos } from "@/constant/videos";
import Link from "next/link";

export const metadata = {
  title: "Malviya Studio | Photography & Videography",
  description:
    "Professional photography and videography services by Malviya Studio. Book baby, bridal, and event shoots and more in Allahabad/Prayagraj.",
  keywords:
    "Malviya Studio, photography, videography, wedding photography, pre-wedding, baby photoshoot, event photography, bridal shoot, photography studio, scenography company, wedding photographer, wedding videography, wedding portrait studio, photography agency, best wedding studio in Allahabad, wedding photography agency in Prayagraj, wedding photography shop",
  openGraph: {
    title: "Malviya Studio",
    description: "Capture your special moments with Malviya Studio.",
    url: "https://malviyastudio.com",
    siteName: "Malviya Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Malviya Studio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        image="/images/hero/caro.jpg"
        imageAlt="Artistic wedding photography by Malviya Studio"
        scriptText="Your Dream Wedding Awaits"
        title="Artistic Wedding Photography"
        subtitle="Capturing weddings, portraits and films across Prayagraj with timeless artistry."
        primaryCta={{ href: "/gallery", label: "View Portfolio" }}
        secondaryCta={{ href: "/contact", label: "Book a Session" }}
      />

      {/* Intro Section */}
      <Section className="bg-muted" containerClassName="flex flex-col items-center text-center">
        <Image
          src="/images/home/image.png"
          alt="Award winning photography"
          width={128}
          height={128}
          className="mb-4"
        />
        <p className="text-sm uppercase tracking-widest text-brand mb-2 font-semibold">
          Award Winning Photography
        </p>
        <h2 className="cormorant-garamond text-3xl md:text-4xl font-semibold text-foreground max-w-3xl">
          Showcasing your big day in a memorable and unforgettable way.
        </h2>
      </Section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <AboutSection />
      </section>

      {/* Films / Videography */}
      {/* <Section className="bg-muted">
        <SectionHeading
          eyebrow="Cinematography"
          title="Our Films"
          description="Cinematic wedding films and pre-wedding stories, crafted to let you relive every emotion."
        />
        <VideoShowcase videos={videos.slice(0, 3)} />
        <div className="mt-10 text-center">
          <Link
            href="/films"
            className="inline-block rounded-full border border-brand px-8 py-3 font-medium text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            View All Films
          </Link>
        </div>
      </Section> */}

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <TestimonialCard />
      </section>

      {/* FAQs */}
      <section>
        <FreqentAskQuestion />
      </section>

      {/* Experience */}
      <section className="w-full bg-background py-20">
        <ExperienceSection />
      </section>
    </main>
  );
}
