"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SloganSliderSection = ({ noBg = false }: { noBg?: false }) => {
  const slogans = [
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
      {/* Unified Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/90 to-black" />
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/3 left-1/4 w-32 h-32 bg-premium-red/5 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-premium-red/5 rounded-full blur-2xl"
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
          <div className="flex animate-scroll items-center py-8">
            {/* First Set of Slogans */}
            <div className="flex whitespace-nowrap">
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white/80 uppercase tracking-widest px-12 font-sans">
                {slogans.map((slogan, index) => (
                  <span key={index} className="inline-flex items-center">
                    {slogan}
                    {index < slogans.length - 1 && (
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
                  </span>
                ))}
              </span>
            </div>
            
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex whitespace-nowrap">
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white/80 uppercase tracking-widest px-12 font-sans">
                {slogans.map((slogan, index) => (
                  <span key={index} className="inline-flex items-center">
                    {slogan}
                    {index < slogans.length - 1 && (
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
                  </span>
                ))}
              </span>
            </div>
            
            {/* Third Set for Extra Smooth Loop */}
            <div className="flex whitespace-nowrap">
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white/80 uppercase tracking-widest px-12 font-sans">
                {slogans.map((slogan, index) => (
                  <span key={index} className="inline-flex items-center">
                    {slogan}
                    {index < slogans.length - 1 && (
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
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 8s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default SloganSliderSection; 