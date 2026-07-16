import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Structure {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const structures: Structure[] = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Consultations',
    description: 'Strategic collaboration between school administrators and OCBL specialists throughout the school day, establishing optimal conditions for effective organizational and curriculum-based implementation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Professional Development',
    description: 'Learning experiences anchored in particular OCBL elements \u2014 after school, during planning periods, summer sessions, and assigned PD days \u2014 designed to enhance foundational and advanced understanding.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Coaching',
    description: 'Cyclical rotation of observations and instructional walkthroughs followed by targeted feedback sessions during planning periods, providing SMART feedback on instructional practices.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Learning Communities',
    description: 'Teams of educators organized by grade level or subject area, systematically analyzing schoolwide initiatives, curriculum-based lessons, and student work through structured cycles of inquiry.',
  },
];

export default function OCBLModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ocbl-model" className="section-p bg-navy" ref={ref}>
      <div className="container-s">
        <p className="section-label" style={{ color: '#4A9E8C' }}>Our Framework</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl max-md:text-3xl font-bold text-white max-w-[700px] mb-6"
        >
          Organizational and Curriculum-Based Learning Model
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[780px] mb-16"
        >
          <p className="font-sans text-[14px] text-white/70 leading-[1.8] mb-5">
            The OCBL model provides a robust framework of implementation guidelines aimed at supporting and enhancing the systems within the school community. By aligning the school&apos;s vision with its organizational structures and high-quality instructional strategies, the model assists school leaders in creating a cohesive approach that leaders and teachers can utilize in their daily practice.
          </p>
          <p className="font-sans text-[14px] text-white/70 leading-[1.8]">
            Central to the OCBL model are processes such as ongoing progress monitoring, job-embedded professional development, and sustained support for educators. These components work together to ensure that educators have continual access to the necessary resources, guidance, and feedback required to skillfully implement the school&apos;s model. Through a comprehensive support system, the OCBL model fosters improved educational outcomes and strengthens the school&apos;s overall capacity for success.
          </p>
        </motion.div>

        {/* Diverse team image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-lg overflow-hidden aspect-[21/9] mb-12"
        >
          <img
            src="/images/diverse-outdoor.jpg"
            alt="Diverse educators walking together on campus - Black woman, White woman, and Asian man collaborating outdoors"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Structure Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {structures.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="rounded-lg p-6 transition-all duration-300 hover:bg-white/5"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="text-white/80 mb-4">{s.icon}</div>
              <h3 className="font-serif text-[15px] text-white mb-3">{s.title}</h3>
              <p className="font-sans text-[12px] text-white/60 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
