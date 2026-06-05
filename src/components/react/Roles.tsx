import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Users, ChefHat, ShieldCheck, BarChart3, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { BlurFade } from "@/components/ui/blur-fade"

const ROLES = [
  {
    id: "mozo",
    label: "Mozo",
    icon: Users,
    accent: "oklch(0.66 0.18 45)",
    title: "Más mesas en menos tiempo, sin correr al mostrador.",
    bullets: [
      "Mapa de mesas con colores: libre, ocupada, por cerrar",
      "Toca el plato, elige si es salón o para llevar, listo",
      "Nadie le toca su mesa a otro mozo",
      "Cuenta dividida en dos toques",
    ],
    flow: ["Llega el cliente", "Toma pedido", "Va a cocina", "Sirve", "Cobra"],
  },
  {
    id: "cocina",
    label: "Cocina",
    icon: ChefHat,
    accent: "#f59e0b",
    title: "La cocina trabaja al ritmo de la sala, sin gritos.",
    bullets: [
      "Los pedidos aparecen en una pantalla grande",
      "El tiempo de espera se ve en cada comanda",
      "Doble-toque para marcar 'listo' (sin equivocarse)",
      "Sin papelitos que se traspapelan",
    ],
    flow: ["Llega comanda", "Prepara", "Marca listo", "Mozo lo sabe al toque"],
  },
  {
    id: "admin",
    label: "Encargado",
    icon: ShieldCheck,
    accent: "#3b82f6",
    title: "Toda tu sala en una sola pantalla.",
    bullets: [
      "Mirás todas las mesas y delivery en vivo",
      "Quitás un ítem y queda el motivo registrado",
      "Cerrás cualquier cuenta con cualquier método de pago",
      "Editás carta, precios y categorías cuando quieras",
    ],
    flow: ["Vista de sala", "Ajustes con motivo", "Cierre", "Reporte del día"],
  },
  {
    id: "dueno",
    label: "Dueño",
    icon: BarChart3,
    accent: "#10b981",
    title: "Sabés qué pasa en tu local sin estar adentro.",
    bullets: [
      "Reporte del día: ventas, ticket promedio, mozo top",
      "Historial completo: quién hizo qué y cuándo",
      "Alertas cuando alguien elimina un plato grande",
      "Funciona en una o varias sucursales",
    ],
    flow: ["Abrís el panel", "Mirás el día", "Detectás algo raro", "Actuás"],
  },
]

export function Roles() {
  const [active, setActive] = useState(ROLES[0].id)
  const current = ROLES.find((r) => r.id === active)!

  return (
    <section id="roles" className="relative bg-card/40 py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <BlurFade inView delay={0.05}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Pensado por rol
          </p>
        </BlurFade>
        <BlurFade inView delay={0.15}>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Cada persona ve solo lo que necesita.
          </h2>
        </BlurFade>

        <div className="mx-auto mt-12 flex max-w-fit flex-wrap items-center justify-center gap-2 rounded-full border bg-card p-1.5 shadow-sm">
          {ROLES.map((r) => {
            const Icon = r.icon
            const isActive = active === r.id
            return (
              <button
                key={r.id}
                onClick={() => setActive(r.id)}
                className={cn(
                  "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="role-pill"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-foreground"
                  />
                )}
                <Icon className="relative size-4" />
                <span className="relative">{r.label}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -12, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 12, filter: "blur(6px)" }}
              transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            >
              <h3 className="max-w-md text-balance text-3xl font-semibold tracking-tight">
                {current.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {current.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0"
                      style={{ color: current.accent }}
                    />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-flow"}
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border bg-card p-8 shadow-xl shadow-black/[0.04]"
            >
              <div
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent to-transparent"
                style={{ backgroundImage: `linear-gradient(to right, transparent, ${current.accent}, transparent)` }}
              />
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Un día con Maitre · {current.label}
              </p>
              <div className="mt-6 space-y-3">
                {current.flow.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="flex size-8 items-center justify-center rounded-lg text-xs font-semibold"
                      style={{
                        background: `color-mix(in oklch, ${current.accent} 15%, transparent)`,
                        color: current.accent,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1 rounded-xl border bg-background/60 px-4 py-3 text-sm font-medium">
                      {step}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
