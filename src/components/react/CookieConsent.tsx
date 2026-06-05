import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "maitre.cookies.v1"

export function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null
    if (!saved) {
      const t = setTimeout(() => setOpen(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  function decide(choice: "accepted" | "rejected") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: Date.now() }))
    } catch {}
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 80, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: 80, opacity: 0, filter: "blur(8px)" }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-2xl border bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/5">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Cookie className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-tight">Cookies en Maitre</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Usamos cookies para recordar tu sesión y medir el rendimiento del producto. Aceptás su uso al continuar.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2 sm:ml-auto">
                <Button variant="ghost" size="sm" onClick={() => decide("rejected")}>
                  Rechazar
                </Button>
                <Button size="sm" onClick={() => decide("accepted")}>
                  Aceptar cookies
                </Button>
                <button
                  aria-label="Cerrar"
                  onClick={() => decide("rejected")}
                  className="ml-1 rounded-md p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
