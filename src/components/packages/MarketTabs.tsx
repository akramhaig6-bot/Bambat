import { MARKETS } from '../../data/content'
import { scrollToId } from '../../hooks/useActiveSection'

type MarketTabsProps = {
  active: string
}

export function MarketTabs({ active }: MarketTabsProps) {
  return (
    <div className="sticky top-[72px] z-40 border-y border-brand-900/8 bg-white/95 shadow-glow-soft backdrop-blur-xl">
      <div className="container-x">
        <div role="tablist" aria-label="اختر سوقك" className="grid grid-cols-2 gap-2 py-2 sm:flex sm:items-center sm:py-3">
          {MARKETS.map((m) => {
            const isActive = active === m.sectionId
            return (
              <button
                key={m.id}
                onClick={() => scrollToId(m.sectionId)}
                id={`tab-${m.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${m.id}`}
                tabIndex={isActive ? 0 : -1}
                onKeyDown={(event) => {
                  const index = MARKETS.findIndex((market) => market.id === m.id)
                  let next = index
                  if (event.key === 'ArrowLeft') next = (index + 1) % MARKETS.length
                  else if (event.key === 'ArrowRight') next = (index - 1 + MARKETS.length) % MARKETS.length
                  else if (event.key === 'Home') next = 0
                  else if (event.key === 'End') next = MARKETS.length - 1
                  else return
                  event.preventDefault()
                  scrollToId(MARKETS[next].sectionId)
                  document.getElementById(`tab-${MARKETS[next].id}`)?.focus({ preventScroll: true })
                }}
                className={`group flex shrink-0 items-center justify-center gap-2.5 rounded-2xl border px-4 py-2 sm:py-2.5 text-sm font-bold transition ${
                  isActive
                    ? 'border-brand-600 bg-gradient-to-l from-brand-500 to-brand-700 text-white shadow-glow-brand'
                    : 'border-brand-900/10 bg-white text-ink-800 hover:border-brand-400/50 hover:bg-brand-50 hover:text-brand-800'
                }`}
              >
                <span className="text-lg leading-none">{m.flag}</span>
                {m.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
