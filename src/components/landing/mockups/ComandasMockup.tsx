// TODO: reemplazar con datos reales de la API
type EstadoItem = "preparacion" | "listo" | "entregado"

type Comanda = {
  mesa: number
  tiempo: string
  items: { nombre: string; cant: number; estado: EstadoItem }[]
}

const COMANDAS: Comanda[] = [
  {
    mesa: 2,
    tiempo: "00:32",
    items: [
      { nombre: "Lomo saltado", cant: 1, estado: "preparacion" },
      { nombre: "Inca Kola 500ml", cant: 2, estado: "entregado" },
      { nombre: "Arroz chaufa", cant: 1, estado: "listo" },
    ],
  },
  {
    mesa: 6,
    tiempo: "00:18",
    items: [
      { nombre: "Ceviche mixto", cant: 2, estado: "preparacion" },
      { nombre: "Chicha morada", cant: 2, estado: "entregado" },
    ],
  },
  {
    mesa: 4,
    tiempo: "00:09",
    items: [
      { nombre: "Causa rellena", cant: 1, estado: "preparacion" },
      { nombre: "Tequeños (8u)", cant: 1, estado: "preparacion" },
    ],
  },
  {
    mesa: 8,
    tiempo: "00:24",
    items: [
      { nombre: "Ají de gallina", cant: 2, estado: "listo" },
      { nombre: "Pisco sour", cant: 1, estado: "entregado" },
    ],
  },
]

const PILL: Record<EstadoItem, { cls: string; label: string }> = {
  preparacion: { cls: "bg-amber-500/15 text-amber-700 dark:text-amber-400", label: "En preparación" },
  listo: { cls: "bg-primary/15 text-primary-text dark:text-primary", label: "Listo" },
  entregado: { cls: "bg-stone/20 text-stone-dark dark:text-stone", label: "Entregado" },
}

export function ComandasMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-2 overflow-hidden p-4 font-sans">
      {COMANDAS.map((c) => (
        <div
          key={c.mesa}
          className="rounded-lg border border-stone/15 bg-white/60 p-2.5 dark:bg-white/5"
        >
          <div className="mb-1.5 flex items-center justify-between text-[11px]">
            <span className="font-bold text-ink dark:text-[#e8e4dc]">
              Mesa {c.mesa}
            </span>
            <span className="text-stone">{c.tiempo}</span>
          </div>
          <div className="flex flex-col gap-1">
            {c.items.map((it, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-[10px]"
              >
                <span className="text-stone-dark dark:text-[#e8e4dc]">
                  <span className="font-bold">{it.cant}×</span> {it.nombre}
                </span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase ${PILL[it.estado].cls}`}
                >
                  {PILL[it.estado].label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
