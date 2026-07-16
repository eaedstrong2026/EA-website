import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUniversity, faHeart, faAward } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Stat {
  icon: IconDefinition;
  number: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: faUsers, number: 150, suffix: '+', label: 'Students Served' },
  { icon: faUniversity, number: 15, suffix: '+', label: 'Years of Experience' },
  { icon: faHeart, number: 50, suffix: '+', label: 'Community Partners' },
  { icon: faAward, number: 8, suffix: '', label: 'Essential OCBL Elements' },
];

function AnimatedCounter({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out function
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const statVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

export default function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Start counters after fade-in
      const timer = setTimeout(() => setCountersStarted(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      id="stats"
      className="relative py-20 md:py-24 bg-gradient-main"
      ref={sectionRef}
    >
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={statVariants}
              className="text-center"
            >
              {/* Icon */}
              <FontAwesomeIcon
                icon={stat.icon}
                className="text-3xl text-white mb-4"
              />

              {/* Number */}
              <div className="font-sans font-semibold text-4xl md:text-5xl text-white">
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  started={countersStarted}
                />
              </div>

              {/* Label */}
              <p className="font-sans text-base text-white uppercase tracking-wider mt-3">
                {stat.label}
              </p>

              {/* Separator Star (desktop only, between items) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-3 h-3 text-white/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
