import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type Variant = 'primary' | 'outline' | 'ghost' | 'whatsapp' | 'telegram'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-l from-brand-400 to-brand-600 text-ink-950 shadow-[0_10px_30px_-12px_rgba(27,167,110,0.9)] hover:from-brand-300 hover:to-brand-500 hover:shadow-[0_14px_40px_-12px_rgba(27,167,110,1)]',
  outline:
    'border border-white/15 bg-white/[0.04] text-white backdrop-blur hover:border-brand-400/50 hover:bg-brand-500/10 hover:text-white',
  ghost: 'text-white/75 hover:bg-white/5 hover:text-white',
  whatsapp:
    'border border-emerald-300/25 bg-emerald-400/[0.12] text-emerald-100 backdrop-blur hover:border-emerald-300/60 hover:bg-emerald-400/[0.22] hover:text-white',
  telegram:
    'border border-sky-300/25 bg-sky-400/[0.12] text-sky-100 backdrop-blur hover:border-sky-300/60 hover:bg-sky-400/[0.22] hover:text-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[13px]',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  size?: Size
  icon?: IconName
  iconPosition?: 'start' | 'end'
  children: ReactNode
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'start',
  className = '',
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {icon && iconPosition === 'start' ? (
        <Icon
          name={icon}
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5"
        />
      ) : null}
      <span>{children}</span>
      {icon && iconPosition === 'end' ? (
        <Icon name={icon} size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </a>
  )
}

type ContactButtonProps = {
  channel: 'whatsapp' | 'telegram'
  href: string
  label?: string
  size?: Size
  className?: string
}

export function ContactButton({
  channel,
  href,
  label,
  size = 'md',
  className = '',
}: ContactButtonProps) {
  const isWa = channel === 'whatsapp'
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${base} ${isWa ? variants.whatsapp : variants.telegram} ${sizes[size]} ${className}`}
    >
      {isWa ? <WhatsAppMark /> : <TelegramMark />}
      <span>{label ?? (isWa ? 'واتساب' : 'تيليجرام')}</span>
    </a>
  )
}

export function WhatsAppMark({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.73.45 3.42 1.31 4.91L2 22l5.36-1.4a9.83 9.83 0 0 0 4.68 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 19.44 5.5 9.79 9.79 0 0 0 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.09.81.83-3.01-.19-.31a8.16 8.16 0 0 1-1.26-4.33c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 8.24 8.22c0 4.54-3.7 8.17-8.31 8.17z" />
    </svg>
  )
}

export function TelegramMark({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M21.94 4.3 19.2 19.06c-.2.9-.74 1.12-1.5.7l-4.14-3.05-2 1.93c-.22.22-.4.4-.82.4l.29-4.16 7.57-6.84c.33-.29-.07-.45-.51-.16l-9.35 5.89-4.03-1.26c-.88-.27-.89-.88.18-1.3l15.74-6.07c.73-.27 1.36.17 1.12 1.3z" />
    </svg>
  )
}
