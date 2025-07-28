"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const HeroSection = () => {
  // Hybrid Loading State Management
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Trigger video loading after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants for the new slogan
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <section className="relative h-[60vh] md:h-screen w-full overflow-hidden">
      {/* Layer 1: Video Background (Conditionally Rendered) */}
      {isMounted && (
        <div className="absolute inset-0 z-[-3]">
          <iframe 
            src="https://player.vimeo.com/video/1089941484?muted=1&autoplay=1&loop=1&background=1&quality=720p&controls=0&title=0&byline=0&portrait=0&transparent=0&playsinline=1&preload=auto" 
            allow="autoplay; fullscreen; picture-in-picture" 
            className="absolute top-1/2 left-1/2 w-auto h-auto min-w-[250%] md:min-w-[120%] min-h-[115%] -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{ 
              border: 'none', 
              pointerEvents: 'none',
              width: '100%',
              height: '100%',
              opacity: isVideoPlaying ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            onLoad={() => {
              console.log('Video iframe loaded');
              setIsVideoReady(true);
              
              // Video gerçekten oynatılmaya başladığında geçiş yap
              // Vimeo'nun loading overlay'ini atlamak için daha uzun bir delay
              setTimeout(() => {
                console.log('Video should be playing now');
                setIsVideoPlaying(true);
              }, 1500);
            }}
            onError={(e) => {
              console.error('Video loading error:', e);
            }}
          />
        </div>
      )}

      {/* Layer 2: Poster Image (Cross-fade with video) */}
      <div 
        className={`absolute inset-0 z-[-2] bg-cover bg-center transition-opacity duration-300 ease-in-out ${
          isVideoPlaying ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=1080&fit=crop&q=80')",
          backgroundPosition: 'center center'
        }}
      />

      {/* Layer 3: Dark Overlay (Always Present) */}
      <div className="absolute inset-0 z-[-1] bg-black/30" />

      {/* Header */}
      <Header />

      {/* Main Content Container */}
      <div className="absolute z-10 inset-0 flex items-end justify-center md:justify-start px-4 md:px-8 md:items-end md:bottom-16 md:left-16 pb-8 md:pb-0">
        <motion.div
          className="max-w-4xl w-full ml-4 md:ml-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Part 1: Solid Text */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight font-bebas-neue mb-2 tracking-wider"
          >
            <span className="text-white">HİKAYENİ</span>
          </motion.h1>

          {/* Part 2: Solid Text */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight font-bebas-neue mb-2 tracking-wider"
          >
            <span className="text-white">GÖRSELLEŞTİR</span>
          </motion.h1>

          {/* Part 3: Outline Text */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight font-bebas-neue tracking-wider"
          >
            <span 
              className="text-transparent"
              style={{ 
                WebkitTextStroke: '1px white'
              }}
            >
              PRODÜKSİYON
            </span>
          </motion.h1>
        </motion.div>
      </div>

      {/* Loading Indicator (Optional) */}
      {isMounted && !isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 right-8 z-20"
        >
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
            <span>Video yükleniyor...</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;