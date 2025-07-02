
'use client'

import { useState } from 'react'
import Image from 'next/image'
import GalleryStrip from '../../../components/GalleryStrip'

export default function Gallery() {

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Photo Gallery</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Browse through our collection of beautiful moments captured through the lens.
          </p>

          <GalleryStrip />
        </div>
      </section>
      {/* Figma-like Section */}
      <section className="mt-16 text-center">
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/portfolio/promise.png"
            alt="Wedding couple promise"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center px-4">
            <div className="bg-white/90 border border-[#e3d3c5] shadow-md px-8 py-6 md:px-12 md:py-8 rounded-md max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-script text-[#b97a56] mb-4">Our Promise</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                We guarantee breathtaking wedding photos that perfectly capture the magic of your special day.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="relative w-full h-[500px] md:h-[600px] my-16">
        {/* Background color bar */}
        <div className="absolute inset-0 bg-[#f8f8f8] z-0" />

        {/* Content container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full px-6 md:px-24 items-center">
          {/* Text Box */}
          <div className="bg-white/90 p-10 md:p-14 rounded-lg shadow-md max-w-xl">
            <h4 className="text-sm uppercase tracking-widest text-gray-200">Our Perfect</h4>
            <h3 className="text-3xl font-script text-[#a4100d] mb-4">Stay Beautiful</h3>
            <p className="text-[#6e3030] mb-6">
              Lorem ipsum dolor sit amet consectetur. Ac in bibendum pharetra justo nullam est placerat. Eget
              tortor lacus porta pellentesque duis velit habitant nisl dignissim.
            </p>
            <button className="bg-[#f4f1ed] text-black px-6 py-2 font-medium border border-black hover:bg-black hover:text-white transition-colors">
              Enquire Now
            </button>
          </div>

          {/* Image */}
          <div className="w-full h-full relative">
            <Image
              src="/images/portfolio/perfect.png"
              alt="Bride with bouquet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </>


  )
}
