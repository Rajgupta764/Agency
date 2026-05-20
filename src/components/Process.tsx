import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We dive deep into understanding your business, goals, target audience, and competition.',
      details: [
        'Business analysis',
        'Market research',
        'Competitor audit',
        'Goal setting',
      ],
      duration: 'Week 1',
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Develop a comprehensive strategy that aligns your website with business objectives.',
      details: [
        'Content strategy',
        'User journey mapping',
        'Technology stack',
        'Timeline planning',
      ],
      duration: 'Week 2',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Create stunning, conversion-focused designs that reflect your brand identity.',
      details: [
        'Wireframing',
        'Visual design',
        'Prototype creation',
        'Client feedback loops',
      ],
      duration: 'Week 3-4',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Build your website with clean, optimized, and scalable code.',
      details: [
        'Frontend development',
        'Backend integration',
        'Performance optimization',
        'Quality assurance',
      ],
      duration: 'Week 5-7',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Deploy your website with comprehensive testing and optimization.',
      details: [
        'Final testing',
        'SEO setup',
        'Analytics setup',
        'Deployment',
      ],
      duration: 'Week 8',
    },
    {
      icon: BarChart3,
      title: 'Support',
      description: 'Ongoing maintenance, monitoring, and optimization for continued success.',
      details: [
        'Performance monitoring',
        'Security updates',
        'Content updates',
        'Growth optimization',
      ],
      duration: 'Ongoing',
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
    <section id="process" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl" />
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
            Our Proven <span className="gradient-text">Process</span>
          </h2>
          <p className="subheadline max-w-2xl mx-auto">
            A strategic, collaborative approach designed to deliver exceptional results
          </p>
        </motion.div>

        {/* Process Timeline - Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden lg:block mb-16"
        >
          <div className="relative">
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600"
            />

            {/* Steps */}
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    onMouseEnter={() => setActiveStep(index)}
                    className="cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative flex flex-col items-center transition-all ${
                        activeStep === index ? 'z-10' : 'z-0'
                      }`}
                    >
                      {/* Circle */}
                      <motion.div
                        animate={{
                          scale: activeStep === index ? 1.2 : 1,
                          boxShadow:
                            activeStep === index
                              ? '0 0 20px rgba(14, 165, 233, 0.5)'
                              : '0 0 0px rgba(14, 165, 233, 0)',
                        }}
                        className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 relative z-10"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Number */}
                      <div className="absolute -top-6 -right-3 w-6 h-6 rounded-full bg-accent-600 flex items-center justify-center text-xs font-bold text-white">
                        {index + 1}
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-white text-center mb-2 text-sm">
                        {step.title}
                      </h3>

                      {/* Duration */}
                      <p className="text-xs text-primary-400 font-medium">
                        {step.duration}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-16 glass p-8 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center flex-shrink-0">
                {React.createElement(steps[activeStep].icon, {
                  className: 'w-8 h-8 text-accent-400',
                })}
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-white mb-2">
                  {steps[activeStep].title}
                </h4>
                <p className="text-gray-300 mb-4">
                  {steps[activeStep].description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {steps[activeStep].details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Process Timeline - Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="lg:hidden space-y-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-xl border-l-4 border-primary-600"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-white">{step.title}</h3>
                      <span className="text-xs text-primary-400 font-medium bg-primary-600/20 px-2 py-1 rounded">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      {step.description}
                    </p>
                    <div className="space-y-1">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;


