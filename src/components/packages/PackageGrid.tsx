import { useEffect, useState } from 'react'
import type { Market, PackageItem } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { Icon } from '../ui/Icon'
import { PackageCard } from './PackageCard'

type PackageGridProps = {
  items: PackageItem[]
  market: Market
  variant?: 'default' | 'business' | 'usd'
  /** عدد الباقات المعروضة في الصفحة الواحدة */
  pageSize?: number
  /** عدد الأعمدة في الشاشات الكبيرة */
  columns?: 3 | 4
  onOpen: (item: PackageItem) => void
}

const gridClass: Record<3 | 4, string> = {
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}

/**
 * شبكة باقات مقسّمة: تُعرض الباقات على دفعات (صفحات) بدل عرضها كاملة دفعة واحدة،
 * مع أزرار تنقّل واضحة تعمل بالاتجاهين (RTL).
 */
export function PackageGrid({
  items,
  market,
  variant = 'default',
  pageSize = 4,
  columns = 4,
  onOpen,
}: PackageGridProps) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const [page, setPage] = useState(0)

  // إعادة الضبط عند تغيّر عدد الباقات
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1))
  }, [pageCount])

  if (pageCount === 1) {
    return (
      <div className={`grid gap-4 ${gridClass[columns]}`}>
        {items.map((item, i) => (
          <Reveal key={item.id} delay={Math.min(i, 6) * 70}>
            <PackageCard item={item} market={market} index={i} variant={variant} onOpen={onOpen} />
          </Reveal>
        ))}
      </div>
    )
  }

  const start = page * pageSize
  const visible = items.slice(start, start + pageSize)
  const hasPrev = page > 0
  const hasNext = page < pageCount - 1

  const navBtn =
    'inline-flex items-center gap-2 rounded-xl border border-brand-900/12 bg-white px-4 py-2.5 text-[13px] font-bold text-ink-900 transition hover:border-brand-500/50 hover:bg-brand-50 disabled:pointer-events-none disabled:opacity-40'

  return (
    <div>
      <div key={page} className={`grid gap-4 ${gridClass[columns]}`}>
        {visible.map((item, i) => (
          <Reveal key={item.id} delay={i * 70}>
            <PackageCard
              item={item}
              market={market}
              index={start + i}
              variant={variant}
              onOpen={onOpen}
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-7 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-[12.5px] font-semibold text-ink-600 tabular">
          عرض {start + 1}–{start + visible.length} من {items.length} باقة · صفحة {page + 1} من{' '}
          {pageCount}
        </p>

        <div className="flex items-center gap-2">
          {/* السابق (يمين في RTL) */}
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={!hasPrev}
            className={navBtn}
            aria-label="الدفعة السابقة من الباقات"
          >
            <Icon name="arrowLeft" size={15} className="rotate-180" />
            السابق
          </button>

          <div className="flex items-center gap-1.5" role="tablist" aria-label="صفحات الباقات">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === page}
                aria-label={`الصفحة ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === page ? 'w-7 bg-brand-500' : 'w-2.5 bg-brand-900/15 hover:bg-brand-400/60'
                }`}
              />
            ))}
          </div>

          {/* التالي (يسار في RTL) */}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={!hasNext}
            className={navBtn}
            aria-label="الدفعة التالية من الباقات"
          >
            التالي
            <Icon name="arrowLeft" size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
