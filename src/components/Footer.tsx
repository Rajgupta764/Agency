import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Star,
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';

interface FooterProps {
  onGetStartedClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onGetStartedClick }) => {
  const currentYear = new Date().getFullYear();

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

  const socialLinks = [
    { icon: Heart, label: 'Facebook', href: '#' },
    { icon: Star, label: 'Twitter', href: '#' },
    { icon: Send, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ];

  return (
    <footer className="border-t border-white/10 relative overflow-hidden bg-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl" />
      </div>

      {/* Main Footer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-custom py-12 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 mb-6">
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary" />
              <span className="font-bold text-lg gradient-text">StayMitra</span>
            </a>
            <p className="text-gray-400 text-sm mb-6">
              Building stunning, high-converting websites that help businesses grow and succeed online.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-gray-300 uppercase">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-3.5 border border-white/20 bg-dark-900/60 text-white text-base rounded-lg focus:outline-none focus:border-primary-400 placeholder-gray-500"
                />
                <button className="min-w-[44px] min-h-[44px] bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Website Design',
                'E-Commerce',
                'Landing Pages',
                'SEO Optimization',
                'Website Redesign',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#' },
                { label: 'Our Portfolio', href: '#portfolio' },
                { label: 'Process', href: '#process' },
                { label: 'Blog', href: '#' },
                { label: 'Careers', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary-400" />
                <a href="mailto:imraj.engineer@gmail.com" className="hover:text-primary-400 transition-colors">
                  imraj.engineer@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary-400" />
                <a href="tel:+917645848488" className="hover:text-primary-400 transition-colors">
                  +91 7645848488
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                <span>San Francisco, CA 94107</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"
        />

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>
              &copy; {currentYear} StayMitra. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg glass hover:bg-white/20 transition-colors group"
                  title={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating CTA (Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 md:hidden z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onGetStartedClick}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white shadow-lg hover:shadow-glow-lg transition-shadow"
        >
          <Mail className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;


