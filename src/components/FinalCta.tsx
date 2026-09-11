import { CONTACT } from '../config/site'
import { RISK_DISCLAIMER } from '../config/site'
import { Reveal } from './ui/Reveal'
import { ContactButton } from './ui/Button'
import { Icon } from './ui/Icon'

export function FinalCta() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-l from-ink-800/70 via-ink-900/80 to-ink-950/90 px-6 py-12 text-center sm:px-12 lg:py-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-64 w-[520px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
              <div className="absolute inset-0 bg-grid-fade bg-grid opacity-20 [mask-image:radial-gradient(60%_70%_at_50%_0%,black,transparent)]" />
            </div>

            <div className="relative">
              <span className="eyebrow">
                <Icon name="rocket" size={16} />
                الخطوة التالية
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold sm:text-4xl">
                ابدأ بخطوة <span className="text-gradient-brand">مدروسة</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-white/60">
                استعرض الفرص، تعرف على الشروط والمخاطر، ثم تواصل مع فريقنا للحصول على التفاصيل.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ContactButton
                  channel="whatsapp"
                  href={CONTACT.whatsapp}
                  label={CONTACT.whatsappLabel}
                  size="lg"
                  className="w-full sm:w-auto"
                />
                <ContactButton
                  channel="telegram"
                  href={CONTACT.telegram}
                  label={CONTACT.telegramLabel}
                  size="lg"
                  className="w-full sm:w-auto"
                />
              </div>

              <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-[12px] leading-6 text-white/35">
                <Icon name="shield" size={15} className="mt-0.5 shrink-0" />
                {RISK_DISCLAIMER}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
