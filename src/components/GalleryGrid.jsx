import Image from 'next/image'

export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {images.map((image) => (
       <div key={image.id} className="group relative overflow-hidden rounded-lg">
  <div style={{ aspectRatio: '4 / 3' }} className="relative">
    <Image
      src={image.src}
      alt={image.alt}
      width={600}
      height={400}
      priority={image.id === 1}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
    />

    {/* Overlay goes here */}
<div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
  <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium">
    {image.category}
  </span>
</div>
  </div>
</div>

      ))}
    </div>
  )
}
