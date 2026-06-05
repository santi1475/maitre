import { motion } from "motion/react"
import { X, Check } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

const SIN = [
  "Mozos con papelitos perdidos",
  "Cocina recibe el mismo pedido dos veces",
  "Caja sale corta sin saber por qué",
  "Mesas que se pisan entre mozos",
  "Cliente reclama el plato que nunca llegó",
  "Cierre de día con calculadora",
]

const CON = [
  "Mozo toca, cocina ve, al instante",
  "Doble-toque no genera doble pedido",
  "Cada cambio queda registrado con nombre y hora",
  "Una mesa, un mozo, sin discusiones",
  "El pedido nunca se pierde en el camino",
  "Cierre automático con corte cuadrado",
]

export function BeforeAfter() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <BlurFade inView delay={0.05}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Antes y después
          </p>
        </BlurFade>
        <BlurFade inView delay={0.15}>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Tu noche de viernes, sin Maitre y con Maitre.
          </h2>
        </BlurFade>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="relative overflow-hidden rounded-3xl border bg-card p-8 shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-300/80 via-rose-400 to-rose-300/80" />
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
              <X className="size-3.5" /> Sin Maitre
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">Caos disimulado</h3>
            <ul className="mt-6 space-y-3">
              {SIN.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400">
                    <X className="size-3" />
                  </span>
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-orange-50/60 to-amber-50/30 p-8 shadow-xl shadow-primary/[0.08] dark:from-primary/10 dark:to-amber-500/5"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 via-amber-400 to-primary/60" />
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
              <Check className="size-3.5" /> Con Maitre
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">Operación que respira sola</h3>
            <ul className="mt-6 space-y-3">
              {CON.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" />
                  </span>
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
