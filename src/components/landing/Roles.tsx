// Import in Astro with `client:visible` — uses Framer Motion scroll + hover animations.
// Example: <Roles client:visible />
import { motion, type Variants } from "motion/react"
import { ChefHat, ClipboardList, LayoutDashboard, Receipt } from "lucide-react"
import { GlowOrbs } from "./fx/GlowOrbs"

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const card: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Roles() {
  return (
    <section id="roles" className="relative scroll-mt-20 overflow-hidden bg-cream py-20 dark:bg-[#111009] md:py-32">
      <GlowOrbs variant="soft" count={2} />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink dark:text-[#e8e4dc] md:text-5xl">
          Diseñado para cada integrante del equipo
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-base sm:text-lg text-stone">
          Cada rol ve exclusivamente lo que necesita para operar a máxima velocidad.
        </p>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 text-left"
        >
          {/* Dueño: Card ancha (col-span-2) */}
          <motion.div
            variants={card}
            whileHover={{ y: -3 }}
            className="md:col-span-2 rounded-2xl border border-stone/15 bg-white p-7 sm:p-8 shadow-xs transition-all hover:border-primary/50 dark:bg-[#1e1c19] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <LayoutDashboard size={26} />
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary">
                  Control total
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]">
                Dueño & Administrador
              </h3>
              <p className="mt-1 font-sans text-sm text-stone">
                Visibilidad en tiempo real sin necesidad de estar físicamente en el local.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm text-stone/90 dark:text-[#c4bfb7]">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Ventas y métricas consolidadas en vivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Detección de mesas lentas antes de reclamos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Auditoría de descuentos y anulaciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Multi-sucursal desde una sola cuenta</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone/10 flex items-center justify-between text-xs text-stone">
              <span className="font-semibold text-ink dark:text-[#e8e4dc]">Acceso remoto seguro</span>
              <span>100% en la nube</span>
            </div>
          </motion.div>

          {/* Mozo */}
          <motion.div
            variants={card}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-stone/15 bg-white p-7 sm:p-8 shadow-xs transition-all hover:border-primary/50 dark:bg-[#1e1c19] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <ClipboardList size={26} />
                </div>
                <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[11px] font-bold text-amber-700 dark:text-amber-400">
                  Cero viajes
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]">
                Mozos y Salón
              </h3>
              <p className="mt-1 font-sans text-sm text-stone">
                Desde cualquier smartphone económico.
              </p>
              <ul className="mt-6 flex flex-col gap-3 font-sans text-sm text-stone/90 dark:text-[#c4bfb7]">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Toma de pedidos en la mesa en segundos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Aviso sonoro/vibración cuando el plato está listo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>División de cuentas y precuentas al instante</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Cocina */}
          <motion.div
            variants={card}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-stone/15 bg-white p-7 sm:p-8 shadow-xs transition-all hover:border-primary/50 dark:bg-[#1e1c19] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ChefHat size={26} />
                </div>
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                  KDS Digital
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]">
                Cocina & Barra
              </h3>
              <p className="mt-1 font-sans text-sm text-stone">
                Comandas ordenadas por tiempo y prioridad.
              </p>
              <ul className="mt-6 flex flex-col gap-3 font-sans text-sm text-stone/90 dark:text-[#c4bfb7]">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sin papeles manchados ni gritos al salón</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Tiempos de cocción controlados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>1 toque para marcar plato preparado</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Caja (col-span-2) */}
          <motion.div
            variants={card}
            whileHover={{ y: -3 }}
            className="md:col-span-2 rounded-2xl border border-stone/15 bg-white p-7 sm:p-8 shadow-xs transition-all hover:border-primary/50 dark:bg-[#1e1c19] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Receipt size={26} />
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  Cierres en 8 min
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#e8e4dc]">
                Caja & Facturación
              </h3>
              <p className="mt-1 font-sans text-sm text-stone">
                Cálculos automáticos con idempotencia: cero descuadres al final del turno.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm text-stone/90 dark:text-[#c4bfb7]">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Cierre de caja con un solo clic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Medios de pago divididos (Yape, Plin, tarjetas, efectivo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Integración de boletas y facturas electrónicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Registro inmutable de auditoría para seguridad</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
