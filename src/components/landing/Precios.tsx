// Import in Astro with `client:visible` — Magic UI BorderBeam needs hydration.
// Example: <Precios client:visible />
import { Check } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"
import { GlowOrbs } from "./fx/GlowOrbs"

const BASICO = [
  "Hasta 20 mesas",
  "Módulo de comandas",
  "Pantalla de cocina",
  "Caja y cierre de turno",
  "1 usuario administrador",
  "Soporte por WhatsApp",
]

const PRO = [
  "Todo lo del Básico",
  "Mozos ilimitados",
  "Reportes de ventas",
  "Multi-local (hasta 3 sucursales)",
  "Usuarios sin límite",
  "Soporte prioritario",
]

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 font-sans text-sm text-stone/90 dark:text-stone">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <span className="text-ink dark:text-[#e8e4dc]">{children}</span>
    </li>
  )
}

export function Precios() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 dark:bg-[#111009] md:py-36">
      <GlowOrbs variant="soft" count={2} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          Precios
        </div>
        <h2 className="font-serif text-4xl font-bold text-ink dark:text-[#e8e4dc] md:text-5xl">
          Sin sorpresas al final del mes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-stone">
          Sin comisiones por venta. Sin permanencia mínima.
        </p>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Plan Básico */}
          <div
            className="rounded-2xl border border-stone/10 bg-white p-8 text-left dark:bg-[#1e1c19]"
          >
            <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]">
              Básico
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-serif text-5xl font-bold text-ink dark:text-[#e8e4dc]">
                S/ 199
              </span>
              <span className="text-lg text-stone">/mes</span>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {BASICO.map((f) => (
                <Feature key={f}>{f}</Feature>
              ))}
            </ul>
            <a
              href="#empezar-basico"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-stone/40 px-6 py-3 font-sans text-sm font-bold text-ink transition-colors hover:border-primary hover:text-primary dark:text-[#e8e4dc] dark:hover:text-primary"
            >
              Empezar con Básico
            </a>
          </div>

          {/* Plan Pro */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-white p-8 text-left dark:bg-[#1e1c19]">
            <BorderBeam
              size={120}
              duration={10}
              colorFrom="#00c75b"
              colorTo="#e6faf0"
            />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <span className="rounded-full bg-primary px-3 py-1 font-sans text-xs font-bold uppercase tracking-wide text-white">
                Más popular
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]">
              Pro
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-serif text-5xl font-bold text-ink dark:text-[#e8e4dc]">
                S/ 349
              </span>
              <span className="text-lg text-stone">/mes</span>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {PRO.map((f) => (
                <Feature key={f}>{f}</Feature>
              ))}
            </ul>
            <a
              href="#empezar-pro"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-sans text-sm font-bold text-white transition-colors hover:bg-primary-dark"
            >
              Empezar con Pro →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
