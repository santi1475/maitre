// Import in Astro with the `client:load` directive so theme state hydrates immediately.
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./ThemeToggle"

const LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#roles", label: "Equipo" },
  { href: "#testimonios", label: "Clientes" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "Preguntas" },
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md dark:bg-[#111009]/90",
        "border-b transition-colors duration-200",
        scrolled
          ? "border-stone/20 dark:border-white/10 shadow-xs"
          : "border-transparent",
      )}
      style={{ borderBottomWidth: "0.5px" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="group font-serif text-2xl font-bold tracking-tight text-ink dark:text-[#e8e4dc]"
          aria-label="Maitre, inicio"
        >
          maitre<span className="text-primary transition-transform duration-200 group-hover:inline-block group-hover:scale-125">•</span>
        </a>

        <nav className="hidden items-center gap-7 lg:gap-8 md:flex" aria-label="Principal">
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

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#empezar"
            className="hidden rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-xs transition-all duration-150 hover:bg-primary-dark hover:shadow-md md:inline-flex"
          >
            Empezar gratis
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-stone transition-colors hover:bg-stone-light/60 hover:text-ink dark:hover:bg-white/5 dark:hover:text-[#e8e4dc] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col justify-between border-t border-stone/15 bg-cream/98 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-[#111009]/98 md:hidden overflow-y-auto">
          <nav
            className="flex flex-col gap-1"
            aria-label="Mobile"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center rounded-lg px-3 font-sans text-base font-semibold text-ink/85 transition-colors hover:bg-primary-light/50 hover:text-primary dark:text-[#e8e4dc] dark:hover:bg-primary/10"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-stone/15 dark:border-white/10">
            <a
              href="#empezar"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary text-base font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Empezar gratis →
            </a>
            <a
              href="https://wa.me/51999999999?text=Hola%2C%20quisiera%20agendar%20una%20demo%20de%20Maitre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-stone/20 text-sm font-semibold text-stone hover:text-ink dark:hover:text-white transition-colors"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
