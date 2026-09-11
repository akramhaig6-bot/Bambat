import { MARKETS, type MarketGroup, type PackageItem } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { Icon } from '../ui/Icon'
import { PackageGrid } from './PackageGrid'

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
              <span className="rounded-full border border-brand-900/10 bg-brand-50 px-4 py-1.5 text-[12px] font-semibold text-ink-700">
                {group.offers.length} باقة · {market.currency} · معروضة على دفعات
              </span>
            </Reveal>
          </div>

          <div className="mt-8">
            <PackageGrid
              items={group.offers}
              market={market}
              pageSize={4}
              columns={4}
              onOpen={(it) => onOpen(it, group, false)}
            />
          </div>
        </div>
      </section>

      {/* فئة رجال الأعمال */}
      <section id={`business-${market.id}`} className="scroll-mt-40 pt-14 lg:pt-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-500/20 bg-gradient-to-bl from-white via-brand-50/70 to-white p-6 shadow-glow sm:p-9 lg:p-11">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-brand-300/25 blur-3xl" />
              <div className="absolute bottom-[-30%] right-[-10%] h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
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
                <p className="mt-4 max-w-3xl text-[14.5px] leading-8 text-ink-700">
                  خيارات استثمارية مخصصة لرؤوس الأموال الأعلى، مع شروط ومدة وآلية تسوية يتم توضيحها
                  قبل المشاركة.
                </p>
              </Reveal>

              <div className="mt-8">
                <PackageGrid
                  items={group.business}
                  market={market}
                  variant="business"
                  pageSize={3}
                  columns={3}
                  onOpen={(it) => onOpen(it, group, true)}
                />
              </div>

              {group.note ? (
                <Reveal delay={120}>
                  <p className="mt-7 flex items-start gap-2 rounded-2xl border border-brand-900/10 bg-white px-4 py-3 text-[12.5px] leading-6 text-ink-700">
                    <Icon name="shield" size={16} className="mt-0.5 shrink-0 text-brand-500" />
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
