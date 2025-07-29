"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from './ImageSlider.module.css';

interface ImageSliderSectionProps {
  duration?: number;
  className?: string;
  noBg?: boolean;
}

const ImageSliderSection: React.FC<ImageSliderSectionProps> = ({ 
  duration = 40,
  className = "",
  noBg = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Studio MGX project images
  const topImages = [
    "https://www.studiomgx.com/assets/upload/proje/171241825521.png",
    "https://www.studiomgx.com/assets/upload/proje/169631928389.jpg",
    "https://www.studiomgx.com/assets/upload/proje/169097879478.jpg",
    "https://www.studiomgx.com/assets/upload/proje/169097876792.jpg",
    "https://www.studiomgx.com/assets/upload/proje/173581081641.png",
    "https://www.studiomgx.com/assets/upload/proje/169097969041.jpg"
  ];

  const bottomImages = [
    "https://www.studiomgx.com/assets/upload/proje/171232458761.png",
    "https://www.studiomgx.com/assets/upload/proje/17123245191.png",
    "https://www.studiomgx.com/assets/upload/proje/171232446066.png",
    "https://www.studiomgx.com/assets/upload/proje/169631884266.jpg",
    "https://www.studiomgx.com/assets/upload/proje/173581081641.png",
    "https://www.studiomgx.com/assets/upload/proje/169097969041.jpg"
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
    <section className={`relative py-8 lg:py-16 overflow-hidden ${className}`}>
      {/* Background - only if noBg is false */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
          <div className="absolute inset-0 bg-noise opacity-30" />
        </>
      )}
      
      <div className="relative z-10">
        {/* Image Slider Container */}
        <div ref={containerRef} className="w-full">
          {/* Top Row - Slides Left */}
          <div className="mb-4 lg:mb-8">
            <div 
              className={`flex ${styles.imageRow} ${isVisible ? styles.slideLeft : ''}`}
              style={{ animationDuration: `${duration}s` }}
            >
              {/* Original Images */}
              {topImages.map((image, index) => (
                <div 
                  key={`top-original-${index}`}
                  className="flex-shrink-0 mx-2 lg:mx-4"
                >
                  <div className="relative w-80 h-48 lg:w-96 lg:h-56 overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`Video Production ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback for missing images
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Video Production ${index + 1}`;
                      }}
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate Images for Seamless Loop */}
              {topImages.map((image, index) => (
                <div 
                  key={`top-clone-${index}`}
                  className="flex-shrink-0 mx-2 lg:mx-4"
                >
                  <div className="relative w-80 h-48 lg:w-96 lg:h-56 overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`Video Production ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Video Production ${index + 1}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Slides Right */}
          <div>
            <div 
              className={`flex ${styles.imageRow} ${isVisible ? styles.slideRight : ''}`}
              style={{ animationDuration: `${duration}s` }}
            >
              {/* Original Images */}
              {bottomImages.map((image, index) => (
                <div 
                  key={`bottom-original-${index}`}
                  className="flex-shrink-0 mx-2 lg:mx-4"
                >
                  <div className="relative w-80 h-48 lg:w-96 lg:h-56 overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`Video Production ${index + 7}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Video Production ${index + 7}`;
                      }}
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate Images for Seamless Loop */}
              {bottomImages.map((image, index) => (
                <div 
                  key={`bottom-clone-${index}`}
                  className="flex-shrink-0 mx-2 lg:mx-4"
                >
                  <div className="relative w-80 h-48 lg:w-96 lg:h-56 overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`Video Production ${index + 7}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Video Production ${index + 7}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSliderSection; 