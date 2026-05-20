import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface CTAProps {
  onContactClick?: () => void;
  onViewPortfolioClick?: () => void;
}

const CTA: React.FC<CTAProps> = ({ onContactClick, onViewPortfolioClick }) => {
  return (
    <section className="py-12 md:py-28 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-600/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-2xl p-6 md:p-16 text-center border border-white/20 overflow-hidden"
        >
          {/* Glow Effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-accent-600/20 to-primary-600/20 -z-10"
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 mb-6"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>

            {/* Main Heading */}
            <h2 className="headline-2 mb-4">
              Ready To Build A Website That <span className="gradient-text">Converts?</span>
            </h2>

            {/* Subheading */}
            <p className="subheadline max-w-2xl mx-auto mb-6">
              Join 500+ businesses that have transformed their online presence with us. Limited client slots available each month.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onContactClick}
                className="btn btn-primary text-base gap-2 group justify-center"
              >
                Book Your Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewPortfolioClick}
                className="btn btn-outline text-base justify-center"
              >
                See Our Portfolio
              </motion.button>
            </div>

            {/* Urgency Message */}
            <motion.p
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm text-primary-300 font-medium"
            >
              📅 Book within the next 48 hours for priority scheduling
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;


