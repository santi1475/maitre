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

export function CocinaMockup() {
  return (
    <div className="grid h-full w-full grid-cols-3 gap-2 overflow-hidden p-4 font-sans">
      {COLS.map((col) => (
        <div key={col.id} className="flex flex-col gap-1.5">
          <div
            className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${col.header}`}
          >
            {col.label} · {KANBAN[col.id].length}
          </div>
          {KANBAN[col.id].map((c, i) => (
            <div
              key={i}
              className={`rounded-md border p-1.5 ${col.card}`}
            >
              <div className="text-[10px] font-bold text-ink dark:text-[#e8e4dc]">
                {c.plato}
              </div>
              <div className="mt-0.5 flex justify-between text-[9px] text-stone">
                <span>Mesa {c.mesa}</span>
                <span>{c.tiempo}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
