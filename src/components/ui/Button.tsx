import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type Variant = 'primary' | 'outline' | 'ghost' | 'telegram'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-l from-brand-400 to-brand-600 text-white shadow-[0_10px_30px_-12px_rgba(18,164,105,0.45)] hover:from-brand-500 hover:to-brand-700 hover:shadow-[0_14px_40px_-12px_rgba(18,164,105,0.55)] hover:text-white',
  outline:
    'border border-brand-900/15 bg-brand-50/70 text-ink-950 backdrop-blur hover:border-brand-400/50 hover:bg-brand-500/10 hover:text-ink-950',
  ghost: 'text-ink-800 hover:bg-brand-50 hover:text-ink-950',
  telegram:
    'border border-sky-500/25 bg-sky-50 text-sky-700 hover:border-sky-500/50 hover:bg-sky-100 hover:text-sky-800',
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
  channel: 'telegram'
  href: string
  label?: string
  size?: Size
  className?: string
}

export function ContactButton({
  channel: _channel,
  href,
  label,
  size = 'md',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${base} ${variants.telegram} ${sizes[size]} ${className}`}
    >
      <TelegramMark />
      <span>{label ?? 'تيليجرام'}</span>
    </a>
  )
}

export function TelegramMark({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M21.94 4.3 19.2 19.06c-.2.9-.74 1.12-1.5.7l-4.14-3.05-2 1.93c-.22.22-.4.4-.82.4l.29-4.16 7.57-6.84c.33-.29-.07-.45-.51-.16l-9.35 5.89-4.03-1.26c-.88-.27-.89-.88.18-1.3l15.74-6.07c.73-.27 1.36.17 1.12 1.3z" />
    </svg>
  )
}
