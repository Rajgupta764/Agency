import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  hasVideo?: boolean;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'Digital Innovations',
      content:
        'Their team transformed our online presence completely. Within 3 months of launch, our conversions increased by 340%. The attention to detail and understanding of our business goals was exceptional.',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      hasVideo: true,
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Founder',
      company: 'TechVenture',
      content:
        'Best investment we made for our business. The website is incredibly fast, beautiful, and generates qualified leads daily. Their support team is always responsive and helpful.',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Marketing Director',
      company: 'Global Fashion',
      content:
        'Working with StayMitra was a game-changer. The design is stunning, the performance is unmatched, and they truly understood our brand vision. Highly recommend!',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      hasVideo: true,
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Owner',
      company: 'Local Services Co',
      content:
        'Our local search visibility skyrocketed after they redesigned our website. We now rank #1 for our service area and get 10x more qualified leads. Incredible ROI!',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'E-Commerce Manager',
      company: 'Fashion Retail',
      content:
        'Our sales increased by 450% in the first quarter. The website is not just beautiful—it converts. The team was professional, communicative, and delivered on time.',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69be16?w=100&h=100&fit=crop',
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-600/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-20"
        >
          <h2 className="headline-2 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="subheadline max-w-2xl mx-auto">
            Real success stories from businesses that grew with us
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Testimonial Card */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 md:p-12 mb-6 md:mb-8"
          >
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3 md:mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-base md:text-lg">
                  ★
                </span>
              ))}
            </div>

            {/* Content */}
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              "{current.content}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Avatar */}
              <img
                src={current.image}
                alt={current.name}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary-600"
              />

              {/* Details */}
              <div className="flex-grow min-w-0">
                <h4 className="font-bold text-white text-base md:text-lg truncate">{current.name}</h4>
                <p className="text-xs md:text-sm text-gray-400 truncate">
                  {current.role} at {current.company}
                </p>
              </div>

              {/* Video Badge */}
              {current.hasVideo && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-accent-600/20 border border-accent-600/50 flex items-center justify-center cursor-pointer hover:bg-accent-600/40 transition-all group"
                >
                  <Play className="w-5 h-5 text-accent-400 group-hover:text-accent-300 fill-current" />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrevious}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full glass hover:bg-white/20 transition-all group"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-primary-400" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoPlay(false);
                  }}
                  animate={{
                    width: index === currentIndex ? 28 : 8,
                    backgroundColor:
                      index === currentIndex ? '#0284c7' : '#ffffff33',
                  }}
                  className="h-2.5 rounded-full transition-all"
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full glass hover:bg-white/20 transition-all group"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-primary-400" />
            </motion.button>
          </div>
        </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-4 mt-6 md:mt-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-4 md:p-6 rounded-xl hover:border-accent-400/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-1 mb-2 md:mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs md:text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {testimonial.content.substring(0, 120)}...
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-xs md:text-sm truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Testimonials;



