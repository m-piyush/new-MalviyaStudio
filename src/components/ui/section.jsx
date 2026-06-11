import { cn } from "@/lib/utils"

/**
 * Section — consistent vertical rhythm + centered max-width container.
 *
 * Props:
 *  - as: element/tag to render (default "section")
 *  - className: classes on the outer band (e.g. bg-muted)
 *  - containerClassName: classes on the inner container
 *  - full: skip the inner container (for full-bleed content)
 *  - size: "default" | "sm" | "lg" vertical padding scale
 */
export function Section({
  as: Tag = "section",
  className,
  containerClassName,
  full = false,
  size = "default",
  children,
  ...props
}) {
  const pad = {
    sm: "py-10 md:py-14",
    default: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  }[size]

  return (
    <Tag className={cn(pad, className)} {...props}>
      {full ? (
        children
      ) : (
        <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
          {children}
        </div>
      )}
    </Tag>
  )
}

/**
 * SectionHeading — eyebrow + title + description with consistent type.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="cormorant-garamond text-3xl font-semibold text-foreground md:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
