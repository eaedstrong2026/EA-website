import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

const navTabs = [
  { label: 'About', href: '/', isHome: true },
  { label: 'I. Strategic Support', href: '/strategic-support' },
  { label: 'II. Areas of Expertise', href: '/areas-of-expertise' },
  { label: 'III. High Quality Organization', href: '/high-quality-organization' },
  { label: 'IV. EduPreneurs Alliance', href: '/edupreneurs-alliance' },
  { label: 'V. The Ascending Educator', href: '/ascending-educator' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-s flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center font-serif font-bold text-sm text-white">
              EA
            </div>
            <span className="font-serif text-[15px] font-semibold text-navy">
              Educators&apos; Alliance
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5">
            {navTabs.map((tab) => (
              <Link
                key={tab.href}
                to={tab.href}
                className={`font-sans text-[12px] font-medium tracking-wide transition-colors pb-0.5 border-b-2 ${
                  location.pathname === tab.href
                    ? 'text-navy border-teal'
                    : 'text-navy/60 border-transparent hover:text-navy hover:border-navy/20'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/"
            onClick={() => {
              if (isHome) {
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)
              }
            }}
            className="hidden lg:inline-flex btn-pill-filled text-xs py-2.5 px-5 shrink-0"
          >
            Partner With Us
          </Link>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden p-2" aria-label="Menu">
            <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-border-light max-h-[70vh] overflow-y-auto">
            <div className="container-s py-3 space-y-0.5">
              {navTabs.map((tab) => (
                <Link
                  key={tab.href}
                  to={tab.href}
                  className={`block py-2.5 px-3 rounded-lg font-sans text-sm font-medium transition-colors ${
                    location.pathname === tab.href
                      ? 'text-navy bg-cream/50'
                      : 'text-navy/70 hover:text-navy hover:bg-cream/30'
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/"
                  onClick={() => {
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)
                  }}
                  className="btn-pill-filled text-xs py-2.5 px-6 inline-block"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
