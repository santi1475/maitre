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

export function CajaMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-3 overflow-hidden p-4 font-sans">
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-primary-light p-2 dark:bg-primary/10">
          <div className="text-[9px] font-bold uppercase tracking-wide text-primary-text dark:text-primary">
            Ventas del día
          </div>
          <div className="mt-0.5 font-serif text-lg font-bold text-ink dark:text-[#e8e4dc]">
            {RESUMEN.ventas}
          </div>
        </div>
        <div className="rounded-lg bg-stone-light p-2 dark:bg-white/5">
          <div className="text-[9px] font-bold uppercase tracking-wide text-stone">
            Mesas atendidas
          </div>
          <div className="mt-0.5 font-serif text-lg font-bold text-ink dark:text-[#e8e4dc]">
            {RESUMEN.mesas}
          </div>
        </div>
        <div className="rounded-lg bg-stone-light p-2 dark:bg-white/5">
          <div className="text-[9px] font-bold uppercase tracking-wide text-stone">
            Órdenes cerradas
          </div>
          <div className="mt-0.5 font-serif text-lg font-bold text-ink dark:text-[#e8e4dc]">
            {RESUMEN.ordenes}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-stone">
          Últimas órdenes cerradas
        </div>
        <div className="flex flex-col gap-1">
          {ULTIMAS.map((o) => (
            <div
              key={o.mesa}
              className="flex items-center justify-between rounded-md border border-stone/15 bg-white/60 px-2 py-1.5 text-[11px] dark:bg-white/5"
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

      <button
        type="button"
        className="rounded-lg bg-primary py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary-dark"
      >
        Cerrar caja
      </button>
    </div>
  )
}
