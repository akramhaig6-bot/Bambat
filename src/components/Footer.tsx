import { useState } from 'react'
import { BRAND, CONTACT, FOOTER_LINKS, RISK_FOOTER } from '../config/site'
import { scrollToId } from '../hooks/useActiveSection'
import { Logo } from './ui/Logo'
import { ContactButton } from './ui/Button'
import { Icon } from './ui/Icon'
import { LegalModal, type LegalKey } from './LegalModal'

const legalKeys: LegalKey[] = ['terms', 'privacy', 'disclaimer', 'risk']

export function Footer() {
  const [legal, setLegal] = useState<LegalKey | null>(null)

  return (
    <footer className="relative mt-8 border-t border-brand-900/10 bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-64 w-[620px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
      </div>

      <div className="container-x relative py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* الهوية */}
          <div>
            <div className="flex items-center gap-3">
              <Logo size={44} />
              <div>
                <p className="font-display text-xl font-extrabold text-ink-950">{BRAND.name}</p>
                <p className="mt-0.5 text-[12.5px] text-ink-600">{BRAND.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[13.5px] leading-7 text-ink-700">
              صفحة تعريفية بخدماتنا في حسابات PAMM، الفرص الاستثمارية، الاكتتابات والباقات المالية.
              لا يوجد تسجيل أو لوحة تحكم — التواصل يتم مباشرة مع فريقنا.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['🇸🇦', '🇦🇪', '🇰🇼', '💵'].map((f) => (
                <span
                  key={f}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-brand-900/10 bg-brand-50/70 text-base"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* روابط */}
          <nav aria-label="روابط الصفحة">
            <h4 className="text-[13px] font-bold text-ink-950">روابط</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.تصفح.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-[13.5px] text-ink-700 transition hover:text-brand-600"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* قانوني */}
          <nav aria-label="الروابط القانونية">
            <h4 className="text-[13px] font-bold text-ink-950">قانوني</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.قانوني.map((link, i) => (
                <li key={link.id}>
                  <button
                    onClick={() => setLegal(legalKeys[i])}
                    className="text-[13.5px] text-ink-700 transition hover:text-brand-600"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* تواصل */}
          <div>
            <h4 className="text-[13px] font-bold text-ink-950">تواصل</h4>
            <div className="mt-4 space-y-2.5">
              <ContactButton
                channel="whatsapp"
                href={CONTACT.whatsapp}
                label={CONTACT.whatsappLabel}
                className="w-full justify-start"
              />
              <ContactButton
                channel="telegram"
                href={CONTACT.telegram}
                label={CONTACT.telegramLabel}
                className="w-full justify-start"
              />
            </div>
            <p className="mt-4 flex items-start gap-2 text-[12px] leading-6 text-ink-600">
              <Icon name="clock" size={15} className="mt-0.5 shrink-0 text-brand-500" />
              الرد يتم عبر القنوات الرسمية فقط — لا تقم بتحويل أي مبلغ قبل التأكد من بيانات الدفع.
            </p>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-right">
          <p className="text-[12.5px] text-ink-600">
            © {BRAND.since} {BRAND.name} — جميع الحقوق محفوظة.
          </p>
          <button
            onClick={() => scrollToId('home')}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-900/10 bg-brand-50/50 px-4 py-2 text-[12.5px] font-semibold text-ink-800 transition hover:border-brand-400/40 hover:text-ink-950"
          >
            العودة للأعلى
            <Icon name="chevronDown" size={15} className="rotate-180" />
          </button>
        </div>

        <p className="mt-6 flex items-start gap-2 rounded-2xl border border-brand-900/10 bg-brand-50/40 p-4 text-[12px] leading-7 text-ink-600">
          <Icon name="shield" size={16} className="mt-0.5 shrink-0 text-brand-500" />
          {RISK_FOOTER}
        </p>
      </div>

      <LegalModal doc={legal} onClose={() => setLegal(null)} />
    </footer>
  )
}
