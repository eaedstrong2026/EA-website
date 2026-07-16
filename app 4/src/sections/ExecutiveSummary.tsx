import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const offerings = [
  {
    title: 'Strategic Consulting',
    desc: 'School improvement planning, systems design, leadership development, and implementation support.',
  },
  {
    title: 'Professional Learning',
    desc: 'High-impact training, coaching, and job-embedded support aligned to instructional priorities.',
  },
  {
    title: 'Program Development',
    desc: 'Customized design, refinement, and optimization of educational programs and initiatives.',
  },
  {
    title: 'Specialized Educator Pathways',
    desc: 'Targeted support through EduPreneurs Alliance and The Ascending Educator.',
  },
]

export default function ExecutiveSummary() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <p className="section-label">Executive Summary</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading max-w-[700px] mb-8"
        >
          Strategic Support for Visionary Leaders, Schools, and Educators
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[800px] mb-16"
        >
          <p className="font-sans text-[16px] text-body leading-[1.8] mb-6">
            Educators Alliance is a strategic education consulting firm that helps schools, districts, organizations, and educators strengthen systems, improve instruction, and expand impact. With deep expertise in school improvement, instructional leadership, professional learning, and program design, we partner with clients to move from vision to implementation with clarity, purpose, and measurable results.
          </p>
          <p className="font-serif text-xl text-navy italic">
            Where expertise meets strategy &mdash; and vision becomes lasting change.
          </p>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-serif text-2xl text-navy mb-8">What We Offer</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {offerings.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + index * 0.08, duration: 0.5 }}
                className="rounded-lg p-6 transition-all duration-300 hover:shadow-subtle"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <h4 className="font-serif text-[17px] text-navy mb-2">{item.title}</h4>
                <p className="font-sans text-[14px] text-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-[800px]"
        >
          <h3 className="font-serif text-2xl text-navy mb-4">Who We Serve & What Clients Gain</h3>
          <p className="font-sans text-[15px] text-body leading-[1.8] mb-4">
            Our work is ideal for schools, districts, education organizations, and purpose-driven leaders seeking stronger implementation, more aligned instruction, empowered educators, and sustainable growth. Clients can expect customized support, practical strategies, stronger systems, and a partnership focused on long-term impact.
          </p>
          <ul className="space-y-2.5 mt-6">
            {[
              'Clearer systems and stronger implementation practices',
              'More aligned instruction, leadership, and organizational decision-making',
              'Professional learning that is practical, relevant, and results-driven',
              'Sustainable strategies that build long-term growth and measurable impact',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 flex-shrink-0" />
                <span className="font-sans text-[14px] text-body">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-sans font-semibold text-[15px] text-navy mt-12 max-w-[700px] leading-relaxed"
        >
          Educators Alliance brings strategic insight, instructional expertise, and purpose-driven partnership to every engagement. We welcome the opportunity to support your goals and help turn vision into measurable impact.
        </motion.p>
      </div>
    </section>
  )
}
