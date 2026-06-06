// Static — no client directive needed in Astro (no hooks, no motion).
// Example: <Footer />
import { MessageCircle } from "lucide-react"

const LINKS = [
  { href: "#terminos", label: "Términos" },
  { href: "#privacidad", label: "Privacidad" },
  { href: "https://wa.me/51999999999", label: "WhatsApp", icon: true, external: true },
  { href: "https://instagram.com/maitre", label: "Instagram", external: true },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#111009] px-6 py-12 dark:bg-[#0a0907]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <div className="font-serif text-2xl font-bold text-[#e8e4dc]">
              maitre<span className="text-primary">•</span>
            </div>
            <p className="mt-1 font-sans text-xs text-stone/60">
              Sistema de gestión para restaurantes 
            </p>
            <p className="mt-2 font-sans text-xs text-stone/40">
              Hecho con ♥ para restaurantes de Latinoamérica. oNIX
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="inline-flex items-center gap-1.5 font-sans text-xs text-stone/60 transition-colors hover:text-stone"
              >
                {l.icon && <MessageCircle size={16} />}
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 w-full border-t border-white/5 pt-6">
          <span className="block w-full text-center font-sans text-xs text-stone/30">
            © 2026 G.V. Enterprise SAC. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}
