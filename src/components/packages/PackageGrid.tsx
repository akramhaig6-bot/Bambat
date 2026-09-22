import { useEffect, useId, useRef, useState } from 'react'
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
  items: allItems,
  market,
  variant = 'default',
  pageSize = 4,
  columns = 4,
  onOpen,
}: PackageGridProps) {
  const [capital, setCapital] = useState('')
  const filterId = useId()
  const gridRef = useRef<HTMLDivElement>(null)
  const items = capital ? allItems.filter((item) => item.capital === capital) : allItems
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const [page, setPage] = useState(0)

  // إعادة الضبط عند تغيّر عدد الباقات
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1))
  }, [pageCount])

  const changePage = (next: number) => {
    setPage(next)
    requestAnimationFrame(() => {
      gridRef.current?.focus({ preventScroll: true })
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      gridRef.current?.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' })
    })
  }

  const start = page * pageSize
  const visible = items.slice(start, start + pageSize)
  const hasPrev = page > 0
  const hasNext = page < pageCount - 1

  const navBtn =
    'inline-flex items-center gap-2 rounded-xl border border-brand-900/12 bg-white px-4 py-2.5 text-[13px] font-bold text-ink-900 transition hover:border-brand-500/50 hover:bg-brand-50 disabled:pointer-events-none disabled:opacity-40'

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <label htmlFor={filterId} className="text-sm font-semibold text-ink-700">رأس المال</label>
        <select
          id={filterId}
          value={capital}
          onChange={(event) => { setCapital(event.target.value); setPage(0) }}
          className="min-h-11 w-full rounded-xl border border-brand-900/15 bg-white px-4 py-2 text-sm text-ink-900 sm:w-64"
        >
          <option value="">رأس المال</option>
          {allItems.map((item) => <option key={item.id} value={item.capital}>{item.capital}</option>)}
        </select>
      </div>
      <div ref={gridRef} tabIndex={-1} className="package-results" aria-live="polite">
        <div key={`${capital}-${page}`} className={`grid gap-4 ${gridClass[columns]}`}>
          {visible.map((item, i) => (
            <Reveal key={item.id} delay={i * 70}>
              <PackageCard
                item={item}
                market={market}
                index={allItems.findIndex((candidate) => candidate.id === item.id)}
                variant={variant}
                onOpen={onOpen}
              />
            </Reveal>
          ))}
        </div>

      </div>

      {pageCount > 1 && <div className="mt-7 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-[12.5px] font-semibold text-ink-600 tabular">
          عرض {start + 1}–{start + visible.length} من {items.length} باقة · صفحة {page + 1} من{' '}
          {pageCount}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* السابق (يمين في RTL) */}
          <button
            type="button"
            onClick={() => changePage(Math.max(0, page - 1))}
            disabled={!hasPrev}
            className={navBtn}
            aria-label="الدفعة السابقة من الباقات"
          >
            <Icon name="arrowLeft" size={15} className="rotate-180" />
            السابق
          </button>

          <div className="flex items-center gap-1.5" role="group" aria-label="صفحات الباقات">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-current={i === page ? 'page' : undefined}
                aria-label={`الصفحة ${i + 1}`}
                onClick={() => changePage(i)}
                className={`inline-flex h-11 min-w-11 items-center justify-center rounded-xl border text-sm font-bold transition-all duration-300 ${
                  i === page ? 'border-brand-600 bg-brand-600 text-white' : 'border-brand-900/10 bg-white hover:bg-brand-50'
                }`}
              >{i + 1}</button>
            ))}
          </div>

          {/* التالي (يسار في RTL) */}
          <button
            type="button"
            onClick={() => changePage(Math.min(pageCount - 1, page + 1))}
            disabled={!hasNext}
            className={navBtn}
            aria-label="الدفعة التالية من الباقات"
          >
            التالي
            <Icon name="arrowLeft" size={15} />
          </button>
        </div>
      </div>}
    </div>
  )
}
