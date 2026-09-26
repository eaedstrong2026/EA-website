import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

const navItems = [
  { label: 'Home', href: '/', isHome: true },
  { label: "About Educators' Alliance", href: '/about' },
  { label: 'Meet the Founder', href: '/founder' },
  { label: 'The Ascending Educator', href: '/ascending-educator' },
  { label: "Educators' Alliance Consulting Services", href: '/consulting-services' },
  { label: 'Coming Soon: EduPreneurs Alliance', href: '/edupreneurs-alliance' },
  { label: 'Join "The Alliance"', href: '/join-the-alliance' },
  { label: 'Apply Now', href: '/apply' },
  { label: 'Sponsor an Educator', href: '/sponsor' },
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-sans text-[11px] font-medium tracking-wide transition-colors pb-0.5 border-b-2 whitespace-nowrap ${
                  location.pathname === item.href
                    ? 'text-navy border-teal'
                    : 'text-navy/60 border-transparent hover:text-navy hover:border-navy/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block py-2.5 px-3 rounded-lg font-sans text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-navy bg-cream/50'
                      : 'text-navy/70 hover:text-navy hover:bg-cream/30'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
