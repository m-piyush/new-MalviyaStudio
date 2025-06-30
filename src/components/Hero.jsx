import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Capturing Life's Beautiful Moments
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Professional photography services for weddings, portraits, and special
          events.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/gallery"
            className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
          >
            View Gallery
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  )
}