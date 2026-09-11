type LogoProps = {
  size?: number
  /** يُستخدم فوق خلفية خضراء (داخل الشريط الجانبي) */
  onGreen?: boolean
}

export function Logo({ size = 40, onGreen = false }: LogoProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-2xl border ${
        onGreen
          ? 'border-white/30 bg-white shadow-glow-brand'
          : 'border-brand-500/25 bg-gradient-to-br from-brand-50 to-white shadow-glow-brand'
      }`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" width={size * 0.68} height={size * 0.68} fill="none">
        <path
          d="M18 46V18h13a9 9 0 0 1 0 18h-8l12 12h-9l-8-7"
          stroke={onGreen ? '#0B8654' : '#0A6B44'}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="46" cy="44" r="4.5" fill={onGreen ? '#12A469' : '#34BE84'} />
      </svg>
    </span>
  )
}
