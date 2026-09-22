import { BRAND, RISK_DISCLAIMER } from '../config/site'
import { HERO_STATS } from '../data/content'
import { scrollToId } from '../hooks/useActiveSection'
import { ContactMenu } from './ui/ContactMenu'
import { Icon, type IconName } from './ui/Icon'
import { Reveal } from './ui/Reveal'

const statIcons: IconName[] = ['chart', 'sparkle', 'wallet']

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-36 lg:pb-16">
      {/* خلفية */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-fade bg-grid opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] animate-float rounded-full bg-radial-brand blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[360px] w-[360px] rounded-full bg-brand-200/60 blur-3xl" />
      </div>

      <div className="container-x grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* النص */}
        <div className="text-center lg:text-right">
          <Reveal>
            <span className="eyebrow">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute inline-flex h-4 w-4 animate-pulse-ring rounded-full bg-brand-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              حلول استثمارية متعددة الأسواق
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-balance text-4xl font-black leading-[1.22] sm:text-5xl lg:text-[3.6rem]">
              <span className="text-gradient">حلول مالية واستثمارية</span>
              <br className="hidden sm:block" />{' '}
              <span className="text-gradient-brand">مصممة لرأس مالك</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-ink-800 sm:text-lg lg:mx-0">
              اكتشف مجموعة من الحلول الاستثمارية التي تشمل حسابات PAMM، الفرص الاستثمارية، الاكتتابات
              والباقات المالية بمستويات مختلفة من رأس المال والعملات.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <button
                onClick={() => scrollToId('packages')}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-l from-brand-400 to-brand-600 px-5 py-3.5 text-base font-bold text-white shadow-[0_14px_40px_-14px_rgba(18,164,105,0.55)] transition hover:from-brand-500 hover:to-brand-700"
              >
                استعرض الباقات
                <Icon name="arrowLeft" size={18} className="transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                onClick={() => scrollToId('services')}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-500/30 bg-white px-5 py-3.5 text-base font-semibold text-brand-700 shadow-glow-soft transition hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-800"
              >
                اكتشف عروضنا
              </button>

              <ContactMenu
                align="center"
                triggerClassName="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-900/15 bg-brand-50/70 px-5 py-3.5 text-base font-semibold text-ink-950 backdrop-blur transition hover:border-brand-400/50 hover:bg-brand-500/10 sm:w-auto"
                trigger={
                  <>
                    تواصل معنا
                    <Icon name="chevronDown" size={17} />
                  </>
                }
              />
            </div>
          </Reveal>

          {/* 3 مؤشرات */}
          <Reveal delay={340}>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {HERO_STATS.map((stat, i) => (
                <div
                  key={stat.title}
                  className="card card-top-glow card-hover p-4 text-right sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand-400/25 bg-brand-500/[0.12] text-brand-600">
                      <Icon name={statIcons[i]} size={19} />
                    </span>
                    <div>
                      <p className="font-display text-[15px] font-bold text-ink-950">{stat.title}</p>
                      <p className="mt-0.5 text-xs leading-5 text-ink-700">{stat.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={420}>
            <p className="mt-8 flex items-start justify-center gap-2 text-[12.5px] leading-6 text-ink-600 lg:justify-start">
              <Icon name="shield" size={16} className="mt-0.5 shrink-0 text-brand-500" />
              {RISK_DISCLAIMER}
            </p>
          </Reveal>
        </div>

        {/* العنصر البصري */}
        <Reveal delay={200} className="relative">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-radial-brand opacity-60 blur-2xl"
      />
      <div className="relative space-y-4">
        {/* بطاقة رئيسية */}
        <div className="card card-top-glow p-6 sm:p-7">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-ink-600">محفظة استثمارية — {BRAND.name}</p>
              <p className="mt-2 font-display text-3xl font-extrabold text-ink-950 sm:text-4xl tabular">
                <span className="text-gradient-brand">متعددة العملات</span>
              </p>
            </div>
            <span className="rounded-xl border border-brand-400/25 bg-brand-500/[0.12] px-3 py-1.5 text-[11px] font-bold text-brand-700">
              PAMM · اكتتابات · باقات
            </span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { label: 'الأسواق', value: '4' },
              { label: 'الباقات', value: '+40' },
              { label: 'طرق الدفع', value: '2' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-brand-900/10 bg-white px-3 py-4 text-center"
              >
                <p className="font-display text-2xl font-extrabold text-ink-950 tabular">{item.value}</p>
                <p className="mt-1 text-[11px] text-ink-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2.5">
            {[
              { flag: '🇸🇦', name: 'السعودية', value: 'ريال سعودي', tone: 'from-brand-400/80 to-brand-600/40' },
              { flag: '🇦🇪', name: 'الإمارات', value: 'درهم', tone: 'from-brand-300/70 to-brand-700/40' },
              { flag: '🇰🇼', name: 'الكويت', value: 'دينار', tone: 'from-emerald-300/70 to-emerald-700/40' },
              { flag: '💵', name: 'الدولار', value: 'USD', tone: 'from-brand-200 to-brand-600/60' },
            ].map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between rounded-2xl border border-brand-900/8 bg-brand-50/50 px-4 py-3 transition hover:border-brand-400/30 hover:bg-brand-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{row.flag}</span>
                  <div className="text-right">
                    <p className="text-[13px] font-semibold text-ink-950">{row.name}</p>
                    <p className="text-[11px] text-ink-600">{row.value}</p>
                  </div>
                </div>
                <span className={`h-8 w-16 rounded-full bg-gradient-to-l ${row.tone} opacity-70`} />
              </div>
            ))}
          </div>
        </div>

        {/* بطاقة عائمة */}
        <div className="absolute -bottom-8 left-2 hidden animate-float rounded-2xl border border-brand-900/10 bg-white px-4 py-3 shadow-glow backdrop-blur-xl sm:block">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/15 text-brand-600">
              <Icon name="trendUp" size={18} />
            </span>
            <div>
              <p className="text-[11px] text-ink-600">تواصل مباشر</p>
              <p className="text-[13px] font-bold text-ink-950">واتساب · تيليجرام</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
