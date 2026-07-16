import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router'
import PageLayout from '../sections/PageLayout'

const pillars = [
  {
    title: 'Healing the Spirit',
    desc: 'A safe space to process, reflect, and begin the journey of deep healing with trauma-informed support designed specifically for educators.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Rising in Power',
    desc: 'Professional guidance and peer community to help rebuild confidence, reclaim identity, and rise above past challenges with elevated strength.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 3l7.5-7.5 7.5 7.5" />
      </svg>
    ),
  },
  {
    title: 'Customized Ascending Plan',
    desc: 'Your personalized pathway to re-enter the professional world with strength, clarity, and upward momentum through a collective vision of renewal.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
]

export default function AscendingEducator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <PageLayout
      title="The Ascending Educator"
      subtitle="Reclaiming Purpose. Restoring Hope."
      heroImage="/images/tab-ascending.jpg"
      heroAlt="Diverse educators in a supportive circle, warm healing environment with bookshelves and natural light"
    >
      {/* Sanctuary */}
      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          <div className="max-w-[800px]">
            <p className="section-label">A Sanctuary for Educators</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="section-heading mb-8">
                Healing.<br />Restoration.<br />A Return to Purpose.
              </h2>
              <p className="font-sans text-[16px] text-body leading-[1.8] mb-6">
                The Ascending Educator is a dedicated sanctuary and advocacy space for justice-impacted educators who are ready to rise above past challenges, heal deeply, and move steadily upward. This is where compassion meets systemic restoration with your &ldquo;Customized Ascending Plan&rdquo; (CAP) &mdash; and where educators are reminded that their calling, voice, and value remain deeply needed.
              </p>
            </motion.div>
          </div>

          {/* Support for the Journey Ahead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[800px] mt-12 mb-16"
          >
            <h3 className="font-serif text-2xl text-navy mb-4">Support for the Journey Ahead</h3>
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              Through trauma-informed support, professional guidance, and a powerful community of peers, we help educators rediscover confidence, reclaim identity, and re-enter the professional world with elevated strength. Because the story does not end with hardship; it continues with resilience, upward momentum, and lasting impact.
            </p>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid sm:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center p-8 rounded-lg bg-white"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy/5 text-navy mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl text-navy mb-3">{pillar.title}</h3>
                <p className="font-sans text-[13px] text-body leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center max-w-[600px] mx-auto"
          >
            <p className="font-serif text-2xl md:text-3xl text-navy leading-snug mb-4">
              &ldquo;Rise with clarity. Return with confidence. Reclaim what still belongs to you.&rdquo;
            </p>
            <p className="font-sans text-sm text-teal font-semibold uppercase tracking-wider">
              Welcome back to the Alliance
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 rounded-lg p-10 text-center"
            style={{ backgroundColor: '#F5F1EB' }}
          >
            <h3 className="font-serif text-2xl text-navy mb-4">
              You Are Not Alone on This Journey
            </h3>
            <p className="font-sans text-[15px] text-body max-w-[500px] mx-auto mb-6">
              If you are ready to heal, rebuild, and re-enter with purpose, Ed-Alliance Ambassadors are ready to climb with you.
            </p>
            <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="btn-pill">
              Connect With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
