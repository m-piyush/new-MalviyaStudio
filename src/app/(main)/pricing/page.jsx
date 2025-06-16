import PricingCard from '@/components/PricingCard'

const pricingPlans = [
  {
    title: 'Basic',
    price: '$300',
    features: [
      '1 hour photo session',
      '20 edited digital images',
      'Online gallery',
      'Print release',
    ],
    recommended: false,
  },
  {
    title: 'Standard',
    price: '$600',
    features: [
      '2 hour photo session',
      '50 edited digital images',
      'Online gallery',
      'Print release',
      '10 printed photos (5x7)',
    ],
    recommended: true,
  },
  {
    title: 'Premium',
    price: '$1,200',
    features: [
      '4 hour photo session',
      '100+ edited digital images',
      'Online gallery',
      'Print release',
      '20 printed photos (8x10)',
      'Photo album',
    ],
    recommended: false,
  },
]

export default function Pricing() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Pricing Plans</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Choose the package that fits your needs. All packages can be customized.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        <div className="mt-12 bg-gray-100 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Custom Packages</h3>
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for? We offer custom packages tailored
            to your specific needs.
          </p>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors">
            Contact Us for a Quote
          </button>
        </div>
      </div>
    </section>
  )
}