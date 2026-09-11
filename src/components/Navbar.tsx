import { useEffect, useMemo, useRef, useState } from 'react'
import { BRAND, CONTACT, NAV_LINKS } from '../config/site'
import { useActiveSection, scrollToId } from '../hooks/useActiveSection'
import { ContactButton } from './ui/Button'
import { Icon } from './ui/Icon'
import { Logo } from './ui/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  const ids = useMemo(() => NAV_LINKS.map((l) => l.id as string), [])
  const active = useActiveSection(ids, 140)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) setContactOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setContactOpen(false)
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNav = (id: string) => {
    setMenuOpen(false)
    setContactOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/70'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        {/* الشعار */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNav('home')
          }}
          className="flex shrink-0 items-center gap-3"
          aria-label={`${BRAND.name} — الصفحة الرئيسية`}
        >
          <Logo />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold text-white">{BRAND.name}</span>
            <span className="hidden text-[11px] font-medium text-white/45 sm:block">
              {BRAND.tagline}
            </span>
          </span>
        </a>

        {/* روابط التنقل — سطح المكتب */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative rounded-xl px-3.5 py-2 text-[14px] font-medium transition ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-l from-brand-300 to-brand-500 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            )
          })}
        </nav>

        {/* زر التواصل + قائمة الهاتف */}
        <div className="flex items-center gap-2">
          <div className="relative hidden lg:block" ref={contactRef}>
            <button
              onClick={() => setContactOpen((v) => !v)}
              aria-expanded={contactOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-brand-400 to-brand-600 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-[0_10px_30px_-12px_rgba(27,167,110,0.9)] transition hover:from-brand-300 hover:to-brand-500"
            >
              تواصل معنا
              <Icon
                name="chevronDown"
                size={16}
                className={`transition-transform duration-300 ${contactOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              role="menu"
              className={`absolute left-0 top-[calc(100%+12px)] w-56 origin-top-left overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-glow backdrop-blur-xl transition-all duration-200 ${
                contactOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-2 opacity-0'
              }`}
            >
              <ContactButton
                channel="whatsapp"
                href={CONTACT.whatsapp}
                label={CONTACT.whatsappLabel}
                size="sm"
                className="w-full justify-start"
              />
              <ContactButton
                channel="telegram"
                href={CONTACT.telegram}
                label={CONTACT.telegramLabel}
                size="sm"
                className="mt-1 w-full justify-start"
              />
              <p className="mt-2 border-t border-white/10 px-3 pt-2 text-[11px] leading-5 text-white/40">
                بدون تسجيل — محادثة مباشرة مع فريقنا
              </p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label="فتح القائمة"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </div>

      {/* قائمة الهاتف */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-ink-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 w-[86%] max-w-sm border-l border-white/10 bg-ink-900 p-6 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size={34} />
              <span className="font-display text-base font-extrabold">{BRAND.name}</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
              aria-label="إغلاق القائمة"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1" aria-label="تنقل الهاتف">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="rounded-xl px-4 py-3 text-right text-[15px] font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
            <p className="px-1 text-xs font-semibold text-white/40">تواصل معنا</p>
            <ContactButton
              channel="whatsapp"
              href={CONTACT.whatsapp}
              label={CONTACT.whatsappLabel}
              className="w-full"
            />
            <ContactButton
              channel="telegram"
              href={CONTACT.telegram}
              label={CONTACT.telegramLabel}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
