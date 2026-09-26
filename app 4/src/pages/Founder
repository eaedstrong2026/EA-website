import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PageLayout from '../sections/PageLayout'

export default function Founder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <PageLayout
      title="Meet the Founder"
      heroImage="/images/founder-header-floral.jpg"
      heroAlt="Elegant floral design complementing the founder's vision"
      compact
    >
      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          {/* Founder Intro with Photo */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-16">
            {/* Photo Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-lg overflow-hidden aspect-[3/4] max-w-[380px] mx-auto lg:mx-0">
                <img
                  src="/images/founder-tashika-fabian.jpg"
                  alt="Tashika K. Fabian, Founder of Educators' Alliance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <p className="font-serif text-2xl text-navy">Tashika K. Fabian, M.Ed.</p>
                <p className="font-sans text-sm text-teal font-semibold uppercase tracking-wider mt-1">
                  Founder & CEO
                </p>
                <p className="font-sans text-sm text-text-muted mt-1">
                  Educators&apos; Alliance LLC
                </p>
              </div>
            </motion.div>

            {/* Bio Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="section-label">Master Educator | Educational Consultant | Former Administrator | Motivational Speaker</p>

              <h2 className="section-heading">
                From Setback to Purpose. From Pain to Impact.
              </h2>

              <p className="font-sans text-[16px] text-body leading-[1.8]">
                For more than fourteen years, I dedicated my career to serving students, supporting educators, and leading with integrity throughout Hillsborough County Public Schools. As an award-winning educator, instructional leader, mentor, and assistant principal, I built a professional legacy grounded in academic excellence, community service, and an unwavering commitment to student success.
              </p>

              <p className="font-sans text-[15px] text-body leading-[1.8]">
                In 2024, my life and career were unexpectedly disrupted by allegations that ultimately proved to be unfounded. The resulting public narrative caused significant personal and professional hardship despite my complete legal and professional vindication. The State Attorney&apos;s Office dismissed all charges, and the Florida Department of Education concluded that no further action was warranted. While those outcomes affirmed my innocence, they could not fully restore the opportunities, relationships, and reputation that had been impacted.
              </p>

              <p className="font-sans text-[15px] text-body leading-[1.8]">
                Rather than allowing adversity to define my future, I chose to transform pain into purpose.
              </p>
            </motion.div>
          </div>

          {/* Continuing Story */}
          <div className="max-w-[850px] mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-sans text-[15px] text-body leading-[1.8]"
            >
              That journey led to the creation of <strong>Educators&apos; Alliance</strong> and <strong>The Ascending Educator</strong>, organizations founded on the belief that every educator deserves advocacy, support, restoration, and the opportunity to thrive. Through these initiatives, I am committed to empowering educational leaders, supporting educator entrepreneurs, and creating pathways for justice-impacted educators to heal, rebuild, and reclaim their professional purpose.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-[15px] text-body leading-[1.8]"
            >
              My story is not one of defeat; it is one of resilience. It is a testament to the power of perseverance, faith, and the unwavering belief that our greatest challenges can become the foundation for our greatest impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-sans text-[15px] text-body leading-[1.8]"
            >
              Today, I continue my mission of serving the educational community by helping educators rise above obstacles, strengthen their leadership capacity, and create meaningful changes in schools and communities across the nation.
            </motion.p>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 rounded-lg p-10 max-w-[850px] mx-auto"
            style={{ backgroundColor: '#F5F1EB' }}
          >
            <blockquote className="font-serif text-2xl md:text-3xl text-navy leading-relaxed mb-6">
              &ldquo;An educator&apos;s legacy is not defined by the challenges they face, but by the courage they demonstrate in rising above them.&rdquo;
            </blockquote>
            <p className="font-sans text-sm text-text-muted uppercase tracking-wider">
              Founder & CEO, Educators&apos; Alliance LLC
            </p>
            <p className="font-sans text-sm text-navy font-semibold mt-1">
              Tashika K. Fabian, M.Ed.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
