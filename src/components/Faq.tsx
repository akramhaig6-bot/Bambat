import { useState } from 'react'
import { FAQ_ITEMS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Icon } from './ui/Icon'
import { ContactMenu } from './ui/ContactMenu'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative scroll-mt-28 py-12 sm:py-16 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          icon="shield"
          title={
            <>
              إجابات عن أكثر <span className="text-gradient-brand">الأسئلة تكرارًا</span>
            </>
          }
          description="كل ما تحتاج معرفته قبل التواصل مع فريقنا."
        />

        <div className="mx-auto mt-9 sm:mt-10 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={Math.min(i, 5) * 70}>
                <div
                  className={`card overflow-hidden transition ${
                    isOpen ? 'border-brand-400/35 bg-brand-50' : 'hover:border-brand-900/20'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    id={`faq-question-${i}`}
                    aria-controls={`faq-answer-${i}`}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border text-[12px] font-bold tabular ${
                          isOpen
                            ? 'border-brand-400/40 bg-brand-500/15 text-brand-700'
                            : 'border-brand-900/10 bg-brand-50/70 text-ink-600'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[15px] font-bold text-ink-950 sm:text-base">{item.q}</span>
                    </span>
                    <Icon
                      name="chevronDown"
                      size={19}
                      className={`shrink-0 text-ink-700 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pr-[4.25rem] text-[14px] leading-8 text-ink-800">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-brand-900/10 bg-brand-50/50 p-6 text-center sm:flex-row sm:justify-between sm:text-right">
            <p className="text-[14px] text-ink-800">لديك سؤال آخر؟ فريقنا جاهز للرد مباشرة.</p>
            <ContactMenu
              align="center"
              triggerClassName="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-l from-brand-400 to-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:from-brand-500 hover:to-brand-700"
              trigger={
                <>
                  اسأل فريقنا
                  <Icon name="chevronDown" size={16} />
                </>
              }
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
