import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router'

const tabs = [
  {
    num: 'I',
    title: 'Strategic Support',
    desc: 'School improvement planning, systems design, leadership development, and implementation support.',
    href: '/strategic-support',
    color: 'bg-navy',
  },
  {
    num: 'II',
    title: 'Areas of Expertise',
    desc: 'Strategic leadership, innovative instruction, program growth, and stakeholder engagement.',
    href: '/areas-of-expertise',
    color: 'bg-teal',
  },
  {
    num: 'III',
    title: 'High Quality Organization',
    desc: 'The OCBL Model: a framework for strengthening school systems and aligned instruction.',
    href: '/high-quality-organization',
    color: 'bg-navy',
  },
  {
    num: 'IV',
    title: 'EduPreneurs Alliance',
    desc: 'For educators ready to turn their knowledge, experience, and passion into business impact.',
    href: '/edupreneurs-alliance',
    color: 'bg-teal',
  },
  {
    num: 'V',
    title: 'The Ascending Educator',
    desc: 'A sanctuary for justice-impacted educators ready to heal, rise, and reclaim their power.',
    href: '/ascending-educator',
    color: 'bg-navy',
  },
]

export default function TabNavigation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-p" style={{ backgroundColor: '#F5F1EB' }} ref={ref}>
      <div className="container-s">
        <p className="section-label">Explore Our Work</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-12"
        >
          Our Programs & Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tabs.map((tab, index) => (
            <motion.div
              key={tab.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
            >
              <Link
                to={tab.href}
                className="group block bg-white rounded-lg p-7 transition-all duration-300 hover:shadow-subtle"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${tab.color} mb-4`}>
                  <span className="font-serif text-sm text-white font-bold">{tab.num}</span>
                </div>
                <h3 className="font-serif text-xl text-navy mb-2 group-hover:text-teal transition-colors">
                  {tab.title}
                </h3>
                <p className="font-sans text-[13px] text-body leading-relaxed mb-4">{tab.desc}</p>
                <span className="inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-wider text-teal group-hover:text-navy transition-colors">
                  Learn More
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
