import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faSchool, faChalkboardUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Process {
  icon: IconDefinition;
  name: string;
  description: string;
  objectives: string[];
}

const processes: Process[] = [
  {
    icon: faRocket,
    name: 'Initial Piloting',
    description: 'Assist school leaders and teacher leaders in formulating and implementing tailored plans that align with the organizational and/or instructional components of the OCBL model.',
    objectives: [
      'Using data, school leaders will explain their plan and define the vision and mission for effective implementation.',
      'School leaders will establish a comprehensive implementation timeline, clearly define SMART goals, and outline plans for stakeholder engagement and communication.',
      'School leaders will engage in collaborative learning frameworks designed to provide continuous support and feedback aligned with their individualized plans.',
    ],
  },
  {
    icon: faSchool,
    name: 'School-wide Implementation',
    description: 'Gives school leaders and teachers a clear overview of their customized plan and readies the school community for solid implementation from day one.',
    objectives: [
      'Help schools develop a vision for school-wide implementation linked to optimize organizational and/or effective instructional practices.',
      'Consider the materials required to ensure school-wide access and organization for implementation.',
      'Help educators and the school community understand the design, implementation, and alignment with the school\'s vision.',
      'Strengthens educator pedagogy with ongoing support and feedback from peers and leaders.',
    ],
  },
  {
    icon: faChalkboardUser,
    name: 'Ongoing Support for Teachers',
    description: 'Enhances teachers\' understanding of the implementation of the school\'s strategic plan by offering opportunities to engage in structured coaching cycles aligned with their progress.',
    objectives: [
      'Reinforces the vision for implementing the plan with fidelity, consistently aligning actions to the school\'s mission and overall objectives.',
      'Enables educators to customize their plan according to the specific requirements of their students and classroom setting.',
      'Facilitates educators\' use of the plan to evaluate, assess, and reflect on their own implementation data, while systematically addressing the varied needs of students through comprehensive supports.',
    ],
  },
  {
    icon: faUserTie,
    name: 'Ongoing Support for Leaders',
    description: 'Utilizing reflective, data-driven methodologies, OCBL experts support school leaders in recognizing and proactively addressing potential barriers that may impede the effective execution of their strategic plans.',
    objectives: [
      'Support leaders in efficiently allocating the necessary time and resources to implement their OCBL initiatives.',
      'Articulates a collective vision for the implementation of their OCBL that aligns with the school\'s overarching vision and promotes high-quality instruction.',
      'Assists educational leaders in monitoring and analyzing trends in both student learning and instructional practice.',
    ],
  },
];

export default function ImplementationProcesses() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="implementation-processes" className="section-padding bg-[#f8f9fa]" ref={sectionRef}>
      <div className="container-main">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>OCBL Implementation Processes</h2>
          <div className="divider" />
          <p>Structured processes that guide schools from initial planning through sustained implementation</p>
        </motion.div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {processes.map((process, index) => (
            <motion.div
              key={process.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' as const }}
              className="card-shadow bg-white overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center gap-4 p-6 text-left hover:bg-teal/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-main flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={process.icon} className="text-white text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-blue">{process.name}</h3>
                </div>
                <div className={`text-blue transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Content */}
              <div className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'pb-6 max-h-[600px]' : 'max-h-0'}`}>
                <p className="font-sans text-[15px] text-dark-gray leading-relaxed mb-4">
                  {process.description}
                </p>
                <div className="bg-[#f8f9fa] rounded-lg p-4">
                  <p className="font-sans font-semibold text-xs uppercase tracking-wider text-teal mb-3">
                    Objectives
                  </p>
                  <ul className="space-y-2">
                    {process.objectives.map((obj, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        <span className="font-sans text-sm text-dark-gray leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
