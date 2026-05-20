import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      price: isAnnual ? '₹49,999' : '₹4,999',
      period: isAnnual ? '/year' : '/month',
      description: 'Perfect for small businesses starting their digital journey.',
      features: [
        'Modern responsive website',
        'Up to 5 pages',
        'Mobile optimized',
        'Basic SEO setup',
        'Contact form',
        'Email support',
        'SSL certificate',
        '1 revision round',
        'Hosting for 3 months',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Business',
      price: isAnnual ? '₹1,49,999' : '₹14,999',
      period: isAnnual ? '/year' : '/month',
      description: 'For growing businesses looking to scale their online presence.',
      features: [
        'Everything in Starter, plus:',
        'Up to 15 pages',
        'Advanced animations',
        'SEO optimization',
        'Blog setup',
        'Social media integration',
        'Analytics setup (GA4)',
        'Performance optimization',
        '3 revision rounds',
        'Priority support',
        '1 year hosting',
      ],
      isPopular: true,
      cta: 'Start Building',
    },
    {
      name: 'Premium',
      price: isAnnual ? '₹3,99,999' : '₹39,999',
      period: isAnnual ? '/year' : '/month',
      description: 'Complete enterprise solution with advanced features.',
      features: [
        'Everything in Business, plus:',
        'Unlimited pages',
        'E-commerce integration',
        'Advanced API integrations',
        'Custom development',
        'Load testing',
        'Security audit',
        'Advanced animations & interactions',
        'Unlimited revisions',
        '24/7 support',
        '2 years hosting',
        'Quarterly strategy calls',
      ],
      cta: 'Let\'s Talk',
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
    <section id="pricing" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-600/5 rounded-full filter blur-3xl" />
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
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="subheadline max-w-2xl mx-auto mb-6">
            Flexible plans designed to scale with your business
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <span
              className={`transition-colors ${
                !isAnnual ? 'text-white' : 'text-gray-400'
              }`}
            >
              Monthly
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-accent-600' : 'bg-gray-700'
              }`}
            >
              <motion.span
                animate={{
                  x: isAnnual ? 28 : 4,
                }}
                className="inline-block h-6 w-6 transform rounded-full bg-white"
              />
            </motion.button>
            <span
              className={`transition-colors ${
                isAnnual ? 'text-white' : 'text-gray-400'
              }`}
            >
              Annual <span className="text-accent-400 font-semibold">-17%</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-16"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group ${
                tier.isPopular ? 'md:scale-105 md:-mt-4' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-accent-600 to-primary-600 px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </motion.div>
                </div>
              )}

              {/* Card */}
              <motion.div
                whileHover={{
                  y: tier.isPopular ? 0 : -10,
                  borderColor: 'rgba(14, 165, 233, 0.5)',
                }}
                className={`glass p-5 md:p-8 rounded-xl h-full flex flex-col transition-all ${
                  tier.isPopular
                    ? 'border-primary-600/50 shadow-glow-lg'
                    : 'hover:border-primary-400/50'
                }`}
              >
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {tier.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">{tier.period}</span>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mb-6 btn group w-full ${
                    tier.isPopular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Features */}
                <div className="space-y-3 flex-grow">
                  {tier.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 ${
                        feature.includes('+') ? 'font-semibold text-primary-400 mb-3' : ''
                      }`}
                    >
                      {!feature.includes('+') && (
                        <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${
                        feature.includes('+')
                          ? 'text-primary-400'
                          : 'text-gray-300'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass p-6 md:p-12 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-400 mb-6">
            Have unique requirements? Let's discuss a plan tailored specifically to your business needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;


