import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { ArrowRight, Sparkles, ChefHat, Users, Receipt, Bell, Star } from "lucide-react"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { BorderBeam } from "@/components/ui/border-beam"
import { cn } from "@/lib/utils"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-28 pb-32">
      <AnimatedGridPattern
        numSquares={36}
        maxOpacity={0.08}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[180%] skew-y-12"
        )}
      />
      <div className="absolute -top-40 left-1/2 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-orange-200/40 to-transparent blur-3xl dark:from-primary/30 dark:via-orange-500/10" />

      <motion.div style={{ y, opacity }} className="container mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="mx-auto mb-6 inline-flex"
        >
          <AnimatedGradientText className="border border-border/60 bg-card/60 px-4 py-1.5 backdrop-blur">
            <Sparkles className="size-3.5" />
            <span className="ml-2 text-xs font-medium tracking-tight">Hecho para restaurantes que viven a tope</span>
          </AnimatedGradientText>
        </motion.div>

        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {"Más mesas atendidas.".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.05, ease: [0.2, 0, 0, 1] }}
              className="inline-block pr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.2, 0, 0, 1] }}
            className="inline-block bg-gradient-to-br from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent"
          >
            Cero platos perdidos.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Maitre conecta sala, cocina y caja en una sola pantalla.
          Tus mozos toman pedidos sin papelitos, la cocina nunca recibe una comanda dos veces,
          y tu caja cierra cuadrada todos los días.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <ShimmerButton
            shimmerColor="#ffffff"
            background="oklch(0.66 0.18 45)"
            className="px-6 py-3 text-sm font-medium"
          >
            <span className="flex items-center gap-2 text-primary-foreground">
              Pedir demo gratis
              <ArrowRight className="size-4" />
            </span>
          </ShimmerButton>
          <a
            href="#beneficios"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-card"
          >
            Ver qué hace por mi local
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <span className="flex">
              {[0,1,2,3,4].map(i => <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />)}
            </span>
            Usado por restaurantes en Perú
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span>Sin permanencia · Instalación en 24h</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.1, ease: [0.2, 0, 0, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl border bg-card shadow-2xl shadow-black/5">
            <BorderBeam size={250} duration={9} delay={2} colorFrom="oklch(0.66 0.18 45)" colorTo="#fbbf24" />
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
              <HeroTile icon={Users} label="Mesa 12 · ocupada" sub="Pedido S/ 86" delay={1.3} />
              <HeroTile icon={ChefHat} label="Nuevo en cocina" sub="2 lomos saltados" delay={1.45} highlight />
              <HeroTile icon={Bell} label="Plato listo" sub="Mesa 7 servida" delay={1.6} />
              <HeroTile icon={Receipt} label="Cierre · S/ 248.50" sub="Yape confirmado" delay={1.75} />
            </div>
            <div className="border-t bg-gradient-to-b from-muted/30 to-transparent p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Todo se actualiza solo. Sin recargar. Sin esperar.
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function HeroTile({
  icon: Icon,
  label,
  sub,
  delay,
  highlight,
}: {
  icon: any
  label: string
  sub: string
  delay: number
  highlight?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "flex flex-col gap-2 p-5 text-left transition",
        highlight ? "bg-primary/[0.06]" : "bg-card"
      )}
    >
      <div className={cn("flex size-9 items-center justify-center rounded-lg", highlight ? "bg-primary/15 text-primary" : "bg-muted text-foreground/70")}>
        <Icon className="size-4" />
      </div>
      <p className="text-sm font-medium tracking-tight">{label}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </motion.div>
  )
}
