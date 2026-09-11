import { CONTACT } from '../config/site'
import { PAYMENT_METHODS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { ContactButton } from './ui/Button'
import { Icon, type IconName } from './ui/Icon'

export function Payments() {
  return (
    <section id="payments" className="relative scroll-mt-28 py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[300px] w-[520px] -translate-x-1/2 rounded-full bg-brand-200/45 blur-3xl" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow="طرق الدفع"
          icon="wallet"
          title={
            <>
              طرق <span className="text-gradient-brand">الإيداع</span> المتاحة
            </>
          }
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {PAYMENT_METHODS.map((method, i) => (
            <Reveal key={method.title} delay={i * 110}>
              <article className="card card-top-glow card-hover flex items-center gap-5 p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-brand-400/25 bg-brand-500/[0.12] text-brand-600">
                  <Icon name={method.icon as IconName} size={26} />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{method.title}</h3>
                  <p className="mt-1 text-[13px] leading-6 text-ink-700">{method.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-50 p-5">
            <Icon name="shield" size={20} className="mt-0.5 shrink-0 text-amber-600" />
            <p className="text-[13.5px] leading-7 text-amber-900">
              لا تقم بإرسال أي مبلغ قبل التواصل مع فريقنا والتأكد من تفاصيل الباقة وعنوان الدفع
              الرسمي.
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex justify-center">
            <ContactButton
              channel="telegram"
              href={CONTACT.telegram}
              label="تواصل عبر تيليجرام"
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
