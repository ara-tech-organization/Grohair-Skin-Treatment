import Header                from './components/Header'
import Hero                  from './components/Hero'
import GuaranteeBanner       from './components/GuaranteeBanner'
import TransformationSection from './components/TransformationSection'
// import BeforeAfterSection    from './components/BeforeAfterSection'
import FacingSection         from './components/FacingSection'
import TreatmentsSection     from './components/TreatmentsSection'
import CtaBanner             from './components/CtaBanner'
import Footer                from './components/Footer'
import StickyBottomCta       from './components/StickyBottomCta'

function App() {
  return (
    <div className="pb-16">
      <Header />
      <Hero />
      <GuaranteeBanner />
      {/* <BeforeAfterSection /> */}
      <FacingSection />
      <TreatmentsSection />
      <TransformationSection />
      <CtaBanner />
      <Footer />
      <StickyBottomCta />
    </div>
  )
}

export default App
