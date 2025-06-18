
'use client'

import { useState } from 'react'
import Image from 'next/image'
import GalleryGrid from '@/components/GalleryGrid'
import { Button } from '@/components/ui/button'


const allImages = [
  { id: 1, src: '/images/portfolio/wedding/wedding1.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 2, src: '/images/portfolio/prewedding/prewedding1.jpg', alt: 'prewedding photography', category: 'Prewedding' },
  { id: 3, src: '/images/portfolio/couple/couple1.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 4, src: '/images/gallery2.jpg', alt: 'Portrait photography', category: 'Portrait' },
  { id: 5, src: '/images/gallery3.jpg', alt: 'Nature photography', category: 'Nature' },
  { id: 6, src: '/images/gallery4.jpg', alt: 'Event photography', category: 'Event' },
  { id: 7, src: '/images/gallery5.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 8, src: '/images/gallery6.jpg', alt: 'Portrait photography', category: 'Portrait' },
  { id: 9, src: '/images/gallery7.jpg', alt: 'Commercial photography', category: 'Commercial' },
  { id: 10, src: '/images/gallery8.jpg', alt: 'Event photography', category: 'Event' },
  { id: 11, src: '/images/gallery9.jpg', alt: 'Wedding photography', category: 'Wedding' },
]

const categories = ['All', 'Wedding', 'Prewedding', 'Couple', 'Portrait', 'Event', 'Commercial']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = selectedCategory === 'All'
    ? allImages
    : allImages.filter((img) => img.category === selectedCategory)

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Photo Gallery</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Browse through our collection of beautiful moments captured through the lens.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap gap-2 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded ${selectedCategory === cat
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-900 border border-gray-300'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <GalleryGrid images={filteredImages} />


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
              <h2 className="text-2xl md:text-3xl font-script text-[#b97a56] mb-4">My Promise</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                I guarantee breathtaking wedding photos that perfectly capture the magic of your special day, or your money back.
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
            <h4 className="text-sm uppercase tracking-widest text-gray-200">You're Perfect</h4>
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
