"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface InstagramFeedSectionProps {
  noBg?: boolean;
}

const InstagramFeedSection: React.FC<InstagramFeedSectionProps> = ({ noBg = false }) => {
  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (!document.querySelector('script[src*="elfsight.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className={`py-12 lg:py-20 ${noBg ? 'bg-transparent' : 'bg-black'} overflow-hidden relative`}>
      {/* Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-black" />
          
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

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
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
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >


          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold text-white mb-6 text-left lg:text-center"
          >
            Sosyal Medyada{" "}
            <span className="text-white">Biz</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed text-left lg:text-center"
          >
            En yeni projeler ve perde arkası hikayeler için Instagram'da bizi takip edin.
          </motion.p>


        </motion.div>

        {/* Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Elfsight Instagram Feed */}
          <div 
            className="elfsight-app-f6076530-70ba-4a37-bd93-251bb16030d0" 
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeedSection; 