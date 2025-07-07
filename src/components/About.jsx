import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function AboutSection() {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto bg-gradient-to-br from-[#ffe2e2] to-[#fff1eb] p-4 rounded-2xl shadow-2xl gap-10">
            {/* <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#ffe2e2] to-[#fff1eb] px-4 rounded-2xl shadow-2xl"></div> */}
            {/* Left Side - Text */}
            <div className="md:w-1/2 text-center md:text-left px-6 flex flex-col justify-center gap-2 md:gap-2">
                <blockquote className="text-pink-500 text-5xl leading-none">“</blockquote>

                <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                    Malviya Studios is an endeavor to capture all things beautiful. We are a passionate team of wedding photographers and cinematographers who love to preserve the most emotional, heartwarming moments. Weddings are once-in-a-lifetime memories, and we’re honored to tell your story through our lens.
                </p>

                <img
                    src="/images/home/home1.png"
                    alt="signature"
                    className="w-40 mx-auto md:mx-0"
                />
                <p className="text-gray-900 font-bold text-lg">Sharad Malviya</p>
                <button className="mt-4 w-max mx-auto md:mx-0 px-6 py-3 bg-[#ff004a] text-white rounded-full hover:bg-[#a48770] transition-all shadow-md">
                    <Link href={"/contact"}>   Contact Us</Link>
                </button>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 px-6">
                <Image
                    src="/images/about/daddy.jpg"
                    alt="Photographer"
                    width={400}
                    height={500}
                    className="rounded-2xl w-full h-auto max-w-sm mx-auto shadow-xl hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>
    )
}

export default AboutSection