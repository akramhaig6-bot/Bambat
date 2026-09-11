import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** التأخير بالميلي ثانية */
  delay?: number
  className?: string
  as?: ElementType
  once?: boolean
}

/** يظهر العنصر بحركة صعودية ناعمة عند دخوله مجال الرؤية */
export function Reveal({ children, delay = 0, className = '', as, once = true }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-7 opacity-0 blur-[2px]'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
