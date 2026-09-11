import { BRAND } from '../config/site'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Icon } from './ui/Icon'
import { scrollToId } from '../hooks/useActiveSection'

const points = [
  { icon: 'chart', title: 'حسابات PAMM', desc: 'إدارة رأس المال عبر استراتيجيات متخصصة.' },
  { icon: 'sparkle', title: 'فرص واكتتابات', desc: 'الاطلاع على الشروط قبل اتخاذ القرار.' },
  { icon: 'wallet', title: 'باقات مرنة', desc: 'مبالغ وعملات ومدد تناسب شرائح مختلفة.' },
  { icon: 'handshake', title: 'تواصل مباشر', desc: 'فريقنا يوضح الخطوات وبيانات الدفع الرسمية.' },
] as const

export function About() {
  return (
    <section id="about" className="relative scroll-mt-28 py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-15%] top-1/3 h-[320px] w-[320px] rounded-full bg-brand-800/25 blur-3xl" />
      </div>

      <div className="container-x">
        <SectionHeading
          eyebrow="من نحن"
          icon="handshake"
          title={
            <>
              شريكك في عالم <span className="text-gradient-brand">الفرص المالية</span>
            </>
          }
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <div className="card card-top-glow p-7 sm:p-9">
              <p className="text-[15px] leading-9 text-white/70 sm:text-base">
                تقدم <span className="font-bold text-white">{BRAND.name}</span> حلولًا وخيارات
                استثمارية مصممة لتناسب شرائح مختلفة من المستثمرين.
              </p>
              <p className="mt-4 text-[15px] leading-9 text-white/70 sm:text-base">
                تشمل خدماتنا حسابات PAMM، والفرص الاستثمارية، والاكتتابات، والباقات المخصصة لرؤوس
                الأموال المختلفة.
              </p>
              <p className="mt-4 text-[15px] leading-9 text-white/70 sm:text-base">
                هدفنا هو تقديم تجربة واضحة وسهلة للمستثمر، تبدأ من التعرف على الفرصة وتنتهي بالتواصل
                المباشر مع فريقنا لمعرفة شروط المشاركة.
              </p>

              <div className="mt-7">
                <button
                  onClick={() => scrollToId('services')}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-400/50 hover:bg-brand-500/10"
                >
                  تعرف على خدماتنا
                  <Icon name="arrowLeft" size={17} />
                </button>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="card card-hover h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-brand-400/25 bg-brand-500/[0.12] text-brand-300">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-white/55">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
