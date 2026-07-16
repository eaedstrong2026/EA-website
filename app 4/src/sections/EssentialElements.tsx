import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Element {
  title: string;
  description: string;
  color: 'teal' | 'gold';
}

const elements: Element[] = [
  {
    title: 'Data-Inspired',
    description: 'Guides educators in the collection, analysis, and application of diverse data sources \u2014 including OCBL-integrated student work and assessments \u2014 to effectively support student learning.',
    color: 'teal',
  },
  {
    title: 'Mission & Vision-Aligned',
    description: 'Assists educators by linking OCBL and instructional objectives to a shared vision of high quality, exceptional, equitable teaching, and learning.',
    color: 'gold',
  },
  {
    title: 'Standard-Aligned',
    description: 'Instructional plans are directly connected to specific educational standards, ensuring learning objectives, activities, and assessments align with required knowledge and skills.',
    color: 'teal',
  },
  {
    title: 'Content-Focused & Curriculum-Based',
    description: "Enhances educators' comprehension of instructional content and methodologies within the framework of OCBL.",
    color: 'gold',
  },
  {
    title: 'Equity-Oriented',
    description: 'Fosters educational practices that ensure all students engage in rigorous, grade-level tasks; upholds high standards, addresses inequities, and advocates for inclusivity.',
    color: 'teal',
  },
  {
    title: 'Engaging & Collaborative',
    description: 'Facilitates opportunities for educators to observe models, refine skills, analyze data, participate in OCBL-aligned tasks, and collaborate with colleagues.',
    color: 'gold',
  },
  {
    title: 'Assessment-Based',
    description: "Utilizes rigorous instructional practices adjusted based on standard-aligned assessments, enhancing comprehension and transitioning the teacher's role to coach or facilitator.",
    color: 'teal',
  },
  {
    title: 'School Improvement',
    description: 'Leverages diverse assessment data to establish targeted goals, implement actionable steps, and allocate resources aimed at advancing organizational systems and elevating achievement.',
    color: 'gold',
  },
];

export default function EssentialElements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="elements" className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <p className="section-label">Core Principles</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-2"
        >
          Eight Essential Elements
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-[15px] text-text-muted mb-12"
        >
          Defining a high-quality, highly effective OCBL Model
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {elements.map((el, index) => (
            <motion.div
              key={el.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
              className="rounded-lg p-6 transition-all duration-300 hover:shadow-subtle"
              style={{ border: '1px solid var(--border-light)' }}
            >
              {/* Icon dot */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-4 ${
                  el.color === 'teal' ? 'bg-teal/10' : 'bg-gold/10'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    el.color === 'teal' ? 'bg-teal' : 'bg-gold'
                  }`}
                />
              </div>

              <h3 className="font-serif text-[15px] text-navy mb-2">{el.title}</h3>
              <p className="font-sans text-[12px] text-body leading-relaxed">{el.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
