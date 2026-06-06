// Import in Astro with `client:visible` — Framer Motion scroll-in animation.
// Example: <CTAFinal client:visible />
import { motion } from "motion/react"
import { WaveBackground } from "./fx/WaveBackground"
import { GlowOrbs } from "./fx/GlowOrbs"

export function CTAFinal() {
  return (
    <section className="section-ink relative overflow-hidden py-24 md:py-36">
      <WaveBackground color="#00c75b" opacity={0.18} />
      <GlowOrbs variant="strong" count={2} />
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <h2
          className="font-serif font-bold text-[#e8e4dc]"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.1 }}
        >
          ¿Listo para olvidarte del caos?
        </h2>
        <p className="mt-4 font-sans text-lg text-stone">
          Empieza hoy. Sin tarjeta de crédito. Sin permanencia.
        </p>
        <a
          href="#empezar"
          className="mt-10 inline-block rounded-xl bg-primary px-10 py-4 font-sans text-lg font-bold text-white transition-colors hover:bg-primary-dark"
        >
          Empezar gratis →
        </a>
        <p className="mt-4 font-sans text-xs text-stone/60">
          O escríbenos por{" "}
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            WhatsApp
          </a>{" "}
          si tienes dudas
        </p>
      </motion.div>
    </section>
  )
}
