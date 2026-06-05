import { Marquee } from "@/components/ui/marquee"

const ITEMS = [
  "Sin papelitos",
  "Cero pedidos duplicados",
  "Caja cuadrada al cierre",
  "Mesas que nunca se cruzan",
  "Cocina sin gritar",
  "Precios al toque",
  "Auditoría de cada centavo",
  "Cuenta dividida fácil",
  "Para llevar sin caos",
  "Funciona en varias sucursales",
]

export function LogosMarquee() {
  return (
    <section className="relative border-y bg-card/50 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <Marquee pauseOnHover className="[--duration:40s]">
        {ITEMS.map((t) => (
          <div
            key={t}
            className="mx-2 flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-foreground/80"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            {t}
          </div>
        ))}
      </Marquee>
    </section>
  )
}
