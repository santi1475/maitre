// Static — no client directive needed in Astro (no hooks, no motion).
// Example: <Footer />
import { MessageCircle } from "lucide-react"

// lucide v1 dropped brand icons, so Instagram is inlined.
function Instagram({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const LEGAL = [
  { href: "#terminos", label: "Términos" },
  { href: "#privacidad", label: "Privacidad" },
]

const SOCIAL = [
  {
    href: "https://wa.me/51999999999",
    label: "WhatsApp",
    Icon: MessageCircle,
  },
  {
    href: "https://instagram.com/maitre",
    label: "Instagram",
    Icon: Instagram,
  },
]

export function Footer() {
  return (
    <footer className="w-full border-t border-stone/15 bg-stone-light text-stone dark:border-white/5 dark:bg-[#0a0907]">
      {/* Centered brand block */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16">
        <div className="font-serif text-3xl font-bold text-ink dark:text-[#e8e4dc]">
          maitre<span className="text-primary">•</span>
        </div>
        <p className="mt-4 max-w-xl text-center font-sans text-sm leading-relaxed">
          Sistema de gestión para restaurantes. Conectamos mesas, cocina y caja
          en tiempo real — sin papeles, sin gritos, sin comandas perdidas.
        </p>

        {/* Social icons with hover lift */}
        <div className="mt-6 flex items-center gap-4">
          {SOCIAL.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-stone/70 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary dark:hover:text-primary"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Legal links */}
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-6" aria-label="Footer">
          {LEGAL.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-sans text-xs text-stone/70 transition-colors hover:text-ink dark:hover:text-[#e8e4dc]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-stone/15 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center font-sans text-xs text-stone/60">
          © 2026 G.V. Enterprise SAC. Todos los derechos reservados. · Hecho con
          ♥ para restaurantes de Latinoamérica.
        </div>
      </div>
    </footer>
  )
}
