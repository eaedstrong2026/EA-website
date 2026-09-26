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

const expertiseAreas = [
  {
    title: 'Strategic Leadership for Growth and Impact',
    subtitle: 'Building systems that drive organizational excellence',
    items: [
      { heading: 'Leadership and Team Management', text: 'Led cross-functional teams to strengthen culture, improve communication, advance training goals, and support high-quality outcomes for both staff and students.' },
      { heading: 'Program Oversight and Development', text: 'Directed after-school programs, athletics, large-scale events, and professional learning initiatives while coaching instructors to align practice with organizational goals.' },
      { heading: 'Data-Informed Strategy and Compliance', text: 'Produced reports for senior leadership, conducted assessments and interviews, monitored performance plans, and ensured alignment with regional, state, and federal requirements.' },
      { heading: 'Operational and Financial Management', text: 'Oversaw budgets, procurement, facilities, safety, and transportation while streamlining processes to support efficiency, accountability, and strategic execution.' },
    ],
  },
  {
    title: 'Innovative Instruction and Remote Learning Solutions',
    subtitle: 'Transforming teaching through technology and research-based practice',
    items: [
      { heading: 'Curriculum and Instructional Leadership', text: 'Designed technology-enhanced learning experiences, including project-based learning, while coaching educators toward stronger instructional practice and improved student outcomes.' },
      { heading: 'Virtual Learning and Curriculum Design', text: 'Successfully transitioned programs to virtual platforms, coordinating curriculum, schedules, and operations to support more than 150 students through multiple instructional approaches.' },
      { heading: 'Performance, Innovation, and Student Progress', text: 'Tracked outcomes with precision while integrating scaffolding, project-based learning, inquiry-based learning, and varied instructional models to strengthen curriculum effectiveness and learner success.' },
    ],
  },
  {
    title: 'Program Growth and Stakeholder Engagement',
    subtitle: 'Building partnerships that drive sustainable success',
    items: [
      { heading: 'Growth Strategy and Long-Range Planning', text: 'Developed long-term goals, strategic initiatives, and reporting systems that supported program success, enrollment growth, and retention.' },
      { heading: 'Partnerships and Resource Development', text: 'Built relationships with business and community partners to secure funding, expand opportunities, and align external support with organizational goals.' },
      { heading: 'Program Oversight and Engagement', text: 'Managed instructors, coordinated outreach and marketing events, delivered presentations, and developed training resources that increased engagement and performance.' },
      { heading: 'Stakeholder Communication and Facilitation', text: 'Led meetings and training experiences for students, staff, and external partners while maintaining engagement through clear, responsive, and data-informed communication.' },
    ],
  },
]

export default function ConsultingServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <PageLayout
      title="Consulting Services"
      subtitle="Strengthening Schools. Developing Leaders. Delivering Results."
      heroImage="/images/tab-strategic-support.jpg"
      heroAlt="Diverse team of education consultants reviewing strategic plans"
    >
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
              <strong>Educators&apos; Alliance</strong> is a strategic education consulting firm helping schools, educators, and leaders drive meaningful growth. With more than 25 years of combined experience in visionary strategy, instructional design, and performance optimization, we partner with learning communities to strengthen instruction, improve operations, and build systems that support lasting impact.
            </p>
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              Through data-informed insight, collaborative leadership, and customized solutions, Educators&apos; Alliance empowers students, families, educators, and administrators to thrive together. Our work is rooted in purpose, driven by excellence, and designed to create sustainable results across the entire school community.
            </p>
          </motion.div>
        </div>
      </section>

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

      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          <p className="section-label">Key Competencies</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-heading mb-12"
          >
            Areas of Expertise
          </motion.h2>

          <div className="space-y-16">
            {expertiseAreas.map((area, areaIndex) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + areaIndex * 0.1 }}
              >
                <h3 className="font-serif text-2xl md:text-3xl text-navy mb-2">{area.title}</h3>
                <p className="font-sans text-[14px] text-teal font-semibold uppercase tracking-wider mb-8">{area.subtitle}</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {area.items.map((item, i) => (
                    <motion.div
                      key={item.heading}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                      className="rounded-lg p-6"
                      style={{ border: '1px solid var(--border-light)' }}
                    >
                      <h4 className="font-serif text-[16px] text-navy mb-3">{item.heading}</h4>
                      <p className="font-sans text-[13px] text-body leading-relaxed">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-p" style={{ backgroundColor: '#F5F1EB' }}>
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
                  className="flex items-start gap-4 p-5 rounded-lg bg-white"
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
