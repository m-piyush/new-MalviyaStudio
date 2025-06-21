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
    <div className="w-full max-w-6xl mx-auto bg-red-200 p-6 md:p-12 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl italic  font-light mb-14 text-gray-700 text-center">
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
              <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-md w-full max-w-4xl overflow-hidden">
                {/* Testimonial Text */}
                <div className="flex-1 p-8 text-left">
                  <p className="text-2xl text-[#c4a38c]">“</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {item.content}{" "}
                    <span className="text-2xl text-[#c4a38c]">”</span>
                  </p>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                </div>

                {/* Testimonial Image */}
                <div className="flex-1">
                  <img
                    src={item.image}
                    alt="Testimonial"
                    className="w-full h-full object-cover max-h-[400px]"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center mt-6 gap-4">
          <CarouselPrevious className="text-[#c4a38c]" />
          <CarouselNext className="text-[#c4a38c]" />
        </div>
      </Carousel>
    </div>
  );
}
