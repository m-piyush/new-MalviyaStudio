"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react"

// Cycle order: follow device -> force light -> force dark -> follow device ...
const ORDER = ["system", "light", "dark"]
const LABELS = { system: "System", light: "Light", dark: "Dark" }

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch: render a stable placeholder until mounted.
  useEffect(() => setMounted(true), [])

  const current = mounted ? theme ?? "system" : "system"
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length]
  const Icon = current === "dark" ? Moon : current === "light" ? Sun : Monitor

  return (
    <button
      type="button"
      aria-label={`Theme: ${LABELS[current]}. Click to switch to ${LABELS[next]}.`}
      title={`Theme: ${LABELS[current]} — click for ${LABELS[next]}`}
      onClick={() => setTheme(next)}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/90 transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
    >
      {mounted ? (
        <Icon className="h-[18px] w-[18px]" />
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  )
}
