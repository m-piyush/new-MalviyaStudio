import Link from "next/link";

export default function PricingCard({ plan }) {
  return (
    <div
      className={`bg-card text-card-foreground border border-border p-8 rounded-lg shadow-lg ${plan.recommended ? 'border-2 border-foreground transform scale-105' : ''
        }`}
    >
      {plan.recommended && (
        <div className="bg-brand text-brand-foreground text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-4">
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
      <Link href="/contact" className="block mb-4 text-center text-muted-foreground">
        <button
          className={`w-full py-3 px-6 rounded-md font-medium ${plan.recommended
              ? 'bg-brand text-brand-foreground hover:bg-brand/90'
              : 'border-2 border-foreground text-foreground hover:bg-muted'
            } transition-colors`}
        >
          Get Started
        </button>
      </Link>
    </div>
  )
}