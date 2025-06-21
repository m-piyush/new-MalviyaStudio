
'use client'

import { useState } from 'react'
import Image from 'next/image'
import GalleryGrid from '@/components/GalleryGrid'
import { Button } from '@/components/ui/button'


const allImages = [
  { id: 1, src: '/images/portfolio/bride/bride1.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 2, src: '/images/portfolio/bride/bride2.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 3, src: '/images/portfolio/bride/bride3.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 4, src: '/images/portfolio/bride/bride4.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 5, src: '/images/portfolio/groom/groom1.jpg', alt: 'Groom photography', category: 'Groom' },
  { id: 6, src: '/images/portfolio/groom/groom2.jpg', alt: 'Groom photography', category: 'Groom' },
  { id: 7, src: '/images/portfolio/groom/groom3.jpg', alt: 'Groom photography', category: 'Groom' },
  { id: 8, src: '/images/portfolio/groom/groom4.jpg', alt: 'Groom photography', category: 'Groom' },

  { id: 9, src: '/images/portfolio/wedding/wedding1.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 10, src: '/images/portfolio/wedding/wedding2.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 11, src: '/images/portfolio/wedding/wedding3.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 12, src: '/images/portfolio/wedding/wedding4.jpg', alt: 'Wedding photography', category: 'Wedding' },

  { id: 13, src: '/images/portfolio/haldi/haldi1.jpg', alt: 'Haldi photography', category: 'Haldi' },
  { id: 14, src: '/images/portfolio/haldi/haldi2.jpg', alt: 'Haldi photography', category: 'Haldi' },
  { id: 15, src: '/images/portfolio/haldi/haldi3.jpg', alt: 'Haldi photography', category: 'Haldi' },
  { id: 16, src: '/images/portfolio/haldi/haldi4.jpg', alt: 'Haldi photography', category: 'Haldi' },

  { id: 17, src: '/images/portfolio/haldi/haldi5.jpg', alt: 'Haldi photography', category: 'Haldi' },
  { id: 18, src: '/images/portfolio/engangment/engangment1.jpg', alt: 'engangment photography', category: 'Engangment' },
  { id: 19, src: '/images/portfolio/engangment/engangment2.jpg', alt: 'engangment photography', category: 'Engangment' },
  { id: 20, src: '/images/portfolio/engangment/engangment3.jpg', alt: 'engangment photography', category: 'Engangment' },

  { id: 21, src: '/images/portfolio/bride/bride5.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 22, src: '/images/portfolio/bride/bride6.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 23, src: '/images/portfolio/bride/bride7.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 24, src: '/images/portfolio/bride/bride8.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 25, src: '/images/portfolio/wedding/wedding5.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 26, src: '/images/portfolio/wedding/wedding6.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 27, src: '/images/portfolio/wedding/wedding7.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 28, src: '/images/portfolio/wedding/wedding8.jpg', alt: 'Wedding photography', category: 'Wedding' },

  { id: 29, src: '/images/portfolio/bride/bride9.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 30, src: '/images/portfolio/bride/bride10.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 31, src: '/images/portfolio/bride/bride11.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 32, src: '/images/portfolio/bride/bride12.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 33, src: '/images/portfolio/prewedding/prewedding1.jpg', alt: 'prewedding photography', category: 'Prewedding' },
  { id: 34, src: '/images/portfolio/prewedding/prewedding2.jpg', alt: 'prewedding photography', category: 'Prewedding' },
  { id: 35, src: '/images/portfolio/prewedding/prewedding3.jpg', alt: 'prewedding photography', category: 'Prewedding' },
  { id: 36, src: '/images/portfolio/prewedding/prewedding4.jpg', alt: 'prewedding photography', category: 'Prewedding' },

  { id: 37, src: '/images/portfolio/bride/bride13.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 38, src: '/images/portfolio/bride/bride14.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 39, src: '/images/portfolio/bride/bride15.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 40, src: '/images/portfolio/bride/bride16.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 41, src: '/images/portfolio/couple/couple1.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 42, src: '/images/portfolio/couple/couple2.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 43, src: '/images/portfolio/couple/couple3.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 44, src: '/images/portfolio/couple/couple4.jpg', alt: 'couple photography', category: 'Couple' },

  { id: 45, src: '/images/portfolio/bride/bride17.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 46, src: '/images/portfolio/bride/bride18.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 47, src: '/images/portfolio/bride/bride19.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 48, src: '/images/portfolio/bride/bride20.jpg', alt: 'Bride photography', category: 'Bride' },

  // { id: 49, src: '/images/portfolio/prewedding/prewedding1.jpg', alt: 'prewedding photography', category: 'Prewedding' },
  // { id: 50, src: '/images/portfolio/prewedding/prewedding2.jpg', alt: 'prewedding photography', category: 'Prewedding' },
  // { id: 51, src: '/images/portfolio/prewedding/prewedding3.jpg', alt: 'prewedding photography', category: 'Prewedding' },
  // { id: 52, src: '/images/portfolio/prewedding/prewedding4.jpg', alt: 'prewedding photography', category: 'Prewedding' },

  { id: 53, src: '/images/portfolio/bride/bride21.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 54, src: '/images/portfolio/bride/bride22.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 55, src: '/images/portfolio/bride/bride23.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 56, src: '/images/portfolio/bride/bride24.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 57, src: '/images/portfolio/couple/couple5.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 58, src: '/images/portfolio/couple/couple6.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 59, src: '/images/portfolio/couple/couple7.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 60, src: '/images/portfolio/couple/couple8.jpg', alt: 'couple photography', category: 'Couple' },

  { id: 61, src: '/images/portfolio/bride/bride25.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 62, src: '/images/portfolio/bride/bride26.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 63, src: '/images/portfolio/bride/bride27.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 64, src: '/images/portfolio/bride/bride28.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 65, src: '/images/portfolio/groom/groom5.jpg', alt: 'Groom photography', category: 'Groom' },
  { id: 66, src: '/images/portfolio/groom/groom6.jpg', alt: 'Groom photography', category: 'Groom' },
  { id: 67, src: '/images/portfolio/groom/groom7.jpg', alt: 'Groom photography', category: 'Groom' },
  { id: 68, src: '/images/portfolio/groom/groom8.jpg', alt: 'Groom photography', category: 'Groom' },

  { id: 69, src: '/images/portfolio/bride/bride29.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 70, src: '/images/portfolio/bride/bride30.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 71, src: '/images/portfolio/bride/bride31.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 72, src: '/images/portfolio/bride/bride32.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 73, src: '/images/portfolio/bride/bride33.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 74, src: '/images/portfolio/bride/bride34.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 75, src: '/images/portfolio/bride/bride36.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 76, src: '/images/portfolio/bride/bride37.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 77, src: '/images/portfolio/couple/couple9.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 78, src: '/images/portfolio/couple/couple10.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 79, src: '/images/portfolio/couple/couple11.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 80, src: '/images/portfolio/couple/couple12.jpg', alt: 'couple photography', category: 'Couple' },

  { id: 81, src: '/images/portfolio/bride/bride38.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 82, src: '/images/portfolio/bride/bride39.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 83, src: '/images/portfolio/bride/bride40.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 84, src: '/images/portfolio/bride/bride41.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 85, src: '/images/portfolio/bride/bride42.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 86, src: '/images/portfolio/bride/bride43.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 87, src: '/images/portfolio/bride/bride44.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 88, src: '/images/portfolio/bride/bride45.jpg', alt: 'Bride photography', category: 'Bride' }, 

  { id: 89, src: '/images/portfolio/couple/couple13.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 90, src: '/images/portfolio/couple/couple14.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 91, src: '/images/portfolio/couple/couple15.jpg', alt: 'couple photography', category: 'Couple' },
  { id: 92, src: '/images/portfolio/couple/couple16.jpg', alt: 'couple photography', category: 'Couple' },

  { id: 93, src: '/images/portfolio/bride/bride46.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 94, src: '/images/portfolio/bride/bride47.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 95, src: '/images/portfolio/bride/bride48.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 96, src: '/images/portfolio/bride/bride49.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 97, src: '/images/portfolio/bride/bride50.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 98, src: '/images/portfolio/bride/bride51.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 99, src: '/images/portfolio/bride/bride52.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 100, src: '/images/portfolio/bride/bride53.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 101, src: '/images/portfolio/bride/bride54.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 102, src: '/images/portfolio/bride/bride55.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 103, src: '/images/portfolio/bride/bride56.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 104, src: '/images/portfolio/bride/bride57.jpg', alt: 'Bride photography', category: 'Bride' },

  { id: 105, src: '/images/portfolio/bride/bride58.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 106, src: '/images/portfolio/bride/bride59.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 107, src: '/images/portfolio/bride/bride60.jpg', alt: 'Bride photography', category: 'Bride' },
  { id: 108, src: '/images/portfolio/bride/bride61.jpg', alt: 'Bride photography', category: 'Bride' },

  // { id: 9, src: '/images/gallery2.jpg', alt: 'Portrait photography', category: 'Portrait' },
  // { id: 10, src: '/images/gallery3.jpg', alt: 'Nature photography', category: 'Nature' },
  // { id: 11, src: '/images/gallery4.jpg', alt: 'Event photography', category: 'Event' },
  // { id: 12, src: '/images/gallery5.jpg', alt: 'Wedding photography', category: 'Wedding' },
  // { id: 13, src: '/images/gallery6.jpg', alt: 'Portrait photography', category: 'Portrait' },
  // { id: 14, src: '/images/gallery7.jpg', alt: 'Commercial photography', category: 'Commercial' },
  // { id: 15, src: '/images/gallery8.jpg', alt: 'Event photography', category: 'Event' },
  // { id: 16, src: '/images/gallery9.jpg', alt: 'Wedding photography', category: 'Wedding' },
];


const categories = ['All', 'Wedding', 'Prewedding','Bride', 'Haldi','Engangment','Couple', 'Portrait', 'Event', 'Commercial']

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
