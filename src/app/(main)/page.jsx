import Hero from "@/components/Hero";
import GalleryGrid from "@/components/GalleryGrid";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import FreqentAskQuestion from "@/components/FreqentAskQuestion";

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
  {
    name: "Priya",
    content:
      "That photo with my pet lying peacefully under my lehenga, and my hand resting on him, means the world to me. You beautifully captured the bond we share — love, calm, and connection. It’s not just a wedding memory, it’s an emotion I’ll treasure forever. Thank you so much!",
    image: "/images/testimonials/wedding2.jpg",
  },
  {
    name: "Shaumya",
    content:
      "You captured my sister’s energy perfectly — twirling, laughing, and owning the moment in her lehenga! That photo radiates joy and attitude, just like her. It wasn’t posed, it was real, and now it’s one of our favorite memories from the wedding. Thank you for freezing her spirit so beautifully.",
    image: "/images/testimonials/bride3.jpg",
  },
  {
    name: "Shreya",
    content:
      "That black and white shot from above — just my eye, my maang tikka, and a quiet moment — is pure elegance. It speaks volumes without saying a word. You captured beauty, grace, and calm in a single frame. It’s one of the most artistic memories from my wedding day.",
    image: "/images/testimonials/bride4.jpg",
  },
];

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <section className="relative w-full h-[600px]">
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
          <h1 className="text-3xl md:text-5xl  text-white tracking-wider font-cormorant">
            Showcasing your big day in a memorable and unforgettable way.
          </h1>
        </div>
      </section>
      {/* About Photographer */}
      <section className="bg-[#F4F4F4] w-full h-[500px] flex justify-center items-center">
        <div className="flex flex-col items-center text-center px-4">
          <img src="/images/home/image.png" alt="image" className="w-32 mb-4" />

          <p className="text-sm uppercase tracking-widest text-[#c4a38c] mb-2 font-serif">
            Award Winning Photography
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 max-w-3xl">
            Showcasing your big day in a memorable and unforgettable way.
          </h2>
        </div>
      </section>

      <section className="bg-white md:h-[500px]">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2">
            <Image
              src="/images/profile.jpg"
              alt="Photographer"
              width={500}
              height={600}
              className="rounded-md w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-center items-center text-center px-6 py-10 gap-4">
            <blockquote className="text-gray-600 text-lg leading-relaxed italic">
              “
            </blockquote>
            <p className="text-gray-700 leading-relaxed text-base">
              Hello, My Name is Sharad Malviya.
            </p>
            <p className="text-gray-700 leading-relaxed text-base max-w-md">
              Malviya Studios is an endeavor to capture all things beautiful. We
              are a passionate team of wedding photographers and
              cinematographers who love to capture and preserve the most
              beautiful of emotions experienced around. We believe that weddings
              are a path-defining phase of an individual’s life; the flood of
              emotions and beautiful memories that a wedding creates is rare,
              truly overwhelming, and heartwarming. Hence, weddings serve as a
              perfect platform for us to satiate our creative juices and allow
              us a cathartic experience.
            </p>
            <img
              src="/images/home/home1.png"
              alt="signature"
              className="w-48"
            />
            <p className="mt-2 font-semibold text-gray-900">Tessa M</p>
            <button className="mt-2 px-6 py-2 bg-[#c4a38c] text-white rounded hover:bg-[#a48770] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      {/* <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-[#c4a38c] mb-2 font-serif">Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">What I Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20">
        <TestimonialCard testimonial={testimonials} />
      </section>

      {/* Stats Section */}
      <section>
        <FreqentAskQuestion />
      </section>

      <section className="w-full bg-[#F4F4F4] py-20 h-[500px]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="uppercase tracking-widest text-sm md:text-base text-gray-500 mb-2">
            Helping couples bring to life
          </p>
          <h3 className="text-2xl md:text-4xl font-light text-gray-800 mb-12">
            Their Wedding Dreams
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-6xl font-bold text-[#c4a38c]">12</h4>
              <p className="text-gray-700 mt-2 italic">Years Experience</p>
            </div>
            <div>
              <h4 className="text-6xl font-bold text-[#c4a38c]">10K</h4>
              <p className="text-gray-700 mt-2 italic">Photos Delivered</p>
            </div>
            <div>
              <h4 className="text-6xl font-bold text-[#c4a38c]">300</h4>
              <p className="text-gray-700 mt-2 italic">Events Captured</p>
            </div>
            <div>
              <h4 className="text-6xl font-bold text-[#c4a38c]">6</h4>
              <p className="text-gray-700 mt-2 italic">Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
