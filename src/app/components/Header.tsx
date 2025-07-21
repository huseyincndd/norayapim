"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { label: 'Ana Sayfa', href: '#home' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Hizmetler', href: '#services' },
    { label: 'Projeler', href: '#projects' },
    { label: 'İletişim', href: '#contact' }
  ];

  // Scroll logic for disappearing act
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {/* Main Header Bar - Slides down from top */}
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-b from-[#0A0A0A]/90 to-transparent backdrop-blur-sm border-b border-[#2A2A2A]"
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
                    className="text-2xl font-bold text-white tracking-wider hover:text-[#D4AF37] transition-all duration-300 cursor-pointer group font-display"
                  >
                    <span className="group-hover:tracking-widest transition-all duration-300">NORA</span>
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
                      className="text-[#E5E5E5] hover:text-white font-light tracking-wide transition-all duration-300 relative group cursor-pointer font-body"
                    >
                      {item.label}
                      {/* Animated underline */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 transition-all duration-500 group-hover:w-full"></span>
                      {/* Subtle glow effect */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37]/30 blur-sm transition-all duration-500 group-hover:w-full"></span>
                    </motion.a>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hidden lg:block"
                >
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-none bg-[#D4AF37] text-black font-medium hover:bg-[#D4AF37]/90 hover:scale-105 transition-all duration-300 font-body"
                  >
                    <span className="tracking-wide">Proje Başlat</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12"
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

                {/* Mobile Menu Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  onClick={() => setIsMenuOpen(true)}
                  className="lg:hidden flex items-center justify-center w-12 h-12 rounded-none bg-[#111111] border border-[#2A2A2A] text-white hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300"
                  >
                    <path
                      d="M3 12H21M3 6H21M3 18H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Full-Screen Overlay Menu - Mobile Optimized */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl grain-texture"
          >
            {/* Close Button - Mobile: Top-right, Desktop: Top-right */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-none bg-[#111111] border border-[#2A2A2A] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <svg
                width="16"
                height="16"
                className="md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            {/* Navigation Links - Mobile: Vertical stack, Desktop: Centered */}
            <div className="flex items-center justify-center h-full px-4">
              <nav className="text-center w-full">
                <ul className="flex flex-col items-center justify-center space-y-6 md:space-y-8 min-h-[60vh]">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.2 + index * 0.1,
                        ease: "easeOut"
                      }}
                      className="w-full"
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-[#E5E5E5] hover:text-white transition-all duration-300 cursor-pointer block relative group font-display py-2 md:py-4 w-full text-center"
                      >
                        {item.label}
                        {/* Subtle underline on hover */}
                        <span className="absolute -bottom-1 md:-bottom-2 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links - Bottom - Mobile: Smaller, Desktop: Larger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex items-center space-x-4 md:space-x-6">
                {[
                  { name: 'Instagram', icon: '📷' },
                  { name: 'Twitter', icon: '🐦' },
                  { name: 'LinkedIn', icon: '💼' },
                  { name: 'YouTube', icon: '📺' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={`#${social.name.toLowerCase()}`}
                    className="text-xl md:text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 