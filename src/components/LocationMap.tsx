import { Reveal } from './ui/Reveal'
import { Icon } from './ui/Icon'

export function LocationMap() {
  // إحداثيات الدمام، المملكة العربية السعودية
  const dammamLat = 26.3927
  const dammamLon = 49.9777
  const zoom = 12

  const openStreetMapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${dammamLon - 0.12}%2C${dammamLat - 0.08}%2C${dammamLon + 0.12}%2C${dammamLat + 0.08}&layer=mapnik&marker=${dammamLat}%2C${dammamLon}`
  const openStreetMapLink = `https://www.openstreetmap.org/?mlat=${dammamLat}&mlon=${dammamLon}#map=${zoom}/${dammamLat}/${dammamLon}`

  return (
    <section id="location" className="relative py-16 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-900/10 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">
              <Icon name="pin" size={16} />
              موقعنا
            </span>
            <h2 className="mt-5 text-balance text-3xl font-extrabold text-ink-950 sm:text-4xl">
              تفضل بزيارتنا في{' '}
              <span className="bg-gradient-to-l from-brand-600 to-brand-800 bg-clip-text text-transparent">
                الدمام
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-8 text-ink-600">
              المملكة العربية السعودية — المنطقة الشرقية، الدمام.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-brand-900/10 bg-white shadow-glow-brand/30">
            <div className="relative">
              <iframe
                title="خريطة الدمام"
                src={openStreetMapSrc}
                className="h-[380px] w-full sm:h-[480px] lg:h-[540px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
              {/* بطاقة معلومات عائمة */}
              <div className="pointer-events-none absolute right-4 top-4 max-w-[260px] rounded-2xl border border-brand-900/10 bg-white/95 p-4 shadow-lg backdrop-blur sm:right-6 sm:top-6">
                <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name="pin" size={20} />
                </div>
                  <div>
                    <p className="text-sm font-bold text-ink-950">الدمام</p>
                    <p className="mt-1 text-[12.5px] leading-6 text-ink-600">
                      المنطقة الشرقية، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
                <a
                  href={openStreetMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-brand-700"
                >
                  فتح في خرائط OpenStreetMap
                  <Icon name="chevronDown" size={13} className="rotate-90" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
