import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Users, Zap } from 'lucide-react';

const SocialProof: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '500+',
      label: 'Projects Completed',
      color: 'primary',
    },
    {
      icon: Users,
      value: '450+',
      label: 'Happy Clients',
      color: 'accent',
    },
    {
      icon: Globe,
      value: '45+',
      label: 'Countries Served',
      color: 'primary',
    },
    {
      icon: Zap,
      value: '99%',
      label: 'Satisfaction Rate',
      color: 'accent',
    },
  ];

  const clientLogos = [
    'Tech Startup',
    'E-Commerce',
    'Fashion Brand',
    'SaaS Company',
    'Agency Pro',
    'Digital Hub',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="social-proof" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass py-4 md:py-8 px-3 md:px-6 rounded-xl text-center hover:border-primary-400/50 transition-all group"
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg mx-auto mb-3 md:mb-4 flex items-center justify-center ${
                      stat.color === 'primary'
                        ? 'bg-primary-600/20 text-primary-400'
                        : 'bg-accent-600/20 text-accent-400'
                    }`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

        {/* Client Logos Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-400">
            Join hundreds of successful businesses we've helped grow
          </p>
        </div>

        {/* Scrolling Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="glass px-6 py-4 rounded-lg min-w-max text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {logo}
              </div>
            ))}
          </motion.div>

          {/* Fade Effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none" />
        </motion.div>

        {/* Reviews Section */}
        <div className="mt-6 md:mt-24">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-400">
              Real feedback from businesses that transformed with our solutions
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4"
          >
            {[
              {
                rating: 5,
                text: 'Absolutely transformed our online presence. The team was professional, responsive, and delivered beyond expectations.',
                author: 'Sarah Johnson',
                role: 'CEO, Digital Innovations',
              },
              {
                rating: 5,
                text: 'Our website conversions increased by 340% in the first three months. This agency really knows what they\'re doing.',
                author: 'Mike Chen',
                role: 'Founder, TechVenture',
              },
              {
                rating: 5,
                text: 'The design is stunning and the technical performance is unmatched. Couldn\'t ask for a better partner for our brand.',
                author: 'Emma Davis',
                role: 'Marketing Director, Global Fashion',
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 md:p-8 rounded-xl hover:border-accent-400/50 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-semibold text-white">{review.author}</p>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;


