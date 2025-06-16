import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    title: 'Wedding Photography',
    description:
      'Comprehensive coverage of your wedding day from preparation to reception. Includes engagement session, full-day coverage, and high-resolution edited images.',
    icon: '🎎',
    price: '$2,500+',
  },
  {
    title: 'Portrait Sessions',
    description:
      'Professional portraits for individuals, families, and couples. Perfect for headshots, family photos, or personal branding.',
    icon: '📷',
    price: '$300+',
  },
  {
    title: 'Commercial Photography',
    description:
      'High-quality images for businesses, including product shots, office environments, and team portraits.',
    icon: '💼',
    price: '$500+',
  },
  {
    title: 'Event Photography',
    description:
      'Documentation of corporate events, parties, and special occasions. Includes basic editing and digital delivery.',
    icon: '🎉',
    price: '$800+',
  },
  {
    title: 'Maternity & Newborn',
    description:
      'Beautifully capture the journey of pregnancy and the first precious moments with your newborn.',
    icon: '👶',
    price: '$400+',
  },
  {
    title: 'Custom Sessions',
    description:
      'Tailored photography sessions designed to meet your specific needs and creative vision.',
    icon: '✨',
    price: 'Custom',
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We offer a variety of photography services to capture your special
          moments. Each package can be customized to fit your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} detailed />
          ))}
        </div>
      </div>
    </section>
  )
}