import { useEffect, useRef } from 'react'

/** Keep keyboard focus inside an open dialog and restore its trigger on close. */
export function useDialog(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null)
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusable = () => Array.from(ref.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]',
    ) ?? []).filter((el) => el.getClientRects().length > 0)
    const frame = requestAnimationFrame(() => (focusable()[0] ?? ref.current)?.focus())
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeRef.current()
      }
      if (event.key !== 'Tab') return
      const elements = focusable()
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (!first) {
        event.preventDefault()
        ref.current?.focus()
      } else if (event.shiftKey && (document.activeElement === first || !ref.current?.contains(document.activeElement))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || !ref.current?.contains(document.activeElement))) {
        event.preventDefault()
        first.focus()
      }
    }
    const onFocus = (event: FocusEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        (focusable()[0] ?? ref.current)?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('focusin', onFocus)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('focusin', onFocus)
      if (previous?.isConnected) previous.focus({ preventScroll: true })
    }
  }, [open])

  return ref
}
