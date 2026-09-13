// Import in Astro with `client:visible` — uses Framer Motion scroll animations + Magic UI AnimatedBeam.
// Example: <Flujo client:visible />
import { useRef } from "react"
import { ChefHat, Receipt, Smartphone, Server, Zap } from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { BlurFade } from "@/components/ui/blur-fade"

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
    desc: "Desde cualquier celular o tablet. El pedido llega al instante sin intermediarios.",
  },
  {
    n: 2,
    icon: ChefHat,
    title: "Cocina lo recibe al toque",
    desc: "Sin gritos ni papeles. La comanda aparece en pantalla KDS ordenada por prioridad.",
  },
  {
    n: 3,
    icon: Receipt,
    title: "Caja cierra sola",
    desc: "El resumen del turno se genera automático. Cuadra en minutos sin diferencias.",
  },
]

export function Flujo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mozoRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const cocinaRef = useRef<HTMLDivElement>(null)
  const cajaRef = useRef<HTMLDivElement>(null)

  return (
    <section id="flujo" className="section-ink py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <BlurFade delay={0.05} inView>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 mb-4 text-xs font-semibold text-primary">
            <Zap className="h-3.5 w-3.5" />
            <span>Sincronización en tiempo real</span>
          </div>
          <h2
            className="font-serif font-bold text-[#e8e4dc]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            De la mesa a la caja, sin fricción
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-stone max-w-xl mx-auto">
            Tres estaciones interconectadas. Cero papeles, cero demoras, cero comandas perdidas.
          </p>
        </BlurFade>

        {/* Canvas interactivo con Magic UI AnimatedBeam */}
        <BlurFade delay={0.12} inView>
          <div
            ref={containerRef}
            className="relative mx-auto mt-10 sm:mt-14 flex h-60 sm:h-72 w-full max-w-2xl items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#161513]/90 px-4 py-6 sm:p-8 shadow-2xl backdrop-blur-md"
          >
            {/* Animated Beams */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={mozoRef}
              toRef={hubRef}
              duration={2.8}
              pathColor="rgba(255, 255, 255, 0.08)"
              gradientStartColor="#00c75b"
              gradientStopColor="#6ee7b7"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={hubRef}
              toRef={cocinaRef}
              duration={2.8}
              delay={0.8}
              curvature={-18}
              pathColor="rgba(255, 255, 255, 0.08)"
              gradientStartColor="#00c75b"
              gradientStopColor="#f59e0b"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={hubRef}
              toRef={cajaRef}
              duration={2.8}
              delay={1.4}
              curvature={18}
              pathColor="rgba(255, 255, 255, 0.08)"
              gradientStartColor="#00c75b"
              gradientStopColor="#10b981"
            />

            {/* Estación 1: Mozo */}
            <div className="flex flex-col items-center gap-1.5 z-10 select-none">
              <div
                ref={mozoRef}
                className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/15 bg-[#24221f] text-primary shadow-lg transition-transform hover:scale-105"
              >
                <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <span className="font-sans text-xs sm:text-sm font-bold text-[#e8e4dc]">Mozo</span>
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                Mesa 4
              </span>
            </div>

            {/* Núcleo: Maitre Sync Hub */}
            <div className="flex flex-col items-center gap-1.5 z-10 select-none">
              <div
                ref={hubRef}
                className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-3xl border-2 border-primary/50 bg-[#1f1d19] text-white shadow-xl shadow-primary/10 transition-transform hover:scale-105"
              >
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </span>
                <Server className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <span className="font-sans text-xs sm:text-sm font-bold text-[#e8e4dc]">Maitre Hub</span>
              <span className="font-mono text-[10px] text-emerald-400 font-semibold">{"< 50ms"}</span>
            </div>

            {/* Estaciones de salida: Cocina KDS y Caja */}
            <div className="flex flex-col justify-center gap-5 sm:gap-6 z-10 select-none">
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  ref={cocinaRef}
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#24221f] text-amber-400 shadow-lg"
                >
                  <ChefHat className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-left hidden sm:block">
                  <div className="font-sans text-xs sm:text-sm font-bold text-[#e8e4dc]">Cocina KDS</div>
                  <div className="text-[10px] text-amber-400 font-medium">Marchando</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  ref={cajaRef}
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#24221f] text-emerald-400 shadow-lg"
                >
                  <Receipt className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-left hidden sm:block">
                  <div className="font-sans text-xs sm:text-sm font-bold text-[#e8e4dc]">Caja & POS</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Precuenta lista</div>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Grid de 3 pasos con BlurFade */}
        <div className="relative mx-auto mt-12 sm:mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 text-center">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <BlurFade key={s.n} delay={0.15 + i * 0.1} inView className="h-full">
                <div className="relative z-10 h-full rounded-2xl border border-white/10 bg-[#1e1c19] p-7 sm:p-8 text-center transition-all duration-200 hover:border-primary/40 hover:-translate-y-1 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="font-serif text-5xl font-bold tracking-tight text-primary/80">
                      0{s.n}
                    </div>
                    <div className="mx-auto mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-bold text-[#e8e4dc]">
                      {s.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-stone/80">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
