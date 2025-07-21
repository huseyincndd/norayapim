"use client";

// app/components/HeroSection.tsx

import Header from './Header'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Hikayenizi Anlatın",
    "Markanızı Büyütün", 
    "Hayalinizi Gerçekleştirin"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentTextIndex, texts]);

  return (
    <section className="relative h-[60vh] md:h-screen w-full overflow-hidden bg-noise">
      {/* Vimeo Arkaplan - Ultra Aggressive Cropping Method */}
      <div className="absolute inset-0 z-[-2]">
        <iframe 
          src="https://player.vimeo.com/video/1089941484?muted=1&autoplay=1&loop=1&background=1&app_id=122963" 
          allow="autoplay; fullscreen; picture-in-picture" 
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-[230%] md:min-w-[120%] min-h-[115%] -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ 
            border: 'none', 
            pointerEvents: 'none'
          }}
        ></iframe>
      </div>

      {/* Video Overlay */}
      <div className="absolute inset-0 z-[-1] bg-black/60"></div>

      {/* Header */}
      <Header />

      {/* Hero İçeriği - Mobile: Centered, Desktop: Bottom-left positioned */}
      <div className="absolute z-10 inset-0 flex items-center justify-start px-4 md:px-8 md:items-end md:justify-start md:bottom-16 md:left-16">
        <div className="max-w-4xl w-full">
          {/* Ana Başlık - Responsive font sizes */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight text-white font-sans"
          >
            Doğru
            <br />
            Video Hikayesi
          </motion.h1>
          
          {/* Daktilo Animasyonlu Alt Başlık - Responsive sizing */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-4 md:mb-6"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white/90 font-sans">
              {texts[currentTextIndex].substring(0, currentCharIndex)}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Divider - Responsive width */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-px bg-white mb-4 md:mb-6 max-w-xs md:max-w-none"
          ></motion.div>

          {/* Açıklama - Responsive text and positioning */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl text-white/90 font-sans leading-relaxed"
          >
            Dijital markaların dönüşümlerini artırmak için video prodüksiyon şirketi olarak 
            hizmet veriyoruz. Her projede mükemmelliği hedefliyoruz.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection