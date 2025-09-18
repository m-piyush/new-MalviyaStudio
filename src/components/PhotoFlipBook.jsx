"use client"

import HTMLFlipBook from "react-pageflip"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { album1, album2, album3, album4 } from "@/constant/album"

const albums = {
  1: album1,
  2: album2,
  3: album3,
  4: album4,
}

export default function PhotoFlipBook({ id }) {
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const [currentPage, setCurrentPage] = useState(0)
  const flipBookRef = useRef()

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      // Landscape dimensions - width is greater than height
      setDimensions({
        width: w > 768 ? Math.min(800, w - 100) : w - 30,
        height: w > 768 ? Math.min(600, h - 100) : (w - 30) * 0.75, // 4:3 aspect ratio
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const images = albums[id] || []
  const totalPages = images.length

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      flipBookRef.current?.pageFlip()?.flipNext()
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      flipBookRef.current?.pageFlip()?.flipPrev()
    }
  }

  const onFlip = (e) => {
    setCurrentPage(e.data)
  }

  if (images.length === 0) {
    return <div className="text-white text-center p-10">No images found for album: {id}</div>
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-20 relative">
      {/* Navigation Instructions */}
      <div className="mb-4 text-center">
        <p className="text-[#FF004A] text-sm mb-2">Use arrow keys or click the arrows to navigate</p>
        <p className="text-white/60 text-xs">
          Page {currentPage + 1} of {totalPages}
        </p>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 
            w-12 h-12 rounded-full flex items-center justify-center
            transition-all duration-200 shadow-lg
            ${
              currentPage === 0
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-white/90 hover:bg-white text-gray-800 hover:scale-110 cursor-pointer"
            }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* FlipBook */}
        <HTMLFlipBook
          ref={flipBookRef}
          width={dimensions.width}
          height={dimensions.height}
          size="stretch"
          minWidth={400}
          maxWidth={1200}
          minHeight={300}
          maxHeight={900}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="shadow-xl"
          onFlip={onFlip}
        >
          {images.map((item, index) => (
            <div key={index} className="relative w-full h-full bg-gray-100">
              <Image
                src={item.link || "/placeholder.svg"}
                alt={`Page ${index + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </HTMLFlipBook>

        {/* Right Arrow */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 
            w-12 h-12 rounded-full flex items-center justify-center
            transition-all duration-200 shadow-lg
            ${
              currentPage === totalPages - 1
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-white/90 hover:bg-white text-gray-800 hover:scale-110 cursor-pointer"
            }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>

        {/* Bottom Navigation Arrows */}
        <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          {/* Bottom Left Arrow */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`w-14 h-14 rounded-full flex items-center justify-center
              transition-all duration-200 shadow-lg
              ${
                currentPage === 0
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-white/90 hover:bg-white text-gray-800 hover:scale-110 cursor-pointer"
              }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Page indicator */}
          <div className="text-center px-2 py-4 bg-black/50 rounded-full w-22">
            <span className="text-white text-sm font-medium">
              {currentPage + 1} / {totalPages}
            </span>
          </div>

          {/* Bottom Right Arrow */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`w-14 h-14 rounded-full flex items-center justify-center
              transition-all duration-200 shadow-lg
              ${
                currentPage === totalPages - 1
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-white/90 hover:bg-white text-gray-800 hover:scale-110 cursor-pointer"
              }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Instructions */}
      {/* <div className="mt-16 text-center">
        <p className="text-red-700 text-xs">Use arrows above/below or swipe to navigate • Tap edges on mobile</p>
      </div> */}
    </div>
  )
}
