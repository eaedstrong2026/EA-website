import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#F5F1EB' }}
    >
      {/* Network pattern SVG background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#1B2A3C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Connection lines */}
          <g stroke="#1B2A3C" strokeWidth="0.5" fill="none" opacity="0.6">
            <line x1="120" y1="150" x2="300" y2="210" />
            <line x1="300" y1="210" x2="480" y2="150" />
            <line x1="480" y1="150" x2="600" y2="270" />
            <line x1="600" y1="270" x2="780" y2="180" />
            <line x1="780" y1="180" x2="960" y2="240" />
            <line x1="960" y1="240" x2="1140" y2="150" />
            <line x1="1140" y1="150" x2="1320" y2="210" />
            <line x1="180" y1="390" x2="360" y2="330" />
            <line x1="360" y1="330" x2="540" y2="390" />
            <line x1="540" y1="390" x2="720" y2="330" />
            <line x1="720" y1="330" x2="900" y2="420" />
            <line x1="900" y1="420" x2="1080" y2="360" />
            <line x1="1080" y1="360" x2="1260" y2="420" />
            <line x1="240" y1="570" x2="420" y2="510" />
            <line x1="420" y1="510" x2="660" y2="570" />
            <line x1="660" y1="570" x2="840" y2="480" />
            <line x1="840" y1="480" x2="1020" y2="540" />
            <line x1="1020" y1="540" x2="1200" y2="480" />
            <line x1="300" y1="210" x2="360" y2="330" />
            <line x1="480" y1="150" x2="540" y2="390" />
            <line x1="600" y1="270" x2="720" y2="330" />
            <line x1="780" y1="180" x2="900" y2="420" />
            <line x1="960" y1="240" x2="1080" y2="360" />
            <line x1="360" y1="330" x2="420" y2="510" />
            <line x1="540" y1="390" x2="660" y2="570" />
            <line x1="720" y1="330" x2="840" y2="480" />
            <line x1="900" y1="420" x2="1020" y2="540" />
          </g>
          {/* Nodes */}
          <g fill="#1B2A3C">
            <circle cx="120" cy="150" r="3" />
            <circle cx="300" cy="210" r="4" />
            <circle cx="480" cy="150" r="3" />
            <circle cx="600" cy="270" r="3.5" />
            <circle cx="780" cy="180" r="4" />
            <circle cx="960" cy="240" r="3" />
            <circle cx="1140" cy="150" r="4" />
            <circle cx="1320" cy="210" r="3" />
            <circle cx="180" cy="390" r="3" />
            <circle cx="360" cy="330" r="4" />
            <circle cx="540" cy="390" r="3.5" />
            <circle cx="720" cy="330" r="4" />
            <circle cx="900" cy="420" r="3" />
            <circle cx="1080" cy="360" r="4" />
            <circle cx="1260" cy="420" r="3" />
            <circle cx="240" cy="570" r="3" />
            <circle cx="420" cy="510" r="4" />
            <circle cx="660" cy="570" r="3.5" />
            <circle cx="840" cy="480" r="4" />
            <circle cx="1020" cy="540" r="3" />
            <circle cx="1200" cy="480" r="4" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container-s text-center pt-24 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-label justify-center flex"
        >
          Educational Consulting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-6xl md:text-7xl lg:text-[90px] text-navy leading-[0.95] mb-6"
        >
          Empowering<br />Schools
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-base text-body max-w-[540px] mx-auto mb-10 leading-relaxed"
        >
          With over 25 years of combined experience, Educators Alliance has partnered with schools to strengthen instructional initiatives, boost operational efficiency, and foster meaningful community engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#about" onClick={handleExplore} className="btn-pill">
            Explore Our Approach
          </a>
        </motion.div>
      </div>
    </section>
  );
}
