"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

/** Build the embed/playback URL for the active video. */
function playerFor(video) {
  if (!video) return null
  if (video.type === "youtube") {
    return {
      kind: "iframe",
      src: `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`,
    }
  }
  if (video.type === "vimeo") {
    return {
      kind: "iframe",
      src: `https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&title=0&byline=0`,
    }
  }
  if (video.type === "file") {
    return { kind: "video", src: video.src }
  }
  return null
}

/** Best-effort poster: explicit thumbnail, else YouTube poster. */
function posterFor(video) {
  if (video.thumbnail) return video.thumbnail
  if (video.type === "youtube") {
    return `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
  }
  return null
}

export default function VideoShowcase({ videos = [], columns = "md:grid-cols-3" }) {
  const [active, setActive] = useState(null)
  const closeBtnRef = useRef(null)

  // Lock body scroll + close on Escape while the lightbox is open.
  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === "Escape" && setActive(null)
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeBtnRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active])

  const player = playerFor(active)

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
        {videos.map((video) => {
          const poster = posterFor(video)
          return (
            <button
              key={video.id}
              type="button"
              onClick={() => setActive(video)}
              aria-label={`Play video: ${video.title}`}
              className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {poster && (
                <Image
                  src={poster}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              {/* Scrim + caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Play button */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/90 text-brand-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>
              </span>

              <span className="absolute inset-x-0 bottom-0 p-4 text-left">
                <span className="block text-xs font-semibold uppercase tracking-widest text-white/70">
                  {video.category}
                </span>
                <span className="cormorant-garamond block text-lg font-semibold text-white">
                  {video.title}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Lightbox */}
      {active && player && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
              {player.kind === "iframe" ? (
                <iframe
                  src={player.src}
                  title={active.title}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video
                  src={player.src}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
