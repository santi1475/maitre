// Import in Astro with `client:visible` — uses Framer Motion scroll + hover animations.
// Example: <Roles client:visible />
import { motion, type Variants } from "motion/react"
import { ChefHat, ClipboardList, LayoutDashboard, Receipt } from "lucide-react"
import { GlowOrbs } from "./fx/GlowOrbs"

type Rol = {
  icon: typeof LayoutDashboard
  title: string
  items: string[]
}

const ROLES: Rol[] = [
  {
    icon: LayoutDashboard,
    title: "Dueño",
    items: [
      "Ve las ventas del día en tiempo real",
      "Detecta mesas sin atender antes de que el cliente se moleste",
      "Cierra el turno sin calculadora",
    ],
  },
  {
    icon: ClipboardList,
    title: "Mozo",
    items: [
      "Toma pedidos desde el celular, sin ir a la cocina",
      "Sabe al instante si un plato está listo",
      "Menos viajes, más mesas atendidas",
    ],
  },
  {
    icon: ChefHat,
    title: "Cocina",
    items: [
      "Ve los pedidos por prioridad, no por orden de llegada",
      "Marca platos listos con un toque",
      "Sin comandas ilegibles en papel",
    ],
  },
  {
    icon: Receipt,
    title: "Caja",
    items: [
      "El resumen del turno ya está calculado",
      "Ve qué mesa pidió qué y cuánto",
      "Cierre de caja en menos de 10 minutos",
    ],
  },
]

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const card: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Roles() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 dark:bg-[#111009] md:py-36">
      <GlowOrbs variant="soft" count={2} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          Para todo el equipo
        </div>
        <h2 className="font-serif text-4xl font-bold text-ink dark:text-[#e8e4dc] md:text-5xl">
          Cada uno ve lo que necesita
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-stone">
          Sin menús complicados. Sin cursos de capacitación.
        </p>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ROLES.map((r) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                variants={card}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-stone/10 bg-white p-7 text-left transition-colors duration-200 hover:border-primary/40 dark:bg-[#1e1c19]"
              >
                <Icon className="mb-5 text-primary" size={32} />
                <h3 className="mb-3 font-serif text-xl font-bold text-ink dark:text-[#e8e4dc]">
                  {r.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {r.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-2 font-sans text-sm text-stone/90"
                    >
                      <span className="text-primary" aria-hidden="true">
                        →
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
