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

              <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
                <BigContact
                  channel="whatsapp"
                  title="تواصل عبر واتساب"
                  subtitle="ابدأ المحادثة"
                  href={CONTACT.whatsapp}
                />
                <BigContact
                  channel="telegram"
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
  channel,
  title,
  subtitle,
  href,
}: {
  channel: 'whatsapp' | 'telegram'
  title: string
  subtitle: string
  href: string
}) {
  const isWa = channel === 'whatsapp'
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`group flex items-center gap-4 rounded-2xl border p-5 text-right transition duration-300 hover:-translate-y-1 sm:p-6 ${
        isWa
          ? 'border-emerald-500/25 bg-emerald-50 hover:border-emerald-500/40 hover:bg-emerald-100'
          : 'border-sky-500/25 bg-sky-50 hover:border-sky-500/40 hover:bg-sky-100'
      }`}
    >
      <span
        className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${
          isWa ? 'bg-emerald-500/15 text-emerald-700' : 'bg-sky-500/15 text-sky-700'
        }`}
      >
        <ChannelGlyph channel={channel} />
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

function ChannelGlyph({ channel }: { channel: 'whatsapp' | 'telegram' }) {
  return channel === 'whatsapp' ? (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.73.45 3.42 1.31 4.91L2 22l5.36-1.4a9.83 9.83 0 0 0 4.68 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 19.44 5.5 9.79 9.79 0 0 0 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.09.81.83-3.01-.19-.31a8.16 8.16 0 0 1-1.26-4.33c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 8.24 8.22c0 4.54-3.7 8.17-8.31 8.17z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor" aria-hidden>
      <path d="M21.94 4.3 19.2 19.06c-.2.9-.74 1.12-1.5.7l-4.14-3.05-2 1.93c-.22.22-.4.4-.82.4l.29-4.16 7.57-6.84c.33-.29-.07-.45-.51-.16l-9.35 5.89-4.03-1.26c-.88-.27-.89-.88.18-1.3l15.74-6.07c.73-.27 1.36.17 1.12 1.3z" />
    </svg>
  )
}
