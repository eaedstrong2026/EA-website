import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import PageLayout from '../sections/PageLayout'

export default function ApplyNow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'ascend' | 'alliance'>('ascend')

  return (
    <PageLayout
      title="Apply Now"
      subtitle="Take the first step toward restoration, growth, and new possibilities."
      heroImage="/images/tab-ascending.jpg"
      heroAlt="Educator looking toward a bright future"
    >
      <section className="section-p bg-white" ref={ref}>
        <div className="container-s">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <p className="section-label">Begin Your Journey</p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="section-heading mb-6"
              >
                Rise With Purpose. Lead With Confidence.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-[16px] text-body leading-[1.8]"
              >
                Whether you are seeking support through The Ascending Educator, looking to partner with us for consulting services, or ready to explore EduPreneurs Alliance, we are here to help you take the next step.
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
                onClick={() => setActiveTab('ascend')}
                className={`pb-3 font-sans text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activeTab === 'ascend'
                    ? 'text-navy border-teal'
                    : 'text-navy/50 border-transparent hover:text-navy'
                }`}
              >
                Get Ready to Ascend
              </button>
              <button
                onClick={() => setActiveTab('alliance')}
                className={`pb-3 font-sans text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activeTab === 'alliance'
                    ? 'text-navy border-teal'
                    : 'text-navy/50 border-transparent hover:text-navy'
                }`}
              >
                Join "The Alliance"
              </button>
            </motion.div>

            {/* Tab 1: Get Ready to Ascend */}
            {activeTab === 'ascend' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-10">
                  <h3 className="font-serif text-2xl text-navy mb-2">Get Ready to Ascend</h3>
                  <p className="font-sans text-[15px] text-body">
                    Rise with Clarity. Return with Confidence. Reclaim What Still Belongs to You.
                  </p>
                </div>

                <div className="rounded-lg p-8 mb-8" style={{ backgroundColor: '#F5F1EB' }}>
                  <p className="font-sans text-[15px] text-body leading-[1.8] mb-6">
                    If you are a justice-impacted educator seeking restoration, support, and a pathway forward, <strong>The Ascending Educator</strong> was created for you. This initiative provides a compassionate, advocacy-centered community where educators can heal from past challenges, rebuild their confidence, and reconnect with their professional purpose.
                  </p>
                  <p className="font-sans text-[15px] text-body leading-[1.8]">
                    We believe your story does not end with hardship. It continues with resilience, growth, and the opportunity to make a lasting impact.
                  </p>
                </div>

                {/* Ascending Educator Movement CTAs */}
                <div className="text-center mb-12">
                  <p className="font-sans text-sm text-teal font-semibold uppercase tracking-wider mb-4">Ascending Educator Movement</p>
                  <a
                    href="mailto:ascending@educatorsalliance.org?subject=Ascending%20Educator%20Participant%20Interest"
                    className="btn-pill-filled"
                  >
                    Apply for Support
                  </a>
                </div>

                {/* Participant Interest Questionnaire */}
                <div className="rounded-lg p-8" style={{ border: '1px solid var(--border-light)' }}>
                  <h4 className="font-serif text-xl text-navy mb-2">The Ascending Educator</h4>
                  <p className="font-sans text-sm text-teal font-semibold uppercase tracking-wider mb-6">Participant Interest Questionnaire</p>

                  <p className="font-sans text-[14px] text-body leading-relaxed mb-8">
                    Thank you for your interest in The Ascending Educator. This brief questionnaire will help us learn more about you and determine how we can best support your journey toward healing, restoration, and professional renewal.
                  </p>

                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Personal Information */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Personal Information</h5>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-sans text-[13px] font-medium text-navy mb-1">Full Name</label>
                          <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                        </div>
                        <div>
                          <label className="block font-sans text-[13px] font-medium text-navy mb-1">Email Address</label>
                          <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                        </div>
                        <div>
                          <label className="block font-sans text-[13px] font-medium text-navy mb-1">Phone Number</label>
                          <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                        </div>
                        <div>
                          <label className="block font-sans text-[13px] font-medium text-navy mb-1">City & State</label>
                          <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                        </div>
                      </div>
                    </div>

                    {/* Tell Us About Yourself */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Tell Us About Yourself</h5>

                      <div className="mb-6">
                        <p className="font-sans text-[14px] font-medium text-navy mb-3">1. Which best describes your background in education?</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {['Teacher', 'School Administrator', 'Instructional Coach', 'Counselor', 'Higher Education Professional', 'Educational Support Staff', 'Educational Consultant', 'Other'].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="w-4 h-4 accent-teal" />
                              <span className="font-sans text-[13px] text-body">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="font-sans text-[14px] font-medium text-navy mb-3">2. What best describes your current situation?</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {['Employed in Education', 'Seeking Employment', 'Considering a Return to Education', 'Exploring New Opportunities', 'Career Transitioning', 'Other'].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="w-4 h-4 accent-teal" />
                              <span className="font-sans text-[13px] text-body">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="font-sans text-[14px] font-medium text-navy mb-3">3. What challenges or barriers are you currently navigating? (Check all that apply)</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {['Professional Setback', 'Career Interruption', 'Workforce Reentry', 'Loss of Confidence', 'Professional Renewal', 'Legal or Justice-Related Challenges', 'Emotional Wellness Concerns', 'Certification or Licensure Questions', 'Other'].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="w-4 h-4 accent-teal" />
                              <span className="font-sans text-[13px] text-body">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* How Can We Support You */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">How Can We Support You?</h5>

                      <div className="mb-6">
                        <p className="font-sans text-[14px] font-medium text-navy mb-3">4. What type of support are you seeking? (Check all that apply)</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {['Mentorship', 'Career Coaching', 'Professional Renewal Support', 'Workforce Reentry Guidance', 'Leadership Development', 'Wellness & Restoration Resources', 'Advocacy Support', 'Professional Networking', 'Customized Ascending Plan (CAP)', 'Other'].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="w-4 h-4 accent-teal" />
                              <span className="font-sans text-[13px] text-body">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block font-sans text-[14px] font-medium text-navy mb-2">5. What are your primary goals for the next 6-12 months?</label>
                        <textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                      </div>

                      <div className="mb-6">
                        <label className="block font-sans text-[14px] font-medium text-navy mb-2">6. What inspired you to connect with The Ascending Educator?</label>
                        <textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                      </div>
                    </div>

                    {/* Final Reflection */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Final Reflection</h5>
                      <label className="block font-sans text-[14px] font-medium text-navy mb-2">
                        Complete this statement: <em>&quot;My next chapter begins when I...&quot;</em>
                      </label>
                      <textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                    </div>

                    {/* Submission Statement */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer mb-3">
                        <input type="checkbox" className="w-4 h-4 accent-teal mt-0.5" />
                        <span className="font-sans text-[13px] text-body">I understand that submitting this questionnaire does not guarantee enrollment in The Ascending Educator program.</span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer mb-6">
                        <input type="checkbox" className="w-4 h-4 accent-teal mt-0.5" />
                        <span className="font-sans text-[13px] text-body">I am interested in learning more about available services, resources, and opportunities.</span>
                      </label>
                    </div>

                    {/* Privacy Notice */}
                    <div className="rounded-lg p-6 bg-cream/50">
                      <h6 className="font-sans text-[13px] font-semibold text-navy mb-2">Privacy & Confidentiality Notice</h6>
                      <p className="font-sans text-[12px] text-body leading-relaxed mb-4">
                        Your privacy matters to us. Information submitted through this form will be used only to assess your interest in The Ascending Educator and to connect you with appropriate programs, services, and resources. Your information will be kept confidential and will not be shared with third parties without your consent, except as required by law.
                      </p>
                      <p className="font-sans text-[12px] text-body leading-relaxed mb-4">
                        By submitting this form, you consent to being contacted by Educators&apos; Alliance regarding your inquiry and potential participation in The Ascending Educator.
                      </p>
                      <p className="font-sans text-[12px] text-body leading-relaxed mb-4">
                        <strong>Please Note:</strong> The Ascending Educator is not a legal services provider, healthcare provider, crisis intervention service, or counseling agency. Information submitted through this form should not include highly confidential medical, legal, or emergency-related information. If you are experiencing an emergency or require immediate assistance, please contact appropriate emergency, legal, or mental health resources in your area.
                      </p>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-teal mt-0.5" />
                        <span className="font-sans text-[13px] text-body font-medium">I have read and agree to the Privacy & Confidentiality Notice.</span>
                      </label>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn-pill-filled">
                        Submit
                      </button>
                    </div>

                    <div className="text-center pt-6 border-t border-border-light">
                      <p className="font-sans text-[14px] text-body mb-4">Thank you for taking the first step.</p>
                      <div className="space-y-1">
                        <p className="font-sans text-[13px] text-navy font-semibold">Rise Beyond Adversity.</p>
                        <p className="font-sans text-[13px] text-navy font-semibold">Restore What Matters.</p>
                        <p className="font-sans text-[13px] text-navy font-semibold">Step Into Your Next Chapter.</p>
                        <p className="font-sans text-[13px] text-navy font-semibold">Ascend with Clarity and Direction.</p>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Join The Alliance */}
            {activeTab === 'alliance' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-10">
                  <h3 className="font-serif text-2xl text-navy mb-2">Join &quot;The Alliance&quot;</h3>
                  <p className="font-sans text-[15px] text-body">
                    Become an Ambassador for educators seeking restoration and renewal.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { title: 'Become a Mentor', desc: 'Guide educators through their journey of renewal.' },
                    { title: 'Sponsor an Educator', desc: 'Financially support an educator\'s path forward.' },
                    { title: 'Partner With Us', desc: 'Collaborate to expand opportunities for educators.' },
                    { title: 'Volunteer Your Services', desc: 'Share your expertise and time with our community.' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="rounded-lg p-6"
                      style={{ border: '1px solid var(--border-light)' }}
                    >
                      <h4 className="font-serif text-lg text-navy mb-2">{item.title}</h4>
                      <p className="font-sans text-[13px] text-body">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Volunteer Application Form */}
                <div className="rounded-lg p-8" style={{ border: '1px solid var(--border-light)' }}>
                  <h4 className="font-serif text-xl text-navy mb-2">The Ascending Educator Volunteer Application</h4>
                  <p className="font-sans text-sm text-teal font-semibold uppercase tracking-wider mb-6">Thank You for Your Interest</p>

                  <p className="font-sans text-[14px] text-body leading-relaxed mb-8">
                    Thank you for your interest in volunteering with The Ascending Educator, an initiative of Educators&apos; Alliance dedicated to supporting justice-impacted educators through advocacy, restoration, mentorship, and professional renewal. Our volunteers play a vital role in helping educators reclaim confidence, rediscover purpose, and create meaningful pathways forward.
                  </p>

                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Personal Information */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Personal Information</h5>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {['Full Name', 'Preferred Name (if applicable)', 'Address', 'City, State, ZIP', 'Email Address', 'Phone Number'].map((label) => (
                          <div key={label}>
                            <label className="block font-sans text-[13px] font-medium text-navy mb-1">{label}</label>
                            <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className="font-sans text-[13px] font-medium text-navy mb-2">Preferred Method of Contact</p>
                        <div className="flex gap-4">
                          {['Email', 'Phone', 'Text Message'].map((item) => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="w-4 h-4 accent-teal" />
                              <span className="font-sans text-[13px] text-body">{item}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Professional Information</h5>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block font-sans text-[13px] font-medium text-navy mb-1">Current Occupation</label>
                          <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                        </div>
                        <div>
                          <label className="block font-sans text-[13px] font-medium text-navy mb-1">Organization/Employer</label>
                          <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                        </div>
                      </div>

                      <p className="font-sans text-[13px] font-medium text-navy mb-2">Professional Background (Check all that apply)</p>
                      <div className="grid sm:grid-cols-3 gap-2 mb-4">
                        {['Teacher', 'School Administrator', 'Instructional Coach', 'Higher Education Professional', 'Counselor', 'Social Worker', 'Mental Health Professional', 'Attorney', 'Human Resources Professional', 'Career Coach', 'Educational Consultant', 'Entrepreneur', 'Nonprofit Professional', 'Community Leader', 'Other'].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-teal" />
                            <span className="font-sans text-[13px] text-body">{item}</span>
                          </label>
                        ))}
                      </div>

                      <p className="font-sans text-[13px] font-medium text-navy mb-2">Years of Professional Experience</p>
                      <div className="flex flex-wrap gap-4">
                        {['0-5 Years', '6-10 Years', '11-15 Years', '16-20 Years', '20+ Years'].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="years" className="w-4 h-4 accent-teal" />
                            <span className="font-sans text-[13px] text-body">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Volunteer Interests */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Volunteer Interests</h5>
                      <p className="font-sans text-[13px] font-medium text-navy mb-2">Which volunteer opportunities are you interested in? (Check all that apply)</p>
                      <div className="grid sm:grid-cols-3 gap-2">
                        {['Mentor', 'Leadership Coach', 'Career Coach', 'Resume Reviewer', 'Interview Coach', 'Workshop Facilitator', 'Wellness Practitioner', 'Community Ambassador', 'Program Support Volunteer', 'Event Volunteer', 'Fundraising Support', 'Partnership Development', 'Administrative Support', 'Marketing & Communications', 'Grant Writing Support', 'Other'].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-teal" />
                            <span className="font-sans text-[13px] text-body">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Why Volunteer */}
                    <div>
                      <label className="block font-sans text-[14px] font-medium text-navy mb-2">Why are you interested in volunteering with The Ascending Educator?</label>
                      <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                    </div>

                    {/* Skills */}
                    <div>
                      <label className="block font-sans text-[14px] font-medium text-navy mb-2">Please describe any skills, expertise, or experiences you believe would benefit program participants.</label>
                      <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                    </div>

                    <div>
                      <p className="font-sans text-[14px] font-medium text-navy mb-2">Have you previously worked with any of the following? (Check all that apply)</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {['Educators', 'Justice-Impacted Individuals', 'Nonprofit Organizations', 'Career Development Programs', 'Workforce Reentry Initiatives', 'Leadership Development Programs', 'Mentoring Programs', 'Mental Health & Wellness Initiatives', 'Community Outreach Programs', 'Other'].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-teal" />
                            <span className="font-sans text-[13px] text-body">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Availability</h5>

                      <p className="font-sans text-[13px] font-medium text-navy mb-2">How often are you available to volunteer?</p>
                      <div className="flex flex-wrap gap-4 mb-4">
                        {['Weekly', 'Biweekly', 'Monthly', 'Occasionally', 'Special Events Only'].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="frequency" className="w-4 h-4 accent-teal" />
                            <span className="font-sans text-[13px] text-body">{item}</span>
                          </label>
                        ))}
                      </div>

                      <p className="font-sans text-[13px] font-medium text-navy mb-2">Preferred Volunteer Format</p>
                      <div className="flex flex-wrap gap-4 mb-4">
                        {['Virtual', 'In-Person', 'Hybrid'].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="format" className="w-4 h-4 accent-teal" />
                            <span className="font-sans text-[13px] text-body">{item}</span>
                          </label>
                        ))}
                      </div>

                      <p className="font-sans text-[13px] font-medium text-navy mb-2">Typical Availability</p>
                      <div className="flex flex-wrap gap-4">
                        {['Weekdays', 'Evenings', 'Weekends', 'Flexible'].map((item) => (
                          <label key={item} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-teal" />
                            <span className="font-sans text-[13px] text-body">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Alignment with Mission */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Alignment with Our Mission</h5>
                      <div className="space-y-4">
                        <div>
                          <label className="block font-sans text-[14px] font-medium text-navy mb-2">What does advocacy, empowerment, and restoration mean to you?</label>
                          <textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                        </div>
                        <div>
                          <label className="block font-sans text-[14px] font-medium text-navy mb-2">How would you contribute to creating a positive, supportive, and restorative environment for participants?</label>
                          <textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                        </div>
                      </div>
                    </div>

                    {/* References */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">References</h5>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <p className="font-sans text-[13px] font-semibold text-navy">Reference #1</p>
                          {['Name', 'Relationship', 'Phone/Email'].map((label) => (
                            <div key={label}>
                              <label className="block font-sans text-[13px] font-medium text-navy mb-1">{label}</label>
                              <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                            </div>
                          ))}
                        </div>
                        <div className="space-y-3">
                          <p className="font-sans text-[13px] font-semibold text-navy">Reference #2</p>
                          {['Name', 'Relationship', 'Phone/Email'].map((label) => (
                            <div key={label}>
                              <label className="block font-sans text-[13px] font-medium text-navy mb-1">{label}</label>
                              <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Background & Safety */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Background & Safety</h5>
                      <p className="font-sans text-[13px] text-body mb-4">
                        To ensure the safety and well-being of program participants, some volunteer roles may require additional screening.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <p className="font-sans text-[13px] font-medium text-navy mb-2">Are you willing to participate in a background screening if required?</p>
                          <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="background" className="w-4 h-4 accent-teal" />
                              <span className="font-sans text-[13px] text-body">Yes</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="background" className="w-4 h-4 accent-teal" />
                              <span className="font-sans text-[13px] text-body">No</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p className="font-sans text-[13px] font-medium text-navy mb-2">Have you ever volunteered within a mentoring, education, nonprofit, or youth-serving organization?</p>
                          <div className="flex gap-4 mb-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="volunteered" className="w-4 h-4 accent-teal" />
                              <span className="font-sans text-[13px] text-body">Yes</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="volunteered" className="w-4 h-4 accent-teal" />
                              <span className="font-sans text-[13px] text-body">No</span>
                            </label>
                          </div>
                          <label className="block font-sans text-[13px] font-medium text-navy mb-1">If yes, please describe:</label>
                          <textarea rows={2} className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                        </div>
                      </div>
                    </div>

                    {/* Volunteer Commitment */}
                    <div>
                      <h5 className="font-serif text-lg text-navy mb-4">Volunteer Commitment</h5>
                      <p className="font-sans text-[13px] font-medium text-navy mb-3">By volunteering with The Ascending Educator, I agree to:</p>
                      <div className="space-y-2 mb-4">
                        {[
                          'Treat all participants with dignity, respect, and compassion.',
                          'Maintain participant confidentiality.',
                          'Act in a professional and ethical manner.',
                          'Support the mission and values of The Ascending Educator.',
                          'Provide accurate information on this application.',
                        ].map((item) => (
                          <label key={item} className="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-teal mt-0.5" />
                            <span className="font-sans text-[13px] text-body">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Volunteer Statement */}
                    <div>
                      <label className="block font-sans text-[14px] font-medium text-navy mb-2">Please share anything else you would like us to know.</label>
                      <textarea rows={3} className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                    </div>

                    {/* Applicant Certification */}
                    <div>
                      <p className="font-sans text-[14px] text-body mb-4">
                        I certify that the information provided in this application is true and complete to the best of my knowledge.
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {['Applicant Signature', 'Date'].map((label) => (
                          <div key={label}>
                            <label className="block font-sans text-[13px] font-medium text-navy mb-1">{label}</label>
                            <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border-light font-sans text-[14px] focus:outline-none focus:border-teal" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn-pill-filled">
                        Submit Application
                      </button>
                    </div>

                    <div className="text-center pt-6 border-t border-border-light">
                      <p className="font-sans text-[14px] text-body mb-4">
                        We believe meaningful transformation happens when caring individuals choose to walk alongside others on their journey.
                      </p>
                      <p className="font-sans text-[13px] text-navy font-semibold mb-4">
                        Thank you for considering becoming part of The Ascending Educator community.
                      </p>
                      <div className="space-y-1">
                        <p className="font-sans text-[13px] text-navy font-semibold">🌱 Rise Beyond Adversity</p>
                        <p className="font-sans text-[13px] text-navy font-semibold">🤝 Restore What Matters</p>
                        <p className="font-sans text-[13px] text-navy font-semibold">🎯 Step Into Their Next Chapter</p>
                        <p className="font-sans text-[13px] text-navy font-semibold">🗺️ Ascend with Clarity and Direction</p>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
