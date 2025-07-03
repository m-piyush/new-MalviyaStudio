'use client'
import GalleryGrid from "@/components/GalleryGrid";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import FreqentAskQuestion from "@/components/FreqentAskQuestion";
import ExperienceSection from "@/components/Experience";
import AboutSection from "@/components/About";
import ReactStars from 'react-stars';
const featuredImages = [
  {
    id: 1,
    src: "/images/gallery1.jpg",
    alt: "Wedding photography",
    category: "Wedding",
  },
  {
    id: 2,
    src: "/images/gallery2.jpg",
    alt: "Portrait photography",
    category: "Portrait",
  },
];

const services = [
  {
    title: "Wedding",
    description: "Starting at $2999",
    buttonText: "View Details",
    icon: "/image/service/",
  },
  {
    title: "Portrait",
    description: "Starting at $1999",
    buttonText: "View Details",
  },
  {
    title: "Engagement",
    description: "Starting at $1799",
    buttonText: "More Details",
  },
];

const testimonials = [

  {
    name: "Abhinav & Simran",
    content:
      "That dance wasn’t choreographed — it was just us, lost in the moment. The way you captured our laughter, the movement, the love… it still brings a smile every time we see it. You turned a simple dance into a timeless memory we’ll cherish forever. Truly magical work",
    image: "/images/testimonials/engangment1.jpg",
  },
  {
    name: "Abhishek & Neha",
    content:
      "That one photo where we’re just looking into each other’s eyes — it captured everything without saying a word. The love, excitement, and promise of forever… all in one frame. Your team didn’t just take a picture, you gave us a memory we’ll treasure for a lifetime",
    image: "/images/testimonials/prewedding1.jpg",
  },
  {
    name: "Deepak & Tanya",
    content:
      "The moment right after the jaimala — our eyes met, hearts full, smiles wide — and you captured it so beautifully. That photo holds all the emotions of that second. It’s not just a picture, it’s a memory we’ll relive forever. Thank you for preserving it so perfectly",
    image: "/images/testimonials/wedding1.jpg",
  },
  {
    name: "Mahi",
    content:
      "I didn’t even realize you captured that moment — me fixing my nose stud, lost in thought. It’s such a small gesture, but the photo feels so personal and graceful. You caught the real me, in all the wedding chaos. Truly thankful for such a beautiful candid memory.",
    image: "/images/testimonials/Bride2.jpg",
  },
  {
    name: "Rishab & Anita",
    content:
      "That silhouette shot against the morning sky was pure magic. Just us, in black outlines, with the world waking up behind us — it felt timeless. You turned a simple moment into art. Every time we look at it, we feel the calm and love of that morning.",
    image: "/images/testimonials/couple2.jpg",
  },
  // {
  //   name: "Priya",
  //   content:
  //     "That photo with my pet lying peacefully under my lehenga, and my hand resting on him, means the world to me. You beautifully captured the bond we share — love, calm, and connection. It’s not just a wedding memory, it’s an emotion I’ll treasure forever. Thank you so much!",
  //   image: "/images/testimonials/wedding2.jpg",
  // },
  // {
  //   name: "Shaumya",
  //   content:
  //     "You captured my sister’s energy perfectly — twirling, laughing, and owning the moment in her lehenga! That photo radiates joy and attitude, just like her. It wasn’t posed, it was real, and now it’s one of our favorite memories from the wedding. Thank you for freezing her spirit so beautifully.",
  //   image: "/images/testimonials/bride3.jpg",
  // },
  {
    name: "Shreya",
    content:
      "That black and white shot from above — just my eye, my maang tikka, and a quiet moment — is pure elegance. It speaks volumes without saying a word. You captured beauty, grace, and calm in a single frame. It’s one of the most artistic memories from my wedding day.",
    image: "/images/testimonials/bride4.jpg",
  },
  {
    name: "Divya",
    content:
      "The bidaai was the most emotional part of my wedding, and your team captured it so beautifully. That one moment — me and my mom smiling through our tears — is now framed in my living room. It's more than just a photo; it's a feeling frozen in time. Thank you for preserving that memory with such grace and emotion.",
    image: "/images/testimonials/Bride1.jpg",
  },
  {
    name: "Shubham & Ninna",
    content:
      "This picture perfectly captured the magic of our big day. Her smile, glowing and full of joy, and me — just lost in that moment. The way she’s in focus and I’m gently blurred tells our story better than words ever could. Truly a memory frozen in time",
    image: "/images/testimonials/couple1.jpg",
  },
];

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <section className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src="/images/hero/caro.jpg"
          alt="Hero"
          fill
          className="object-cover w-full h-full"
        />

        {/* Overlay Content */}
        <div className="absolute flex flex-col inset-0 bg-black/30 items-center justify-center text-center px-4 gap-4">
          <h1 className="text-3xl md:text-5xl text-red-500 tracking-wider ephesis-regular">
            Your Dream Wedding Awaits
          </h1>
          <h1 className="text-3xl md:text-5xl text-white tracking-wider cormorant-garamond">
            Artistic Wedding Photography
          </h1>
        </div>

        {/* Google Rating Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded shadow-md">
          <a
            className="flex flex-col items-end text-sm text-black leading-5"
            target="_blank"
            href="https://maps.app.goo.gl/DntJXx8P3tJD77gv7"
          >
            <p className="font-medium">4.9 on Google</p>
            <ReactStars count={5} value={4.9} size={20} edit={false} activeColor="#ffd700" />
          </a>
        </div>
      </section>


      <section className="bg-[#F4F4F4] w-full py-16 flex justify-center items-center">
        <div className="flex flex-col items-center text-center px-4">
          <img src="/images/home/image.png" alt="image" className="w-32 mb-4" />

          <p className="text-sm uppercase tracking-widest text-red-500 mb-2 font-serif">
            Award Winning Photography
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 max-w-3xl">
            Showcasing your big day in a memorable and unforgettable way.
          </h2>
        </div>
      </section>

      {/* About Photographer */}

      <section className="py-20 bg-[#fff8f3]">
        <AboutSection />
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-[#fff8f3]">
        <TestimonialCard testimonial={testimonials} />
      </section>

      {/* Stats Section */}
      <section>
        <FreqentAskQuestion />
      </section>

      {/* Experience Section  */}
      <section className="w-full bg-[#fff8f3] py-20 ">
        <ExperienceSection />
      </section>
    </div>
  );
}
