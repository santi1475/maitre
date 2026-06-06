// Import in Astro with `client:visible` — Marquee + pause-on-hover need hydration.
// Example: <Testimonios client:visible />
import { Marquee } from "@/components/ui/marquee"
import { GlowOrbs } from "./fx/GlowOrbs"

type Testimonio = {
  quote: string
  nombre: string
  local: string
  iniciales: string
}

const TESTIMONIOS: Testimonio[] = [
  {
    quote:
      "Antes perdíamos comandas todas las noches. Ahora la cocina y el salón van sincronizados. El cierre que nos tomaba una hora lo hacemos en ocho minutos.",
    nombre: "Carlos Mendoza",
    local: "Cevichería El Remo · Lima, Perú",
    iniciales: "CM",
  },
  {
    quote:
      "Mis mozos dejaron de ir y venir a la cocina. Toman el pedido en la mesa y aparece al toque en la pantalla. Las propinas subieron porque atienden más mesas.",
    nombre: "Ana Quispe",
    local: "Pollos & Parrillas Doña Ana · Arequipa, Perú",
    iniciales: "AQ",
  },
  {
    quote:
      "Soy el dueño y antes tenía que estar físicamente para saber cómo iban las ventas. Ahora lo veo desde el celular aunque esté en casa.",
    nombre: "Roberto Flores",
    local: "Restaurante El Rincón Norteño · Trujillo, Perú",
    iniciales: "RF",
  },
]

function Card({ t }: { t: Testimonio }) {
  return (
    <div className="flex min-w-[300px] max-w-[340px] flex-col justify-between rounded-2xl border border-stone/10 bg-white p-6 dark:bg-[#1e1c19]">
      <div>
        <div
          className="mb-2 font-serif text-4xl leading-none text-primary"
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <p className="font-sans text-sm italic leading-relaxed text-ink dark:text-[#e8e4dc]">
          {t.quote}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-stone/10 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
          {t.iniciales}
        </div>
        <div className="flex flex-col">
          <span className="font-sans text-sm font-bold text-ink dark:text-[#e8e4dc]">
            {t.nombre}
          </span>
          <span className="font-sans text-xs text-stone/80">{t.local}</span>
        </div>
      </div>
    </div>
  )
}

export function Testimonios() {
  return (
    <section className="relative overflow-hidden bg-primary-light/30 py-24 dark:bg-primary/5">
      <GlowOrbs variant="soft" count={2} />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-4 text-center font-sans text-xs font-bold uppercase tracking-widest text-primary">
          Lo que dicen
        </div>
        <h2
          className="mb-16 text-center font-serif font-bold text-ink dark:text-[#e8e4dc]"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
        >
          Restaurantes que ya dejaron el cuaderno
        </h2>
      </div>

      <Marquee pauseOnHover className="[--duration:60s] [--gap:1.5rem]" repeat={4}>
        {TESTIMONIOS.map((t) => (
          <Card key={t.nombre} t={t} />
        ))}
      </Marquee>
    </section>
  )
}
