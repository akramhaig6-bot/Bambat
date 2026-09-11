export function Logo({ size = 40 }: { size?: number }) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center rounded-2xl border border-brand-400/30 bg-gradient-to-br from-brand-500/25 to-ink-900 shadow-glow-brand"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" width={size * 0.68} height={size * 0.68} fill="none">
        <path
          d="M18 46V18h13a9 9 0 0 1 0 18h-8l12 12h-9l-8-7"
          stroke="#6FD8A9"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="46" cy="44" r="4.5" fill="#3AC188" />
      </svg>
    </span>
  )
}
