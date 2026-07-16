import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface NewsArticle {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

const articles: NewsArticle[] = [
  {
    image: '/images/news-teacher-conference.jpg',
    category: 'Events',
    date: 'March 15, 2024',
    title: 'Annual Educators Conference: Registration Now Open',
    excerpt: 'Join us for our flagship professional learning event featuring keynote speakers, breakout sessions, and networking opportunities.',
  },
  {
    image: '/images/news-student-achievement.jpg',
    category: 'Impact Stories',
    date: 'March 8, 2024',
    title: 'Partner Schools See 23% Improvement in Reading Scores',
    excerpt: 'A new study highlights the significant impact of our literacy coaching program on student achievement across 12 partner schools.',
  },
  {
    image: '/images/news-new-partnership.jpg',
    category: 'Announcements',
    date: 'February 28, 2024',
    title: 'Educators Alliance Announces New District Partnership',
    excerpt: "We're excited to partner with Riverside Unified School District to provide comprehensive professional development for 500+ educators.",
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

export default function News() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="news" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-main">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Latest News</h2>
          <div className="divider" />
          <p>Stay updated with the latest from Educators Alliance</p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="card-shadow group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans font-semibold text-xs uppercase text-teal tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-light-gray">|</span>
                  <span className="font-sans text-[13px] text-gray-400">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg text-blue mb-3 group-hover:text-teal transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-sm text-dark-gray leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase text-teal group-hover:text-blue transition-colors duration-200">
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
