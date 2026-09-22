import { SERVICES } from '../data/content'
import { scrollToId } from '../hooks/useActiveSection'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Icon, type IconName } from './ui/Icon'

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 py-12 sm:py-16 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="خدماتنا"
          icon="sparkle"
          title={
            <>
              أربع مسارات واضحة <span className="text-gradient-brand">للاستثمار</span>
            </>
          }
          description="اختر المسار المناسب لك، ثم تواصل مع فريقنا مباشرة عبر تيليجرام لمعرفة التفاصيل والشروط."
        />

        <div className="mt-9 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <article className="card card-top-glow card-hover group flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand-400/25 bg-gradient-to-br from-brand-500/20 to-transparent text-brand-600 transition group-hover:scale-105">
                    <Icon name={service.icon as IconName} size={22} />
                  </span>
                  <span className="font-display text-xs font-bold text-brand-900/25 tabular">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold">{service.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-7 text-ink-700">{service.desc}</p>

                <button
                  onClick={() => scrollToId(service.target)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-900/12 bg-brand-50/50 px-4 py-2.5 text-[13px] font-semibold text-ink-900 transition hover:border-brand-400/45 hover:bg-brand-500/10 hover:text-ink-950"
                >
                  {service.cta}
                  <Icon name="arrowLeft" size={16} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
