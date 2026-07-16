import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TeamMember {
  photo: string;
  name: string;
  title: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    photo: '/images/team-dr-jennifer-reed.jpg',
    name: 'Dr. Jennifer Reed',
    title: 'Executive Director',
    bio: 'Former high school principal with 20 years of experience in urban education. Ph.D. in Educational Leadership from Stanford University.',
  },
  {
    photo: '/images/team-david-chen.jpg',
    name: 'David Chen',
    title: 'Director of Professional Development',
    bio: 'Curriculum specialist and former middle school teacher. M.Ed. in Curriculum and Instruction from Teachers College, Columbia University.',
  },
  {
    photo: '/images/team-maria-gonzalez.jpg',
    name: 'Maria Gonzalez',
    title: 'Director of School Partnerships',
    bio: 'School improvement expert with extensive experience working with Title I schools. M.A. in Educational Administration from UCLA.',
  },
  {
    photo: '/images/team-robert-foster.jpg',
    name: 'Robert Foster',
    title: 'Director of Community Engagement',
    bio: 'Community organizer and former elementary teacher. Dedicated to building bridges between schools, families, and communities.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

export default function Team() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="team" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-main">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Our Team</h2>
          <div className="divider" />
          <p>Experienced educators and leaders dedicated to your success</p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="card-shadow group"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-blue">
                  {member.name}
                </h3>
                <p className="font-sans font-semibold text-sm text-teal uppercase tracking-wider mt-2">
                  {member.title}
                </p>
                <p className="font-sans text-sm text-dark-gray leading-relaxed mt-3">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
