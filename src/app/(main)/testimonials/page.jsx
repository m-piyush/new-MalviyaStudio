import TestimonialCard from '@/components/TestimonialCard'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Bride',
    content:
      'The photos from our wedding are absolutely stunning! They captured every special moment perfectly. We will cherish these forever.',
    rating: 5,
    image: '/images/testimonial1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content:
      'The commercial photos for our restaurant have increased our online engagement by 40%. Professional, high-quality work!',
    rating: 5,
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'Emily Wilson',
    role: 'Mother of the Bride',
    content:
      'Working with this photographer was a joy. They made everyone feel comfortable and the results were beyond our expectations.',
    rating: 5,
    image: '/images/testimonial3.jpg',
  },
  {
    name: 'David Thompson',
    role: 'Corporate Client',
    content:
      'Our annual report photos were exceptional. The photographer understood exactly what we needed for our brand image.',
    rating: 5,
    image: '/images/testimonial4.jpg',
  },
  {
    name: 'Jessica Martinez',
    role: 'Portrait Client',
    content:
      'I was nervous about my headshot session, but the photographer made me feel at ease. The photos turned out amazing!',
    rating: 5,
    image: '/images/testimonial5.jpg',
  },
  {
    name: 'Robert Davis',
    role: 'Event Organizer',
    content:
      'The coverage of our charity gala was comprehensive and beautiful. The photos helped us raise more money next year.',
    rating: 5,
    image: '/images/testimonial6.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Client Testimonials</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Don't just take our word for it. Here's what our clients have to say
          about their experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} withImage />
          ))} */}
        </div>
      </div>
    </section>
  )
}