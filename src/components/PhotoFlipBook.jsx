"use client";

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { useEffect, useState } from "react";

const folderImageCounts = {
    1: 65,
    2: 45,
    3: 36,
    4: 42,
    5: 32,
    6: 80,
    7: 52,
    8: 89
};

export default function PhotoFlipBook({ id }) {
    const [dimensions, setDimensions] = useState({ width: 400, height: 600 });
    console.log("check-3");

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            setDimensions({
                width: w > 768 ? 400 : w - 30,
                height: h - 30,
            });
        };
        console.log("check-");
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalImages = folderImageCounts[id] || 0;
    const baseURL = "https://res.cloudinary.com/dkucdzv1g/image/upload/v1751449892";

    const images = Array.from({ length: totalImages }, (_, i) => {
        return `${baseURL}/${id}/pic${i + 1}.jpg`;
    });

    // if (images.length === 0) {
    //     return <div className="text-white text-center p-10">No images found for album: {id}</div>;
    // }

    return (
        <div className="flex flex-col justify-center items-center w-full h-full py-20">
            <HTMLFlipBook
                width={dimensions.width}
                height={dimensions.height}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1536}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="shadow-xl"
            >
                {images.map((src, index) => (
                    <div key={index} className="relative w-full h-full">
                        <Image
                            src={src}
                            alt={`Page ${index + 1}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}
