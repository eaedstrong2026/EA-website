import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageLayout from '../sections/PageLayout'

export default function Sponsor() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const tiers = [
    {
      name: 'Hope',
      amount: '$250',
      impact: 'Provides mentorship sessions and wellness resources for one educator',
    },
    {
      name: 'Restoration',
      amount: '$500',
      impact: 'Funds professional coaching and career pathway development support',
    },
    {
      name: 'Ascension',
      amount: '$1,000',
      impact: 'Supports certification/licensing assistance and Customized Ascending Plan development',
    },
    {
      name: 'Renewal',
      amount: '$2,500',
      impact: 'Funds complete program participation including workshops, coaching, and workforce reentry support',
    },
    {
      name: 'Transformation',
      amount: '$5,000',
      impact: 'Sponsors full program support including leadership development, mentorship, and professional renewal resources',
    },
    {
      name: 'Legacy',
      amount: '$10,000+',
      impact: 'Creates lasting impact through program expansion, community partnerships, and long-term educator support initiatives',
    },
  ]

  return (
    <PageLayout
      title="Sponsor an Educator"
      subtitle="Invest in educators. Transform lives. Strengthen communities."
      heroImage="/images/tab-ascending.jpg"
      heroAlt="Diverse educators celebrating achievement and growth"
    >
      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          <div className="max-w-[800px] mb-16">
            <p className="section-label">Create Lasting Impact</p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading mb-6"
            >
              Because Every Educator Deserves the Opportunity to Rise
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-[16px] text-body leading-[1.8] mb-6"
            >
              When you sponsor an educator through Educators&apos; Alliance, you are not just providing financial support &mdash; you are investing in restoration, empowerment, and transformation. Your contribution helps educators overcome barriers, access vital resources, and reclaim their purpose.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-sans text-[15px] text-body leading-[1.8]"
            >
              Many educators face significant challenges, from workforce reentry barriers to financial hardship. Through your sponsorship, we can provide mentorship, professional development, wellness resources, and the practical support educators need to thrive.
            </motion.p>
          </div>

          {/* Sponsorship Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="font-serif text-2xl text-navy mb-8">Sponsorship Tiers</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.06 }}
                  className="rounded-lg p-6"
                  style={{ border: '1px solid var(--border-light)' }}
                >
                  <p className="font-serif text-sm text-teal font-semibold uppercase tracking-wider mb-2">{tier.name}</p>
                  <p className="font-serif text-3xl text-navy mb-3">{tier.amount}</p>
                  <p className="font-sans text-[13px] text-body leading-relaxed">{tier.impact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What Sponsorship Supports */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="font-serif text-2xl text-navy mb-8">Your Sponsorship Can Support:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Certification or Licensing Fees',
                'Professional Coaching',
                'Career Development Support',
                'Workforce Reentry Expenses',
                'Leadership Development Programs',
                'Wellness Resources',
                'Conference or Training Opportunities',
                'Entrepreneurship Start-Up Support',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.04 }}
                  className="flex items-start gap-3 p-4 rounded-lg"
                  style={{ border: '1px solid var(--border-light)' }}
                >
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="font-sans text-[14px] text-body">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-lg p-10 text-center"
            style={{ backgroundColor: '#F5F1EB' }}
          >
            <h3 className="font-serif text-2xl text-navy mb-4">
              Become a Sponsor Today
            </h3>
            <p className="font-sans text-[15px] text-body max-w-[500px] mx-auto mb-6">
              Your generosity creates pathways for educators to reclaim their purpose and maximize their impact. Together, we can transform lives.
            </p>
            <a href="mailto:sponsor@educatorsalliance.org?subject=Sponsorship%20Inquiry" className="btn-pill-filled text-xs py-2.5 px-6">
              Inquire About Sponsorship
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
