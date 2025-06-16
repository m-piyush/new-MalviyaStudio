import GalleryGrid from '@/components/GalleryGrid'

const allImages = [
  { id: 1, src: '/images/gallery1.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 2, src: '/images/gallery2.jpg', alt: 'Portrait photography', category: 'Portrait' },
  { id: 3, src: '/images/gallery3.jpg', alt: 'Nature photography', category: 'Nature' },
  { id: 4, src: '/images/gallery4.jpg', alt: 'Event photography', category: 'Event' },
  { id: 5, src: '/images/gallery5.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 6, src: '/images/gallery6.jpg', alt: 'Portrait photography', category: 'Portrait' },
  { id: 7, src: '/images/gallery7.jpg', alt: 'Commercial photography', category: 'Commercial' },
  { id: 8, src: '/images/gallery8.jpg', alt: 'Event photography', category: 'Event' },
  { id: 9, src: '/images/gallery9.jpg', alt: 'Wedding photography', category: 'Wedding' },
]

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Photo Gallery</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Browse through our collection of beautiful moments captured through the
          lens.
        </p>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button className="px-4 py-2 text-sm font-medium rounded-l-lg bg-gray-900 text-white">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-900">
              Weddings
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-900">
              Portraits
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-900">
              Events
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-r-lg bg-white text-gray-900">
              Commercial
            </button>
          </div>
        </div>
        <GalleryGrid images={allImages} />
      </div>
    </section>
  )
}