import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Smartphone, Search, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetStartedClick?: () => void;
  onViewPortfolioClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick, onViewPortfolioClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const trustBadges = [
    { icon: Zap, label: 'Fast Delivery' },
    { icon: Search, label: 'SEO Optimized' },
    { icon: Smartphone, label: 'Mobile Responsive' },
    { icon: TrendingUp, label: 'High Conversion' },
  ];

  return (
    <section id="hero" className="min-h-[calc(100dvh-4rem)] pt-24 md:pt-32 pb-16 md:pb-32 relative overflow-hidden flex items-center">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-72 md:w-96 h-72 md:h-96 bg-blue-600/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-72 md:w-96 h-72 md:h-96 bg-purple-600/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container-custom w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="headline-1 mb-4 md:mb-6 leading-tight font-playfair">
              We Build{' '}
              <span className="gradient-text">Websites That Grow</span>{' '}
              Businesses.
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="subheadline max-w-3xl mx-auto mb-6 md:mb-8">
            Premium websites designed for conversions, branding, and business growth.
            Join 500+ successful businesses transforming their online presence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStartedClick}
              className="btn btn-primary text-base gap-2 group justify-center min-h-[48px]"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewPortfolioClick}
              className="btn btn-outline text-base justify-center min-h-[48px]"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass py-3 md:py-4 px-2 rounded-xl text-center hover:border-primary-400/50 transition-all"
              >
                <badge.icon className="w-5 md:w-6 h-5 md:h-6 mx-auto mb-1.5 md:mb-2 text-primary-400" />
                <p className="text-xs md:text-sm font-medium text-gray-300">{badge.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



