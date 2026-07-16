import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageLayout from '../sections/PageLayout'

const services = [
  {
    title: 'Strategic Consulting',
    desc: 'School improvement planning, systems design, leadership development, and implementation support.',
    items: ['School-wide improvement planning', 'Organizational systems design', 'Leadership capacity building', 'Implementation strategy & oversight'],
  },
  {
    title: 'Professional Learning',
    desc: 'High-impact training, coaching, and job-embedded support aligned to instructional priorities.',
    items: ['Customized professional development', 'Instructional coaching cycles', 'Job-embedded teacher support', 'Leadership coaching & mentoring'],
  },
  {
    title: 'Program Development',
    desc: 'Customized design, refinement, and optimization of educational programs and initiatives.',
    items: ['Program design & evaluation', 'Curriculum alignment & refinement', 'Special initiative development', 'Operational optimization'],
  },
  {
    title: 'Specialized Educator Pathways',
    desc: 'Targeted support through EduPreneurs Alliance and The Ascending Educator.',
    items: ['EduPreneurs Alliance for educator entrepreneurs', 'The Ascending Educator for justice-impacted educators', 'Career transition coaching', 'Professional pathway design'],
  },
  {
    title: 'Talent Acquisition & Placement',
    desc: 'We act as your third-party recruitment partner, managing the heavy lifting of sourcing and vetting top-tier talent so your classrooms are never left compromised.',
    items: ['Third-party recruitment partnership', 'Sourcing & vetting top-tier talent', 'Classroom coverage assurance', 'Strategic talent pipeline development'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg p-8 bg-white"
      style={{ border: '1px solid var(--border-light)' }}
    >
      <h3 className="font-serif text-xl text-navy mb-3">{service.title}</h3>
      <p className="font-sans text-[14px] text-body leading-relaxed mb-5">{service.desc}</p>
      <ul className="space-y-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
            <span className="font-sans text-[13px] text-body">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function StrategicSupport() {
  return (
    <PageLayout
      title="Strategic Support"
      subtitle="Customized support for schools, organizations, and educators seeking stronger systems, clearer implementation, and greater impact."
      heroImage="/images/tab-strategic-support.jpg"
      heroAlt="Diverse team of education consultants reviewing strategic plans on a large screen"
    >
      {/* Brand Positioning */}
      <section className="section-p bg-white">
        <div className="container-s">
          <p className="section-label">Our Approach</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-[800px]"
          >
            <h2 className="section-heading mb-6">Where Expertise Meets Strategy</h2>
            <p className="font-sans text-[16px] text-body leading-[1.8] mb-6">
              <strong>Educators Alliance</strong> is a strategic education consulting firm helping schools, educators, and leaders drive meaningful growth. With more than 15 years of experience in visionary strategy, instructional design, and performance optimization, we partner with learning communities to strengthen instruction, improve operations, and build systems that support lasting impact.
            </p>
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              Through data-informed insight, collaborative leadership, and customized solutions, Educators Alliance empowers students, families, educators, and administrators to thrive together. Our work is rooted in purpose, driven by excellence, and designed to create sustainable results across the entire school community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-p" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="container-s">
          <p className="section-label">What We Offer</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-10"
          >
            Our Services
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Can Expect */}
      <section className="section-p bg-white">
        <div className="container-s">
          <p className="section-label">Outcomes</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-8">What Clients Can Expect</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-[800px]">
              {[
                'Clearer systems and stronger implementation practices',
                'More aligned instruction, leadership, and organizational decision-making',
                'Professional learning that is practical, relevant, and results-driven',
                'Sustainable strategies that build long-term growth and measurable impact',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-5 rounded-lg bg-cream/50"
                >
                  <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-sm text-teal font-bold">{index + 1}</span>
                  </div>
                  <p className="font-sans text-[15px] text-body leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-xl text-navy mt-12 max-w-[600px] leading-relaxed"
          >
            We believe transformation happens when strategy is aligned, educators are empowered, and leadership is rooted in purpose.
          </motion.p>
        </div>
      </section>
    </PageLayout>
  )
}
