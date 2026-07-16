import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function InclusiveApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <p className="section-label">Equity & Inclusion</p>
            <h2 className="section-heading mb-6">
              An Inclusive Approach to Educational Excellence
            </h2>
            <div className="space-y-4">
              <p className="font-sans text-[15px] text-body leading-[1.8]">
                At Educators&apos; Alliance, we believe that diverse perspectives drive innovation and that every student and educator deserves equitable access to high-quality learning. Our team reflects the communities we serve &mdash; bringing together professionals from varied cultural, racial, and educational backgrounds.
              </p>
              <p className="font-sans text-[15px] text-body leading-[1.8]">
                We are committed to fostering equitable practices that ensure all students engage in rigorous, grade-level tasks. Our consultants work alongside school leaders to address inequities, advocate for inclusivity, and build environments where every voice is valued and every learner can thrive.
              </p>
              <p className="font-sans text-[15px] text-body leading-[1.8]">
                From culturally responsive curriculum design to inclusive professional development, we embed equity into every facet of our OCBL model &mdash; because excellence in education is inseparable from equity in practice.
              </p>
            </div>

            {/* Equity stats */}
            <div className="flex gap-10 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-lg text-navy">50/50</p>
                  <p className="font-sans text-xs text-text-muted">Gender Equity</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-lg text-navy">Multi-Cultural</p>
                  <p className="font-sans text-xs text-text-muted">Team & Partnerships</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-lg overflow-hidden aspect-[16/10]">
              <img
                src="/images/diverse-leaders.jpg"
                alt="Diverse educational leadership team - Black man, Asian woman, South Asian woman, and White woman standing together in a school hallway"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Second row - classroom image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="rounded-lg overflow-hidden aspect-[16/10]">
              <img
                src="/images/diverse-classroom.jpg"
                alt="Diverse male teacher of mixed race facilitating an inclusive small group discussion with multicultural students in a warm classroom setting"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="section-label">Our Impact</p>
            <h2 className="section-heading mb-6">
              Partnerships That Reflect Every Community
            </h2>
            <div className="space-y-4">
              <p className="font-sans text-[15px] text-body leading-[1.8]">
                We partner with schools and districts serving diverse populations &mdash; from urban centers to rural communities. Our consultants bring lived experience and cultural competency to every engagement, ensuring that our strategies resonate with the unique needs of each school community.
              </p>
              <p className="font-sans text-[15px] text-body leading-[1.8]">
                Whether supporting English Language Learners, students with diverse learning needs, or communities navigating systemic inequities, we bring evidence-based solutions grounded in respect for every student&apos;s identity and potential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
