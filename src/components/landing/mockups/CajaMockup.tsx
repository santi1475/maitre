// TODO: reemplazar con datos reales de la API
const RESUMEN = {
  ventas: "S/ 1,240.00",
  mesas: 18,
  ordenes: 27,
}

const ULTIMAS = [
  { mesa: 5, total: "S/ 142.50", hora: "20:14" },
  { mesa: 9, total: "S/ 86.00", hora: "20:08" },
  { mesa: 3, total: "S/ 234.00", hora: "19:52" },
]

import { useState } from "react"
import { CheckCircle2, RotateCcw } from "lucide-react"

export function CajaMockup() {
  const [closed, setClosed] = useState(false)

  return (
    <div className="flex h-full w-full flex-col justify-between gap-3 overflow-hidden p-3 sm:p-4 font-sans">
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-primary-light p-2 sm:p-2.5 dark:bg-primary/10 border border-primary/20">
          <div className="text-[9px] font-bold uppercase tracking-wider text-primary-text dark:text-primary">
            Ventas del día
          </div>
          <div className="mt-0.5 font-serif text-base sm:text-lg font-bold text-ink dark:text-[#e8e4dc]">
            {RESUMEN.ventas}
          </div>
        </div>
        <div className="rounded-xl bg-stone-light p-2 sm:p-2.5 dark:bg-white/5 border border-stone/10">
          <div className="text-[9px] font-bold uppercase tracking-wider text-stone">
            Mesas atendidas
          </div>
          <div className="mt-0.5 font-serif text-base sm:text-lg font-bold text-ink dark:text-[#e8e4dc]">
            {RESUMEN.mesas}
          </div>
        </div>
        <div className="rounded-xl bg-stone-light p-2 sm:p-2.5 dark:bg-white/5 border border-stone/10">
          <div className="text-[9px] font-bold uppercase tracking-wider text-stone">
            Órdenes cerradas
          </div>
          <div className="mt-0.5 font-serif text-base sm:text-lg font-bold text-ink dark:text-[#e8e4dc]">
            {RESUMEN.ordenes}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="mb-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-stone">
          <span>Últimas órdenes cobradas</span>
          <span className="font-normal lowercase text-stone/70">idempotencia activa</span>
        </div>
        <div className="flex flex-col gap-1.5 overflow-y-auto">
          {ULTIMAS.map((o) => (
            <div
              key={o.mesa}
              className="flex items-center justify-between rounded-lg border border-stone/15 bg-white/80 px-2.5 py-2 text-[11px] dark:bg-white/5"
            >
              <span className="font-bold text-ink dark:text-[#e8e4dc]">
                Mesa {o.mesa}
              </span>
              <span className="text-stone">{o.hora}</span>
              <span className="font-bold text-primary-text dark:text-primary">
                {o.total}
              </span>
            </div>
          ))}
        </div>
      </div>

      {closed ? (
        <div className="flex items-center justify-between rounded-xl bg-primary/15 border border-primary/30 p-2 sm:p-2.5 text-xs text-primary-text dark:text-primary animate-fade-in">
          <div className="flex items-center gap-1.5 font-bold">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
            <span>Turno cerrado en 4 min · Cuadre exacto</span>
          </div>
          <button
            type="button"
            onClick={() => setClosed(false)}
            className="flex items-center gap-1 text-[10px] underline hover:opacity-80 text-stone"
          >
            <RotateCcw className="h-3 w-3" /> Reiniciar
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setClosed(true)}
          className="rounded-xl bg-primary py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-primary-dark active:scale-98 cursor-pointer"
        >
          Simular cierre de caja (1 clic)
        </button>
      )}
    </div>
  )
}
