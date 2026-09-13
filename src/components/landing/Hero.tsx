// Import in Astro with the `client:load` directive so Framer Motion + Magic UI hydrate.
// Example: <Hero client:load />
import { motion, useReducedMotion, type Variants } from "motion/react"
import { NumberTicker } from "@/components/ui/number-ticker"
import { SilkBackground } from "@/components/ui/silk-background"

import { ShimmerButton } from "@/components/ui/shimmer-button"

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
        <SilkBackground />

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
            <ShimmerButton
              href="#empezar"
              shimmerColor="#ffffff"
              background="#00c75b"
              className="w-full sm:w-auto text-base font-bold shadow-md hover:shadow-primary/30"
            >
              Empezar gratis →
            </ShimmerButton>
            <a
              href="#funciones"
              className="rounded-xl border border-stone/30 bg-cream/60 px-8 py-3.5 text-base font-bold text-ink backdrop-blur-xs transition-colors hover:border-primary hover:text-primary dark:bg-white/5 dark:text-[#e8e4dc] dark:hover:border-primary dark:hover:text-primary"
            >
              Ver cómo funciona ↓
            </a>
          </motion.div>

          {/* Live System Synced Teaser */}
          <motion.div
            variants={variantsItem}
            className="mx-auto mt-14 max-w-2xl"
          >
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 rounded-2xl border border-stone/20 bg-white/70 p-3 sm:p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#1a1714]/80">
              <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Salón en vivo
              </span>
              <span className="text-stone/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                Cocina KDS sincronizada
              </span>
              <span className="text-stone/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 rounded-full bg-stone/15 px-3 py-1 text-xs font-semibold text-stone-dark dark:text-stone">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Caja lista para cuadre
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="border-y border-primary/15 bg-primary-light/80 py-8 sm:py-10 dark:bg-primary/5">
        <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-primary/20 px-6">
          {METRICS.map((m) => (
            <div key={m.label} className="py-4 sm:py-0 px-4 text-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-ink dark:text-[#e8e4dc]">
                {m.prefix}
                <NumberTicker
                  value={m.value}
                  className="font-serif text-3xl sm:text-4xl font-bold !text-ink dark:!text-[#e8e4dc]"
                />
                {m.suffix}
              </div>
              <div className="mt-1 font-sans text-xs sm:text-sm uppercase tracking-wider text-stone-dark/80 dark:text-stone">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
