import Image from "next/image";

export default function ServiceCard({ service, detailed = false }) {
  return (
    <div className={`bg-white ${detailed ? 'p-8 shadow-lg rounded-lg' : 'p-6 shadow-md rounded-md'} hover:shadow-xl transition-shadow`}>
      <div className="flex justify-center mb-4">
        <Image src={service.image} alt={service.title} width={300} height={300} className="inline-block" />
      </div>
      <h3 className={`${detailed ? 'text-xl' : 'text-lg'} font-semibold mb-2`}>
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      {/* {detailed && service.price && (
        <p className="text-gray-900 font-medium">{service.price}</p>
      )} */}
      {!detailed && (
        <a
          href="#"
          className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
        >
          Learn more →
        </a>
      )}
    </div>
  )
}