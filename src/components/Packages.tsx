import { useMemo, useState } from 'react'
import { MARKETS, MARKET_GROUPS, type MarketGroup, type PackageItem } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
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
  const marketIds = useMemo(() => MARKETS.map((m) => m.sectionId), [])
  const activeMarket = useActiveSection(marketIds, 220)

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
            description="تصفح جميع الباقات المتاحة حسب الدولة والعملة ورأس المال. اضغط على أي بطاقة لمعرفة تفاصيلها والتواصل مع فريقنا."
          />
        </div>
      </section>

      {/* منطقة التبويبات الثابتة + الأقسام */}
      <div className="relative">
        <MarketTabs active={activeMarket} />

        {MARKET_GROUPS.map((group) => (
          <MarketSection key={group.market} group={group} onOpen={openItem} />
        ))}

        <UsdSection onOpen={(item) => setModal({ item, marketId: 'usd', isBusiness: false })} />
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
