import { motion } from "motion/react"
import {
  Zap,
  Receipt,
  ShieldCheck,
  Smile,
  UserCheck,
  Split,
  Tag,
  Building2,
  ShoppingBag,
  Calendar,
} from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

const FEATURES = [
  {
    icon: Zap,
    title: "Lo que pasa en sala llega al toque a cocina",
    desc: "El mozo toca el pedido y la cocina lo ve al instante. Sin gritos, sin pedir dos veces lo mismo, sin enfriar la comida.",
    span: "md:col-span-2",
    accent: "from-orange-200/40",
  },
  {
    icon: Split,
    title: "Cuenta dividida sin discusiones",
    desc: "Una sola mesa con dos o tres cuentas separadas. Cada grupo paga lo suyo, sin recalcular en una servilleta.",
  },
  {
    icon: Tag,
    title: "Precios distintos según el momento",
    desc: "Salón, para llevar, evento de fin de semana. Cambiás un valor y se aplica al instante en todas las cartas.",
  },
  {
    icon: Receipt,
    title: "La caja cierra cuadrada todos los días",
    desc: "Cada plato que entra, sale o se elimina queda registrado. Al cerrar caja no hay sorpresas ni 'no sé en qué se fue'.",
    span: "md:col-span-2",
    accent: "from-emerald-200/30",
  },
  {
    icon: UserCheck,
    title: "Cada mozo ve solo lo suyo",
    desc: "Nadie pisa el pedido de otro. El sistema marca quién tomó qué mesa y a qué hora, sin discusiones.",
    span: "md:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Doble-click no hace daño",
    desc: "Si el mozo toca dos veces 'enviar', solo se envía una vez. Cero pedidos duplicados.",
  },
  {
    icon: Smile,
    title: "Auditoría de cada cambio",
    desc: "Sabés quién quitó un plato, cuándo y por qué. Ideal cuando la diferencia de caja te pasa la voz.",
  },
  {
    icon: ShoppingBag,
    title: "Para llevar también es Maitre",
    desc: "Pedidos delivery con precio aparte, cola distinta y reportes propios. Sin mezclar con sala.",
  },
  {
    icon: Building2,
    title: "Una cuenta, todas tus sucursales",
    desc: "Manejá Miraflores, San Isidro y Surco desde la misma pantalla. Comparás ventas en un toque.",
  },
  {
    icon: Calendar,
    title: "Eventos sin reprogramar nada",
    desc: "Fin de semana de promo, Día de la Madre, hora feliz. Programás precios especiales y se desactivan solos.",
  },
]

export function Features() {
  return (
    <section id="beneficios" className="relative py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <BlurFade inView delay={0.05}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Lo que te llevás
          </p>
        </BlurFade>
        <BlurFade inView delay={0.15}>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Diez dolores de cabeza que dejás de tener.
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.25}>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-base text-muted-foreground">
            Sin tecnicismos. Maitre apunta a que vendas más, perder menos y dormir tranquilo.
          </p>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  span,
  accent,
  index,
}: {
  icon: any
  title: string
  desc: string
  span?: string
  accent?: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card p-7 transition",
        "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]",
        span
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-gradient-to-br blur-3xl transition-opacity duration-500",
          accent ?? "from-orange-100/50",
          "to-transparent opacity-0 group-hover:opacity-100"
        )}
      />
      <div className="relative">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="size-5" />
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
  )
}
