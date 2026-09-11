import { MARKETS, type MarketGroup, type PackageItem } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { Icon } from '../ui/Icon'
import { PackageCard } from './PackageCard'

type MarketSectionProps = {
  group: MarketGroup
  onOpen: (item: PackageItem, group: MarketGroup, isBusiness: boolean) => void
}

export function MarketSection({ group, onOpen }: MarketSectionProps) {
  const market = MARKETS.find((m) => m.id === group.market)!

  return (
    <>
      {/* عروض الاستثمار */}
      <section id={market.sectionId} className="scroll-mt-40 pt-14 lg:pt-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="flex items-center gap-3 text-2xl font-extrabold sm:text-3xl">
                <span aria-hidden>{market.flag}</span>
                عروض الاستثمار — <span className="text-gradient-brand">{market.label}</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[12px] font-semibold text-white/55">
                {group.offers.length} باقة · {market.currency}
              </span>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.offers.map((item, i) => (
              <Reveal key={item.id} delay={Math.min(i, 6) * 70}>
                <PackageCard
                  item={item}
                  market={market}
                  index={i}
                  onOpen={(it) => onOpen(it, group, false)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* فئة رجال الأعمال */}
      <section id={`business-${market.id}`} className="scroll-mt-40 pt-14 lg:pt-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-400/[0.18] bg-gradient-to-bl from-ink-800/70 via-ink-900/60 to-ink-950/80 p-6 sm:p-9 lg:p-11">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" />
              <div className="absolute bottom-[-30%] right-[-10%] h-64 w-64 rounded-full bg-brand-700/20 blur-3xl" />
            </div>

            <div className="relative">
              <Reveal>
                <span className="eyebrow">
                  <Icon name="gem" size={16} />
                  فئة رجال الأعمال
                </span>
              </Reveal>
              <Reveal delay={70}>
                <h3 className="mt-5 flex flex-wrap items-center gap-3 text-2xl font-extrabold sm:text-[1.7rem]">
                  باقات رجال الأعمال — {market.label}
                  <span aria-hidden className="text-2xl">
                    {market.flag}
                  </span>
                </h3>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 max-w-3xl text-[14.5px] leading-8 text-white/60">
                  خيارات استثمارية مخصصة لرؤوس الأموال الأعلى، مع شروط ومدة وآلية تسوية يتم توضيحها
                  قبل المشاركة.
                </p>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.business.map((item, i) => (
                  <Reveal key={item.id} delay={Math.min(i, 5) * 70}>
                    <PackageCard
                      item={item}
                      market={market}
                      index={i}
                      variant="business"
                      onOpen={(it) => onOpen(it, group, true)}
                    />
                  </Reveal>
                ))}
              </div>

              {group.note ? (
                <Reveal delay={120}>
                  <p className="mt-7 flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[12.5px] leading-6 text-white/55">
                    <Icon name="shield" size={16} className="mt-0.5 shrink-0 text-brand-400/70" />
                    {group.note}
                  </p>
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
