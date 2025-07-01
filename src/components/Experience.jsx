import React from 'react'

function ExperienceSection() {
    return (
        <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#fff1eb] to-[#d8f3ff] p-6 sm:p-12 rounded-2xl shadow-2xl">
            <p className="uppercase tracking-widest text-sm md:text-base text-pink-700 mb-2 font-semibold">
                Helping couples bring to life
            </p>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12">
                Their Wedding Dreams
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { value: "30+", label: "Years Experience" },
                    { value: "100K+", label: "Photos Delivered" },
                    { value: "10K+", label: "Events Captured" },
                    { value: "100+", label: "Awards Won" },
                ].map((stat, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-lg py-8 px-6 hover:shadow-xl transition-all duration-300"
                    >
                        <h4 className="text-4xl md:text-5xl font-extrabold text-[#e63946]">{stat.value}</h4>
                        <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceSection