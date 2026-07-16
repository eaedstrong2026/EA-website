import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MemberQuote() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50%' });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: 'url(/images/member-quote-background.jpg)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 container-main text-center py-20"
      >
        <blockquote className="font-serif text-xl md:text-[28px] lg:text-[32px] text-white leading-relaxed max-w-[800px] mx-auto text-shadow-quote">
          &ldquo;Educators Alliance gave our teachers the support they needed to truly make a difference. The professional learning communities they helped us establish have transformed our school culture.&rdquo;
        </blockquote>
        <p className="font-sans font-semibold text-base text-teal mt-6">
          Michael Torres, Superintendent, Lincoln School District
        </p>
      </motion.div>
    </section>
  );
}
