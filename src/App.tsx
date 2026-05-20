import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewPortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewPortfolioFromCTA = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen text-white overflow-x-hidden bg-dark-900">
      <Navbar onGetStartedClick={handleGetStartedClick} />
      <Hero onGetStartedClick={handleGetStartedClick} onViewPortfolioClick={handleViewPortfolioClick} />
      <SocialProof />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA onContactClick={handleGetStartedClick} onViewPortfolioClick={handleViewPortfolioFromCTA} />
      <Contact email="imraj.engineer@gmail.com" phone="+91 7645848488" />
      <Footer onGetStartedClick={handleGetStartedClick} />
    </main>
  )
}
