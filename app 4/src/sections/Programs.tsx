import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Program {
  image: string;
  overlayTitle: string;
  title: string;
  description: string;
}

const programs: Program[] = [
  {
    image: '/images/program-professional-development.jpg',
    overlayTitle: 'Professional Development',
    title: 'Professional Development Workshops',
    description: 'Interactive workshops designed to enhance teaching skills, classroom management techniques, and subject-specific instructional strategies. Our sessions are led by experienced educators and researchers.',
  },
  {
    image: '/images/program-school-improvement.jpg',
    overlayTitle: 'School Improvement',
    title: 'School Improvement Partnerships',
    description: 'Long-term partnerships with schools and districts to develop comprehensive improvement plans, build leadership capacity, and create sustainable systems for continuous growth.',
  },
  {
    image: '/images/program-community-building.jpg',
    overlayTitle: 'Community Building',
    title: 'Educator Community Network',
    description: 'A vibrant community of practice where educators connect, share resources, collaborate on projects, and support each other\'s professional growth throughout the school year.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  }),
};

export default function Programs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="programs" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-main">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Our Programs</h2>
          <div className="divider" />
          <p>Comprehensive support for educators at every stage</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="card-shadow group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-card" />
                {/* Overlay Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white">
                    {program.overlayTitle}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h4 className="font-serif text-xl text-blue mb-3">
                  {program.title}
                </h4>
                <p className="font-sans text-[15px] text-dark-gray leading-relaxed mb-4">
                  {program.description}
                </p>
                <a
                  href="#membership"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase text-teal hover:text-blue transition-colors duration-200"
                >
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
