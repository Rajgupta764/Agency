import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

interface Portfolio {
  id: number;
  title: string;
  category: string;
  description: string;
  results: string;
  image: string;
  url: string;
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const portfolios: Portfolio[] = [      
    {
      id: 1,
      title: 'The Daily Grind',
      category: 'Landing',
      description: 'Boutique cafe & roastery website with online menu, gallery, and table booking',
      results: 'Online Menu + Table Booking | 4.9★ Rating | Voted #1 Cafe 2025',
      image: '/daily-grind.png',
      url: 'https://daily-grind-showcase.vercel.app/',
    },
    {
      id: 2,
      title: 'Vansh PG — Navrangpura',
      category: 'Business',
      description: 'Premium PG accommodation website with room listings, amenities, and online booking',
      results: 'Single/Double/Triple Listings | ₹5K–₹10K/mo | WhatsApp Booking',
      image: '/vansh-pg.png',
      url: 'https://pg-website-xi.vercel.app/',
    },
    {
      id: 3,
      title: 'FindInternship',
      category: 'SaaS',
      description: 'Internship discovery platform connecting students with companies',
      results: 'Job Listings | Student Dashboard | Company Portal',
      image: '/findinternship.png',
      url: 'https://findinternship-frontend.onrender.com/',
    },
    {
      id: 4,
      title: 'Fashion E-Commerce',
      category: 'E-Commerce',
      description: 'Full-featured online fashion store',
      results: '450% Sales Growth | 50K+ Products | 99.9% Uptime',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop&q=80',
      url: '#',
    },
    {
      id: 5,
      title: 'Creative Portfolio',
      category: 'Portfolio',
      description: 'Stunning portfolio for design agency',
      results: '3x Client Inquiries | Awwwards Nominee | Featured on Behance',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=80',
      url: '#',
    },
    {
      id: 6,
      title: 'Local Business Website',
      category: 'Business',
      description: 'Local SEO optimized website for service business',
      results: '+1200% Local Search Visibility | #1 Google Maps Ranking | 50K Yearly Leads',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
      url: '#',
    },
  ];

  const categories = ['All', 'Business', 'Landing', 'SaaS', 'E-Commerce', 'Portfolio'];

  const filteredPortfolios =
    selectedCategory === 'All'
      ? portfolios
      : portfolios.filter((p) => p.category === selectedCategory);

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
    <section id="portfolio" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl" />
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
            Our <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="subheadline max-w-2xl mx-auto">
            Showcasing our most impactful projects and their measurable results
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all text-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'glass text-gray-300 hover:text-white hover:border-primary-400/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredPortfolios.map((portfolio) => (
            <motion.div
              key={portfolio.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden h-full flex flex-col hover:border-accent-400/50 transition-all"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-600/10 to-accent-600/10">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <a
                    href={portfolio.url}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  >
                    <span className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors">
                      <Eye className="w-5 h-5" />
                    </span>
                    <span className="p-3 bg-accent-600 rounded-full text-white hover:bg-accent-700 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </span>
                  </a>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent-600/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {portfolio.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-400 transition-colors">
                    {portfolio.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {portfolio.description}
                  </p>

                  {/* Results */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-primary-400 font-semibold mb-2">
                      KEY RESULTS
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {portfolio.results}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn btn-secondary group"
          >
            Start Your Project
            <motion.span whileHover={{ x: 4 }}>
              <ExternalLink className="w-4 h-4 ml-2 inline" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;


