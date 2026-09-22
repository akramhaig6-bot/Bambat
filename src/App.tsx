import { useEffect } from 'react'
import { scrollToId } from './hooks/useActiveSection'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MarketStrip } from './components/MarketStrip'
import { About } from './components/About'
import { Services } from './components/Services'
import { Pamm } from './components/Pamm'
import { Packages } from './components/Packages'
import { Durations } from './components/Durations'
import { Payments } from './components/Payments'
import { Journey } from './components/Journey'
import { Ipo } from './components/Ipo'
import { ContactCta } from './components/ContactCta'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'

export default function App() {
  useEffect(() => {
    const restore = () => {
      const id = window.location.hash.slice(1) || 'home'
      scrollToId(id, false)
    }
    restore()
    window.addEventListener('popstate', restore)
    window.addEventListener('hashchange', restore)
    return () => {
      window.removeEventListener('popstate', restore)
      window.removeEventListener('hashchange', restore)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <div className="product-region">
          <MarketStrip />
          <Packages />
          <Pamm />
          <Ipo />
        </div>
        <div className="participation-region">
          <Journey />
          <Durations />
          <Payments />
        </div>
        <Faq />
        <div className="contact-region">
          <ContactCta />
          <FinalCta />
        </div>
      </main>

      <Footer />
    </div>
  )
}
