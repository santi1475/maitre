import { useState } from "react"
import { Check } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { BlurFade } from "@/components/ui/blur-fade"
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
  const [annual, setAnnual] = useState(false)

  const basicoPrice = annual ? "159" : "199"
  const proPrice = annual ? "279" : "349"

  return (
    <section id="precios" className="relative scroll-mt-20 overflow-hidden bg-cream py-20 dark:bg-[#111009] md:py-32">
      <GlowOrbs variant="soft" count={2} />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <BlurFade delay={0.05} inView>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink dark:text-[#e8e4dc] md:text-5xl">
            Precios transparentes, sin comisiones por venta
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base sm:text-lg text-stone">
            Sin sorpresas a fin de mes. Sin costo por plato vendido. Cancela cuando quieras.
          </p>
        </BlurFade>

        {/* Toggle Mensual / Anual */}
        <BlurFade delay={0.1} inView>
          <div className="mt-8 sm:mt-10 inline-flex items-center gap-3 rounded-full border border-stone/20 bg-stone-light/80 p-1.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold transition-all ${
                !annual
                  ? "bg-white text-ink shadow-xs dark:bg-[#1e1c19] dark:text-[#e8e4dc]"
                  : "text-stone hover:text-ink dark:hover:text-white"
              }`}
            >
              Facturación mensual
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold transition-all ${
                annual
                  ? "bg-primary text-white shadow-xs"
                  : "text-stone hover:text-ink dark:hover:text-white"
              }`}
            >
              <span>Anual</span>
              <span className="rounded-full bg-emerald-700/40 px-1.5 py-0.5 text-[10px] uppercase font-extrabold text-emerald-200">
                -20%
              </span>
            </button>
          </div>
        </BlurFade>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 text-left">
          {/* Plan Básico */}
          <BlurFade delay={0.15} inView className="h-full">
            <div
              className="flex h-full flex-col justify-between rounded-2xl border border-stone/15 bg-white p-7 sm:p-8 dark:bg-[#1e1c19] shadow-xs transition-all hover:border-stone/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]">
                    Básico
                  </h3>
                  <span className="text-xs font-semibold text-stone uppercase tracking-wider">
                    Para 1 local
                  </span>
                </div>
                <p className="mt-1 text-xs text-stone">
                  Todo lo indispensable para operar sin papel y cuadrar caja al instante.
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-ink dark:text-[#e8e4dc]">
                    S/ {basicoPrice}
                  </span>
                  <span className="text-base text-stone">/mes</span>
                </div>
                {annual && (
                  <p className="text-[11px] text-primary font-medium mt-1">
                    Facturado anualmente (S/ 1,908 /año)
                  </p>
                )}
                <ul className="mt-6 flex flex-col gap-3">
                  {BASICO.map((f) => (
                    <Feature key={f}>{f}</Feature>
                  ))}
                </ul>
              </div>
              <a
                href={`https://wa.me/51999999999?text=Hola%2C%20quisiera%20activar%20el%20Plan%20Basico%20de%20Maitre%20(${annual ? "anual" : "mensual"})`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl border border-stone/30 px-6 font-sans text-sm font-bold text-ink transition-colors hover:border-primary hover:text-primary dark:text-[#e8e4dc] dark:hover:text-primary"
              >
                Empezar con Básico
              </a>
            </div>
          </BlurFade>

          {/* Plan Pro */}
          <BlurFade delay={0.22} inView className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-primary bg-white p-7 sm:p-8 dark:bg-[#1e1c19] shadow-lg">
              <BorderBeam
                size={120}
                duration={10}
                colorFrom="#00c75b"
                colorTo="#e6faf0"
              />
              <div className="absolute right-6 top-6">
                <span className="rounded-full bg-primary/15 px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
                  Más elegido
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]">
                  Pro
                </h3>
                <p className="mt-1 text-xs text-stone">
                  Sin límites para restaurantes con alta rotación o múltiples sucursales.
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-ink dark:text-[#e8e4dc]">
                    S/ {proPrice}
                  </span>
                  <span className="text-base text-stone">/mes</span>
                </div>
                {annual && (
                  <p className="text-[11px] text-primary font-medium mt-1">
                    Facturado anualmente (S/ 3,348 /año)
                  </p>
                )}
                <ul className="mt-6 flex flex-col gap-3">
                  {PRO.map((f) => (
                    <Feature key={f}>{f}</Feature>
                  ))}
                </ul>
              </div>
              <ShimmerButton
                href={`https://wa.me/51999999999?text=Hola%2C%20quisiera%20activar%20el%20Plan%20Pro%20de%20Maitre%20(${annual ? "anual" : "mensual"})`}
                target="_blank"
                rel="noopener noreferrer"
                shimmerColor="#ffffff"
                background="#00c75b"
                className="mt-8 h-12 w-full px-6 font-sans text-sm font-bold text-white shadow-sm hover:shadow-md"
              >
                Empezar con Pro →
              </ShimmerButton>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
