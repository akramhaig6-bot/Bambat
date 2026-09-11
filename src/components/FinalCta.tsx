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
          {/* لوحة خضراء صلبة — لمسة اللون الثانية في الهوية (أبيض + أخضر) */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-l from-brand-600 via-brand-700 to-brand-900 px-6 py-12 text-center shadow-glow-brand sm:px-12 lg:py-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-64 w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute inset-0 bg-grid-fade bg-grid opacity-25 [mask-image:radial-gradient(60%_70%_at_50%_0%,black,transparent)]" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white sm:text-sm">
                <Icon name="rocket" size={16} />
                الخطوة التالية
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold text-white sm:text-4xl">
                ابدأ بخطوة{' '}
                <span className="bg-gradient-to-l from-white to-brand-200 bg-clip-text text-transparent">
                  مدروسة
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-white/85">
                استعرض الفرص، تعرف على الشروط والمخاطر، ثم تواصل مع فريقنا للحصول على التفاصيل.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ContactButton
                  channel="whatsapp"
                  href={CONTACT.whatsapp}
                  label={CONTACT.whatsappLabel}
                  size="lg"
                  className="w-full border-white/30 bg-white text-brand-800 hover:border-white hover:bg-brand-50 hover:text-brand-900 sm:w-auto"
                />
                <ContactButton
                  channel="telegram"
                  href={CONTACT.telegram}
                  label={CONTACT.telegramLabel}
                  size="lg"
                  className="w-full border-white/30 bg-white/15 text-white hover:border-white/60 hover:bg-white/25 hover:text-white sm:w-auto"
                />
              </div>

              <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-[12px] leading-6 text-white/70">
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
