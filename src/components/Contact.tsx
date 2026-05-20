import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  email?: string;
  phone?: string;
}

const Contact: React.FC<ContactProps> = ({ email = 'imraj.engineer@gmail.com', phone = '+91 7645848488' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            business: '',
            projectType: '',
            budget: '',
            message: '',
          });
        }, 3000);
      }
    } catch {
      alert('Failed to send message. Please email us directly.');
    } finally {
      setSending(false);
    }
  };

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
    <section id="contact" className="py-12 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/5 rounded-full filter blur-3xl" />
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
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="subheadline max-w-2xl mx-auto">
            Get in touch with our team to discuss your project and receive a free consultation
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 mb-6 md:mb-20"
        >
          {/* Email */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="glass p-8 rounded-xl text-center hover:border-primary-400/50 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm">{email}</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="glass p-8 rounded-xl text-center hover:border-primary-400/50 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">{phone}</p>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="glass p-8 rounded-xl text-center hover:border-primary-400/50 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Location</h3>
            <p className="text-gray-400 text-sm">San Francisco, CA</p>
          </motion.div>
        </motion.div>

        {/* Contact Form and Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-12"
        >
          {/* Form */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 md:p-10 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-dark-900/60 text-white text-base placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-dark-900/60 text-white text-base placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-dark-900/60 text-white text-base placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-dark-900/60 text-white text-base focus:outline-none focus:border-primary-400 transition-all"
                >
                  <option value="">Select a project type</option>
                  <option value="website">Website Design</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="landing">Landing Page</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </motion.select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-dark-900/60 text-white text-base focus:outline-none focus:border-primary-400 transition-all"
                >
                  <option value="">Select budget range</option>
                  <option value="25000-100000">₹25,000 - ₹1,00,000</option>
                  <option value="100000-250000">₹1,00,000 - ₹2,50,000</option>
                  <option value="250000-500000">₹2,50,000 - ₹5,00,000</option>
                  <option value="500000+">₹5,00,000+</option>
                </motion.select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tell Us About Your Project
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-lg border border-white/20 bg-dark-900/60 text-white text-base placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-all resize-none"
                  placeholder="Tell us about your project goals and requirements..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full btn btn-primary group text-base"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Card */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Contact</h3>
              <p className="text-gray-400 mb-6">
                Our team typically responds to inquiries within 24 hours. For urgent matters, please call us directly.
              </p>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn btn-primary justify-center min-h-[48px]"
                >
                  Start Live Chat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'tel:+917645848488'}
                  className="w-full btn btn-secondary justify-center min-h-[48px]"
                >
                  Schedule Call
                </motion.button>
              </div>
            </div>

            {/* Hours */}
            <div className="glass p-8 rounded-xl">
              <h4 className="font-bold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-primary-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-primary-400">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


