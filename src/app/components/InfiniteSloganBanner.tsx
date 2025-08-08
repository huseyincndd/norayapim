"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from './CreativeFlow.module.css';

interface InfiniteSloganBannerProps {
  duration?: number;
  className?: string;
}

const InfiniteSloganBanner: React.FC<InfiniteSloganBannerProps> = ({ 
  duration = 60,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const slogans = [
    "Strateji & İçgörü",
    "Yaratıcı Yönetim", 
    "Marka Kimliği",
    "UI/UX Tasarım",
    "Hareketli Grafik",
    "İnteraktif Prototipler",
    "Geliştirme & Mühendislik",
    "Lansman & Optimizasyon"
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

  return (
    <div className={`relative w-full ${className}`}>
      {/* Banner Container - Smaller size */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden py-1 lg:py-2 w-full"
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
                <span className={`text-xl sm:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-white px-4 sm:px-6 lg:px-8 font-sans ${styles.sloganText}`}>
                  {slogan}
                </span>
                {/* Red recording indicator - ANIMATED */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-premium-red rounded-full mx-2 sm:mx-3 animate-pulse" />
              </React.Fragment>
            ))}
          </div>

          {/* Single Clone for Loop */}
          <div className="flex items-center whitespace-nowrap">
            {slogans.map((slogan, index) => (
              <React.Fragment key={`clone-${index}`}>
                <span className={`text-xl sm:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-white px-4 sm:px-6 lg:px-8 font-sans ${styles.sloganText}`}>
                  {slogan}
                </span>
                {/* Red recording indicator - ANIMATED */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-premium-red rounded-full mx-2 sm:mx-3 animate-pulse" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSloganBanner; 