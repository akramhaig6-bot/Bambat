import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { CONTACT } from '../../config/site'
import { telegramLink } from '../../data/content'
import { Icon } from './Icon'
import { TelegramMark } from './Button'

const MENU_WIDTH = 240

type ContactMenuProps = {
  /** نص الاستفسار الذي يُرسل تلقائيًا */
  inquiry?: string
  trigger: ReactNode
  triggerClassName?: string
  align?: 'start' | 'end' | 'center'
  className?: string
}

/**
 * قائمة منسدلة بخيار تيليجرام.
 * تُعرض عبر Portal حتى لا تتأثر بـ overflow داخل البطاقات.
 */
export function ContactMenu({
  inquiry,
  trigger,
  triggerClassName = '',
  align = 'end',
  className = '',
}: ContactMenuProps) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number; up: boolean } | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    setPos(null)
  }, [])

  const place = useCallback(() => {
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect) return
    const estimatedHeight = menuRef.current?.offsetHeight ?? 165
    const spaceBelow = window.innerHeight - rect.bottom
    const up = spaceBelow < estimatedHeight + 16 && rect.top > spaceBelow
    let left =
      align === 'end'
        ? rect.right - MENU_WIDTH
        : align === 'start'
          ? rect.left
          : rect.left + rect.width / 2 - MENU_WIDTH / 2
    left = Math.min(Math.max(8, left), window.innerWidth - MENU_WIDTH - 8)
    setPos({ top: up ? rect.top - 8 : rect.bottom + 8, left, up })
  }, [align])

  useLayoutEffect(() => {
    if (open) place()
  }, [open, place])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (wrapperRef.current?.contains(target)) return
      if (menuRef.current?.contains(target)) return
      close()
    }
    const frame = requestAnimationFrame(() => menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus())
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        wrapperRef.current?.querySelector('button')?.focus()
      }
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return
      const links = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])
      if (!links.length) return
      e.preventDefault()
      const index = links.indexOf(document.activeElement as HTMLAnchorElement)
      const next = e.key === 'Home' ? 0 : e.key === 'End' ? links.length - 1
        : (index + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length
      links[next]?.focus()
    }
    const onReflow = () => place()

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', close, true)
    window.addEventListener('resize', onReflow)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', close, true)
      window.removeEventListener('resize', onReflow)
    }
  }, [open, close, place])

  return (
    <div className={`relative inline-block ${className}`} ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={triggerClassName}
      >
        {trigger}
      </button>

      {open && pos
        ? createPortal(
            <div
              ref={menuRef}
              role="menu"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget) && !wrapperRef.current?.contains(event.relatedTarget)) close()
              }}
              style={{
                position: 'fixed',
                top: pos.top,
                left: pos.left,
                width: MENU_WIDTH,
                transform: pos.up ? 'translateY(-100%)' : undefined,
              }}
              className="z-[90] animate-fade-up overflow-hidden rounded-2xl border border-brand-900/10 bg-white p-2 shadow-glow backdrop-blur-xl"
            >
              <a
                role="menuitem"
                href={telegramLink(inquiry)}
                target="_blank"
                rel="noreferrer noopener"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-500/15 text-sky-700">
                  <TelegramMark size={17} />
                </span>
                <span className="flex-1 text-right">{CONTACT.telegramLabel}</span>
                <Icon name="arrowLeft" size={15} className="text-sky-700" />
              </a>
              <p className="mt-1.5 border-t border-brand-900/10 px-3 pt-2 text-[11px] leading-5 text-ink-600">
                بدون تسجيل أو إنشاء حساب
              </p>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}
