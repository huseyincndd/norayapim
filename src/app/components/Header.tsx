"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { 
      id: 'home',
      label: 'Ana Sayfa', 
      href: '#home',
      imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=1080&fit=crop&q=80'
    },
    { 
      id: 'about',
      label: 'Hakkımızda', 
      href: '#about',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80'
    },
    { 
      id: 'services',
      label: 'Hizmetler', 
      href: '#services',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80'
    },
    { 
      id: 'projects',
      label: 'Projeler', 
      href: '#projects',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80'
    },
    { 
      id: 'contact',
      label: 'İletişim', 
      href: '#contact',
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&q=80'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/norayapim',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/norayapim',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/norayapim',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@norayapim',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Behance',
      url: 'https://behance.net/norayapim',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.561-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h4.976c2.318 0 4.204 1.506 4.204 3.588 0 2.082-1.886 3.588-4.204 3.588zM2.977 9.609V6.26h1.897c1.233 0 1.948.493 1.948 1.607 0 1.115-.715 1.742-1.948 1.742H2.977z"/>
        </svg>
      )
    }
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Mouse tracking for magnetic effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isMenuOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMenuOpen]);

  // Magnetic hover effect
  const getMagneticTransform = (element: HTMLElement | null) => {
    if (!element || !isMenuOpen) return { x: 0, y: 0 };

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = mousePosition.x - centerX;
    const distanceY = mousePosition.y - centerY;
    
    const maxDistance = 100;
    const strength = 0.3;
    
    const magneticX = Math.max(-maxDistance, Math.min(maxDistance, distanceX)) * strength;
    const magneticY = Math.max(-maxDistance, Math.min(maxDistance, distanceY)) * strength;
    
    return { x: magneticX, y: magneticY };
  };

  return (
    <>
      {/* Main Header Bar - Transparent and integrated with HeroSection */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <a 
                href="#home" 
                className="flex items-center hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <h1 className="text-2xl font-bold text-white tracking-wider font-bebas-neue group-hover:text-premium-red transition-all duration-300">
                  NORA
                </h1>
              </a>
            </motion.div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-white/80 hover:text-white font-light tracking-wide transition-all duration-300 relative group cursor-pointer font-body"
                >
                  {item.label}
                  {/* Animated underline with premium red */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-premium-red transition-all duration-500 group-hover:w-full"></span>
                  {/* Subtle glow effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-premium-red/30 blur-sm transition-all duration-500 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* CTA Button - Premium Red Gradient */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block relative z-40"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-none bg-gradient-to-r from-premium-red via-premium-red-light to-premium-red text-white font-semibold hover:scale-105 transition-all duration-300 font-body shadow-xl border border-premium-red/30 hover:border-premium-red/60 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-premium-red-dark via-premium-red to-premium-red-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="tracking-wide relative z-10">Proje Başlat</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12 relative z-10"
                >
                  <path
                    d="M5 12H19M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Mobile Menu Button - Only Red */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-transparent text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg relative z-40"
            >
              {/* Hamburger Icon: 3 lines */}
              <motion.div
                animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute w-6 h-0.5 bg-white rounded-full"
              />
              <motion.div
                animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute w-6 h-0.5 bg-white rounded-full"
              />
              <motion.div
                animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute w-6 h-0.5 bg-white rounded-full"
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Interactive Gallery Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-full z-30 bg-black overflow-hidden"
          >
            {/* No background elements, just pure black */}

            {/* Main Content Container */}
            <div className="relative h-full flex flex-col pt-24">
              {/* Navigation Links */}
              <div className="flex-1 flex items-center justify-center px-8 md:px-16">
                <nav className="w-full max-w-2xl">
                  <ul className="space-y-8 md:space-y-12">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3 + index * 0.1,
                          ease: "easeOut"
                        }}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="w-full"
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`group flex items-center justify-between py-4 w-full cursor-pointer transition-all duration-300 ${
                            hoveredItem === item.id ? 'text-white' : 
                            hoveredItem ? 'text-white/30' : 'text-white/60'
                          }`}
                        >
                          {/* Link Text */}
                          <span className="text-4xl md:text-5xl font-light font-display relative">
                            {item.label}
                            {/* Premium Red Line - Animated on Hover */}
                            <motion.div 
                              className="absolute -bottom-2 left-0 h-0.5 bg-premium-red"
                              initial={{ width: 0 }}
                              animate={{ width: hoveredItem === item.id ? '100%' : 0 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                          </span>
                          
                          {/* Premium Red Dot - Appears on Hover */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: hoveredItem === item.id ? 1 : 0,
                              scale: hoveredItem === item.id ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-3 h-3 rounded-full bg-premium-red"
                          />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Footer Section - Contact & Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="px-8 md:px-16 pb-8 md:pb-12"
              >
                {/* Contact Information */}
                <div className="mb-8">
                  <h3 className="text-white/60 text-sm font-medium mb-4 font-body tracking-wide uppercase">
                    İletişim
                  </h3>
                  <div className="space-y-2 text-white/50 font-body">
                    <p className="text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                      info@norayapim.com
                    </p>
                    <p className="text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                      +90 (212) 555 0123
                    </p>
                    <p className="text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-white/60 text-sm font-medium mb-4 font-body tracking-wide uppercase">
                    Sosyal Medya
                  </h3>
                  <div className="flex items-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.9 + index * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-premium-red/20 border border-white/10 hover:border-premium-red/30 text-white/60 hover:text-premium-red transition-all duration-300 group"
                      >
                        <span className="group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="h-px bg-gradient-to-r from-transparent via-premium-red/30 to-transparent mt-8"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 