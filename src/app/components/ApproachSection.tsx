"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ApproachSection = () => {
  const approachItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Misyonumuz",
      description: "Misyonumuz, markaları güçlendirerek yenilikçi, görsel olarak etkileyici tasarımlar sunmak ve yaratıcılık ve hassasiyetle kalıcı etki bırakan ilham verici, etkileşimli çözümler geliştirmektir."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Değerlerimiz",
      description: "Değerlerimiz, markaları güçlendirerek yenilikçi, görsel olarak etkileyici tasarımlar sunmak ve yaratıcılık ve hassasiyetle kalıcı etki bırakan ilham verici, etkileşimli çözümler geliştirmektir."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Vizyonumuz",
      description: "Vizyonumuz, markaları güçlendirerek yenilikçi, görsel olarak etkileyici tasarımlar sunmak ve yaratıcılık ve hassasiyetle kalıcı etki bırakan ilham verici, etkileşimli çözümler geliştirmektir."
    }
  ];

  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80"
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black/90 to-black" />
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
                         <h2 className="text-sm lg:text-base font-semibold text-white tracking-wider uppercase">
               YAKLAŞIM
             </h2>
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
                         className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
           >
             Mükemmelliğe ulaşmak için yaratıcı <span className="text-white">yaklaşımımız</span>
           </motion.h3>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10"
          >
            <div className="text-white mb-6">
              {approachItems[0].icon}
            </div>
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {approachItems[0].title}
            </h4>
            <p className="text-white/80 leading-relaxed">
              {approachItems[0].description}
            </p>
          </motion.div>

          {/* Middle Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
                         <img
               src={images[0]}
               alt="Takım işbirliği"
               className="w-full h-full object-cover"
             />
          </motion.div>

          {/* Right Column - Value Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10"
          >
            <div className="text-white mb-6">
              {approachItems[1].icon}
            </div>
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {approachItems[1].title}
            </h4>
            <p className="text-white/80 leading-relaxed">
              {approachItems[1].description}
            </p>
          </motion.div>

          {/* Bottom Row - Image, Vision Card, Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
                         <img
               src={images[1]}
               alt="Yaratıcı işbirliği"
               className="w-full h-full object-cover"
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10"
          >
            <div className="text-white mb-6">
              {approachItems[2].icon}
            </div>
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {approachItems[2].title}
            </h4>
            <p className="text-white/80 leading-relaxed">
              {approachItems[2].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
                         <img
               src={images[2]}
               alt="Takım toplantısı"
               className="w-full h-full object-cover"
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection; 