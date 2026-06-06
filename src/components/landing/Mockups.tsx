// Import in Astro with `client:visible` — uses React state + Framer Motion.
// Example: <Mockups client:visible />
import { useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { MesasMockup } from "./mockups/MesasMockup"
import { ComandasMockup } from "./mockups/ComandasMockup"
import { CocinaMockup } from "./mockups/CocinaMockup"
import { CajaMockup } from "./mockups/CajaMockup"
import { GlowOrbs } from "./fx/GlowOrbs"

type TabId = "mesas" | "comandas" | "cocina" | "caja"

const TABS: { id: TabId; label: string; title: string }[] = [
  { id: "mesas", label: "Mesas", title: "Salón · Plano de mesas" },
  { id: "comandas", label: "Comandas", title: "Comandas en curso" },
  { id: "cocina", label: "Cocina", title: "Cocina · KDS" },
  { id: "caja", label: "Caja", title: "Caja · Cierre de turno" },
]

const VIEWS: Record<TabId, () => React.ReactElement> = {
  mesas: MesasMockup,
  comandas: ComandasMockup,
  cocina: CocinaMockup,
  caja: CajaMockup,
}

export function Mockups() {
  const [active, setActive] = useState<TabId>("mesas")
  const prevIndex = useRef(0)

  const activeIdx = TABS.findIndex((t) => t.id === active)
  const direction = activeIdx > prevIndex.current ? 1 : -1
  const activeTab = TABS[activeIdx]
  const ActiveView = VIEWS[active]

  function handleClick(id: TabId, idx: number) {
    prevIndex.current = activeIdx
    setActive(id)
    void idx
  }

  return (
    <section className="relative overflow-hidden bg-cream py-24 dark:bg-[#111009] md:py-36">
      <GlowOrbs variant="soft" count={2} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          El sistema
        </div>
        <h2 className="font-serif text-4xl font-bold text-ink dark:text-[#e8e4dc] md:text-5xl">
          Todo el restaurante en una pantalla
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-stone">
          Desde que el cliente se sienta hasta que paga. Todo conectado.
        </p>

        <div
          role="tablist"
          aria-label="Vistas del sistema"
          className="mx-auto mt-10 flex max-w-full items-center gap-2 overflow-x-auto rounded-xl bg-stone-light p-1.5 dark:bg-white/5 md:inline-flex md:justify-center md:overflow-visible"
        >
          {TABS.map((t, i) => {
            const isActive = t.id === active
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`mockup-panel-${t.id}`}
                id={`mockup-tab-${t.id}`}
                onClick={() => handleClick(t.id, i)}
                className={
                  isActive
                    ? "shrink-0 rounded-lg bg-primary px-4 py-2 font-sans text-sm font-bold text-white transition-colors"
                    : "shrink-0 rounded-lg px-4 py-2 font-sans text-sm font-medium text-stone transition-colors hover:text-ink dark:hover:text-[#e8e4dc]"
                }
              >
                {t.label}
              </button>
            )
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border-2 border-stone/20 bg-[#f0ede8] dark:bg-[#1e1c19]">
            <div className="flex h-8 items-center px-4 bg-ink/10 dark:bg-white/5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              </div>
              <div className="flex-1 text-center font-sans text-[11px] font-medium text-stone-dark dark:text-stone">
                {activeTab.title}
              </div>
              <div className="w-12" />
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={active}
                  role="tabpanel"
                  id={`mockup-panel-${active}`}
                  aria-labelledby={`mockup-tab-${active}`}
                  custom={direction}
                  initial={{ x: direction * 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -direction * 40, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <ActiveView />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
