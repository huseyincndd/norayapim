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
    "Strategy & Insight",
    "Creative Direction", 
    "Brand Identity",
    "UI/UX Design",
    "Motion Graphics",
    "Interactive Prototypes",
    "Development & Engineering",
    "Launch & Optimization"
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
      {/* Banner Container - Full Width */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden py-8 lg:py-12 w-full"
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
                <span className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-white px-8 sm:px-10 lg:px-12 font-sans ${styles.sloganText}`}>
                  {slogan}
                </span>
                {/* Red recording indicator - STATIC */}
                <div className="w-5 h-5 bg-premium-red rounded-full mx-4 sm:mx-6" />
              </React.Fragment>
            ))}
          </div>

          {/* Single Clone for Loop */}
          <div className="flex items-center whitespace-nowrap">
            {slogans.map((slogan, index) => (
              <React.Fragment key={`clone-${index}`}>
                <span className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-white px-8 sm:px-10 lg:px-12 font-sans ${styles.sloganText}`}>
                  {slogan}
                </span>
                {/* Red recording indicator - STATIC */}
                <div className="w-5 h-5 bg-premium-red rounded-full mx-4 sm:mx-6" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSloganBanner; 