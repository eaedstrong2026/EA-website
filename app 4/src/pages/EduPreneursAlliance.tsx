import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router'
import PageLayout from '../sections/PageLayout'

const features = [
  {
    title: 'Strategic Support',
    desc: 'Through strategic support, curated resources, and a dynamic network of former educators, EduPreneurs Alliance provides the clarity, confidence, and momentum needed to launch, grow, and lead ventures that matter.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Curated Resources',
    desc: 'Access tools, frameworks, and guidance specifically designed for educators making the transition from classroom to entrepreneurship.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Dynamic Network',
    desc: 'Connect with a community of former educators who have successfully launched businesses, offering mentorship, collaboration, and shared wisdom.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

export default function EduPreneursAlliance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <PageLayout
      title="EduPreneurs Alliance"
      subtitle="For educators ready to turn their knowledge, experience, and passion into business impact."
      heroImage="/images/tab-edupreneurs.jpg"
      heroAlt="Diverse educator entrepreneurs collaborating in a modern co-working space"
    >
      {/* Vision */}
      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          <div className="max-w-[800px]">
            <p className="section-label">Our Vision</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading mb-8"
            >
              Build What Your Expertise Was Meant to Create
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-[16px] text-body leading-[1.8] mb-6"
            >
              EduPreneurs Alliance is for educators ready to turn their knowledge, experience, and passion into business impact. Designed for founders, innovators, and purpose-driven leaders, this collective helps educators move beyond the classroom and into ownership, strategy, and sustainable influence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-xl text-navy leading-relaxed mb-12"
            >
              We believe educators are uniquely equipped to lead, innovate, and build what the future needs.
            </motion.p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="rounded-lg p-7 bg-white"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <div className="text-navy mb-4">{feature.icon}</div>
                <h3 className="font-serif text-lg text-navy mb-3">{feature.title}</h3>
                <p className="font-sans text-[13px] text-body leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-lg p-10 text-center"
            style={{ backgroundColor: '#F5F1EB' }}
          >
            <h3 className="font-serif text-2xl text-navy mb-4">
              Step into the Future of Educator Entrepreneurship
            </h3>
            <p className="font-sans text-[15px] text-body max-w-[500px] mx-auto mb-6">
              Ready to turn your expertise into enterprise? EduPreneurs Alliance is here to help you build with clarity, confidence, and purpose.
            </p>
            <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="btn-pill">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
