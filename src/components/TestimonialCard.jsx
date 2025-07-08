"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonial = [

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








export default function TestimonialCard() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#fff1eb] to-[#d8f3ff] p-6 sm:p-12 rounded-2xl shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ff004a] italic mb-12">
        Client Testimonials
      </h2>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {Testimonial.map((item, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <div className="flex flex-col md:flex-row items-center bg-white/90 backdrop-blur-md shadow-md rounded-2xl w-full max-w-4xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                {/* Testimonial Text */}
                <div className="flex-1 p-8 text-left">
                  <p className="text-3xl text-[#c4a38c] mb-2 leading-none">“</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed font-medium">
                    {item.content}
                    <span className="text-3xl text-[#c4a38c] ml-1">”</span>
                  </p>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                </div>

                {/* Testimonial Image */}
                <div className="flex-1 max-h-[400px] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt="Client"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <div className="flex justify-center mt-6 gap-4">
          <CarouselPrevious className="bg-[#c4a38c] text-white hover:bg-[#a4886c]" />
          <CarouselNext className="bg-[#c4a38c] text-white hover:bg-[#a4886c]" />
        </div> */}
      </Carousel>
    </div>
  );
}
