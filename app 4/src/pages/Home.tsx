import Header from '../sections/Header'
import Hero from '../sections/Hero'
import ExecutiveSummary from '../sections/ExecutiveSummary'
import About from '../sections/About'
import InclusiveApproach from '../sections/InclusiveApproach'
import TabNavigation from '../sections/TabNavigation'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import FloatingGeometrics from '../sections/FloatingGeometrics'

export default function Home() {
  return (
    <>
      <Header />
      <FloatingGeometrics />
      <main className="relative z-[2]">
        <Hero />
        <ExecutiveSummary />
        <About />
        <InclusiveApproach />
        <TabNavigation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
