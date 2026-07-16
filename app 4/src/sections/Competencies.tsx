import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Competency {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const competencies: Competency[] = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="9" x2="5" y2="7" />
        <line x1="12" y1="9" x2="19" y2="7" />
        <line x1="12" y1="15" x2="5" y2="17" />
        <line x1="12" y1="15" x2="19" y2="17" />
      </svg>
    ),
    title: 'Strategic Leadership',
    description: 'Directing cross-functional teams to drive organizational culture, enhance communication, implement training objectives, and ensure continuous improvement for staff and student-focused initiatives.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: 'Instructional Design',
    description: 'Designing and implementing innovative, technology-enhanced learning experiences including Project-Based Learning (PBL), while coaching and mentoring instructors to ensure best practices.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 6-10" />
      </svg>
    ),
    title: 'Data-Driven Improvement',
    description: 'Producing quantitative and qualitative reports, conducting assessments and interviews, tracking performance plans, and ensuring compliance with all regional, state, and federal guidelines.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: 'Operational Efficiency',
    description: 'Overseeing budgets, procurement, facilities, safety, and transportation operations while implementing policies, tracking financials, and optimizing processes to support strategic objectives.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Community Engagement',
    description: 'Establishing partnerships to secure funding and resources, coordinating marketing events, delivering high-impact presentations, and facilitating meetings for students, staff, and stakeholders.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Program Growth',
    description: 'Developing long-term goals, strategic initiatives, and reporting policies to enhance program success, enrollment, and retention within the school community.',
  },
];

export default function Competencies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="competencies" className="section-p" style={{ backgroundColor: '#F5F1EB' }} ref={ref}>
      <div className="container-s">
        <p className="section-label">What We Do</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-2"
        >
          Key Competencies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[15px] text-text-muted max-w-[550px] mb-12"
        >
          Comprehensive expertise designed to transform every aspect of your educational institution
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-white rounded-lg p-8 transition-all duration-300 hover:shadow-subtle"
              style={{ border: '1px solid var(--border-light)' }}
            >
              <div className="text-navy mb-5">{item.icon}</div>
              <h3 className="font-serif text-lg text-navy mb-3">{item.title}</h3>
              <p className="font-sans text-[13px] text-body leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
