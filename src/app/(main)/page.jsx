import Hero from '@/components/Hero'
import GalleryGrid from '@/components/GalleryGrid'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'

const featuredImages = [
  { id: 1, src: '/images/gallery1.jpg', alt: 'Wedding photography', category: 'Wedding' },
  { id: 2, src: '/images/gallery2.jpg', alt: 'Portrait photography', category: 'Portrait' },
  { id: 3, src: '/images/gallery3.jpg', alt: 'Nature photography', category: 'Nature' },
  { id: 4, src: '/images/gallery4.jpg', alt: 'Event photography', category: 'Event' },
]

const services = [
  {
    title: 'Wedding Photography',
    description: 'Capture your special day with beautiful, timeless photos.',
    icon: '🎎',
  },
  {
    title: 'Portrait Sessions',
    description: 'Professional portraits for individuals, couples, and families.',
    icon: '📷',
  },
  {
    title: 'Commercial Shoots',
    description: 'High-quality images for your business and marketing needs.',
    icon: '💼',
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Bride',
    content: 'The photos from our wedding are absolutely stunning! They captured every special moment perfectly.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'The commercial photos for our restaurant have increased our online engagement by 40%.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
          <GalleryGrid images={featuredImages} />
          <div className="text-center mt-8">
            <a
              href="/gallery"
              className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}