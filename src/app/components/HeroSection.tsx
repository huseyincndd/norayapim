"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const HeroSection = () => {
  // Simplified and safer state management
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showBlackOverlay, setShowBlackOverlay] = useState(true);
  const [videoActuallyLoaded, setVideoActuallyLoaded] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>('desktop');
  const [bufferProgress, setBufferProgress] = useState(0);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadStartTime = useRef<number>(0);
  const hasTriggeredHide = useRef<boolean>(false);

  // Animation variants for the text
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

  // Detect device type for optimized video quality
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setDeviceType(isMobile ? 'mobile' : 'desktop');
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Get optimized video URL - simplified parameters
  const getOptimizedVideoUrl = () => {
    const baseUrl = "https://player.vimeo.com/video/1089941484";
    const quality = deviceType === 'mobile' ? '360p' : '480p';
    
    return `${baseUrl}?muted=1&autoplay=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0&playsinline=1&quality=${quality}&api=1&dnt=1`;
  };

  // Safe function for hiding overlay
  const hideOverlayWithDelay = (delay: number = 1000) => {
    if (hasTriggeredHide.current) return;
    
    setTimeout(() => {
      if (!hasTriggeredHide.current) {
        hasTriggeredHide.current = true;
        setShowBlackOverlay(false);
      }
    }, delay);
  };

  // Mount effect with simpler logic
  useEffect(() => {
    setIsMounted(true);
    loadStartTime.current = Date.now();
    
    // Simple Vimeo event listener
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://player.vimeo.com') return;
      
      try {
        const data = JSON.parse(event.data);
        
        // Handle different video events
        if (data.event === 'loaded') {
          setIsVideoReady(true);
        }
        
        if (data.event === 'play' || data.event === 'playing') {
          setIsVideoPlaying(true);
          setVideoActuallyLoaded(true);
          hideOverlayWithDelay(1500); // 1.5 second delay for smooth transition
        }
        
        if (data.event === 'timeupdate' && data.seconds && data.seconds > 0.5) {
          setIsVideoPlaying(true);
          setVideoActuallyLoaded(true);
          hideOverlayWithDelay(1000);
        }
        
        if (data.event === 'progress' && data.percent) {
          const percent = Math.round(data.percent * 100);
          setBufferProgress(percent);
        }
        
      } catch (e) {
        // Silent error handling
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Conservative fallback timers
    const earlyFallback = setTimeout(() => {
      if (!videoActuallyLoaded && !hasTriggeredHide.current) {
        setIsVideoPlaying(true);
        setVideoActuallyLoaded(true);
        hideOverlayWithDelay(500);
      }
    }, 3000);
    
    const safeFallback = setTimeout(() => {
      if (!hasTriggeredHide.current) {
        setIsVideoPlaying(true);
        setVideoActuallyLoaded(true);
        hasTriggeredHide.current = true;
        setShowBlackOverlay(false);
      }
    }, 6000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(earlyFallback);
      clearTimeout(safeFallback);
    };
  }, [videoActuallyLoaded]);

  // Iframe load monitoring
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    const handleIframeLoad = () => {
      setIsVideoReady(true);
      
      // Give iframe 2 seconds to start playing, then fallback
      setTimeout(() => {
        if (!videoActuallyLoaded) {
          setIsVideoPlaying(true);
          setVideoActuallyLoaded(true);
          hideOverlayWithDelay(1000);
        }
      }, 2000);
    };
    
    iframe.addEventListener('load', handleIframeLoad);
    return () => iframe.removeEventListener('load', handleIframeLoad);
  }, [videoActuallyLoaded]);



  return (
    <section className="relative h-[60vh] md:h-screen w-full overflow-hidden">
      {/* Video Background */}
      {isMounted && (
        <div className="absolute inset-0 z-[-3]">
          <iframe 
            ref={iframeRef}
            src={getOptimizedVideoUrl()}
            allow="autoplay; fullscreen; picture-in-picture" 
            className={`absolute top-1/2 left-1/2 w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover
              ${deviceType === 'mobile' 
                ? 'min-w-[120%] min-h-[120%]' 
                : 'min-w-[120%] min-h-[115%]'
              }`}
            style={{ 
              border: 'none', 
              pointerEvents: 'none',
              width: '100%',
              height: '100%',
              opacity: 1, // Always visible now - we control visibility with overlay
              transition: 'opacity 0.3s ease-out'
            }}
            onLoad={() => {
              setIsVideoReady(true);
            }}
            onError={() => {
              // Force show video on error
              setIsVideoPlaying(true);
              setVideoActuallyLoaded(true);
              hasTriggeredHide.current = true;
              setShowBlackOverlay(false);
            }}
            loading="eager"
            title="Hero Video Background"
          />
        </div>
      )}

      {/* Dark Overlay (Always Present) */}
      <div className="absolute inset-0 z-[-1] bg-black/30" />

      {/* Black Loading Overlay */}
      <motion.div
        className="absolute inset-0 bg-black z-[5] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: showBlackOverlay ? 1 : 0 }}
        transition={{ 
          duration: 1.5,
          ease: "easeInOut"
        }}
        onAnimationComplete={() => {
          // Animation completed
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
          <div className="text">
            <motion.div 
              variants={itemVariants}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[8rem] xl:text-[10rem] font-black leading-none font-poppins mb-1 tracking-wider text-white"
            >
              DİZİ
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[8rem] xl:text-[10rem] font-black leading-none font-poppins mb-1 tracking-wider text-white"
            >
              FİLM
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[8rem] xl:text-[10rem] font-black leading-none font-poppins tracking-wider"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-[1em] overflow-visible align-[0.08em]"
                aria-label="REKLAM"
                textRendering="geometricPrecision"
                shapeRendering="geometricPrecision"
              >
                <text
                  x="0"
                  y="0"
                  dominantBaseline="hanging"
                  fontFamily="var(--font-poppins), Poppins, sans-serif"
                  fontWeight="900"
                  fontSize="1em"
                  letterSpacing="0.02em"
                  fill="transparent"
                  stroke="#ffffff"
                  strokeWidth="0.02em"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                >
                  REKLAM
                </text>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Simple Loading Indicator */}
      {isMounted && !videoActuallyLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 right-8 z-20"
        >
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" />
            <span>Video yükleniyor... {bufferProgress > 0 ? `${bufferProgress}%` : ''}</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
