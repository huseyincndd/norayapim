"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import CreativeFlowSectionNoPadding from '../components/CreativeFlowSectionNoPadding';
import AboutSection from '../components/AboutSection';
import ApproachSection from '../components/ApproachSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import JourneySection from '../components/JourneySection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const AboutPage = () => {
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
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://demo.awaikenthemes.com/artistics/creative-portfolio/wp-content/uploads/2025/02/page-header-bg.jpg"
              alt="About Page Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto pt-8 lg:pt-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12 lg:mb-16"
              >
                <h1 className="text-4xl lg:text-7xl font-bold text-white tracking-wider mb-4">
                  <span className="text-white">Hakkımızda</span>
                </h1>
                
                {/* Breadcrumb Navigation */}
                <div className="text-sm lg:text-lg text-white/80">
                  <span className="text-white">Ana Sayfa</span>
                  <span className="text-white mx-2">*</span>
                  <span className="text-white">Hakkımızda</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Slogan Slider - Using CreativeFlowSectionNoPadding */}
        <div className="pb-2 lg:pb-3">
          <CreativeFlowSectionNoPadding 
            duration={40} 
            className="py-0" 
            noBg={true}
          />
        </div>

        {/* Common Background Section for all content */} 
        <section className="relative bg-black overflow-hidden">
          {/* Gradient Light Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left Side Light */}
            <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-white/5 via-white/10 to-transparent"></div>
            {/* Right Side Light */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 via-white/10 to-transparent"></div>
            {/* Top Light */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 via-white/10 to-transparent"></div>
            {/* Bottom Light */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/5 via-white/10 to-transparent"></div>
          </div>

          {/* About Section */}
          <div className="relative z-10">
            <AboutSection noBg={true} />
          </div>

          {/* Journey Section */}
          <div className="relative z-10">
            <JourneySection />
          </div>

          {/* Approach Section */}
          <div className="relative z-10">
            <ApproachSection />
          </div>

          {/* Why Choose Us Section */}
          <div className="relative z-10">
            <WhyChooseUsSection />
          </div>

          {/* What We Do Section */}
          <div className="relative z-10">
            <WhatWeDoSection />
          </div>

          {/* FAQ Section */}
          <div className="relative z-10">
            <FAQSection />
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 