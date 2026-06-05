import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

const ITEMS = [
  {
    quote:
      "Antes cerraba caja a la 1 a.m. con la calculadora. Hoy cierro a las 12 con un click. Mi mujer me lo agradece.",
    name: "Carlos M.",
    role: "Dueño · Cevichería en Miraflores",
  },
  {
    quote:
      "Mis mozos dejaron de pelearse por las mesas. El sistema marca quién la tomó y listo. Ambiente más sano.",
    name: "Lucía G.",
    role: "Administradora · Restaurante en Surco",
  },
  {
    quote:
      "La cocina nunca más me trajo el mismo plato dos veces. Eso solo ya me ahorra plata todos los días.",
    name: "Andrés P.",
    role: "Chef ejecutivo · Pollería 3 sedes",
  },
]

export function Testimonial() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <BlurFade inView delay={0.05}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Lo que dicen los dueños
          </p>
        </BlurFade>
        <BlurFade inView delay={0.15}>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Hablan los que ya cambiaron.
          </h2>
        </BlurFade>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border bg-card p-7 shadow-sm transition"
            >
              <Quote className="size-6 text-primary/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">{t.quote}</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold tracking-tight">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
