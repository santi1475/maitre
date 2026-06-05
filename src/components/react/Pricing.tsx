import { motion } from "motion/react"
import { Check, Sparkles } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    name: "Local",
    price: "S/ 199",
    period: "/ mes",
    desc: "Un solo local que quiere dejar el papel.",
    features: [
      "Hasta 15 mesas",
      "Mozos ilimitados",
      "Cocina + caja + carta",
      "Reportes del día",
      "Soporte por WhatsApp",
    ],
    cta: "Pedir demo",
    highlight: false,
  },
  {
    name: "Negocio",
    price: "S/ 349",
    period: "/ mes",
    desc: "El plan que la mayoría elige.",
    features: [
      "Mesas ilimitadas",
      "Para llevar integrado",
      "Eventos y precios especiales",
      "Auditoría completa",
      "Soporte prioritario",
    ],
    cta: "Empezar ahora",
    highlight: true,
  },
  {
    name: "Cadena",
    price: "A medida",
    period: "",
    desc: "Más de un local. Reportes consolidados.",
    features: [
      "Multi-sucursal",
      "Reporte consolidado",
      "Permisos por rol",
      "Onboarding dedicado",
      "Atención por encargado",
    ],
    cta: "Conversemos",
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="relative bg-card/40 py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <BlurFade inView delay={0.05}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Planes simples
          </p>
        </BlurFade>
        <BlurFade inView delay={0.15}>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Pagás por mes. Sin permanencia, sin sorpresas.
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.25}>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-base text-muted-foreground">
            Empezá hoy, escalá cuando crezcas. Cancelás cuando quieras.
          </p>
        </BlurFade>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -4 }}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-card p-8 shadow-sm transition",
                p.highlight && "border-primary/40 shadow-xl shadow-primary/[0.08] ring-1 ring-primary/30"
              )}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                  <Sparkles className="size-3.5" /> Más elegido
                </div>
              )}
              <p className="text-sm font-semibold tracking-tight text-primary">{p.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 border-t pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              {p.highlight ? (
                <ShimmerButton
                  shimmerColor="#ffffff"
                  background="oklch(0.66 0.18 45)"
                  className="mt-8 w-full px-5 py-3 text-sm font-medium"
                >
                  <span className="text-primary-foreground">{p.cta}</span>
                </ShimmerButton>
              ) : (
                <a
                  href="#cta"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl border bg-background px-5 py-3 text-sm font-medium transition hover:bg-muted"
                >
                  {p.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
