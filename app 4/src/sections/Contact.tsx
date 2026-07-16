import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-p bg-navy" ref={ref}>
      <div className="container-s">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl max-md:text-3xl font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="font-sans text-[15px] text-white/60 max-w-[500px] mx-auto mb-3">
            Ready to transform your school community? Let&apos;s discuss how Educators&apos; Alliance can support your strategic goals.
          </p>
          <a
            href="mailto:educatorsalliancellc@gmail.com"
            className="font-sans text-sm text-teal-light hover:text-white transition-colors"
          >
            educatorsalliancellc@gmail.com
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-[700px] mx-auto"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-sans text-white text-lg">Thank you!</p>
              <p className="font-sans text-white/50 text-sm mt-1">We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="input-dark" required />
                <input type="text" placeholder="Last Name" className="input-dark" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input type="email" placeholder="Email Address" className="input-dark" required />
                <input type="tel" placeholder="Phone Number" className="input-dark" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="School / Organization" className="input-dark" />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Tell us about your goals and challenges..."
                  rows={4}
                  className="input-dark resize-none"
                />
              </div>
              <button type="submit" className="btn-pill-filled w-full sm:w-auto">
                Schedule a Consultation
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
