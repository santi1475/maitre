import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BlurFade } from "@/components/ui/blur-fade"

const FAQ_ITEMS = [
  {
    q: "¿Necesito tener internet siempre prendido?",
    a: "Sí, Maitre trabaja en la nube. Si se cae la red por unos segundos, se reconecta solito y nadie pierde su pedido.",
  },
  {
    q: "¿Qué pasa si dos mozos quieren la misma mesa?",
    a: "El primero que la abre se la queda. El segundo ve un aviso. Nada de pelearse ni de pedidos cruzados.",
  },
  {
    q: "¿Puedo poner precios distintos para llevar o para evento?",
    a: "Sí. Cada plato tiene precio salón, precio para llevar y precio de evento. Activás el modo evento y se aplica al toque. Termina la fecha y se desactiva solo.",
  },
  {
    q: "¿Cómo sé qué hizo cada mozo durante el día?",
    a: "Maitre guarda cada acción: quién agregó, quién eliminó, quién cerró. Filtrás por persona, fecha o monto. Ideal cuando la caja sale corta.",
  },
  {
    q: "¿Sirve si tengo más de un local?",
    a: "Sí. Manejás todas tus sucursales desde la misma cuenta. Cada una con su carta, su personal y sus reportes.",
  },
  {
    q: "¿Cuánto tarda en instalarse?",
    a: "Un día. Cargamos tu carta, mesas y empleados, capacitamos al equipo en 30 minutos y arrancan esa misma noche.",
  },
  {
    q: "¿Funciona en tablet o solo en computadora?",
    a: "En las dos. Los mozos usan tablet o celular, la cocina pantalla grande, y la administración computadora.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Plan mensual sin permanencia. Te armamos una propuesta según el tamaño de tu local. Pedí una demo y lo conversamos.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-32">
      <div className="container mx-auto max-w-3xl px-6">
        <BlurFade inView delay={0.05}>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Preguntas frecuentes
          </p>
        </BlurFade>
        <BlurFade inView delay={0.15}>
          <h2 className="mt-3 text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Lo que siempre nos preguntan.
          </h2>
        </BlurFade>

        <BlurFade inView delay={0.25}>
          <Accordion className="mt-12 w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-0">
                <AccordionTrigger className="text-left text-base font-medium tracking-tight hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  )
}
