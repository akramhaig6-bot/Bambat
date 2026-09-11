import { PAMM_STEPS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { ContactMenu } from './ui/ContactMenu'
import { Icon } from './ui/Icon'

export function Pamm() {
  return (
    <section id="pamm" className="relative scroll-mt-28 py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-400/[0.18] bg-gradient-to-bl from-ink-800/90 via-ink-900/85 to-ink-950/95 shadow-glow">
          {/* زخرفة */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid-fade bg-grid opacity-30 [mask-image:radial-gradient(70%_70%_at_80%_10%,black,transparent)]" />
            <div className="absolute -left-24 -top-24 h-[380px] w-[380px] rounded-full bg-brand-500/[0.18] blur-3xl" />
            <div className="absolute -bottom-32 right-[-5%] h-[320px] w-[320px] rounded-full bg-brand-700/25 blur-3xl" />
            <span className="absolute left-8 top-8 font-display text-[9rem] font-black text-white/[0.03]">
              PAMM
            </span>
          </div>

          <div className="relative p-7 sm:p-10 lg:p-14">
            <Reveal>
              <span className="eyebrow">
                <Icon name="chart" size={16} />
                إدارة رأس المال
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 max-w-3xl text-balance text-3xl font-extrabold leading-[1.25] sm:text-4xl">
                PAMM — إدارة رأس المال عبر{' '}
                <span className="text-gradient-brand">استراتيجيات متخصصة</span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-3xl text-[15px] leading-9 text-white/65 sm:text-base">
                يتيح نموذج PAMM تخصيص رأس المال ضمن استراتيجية تتم إدارتها من قبل مدير أو متداول وفق
                شروط وأهداف محددة. قبل المشاركة، يمكن للمستثمر الاطلاع على تفاصيل الاستراتيجية
                ومستوى المخاطر وشروطها.
              </p>
            </Reveal>

            {/* الخطوات */}
            <div className="relative mt-12">
              <div
                aria-hidden
                className="absolute right-0 top-9 hidden h-px w-full bg-gradient-to-l from-brand-400/45 via-white/10 to-transparent lg:block"
              />
              <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {PAMM_STEPS.map((step, i) => (
                  <Reveal key={step.n} delay={i * 110} as="li">
                    <div className="relative">
                      <span className="relative z-10 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl border border-brand-400/30 bg-ink-900/80 font-display text-2xl font-black text-brand-200 shadow-glow-brand tabular">
                        {step.n}
                      </span>
                      <h3 className="mt-5 text-[16px] font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-white/55">{step.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal delay={220}>
              <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] leading-6 text-white/45">
                  جميع الخطوات تتم عبر التواصل المباشر — لا يوجد تسجيل أو لوحة تحكم داخل الصفحة.
                </p>
                <ContactMenu
                  inquiry="PAMM"
                  triggerClassName="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-brand-400 to-brand-600 px-6 py-3.5 text-sm font-bold text-ink-950 shadow-[0_12px_35px_-14px_rgba(27,167,110,1)] transition hover:from-brand-300 hover:to-brand-500"
                  trigger={
                    <>
                      تواصل حول PAMM
                      <Icon name="chevronDown" size={17} />
                    </>
                  }
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
