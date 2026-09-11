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
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <MarketStrip />
        <About />
        <Services />
        <Pamm />
        <Packages />
        <Durations />
        <Payments />
        <Journey />
        <Ipo />
        <ContactCta />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}
