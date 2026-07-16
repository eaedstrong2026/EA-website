import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faChalkboardTeacher,
  faUserCheck,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Structure {
  icon: IconDefinition;
  name: string;
  description: string;
  occurrence: string;
  frequency: string;
}

const structures: Structure[] = [
  {
    icon: faComments,
    name: 'Consultations',
    description: 'Strategic collaboration between school administrators and OCBL specialists is essential to establish the optimal conditions necessary for effective organizational or curriculum-based implementation.',
    occurrence: 'Throughout the school day.',
    frequency: 'Multiple times a year.',
  },
  {
    icon: faChalkboardTeacher,
    name: 'Professional Development',
    description: 'Learning experiences anchored in a particular OCBL element are designed to enhance educators\' foundational or advanced understanding of their resources, materials, and strategies, as well as how to effectively integrate them into their instructional practices.',
    occurrence: 'Throughout the year: after school, during planning periods (rolling PDs), during the summer, on assigned professional development days.',
    frequency: 'Multiple times a year.',
  },
  {
    icon: faUserCheck,
    name: 'Coaching',
    description: 'Opportunities for educators to receive SMART feedback on their instructional practices through informal channels.',
    occurrence: 'Cyclical rotation of observations and instructional walkthroughs during classroom teaching, followed by targeted feedback sessions during planning periods or promptly after the lesson.',
    frequency: 'Observations conducted multiple times annually, frequency determined by individual teacher needs.',
  },
  {
    icon: faPeopleGroup,
    name: 'Collaborative / Professional Learning Communities',
    description: 'Teams of educators organized by grade level or subject area systematically analyze, evaluate, and plan schoolwide initiatives, curriculum-based lessons, tasks, instructional materials, and student work. They engage in structured cycles of inquiry and utilize established protocols.',
    occurrence: 'Weekly: before the school day begins, during collaborative planning periods, after school (early release days).',
    frequency: 'Monthly with OCBL Expert.',
  },
];

export default function ImplementationStructures() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="implementation-structures" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-main">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>OCBL Implementation Structures</h2>
          <div className="divider" />
          <p>
            Four distinct types of organizational and professional learning instructional structures,
            each guided by a knowledgeable educator with extensive experience
          </p>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-base text-dark-gray leading-relaxed text-center max-w-[900px] mx-auto mb-12"
        >
          The OCBL model is implemented through various instructional frameworks, each designed to suit the content area, target audience, or session objectives. This adaptable approach guarantees that professional learning experiences remain pertinent and effective for every participant. Whether professional learning is led by an outside provider or someone within the team, each OCBL instructional structure is always guided by a knowledgeable educator who has extensive experience in the specific organization or subject area.
        </motion.p>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-main">
                <th className="px-6 py-4 text-left font-serif text-base text-white rounded-tl-[10px] w-[20%]">
                  Implementation Structure
                </th>
                <th className="px-6 py-4 text-left font-serif text-base text-white w-[35%]">
                  Description
                </th>
                <th className="px-6 py-4 text-left font-serif text-base text-white w-[22%]">
                  Recommended Occurrence
                </th>
                <th className="px-6 py-4 text-left font-serif text-base text-white rounded-tr-[10px] w-[23%]">
                  Recommended Frequency with OCBL Expert
                </th>
              </tr>
            </thead>
            <tbody>
              {structures.map((s, i) => (
                <tr
                  key={s.name}
                  className={`${i % 2 === 0 ? 'bg-[#f8f9fa]' : 'bg-white'} hover:bg-teal/5 transition-colors`}
                >
                  <td className="px-6 py-5 align-top">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={s.icon} className="text-blue" />
                      </div>
                      <span className="font-sans font-semibold text-sm text-blue">{s.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 align-top">
                    <p className="font-sans text-sm text-dark-gray leading-relaxed">{s.description}</p>
                  </td>
                  <td className="px-6 py-5 align-top">
                    <p className="font-sans text-sm text-dark-gray leading-relaxed">{s.occurrence}</p>
                  </td>
                  <td className="px-6 py-5 align-top">
                    <p className="font-sans text-sm text-dark-gray leading-relaxed">{s.frequency}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile/Tablet Accordion */}
        <div className="lg:hidden space-y-4">
          {structures.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="card-shadow overflow-hidden"
            >
              <button
                onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                className="w-full flex items-center gap-4 p-5 text-left bg-[#f8f9fa] hover:bg-teal/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={s.icon} className="text-blue" />
                </div>
                <span className="font-sans font-semibold text-base text-blue">{s.name}</span>
              </button>
              {activeTab === i && (
                <div className="p-5 space-y-4 bg-white">
                  <div>
                    <p className="font-sans font-semibold text-xs uppercase tracking-wider text-teal mb-1">Description</p>
                    <p className="font-sans text-sm text-dark-gray leading-relaxed">{s.description}</p>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-xs uppercase tracking-wider text-teal mb-1">Occurrence</p>
                    <p className="font-sans text-sm text-dark-gray leading-relaxed">{s.occurrence}</p>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-xs uppercase tracking-wider text-teal mb-1">Frequency with OCBL Expert</p>
                    <p className="font-sans text-sm text-dark-gray leading-relaxed">{s.frequency}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
