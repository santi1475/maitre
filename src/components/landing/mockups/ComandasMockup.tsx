import { useState } from "react"

type EstadoItem = "preparacion" | "listo" | "entregado"

type Comanda = {
  mesa: number
  tiempo: string
  items: { id: string; nombre: string; cant: number; estado: EstadoItem }[]
}

const INITIAL_COMANDAS: Comanda[] = [
  {
    mesa: 2,
    tiempo: "00:32",
    items: [
      { id: "c1-1", nombre: "Lomo saltado", cant: 1, estado: "preparacion" },
      { id: "c1-2", nombre: "Inca Kola 500ml", cant: 2, estado: "entregado" },
      { id: "c1-3", nombre: "Arroz chaufa", cant: 1, estado: "listo" },
    ],
  },
  {
    mesa: 6,
    tiempo: "00:18",
    items: [
      { id: "c2-1", nombre: "Ceviche mixto", cant: 2, estado: "preparacion" },
      { id: "c2-2", nombre: "Chicha morada", cant: 2, estado: "entregado" },
    ],
  },
  {
    mesa: 4,
    tiempo: "00:09",
    items: [
      { id: "c3-1", nombre: "Causa rellena", cant: 1, estado: "preparacion" },
      { id: "c3-2", nombre: "Tequeños (8u)", cant: 1, estado: "preparacion" },
    ],
  },
  {
    mesa: 8,
    tiempo: "00:24",
    items: [
      { id: "c4-1", nombre: "Ají de gallina", cant: 2, estado: "listo" },
      { id: "c4-2", nombre: "Pisco sour", cant: 1, estado: "entregado" },
    ],
  },
]

const NEXT_ESTADO: Record<EstadoItem, EstadoItem> = {
  preparacion: "listo",
  listo: "entregado",
  entregado: "preparacion",
}

const PILL: Record<EstadoItem, { cls: string; label: string }> = {
  preparacion: { cls: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20", label: "En preparación" },
  listo: { cls: "bg-primary/15 text-primary-text dark:text-primary border border-primary/20", label: "Listo para llevar" },
  entregado: { cls: "bg-stone/20 text-stone-dark dark:text-stone border border-stone/20", label: "Entregado" },
}

export function ComandasMockup() {
  const [comandas, setComandas] = useState<Comanda[]>(INITIAL_COMANDAS)

  const toggleItem = (mesaIndex: number, itemId: string) => {
    setComandas((prev) =>
      prev.map((c, i) => {
        if (i !== mesaIndex) return c
        return {
          ...c,
          items: c.items.map((it) =>
            it.id === itemId ? { ...it, estado: NEXT_ESTADO[it.estado] } : it
          ),
        }
      })
    )
  }

  const allItems = comandas.flatMap((c) => c.items)
  const enPrep = allItems.filter((it) => it.estado === "preparacion").length
  const listas = allItems.filter((it) => it.estado === "listo").length

  return (
    <div className="flex h-full w-full flex-col gap-3 overflow-y-auto p-3 sm:p-4 font-sans">
      {/* Interactive Helper Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone/15 pb-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-amber-400">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            {enPrep} en cocina
          </span>
          <span className="flex items-center gap-1 text-[11px] font-bold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {listas} por retirar
          </span>
        </div>
        <span className="text-[10px] text-stone">
          💡 Toca un plato para cambiar su estado
        </span>
      </div>

      {/* Comandas Grid */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {comandas.map((c, mIdx) => (
          <div
            key={c.mesa}
            className="rounded-xl border border-stone/15 bg-white/70 p-3 shadow-2xs dark:bg-white/5 transition-all"
          >
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="font-bold text-ink dark:text-[#e8e4dc]">
                Mesa {c.mesa}
              </span>
              <span className="font-mono text-[10px] text-stone font-semibold">
                ⏱ {c.tiempo}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {c.items.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => toggleItem(mIdx, it.id)}
                  className="flex items-center justify-between rounded-lg p-1.5 text-left text-xs transition-colors hover:bg-black/5 dark:hover:bg-white/5 active:scale-98"
                >
                  <span className="text-stone-dark dark:text-[#e8e4dc] truncate max-w-[140px] sm:max-w-[160px]">
                    <span className="font-bold text-ink dark:text-white mr-1">
                      {it.cant}×
                    </span>
                    {it.nombre}
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold tracking-tight uppercase transition-all ${PILL[it.estado].cls}`}
                  >
                    {PILL[it.estado].label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
