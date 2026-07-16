import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChessKing,
  faLaptopCode,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ExpertiseArea {
  icon: IconDefinition;
  title: string;
  subtitle: string;
  items: string[];
}

const expertiseAreas: ExpertiseArea[] = [
  {
    icon: faChessKing,
    title: 'Strategic Leadership for Impact and Growth',
    subtitle: 'Driving organizational excellence through visionary leadership',
    items: [
      'Leadership & Team Management: Directed cross-functional and multi-disciplinary teams to drive organizational culture, enhance communication, implement training objectives, and ensure continuous improvement.',
      'Program Oversight & Development: Managed after-school programs, athletics, large-scale events, and professional development initiatives; coached and mentored instructors.',
      'Data-Driven Strategy & Compliance: Produced quantitative and qualitative reports for senior leadership, conducted assessments, tracked performance plans, and ensured compliance.',
      'Operational & Financial Management: Oversaw budgets, procurement, facilities, safety, and transportation while implementing policies and optimizing processes.',
    ],
  },
  {
    icon: faLaptopCode,
    title: 'Leading Innovative Instruction & Remote Learning',
    subtitle: 'Transforming teaching through technology and innovation',
    items: [
      'Curriculum & Instructional Leadership: Designed and implemented innovative, technology-enhanced learning experiences, including Project-Based Learning (PBL), while coaching instructors.',
      'Virtual Learning & Curriculum Design: Successfully transitioned programs to virtual platforms, designing curricula, training schedules, and operations for 150+ students.',
      'Data-Driven Performance & Innovation: Monitored student progress and program outcomes with precise data tracking, integrating project-based learning and varied instructional models.',
    ],
  },
  {
    icon: faHandshake,
    title: 'Program Growth & Stakeholder Engagement',
    subtitle: 'Building partnerships that drive sustainable success',
    items: [
      'Program Growth & Strategic Planning: Developed long-term goals, strategic initiatives, and reporting policies to enhance program success, enrollment, and retention.',
      'Partnerships & Resource Development: Established and collaborated with business and community partners to secure funding, resources, and educational opportunities.',
      'Program Oversight & Engagement: Managed assistant instructors, coordinated marketing events, delivered high-impact presentations, and designed training resources.',
      'Stakeholder Engagement & Communication: Facilitated meetings and training events for students, staff, and external stakeholders through data-informed communication.',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-main">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Areas of Expertise</h2>
          <div className="divider" />
          <p>Comprehensive capabilities built on over 15 years of educational consulting experience</p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="space-y-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="card-shadow p-8 lg:p-10 transition-all duration-200 hover:shadow-card-hover"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Icon & Title */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="icon-circle mb-4">
                    <FontAwesomeIcon icon={area.icon} className="text-2xl" />
                  </div>
                  <h3 className="font-serif text-xl text-blue mb-2">
                    {area.title}
                  </h3>
                  <p className="font-sans text-sm text-teal font-semibold uppercase tracking-wider">
                    {area.subtitle}
                  </p>
                </div>

                {/* Items */}
                <div className="lg:w-2/3 space-y-4">
                  {area.items.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal mt-2 flex-shrink-0" />
                      <p className="font-sans text-[15px] text-dark-gray leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
