"use client"

// Ambient animated "silk" canvas, theme-aware. Adapted from a 21st.dev component.
// - Renders to a small backing store; CSS upscales it (cheap + softly blurred).
// - Recolors smoothly on light/dark toggle by lerping the palette (no flash).
// - Honors prefers-reduced-motion: paints one static frame, no animation loop.
import { useEffect, useRef } from "react"

type RGB = [number, number, number]
type Palette = { bg: RGB; strand: RGB; amp: number }

// Brand palette. Light = cream base + faint green strands. Dark = ink base + green glow.
const LIGHT: Palette = { bg: [250, 249, 247], strand: [0, 199, 91], amp: 0.09 }
const DARK: Palette = { bg: [17, 16, 9], strand: [0, 199, 91], amp: 0.15 }

// ponytail: render at 1/SCALE resolution, CSS stretches to 100%. 5 => ~16x fewer pixels.
const SCALE = 5

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export function SilkBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const targetOf = (): Palette =>
      document.documentElement.classList.contains("dark") ? DARK : LIGHT

    // Current (lerped) palette state, so theme changes crossfade instead of snap.
    let target = targetOf()
    const cur: Palette = {
      bg: [...target.bg] as RGB,
      strand: [...target.strand] as RGB,
      amp: target.amp,
    }

    const resize = () => {
      const w = canvas.clientWidth || window.innerWidth
      const h = canvas.clientHeight || window.innerHeight
      canvas.width = Math.max(1, Math.ceil(w / SCALE))
      canvas.height = Math.max(1, Math.ceil(h / SCALE))
    }
    resize()

    // Cheap deterministic noise for grain.
    const noise = (x: number, y: number) => {
      const G = 2.71828
      return ((G * Math.sin(G * x)) * (G * Math.sin(G * y)) * (1 + x)) % 1
    }

    let time = 0
    let lastTime = performance.now()
    let raf = 0
    let visible = true

    const render = () => {
      const { width: w, height: h } = canvas

      // Ease current palette toward target (~400ms feel at 60fps with t=0.08).
      cur.bg[0] = lerp(cur.bg[0], target.bg[0], 0.08)
      cur.bg[1] = lerp(cur.bg[1], target.bg[1], 0.08)
      cur.bg[2] = lerp(cur.bg[2], target.bg[2], 0.08)
      cur.strand[0] = lerp(cur.strand[0], target.strand[0], 0.08)
      cur.strand[1] = lerp(cur.strand[1], target.strand[1], 0.08)
      cur.strand[2] = lerp(cur.strand[2], target.strand[2], 0.08)
      cur.amp = lerp(cur.amp, target.amp, 0.08)

      const img = ctx.createImageData(w, h)
      const data = img.data
      const t = time * 0.006

      for (let x = 0; x < w; x++) {
        const u = (x / w) * 2
        for (let y = 0; y < h; y++) {
          const v = (y / h) * 2
          const tx = u
          const ty = v + 0.03 * Math.sin(8 * tx - t)
          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5 * (tx + ty + Math.cos(3 * tx + 5 * ty) + 0.02 * t) +
                  Math.sin(20 * (tx + ty - 0.1 * t)),
              )
          const intensity = Math.max(0, pattern - noise(x, y) / 15) * cur.amp
          const i = (y * w + x) * 4
          data[i] = lerp(cur.bg[0], cur.strand[0], intensity)
          data[i + 1] = lerp(cur.bg[1], cur.strand[1], intensity)
          data[i + 2] = lerp(cur.bg[2], cur.strand[2], intensity)
          data[i + 3] = 255
        }
      }
      ctx.putImageData(img, 0, 0)
    }

    const loop = () => {
      const now = performance.now()
      const delta = Math.min(100, now - lastTime)
      lastTime = now
      time += delta / 16.666666666666668

      render()
      raf = requestAnimationFrame(loop)
    }

    // Theme toggle -> retarget palette (lerp animates the transition).
    const obs = new MutationObserver(() => {
      target = targetOf()
    })
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    // Pause RAF when hero scrolled offscreen.
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting
        if (reduce) return
        if (visible && !raf) {
          lastTime = performance.now()
          loop()
        } else if (!visible && raf) {
          cancelAnimationFrame(raf)
          raf = 0
        }
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    const onResize = () => {
      resize()
      if (reduce) render()
    }
    window.addEventListener("resize", onResize)

    if (reduce) render()
    else {
      lastTime = performance.now()
      loop()
    }

    return () => {
      if (raf) cancelAnimationFrame(raf)
      obs.disconnect()
      io.disconnect()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ animation: "silk-fade-in 1s ease-out forwards", opacity: 0 }}
    />
  )
}
