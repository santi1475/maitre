// Pure-CSS background orbs — zero JS animation cost.
// Use inside a `relative overflow-hidden` parent.
type OrbProps = {
  variant?: "soft" | "strong"
  count?: 2 | 3
}

export function GlowOrbs({ variant = "soft", count = 3 }: OrbProps) {
  const intensity = variant === "strong" ? "/20" : "/10"
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -left-20 top-10 h-[380px] w-[380px] rounded-full bg-primary${intensity} blur-3xl`}
        style={{ animation: "orb-drift 14s ease-in-out infinite" }}
      />
      <div
        className={`absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary${intensity} blur-3xl`}
        style={{ animation: "orb-drift 18s ease-in-out -6s infinite" }}
      />
      {count === 3 && (
        <div
          className={`absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary${intensity} blur-3xl`}
          style={{ animation: "orb-drift 16s ease-in-out -3s infinite" }}
        />
      )}
    </div>
  )
}
