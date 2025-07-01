import Link from "next/link";

export default function PricingCard({ plan }) {
  return (
    <div
      className={`bg-white p-8 rounded-lg shadow-lg ${plan.recommended ? 'border-2 border-gray-900 transform scale-105' : ''
        }`}
    >
      {plan.recommended && (
        <div className="bg-gray-900 text-white text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
      {/* <p className="text-3xl font-bold mb-6">{plan.price}</p> */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="block mb-4 text-center text-gray-600">
        <button
          className={`w-full py-3 px-6 rounded-md font-medium ${plan.recommended
              ? 'bg-gray-900 text-white hover:bg-gray-700'
              : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-100'
            } transition-colors`}
        >
          Get Started
        </button>
      </Link>
    </div>
  )
}