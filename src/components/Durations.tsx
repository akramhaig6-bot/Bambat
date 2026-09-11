import { DURATIONS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { ContactMenu } from './ui/ContactMenu'
import { Icon } from './ui/Icon'

export function Durations() {
  return (
    <section id="durations" className="relative scroll-mt-28 py-20 lg:py-28">
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

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {DURATIONS.map((d, i) => (
            <Reveal key={d.title} delay={i * 110}>
              <article
                className={`card card-top-glow card-hover relative flex h-full flex-col p-7 sm:p-8 ${
                  d.featured ? 'border-brand-400/35 bg-gradient-to-b from-brand-500/[0.09] to-white/[0.02]' : ''
                }`}
              >
                {d.featured ? (
                  <span className="absolute left-6 top-6 rounded-full bg-gradient-to-l from-brand-400 to-brand-600 px-3 py-1 text-[11px] font-bold text-ink-950">
                    الأكثر طلبًا
                  </span>
                ) : null}

                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-brand-400/25 bg-brand-500/[0.12] text-brand-300">
                  <Icon name="clock" size={24} />
                </span>

                <h3 className="mt-6 font-display text-3xl font-extrabold tabular">{d.title}</h3>
                <p className="mt-1.5 text-[13.5px] font-semibold text-brand-300">{d.subtitle}</p>
                <p className="mt-4 flex-1 text-[13.5px] leading-7 text-white/55">{d.desc}</p>

                <div className="mt-7">
                  <ContactMenu
                    className="w-full"
                    inquiry={`مدة ${d.title}`}
                    triggerClassName={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                      d.featured
                        ? 'bg-gradient-to-l from-brand-400 to-brand-600 text-ink-950 hover:from-brand-300 hover:to-brand-500'
                        : 'border border-white/[0.12] bg-white/[0.03] text-white/85 hover:border-brand-400/45 hover:bg-brand-500/10 hover:text-white'
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
