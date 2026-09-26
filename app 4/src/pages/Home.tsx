import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'

/* ------------------------------------------------------------------ */
/*  Executive Summary                                                  */
/* ------------------------------------------------------------------ */
function ExecutiveSummary() {
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
          className="section-heading max-w-[800px] mb-8"
        >
          Empowering Educators. Strengthening Schools. Restoring Purpose.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[850px] space-y-5 mb-10"
        >
          <p className="font-sans text-[16px] text-body leading-[1.8]">
            Educators&apos; Alliance is a leadership, advocacy, and empowerment organization committed to helping educators heal, lead, and thrive. Through our three pillars, The Ascending Educator, Educational Consulting, and EduPreneurs Alliance, we provide restorative support, strategic expertise, and innovative opportunities that strengthen educators, educational organizations, and communities.
          </p>
          <p className="font-sans text-[15px] text-body leading-[1.8]">
            We believe that every educator deserves access to the resources, guidance, and opportunities needed to achieve their highest potential. Whether supporting justice-impacted educators on a path toward professional renewal, helping schools improve systems and outcomes, or empowering educators to build successful entrepreneurial ventures, our work is rooted in excellence, equity, advocacy, and transformational leadership.
          </p>
          <p className="font-sans text-[15px] text-body leading-[1.8]">
            By creating pathways for restoration, growth, and innovation, Educators&apos; Alliance equips educators to overcome barriers, expand their impact, and make meaningful contributions in classrooms, organizations, businesses, and communities. Together, we are cultivating a future where educators are empowered to rise with purpose, lead with confidence, and create lasting change.
          </p>
        </motion.div>

        {/* Tab links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link to="/ascending-educator" className="btn-pill">Explore The Ascending Educator</Link>
          <Link to="/consulting-services" className="btn-pill-outline">Explore Educators' Alliance Consulting</Link>
          <Link to="/join-the-alliance" className="btn-pill-outline">Join the Alliance</Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Mission & Vision                                                   */
/* ------------------------------------------------------------------ */
function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-p" style={{ backgroundColor: '#F5F1EB' }} ref={ref}>
      <div className="container-s">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="section-label">Mission</p>
            <h2 className="section-heading mb-6">Empowering Educators to Lead, Thrive, and Transform</h2>
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              Educators&apos; Alliance empowers educators and educational organizations through advocacy, leadership development, strategic innovation, and transformative opportunities that foster restoration, growth, and lasting impact in schools, businesses, and communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="section-label">Vision</p>
            <h2 className="section-heading mb-6">A World Where Educators Lead With Purpose</h2>
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              To cultivate a world where educators are recognized as powerful agents of change, equipped to overcome barriers, lead with purpose, and create lasting impact across every space they serve.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-4">
            Three Pathways. One Mission.
          </p>
          <p className="font-sans text-lg text-teal font-semibold uppercase tracking-wider">
            Reclaim Your Purpose. Expand Your Potential. Maximize Your Impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  About Educators' Alliance                                          */
/* ------------------------------------------------------------------ */
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <p className="section-label">About Educators&apos; Alliance</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading max-w-[700px] mb-8"
        >
          Empowering Educators. Strengthening Communities. Transforming Futures.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src="/images/about-diverse-team.jpg"
                alt="Diverse team of educators collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-16 mt-8">
              <div>
                <p className="font-serif text-4xl text-navy">25+</p>
                <p className="font-sans text-sm text-text-muted mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-navy">50K+</p>
                <p className="font-sans text-sm text-text-muted mt-1">Students Impacted</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              At Educators&apos; Alliance, we believe every educator deserves the opportunity to heal, lead, and thrive. We are a leadership, advocacy, and empowerment organization dedicated to creating pathways that support educators at every stage of their professional journey.
            </p>
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              Founded on the principles of excellence, equity, restoration, and innovation, Educators&apos; Alliance serves as a catalyst for growth and transformation. Through advocacy, leadership development, educational consulting, and entrepreneurship, we equip educators with the resources, support, and opportunities needed to maximize their impact in schools, businesses, and communities.
            </p>
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              We understand that educators are more than their titles. They are leaders, innovators, changemakers, and community builders whose influence extends far beyond the classroom. Our work is centered on helping educators overcome barriers, embrace opportunities, and confidently pursue their next chapter.
            </p>

            <div className="pt-4">
              <p className="font-serif text-2xl text-navy mb-2">Three Pathways. One Mission.</p>
              <p className="font-sans text-lg text-teal font-semibold">Reclaim. Rise. Thrive.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Three Pillars                                                      */
/* ------------------------------------------------------------------ */
function ThreePillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const pillars = [
    {
      title: 'The Ascending Educator',
      subtitle: 'Advocacy. Restoration. Purpose.',
      desc: 'We provide a supportive pathway for justice-impacted educators seeking healing, professional renewal, and a return to purpose. Through advocacy, mentorship, personalized guidance, and our Customized Ascending Plan (CAP), we help educators reclaim their confidence, restore their professional identity, and move forward with clarity and strength.',
      focus: ['Healing & Wellness', 'Professional Restoration', 'Workforce Reentry Support', 'Mentorship & Advocacy', 'Customized Ascending Plans (CAP)'],
      href: '/ascending-educator',
      color: 'bg-navy',
    },
    {
      title: 'Educational Consulting',
      subtitle: 'Strengthening Schools. Developing Leaders.',
      desc: 'We partner with schools, districts, and educational organizations to improve systems, strengthen leadership, and foster meaningful results. Our services are designed to help educators and organizations move from vision to implementation with confidence and purpose.',
      focus: ['School Improvement Planning', 'Leadership Development', 'Professional Learning', 'Instructional Coaching', 'Strategic Planning', 'Organizational Effectiveness'],
      href: '/consulting-services',
      color: 'bg-teal',
    },
    {
      title: 'EduPreneurs Alliance Piloting Program',
      subtitle: 'Building Businesses. Expanding Impact.',
      desc: 'We empower educators to turn their expertise into meaningful opportunities beyond the classroom. Through business development, branding, consulting support, and leadership coaching, we help educators create sustainable ventures and expand their influence.',
      focus: ['Business Development', 'Educational Consulting', 'Personal Branding', 'Leadership Coaching', 'Public Speaking', 'Product Creation & Launch'],
      href: '/edupreneurs-alliance',
      color: 'bg-navy',
    },
  ]

  return (
    <section className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <p className="section-label">Our Three Pillars of Impact</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading max-w-[700px] mb-4"
        >
          What We Offer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[15px] text-body max-w-[700px] mb-12"
        >
          Pathways for Educators to Reclaim, Rise, and Thrive
        </motion.p>

        <div className="space-y-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="rounded-lg p-8 lg:p-10"
              style={{ border: '1px solid var(--border-light)' }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${pillar.color} mb-4`}>
                    <span className="font-serif text-sm text-white font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-navy mb-2">{pillar.title}</h3>
                  <p className="font-sans text-sm text-teal font-semibold uppercase tracking-wider mb-4">{pillar.subtitle}</p>
                  <p className="font-sans text-[15px] text-body leading-[1.8]">{pillar.desc}</p>
                </div>
                <div>
                  <p className="font-sans font-semibold text-[13px] uppercase tracking-wider text-navy mb-4">Focus Areas:</p>
                  <ul className="space-y-2.5">
                    {pillar.focus.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                        <span className="font-sans text-[14px] text-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to={pillar.href} className="inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-wider text-teal hover:text-navy transition-colors">
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Who We Serve                                                       */
/* ------------------------------------------------------------------ */
function WhoWeServe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const groups = [
    { title: 'Justice-Impacted Educators', desc: 'seeking restoration, advocacy, and professional renewal.' },
    { title: 'Schools & Educational Organizations', desc: 'looking to strengthen systems, leadership, and outcomes.' },
    { title: 'Educational Leaders', desc: 'ready to expand their influence and effectiveness.' },
    { title: 'Educator Entrepreneurs', desc: 'building businesses, brands, and innovative solutions.' },
    { title: 'Community Partners', desc: 'committed to advancing opportunity, equity, and impact.' },
  ]

  return (
    <section className="section-p" style={{ backgroundColor: '#F5F1EB' }} ref={ref}>
      <div className="container-s">
        <p className="section-label">Who We Serve</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-6"
        >
          We Support Those Committed to Growth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[15px] text-body max-w-[700px] mb-10"
        >
          We support educators, leaders, organizations, and changemakers who are committed to growth, impact, and transformation.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="rounded-lg p-6 bg-white"
              style={{ border: '1px solid var(--border-light)' }}
            >
              <h4 className="font-serif text-[16px] text-navy mb-2">{group.title}</h4>
              <p className="font-sans text-[14px] text-body">{group.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  What Our Clients Gain                                              */
/* ------------------------------------------------------------------ */
function WhatClientsGain() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const gains = [
    {
      title: 'Clarity & Direction',
      desc: 'Develop a clear vision and actionable path forward.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      title: 'Confidence & Resilience',
      desc: 'Build the mindset and strength needed to overcome challenges and embrace new opportunities.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      title: 'Leadership & Growth',
      desc: 'Expand professional capacity, leadership influence, and career potential.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: 'Advocacy & Impact',
      desc: 'Access meaningful support, create lasting change, and make a greater impact in schools and communities.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <p className="section-label">Outcomes</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-6"
        >
          What Our Clients Gain
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[15px] text-body max-w-[700px] mb-10"
        >
          Every service, program, and initiative is designed to help participants:
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {gains.map((gain, index) => (
            <motion.div
              key={gain.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="rounded-lg p-7"
              style={{ border: '1px solid var(--border-light)' }}
            >
              <div className="text-teal mb-4">{gain.icon}</div>
              <h4 className="font-serif text-[17px] text-navy mb-2">{gain.title}</h4>
              <p className="font-sans text-[14px] text-body leading-relaxed">{gain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Advocacy, Empowerment, and Transformation                          */
/* ------------------------------------------------------------------ */
function AdvocacySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-p" style={{ backgroundColor: '#F5F1EB' }} ref={ref}>
      <div className="container-s">
        <p className="section-label">Our Commitment</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading max-w-[700px] mb-8"
        >
          Advocacy, Empowerment, and Transformation
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[850px] space-y-5 mb-10"
        >
          <p className="font-sans text-[16px] text-body leading-[1.8]">
            At Educators&apos; Alliance, we believe that every educator deserves to be valued, supported, and empowered to reach their highest potential. We are committed to fostering a culture of respect, belonging, and opportunity where individuals from diverse backgrounds, experiences, and perspectives can thrive.
          </p>
          <p className="font-sans text-[15px] text-body leading-[1.8]">
            We recognize that educators face unique professional, personal, and systemic challenges throughout their careers. Through advocacy, leadership development, restorative support, and community-centered partnerships, we work to remove barriers, expand access to opportunities, and create pathways for growth and success.
          </p>
          <p className="font-sans text-[15px] text-body leading-[1.8]">
            Our commitment extends across all areas of our work, from supporting justice-impacted educators through The Ascending Educator to strengthening schools, developing leaders, and empowering educator entrepreneurs. We believe that when educators are equipped with the tools, resources, and support they need, entire communities benefit.
          </p>
          <p className="font-sans text-[15px] text-body leading-[1.8]">
            At Educators&apos; Alliance, we celebrate the strengths, experiences, and contributions that make every educator unique. Together, we are building a community where educators can heal, lead, innovate, and thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {[
            'Championing educators through advocacy and support',
            'Empowering leaders to grow, innovate, and excel',
            'Creating pathways for restoration and renewal',
            'Fostering transformational impact in schools and communities',
            'Expanding opportunities for leadership, entrepreneurship, and success',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-white">
              <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="font-sans text-[14px] text-body">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-serif text-xl text-navy mt-10 text-center"
        >
          Because Every Educator Deserves the Opportunity to Rise.
        </motion.p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Our Impact                                                         */
/* ------------------------------------------------------------------ */
function OurImpact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const impacts = [
    {
      title: 'Restoration & Renewal',
      desc: 'Rebuild confidence, restore purpose, and move forward with clarity.',
      icon: '🌱',
    },
    {
      title: 'Leadership & Growth',
      desc: 'Develop the skills, strategies, and mindset needed to lead effectively.',
      icon: '🎯',
    },
    {
      title: 'Innovation & Opportunity',
      desc: 'Expand professional pathways through entrepreneurship and creative solutions.',
      icon: '🚀',
    },
    {
      title: 'Advocacy & Community',
      desc: 'Access support, mentorship, and meaningful connections that foster success.',
      icon: '🤝',
    },
  ]

  return (
    <section className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <p className="section-label">Our Impact</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading max-w-[700px] mb-6"
        >
          Transforming Lives. Strengthening Communities.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[15px] text-body max-w-[800px] mb-10"
        >
          At Educators&apos; Alliance, impact is measured not only by what we accomplish, but by the lives we help transform. Through advocacy, leadership development, and entrepreneurship, we equip educators with the support, resources, and opportunities needed to overcome challenges, expand their influence, and create meaningful change.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans font-semibold text-[15px] text-navy mb-8"
        >
          Through Our Work, Educators Gain:
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
              className="rounded-lg p-7 text-center"
              style={{ border: '1px solid var(--border-light)' }}
            >
              <div className="text-4xl mb-4">{impact.icon}</div>
              <h4 className="font-serif text-[16px] text-navy mb-3">{impact.title}</h4>
              <p className="font-sans text-[13px] text-body leading-relaxed">{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Join the Movement                                                  */
/* ------------------------------------------------------------------ */
function JoinTheMovement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const actions = [
    {
      title: '🌱 Seeking Restoration?',
      desc: 'Explore The Ascending Educator and begin your journey toward healing, renewal, and professional growth.',
      cta: 'Get Ready to Ascend',
      href: '/apply',
    },
    {
      title: '🎯 Looking for Strategic Support?',
      desc: 'Partner with us to strengthen leadership, improve systems, and achieve organizational goals.',
      cta: 'Consult Educators\' Alliance',
      href: '/consulting-services',
    },
    {
      title: '🚀 Ready to Expand Your Impact?',
      desc: 'Discover opportunities through EduPreneurs Alliance and transform your expertise into influence and innovation.',
      cta: 'Learn More',
      href: '/edupreneurs-alliance',
    },
    {
      title: '🤝 Want to Make a Difference?',
      desc: 'Sponsor, volunteer, or partner with us to help create pathways of opportunity for educators.',
      cta: 'Become an Ambassador',
      href: '/join-the-alliance',
    },
  ]

  return (
    <section className="section-p" style={{ backgroundColor: '#F5F1EB' }} ref={ref}>
      <div className="container-s">
        <p className="section-label">Take Action</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-6"
        >
          Join the Movement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[15px] text-body max-w-[800px] mb-12"
        >
          Whether you&apos;re seeking support, developing your leadership, strengthening your organization, or creating new opportunities for impact, there is a place for you at Educators&apos; Alliance.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="rounded-lg p-8 bg-white"
              style={{ border: '1px solid var(--border-light)' }}
            >
              <h4 className="font-serif text-[18px] text-navy mb-3">{action.title}</h4>
              <p className="font-sans text-[14px] text-body leading-relaxed mb-6">{action.desc}</p>
              <Link to={action.href} className="btn-pill text-xs">
                {action.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */
function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="section-label">Contact</p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-heading mb-6"
          >
            Let&apos;s Build Something Meaningful Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[15px] text-body leading-[1.8] mb-10"
          >
            Ready to partner with Educators&apos; Alliance? We&apos;re here to support your goals, answer your questions, and explore how we can work together to create lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-lg p-10"
            style={{ backgroundColor: '#F5F1EB' }}
          >
            <p className="font-serif text-xl text-navy mb-2">Get in Touch</p>
            <p className="font-sans text-[15px] text-body mb-6">
              Reach out to start the conversation about how Educators&apos; Alliance can support your mission.
            </p>
            <a href="mailto:info@educatorsalliance.org" className="btn-pill">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Home Page                                                          */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExecutiveSummary />
        <MissionVision />
        <AboutSection />
        <ThreePillars />
        <WhoWeServe />
        <WhatClientsGain />
        <AdvocacySection />
        <OurImpact />
        <JoinTheMovement />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
