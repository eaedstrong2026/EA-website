import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const benefits = [
  'Access to exclusive professional development workshops',
  'Networking opportunities with fellow educators',
  'Quarterly research briefs and best practice guides',
  'Discounts on conferences and events',
  'One-on-one consultation with our expert team',
  'Members-only online resource library',
];

export default function MembershipCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitStatus('success');

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="membership" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-main">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Ready to Transform Your School?</h2>
          <div className="divider" />
          <p>Join our community of educators committed to excellence</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="font-serif text-2xl text-blue mb-6">
              Membership Benefits
            </h3>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-teal text-lg mt-0.5 flex-shrink-0"
                  />
                  <span className="font-sans text-base text-dark-gray">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-[10px] p-8 shadow-form">
              <h3 className="font-serif text-2xl text-blue mb-6">
                Get in Touch
              </h3>

              {submitStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={faCheck} className="text-teal text-2xl" />
                  </div>
                  <h4 className="font-serif text-xl text-blue mb-2">Message Sent!</h4>
                  <p className="font-sans text-dark-gray">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-input resize-none"
                  />
                  <button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
