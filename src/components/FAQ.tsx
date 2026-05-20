import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs: FAQItem[] = [
    {
      question: 'How long does it take to build a website?',
      answer:
        'Our typical timeline is 6-8 weeks for a standard business website. This includes discovery, design, development, testing, and launch. Complex e-commerce or custom solutions may take longer. We provide a detailed timeline after our initial consultation.',
    },
    {
      question: 'What is included in your website packages?',
      answer:
        'Our packages include website design, development, mobile optimization, SEO setup, contact forms, analytics integration, SSL certificate, and initial hosting. Premium packages include e-commerce functionality, advanced integrations, and ongoing support. See our pricing page for detailed feature lists.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes! All our packages include ongoing support. We monitor your website\'s performance, handle security updates, and provide technical assistance. Our Business and Premium tiers include priority support and regular optimization recommendations.',
    },
    {
      question: 'Is your work SEO optimized?',
      answer:
        'Absolutely. Every website we build is SEO-friendly from the ground up. We implement proper semantic HTML, optimize for mobile, ensure fast loading speeds, set up Google Analytics, and configure meta tags and structured data. We also provide SEO recommendations specific to your industry.',
    },
    {
      question: 'Can I revise the design after completion?',
      answer:
        'Yes! All packages include revision rounds. The Starter plan includes 1 round, Business includes 3 rounds, and Premium includes unlimited revisions during the project timeline. After launch, additional changes can be discussed with our support team.',
    },
    {
      question: 'Do you handle hosting and domain registration?',
      answer:
        'We can help set up hosting and handle the technical setup. Hosting is included in our packages for the specified duration (3 months for Starter, 1 year for Business, 2 years for Premium). We can also assist with domain registration through our partners.',
    },
    {
      question: 'Will the website be mobile-responsive?',
      answer:
        'Yes, mobile responsiveness is standard on all our projects. We use a mobile-first design approach, ensuring your website looks and functions perfectly on phones, tablets, and desktops. Mobile users will have an optimized experience.',
    },
    {
      question: 'What happens if I need changes after the project is complete?',
      answer:
        'After your website launches, you can submit change requests through our support portal. Our team will provide quotes for post-launch modifications. For Business and Premium clients, regular updates and optimizations are included in the support package.',
    },
    {
      question: 'Do you build e-commerce websites?',
      answer:
        'Yes! Our Business and Premium packages support e-commerce integration. We can set up payment gateways (Stripe, PayPal), inventory management, product catalogs, and order tracking. We can also build custom e-commerce solutions tailored to your needs.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply click "Book Free Consultation" and tell us about your project. We\'ll discuss your goals, timeline, and budget, then provide a customized proposal. If you decide to work with us, we\'ll get your project started within 2 weeks.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-12 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl" />
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="subheadline max-w-2xl mx-auto">
            Have questions? We have answers. Still confused? Contact us directly.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {faqs.slice(0, 5).map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.button
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? -1 : index
                    )
                  }
                  className="w-full glass p-6 rounded-lg text-left hover:border-primary-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-white text-lg pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDown className="w-5 h-5 text-primary-400" />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openIndex === index ? 1 : 0,
                      height: openIndex === index ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {faqs.slice(5).map((faq, index) => (
              <motion.div
                key={index + 5}
                variants={itemVariants}
                className="group"
              >
                <motion.button
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index + 5 ? -1 : index + 5
                    )
                  }
                  className="w-full glass p-6 rounded-lg text-left hover:border-primary-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-white text-lg pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: openIndex === index + 5 ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDown className="w-5 h-5 text-primary-400" />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openIndex === index + 5 ? 1 : 0,
                      height: openIndex === index + 5 ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-24"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Please chat with our team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn btn-secondary"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;


