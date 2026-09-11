import { useEffect } from 'react'
import { BRAND, RISK_DISCLAIMER } from '../../config/site'
import { telegramLink, whatsappLink, type Market, type PackageItem } from '../../data/content'
import { ContactButton } from '../ui/Button'
import { Icon } from '../ui/Icon'

type PackageModalProps = {
  item: PackageItem | null
  market: Market | null
  isBusiness?: boolean
  onClose: () => void
}

export function PackageModal({ item, market, isBusiness, onClose }: PackageModalProps) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item || !market) return null

  const inquiry = `${market.label} — ${item.capital}${isBusiness ? ' (فئة رجال الأعمال)' : ''}`

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className="card relative z-10 w-full max-w-lg animate-fade-up p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition hover:text-white"
          aria-label="إغلاق"
        >
          <Icon name="close" size={16} />
        </button>

        <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden>
            {market.flag}
          </span>
          <div>
            <p className="text-[12px] text-white/45">
              {BRAND.name} · {isBusiness ? 'فئة رجال الأعمال' : 'عرض استثماري'}
            </p>
            <h3 className="mt-0.5 text-lg font-bold">
              {market.label} — {market.currency}
            </h3>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-ink-900/60 p-5">
          <p className="text-[12px] text-white/45">رأس المال</p>
          <p className="mt-1 font-display text-3xl font-extrabold text-gradient-brand tabular">
            {item.capital}
          </p>
        </div>

        <dl className="mt-4 divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <Row label="العائد اليومي المعلن" value={item.returns} />
          <Row label="مدة الاستثمار" value={item.duration} />
          <Row label="السوق" value={`${market.flag} ${market.label}`} />
          <Row label="طريقة التواصل" value="واتساب أو تيليجرام" />
        </dl>

        <p className="mt-5 text-[12px] leading-6 text-white/45">{RISK_DISCLAIMER}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ContactButton
            channel="whatsapp"
            href={whatsappLink(inquiry)}
            label="تواصل عبر واتساب"
            className="w-full"
          />
          <ContactButton
            channel="telegram"
            href={telegramLink(inquiry)}
            label="تواصل عبر تيليجرام"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3.5">
      <dt className="text-[13px] text-white/50">{label}</dt>
      <dd className="text-[14px] font-bold text-white tabular">{value}</dd>
    </div>
  )
}
