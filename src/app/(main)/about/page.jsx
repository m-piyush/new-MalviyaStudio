"use client";
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import Hero from "@/components/Hero";


export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 font-cormorant">
      {/* Hero Section */}
      <Hero />

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
              src="/images/about/about.png"
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
            <button className="mt-4 bg-[#ff004a] text-white font-medium px-6 py-2 rounded hover:bg-[#d6cfc8] transition-all duration-300">
              <Link href="/gallery">View Portfolio</Link>
            </button>
          </div>
        </div>
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
            <button className="bg-[#ff004a] text-white px-6 py-2 rounded hover:bg-[#d6cfc8] transition-all duration-300">
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
