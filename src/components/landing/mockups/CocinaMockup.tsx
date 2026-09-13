// TODO: reemplazar con datos reales de la API
type Col = "pendiente" | "preparando" | "listo"

type Card = { plato: string; mesa: number; tiempo: string }

const KANBAN: Record<Col, Card[]> = {
  pendiente: [
    { plato: "Lomo saltado x2", mesa: 2, tiempo: "00:01" },
    { plato: "Tequeños (8u) x1", mesa: 4, tiempo: "00:03" },
  ],
  preparando: [
    { plato: "Ceviche mixto x1", mesa: 6, tiempo: "00:06" },
    { plato: "Causa rellena x3", mesa: 4, tiempo: "00:04" },
    { plato: "Ají de gallina x2", mesa: 8, tiempo: "00:11" },
  ],
  listo: [
    { plato: "Arroz chaufa x1", mesa: 2, tiempo: "00:00" },
    { plato: "Pollo a la brasa x1", mesa: 7, tiempo: "00:02" },
  ],
}

const COLS: { id: Col; label: string; header: string; card: string }[] = [
  {
    id: "pendiente",
    label: "Pendiente",
    header: "bg-stone/20 text-stone-dark dark:text-[#e8e4dc]",
    card: "bg-white/70 dark:bg-white/5 border-stone/15",
  },
  {
    id: "preparando",
    label: "Preparando",
    header: "bg-amber-500/20 text-amber-800 dark:text-amber-300",
    card: "bg-amber-50 dark:bg-amber-500/10 border-amber-300/40",
  },
  {
    id: "listo",
    label: "Listo",
    header: "bg-primary/20 text-primary-text dark:text-primary",
    card: "bg-primary-light dark:bg-primary/10 border-primary/30",
  },
]

import { useState } from "react"

export function CocinaMockup() {
  const [kanban, setKanban] = useState<Record<Col, Card[]>>(KANBAN)

  function advanceCard(currentCol: Col, index: number) {
    const card = kanban[currentCol][index]
    if (!card) return

    setKanban((prev) => {
      const next = {
        pendiente: [...prev.pendiente],
        preparando: [...prev.preparando],
        listo: [...prev.listo],
      }
      next[currentCol].splice(index, 1)

      if (currentCol === "pendiente") {
        next.preparando.unshift({ ...card, tiempo: "00:01" })
      } else if (currentCol === "preparando") {
        next.listo.unshift({ ...card, tiempo: "00:00" })
      } else {
        // Recycle back to pendiente for continuous demonstration
        next.pendiente.push({ ...card, tiempo: "00:01" })
      }
      return next
    })
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden p-3 sm:p-4 font-sans">
      <div className="mb-2 flex items-center justify-between text-xs text-stone">
        <span className="font-semibold text-ink dark:text-[#e8e4dc]">KDS Cocina en Tiempo Real</span>
        <span className="text-[11px] text-stone/70 italic">Toca un plato para avanzar</span>
      </div>

      <div className="grid flex-1 grid-cols-3 gap-2 overflow-y-auto">
        {COLS.map((col) => (
          <div key={col.id} className="flex flex-col gap-1.5">
            <div
              className={`rounded-md px-2 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${col.header}`}
            >
              {col.label} · {kanban[col.id].length}
            </div>
            <div className="flex flex-col gap-1.5 overflow-y-auto">
              {kanban[col.id].map((c, i) => (
                <button
                  key={`${c.plato}-${i}`}
                  type="button"
                  onClick={() => advanceCard(col.id, i)}
                  title="Haz clic para avanzar de estado"
                  className={`rounded-lg border p-1.5 sm:p-2 text-left transition-all duration-150 active:scale-95 cursor-pointer hover:shadow-xs ${col.card}`}
                >
                  <div className="text-[10px] sm:text-[11px] font-bold text-ink dark:text-[#e8e4dc] leading-tight">
                    {c.plato}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[8px] sm:text-[9px] text-stone">
                    <span className="font-semibold">Mesa {c.mesa}</span>
                    <span>{c.tiempo}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
