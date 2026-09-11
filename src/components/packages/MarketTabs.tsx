import { MARKETS } from '../../data/content'
import { scrollToId } from '../../hooks/useActiveSection'

type MarketTabsProps = {
  active: string
}

export function MarketTabs({ active }: MarketTabsProps) {
  return (
    <div className="sticky top-[72px] z-40 border-y border-brand-900/8 bg-white/95 shadow-glow-soft backdrop-blur-xl">
      <div className="container-x">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto py-3">
          {MARKETS.map((m) => {
            const isActive = active === m.sectionId
            return (
              <button
                key={m.id}
                onClick={() => scrollToId(m.sectionId)}
                aria-current={isActive ? 'true' : undefined}
                className={`group flex shrink-0 items-center gap-2.5 rounded-2xl border px-4 py-2.5 text-sm font-bold transition ${
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
