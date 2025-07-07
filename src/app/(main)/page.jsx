import GalleryGrid from "@/components/GalleryGrid";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import FreqentAskQuestion from "@/components/FreqentAskQuestion";
import ExperienceSection from "@/components/Experience";
import AboutSection from "@/components/About";

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
      <section className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src="/images/hero/caro.jpg"
          alt="Artistic wedding photography by Malviya Studio"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4 gap-4">
          <h1 className="text-3xl md:text-5xl text-red-400 tracking-wider ephesis-regular">
            Your Dream Wedding Awaits
          </h1>
          <h2 className="text-3xl md:text-5xl text-white tracking-wider cormorant-garamond">
            Artistic Wedding Photography
          </h2>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-[#F4F4F4] w-full py-16 flex justify-center items-center">
        <div className="flex flex-col items-center text-center px-4">
          <Image
            src="/images/home/image.png"
            alt="Award winning photography"
            width={128}
            height={128}
            className="mb-4"
          />
          <p className="text-sm uppercase tracking-widest text-red-500 mb-2 font-serif">
            Award Winning Photography
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 max-w-3xl">
            Showcasing your big day in a memorable and unforgettable way.
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#fff8f3]">
        <AboutSection />
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#fff8f3]">
        <TestimonialCard />
      </section>

      {/* FAQs */}
      <section>
        <FreqentAskQuestion />
      </section>

      {/* Experience */}
      <section className="w-full bg-[#fff8f3] py-20">
        <ExperienceSection />
      </section>
    </main>
  );
}
