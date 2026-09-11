import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-l from-brand-300 via-brand-400 to-brand-600 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
