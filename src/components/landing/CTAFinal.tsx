// Import in Astro with `client:visible` — Framer Motion scroll-in animation.
// Example: <CTAFinal client:visible />
import { motion } from "motion/react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { WaveBackground } from "./fx/WaveBackground"
import { GlowOrbs } from "./fx/GlowOrbs"

export function CTAFinal() {
  return (
    <section id="empezar" className="section-ink relative scroll-mt-20 overflow-hidden py-20 sm:py-24 md:py-32">
      <WaveBackground color="#00c75b" opacity={0.18} />
      <GlowOrbs variant="strong" count={2} />
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center"
      >
        <h2
          className="font-serif font-bold text-[#e8e4dc]"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.15 }}
        >
          ¿Listo para transformar la operación de tu restaurante?
        </h2>
        <p className="mt-4 font-sans text-base sm:text-lg text-stone">
          Empieza hoy mismo tu prueba gratuita de 14 días. Sin tarjeta de crédito y sin contratos forzosos.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ShimmerButton
            href="https://wa.me/51999999999?text=Hola%2C%20quiero%20iniciar%20mi%20prueba%20gratuita%20de%2014%20d%C3%ADas%20de%20Maitre"
            target="_blank"
            rel="noopener noreferrer"
            shimmerColor="#ffffff"
            background="#00c75b"
            className="w-full sm:w-auto px-9 py-4 text-base sm:text-lg font-bold shadow-lg hover:shadow-primary/30"
          >
            Pedir demo gratuita por WhatsApp →
          </ShimmerButton>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-stone/80">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Configuración en 24h
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Cero comisiones
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Soporte 7 días
          </span>
        </div>
      </motion.div>
    </section>
  )
}
