import { createPortal } from 'react-dom'
import { useDialog } from '../../hooks/useDialog'
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
  const dialogRef = useDialog(Boolean(item), onClose)

  if (!item || !market) return null

  const inquiry = `${market.label} — ${item.capital}${isBusiness ? ' (فئة رجال الأعمال)' : ''}`

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center" role="dialog" aria-modal="true" aria-labelledby="package-dialog-title">
      <div className="absolute inset-0 bg-brand-950/40 backdrop-blur-sm" onClick={onClose} />
      <div ref={dialogRef} tabIndex={-1} className="card relative z-10 max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain w-full max-w-lg animate-fade-up p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-900/10 bg-brand-50/70 text-ink-800 transition hover:text-ink-950"
          aria-label="إغلاق"
        >
          <Icon name="close" size={16} />
        </button>

        <div className="flex items-center gap-3 pl-9">
          <span className="text-2xl" aria-hidden>
            {market.flag}
          </span>
          <div>
            <p className="text-[12px] text-ink-600">
              {BRAND.name} · {isBusiness ? 'فئة رجال الأعمال' : 'عرض استثماري'}
            </p>
            <h3 id="package-dialog-title" className="mt-0.5 text-lg font-bold">
              {market.label} — {market.currency}
            </h3>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-brand-900/10 bg-white p-5">
          <p className="text-[12px] text-ink-600">رأس المال</p>
          <p className="mt-1 font-display text-3xl font-extrabold text-gradient-brand tabular">
            {item.capital}
          </p>
        </div>

        <dl className="mt-4 divide-y divide-brand-900/8 overflow-hidden rounded-2xl border border-brand-900/10 bg-brand-50/40">
          <Row label="العائد اليومي المعلن" value={item.returns} />
          <Row label="مدة الاستثمار" value={item.duration} />
          <Row label="السوق" value={`${market.flag} ${market.label}`} />
          <Row label="طريقة التواصل" value="واتساب أو تيليجرام" />
        </dl>

        <p className="mt-5 text-[12px] leading-6 text-ink-600">{RISK_DISCLAIMER}</p>

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
    </div>,
    document.body,
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3.5">
      <dt className="text-[13px] text-ink-700">{label}</dt>
      <dd className="text-[14px] font-bold text-ink-950 tabular">{value}</dd>
    </div>
  )
}
