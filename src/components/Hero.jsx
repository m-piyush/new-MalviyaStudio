import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * Reusable hero band.
 *
 * Defaults preserve the original prop-less <Hero /> content used on the
 * About / Services pages. The home page passes explicit props.
 *
 * Props:
 *  - image: background image src (optional; falls back to a dark band)
 *  - imageAlt, scriptText (cursive accent line), title, subtitle
 *  - primaryCta / secondaryCta: { href, label }
 *  - height: tailwind height classes for the band
 *  - align: "center" | "left"
 */
export default function Hero({
  image,
  imageAlt = "",
  scriptText,
  title = "Capturing Life's Beautiful Moments",
  subtitle = "Professional photography & videography for weddings, portraits, and special events.",
  primaryCta = { href: "/gallery", label: "View Gallery" },
  secondaryCta = { href: "/contact", label: "Book a Session" },
  height = "h-[60vh] min-h-[440px] md:h-[78vh]",
  align = "center",
}) {
  return (
    <section className={cn("relative w-full overflow-hidden", height)}>
      {image ? (
        <Image src={image} alt={imageAlt} fill priority className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800" />
      )}

      {/* Gradient scrim — keeps text legible over any image, in both themes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div
        className={cn(
          "relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col justify-center gap-4 px-6",
          align === "center" ? "items-center text-center" : "items-start text-left"
        )}
      >
        {scriptText && (
          <p className="ephesis-regular text-3xl text-accent md:text-5xl">{scriptText}</p>
        )}
        {title && (
          <h1 className="cormorant-garamond max-w-3xl text-4xl font-semibold tracking-wide text-white drop-shadow-sm md:text-6xl">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="max-w-xl text-base text-white/85 md:text-lg">{subtitle}</p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="rounded-full bg-brand px-8 py-3 font-medium text-brand-foreground shadow-lg transition-colors hover:bg-brand/90"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-white/70 px-8 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
