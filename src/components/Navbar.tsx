import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Layout, Briefcase, ClipboardList, MessageSquare, CreditCard, Mail } from 'lucide-react';

interface NavbarProps {
  onGetStartedClick?: () => void;
}

const menuIcons: Record<string, React.ElementType> = {
  Home: Home,
  Services: Layout,
  Portfolio: Briefcase,
  Process: ClipboardList,
  Testimonials: MessageSquare,
  Pricing: CreditCard,
  Contact: Mail,
};

const Navbar: React.FC<NavbarProps> = ({ onGetStartedClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const handleNavClick = useCallback((href: string) => {
    closeMenu();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }, [closeMenu]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
    }`} style={isScrolled ? { backgroundColor: 'rgba(0, 0, 0, 0.95)' } : undefined}>
      <div className="container-custom py-3 md:py-6 flex items-center justify-between">
         <a href="#hero" className="flex items-center gap-2 text-2xl font-bold z-50">
          <div className="w-8 h-8 rounded-lg gradient-primary" />
          <span className="gradient-text font-playfair tracking-wide">StayMitra</span>
        </a>

        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}
              className={`px-4 py-3 rounded-lg transition-colors duration-200 text-sm font-medium ${
                activeSection === item.href.substring(1) ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
              style={activeSection === item.href.substring(1) ? { color: '#F69D39' } : undefined}
            >{item.label}</a>
          ))}
        </div>

        <button onClick={onGetStartedClick} className="hidden lg:inline-flex btn btn-primary text-sm">Get Started</button>

        <button className="lg:hidden relative z-50 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 z-40 lg:hidden"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] max-w-[85vw] z-40 lg:hidden flex flex-col"
              style={{ backgroundColor: '#0B1120', borderRight: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex-1 overflow-y-auto min-h-0 px-4 pt-14 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="gradient-text font-playfair font-bold text-xl tracking-wide">StayMitra</span>
                  <button onClick={closeMenu} className="min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Close menu">
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  {navItems.map((item, i) => {
                    const Icon = menuIcons[item.label];
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <motion.a key={item.label}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        href={item.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                        className={`flex items-center gap-3 min-h-[48px] px-4 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-primary-600/20 to-accent-600/10 text-white border border-primary-600/20'
                            : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                          isActive ? 'bg-primary-600/30 text-primary-300' : 'text-gray-500'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </span>
                        {item.label}
                        {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-400" />}
                      </motion.a>
                    );
                  })}
                </div>
                <button onClick={() => { closeMenu(); setTimeout(() => onGetStartedClick?.(), 150); }}
                  className="w-full min-h-[48px] mt-6 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-600/30 transition-all"
                >Get Started</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


