import { useEffect, useState } from 'react'

/** scrollSpy: يحدد القسم الظاهر حاليًا لتحديث النافبار والتبويبات */
export function useActiveSection(ids: string[], offset = 180) {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top - offset <= 0) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}

/** تمرير ناعم إلى قسم مع مراعاة ارتفاع النافبار */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}
