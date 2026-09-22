import { ADVANTAGES, ADVANTAGES_NOTE } from '../data/content'
import { Icon, type IconName } from './ui/Icon'
import { ContactMenu } from './ui/ContactMenu'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

/** قسم «كيف نضمن تفوقك في السوق؟» — الركائز الثلاث للمجتمع */
export function Advantages() {
  return (
    <section id="advantages" className="relative scroll-mt-28 py-12 sm:py-16 lg:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12%] top-10 h-[340px] w-[340px] rounded-full bg-brand-200/55 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-[300px] w-[300px] rounded-full bg-brand-100/70 blur-3xl" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow="لماذا بامبات"
          icon="rocket"
          title={
            <>
              كيف نضمن <span className="text-gradient-brand">تفوقك في السوق؟</span>
            </>
          }
          description="ثلاث ركائز نبني عليها كل توصية نشاركها مع المجتمع: انتقاء مبكر للاكتتابات، قراءة حجمية دقيقة لإشارات البامب، وفحص كامل للعقود قبل النشر."
        />

        <div className="mt-9 grid gap-5 sm:mt-10 md:grid-cols-3">
          {ADVANTAGES.map((item, i) => (
            <Reveal key={item.title} delay={i * 110}>
              <article className="card card-top-glow card-hover group flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand-400/25 bg-gradient-to-br from-brand-500/20 to-transparent text-brand-600 transition group-hover:scale-105">
                    <Icon name={item.icon as IconName} size={22} />
                  </span>
                  <span className="font-display text-xs font-bold text-brand-900/25 tabular">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-7 text-ink-700">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mx-auto mt-9 flex max-w-3xl flex-col items-center gap-5 text-center">
            <ContactMenu
              align="center"
              inquiry="الانضمام إلى المجتمع وإشارات البامب"
              triggerClassName="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-brand-400 to-brand-600 px-6 py-3.5 text-base font-bold text-white shadow-[0_14px_40px_-14px_rgba(18,164,105,0.55)] transition hover:from-brand-500 hover:to-brand-700"
              trigger={
                <>
                  انضم الآن إلى المجتمع
                  <Icon
                    name="chevronDown"
                    size={17}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </>
              }
            />

            <p className="flex items-start justify-center gap-2 text-[12.5px] leading-6 text-ink-600">
              <Icon name="shield" size={16} className="mt-0.5 shrink-0 text-brand-500" />
              {ADVANTAGES_NOTE}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
