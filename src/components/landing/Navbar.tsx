// Import in Astro with the `client:load` directive so theme state hydrates immediately.
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./ThemeToggle"

const LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-cream/80 backdrop-blur-md dark:bg-[#111009]/80",
        "border-b transition-colors duration-200",
        scrolled
          ? "border-stone/20 dark:border-white/10"
          : "border-transparent",
      )}
      style={{ borderBottomWidth: "0.5px" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]"
          aria-label="Maitre, inicio"
        >
          maitre<span className="text-primary">•</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm font-medium text-stone transition-colors duration-150 hover:text-ink dark:hover:text-[#e8e4dc]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#empezar"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-dark md:inline-flex"
          >
            Empezar gratis
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-stone transition-colors hover:text-ink dark:hover:text-[#e8e4dc] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-stone/15 bg-cream/95 backdrop-blur-md dark:border-white/10 dark:bg-[#111009]/95 md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8"
            aria-label="Mobile"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-sans text-base font-medium text-stone transition-colors hover:text-ink dark:hover:text-[#e8e4dc]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#empezar"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
            >
              Empezar gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
