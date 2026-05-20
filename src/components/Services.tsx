import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Zap,
  ShoppingCart,
  Layout,
  Briefcase,
  Search,
  Wand2,
  Gauge,
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'Website Design',
      description:
        'Custom-crafted designs that perfectly represent your brand and engage your audience.',
      features: ['Responsive Design', 'Modern UI/UX', 'Brand Consistency'],
    },
    {
      icon: Zap,
      title: 'Landing Pages',
      description:
        'High-converting landing pages optimized for your specific marketing campaigns.',
      features: ['Conversion Focused', 'A/B Testing Ready', 'Fast Loading'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      description:
        'Full-featured e-commerce solutions to maximize your online sales potential.',
      features: ['Payment Integration', 'Inventory Management', 'Analytics'],
    },
    {
      icon: Layout,
      title: 'Portfolio Websites',
      description:
        'Showcase your work with stunning portfolio sites that impress clients.',
      features: ['Gallery Features', 'Case Studies', 'Contact Forms'],
    },
    {
      icon: Briefcase,
      title: 'Business Websites',
      description:
        'Professional business websites that build trust and generate leads.',
      features: ['Company Info', 'Service Pages', 'Lead Capture'],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description:
        'Technical and content optimization to rank higher in search engines.',
      features: ['Keyword Research', 'Meta Tags', 'Schema Markup'],
    },
    {
      icon: Wand2,
      title: 'Website Redesign',
      description:
        'Modernize your existing website with fresh design and improved performance.',
      features: ['Modernization', 'Speed Boost', 'UX Enhancement'],
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description:
        'Lightning-fast websites that rank better and convert more visitors.',
      features: ['Load Speed', 'Caching', 'Image Optimization'],
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
    <section id="services" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600/5 rounded-full filter blur-3xl" />
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
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="subheadline max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your digital presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                  }}
                  className="glass p-6 rounded-xl h-full flex flex-col hover:border-accent-400/50 transition-all cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center mb-4 group-hover:shadow-glow-accent transition-all">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm group-hover:text-accent-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


