import type { Market, PackageItem } from '../../data/content'
import { Icon } from '../ui/Icon'
import { ContactMenu } from '../ui/ContactMenu'
import { TelegramMark } from '../ui/Button'
import { telegramLink } from '../../data/content'

type PackageCardProps = {
  item: PackageItem
  market: Market
  index: number
  variant?: 'default' | 'business' | 'usd'
  onOpen: (item: PackageItem) => void
}

export function PackageCard({ item, market, index, variant = 'default', onOpen }: PackageCardProps) {
  const isBusiness = variant === 'business'
  const isUsd = variant === 'usd'
  const inquiry = `${market.label} — ${item.capital}`

  return (
    <article
      className={`card card-top-glow card-hover group flex h-full flex-col ${
        isBusiness ? 'border-brand-500/25 bg-gradient-to-b from-brand-50 to-white' : ''
      }`}
    >
      <button
        onClick={() => onOpen(item)}
        className="flex flex-1 flex-col p-6 text-right"
        aria-label={`تفاصيل باقة ${item.capital}`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`rounded-xl border px-3 py-1 text-[11px] font-bold tabular ${
              isBusiness
                ? 'border-brand-400/35 bg-brand-500/15 text-brand-700'
                : 'border-brand-900/10 bg-brand-50 text-ink-600'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-xl leading-none" aria-hidden>
            {market.flag}
          </span>
        </div>

        <p className="mt-5 text-[11.5px] font-medium text-ink-600">رأس المال</p>
        <p
          className={`mt-1.5 font-display font-extrabold tabular ${
            isUsd ? 'text-3xl' : 'text-2xl sm:text-[1.7rem]'
          } ${isBusiness ? 'text-gradient-brand' : 'text-ink-950'}`}
        >
          {item.capital}
        </p>

        <div className="mt-5 space-y-2.5 border-t border-brand-900/8 pt-5">
          <Row
            label={isBusiness ? 'العائد اليومي المعلن' : 'العائد اليومي المعلن'}
            value={item.returns}
            accent
          />
          <Row label="مدة الاستثمار" value={item.duration} />
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-600 transition group-hover:gap-2.5">
          عرض التفاصيل
          <Icon name="arrowLeft" size={14} />
        </span>
      </button>

      <div className="px-6 pb-6">
        {market.id === 'ae' && isBusiness ? (
          <a
            href={telegramLink(inquiry)}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sky-500/25 bg-sky-50 px-4 py-3 text-[13px] font-bold text-sky-700 transition hover:border-sky-500/50 hover:bg-sky-100 hover:text-sky-800"
          >
            <TelegramMark size={17} />
            استفسر عبر تيليجرام
          </a>
        ) : (
          <ContactMenu
            inquiry={inquiry}
            className="w-full"
            triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-900/12 bg-brand-50/50 px-4 py-3 text-[13px] font-bold text-ink-900 transition hover:border-brand-400/45 hover:bg-brand-500/10 hover:text-ink-950"
            trigger={
              <>
                {isBusiness ? 'تواصل للاستفسار' : 'استفسر عن الباقة'}
                <Icon name="chevronDown" size={15} />
              </>
            }
          />
        )}
      </div>
    </article>
  )
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[12px] text-ink-600">{label}</span>
      <span
        className={`text-[13.5px] font-bold tabular ${accent ? 'text-brand-600' : 'text-ink-900'}`}
      >
        {value}
      </span>
    </div>
  )
}
