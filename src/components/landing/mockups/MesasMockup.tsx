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

export function MesasMockup() {
  return (
    <div className="h-full w-full overflow-hidden p-4 font-sans">
      <div className="grid h-full grid-cols-4 grid-rows-3 gap-2">
        {MESAS.map((m) => {
          const s = STYLES[m.estado]
          return (
            <div
              key={m.n}
              className={`flex flex-col justify-between rounded-lg border p-2 ${s.bg}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]">
                  {m.n}
                </span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase ${s.badge}`}
                >
                  {s.label}
                </span>
              </div>
              {m.estado !== "libre" && (
                <div className="flex items-center gap-2 text-[10px] text-stone-dark dark:text-stone">
                  <span className="inline-flex items-center gap-0.5">
                    <Users className="h-2.5 w-2.5" />
                    {m.personas}
                  </span>
                  <span className="inline-flex items-center gap-0.5">
                    <Clock className="h-2.5 w-2.5" />
                    {m.tiempo}
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
