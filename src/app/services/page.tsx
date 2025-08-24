"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import CreativeFlowSection from '../components/CreativeFlowSection';
import ServicesSection from '../components/ServicesSection';
import ServicesSectionNew from '../components/ServicesSectionNew';
import ServicesGridSection from '../components/ServicesGridSection';
import CustomerServicesSection from '../components/CustomerServicesSection';
import BrandsSection from '../components/BrandsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import PremiumStatsSection from '../components/PremiumStatsSection';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black/90 to-black" />
        {/* Animated Background Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
        {/* White Blur Effects */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <Header />
      
      <div className="relative z-10">
        {/* Hero Section with Background */}
        <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Image - black & white aesthetic */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://www.sineplusakademi.com/wp-content/themes/yootheme/cache/f6/freelance-film-production-f608a5c7.jpeg"
              alt="Services Page Background"
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-black/85" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl pt-8 lg:pt-16 mx-0 lg:mx-auto"
            >
              {/* Small label + line */}
              <div className="flex items-center gap-6 mb-6">
                <span className="uppercase tracking-wider text-sm text-white/80">NELER YAPIYORUZ</span>
                <span className="h-px w-28 bg-white/40" />
              </div>

              {/* Big headline - EXACT same as About */}
              <h1 className="uppercase font-extrabold text-white leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block">Fikirden Ekrana</span>
                <span className="block">Uzanan</span>
                <span className="block">Profesyonel Süreç</span>
              </h1>

              {/* Description - same tone */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Film, dizi, reklam ve dijital içerik projelerini planlama, prodüksiyon ve post prodüksiyon süreçlerinden hayata geçiriyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Slogan Slider - Using CreativeFlowSection */}
        <div className="pb-2 lg:pb-3 bg-black">
          <CreativeFlowSection 
            duration={40} 
            className="py-0" 
            noBg={true}
          />
        </div>
        {/* Services Grid Section */}
        <ServicesGridSection />

      

        {/* Customer Services Section */}
        <CustomerServicesSection />

        {/* Services Section New */}
        <ServicesSectionNew />
        
        {/* Brands Section */}
        <BrandsSection />

      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
