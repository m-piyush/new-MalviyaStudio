
'use client'

import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
const about = [
    {
        id: 1,
        title: "name",
        alt: "Wedding",
        image: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/1/pic52.jpg",
        link: "galleryStrip/1",
        category: 'Wedding',
    },
    {
        id: 2,
        title: "name",
        alt: "Wedding",
        image: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/2/pic42.jpg",
        link: "galleryStrip/2",
        category: 'Wedding'

    },
    {
        id: 3,
        title: "name",
        alt: "Wedding",
        image: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/3/pic30.jpg",
        link: "galleryStrip/3",
        category: 'Wedding'

    },
    {
        id: 4,
        title: "name",
        alt: "Wedding",
        image: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/4/pic24.jpg",
        link: "galleryStrip/4",
        category: 'Wedding'

    },
    {
        id: 5,
        title: "name",
        alt: "Wedding",
        image: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892/5/pic20.jpg",
        link: "galleryStrip/5",
        category: 'Wedding'
    },
    {
        id: 6,
        title: "Anishka",
        alt: "Birthday",
        image: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751536640/6/pic78.jpg",
        link: "galleryStrip/6",
        category: 'Birthday'
    },
    {
        id: 7,
        title: "Vidita",
        alt: "Birthday",
        image: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751536640/7/pic10.jpg",
        link: "galleryStrip/7",
        category: 'Birthday'
    },
    {
        id: 8,
        title: "vihaana",
        alt: "Birthday",
        image: "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751536640/8/pic30.jpg",
        link: "galleryStrip/8",
        category: 'Birthday'
    },
];
const GalleryStrip = () => {

    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredImages = selectedCategory === 'All'
        ? about
        : about.filter((img) => img.category === selectedCategory)

    const categories = ['All', 'Wedding', 'Prewedding', 'Engangment', 'Birthday', 'Portrait', 'Event', 'Commercial'];

    return (
        <div>
            {/* Category Filter Buttons */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex flex-wrap gap-2 shadow-sm">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 text-sm font-medium rounded ${selectedCategory === cat
                                ? 'bg-gray-900 text-white'
                                : 'bg-white text-gray-900 border border-gray-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">



                {filteredImages.map((item, index) => (
                    <Link key={index} href={item.link}>
                        <div className="cursor-pointer group overflow-hidden rounded-md">
                            <div className="w-full aspect-square relative">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-md"
                                />
                            </div>
                            <p className="text-center mt-2 text-sm text-gray-700 group-hover:text-black">
                                {item.title}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default GalleryStrip