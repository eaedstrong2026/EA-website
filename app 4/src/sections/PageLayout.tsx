import { motion } from 'framer-motion'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'

interface PageLayoutProps {
  title: string
  subtitle?: string
  heroImage: string
  heroAlt: string
  children: React.ReactNode
}

export default function PageLayout({ title, subtitle, heroImage, heroAlt, children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 overflow-hidden" style={{ backgroundColor: '#F5F1EB' }}>
          <div className="container-s">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Link to="/" className="inline-flex items-center gap-2 font-sans text-[13px] text-navy/50 hover:text-navy transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading max-w-[700px] mb-3"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-[16px] text-text-muted max-w-[600px]"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </section>

        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-full aspect-[21/9] overflow-hidden">
            <img src={heroImage} alt={heroAlt} className="w-full h-full object-cover" />
          </div>
        </motion.section>

        {/* Content */}
        {children}
      </main>
      <Footer />
    </>
  )
}
