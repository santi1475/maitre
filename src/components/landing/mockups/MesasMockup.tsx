// TODO: reemplazar con datos reales de la API
import { Clock, Users } from "lucide-react"

type Estado = "libre" | "ocupada" | "cuenta"

type Mesa = {
  n: number
  estado: Estado
  personas?: number
  tiempo?: string
}

const MESAS: Mesa[] = [
  { n: 1, estado: "libre" },
  { n: 2, estado: "ocupada", personas: 3, tiempo: "00:32" },
  { n: 3, estado: "cuenta", personas: 4, tiempo: "01:15" },
  { n: 4, estado: "ocupada", personas: 2, tiempo: "00:18" },
  { n: 5, estado: "libre" },
  { n: 6, estado: "ocupada", personas: 5, tiempo: "00:47" },
  { n: 7, estado: "cuenta", personas: 2, tiempo: "00:58" },
  { n: 8, estado: "ocupada", personas: 4, tiempo: "00:22" },
  { n: 9, estado: "libre" },
  { n: 10, estado: "libre" },
  { n: 11, estado: "libre" },
  { n: 12, estado: "libre" },
]

const STYLES: Record<Estado, { bg: string; badge: string; label: string }> = {
  libre: {
    bg: "bg-primary-light dark:bg-primary/10 border-primary/30",
    badge: "bg-primary text-white",
    label: "Libre",
  },
  ocupada: {
    bg: "bg-amber-50 dark:bg-amber-500/10 border-amber-300/50",
    badge: "bg-amber-500 text-white",
    label: "Ocupada",
  },
  cuenta: {
    bg: "bg-red-50 dark:bg-red-500/10 border-red-300/50",
    badge: "bg-red-500 text-white",
    label: "Cuenta",
  },
}

import { useState } from "react"

export function MesasMockup() {
  const [mesas, setMesas] = useState<Mesa[]>(MESAS)
  const [selectedMesa, setSelectedMesa] = useState<number | null>(null)

  function toggleMesa(n: number) {
    setSelectedMesa(n)
    setMesas((prev) =>
      prev.map((m) => {
        if (m.n !== n) return m
        if (m.estado === "libre") return { ...m, estado: "ocupada", personas: 2, tiempo: "00:01" }
        if (m.estado === "ocupada") return { ...m, estado: "cuenta" }
        return { ...m, estado: "libre", personas: undefined, tiempo: undefined }
      })
    )
  }

  const libres = mesas.filter((m) => m.estado === "libre").length
  const ocupadas = mesas.filter((m) => m.estado === "ocupada").length
  const cuentas = mesas.filter((m) => m.estado === "cuenta").length

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden p-3 sm:p-4 font-sans">
      {/* Quick live status bar */}
      <div className="mb-2.5 flex items-center justify-between text-xs font-medium text-stone">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> {libres} Libres</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500" /> {ocupadas} Ocupadas</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-red-500" /> {cuentas} Cuenta</span>
        </div>
        <span className="hidden sm:inline text-[11px] text-stone/70 italic">Toca una mesa para interactuar</span>
      </div>

      <div className="grid flex-1 grid-cols-3 sm:grid-cols-4 gap-2 overflow-y-auto pr-0.5">
        {mesas.map((m) => {
          const s = STYLES[m.estado]
          const isCurrent = selectedMesa === m.n
          return (
            <button
              key={m.n}
              type="button"
              onClick={() => toggleMesa(m.n)}
              className={`flex flex-col justify-between rounded-xl border p-2 text-left transition-all duration-150 active:scale-95 cursor-pointer hover:shadow-xs ${s.bg} ${isCurrent ? "ring-2 ring-primary" : ""}`}
            >
              <div className="flex items-start justify-between w-full">
                <span className="font-serif text-lg sm:text-2xl font-bold text-ink dark:text-[#e8e4dc]">
                  {m.n}
                </span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider ${s.badge}`}
                >
                  {s.label}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-stone-dark dark:text-stone min-h-[14px]">
                {m.estado !== "libre" ? (
                  <>
                    <span className="inline-flex items-center gap-0.5">
                      <Users className="h-2.5 w-2.5" />
                      {m.personas}p
                    </span>
                    <span className="inline-flex items-center gap-0.5">
                      <Clock className="h-2.5 w-2.5" />
                      {m.tiempo}
                    </span>
                  </>
                ) : (
                  <span className="text-stone/60">Disponible</span>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
