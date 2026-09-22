import { JOURNEY_STEPS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-28 py-12 sm:py-16 lg:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-900/10 bg-gradient-to-b from-brand-50/70 to-white p-7 sm:p-10 lg:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid-fade bg-grid opacity-25 [mask-image:radial-gradient(70%_60%_at_50%_100%,black,transparent)]" />
            <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl" />
          </div>

          <div className="relative">
            <SectionHeading
              eyebrow="رحلة المستخدم"
              icon="rocket"
              title={
                <>
                  كيف <span className="text-gradient-brand">تبدأ؟</span>
                </>
              }
              description="خمس خطوات بسيطة من الاستعراض حتى المشاركة — بدون تسجيل أو لوحة تحكم."
            />

            <ol className="relative mt-9 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {JOURNEY_STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 100} as="li">
                  <div className="group relative h-full">
                    <div className="card card-hover h-full p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-3xl font-black text-brand-300 transition group-hover:text-brand-600 tabular">
                          {step.n}
                        </span>
                        <span className="h-8 w-8 rounded-full border border-brand-400/25 bg-brand-500/10" />
                      </div>
                      <h3 className="mt-5 text-[15px] font-bold text-ink-950">{step.title}</h3>
                      <p className="mt-2.5 text-[12.5px] leading-6 text-ink-700">{step.desc}</p>
                    </div>
                    {i < JOURNEY_STEPS.length - 1 ? (
                      <span
                        aria-hidden
                        className="absolute -left-3 top-1/2 hidden h-px w-6 bg-gradient-to-l from-brand-400/60 to-transparent lg:block"
                      />
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
