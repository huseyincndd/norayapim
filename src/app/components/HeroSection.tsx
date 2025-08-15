"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const HeroSection = () => {
  // Hybrid Loading State Management
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showBlackOverlay, setShowBlackOverlay] = useState(true);
  const [videoActuallyLoaded, setVideoActuallyLoaded] = useState(false);

  // Trigger video loading after component mounts
  useEffect(() => {
    setIsMounted(true);
    
    // Vimeo postMessage listener for real video status
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://player.vimeo.com') return;
      
      try {
        const data = JSON.parse(event.data);
        console.log('Vimeo message received:', data);
        
        // Video gerçekten oynatılmaya başladığında (sadece play eventi)
        if (data.event === 'play') {
          console.log('Vimeo video actually started playing:', data.event);
          setVideoActuallyLoaded(true);
          setIsVideoPlaying(true);
          
          // Video gerçekten oynatılmaya başladıktan sonra overlay'i kaldır
          setTimeout(() => {
            console.log('Removing black overlay...');
            setShowBlackOverlay(false);
          }, 2000); // 2 saniye buffer süresi
        }
      } catch (e) {
        console.log('Message parsing error:', e);
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Maksimum 8 saniye bekle, sonra zorla başlat (fallback)
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback: Video loading timeout, starting animation');
      console.log('Current videoActuallyLoaded state:', videoActuallyLoaded);
      if (!videoActuallyLoaded) {
        console.log('Activating fallback animation...');
        setIsVideoPlaying(true);
        setVideoActuallyLoaded(true);
        setTimeout(() => {
          setShowBlackOverlay(false);
        }, 500);
      }
    }, 8000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(fallbackTimer);
    };
  }, [videoActuallyLoaded]);

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
            src="https://player.vimeo.com/video/1089941484?muted=1&autoplay=1&loop=1&background=1&quality=720p&controls=0&title=0&byline=0&portrait=0&transparent=0&playsinline=1&preload=auto&api=1" 
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
              console.log('Video iframe DOM loaded');
              setIsVideoReady(true);
              // PostMessage API şimdi video durumunu kontrol ediyor
            }}
            onError={(e) => {
              console.error('Video loading error:', e);
            }}
          />
        </div>
      )}

      {/* Layer 2: Removed poster image, now we start with black overlay */}

      {/* Layer 3: Dark Overlay (Always Present) */}
      <div className="absolute inset-0 z-[-1] bg-black/30" />

      {/* Layer 4: Black Overlay with Opacity Fade Animation */}
      <motion.div
        className="absolute inset-0 bg-black z-[5] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: showBlackOverlay ? 1 : 0 }}
        transition={{ 
          duration: 3,
          ease: "easeInOut"
        }}
        onAnimationComplete={() => {
          console.log('Opacity animation completed, final opacity:', showBlackOverlay ? 1 : 0);
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content Container */}
      <div className="absolute z-20 inset-0 flex items-end justify-center md:justify-start px-4 md:px-8 md:items-end md:bottom-16 md:left-16 pb-8 md:pb-0">
        <motion.div
          className="max-w-4xl w-full ml-4 md:ml-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Part 1: Solid Text */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight font-bebas-neue mb-2 tracking-wider"
          >
            <span className="text-white">HİKAYENİ</span>
          </motion.h1>

          {/* Part 2: Solid Text */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight font-bebas-neue mb-2 tracking-wider"
          >
            <span className="text-white">GÖRSELLEŞTİR</span>
          </motion.h1>

          {/* Part 3: Outline Text */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight font-bebas-neue tracking-wider"
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
      {isMounted && !videoActuallyLoaded && (
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
