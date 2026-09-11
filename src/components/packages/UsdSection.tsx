import { MARKETS, USD_PACKAGES, type PackageItem } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { Icon } from '../ui/Icon'
import { PackageGrid } from './PackageGrid'

type UsdSectionProps = {
  onOpen: (item: PackageItem) => void
}

export function UsdSection({ onOpen }: UsdSectionProps) {
  const market = MARKETS.find((m) => m.id === 'usd')!

  return (
    <section id="market-usd" className="scroll-mt-40 pt-20 lg:pt-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-500/20 bg-gradient-to-tr from-white via-brand-50/60 to-white p-6 shadow-glow sm:p-9 lg:p-12">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid-fade bg-grid opacity-40 [mask-image:radial-gradient(80%_70%_at_20%_0%,black,transparent)]" />
            <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-300/25 blur-3xl" />
            <span className="absolute -bottom-6 left-6 font-display text-[8rem] font-black text-brand-500/10">
              USD
            </span>
          </div>

          <div className="relative">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <Reveal>
                  <span className="eyebrow">
                    <Icon name="globe" size={16} />
                    الباقات الدولية
                  </span>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                    الباقات الاستثمارية — <span className="text-gradient-brand">USD</span>
                  </h2>
                </Reveal>
                <Reveal delay={150}>
                  <p className="mt-4 max-w-2xl text-[14.5px] leading-8 text-ink-700">
                    قسم مستقل بالدولار الأمريكي، بمستويات متدرجة تبدأ من 300$ وتصل إلى 20,000$، وتُعرض
                    الباقات على دفعات حتى تتمكن من المقارنة بسهولة.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={200}>
                <div className="flex items-center gap-3 rounded-2xl border border-brand-900/10 bg-white px-5 py-4 shadow-glow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/15 text-brand-600">
                    <Icon name="wallet" size={19} />
                  </span>
                  <div>
                    <p className="text-[12px] text-ink-600">عدد الباقات</p>
                    <p className="font-display text-lg font-extrabold text-ink-950 tabular">
                      {USD_PACKAGES.length} باقة
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-9">
              <PackageGrid
                items={USD_PACKAGES}
                market={market}
                variant="usd"
                pageSize={8}
                columns={4}
                onOpen={onOpen}
              />
            </div>

            <Reveal delay={120}>
              <p className="mt-8 flex items-start gap-2 text-[12.5px] leading-6 text-ink-600">
                <Icon name="shield" size={16} className="mt-0.5 shrink-0 text-brand-500" />
                جميع المبالغ بالدولار الأمريكي. الشروط وآلية التسوية يتم توضيحها قبل المشاركة عبر
                قنوات التواصل الرسمية.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
