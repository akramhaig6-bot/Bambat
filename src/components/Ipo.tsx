import { IPO_FIELDS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Icon } from './ui/Icon'
import { ContactMenu } from './ui/ContactMenu'

export function Ipo() {
  return (
    <section id="ipo" className="relative scroll-mt-28 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="الاكتتابات"
          icon="document"
          title={
            <>
              اكتتابات وفرص <span className="text-gradient-brand">استثمارية</span>
            </>
          }
          description="نوفر مساحة للتعريف بالفرص الاستثمارية والاكتتابات المتاحة، مع عرض أهم المعلومات والشروط قبل اتخاذ قرار المشاركة."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* بطاقة الاكتتاب 1 */}
          <Reveal>
            <article className="card card-top-glow card-hover flex h-full flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="eyebrow">
                    <Icon name="sparkle" size={15} />
                    فرصة مطروحة
                  </span>
                  <h3 className="mt-4 text-xl font-bold">اكتتاب جديد</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-50 px-3 py-1.5 text-[11.5px] font-bold text-emerald-700">
                  <span className="relative grid h-2 w-2 place-items-center">
                    <span className="absolute inline-flex h-3.5 w-3.5 animate-pulse-ring rounded-full bg-emerald-400/50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  الحالة: متاح
                </span>
              </div>

              <dl className="mt-6 grid gap-2.5">
                {IPO_FIELDS.map((field) => (
                  <div
                    key={field.label}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-brand-900/8 bg-brand-50/50 px-4 py-3"
                  >
                    <dt className="text-[13px] text-ink-700">{field.label}:</dt>
                    <dd
                      className={`text-[13.5px] font-bold tabular ${
                        field.value === 'متاح' ? 'text-emerald-700' : 'text-ink-900'
                      }`}
                    >
                      {field.value === 'تحدد لاحقًا' ? '[تحدد لاحقًا]' : field.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ContactMenu
                  className="flex-1"
                  inquiry="الاكتتاب الجديد"
                  triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-900/12 bg-brand-50/50 px-4 py-3 text-[13px] font-bold text-ink-900 transition hover:border-brand-400/45 hover:bg-brand-500/10 hover:text-ink-950"
                  trigger={
                    <>
                      تفاصيل الاكتتاب
                      <Icon name="chevronDown" size={15} />
                    </>
                  }
                />
                <ContactMenu
                  className="flex-1"
                  align="start"
                  inquiry="الاكتتاب الجديد"
                  triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-brand-400 to-brand-600 px-4 py-3 text-[13px] font-bold text-white transition hover:from-brand-500 hover:to-brand-700"
                  trigger={
                    <>
                      تواصل معنا
                      <Icon name="chevronDown" size={15} />
                    </>
                  }
                />
              </div>
            </article>
          </Reveal>

          {/* بطاقة ترقب */}
          <Reveal delay={120}>
            <article className="card relative flex h-full flex-col items-center justify-center overflow-hidden border-dashed border-brand-900/12 bg-brand-50/30 p-10 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-2xl border border-brand-400/25 bg-brand-500/10 text-brand-600">
                <Icon name="document" size={28} />
              </span>
              <h3 className="mt-6 text-lg font-bold">فرص قادمة</h3>
              <p className="mt-3 max-w-sm text-[13.5px] leading-7 text-ink-700">
                يتم إضافة الفرص والاكتتابات الجديدة هنا مع بيان الحد الأدنى وقيمة المشاركة والمدة.
                تابع الصفحة أو تواصل مع فريقنا للاستفسار عن الفرص المتاحة حاليًا.
              </p>
              <div className="mt-7 w-full max-w-xs">
                <ContactMenu
                  className="w-full"
                  inquiry="الفرص والاكتتابات المتاحة"
                  triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-900/12 bg-brand-50/50 px-4 py-3 text-[13px] font-bold text-ink-900 transition hover:border-brand-400/45 hover:bg-brand-500/10 hover:text-ink-950"
                  trigger={
                    <>
                      استفسر عن الفرص
                      <Icon name="chevronDown" size={15} />
                    </>
                  }
                />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
