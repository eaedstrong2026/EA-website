export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-s">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-serif font-bold text-sm text-white">
                EA
              </div>
              <span className="font-serif text-[15px] font-semibold text-white">
                Educators&apos; Alliance
              </span>
            </div>
            <p className="font-sans text-[13px] text-white/50 leading-relaxed mb-5 max-w-[240px]">
              Reclaim. Rise. Thrive. | Educators&apos; Alliance LLC
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/educators-alliance" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:educatorsalliancellc@gmail.com" aria-label="Email" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-[13px] text-white mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {['The Ascending Educator', "Educational Consulting Services", 'EduPreneurs Alliance'].map((item) => (
                <li key={item}>
                  <span className="font-sans text-[13px] text-white/50 hover:text-white/80 transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-sans font-semibold text-[13px] text-white mb-4 tracking-wide">Resources</h4>
            <ul className="space-y-2.5">
              {['Case Studies', 'Research', 'Blog', 'Webinars'].map((item) => (
                <li key={item}>
                  <span className="font-sans text-[13px] text-white/50 hover:text-white/80 transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-[13px] text-white mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:educatorsalliancellc@gmail.com"
                  className="font-sans text-[13px] text-white/50 hover:text-white/80 transition-colors"
                >
                  educatorsalliancellc@gmail.com
                </a>
              </li>
              <li>
                <span className="font-sans text-[13px] text-white/50 hover:text-white/80 transition-colors cursor-default">
                  Schedule a Call
                </span>
              </li>
              <li>
                <span className="font-sans text-[13px] text-white/50 hover:text-white/80 transition-colors cursor-default">
                  Careers
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="font-sans text-[11px] text-white/30 text-center">
            &copy; 2026 Educators&apos; Alliance LLC. All rights reserved. | Reclaim. Rise. Thrive.
          </p>
        </div>
      </div>
    </footer>
  );
}
