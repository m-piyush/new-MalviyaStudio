import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import PricingCard from "@/components/PricingCard";
import Link from "next/link";
import Hero from "@/components/Hero";

const services = [
  {
    title: "Wedding Photography",
    description:
      "Comprehensive coverage of your wedding day, capturing every heartfelt moment from preparation to reception with elegance, emotion, and artistic storytelling.",
    icon: "🎎",
    price: "$2,500+",
    image: "/images/services/wedding.jpg",
  },
  {
    title: "Pre-Wedding shoot",
    description:
      "Capture the essence of your love story with a pre-wedding shoot—romantic, candid, and creatively styled to reflect your unique bond.",
    icon: "🎎",
    price: "$2,500+",
    image: "/images/services/prewedding.jpg",
  },
  {
    title: "Portrait Sessions",
    description:
      "Professional portraits for individuals, families, and couples. Perfect for headshots, family photos, or personal branding.",
    icon: "📷",
    price: "$300+",
    image: "/images/services/portrait.jpg",
  },
  {
    title: "Commercial Photography",
    description:
      "High-quality images for businesses, including product shots, office environments, and team portraits.",
    icon: "💼",
    price: "$500+",
    image: "/images/services/commercial.jpg",
  },
  {
    title: "Engagment",
    description:
      "Celebrate your love story with our engagement photography—timeless, romantic, and beautifully captured moments to cherish forever.",
    icon: "💼",
    price: "$500+",
    image: "/images/services/engangment.jpg",
  },
  {
    title: "Photo lamination",
    description:
      "Preserve your cherished memories with our premium photo lamination and custom framing—durable, elegant, and designed to last a lifetime.",
    icon: "💼",
    price: "$500+",
    image: "/images/services/frame.jpg",
  },
  {
    title: "Bride Queen",
    description:
      "Capture the beauty and elegance of your bridal moments with our expert photography—timeless portraits that celebrate grace, emotion, and unforgettable charm..",
    icon: "💼",
    price: "$500+",
    image: "/images/services/bride.jpg",
  },
  {
    title: "Event Photography",
    description:
      "Documentation of corporate events, parties, and special occasions. Includes basic editing and digital delivery.",
    icon: "🎉",
    price: "$800+",
    image: "/images/services/event.jpg",
  },
  {
    title: "Maternity & Newborn",
    description:
      "Beautifully capture the magic of motherhood and your baby’s first moments with soft, emotional, and timeless maternity and newborn photography.",
    icon: "👶",
    price: "$400+",
    image: "/images/services/kid.jpg",
  },
  {
    title: "DVD/CD To Digital",
    description:
      "Preserve your precious memories by converting old DVDs and CDs to digital format—safe, lasting, and easily shareable across devices.",
    icon: "👶",
    price: "$400+",
    image: "/images/services/dvdToCassettee.jpg",
  },
  {
    title: "Cassette To Digial",
    description:
      "Convert old cassette tapes to digital format to preserve cherished memories with improved sound quality and easy modern device access.",
    icon: "👶",
    price: "$400+",
    image: "/images/services/cassetteToDigial.jpg",
  },
  {
    title: "Custom Sessions",
    description:
      "Tailored photography sessions designed to meet your specific needs and creative vision.",
    icon: "✨",
    price: "Custom",
    image: "/images/services/custom.jpg",
  },
];

const pricingPlans = [
  {
    title: "Basic",
    price: "$300",
    features: [
      "1 hour photo session",
      "20 edited digital images",
      "Online gallery",
      "Print release",
    ],
    recommended: false,
  },
  {
    title: "Standard",
    price: "$600",
    features: [
      "2 hour photo session",
      "50 edited digital images",
      "Online gallery",
      "Print release",
      "10 printed photos (5x7)",
    ],
    recommended: true,
  },
  {
    title: "Premium",
    price: "$1,200",
    features: [
      "4 hour photo session",
      "100+ edited digital images",
      "Online gallery",
      "Print release",
      "20 printed photos (8x10)",
      "Photo album",
    ],
    recommended: false,
  },
];

export default function Services() {
  return (
    <>
      {/* <section className="relative w-full h-[450px]">
        <Image
          src="/images/hero/caro.jpg"
          alt="Hero"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute flex flex-col inset-0 bg-black/30 items-center justify-center text-center px-4 gap-4">
          <h1 className="text-4xl md:text-6xl text-red-400 tracking-wider font-ephesis">
            Your Dream Wedding Awaits
          </h1>
          <h1 className="text-3xl md:text-5xl text-white tracking-wider font-cormorant">
            Artistic Wedding Photography
          </h1>
        </div>



      </section> */}

      <Hero />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Pricing Plans</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose the package that fits your needs. All packages can be
            customized.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
          <div className="mt-12 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Custom Packages</h3>
            <p className="text-gray-600 mb-4">
              Don't see what you're looking for? We offer custom packages
              tailored to your specific needs.
            </p>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors">
              <Link href={"/contact"}>Contact Us for a Quote</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We offer a variety of photography services to capture your special
            moments. Each package can be customized to fit your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} detailed />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
