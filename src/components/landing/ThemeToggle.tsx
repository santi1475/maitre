import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

type Theme = "light" | "dark"

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme(getInitialTheme())
    setMounted(true)
  }, [])

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    const root = document.documentElement
    if (next === "dark") root.classList.add("dark")
    else root.classList.remove("dark")
    root.style.colorScheme = next
    try {
      localStorage.setItem("theme", next)
    } catch {}
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar tema"
      aria-pressed={isDark}
      title={isDark ? "Activar tema claro" : "Activar tema oscuro"}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg text-stone transition-colors hover:text-ink dark:hover:text-[#e8e4dc]",
        className,
      )}
    >
      {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
