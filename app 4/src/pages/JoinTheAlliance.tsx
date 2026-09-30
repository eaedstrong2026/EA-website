import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router'
import PageLayout from '../sections/PageLayout'

export default function JoinTheAlliance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'volunteer' | 'partner'>('volunteer')

  return (
    <PageLayout
      title='Join "The Alliance"'
      subtitle="Together, we create pathways for educators to rise."
      heroImage="/images/tab-edupreneurs.jpg"
      heroAlt="Community of educators supporting one another"
    >
      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          <div className="max-w-[800px] mb-12">
            <p className="section-label">Make an Impact</p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-heading mb-6"
            >
              There is a Place for You Here
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-[16px] text-body leading-[1.8]"
            >
              Educators&apos; Alliance thrives because of the community that surrounds and supports it. Whether you want to volunteer, partner, sponsor, or simply spread the word, your involvement makes a meaningful difference in the lives of educators.
            </motion.p>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 mb-12 border-b border-border-light"
          >
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`pb-3 font-sans text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                activeTab === 'volunteer'
                  ? 'text-navy border-teal'
                  : 'text-navy/50 border-transparent hover:text-navy'
              }`}
            >
              Volunteer With Us
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`pb-3 font-sans text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                activeTab === 'partner'
                  ? 'text-navy border-teal'
                  : 'text-navy/50 border-transparent hover:text-navy'
              }`}
            >
              Partner With Us
            </button>
          </motion.div>

          {/* Volunteer Tab */}
          {activeTab === 'volunteer' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-[800px] mb-10">
                <h3 className="font-serif text-2xl text-navy mb-4">Share Your Time. Strengthen the Journey.</h3>
                <p className="font-sans text-[15px] text-body leading-[1.8]">
                  The Ascending Educator thrives because of individuals who are willing to support, encourage, and uplift others. Volunteers play a critical role in creating a welcoming community where educators can heal, grow, and move forward with confidence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  'Career Mentors',
                  'Leadership Coaches',
                  'Resume and Interview Specialists',
                  'Wellness and Mental Health Practitioners',
                  'Workshop Facilitators',
                  'Legal or Reentry Resource Advisors',
                  'Community Outreach Ambassadors',
                  'Event and Program Support',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-lg"
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

              <div className="rounded-lg p-8 mb-10" style={{ backgroundColor: '#F5F1EB' }}>
                <h4 className="font-serif text-xl text-navy mb-4">Why Volunteer?</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Make a meaningful difference in an educator\'s life',
                    'Share your expertise and lived experiences',
                    'Expand your professional network',
                    'Help create pathways for educational equity and restoration',
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
                <p className="font-serif text-lg text-navy mt-6">Every minute of service helps an educator ascend.</p>
              </div>

              <div className="text-center">
                <Link to="/apply" className="btn-pill-filled">
                  Join the Alliance: Volunteer Application
                </Link>
              </div>
            </motion.div>
          )}

          {/* Partner Tab */}
          {activeTab === 'partner' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-[800px] mb-10">
                <h3 className="font-serif text-2xl text-navy mb-4">Building Pathways Through Collaboration.</h3>
                <p className="font-sans text-[15px] text-body leading-[1.8]">
                  We believe restoration happens stronger through collaboration. Schools, businesses, nonprofits, universities, community organizations, and educational leaders can partner with The Ascending Educator to create opportunities that support educator success.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {[
                  'Employment and Internship Pathways',
                  'Professional Development Collaborations',
                  'Resource and Referral Networks',
                  'Research and Advocacy Initiatives',
                  'Community Events and Speaking Engagements',
                  'Scholarships and Workforce Development Programs',
                  'Corporate and Organizational Sponsorships',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-lg"
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

              <div className="rounded-lg p-8 mb-10" style={{ backgroundColor: '#F5F1EB' }}>
                <h4 className="font-serif text-xl text-navy mb-4">Benefits of Partnership</h4>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    'Support educator restoration and workforce readiness',
                    'Advance educational equity and inclusion',
                    'Strengthen community impact',
                    'Demonstrate organizational social responsibility',
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
                <p className="font-serif text-lg text-navy">Together, we can help educators move from adversity to advancement.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {[
                  { title: 'Strategic Social Impact', desc: 'Support initiatives that promote advocacy, professional renewal, workforce reentry, leadership development, and educational advancement.' },
                  { title: 'Ecosystem Collaboration', desc: 'Connect with educators, educational leaders, nonprofits, businesses, and community organizations working toward a shared vision of empowerment and transformation.' },
                  { title: 'Enhanced Brand Equity', desc: 'Gain recognition through partnership spotlights, special events, community initiatives, social media engagement, and promotional opportunities.' },
                  { title: 'Talent & Leadership Pipeline', desc: 'Access opportunities to engage with talented educators, emerging leaders, and professionals seeking pathways for growth and advancement.' },
                  { title: 'Thought Leadership & Recognition', desc: 'Demonstrate your organization\'s commitment to educational equity, workforce development, community engagement, and second-chance opportunities.' },
                  { title: 'Corporate & Social Responsibility', desc: 'Receive acknowledgment as a community partner helping to create pathways for healing, restoration, and professional success.' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="rounded-lg p-6 bg-white"
                    style={{ border: '1px solid var(--border-light)' }}
                  >
                    <h5 className="font-serif text-[16px] text-navy mb-2">{item.title}</h5>
                    <p className="font-sans text-[13px] text-body leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Link to="/apply" className="btn-pill-filled">
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
