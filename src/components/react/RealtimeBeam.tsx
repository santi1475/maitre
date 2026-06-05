import { forwardRef, useRef } from "react"
import { ChefHat, Users, Receipt, Sparkles, Bell } from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

const Node = forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode; label: string }>(
  ({ className, children, label }, ref) => (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-14 items-center justify-center rounded-2xl border bg-card shadow-md shadow-black/[0.04]",
          className
        )}
      >
        {children}
      </div>
      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  )
)
Node.displayName = "Node"

export function RealtimeBeam() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mozoRef = useRef<HTMLDivElement>(null)
  const cocinaRef = useRef<HTMLDivElement>(null)
  const adminRef = useRef<HTMLDivElement>(null)
  const cajaRef = useRef<HTMLDivElement>(null)
  const dbRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <BlurFade inView delay={0.05}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Todos sincronizados
          </p>
        </BlurFade>
        <BlurFade inView delay={0.15}>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Un cambio en un lugar, todas las pantallas al toque.
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.25}>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-base text-muted-foreground">
            La cocina entra cuando ingresa un pedido. El encargado lo ve sin moverse de la barra.
            La caja sabe cuánto cobrar antes de que el mozo llegue.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.35}>
          <div
            ref={containerRef}
            className="relative mx-auto mt-16 grid h-[26rem] max-w-3xl grid-cols-3 items-center overflow-hidden rounded-3xl border bg-card/40 p-10"
          >
            <div className="absolute inset-0 grain opacity-60" />
            <div className="relative z-10 flex flex-col items-center gap-12">
              <Node ref={mozoRef} label="Mozo">
                <Users className="size-6 text-primary" />
              </Node>
              <Node ref={cocinaRef} label="Cocina">
                <ChefHat className="size-6 text-amber-500" />
              </Node>
            </div>
            <div className="relative z-10 flex items-center justify-center">
              <Node ref={dbRef} className="size-20 rounded-3xl" label="Maitre">
                <Sparkles className="size-7 text-foreground" />
              </Node>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-12">
              <Node ref={adminRef} label="Encargado">
                <Bell className="size-6 text-blue-500" />
              </Node>
              <Node ref={cajaRef} label="Caja">
                <Receipt className="size-6 text-emerald-500" />
              </Node>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={mozoRef} toRef={dbRef} curvature={-50} />
            <AnimatedBeam containerRef={containerRef} fromRef={cocinaRef} toRef={dbRef} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={dbRef} toRef={adminRef} curvature={-50} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={dbRef} toRef={cajaRef} curvature={50} reverse />
          </div>
        </BlurFade>

        <BlurFade inView delay={0.5}>
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            {["Sin recargar", "Sin esperar", "Sin papelitos", "Sin gritos"].map((t) => (
              <span key={t} className="rounded-full border bg-background px-3 py-1">
                {t}
              </span>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
