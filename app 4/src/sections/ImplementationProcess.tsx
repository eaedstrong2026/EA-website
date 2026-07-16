import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Process {
  num: string;
  title: string;
  description: string;
}

const processes: Process[] = [
  {
    num: '01',
    title: 'Initial Piloting',
    description: 'Assist school leaders in formulating and implementing tailored plans that align with the organizational and instructional components of the OCBL model. Using data, leaders define their vision, establish a comprehensive timeline, set SMART goals, and outline plans for stakeholder engagement.',
  },
  {
    num: '02',
    title: 'School-wide Implementation',
    description: 'Provides school leaders and teachers a clear overview of their customized plan and readies the school community for solid implementation from day one. Helps develop a vision linked to optimized organizational and effective instructional practices.',
  },
  {
    num: '03',
    title: 'Ongoing Support for Teachers',
    description: 'Enhances understanding of the strategic plan through structured coaching cycles aligned with progress. Reinforces the vision for implementing the plan with fidelity, enabling educators to customize their approach according to their students and classroom setting.',
  },
  {
    num: '04',
    title: 'Ongoing Support for Leaders',
    description: 'Utilizing reflective, data-driven methodologies, OCBL experts support leaders in recognizing and proactively addressing potential barriers. Assists in monitoring and analyzing trends in both student learning and instructional practice.',
  },
];

export default function ImplementationProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="section-p" style={{ backgroundColor: '#F5F1EB' }} ref={ref}>
      <div className="container-s">
        <p className="section-label">How We Work</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-2"
        >
          Implementation Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[15px] text-text-muted mb-16"
        >
          A structured framework for school-wide transformation
        </motion.p>

        {/* Steps - horizontal on desktop */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-[28px] left-[60px] right-[60px] h-[1px] bg-navy/10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {processes.map((p, index) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center lg:text-left"
              >
                {/* Number circle */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold mb-6 relative z-10 bg-cream">
                  <span className="font-serif text-lg text-gold">{p.num}</span>
                </div>

                <h3 className="font-serif text-[15px] text-navy mb-3">{p.title}</h3>
                <p className="font-sans text-[13px] text-body leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
