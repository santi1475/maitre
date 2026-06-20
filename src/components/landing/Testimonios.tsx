// Import in Astro with `client:visible` — Marquee + pause-on-hover need hydration.
// Example: <Testimonios client:visible />
import { Marquee } from "@/components/ui/marquee"

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

// Offset each column's starting order so the 3D wall doesn't read as one repeated row.
const rotate = (arr: Testimonio[], n: number) => [...arr.slice(n), ...arr.slice(0, n)]

function Card({ t }: { t: Testimonio }) {
  return (
    <div className="flex w-[280px] flex-col justify-between rounded-2xl border border-stone/10 bg-white p-5 shadow-sm dark:bg-[#1e1c19]">
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

// Each column: a vertical marquee, alternating direction, with a rotated card order.
const COLUMNS = [
  { reverse: false, data: rotate(TESTIMONIOS, 0), show: "" },
  { reverse: true, data: rotate(TESTIMONIOS, 1), show: "" },
  { reverse: false, data: rotate(TESTIMONIOS, 2), show: "hidden md:flex" },
  { reverse: true, data: rotate(TESTIMONIOS, 1), show: "hidden lg:flex" },
]

export function Testimonios() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 dark:bg-[#111009]">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-4 text-center font-sans text-xs font-bold uppercase tracking-widest text-primary">
          Lo que dicen
        </div>
        <h2
          className="text-center font-serif font-bold text-ink dark:text-[#e8e4dc]"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
        >
          Restaurantes que ya dejaron el cuaderno
        </h2>
      </div>

      {/* 3D wall — pulled up under the heading; its blurred top hides rising cards */}
      <div className="relative -mt-40 flex h-[640px] w-full items-center justify-center [perspective:900px]">
        <div
          className="flex h-full flex-row gap-5"
          style={{
            transform:
              "translateY(0px) rotateX(11deg) rotateZ(-5deg) scale(1.2)",
          }}
        >
          {COLUMNS.map((col, i) => (
            <Marquee
              key={i}
              vertical
              pauseOnHover
              reverse={col.reverse}
              repeat={4}
              className={`h-full [--duration:80s] [--gap:1.25rem] ${col.show}`}
            >
              {col.data.map((t, j) => (
                <Card key={`${t.nombre}-${j}`} t={t} />
              ))}
            </Marquee>
          ))}
        </div>

        {/* Periphery blur: sharp center, strong blur on every edge. Vertical radius kept
            small so top/bottom reach full blur before the edge — no straight cut. */}
        <div
          className="pointer-events-none absolute -inset-y-24 inset-x-0 backdrop-blur-[18px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 78% 50% at 50% 50%, transparent 26%, black 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 50% at 50% 50%, transparent 26%, black 70%)",
          }}
        />
        {/* Theme-aware color fade so edge cards melt into the section bg */}
        <div className="pointer-events-none absolute -inset-y-24 inset-x-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_50%,transparent_32%,#faf9f7_78%)] dark:bg-[radial-gradient(ellipse_85%_55%_at_50%_50%,transparent_32%,#111009_78%)]" />
      </div>
    </section>
  )
}
