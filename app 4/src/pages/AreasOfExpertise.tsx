import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageLayout from '../sections/PageLayout'

interface ExpertiseArea {
  title: string
  subtitle: string
  items: { heading: string; text: string }[]
}

const expertiseAreas: ExpertiseArea[] = [
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

function ExpertiseSection({ area }: { area: ExpertiseArea }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-16 last:mb-0"
    >
      <h3 className="font-serif text-2xl md:text-3xl text-navy mb-2">{area.title}</h3>
      <p className="font-sans text-[14px] text-teal font-semibold uppercase tracking-wider mb-8">{area.subtitle}</p>

      <div className="grid sm:grid-cols-2 gap-5">
        {area.items.map((item, i) => (
          <motion.div
            key={item.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            className="rounded-lg p-6 bg-white"
            style={{ border: '1px solid var(--border-light)' }}
          >
            <h4 className="font-serif text-[16px] text-navy mb-3">{item.heading}</h4>
            <p className="font-sans text-[13px] text-body leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function AreasOfExpertise() {
  return (
    <PageLayout
      title="Areas of Expertise"
      subtitle="Comprehensive capabilities built on more than 15 years of educational consulting experience"
      heroImage="/images/tab-expertise.jpg"
      heroAlt="Diverse team of educational experts collaborating around a whiteboard"
    >
      <section className="section-p bg-white">
        <div className="container-s">
          <p className="section-label">Key Competencies</p>

          {expertiseAreas.map((area) => (
            <ExpertiseSection key={area.title} area={area} />
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
