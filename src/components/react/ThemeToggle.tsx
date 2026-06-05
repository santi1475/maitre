import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Sun, Moon } from "lucide-react"

const KEY = "maitre.theme"

function getInitial(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  const saved = localStorage.getItem(KEY)
  if (saved === "light" || saved === "dark") return saved
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function apply(theme: "light" | "dark") {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  root.style.colorScheme = theme
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = getInitial()
    setTheme(t)
    apply(t)
    setMounted(true)
  }, [])

  function toggle() {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    apply(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className="relative inline-flex size-9 items-center justify-center overflow-hidden rounded-full border bg-card text-foreground transition hover:bg-muted"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={theme}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            className="inline-flex"
          >
            {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
