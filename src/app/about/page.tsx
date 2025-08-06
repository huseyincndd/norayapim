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
         <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://demo.awaikenthemes.com/artistics/creative-portfolio/wp-content/uploads/2025/02/page-header-bg.jpg"
              alt="Services Page Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <div className="w-2 h-2 bg-white rounded-full" />
                <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-wider font-bebas-neue">
                  HİZMETLERİMİZ
                </h1>
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto"
              >
                Hikayenizi birlikte yazalım. Projeleriniz için bizimle iletişime geçin.
              </motion.p>
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

        {/* About Section */}
        <AboutSection noBg={true} />

        {/* Approach Section */}
        <ApproachSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* What We Do Section */}
        <WhatWeDoSection />


      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage; 