import { DURATIONS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { ContactMenu } from './ui/ContactMenu'
import { Icon } from './ui/Icon'

export function Durations() {
  return (
    <section id="durations" className="relative scroll-mt-28 py-12 sm:py-16 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="أنظمة الاشتراك"
          icon="clock"
          title={
            <>
              اختر مدة <span className="text-gradient-brand">الاستثمار</span>
            </>
          }
          description="تختلف مدة كل باقة حسب المنتج والشروط. اختر النظام المناسب ثم تواصل معنا لمعرفة آلية التسوية والدفعات."
        />

        <div className="mt-9 sm:mt-10 grid gap-5 lg:grid-cols-3">
          {DURATIONS.map((d, i) => (
            <Reveal key={d.title} delay={i * 110}>
              <article
                className={`card card-top-glow card-hover relative flex h-full flex-col p-7 sm:p-8 ${
                  d.featured ? 'border-brand-400/35 bg-gradient-to-b from-brand-500/[0.09] to-white' : ''
                }`}
              >
                {d.featured ? (
                  <span className="absolute left-6 top-6 rounded-full bg-gradient-to-l from-brand-400 to-brand-600 px-3 py-1 text-[11px] font-bold text-white">
                    الأكثر طلبًا
                  </span>
                ) : null}

                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-brand-400/25 bg-brand-500/[0.12] text-brand-600">
                  <Icon name="clock" size={24} />
                </span>

                <h3 className="mt-6 font-display text-3xl font-extrabold tabular">{d.title}</h3>
                <p className="mt-1.5 text-[13.5px] font-semibold text-brand-600">{d.subtitle}</p>
                <p className="mt-4 flex-1 text-[13.5px] leading-7 text-ink-700">{d.desc}</p>

                <div className="mt-7">
                  <ContactMenu
                    className="w-full"
                    inquiry={`مدة ${d.title}`}
                    triggerClassName={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                      d.featured
                        ? 'bg-gradient-to-l from-brand-400 to-brand-600 text-white hover:from-brand-500 hover:to-brand-700'
                        : 'border border-brand-900/12 bg-brand-50/50 text-ink-900 hover:border-brand-400/45 hover:bg-brand-500/10 hover:text-ink-950'
                    }`}
                    trigger={
                      <>
                        استفسر الآن
                        <Icon name="chevronDown" size={16} />
                      </>
                    }
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
