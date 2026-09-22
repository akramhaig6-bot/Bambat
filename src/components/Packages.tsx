import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { MARKETS, MARKET_GROUPS, type MarketGroup, type PackageItem } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { MarketTabs } from './packages/MarketTabs'
import { MarketSection } from './packages/MarketSection'
import { UsdSection } from './packages/UsdSection'
import { PackageModal } from './packages/PackageModal'

type ModalState = {
  item: PackageItem
  marketId: string
  isBusiness: boolean
}

export function Packages() {
  const [modal, setModal] = useState<ModalState | null>(null)
  const [activeMarket, setActiveMarket] = useState('market-sa')

  useEffect(() => {
    const onNavigate = (event: Event) => {
      const id = (event as CustomEvent<string>).detail
      const market = MARKETS.find((m) => m.sectionId === id || `business-${m.id}` === id)
      if (market) flushSync(() => setActiveMarket(market.sectionId))
    }
    window.addEventListener('section:navigate', onNavigate)
    return () => window.removeEventListener('section:navigate', onNavigate)
  }, [])

  const modalMarket = MARKETS.find((m) => m.id === modal?.marketId) ?? null

  const openItem = (item: PackageItem, group: MarketGroup, isBusiness: boolean) =>
    setModal({ item, marketId: group.market, isBusiness })

  return (
    <>
      {/* العنوان + التبويبات */}
      <section id="packages" className="relative scroll-mt-28 pt-10 lg:pt-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="الباقات الاستثمارية"
            icon="wallet"
            title={
              <>
                اختر الباقة <span className="text-gradient-brand">المناسبة لك</span>
              </>
            }
            description="تصفح الباقات المتاحة حسب الدولة والعملة ورأس المال. تُعرض الباقات على دفعات مقسّمة — تنقّل بين الصفحات للمقارنة، واضغط على أي بطاقة لمعرفة تفاصيلها والتواصل مع فريقنا."
          />
        </div>
      </section>

      {/* منطقة التبويبات الثابتة + الأقسام */}
      <div className="relative mt-8 pb-8">
        <MarketTabs active={activeMarket} />

        {MARKET_GROUPS.map((group) => (
          <div
            key={group.market}
            id={`panel-${group.market}`}
            role="tabpanel"
            aria-labelledby={`tab-${group.market}`}
            hidden={activeMarket !== `market-${group.market}`}
            tabIndex={0}
          >
            <MarketSection group={group} onOpen={openItem} />
          </div>
        ))}

        <div id="panel-usd" role="tabpanel" aria-labelledby="tab-usd" hidden={activeMarket !== 'market-usd'} tabIndex={0}>
          <UsdSection onOpen={(item) => setModal({ item, marketId: 'usd', isBusiness: false })} />
        </div>
        <div className="h-4" />
      </div>

      <PackageModal
        item={modal?.item ?? null}
        market={modalMarket}
        isBusiness={modal?.isBusiness}
        onClose={() => setModal(null)}
      />
    </>
  )
}
