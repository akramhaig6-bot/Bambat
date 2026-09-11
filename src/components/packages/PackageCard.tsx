import type { Market, PackageItem } from '../../data/content'
import { Icon } from '../ui/Icon'
import { ContactMenu } from '../ui/ContactMenu'
import { WhatsAppMark } from '../ui/Button'
import { whatsappLink } from '../../data/content'

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
        isBusiness ? 'border-brand-400/[0.22] bg-gradient-to-b from-brand-500/[0.07] to-white/[0.02]' : ''
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
                ? 'border-brand-400/35 bg-brand-500/15 text-brand-200'
                : 'border-white/10 bg-white/[0.05] text-white/45'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-xl leading-none" aria-hidden>
            {market.flag}
          </span>
        </div>

        <p className="mt-5 text-[11.5px] font-medium text-white/45">رأس المال</p>
        <p
          className={`mt-1.5 font-display font-extrabold tabular ${
            isUsd ? 'text-3xl' : 'text-2xl sm:text-[1.7rem]'
          } ${isBusiness ? 'text-gradient-brand' : 'text-white'}`}
        >
          {item.capital}
        </p>

        <div className="mt-5 space-y-2.5 border-t border-white/[0.08] pt-5">
          <Row
            label={isBusiness ? 'العائد اليومي المعلن' : 'العائد اليومي المعلن'}
            value={item.returns}
            accent
          />
          <Row label="مدة الاستثمار" value={item.duration} />
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-300/90 transition group-hover:gap-2.5">
          عرض التفاصيل
          <Icon name="arrowLeft" size={14} />
        </span>
      </button>

      <div className="px-6 pb-6">
        {market.id === 'ae' && isBusiness ? (
          <a
            href={whatsappLink(inquiry)}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300/25 bg-emerald-400/[0.12] px-4 py-3 text-[13px] font-bold text-emerald-100 transition hover:border-emerald-300/60 hover:bg-emerald-400/[0.22] hover:text-white"
          >
            <WhatsAppMark size={17} />
            استفسر عبر واتساب
          </a>
        ) : (
          <ContactMenu
            inquiry={inquiry}
            className="w-full"
            triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-4 py-3 text-[13px] font-bold text-white/85 transition hover:border-brand-400/45 hover:bg-brand-500/10 hover:text-white"
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
      <span className="text-[12px] text-white/45">{label}</span>
      <span
        className={`text-[13.5px] font-bold tabular ${accent ? 'text-brand-300' : 'text-white/85'}`}
      >
        {value}
      </span>
    </div>
  )
}
