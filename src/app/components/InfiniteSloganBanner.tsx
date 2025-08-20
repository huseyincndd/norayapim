"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from './CreativeFlow.module.css';

interface InfiniteSloganBannerProps {
  duration?: number;
  className?: string;
  textColor?: 'white' | 'black';
}

const InfiniteSloganBanner: React.FC<InfiniteSloganBannerProps> = ({ 
  duration = 60,
  className = "",
  textColor = 'white'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const slogans = [
    "VFX",
    "Reklam", 
    "Dizi",
    "Sinema",
    "Belgesel",
    "Post-Prodüksiyon",
    "Senaryo",
    "Dağıtım",
    "Prodüksiyon"
  ];

  // Intersection Observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const textColorClass = textColor === 'black' ? 'text-black' : 'text-white';

  return (
    <div className={`relative w-full ${className}`}>
             {/* Banner Container - Smaller size */}
       <div 
         ref={containerRef}
         className="relative overflow-hidden py-3 lg:py-4 w-full"
       >
        {/* Animated Content - CSS ONLY */}
        <div
          className={`flex items-center ${styles.bannerContent} ${isVisible ? styles.animate : ''}`}
          style={{ 
            width: 'fit-content',
            animationDuration: `${duration}s`
          }}
        >
          {/* Original Content */}
          <div className="flex items-center whitespace-nowrap">
            {slogans.map((slogan, index) => (
              <React.Fragment key={`original-${index}`}>
                <span className={`text-6xl sm:text-5xl lg:text-[80px] font-bold px-4 sm:px-6 lg:px-8 font-['syne',_sans-serif] tracking-[-0.08em] leading-[1em] ${styles.sloganText}`} style={{
                  backgroundImage: 'radial-gradient(37.2% 50% at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {slogan}
                </span>
                {/* Red recording indicator - ANIMATED */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-premium-red rounded-full mx-2 sm:mx-3" style={{
                  animation: 'pulseScale 2s ease-in-out infinite'
                }} />
              </React.Fragment>
            ))}
          </div>

          {/* Single Clone for Loop */}
          <div className="flex items-center whitespace-nowrap">
            {slogans.map((slogan, index) => (
              <React.Fragment key={`clone-${index}`}>
                <span className={`text-6xl sm:text-5xl lg:text-[80px] font-bold px-4 sm:px-6 lg:px-8 font-['syne',_sans-serif] tracking-[-0.08em] leading-[1em] ${styles.sloganText}`} style={{
                  backgroundImage: 'radial-gradient(37.2% 50% at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {slogan}
                </span>
                {/* Red recording indicator - ANIMATED */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-premium-red rounded-full mx-2 sm:mx-3" style={{
                  animation: 'pulseScale 2s ease-in-out infinite'
                }} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSloganBanner; 