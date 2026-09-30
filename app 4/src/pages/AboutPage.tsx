import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageLayout from '../sections/PageLayout'

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <PageLayout
      title="About Educators' Alliance"
      subtitle="Empowering Educators. Strengthening Communities. Transforming Futures."
      heroImage="/images/tab-expertise.jpg"
      heroAlt="Diverse team of educational leaders collaborating"
    >
      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          <div className="max-w-[850px] space-y-6">
            <p className="section-label">Who We Are</p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading mb-6"
            >
              Empowering Educators. Strengthening Communities. Transforming Futures.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-[16px] text-body leading-[1.8]"
            >
              At Educators&apos; Alliance, we believe every educator deserves the opportunity to heal, lead, and thrive. We are a leadership, advocacy, and empowerment organization dedicated to creating pathways that support educators at every stage of their professional journey.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-sans text-[15px] text-body leading-[1.8]"
            >
              Founded on the principles of excellence, equity, restoration, and innovation, Educators&apos; Alliance serves as a catalyst for growth and transformation. Through advocacy, leadership development, educational consulting, and entrepreneurship, we equip educators with the resources, support, and opportunities needed to maximize their impact in schools, businesses, and communities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-[15px] text-body leading-[1.8]"
            >
              We understand that educators are more than their titles. They are leaders, innovators, changemakers, and community builders whose influence extends far beyond the classroom. Our work is centered on helping educators overcome barriers, embrace opportunities, and confidently pursue their next chapter.
            </motion.p>
          </div>

          {/* Three Pathways */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-3">
              Three Pathways. One Mission.
            </p>
            <p className="font-sans text-lg text-teal font-semibold mb-8">Reclaim. Rise. Thrive.</p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: 'The Ascending Educator',
                  desc: 'A supportive pathway for justice-impacted educators seeking healing, professional renewal, and a return to purpose.',
                },
                {
                  title: 'Educational Consulting',
                  desc: 'Strategic partnership with schools and organizations to improve systems, strengthen leadership, and foster meaningful results.',
                },
                {
                  title: 'EduPreneurs Alliance',
                  desc: 'Empowering educators to turn their expertise into meaningful opportunities beyond the classroom.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="rounded-lg p-6"
                  style={{ border: '1px solid var(--border-light)' }}
                >
                  <h4 className="font-serif text-lg text-navy mb-3">{item.title}</h4>
                  <p className="font-sans text-[14px] text-body leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* One Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 max-w-[800px] mx-auto text-center"
          >
            <h3 className="font-serif text-2xl text-navy mb-4">One Vision. Endless Possibilities.</h3>
            <p className="font-sans text-[15px] text-body leading-[1.8] mb-6">
              Together, these pillars create a powerful ecosystem of support designed to elevate educators, strengthen communities, and expand opportunities for meaningful impact. Whether helping an educator reclaim their purpose, supporting a school in achieving its goals, or guiding an entrepreneur toward success, our mission remains the same:
            </p>
            <p className="font-serif text-xl text-navy">
              To ensure educators have the resources, support, and opportunities they need to succeed.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
