"use client";
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";

const about = [
  {
    id: 1,
    alt:"Haldi",
    image: "/images/portfolio/haldi/haldi4.jpg"
  },
  {
    id: 2,
    alt:"Bride",
    image: "/images/testimonials/Bride2.jpg"
  },
  {
    id: 3,
    alt:"wedding",
    image: "/images/portfolio/wedding/wedding2.jpg"
  },
]
export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-cormorant">
      {/* Hero Section */}
      <section className="relative w-full h-[450px]">
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
      </section>

      {/* My Story */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-white">
        <div className="text-center mb-12">
          <p className="uppercase text-sm text-[#c4a38c] tracking-widest font-cormorant">
            About
          </p>
          <h2 className="text-5xl font-cormorant text-gray-800">My Story</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-700 text-lg">
            <p>
              Malviya Studios is an endeavor to capture all things beautiful. We
              are a passionate team of wedding photographers and
              cinematographers who love to capture and preserve the most
              beautiful of emotions experienced around.{" "}
            </p>
            <p>
              We believe that weddings are a path-defining phase of an
              individual’s life; the flood of emotions and beautiful memories
              that a wedding creates is rare, truly overwhelming, and
              heartwarming.{" "}
            </p>
            <p>
              Hence, weddings serve as a perfect platform for us to satiate our
              creative juices and allow us a cathartic experience.
            </p>

            {/* Optional Signature Image */}
            <img
              src="/images/about/signature.png"
              alt="Signature"
              className="w-32"
            />

            {/* Button */}
            <button className="mt-4 bg-[#E8DED7] text-gray-800 font-medium px-6 py-2 rounded hover:bg-[#d6cfc8] transition-all duration-300">
              <Link href="/gallery">View Portfolio</Link>
            </button>
          </div>
        </div>
      </section>
      {/* testimonial */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Client Testimonials</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Don't just take our word for it. Here's what our clients have to say
            about their experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} withImage />
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Strip */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {about.map((num,index) => (

          <Image
            key={index}
            src={num.image}
            alt={num.alt}
            width={300}
            height={300}
            className="rounded-md object-cover w-full h-full"
          />

        ))}
      </section>

      {/* My Story - Facts About Me */}
      <section className="bg-[#FBF9F8] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase text-sm text-[#c4a38c] tracking-widest mb-2 font-cormorant">
            Get to know me
          </p>
          <h3 className="text-3xl md:text-4xl font-cormorant mb-12 text-gray-800">
            A Few Facts About Myself
          </h3>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-5">
                <img
                  src={`/images/fact${i}.jpg`}
                  alt={`Fact ${i}`}
                  className="w-full h-auto rounded-md object-cover shadow-sm"
                />
                <h5 className="text-3xl font-bold text-[#BAA196] font-cormorant">
                  {i}
                </h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                  consequat nec potenti. Justo molestie amet vulputate aliquam
                  viverra ut viverra lorem.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crafting Memories */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <p className="uppercase text-sm text-[#c4a38c] font-cormorant tracking-wide">
              Crafting Memories
            </p>
            <h3 className="text-3xl md:text-4xl font-cormorant text-gray-800">
              Your Story, My Lens
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Your wedding day is a once-in-a-lifetime event, and choosing the
              right photographer is essential to preserving its magic for years
              to come. I would be honored to be a part of your special day.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition-all duration-300">
              Book Now
            </button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/story1.jpg"
              alt="Story 1"
              className="w-full h-auto rounded-md object-cover shadow-sm"
            />
            <img
              src="/images/story2.jpg"
              alt="Story 2"
              className="w-full h-auto rounded-md object-cover shadow-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
