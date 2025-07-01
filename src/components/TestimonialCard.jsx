"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#fff1eb] to-[#d8f3ff] p-6 sm:p-12 rounded-2xl shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 italic mb-12">
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
          {testimonial.map((item, index) => (
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

        <div className="flex justify-center mt-6 gap-4">
          <CarouselPrevious className="bg-[#c4a38c] text-white hover:bg-[#a4886c]" />
          <CarouselNext className="bg-[#c4a38c] text-white hover:bg-[#a4886c]" />
        </div>
      </Carousel>
    </div>
  );
}
