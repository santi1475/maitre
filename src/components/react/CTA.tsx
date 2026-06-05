import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { DotPattern } from "@/components/ui/dot-pattern"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

export function CTA() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <BlurFade inView delay={0.05}>
          <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-card via-card to-orange-50/40 p-12 text-center shadow-xl shadow-black/[0.04] md:p-20">
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]",
                "fill-foreground/20"
              )}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
              className="relative"
            >
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                ¿Listo para que tu sala deje de improvisar?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground">
                Mostranos tu restaurante en 20 minutos. Te armamos una demo con tus mesas, tu carta y
                tus reglas de precio.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ShimmerButton
                  shimmerColor="#ffffff"
                  background="oklch(0.66 0.18 45)"
                  className="px-7 py-3.5 text-sm font-medium"
                >
                  <span className="flex items-center gap-2 text-primary-foreground">
                    Solicitar demo
                    <ArrowRight className="size-4" />
                  </span>
                </ShimmerButton>
                <a
                  href="mailto:ventas@gventerprise.com"
                  className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                >
                  o escribinos a ventas@gventerprise.com
                </a>
              </div>
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
