// Import in Astro with `client:visible` — uses Framer Motion scroll animations + Magic UI.
// Example: <Flujo client:visible />
import { motion, type Variants } from "motion/react"
import { ChefHat, Receipt, Smartphone } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"

type Step = {
  n: number
  icon: typeof Smartphone
  title: string
  desc: string
}

const STEPS: Step[] = [
  {
    n: 1,
    icon: Smartphone,
    title: "Mozo toma el pedido",
    desc: "Desde cualquier celular o tablet. El pedido llega al instante.",
  },
  {
    n: 2,
    icon: ChefHat,
    title: "Cocina lo recibe al toque",
    desc: "Sin gritos, sin papeles. La comanda aparece en pantalla con prioridad.",
  },
  {
    n: 3,
    icon: Receipt,
    title: "Caja cierra sola",
    desc: "El resumen del turno se genera automático. Cuadra en minutos.",
  },
]

const card: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
}

export function Flujo() {
  return (
    <section className="section-ink py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          Cómo funciona
        </div>
        <h2
          className="font-serif font-bold text-[#e8e4dc]"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
        >
          De la mesa a la caja, sin fricción
        </h2>
        <p className="mt-4 font-sans text-lg text-stone">
          Tres pasos. Sin papeles. Sin errores.
        </p>

        <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Conector SVG punteado — solo desktop */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-24 hidden h-2 w-full md:block"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M 170 2 L 500 2"
              stroke="#00c75b"
              strokeWidth={1}
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            />
            <motion.path
              d="M 500 2 L 830 2"
              stroke="#00c75b"
              strokeWidth={1}
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
            />
          </svg>

          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.n}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative z-10 rounded-2xl border border-white/5 bg-[#1e1c19] p-8 text-center"
              >
                <div className="font-serif text-6xl font-bold text-primary opacity-80">
                  0
                  <NumberTicker
                    value={s.n}
                    className="font-serif text-6xl font-bold !text-primary"
                  />
                </div>
                <Icon className="mx-auto mt-4 text-stone" size={28} />
                <h3 className="mt-4 font-serif text-xl font-bold text-[#e8e4dc]">
                  {s.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-stone/80">
                  {s.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
