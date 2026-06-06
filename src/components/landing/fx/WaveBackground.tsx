// SVG wave + CSS keyframe translate. No JS animation loop.
type Props = {
  className?: string
  color?: string
  opacity?: number
}

export function WaveBackground({
  className = "",
  color = "#00c75b",
  opacity = 0.12,
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-x-0 top-1/4 h-1/2 w-[200%]"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{ animation: "wave-slide 18s linear infinite" }}
      >
        <path
          d="M0,100 C150,180 300,20 600,100 C900,180 1050,20 1200,100 L1200,200 L0,200 Z"
          fill={color}
          opacity={opacity}
        />
      </svg>
      <svg
        className="absolute inset-x-0 top-1/3 h-1/2 w-[200%]"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{ animation: "wave-slide 26s linear -8s infinite reverse" }}
      >
        <path
          d="M0,100 C200,40 400,160 600,100 C800,40 1000,160 1200,100 L1200,200 L0,200 Z"
          fill={color}
          opacity={opacity * 0.6}
        />
      </svg>
    </div>
  )
}
