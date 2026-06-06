// Import in Astro with the `client:load` directive so Framer Motion + Magic UI hydrate.
// Example: <Hero client:load />
import { motion, useReducedMotion, type Variants } from "motion/react"
import { NumberTicker } from "@/components/ui/number-ticker"
import { GlowOrbs } from "./fx/GlowOrbs"

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

const METRICS = [
  { prefix: "+", value: 340, suffix: "", label: "restaurantes activos" },
  { prefix: "", value: 8, suffix: " min", label: "promedio cierre de caja" },
  { prefix: "", value: 0, suffix: "", label: "comandas perdidas" },
] as const

export function Hero() {
  const reduce = useReducedMotion()
  const variantsItem = reduce ? undefined : item
  const variantsContainer = reduce ? undefined : container

  return (
    <>
      <motion.section
        initial={reduce ? false : "hidden"}
        animate="visible"
        variants={variantsContainer}
        className="relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden bg-cream px-6 pb-20 pt-32 dark:bg-[#111009]"
      >
        <GlowOrbs variant="soft" count={3} />

        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <motion.div
            variants={variantsItem}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 dark:bg-primary/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
              Ya disponible · Perú y Latinoamérica
            </span>
          </motion.div>

          <motion.h1
            variants={variantsItem}
            className="font-serif font-bold text-ink dark:text-[#e8e4dc]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)", lineHeight: 1.1 }}
          >
            El restaurante que mereces,
            <br />
            sin el <span className="text-primary">caos</span> que conoces.
          </motion.h1>

          <motion.p
            variants={variantsItem}
            className="mx-auto mt-6 max-w-2xl font-sans text-lg font-normal text-stone md:text-xl"
          >
            Maitre conecta mesas, cocina y caja en tiempo real.
            <br />
            Sin papeles, sin gritos, sin comandas perdidas.
          </motion.p>

          <motion.div
            variants={variantsItem}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#empezar"
              className="rounded-xl bg-primary px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-primary-dark"
            >
              Empezar gratis →
            </a>
            <a
              href="#demo"
              className="rounded-xl border border-stone/40 px-8 py-3.5 text-base font-bold text-ink transition-colors hover:border-primary hover:text-primary dark:text-[#e8e4dc] dark:hover:text-primary"
            >
              Ver cómo funciona
            </a>
          </motion.div>

          {/* TODO: reemplazar este mockup placeholder por <ProductMockup /> cuando esté listo */}
          <motion.div
            variants={variantsItem}
            className="relative mx-auto mt-16 max-w-3xl"
          >
            <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 font-sans text-xs font-medium text-white dark:bg-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Demo interactiva próximamente
              </span>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-stone/20 bg-ink/5 dark:bg-white/5">
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 30%, rgba(0,199,91,0.08) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                }}
              />
              <div className="absolute inset-6 flex flex-col gap-3">
                <div className="h-6 w-32 rounded bg-stone/20 dark:bg-white/10" />
                <div className="grid flex-1 grid-cols-3 gap-3">
                  <div className="rounded-lg bg-stone/15 dark:bg-white/5" />
                  <div className="rounded-lg bg-stone/15 dark:bg-white/5" />
                  <div className="rounded-lg bg-stone/15 dark:bg-white/5" />
                </div>
                <div className="h-3 w-2/3 rounded bg-stone/15 dark:bg-white/5" />
                <div className="h-3 w-1/2 rounded bg-stone/15 dark:bg-white/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="border-y border-primary/10 bg-primary-light py-10 dark:bg-primary/5">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-primary/20 px-6">
          {METRICS.map((m) => (
            <div key={m.label} className="px-4 text-center">
              <div className="font-serif text-4xl font-bold text-ink dark:text-[#e8e4dc]">
                {m.prefix}
                <NumberTicker
                  value={m.value}
                  className="font-serif text-4xl font-bold !text-ink dark:!text-[#e8e4dc]"
                />
                {m.suffix}
              </div>
              <div className="mt-1 font-sans text-sm uppercase tracking-wide text-stone">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
