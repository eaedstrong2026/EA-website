import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-p bg-white" ref={ref}>
      <div className="container-s">
        <p className="section-label">About Us</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading max-w-[600px] mb-12"
        >
          Strategic Partnership for Educational Excellence
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src="/images/about-diverse-team.jpg"
                alt="Diverse team of educators collaborating - equal male and female representation across multiple ethnicities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="flex gap-16 mt-8">
              <div>
                <p className="font-serif text-4xl text-navy">29</p>
                <p className="font-sans text-sm text-text-muted mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-navy">50K+</p>
                <p className="font-sans text-sm text-text-muted mt-1">Students Impacted</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              Educators&apos; Alliance is an educational consulting firm dedicated to raising student achievement, strengthening educator performance, and boosting organizational effectiveness. With 29 years of experience in visionary strategy, instructional design, and performance optimization, we partner with schools to strengthen their instructional initiatives, boost operational efficiency, and foster meaningful community engagement.
            </p>
            <p className="font-sans text-[15px] text-body leading-[1.8]">
              By utilizing data-driven insights and collaborative leadership, we deliver sustainable solutions that empower every member of the school community, including students, families, educators, and administrators.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
