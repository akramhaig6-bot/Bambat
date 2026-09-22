import { createPortal } from 'react-dom'
import { useDialog } from '../hooks/useDialog'
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
  const mobileRef = useDialog(menuOpen, () => setMenuOpen(false))

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
    const query = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => { if (query.matches) setMenuOpen(false) }
    query.addEventListener('change', closeOnDesktop)
    return () => query.removeEventListener('change', closeOnDesktop)
  }, [])

  const handleNav = (id: string) => {
    setMenuOpen(false)
    setContactOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brand-900/10 bg-white/95 shadow-glow-soft backdrop-blur-xl'
          : 'border-b border-transparent bg-white/70 backdrop-blur-md'
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
            <span className="font-display text-lg font-extrabold text-ink-950">{BRAND.name}</span>
            <span className="hidden text-[11px] font-medium text-ink-600 sm:block">
              {BRAND.tagline}
            </span>
          </span>
        </a>

        {/* روابط التنقل — سطح المكتب */}
        <nav className="hidden items-center gap-0 xl:gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative rounded-xl px-2 xl:px-3.5 py-2 text-[14px] font-medium transition ${
                  isActive ? 'text-ink-950' : 'text-ink-800 hover:text-ink-950'
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
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-brand-400 to-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_30px_-12px_rgba(18,164,105,0.45)] transition hover:from-brand-500 hover:to-brand-700"
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
              className={`absolute left-0 top-[calc(100%+12px)] w-56 origin-top-left overflow-hidden rounded-2xl border border-brand-900/10 bg-white p-2 shadow-glow backdrop-blur-xl transition-all duration-200 ${
                contactOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-2 opacity-0'
              }`}
            >
              <ContactButton
                channel="telegram"
                href={CONTACT.telegram}
                label={CONTACT.telegramLabel}
                size="sm"
                className="w-full justify-start"
              />
              <p className="mt-2 border-t border-brand-900/10 px-3 pt-2 text-[11px] leading-5 text-ink-600">
                بدون تسجيل — محادثة مباشرة مع فريقنا
              </p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-900/10 bg-brand-50/70 text-ink-950 lg:hidden"
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </div>

      {/* الشريط الجانبي (قائمة الهاتف) — خلفية خضراء صلبة غير شفافة */}
      {menuOpen && createPortal(<div
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-label="تنقل الهاتف"
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-brand-950/45 backdrop-blur-[2px] transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          ref={mobileRef}
          id="mobile-navigation"
          tabIndex={-1}
          className={`side-panel absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto p-6 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size={34} onGreen />
              <span className="font-display text-base font-extrabold text-white">{BRAND.name}</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="إغلاق القائمة"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1" aria-label="تنقل الهاتف">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-right text-[15px] font-semibold transition ${
                    isActive
                      ? 'bg-white text-brand-700 shadow-[0_10px_24px_-16px_rgba(4,37,26,0.9)]'
                      : 'text-white/85 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {link.label}
                  <Icon name="arrowLeft" size={15} className={isActive ? 'text-brand-500' : 'text-white/50'} />
                </button>
              )
            })}
          </nav>

          <div className="mt-6 space-y-2 border-t border-white/20 pt-6">
            <p className="px-1 text-xs font-semibold text-white/70">تواصل معنا</p>
            <ContactButton
              channel="telegram"
              href={CONTACT.telegram}
              label={CONTACT.telegramLabel}
              className="w-full"
            />
          </div>

          <div className="mt-auto pt-8">
            <p className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-[11.5px] leading-6 text-white/80">
              بدون تسجيل — محادثة مباشرة مع فريق {BRAND.name} عبر تيليجرام.
            </p>
          </div>
        </div>
      </div>, document.body)}
    </header>
  )
}
