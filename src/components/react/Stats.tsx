import { NumberTicker } from "@/components/ui/number-ticker"
import { BlurFade } from "@/components/ui/blur-fade"

const STATS = [
  { value: 35, suffix: "%", label: "Más mesas atendidas", sub: "Sin contratar más mozos" },
  { value: 12, suffix: "min", label: "Menos por cierre", sub: "Caja cuadrada de toque" },
  { value: 0, suffix: "", label: "Comandas duplicadas", sub: "Doble-click sin error" },
  { value: 100, suffix: "%", label: "Cada cambio auditado", sub: "Sabés siempre qué pasó" },
]

export function Stats() {
  return (
    <section className="relative border-y bg-foreground text-background">
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {STATS.map((s, i) => (
            <BlurFade key={s.label} inView delay={0.05 + i * 0.08}>
              <div className="text-center">
                <p className="text-5xl font-semibold tracking-tight md:text-6xl">
                  <NumberTicker value={s.value} className="text-background" />
                  <span className="text-background/80">{s.suffix}</span>
                </p>
                <p className="mt-3 text-sm font-medium text-background/80">{s.label}</p>
                <p className="mt-1 text-xs text-background/50">{s.sub}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
