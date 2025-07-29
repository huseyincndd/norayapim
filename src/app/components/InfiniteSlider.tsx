"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { InfiniteSlider as UISlider } from './ui/infinite-slider';

const InfiniteSlider = ({ noBg = false }: { noBg?: boolean }) => {
  const keywords = [
    "Scriptwriting",
    "Sound Design",
    "Color Grading",
    "Motion Graph",
    "Film Production",
    "Video Editing",
    "Visual Effects",
    "Cinematography"
  ];

  return (
    <section className={`relative py-16 lg:py-24 ${noBg ? 'bg-transparent' : 'bg-gradient-to-br from-black via-gray-900 to-black'} overflow-hidden`}>
      {/* Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
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

      <div className="relative z-10">
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Smooth Edges */}
          <div className={`absolute left-0 top-0 z-10 h-full w-32 ${noBg ? 'bg-gradient-to-r from-transparent to-transparent' : 'bg-gradient-to-r from-black to-transparent'}`} />
          <div className={`absolute right-0 top-0 z-10 h-full w-32 ${noBg ? 'bg-gradient-to-l from-transparent to-transparent' : 'bg-gradient-to-l from-black to-transparent'}`} />
          
          {/* The Infinite Marquee */}
          <UISlider 
            className="py-8"
            duration={15}
            gap={64}
            direction="left"
          >
            {keywords.map((keyword, index) => (
              <div key={index} className="flex items-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white/80 uppercase tracking-widest px-12 font-sans">
                  {keyword}
                </span>
                {index < keywords.length - 1 && (
                  <motion.span 
                    className="w-3 h-3 bg-premium-red rounded-full mx-8"
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                )}
              </div>
            ))}
          </UISlider>
        </div>
      </div>
    </section>
  );
};

export default InfiniteSlider; 