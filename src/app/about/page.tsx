"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import CreativeFlowSection from '../components/CreativeFlowSection';
import AboutSection from '../components/AboutSection';
import ApproachSection from '../components/ApproachSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import JourneySection from '../components/JourneySection';
import TeamImageSlider from '../components/TeamImageSlider';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import AboutPageSection from '../components/AboutSectionNew';
import AboutSectionNew from '../components/AboutSectionNew';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Header />
      
      <div className="relative z-10">
        {/* Hero Section with Background */}
        <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Image - black & white aesthetic */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://www.sineplusakademi.com/wp-content/themes/yootheme/cache/f6/freelance-film-production-f608a5c7.jpeg"
              alt="About Page Background"
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
                <span className="uppercase tracking-wider text-sm text-white/80">Welcome</span>
                <span className="h-px w-28 bg-white/40" />
              </div>

              {/* Big headline */}
              <h1 className="uppercase font-extrabold text-white leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block">Let's make your</span>
                <span className="block">Film + TV Shows</span>
                <span className="block">& More</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>

              {/* CTAs - black & white only */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Show Plan
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
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

        {/* Common Background Section for all content */} 
        <section className="relative bg-black overflow-hidden">
          {/* About Section */}
          <div className="relative z-10">
            <AboutSectionNew />
          </div>
          {/* Team Image Slider Section */}
          <div className="relative z-10">
            <TeamImageSlider />
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