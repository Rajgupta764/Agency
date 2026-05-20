import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Palette,
  Code,
  Smartphone,
  Sparkles,
  LifeBuoy,
  Building2,
  TrendingUp,
  Check,
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning-Fast Delivery',
      description:
        'Get your website live quickly without sacrificing quality. We combine agile methodologies with proven processes.',
    },
    {
      icon: Palette,
      title: 'Premium UI/UX Design',
      description:
        'Every pixel is crafted with purpose. Our designs don\'t just look stunning—they drive conversions.',
    },
    {
      icon: Code,
      title: 'SEO-Friendly Code',
      description:
        'Built with search engines in mind. Clean architecture and semantic HTML ensure maximum visibility.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Approach',
      description:
        'Majority of users browse on mobile. We design for mobile first, then enhance for larger screens.',
    },
    {
      icon: Sparkles,
      title: 'Modern Animations',
      description:
        'Engage users with smooth, purposeful animations that enhance UX without compromising performance.',
    },
    {
      icon: LifeBuoy,
      title: 'Ongoing Support',
      description:
        'Your success doesn\'t end at launch. We provide continued maintenance, updates, and technical support.',
    },
    {
      icon: Building2,
      title: 'Scalable Architecture',
      description:
        'Built to grow. Our solutions scale with your business from startup to enterprise level.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitoring',
      description:
        'Real-time analytics and insights. We track metrics that matter and optimize continuously.',
    },
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
    <section className="py-12 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-600/5 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl" />
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
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="subheadline max-w-2xl mx-auto">
            We combine cutting-edge technology, creative excellence, and strategic thinking to deliver results
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 mb-6 md:mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="glass p-6 rounded-xl h-full flex flex-col hover:border-primary-400/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center mb-4 group-hover:shadow-glow-accent transition-all">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-24"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            How We Compare
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-semibold text-gray-300">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    <span className="gradient-text">StayMitra</span>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-400">
                    Freelancers
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-400">
                    Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Premium Designs',
                  'SEO Optimization',
                  'Fast Delivery',
                  'Mobile Optimization',
                  'Ongoing Support',
                  'Analytics Setup',
                  'Performance Monitoring',
                  'Scalability',
                ].map((feature, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-gray-300">{feature}</td>
                    <td className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-primary-400 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4 text-gray-500">
                      <Check className="w-5 h-5 opacity-40 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4 text-gray-500">
                      <Check className="w-5 h-5 opacity-60 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


