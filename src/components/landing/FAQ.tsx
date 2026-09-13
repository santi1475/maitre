import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

type FAQItem = {
  q: string
  a: string
}

const FAQS: FAQItem[] = [
  {
    q: "¿Necesito comprar tablets o equipos especiales para usar Maitre?",
    a: "No. Maitre funciona en la web desde cualquier smartphone (Android o iPhone), tablet o laptop que ya tengas en el restaurante. Solo abres el navegador y el equipo empieza a atender.",
  },
  {
    q: "¿Qué sucede si se cae el internet durante el servicio?",
    a: "Maitre cuenta con arquitectura resiliente para contingencias. Si la conexión fluctúa, las comandas activas y el estado de mesas se retienen localmente en el dispositivo para evitar pérdidas de información.",
  },
  {
    q: "¿Es compatible con impresoras de comandas y facturación SUNAT?",
    a: "Sí. Maitre se conecta con impresoras térmicas estándar (red, USB o Bluetooth) para imprimir comandas o precuentas, y permite emisión directa de boletas y facturas electrónicas.",
  },
  {
    q: "¿Cuánto tiempo toma capacitar a los mozos y cocineros?",
    a: "Menos de 15 minutos. La interfaz está diseñada específicamente para alta rotación de personal gastronómico: botones grandes, colores de estado claros y sin menús técnicos confusos.",
  },
  {
    q: "¿Cobran comisión por pedido o plato vendido?",
    a: "No, absolutamente cero comisiones por venta. Solo pagas una tarifa plana mensual o anual. Todo el margen de tus ventas queda 100% en tu negocio.",
  },
  {
    q: "¿Cómo funciona el soporte técnico durante las horas punta?",
    a: "Ofrecemos atención prioritaria por WhatsApp directamente con nuestro equipo técnico de guardia, los 7 días de la semana, para resolver cualquier incidencia al instante.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative scroll-mt-20 overflow-hidden bg-stone-light/60 py-20 dark:bg-[#151310] md:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
            <HelpCircle size={26} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink dark:text-[#e8e4dc] md:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base sm:text-lg text-stone">
            Todo lo que necesitas saber antes de modernizar la operación de tu restaurante.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col gap-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-stone/15 bg-white transition-all dark:border-white/10 dark:bg-[#1e1c19]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-sans text-base sm:text-lg font-bold text-ink dark:text-[#e8e4dc] transition-colors hover:text-primary dark:hover:text-primary cursor-pointer gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-stone transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 font-sans text-sm sm:text-base leading-relaxed text-stone/90 dark:text-[#c4bfb7] border-t border-stone/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="font-sans text-sm text-stone">
            ¿Tienes otra consulta específica sobre tu local?{" "}
            <a
              href="https://wa.me/51999999999?text=Hola%2C%20tengo%20una%20consulta%20sobre%20Maitre"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline inline-flex items-center gap-1"
            >
              Escríbenos por WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
