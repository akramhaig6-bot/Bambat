import { MARKETS } from '../data/content'
import { scrollToId } from '../hooks/useActiveSection'
import { Reveal } from './ui/Reveal'
import { Icon } from './ui/Icon'

export function MarketStrip() {
  return (
    <section className="relative -mt-4 pb-8 sm:pb-12">
      <div className="container-x">
        <Reveal>
          <div className="card card-top-glow flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-brand-400/25 bg-brand-500/[0.12] text-brand-300">
                <Icon name="globe" size={18} />
              </span>
              <span className="font-display text-[15px] font-bold text-white">اختر سوقك</span>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div className="no-scrollbar -mx-1 flex flex-1 snap-x items-center gap-2 overflow-x-auto px-1 pb-1 sm:gap-3 sm:overflow-visible">
              {MARKETS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => scrollToId(m.sectionId)}
                  className="group flex shrink-0 snap-start items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/75 transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
                >
                  <span className="text-lg leading-none">{m.flag}</span>
                  <span>{m.label}</span>
                  <Icon
                    name="arrowLeft"
                    size={15}
                    className="text-white/25 transition group-hover:-translate-x-0.5 group-hover:text-brand-300"
                  />
                </button>
              ))}
            </div>

            <p className="hidden text-[12px] leading-5 text-white/40 lg:block lg:max-w-[180px]">
              اضغط على السوق للانتقال إلى باقاته مباشرة.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
