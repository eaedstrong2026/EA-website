import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageLayout from '../sections/PageLayout'

const structures = [
  {
    title: 'Consultations',
    desc: 'Strategic collaboration between school administrators and OCBL specialists is essential to establish the optimal conditions necessary for effective organizational or curriculum-based implementation.',
    occurrence: 'Throughout the school day.',
    frequency: 'Multiple times a year.',
  },
  {
    title: 'Professional Development',
    desc: "Learning experiences anchored in a particular OCBL element are designed to enhance educators' foundational or advanced understanding of their resources, materials, and strategies.",
    occurrence: 'Throughout the year: after school, during planning periods (rolling PDs), during the summer, on assigned professional development days.',
    frequency: 'Multiple times a year.',
  },
  {
    title: 'Coaching',
    desc: 'Opportunities for educators to receive SMART feedback on their instructional practices through informal channels.',
    occurrence: 'Cyclical rotation of observations and instructional walkthroughs followed by targeted feedback sessions during planning periods.',
    frequency: 'Observations conducted multiple times annually, frequency determined by individual teacher needs.',
  },
  {
    title: 'Collaborative / Professional Learning Communities',
    desc: 'Teams of educators organized by grade level or subject area systematically analyzing schoolwide initiatives, curriculum-based lessons, and student work through structured cycles of inquiry.',
    occurrence: 'Weekly: before the school day begins, during collaborative planning periods, after school (early release days).',
    frequency: 'Monthly with OCBL Expert.',
  },
]

const processes = [
  {
    num: '01',
    title: 'Initial Piloting',
    desc: 'Assist school leaders in formulating and implementing tailored plans that align with the organizational and instructional components of the OCBL model. Using data, leaders define their vision, establish a comprehensive timeline, set SMART goals, and outline plans for stakeholder engagement.',
  },
  {
    num: '02',
    title: 'School-wide Implementation',
    desc: 'Provides school leaders and teachers a clear overview of their customized plan and readies the school community for solid implementation from day one. Helps develop a vision linked to optimized organizational and effective instructional practices.',
  },
  {
    num: '03',
    title: 'Ongoing Support for Teachers',
    desc: 'Enhances understanding of the strategic plan through structured coaching cycles aligned with progress. Reinforces the vision for implementing the plan with fidelity, enabling educators to customize their approach according to their students and classroom setting.',
  },
  {
    num: '04',
    title: 'Ongoing Support for Leaders',
    desc: 'Utilizing reflective, data-driven methodologies, OCBL experts support leaders in recognizing and proactively addressing potential barriers. Assists in monitoring and analyzing trends in both student learning and instructional practice.',
  },
]

const elements = [
  { title: 'Data-Inspired', desc: 'Guides educators in the collection, analysis, and application of diverse data sources to effectively support student learning.' },
  { title: 'Mission & Vision-Aligned', desc: 'Links OCBL and instructional objectives to a shared vision of high quality, exceptional, equitable teaching and learning.' },
  { title: 'Standard-Aligned', desc: 'Instructional plans directly connected to educational standards, ensuring alignment with required knowledge and skills.' },
  { title: 'Content-Focused & Curriculum-Based', desc: "Enhances educators' comprehension of instructional content and methodologies within the framework of OCBL." },
  { title: 'Equity-Oriented', desc: 'Ensures all students engage in rigorous, grade-level tasks; upholds high standards, addresses inequities, and advocates for inclusivity.' },
  { title: 'Engaging & Collaborative', desc: 'Facilitates opportunities for educators to observe models, refine skills, analyze data, participate in OCBL-aligned tasks, and collaborate.' },
  { title: 'Assessment-Based', desc: "Rigorous instructional practices adjusted based on standard-aligned assessments, transitioning the teacher's role to coach or facilitator." },
  { title: 'School Improvement', desc: 'Leverages diverse assessment data to establish targeted goals, implement actionable steps, and allocate resources for advancing systems.' },
]

export default function HighQualityOrganization() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <PageLayout
      title="High Quality Organization"
      subtitle="The Organizational and Curriculum-Based Learning (OCBL) Model"
      heroImage="/images/tab-organization.jpg"
      heroAlt="Aerial view of a well-organized modern school campus"
    >
      {/* OCBL Model Overview */}
      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          <p className="section-label">Our Framework</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[850px] mb-16"
          >
            <h2 className="section-heading mb-6">A Strategic Framework for Educational Excellence</h2>
            <p className="font-sans text-[16px] text-body leading-[1.8] mb-5">
              The Organizational and Curriculum-Based Learning (OCBL) Model is a strategic framework designed to strengthen school systems, align instruction, and support high-quality implementation across the learning community. By connecting a school&apos;s vision to its organizational structures and instructional practices, the model helps leaders create a more unified, intentional approach to teaching, learning, and continuous improvement.
            </p>
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              At its core, the OCBL Model emphasizes progress monitoring, job-embedded professional learning, and sustained support for educators. These elements work together to ensure schools have the guidance, resources, and feedback needed to implement their instructional vision with clarity and consistency.
            </p>
          </motion.div>

          {/* Three Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-5 mb-16"
          >
            {[
              { title: 'Components', items: ['Consultation', 'Professional Development', 'Coaching', 'Learning Communities'] },
              { title: 'Elements', items: ['Data Inspired', 'Standard Aligned', 'Mission & Vision Aligned', 'Equity-Oriented'] },
              { title: 'Processes', items: ['Initial Piloting', 'School-wide Implementation', 'Ongoing Support for Leaders', 'Ongoing Support for Teachers'] },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-lg p-6 bg-cream/50">
                <h4 className="font-serif text-lg text-navy mb-4">{pillar.title}</h4>
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal mt-2 flex-shrink-0" />
                      <span className="font-sans text-[13px] text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Implementation Structures */}
      <section className="section-p bg-navy">
        <div className="container-s">
          <p className="section-label" style={{ color: '#4A9E8C' }}>Structures</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl max-md:text-3xl font-bold text-white mb-4"
          >
            OCBL Implementation Structures
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-[15px] text-white/60 max-w-[700px] mb-12"
          >
            Four distinct organizational and professional learning structures that provide clear pathways for development, coaching, and continuous growth.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {structures.map((s, index) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg p-6"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <h3 className="font-serif text-[16px] text-white mb-3">{s.title}</h3>
                <p className="font-sans text-[12px] text-white/60 leading-relaxed mb-4">{s.desc}</p>
                <div className="space-y-2">
                  <div>
                    <p className="font-sans font-semibold text-[10px] uppercase tracking-wider text-teal mb-0.5">Occurrence</p>
                    <p className="font-sans text-[11px] text-white/50 leading-relaxed">{s.occurrence}</p>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[10px] uppercase tracking-wider text-gold mb-0.5">With OCBL Expert</p>
                    <p className="font-sans text-[11px] text-white/50 leading-relaxed">{s.frequency}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-p" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="container-s">
          <p className="section-label">How We Work</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-12"
          >
            Implementation Process
          </motion.h2>

          <div className="relative">
            <div className="hidden lg:block absolute top-[28px] left-[60px] right-[60px] h-[1px] bg-navy/10" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {processes.map((p, index) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold mb-6 relative z-10 bg-cream">
                    <span className="font-serif text-lg text-gold">{p.num}</span>
                  </div>
                  <h3 className="font-serif text-[16px] text-navy mb-3">{p.title}</h3>
                  <p className="font-sans text-[13px] text-body leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eight Essential Elements */}
      <section className="section-p bg-white">
        <div className="container-s">
          <p className="section-label">Core Principles</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-12"
          >
            Eight Essential Elements
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {elements.map((el, index) => (
              <motion.div
                key={el.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-lg p-6 transition-all hover:shadow-subtle"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-teal" />
                </div>
                <h3 className="font-serif text-[16px] text-navy mb-2">{el.title}</h3>
                <p className="font-sans text-[12px] text-body leading-relaxed">{el.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
