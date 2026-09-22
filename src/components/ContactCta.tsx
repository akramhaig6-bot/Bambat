import { CONTACT } from '../config/site'
import { Reveal } from './ui/Reveal'
import { Icon } from './ui/Icon'

export function ContactCta() {
  return (
    <section id="contact" className="relative scroll-mt-28 py-12 sm:py-16 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-400/20 bg-gradient-to-bl from-white via-brand-50/70 to-white p-8 text-center shadow-glow sm:p-12 lg:p-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl" />
              <div className="absolute inset-0 bg-grid-fade bg-grid opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
            </div>

            <div className="relative">
              <span className="eyebrow">
                <Icon name="handshake" size={16} />
                تواصل مباشر
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold leading-[1.25] sm:text-4xl lg:text-[2.7rem]">
                هل وجدت <span className="text-gradient-brand">الباقة المناسبة؟</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-ink-800">
                تواصل مباشرة مع فريقنا للحصول على تفاصيل الباقة، شروط الاشتراك، وآلية المشاركة.
              </p>

              <div className="mx-auto mt-10 max-w-md">
                <BigContact
                  title="تواصل عبر تيليجرام"
                  subtitle="مراسلتنا على تيليجرام"
                  href={CONTACT.telegram}
                />
              </div>

              <p className="mt-8 flex items-center justify-center gap-2 text-[13px] text-ink-600">
                <Icon name="check" size={16} className="text-brand-500" />
                لا تحتاج إلى إنشاء حساب. التواصل يتم مباشرة مع فريق الشركة.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function BigContact({
  title,
  subtitle,
  href,
}: {
  title: string
  subtitle: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex items-center gap-4 rounded-2xl border border-sky-500/25 bg-sky-50 p-5 text-right transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-100 sm:p-6"
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sky-500/15 text-sky-700">
        <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor" aria-hidden>
          <path d="M21.94 4.3 19.2 19.06c-.2.9-.74 1.12-1.5.7l-4.14-3.05-2 1.93c-.22.22-.4.4-.82.4l.29-4.16 7.57-6.84c.33-.29-.07-.45-.51-.16l-9.35 5.89-4.03-1.26c-.88-.27-.89-.88.18-1.3l15.74-6.07c.73-.27 1.36.17 1.12 1.3z" />
        </svg>
      </span>
      <span className="flex-1">
        <span className="block text-[15px] font-bold text-ink-950 sm:text-base">{title}</span>
        <span className="mt-1 block text-[12.5px] text-ink-700">{subtitle}</span>
      </span>
      <Icon
        name="arrowLeft"
        size={20}
        className="shrink-0 text-ink-600/70 transition group-hover:-translate-x-1 group-hover:text-ink-950"
      />
    </a>
  )
}
