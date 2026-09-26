import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router'
import PageLayout from '../sections/PageLayout'

/* ------------------------------------------------------------------ */
/*  Who We Serve                                                       */
/* ------------------------------------------------------------------ */
function WhoWeServe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const groups = [
    {
      title: 'Educators of Color',
      desc: 'We support educators from historically underrepresented communities who are navigating barriers to opportunity, advancement, and leadership while bringing invaluable perspectives and experiences to the profession.',
    },
    {
      title: 'Women in Education',
      desc: 'We empower women educators who carry the weight of leadership, caregiving, and service, often while overcoming professional and personal obstacles along the way.',
    },
    {
      title: 'Justice-Impacted Educators',
      desc: 'We stand beside educators seeking a second chance, supporting those navigating workforce reentry, licensure challenges, or employment barriers related to prior legal-system involvement.',
    },
    {
      title: 'Educators Rebuilding Their Careers',
      desc: 'Whether impacted by burnout, workplace injustice, career interruption, or life circumstances, we help educators rediscover their strengths and take the next step forward.',
    },
  ]

  return (
    <section className="section-p" style={{ backgroundColor: '#F5F1EB' }} ref={ref}>
      <div className="container-s">
        <p className="section-label">Who Belongs</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-6"
        >
          Who Belongs to The Ascending Educator Alliance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[15px] text-body max-w-[700px] mb-10"
        >
          At <strong>The Ascending Educator</strong>, we believe that a setback should never define an educator&apos;s future. We serve educators who have faced personal, professional, educational, or legal-system challenges and are ready to reclaim their purpose, restore their confidence, and continue making a difference in the lives of others.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-lg p-6 bg-white"
              style={{ border: '1px solid var(--border-light)' }}
            >
              <h4 className="font-serif text-lg text-navy mb-3">{group.title}</h4>
              <p className="font-sans text-[14px] text-body leading-relaxed">{group.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  How We Support                                                     */
/* ------------------------------------------------------------------ */
function HowWeSupport() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const supports = [
    'Advocacy and professional guidance',
    'Certification and licensure support',
    'Career coaching and workforce reentry resources',
    'Mentorship and leadership development',
    'Wellness and restorative support services',
    'Community connection and networking opportunities',
  ]

  return (
    <section className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <p className="section-label">Our Support</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-10"
        >
          How We Support Educators
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {supports.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="flex items-start gap-3 p-5 rounded-lg"
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
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Ascension Boxes                                                    */
/* ------------------------------------------------------------------ */
function AscensionBoxes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const boxes = [
    {
      title: '"Rise Beyond Adversity"',
      desc: 'The Ascending Educator is an advocacy and sanctuary community where justice-impacted educators are welcomed with compassion, dignity, and understanding. We provide a supportive environment where individuals can reflect on their experiences, find encouragement, and begin the journey toward emotional and personal wellness. Here, healing starts with being seen, heard, and valued.',
      icon: '🌱',
    },
    {
      title: '"Restore What Matters"',
      desc: 'We believe that life\'s challenges do not diminish an educator\'s worth, potential, or calling. Through trauma-informed practices, mentorship, and access to meaningful resources, participants are empowered to rebuild their sense of self, strengthen their resilience, and restore trust in their professional future. This is a place where growth replaces limitations and possibilities replaces uncertainty.',
      icon: '🤝',
    },
    {
      title: '"Step Into Your Next Chapter"',
      desc: 'As educators regain confidence and clarity, they are supported in rediscovering their strengths and professional aspirations. Through connections with peers, specialists, and educational advocates, participants are encouraged to move forward with renewed direction and a deeper sense of purpose. Because every educator has something valuable to contribute, and their journey continues beyond adversity.',
      icon: '🎯',
    },
    {
      title: '"Ascend with Clarity and Direction"',
      desc: 'A cornerstone of the program is the Customized Ascending Plan (CAP), a personalized roadmap designed to support each educator\'s unique path forward. Through goal setting, strategic planning, and individualized support, the CAP helps participants identify opportunities, navigate barriers, and create a clear plan for professional growth. This tailored approach equips educators to re-enter the workforce with confidence, focus, and momentum.',
      icon: '🗺️',
    },
  ]

  return (
    <section className="section-p" style={{ backgroundColor: '#F5F1EB' }} ref={ref}>
      <div className="container-s">
        <div className="max-w-[800px] mb-12">
          <p className="section-label">Your Journey</p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-heading mb-6"
          >
            Your Ascension Starts Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-[15px] text-body leading-[1.8]"
          >
            Every educator&apos;s path is unique, but no one should have to navigate it alone. Through advocacy, restoration, mentorship, and personalized support, The Ascending Educator provides a pathway for justice-impacted educators to heal, rebuild, and move forward with renewed purpose and confidence.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {boxes.map((box, index) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-lg p-8 bg-white"
              style={{ border: '1px solid var(--border-light)' }}
            >
              <div className="text-4xl mb-4">{box.icon}</div>
              <h3 className="font-serif text-xl text-navy mb-4">{box.title}</h3>
              <p className="font-sans text-[14px] text-body leading-relaxed">{box.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-serif text-xl text-navy italic mb-8">
            Rise with clarity. Return with confidence. Reclaim what still belongs to you.
          </p>
          <Link to="/apply" className="btn-pill-filled">
            Get Ready to Ascend
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function AscendingEducator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <>
      <PageLayout
        title="The Ascending Educator"
        subtitle="Reclaiming Purpose. Restoring Hope."
        heroImage="/images/tab-ascending.jpg"
        heroAlt="Sunrise representing new beginnings for educators"
      >
        {/* Introduction */}
        <section className="section-p bg-white" ref={ref}>
          <div className="container-s">
            <div className="max-w-[850px]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-sm text-teal font-semibold uppercase tracking-wider mb-6"
              >
                An Advocacy and Sanctuary Community for Educators
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-sans text-sm text-navy/60 font-semibold uppercase tracking-wider mb-8"
              >
                A Signature Initiative of Educators&apos; Alliance
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-[16px] text-body leading-[1.8] mb-6"
              >
                The Ascending Educator was founded to provide advocacy, restoration, and professional renewal opportunities for justice-impacted educators. As the social-impact arm of Educators&apos; Alliance, this initiative supports educators through healing-centered services, personalized guidance, mentorship, workforce reentry support, and community engagement.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="font-sans text-[15px] text-body leading-[1.8] mb-6"
              >
                The Ascending Educator is a restorative support and advocacy initiative designed to empower <strong>justice-impacted educators</strong> as they navigate healing, professional renewal, and workforce reentry. We provide a compassionate sanctuary community where educators are met with dignity, understanding, and support. Through trauma-informed practices, mentorship, strategic guidance, and meaningful community connections, participants are equipped to overcome barriers, rebuild confidence, and move forward with renewed clarity and purpose.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans text-[15px] text-body leading-[1.8]"
              >
                Grounded in the belief that every educator deserves the opportunity to thrive, The Ascending Educator helps participants reclaim their identity, restore hope, and rediscover their professional calling. At the heart of the program is the <strong>Customized Ascending Plan (CAP)</strong>, a personalized roadmap that provides strategic direction for growth, professional advancement, and long-term success. Our commitment is to walk alongside educators with compassion, advocacy, and encouragement, affirming their value while helping them overcome barriers and achieve their goals.
              </motion.p>
            </div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid md:grid-cols-2 gap-12"
            >
              <div className="rounded-lg p-8" style={{ border: '1px solid var(--border-light)' }}>
                <p className="section-label">Mission</p>
                <p className="font-sans text-[15px] text-body leading-[1.8]">
                  To provide advocacy, support, and restorative pathways that help justice-impacted educators heal, rebuild, and reclaim their purpose.
                </p>
              </div>
              <div className="rounded-lg p-8" style={{ border: '1px solid var(--border-light)' }}>
                <p className="section-label">Vision</p>
                <p className="font-sans text-[15px] text-body leading-[1.8]">
                  To cultivate a future where every justice-impacted educator has the opportunity to rise, lead, and thrive with confidence, dignity, and lasting impact.
                </p>
              </div>
            </motion.div>

            {/* Our Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 rounded-lg p-10"
              style={{ backgroundColor: '#F5F1EB' }}
            >
              <h3 className="font-serif text-2xl text-navy mb-6">Our Commitment</h3>
              <p className="font-sans text-[15px] text-body leading-[1.8] mb-6">
                We are committed to empowering justice-impacted educators through advocacy, restoration, and personalized support. Through mentorship, community connection, and the Customized Ascending Plan (CAP), we help educators reclaim confidence, restore purpose, and move forward with resilience, hope, and renewed opportunity.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'An educator\'s value is greater than their challenges.',
                  'Healing and professional growth can happen simultaneously.',
                  'Every educator deserves advocacy, dignity, and opportunity.',
                  'Restored educators strengthen schools, communities, and future generations.',
                  'Resilience should be recognized, supported, and celebrated.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="font-sans text-[14px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="section-p" style={{ backgroundColor: '#F5F1EB' }}>
          <div className="container-s">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="max-w-[800px]"
            >
              <p className="section-label">Why It Matters</p>
              <h2 className="section-heading mb-6">Why The Ascending Educator Alliance Matters</h2>
              <p className="font-sans text-[15px] text-body leading-[1.8] mb-6">
                Too often, talented educators face barriers that leave them feeling isolated, discouraged, or disconnected from their calling. The Ascending Educator exists to change that reality.
              </p>
              <p className="font-serif text-xl text-navy mb-6">
                The Ascending Educator exists to change that story.
              </p>
              <p className="font-sans text-[15px] text-body leading-[1.8]">
                We are building a community of advocacy, restoration, and opportunity where educators are not defined by their challenges but empowered by their resilience. Together, we help educators rise beyond barriers, reclaim their voice, and ascend into their next chapter of purpose, leadership, and impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section-p bg-white">
          <div className="container-s">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Focus Areas</p>
              <h2 className="section-heading mb-10">How We Support Educators</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: 'Healing & Wellness', desc: 'Trauma-informed support designed specifically for educators seeking restoration.' },
                  { title: 'Professional Restoration', desc: 'Rebuild confidence, reclaim identity, and restore your professional standing.' },
                  { title: 'Workforce Reentry Support', desc: 'Guidance and resources for returning to the education profession with strength.' },
                  { title: 'Mentorship & Advocacy', desc: 'Connect with experienced advocates who understand your journey and champion your success.' },
                  { title: 'Customized Ascending Plans (CAP)', desc: 'Your personalized roadmap for growth, renewal, and professional advancement.' },
                ].map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-lg p-6"
                    style={{ border: '1px solid var(--border-light)' }}
                  >
                    <h4 className="font-serif text-lg text-navy mb-2">{area.title}</h4>
                    <p className="font-sans text-[13px] text-body leading-relaxed">{area.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <WhoWeServe />
        <HowWeSupport />
        <AscensionBoxes />
      </PageLayout>
    </>
  )
}
