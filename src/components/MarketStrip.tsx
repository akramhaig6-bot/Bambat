import { MARKETS } from '../data/content'
import { scrollToId } from '../hooks/useActiveSection'
import { Reveal } from './ui/Reveal'
import { Icon } from './ui/Icon'

export function MarketStrip() {
  return (
    <section className="relative pt-8 pb-2">
      <div className="container-x">
        <Reveal>
          <div className="card card-top-glow flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-brand-400/25 bg-brand-500/[0.12] text-brand-600">
                <Icon name="globe" size={18} />
              </span>
              <span className="font-display text-[15px] font-bold text-ink-950">اختر سوقك</span>
            </div>

            <div className="hidden h-10 w-px bg-brand-900/10 sm:block" />

            <div className="no-scrollbar -mx-1 grid grid-cols-2 sm:flex flex-1 snap-x items-center gap-2 overflow-x-auto px-1 pb-1 sm:gap-3 sm:flex-wrap">
              {MARKETS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => scrollToId(m.sectionId)}
                  className="group flex shrink-0 snap-start items-center gap-2.5 rounded-2xl border border-brand-900/10 bg-brand-50/50 px-4 py-2.5 text-sm font-semibold text-ink-800 transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-ink-950"
                >
                  <span className="text-lg leading-none">{m.flag}</span>
                  <span>{m.label}</span>
                  <Icon
                    name="arrowLeft"
                    size={15}
                    className="text-ink-600/50 transition group-hover:-translate-x-0.5 group-hover:text-brand-600"
                  />
                </button>
              ))}
            </div>

            <p className="hidden text-[12px] leading-5 text-ink-600 lg:block lg:max-w-[180px]">
              اضغط على السوق للانتقال إلى باقاته مباشرة.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
