import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router'
import PageLayout from '../sections/PageLayout'

export default function AscendingEducator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const supports = [
    { title: 'Professional & Personal Development', desc: 'Workshops and training sessions designed to rebuild confidence and sharpen skills.' },
    { title: 'Legal & Professional Advocacy', desc: 'Guidance navigating background checks, professional reviews, and reentry barriers.' },
    { title: 'Leadership & Career Coaching', desc: 'Personalized coaching to help educators rediscover their strengths and chart a path forward.' },
    { title: 'Community & Mentorship', desc: 'Access to a supportive network of professionals who understand and advocate for second chances.' },
    { title: 'Job Placement & Career Restoration', desc: 'Resources and connections to help educators return to the classroom or explore new opportunities.' },
    { title: 'Entrepreneurship Support', desc: 'For those seeking to build new ventures, we provide tools and mentorship to turn expertise into opportunity.' },
  ]

  const focusAreas = [
    'Justice-impacted educators navigating career restoration',
    'Educators affected by criminal background barriers',
    'Educators seeking workforce reentry',
    'Professionals seeking professional renewal',
    'Educators in need of healing and advocacy',
    'Former educators transitioning to new roles',
    'Aspiring educators overcoming legal barriers',
    'Educators exploring entrepreneurship',
  ]

  const stats = [
    { num: '87%', label: 'of employers conduct background checks on all or most job candidates' },
    { num: '76%', label: 'of justice-impacted individuals report difficulty finding employment' },
    { num: '60%', label: 'of educators with barriers do not seek help due to stigma' },
    { num: '3x', label: 'higher unemployment rate for justice-impacted professionals' },
  ]

  return (
    <PageLayout
      title="The Ascending Educator"
      subtitle="A Pathway to Restoration, Renewal, and Professional Growth"
      heroImage="/images/tab-sustain.jpg"
      heroAlt="Sunlight breaking through representing hope and new beginnings"
    >
      {/* Introduction */}
      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="section-label mb-3">Introduction</p>
              <h2 className="section-heading mb-6">
                A Journey of Healing, Growth, and Purpose
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-[15px] text-body leading-[1.8]">
                  The Ascending Educator is a transformative initiative created by Educators&apos; Alliance to support educators navigating career restoration, professional renewal, and workforce reentry. Founded on the belief that every educator deserves a second chance, this program provides the resources, guidance, and community necessary to help educators overcome barriers and reclaim their purpose.
                </p>
                <p className="font-sans text-[15px] text-body leading-[1.8]">
                  Whether you are overcoming legal challenges, navigating background barriers, or seeking to rebuild your professional identity, The Ascending Educator is designed to meet you where you are and guide you toward where you want to be.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-lg overflow-hidden aspect-[4/3]"
            >
              <img
                src="/images/tab-staffing.jpg"
                alt="Educators in a supportive workshop environment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-p" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="container-s">
          <div className="text-center mb-10">
            <p className="section-label mb-3">The Hiring Penalty</p>
            <h2 className="section-heading">
              Understanding the Challenges
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg p-6 bg-white text-center"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <p className="font-serif text-4xl text-teal mb-3">{s.num}</p>
                <p className="font-sans text-[13px] text-body leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-p bg-white">
        <div className="container-s">
          <div className="max-w-[700px] mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="section-label mb-3">Our Mission</p>
              <p className="font-sans text-[16px] text-body leading-[1.8]">
                To provide educators impacted by legal and professional barriers with the support, resources, and community needed to restore their careers, rebuild their confidence, and reclaim their purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="section-label mb-3">Our Vision</p>
              <p className="font-sans text-[16px] text-body leading-[1.8]">
                A world where every educator, regardless of past challenges, has the opportunity to contribute their talents, experience, and passion to the field of education and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-p" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="container-s">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Who We Serve</p>
            <h2 className="section-heading">
              Supporting Educators at Every Stage
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-lg p-5 bg-white flex items-center gap-3"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <div className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                <span className="font-sans text-[14px] text-body">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support */}
      <section className="section-p bg-white">
        <div className="container-s">
          <div className="text-center mb-10">
            <p className="section-label mb-3">How We Support</p>
            <h2 className="section-heading">
              Comprehensive Support for Lasting Change
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supports.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg p-6"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <h4 className="font-serif text-[16px] text-navy mb-2">{s.title}</h4>
                <p className="font-sans text-[13px] text-body leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-p" style={{ backgroundColor: '#F5F1EB' }}>
        <div className="container-s">
          <div className="max-w-[700px] mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-label mb-3"
            >
              Ready to Begin?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-heading mb-6"
            >
              Your Journey Starts Here
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-[15px] text-body leading-[1.8] mb-8"
            >
              Take the first step toward restoration and renewal. Apply today to connect with our community of support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Link to="/apply" className="btn-pill-filled">Apply Now</Link>
              <Link to="/join-the-alliance" className="btn-pill-outline">Become a Partner</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
