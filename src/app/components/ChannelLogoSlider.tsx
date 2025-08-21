"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from './ChannelLogoSlider.module.css';

interface ChannelLogoSliderProps {
  duration?: number;
  className?: string;
  noBg?: boolean;
}

const ChannelLogoSlider: React.FC<ChannelLogoSliderProps> = ({ 
  duration = 30,
  className = "",
  noBg = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Channel logo images from villaqrmenu.b-cdn.net
  const channelLogos = [
    "https://www.edigitalagency.com.au/wp-content/uploads/new-Disney-logo-white-png-large-size.png",
    "https://villaqrmenu.b-cdn.net/nora/norakanallarlogo/nora%20yap%C4%B1m%20kanallar%20(1).png",
    "https://villaqrmenu.b-cdn.net/nora/norakanallarlogo/nora%20yap%C4%B1m%20kanallar%20(1).webp",
    "https://villaqrmenu.b-cdn.net/nora/norakanallarlogo/nora%20yap%C4%B1m%20kanallar%20(2).png",
    "https://villaqrmenu.b-cdn.net/nora/norakanallarlogo/nora%20yap%C4%B1m%20kanallar%20(2).webp",
    "https://villaqrmenu.b-cdn.net/nora/norakanallarlogo/nora%20yap%C4%B1m%20kanallar%20(3).png",
    "https://villaqrmenu.b-cdn.net/nora/norakanallarlogo/nora%20yap%C4%B1m%20kanallar%20(3).webp",
    "https://www.edigitalagency.com.au/wp-content/uploads/Apple-TV-logo-white-PNG-large-size.png",
    "https://villaqrmenu.b-cdn.net/nora/norakanallarlogo/nora%20yap%C4%B1m%20kanallar%20(4).webp",
    "https://www.aysarosgb.com/wp-content/uploads/2025/05/gain-1648729106.webp",
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Logo_of_Show_TV.png",
    "https://villaqrmenu.b-cdn.net/nora/norakanallarlogo/nora%20yap%C4%B1m%20kanallar%20(7).png",
    "https://villaqrmenu.b-cdn.net/nora/norakanallarlogo/nora%20yap%C4%B1m%20kanallar%20(8).png"
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
        {/* Channel Logo Slider Container */}
        <div ref={containerRef} className="w-full">
          {/* Single Row - Slides Left */}
          <div>
            <div 
              className={`flex ${styles.logoRow} ${isVisible ? styles.slideLeft : ''}`}
              style={{ animationDuration: `${duration}s` }}
            >
              {/* Original Logos */}
              {channelLogos.map((logo, index) => (
                <div 
                  key={`logo-original-${index}`}
                  className="flex-shrink-0 mx-4 lg:mx-8"
                >
                  <div className="relative w-32 h-16 lg:w-40 lg:h-20 overflow-hidden">
                    <img 
                      src={logo} 
                      alt={`Channel Logo ${index + 1}`}
                      className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback for missing images
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '12px';
                        target.alt = `Channel Logo ${index + 1}`;
                      }}
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate Logos for Seamless Loop */}
              {channelLogos.map((logo, index) => (
                <div 
                  key={`logo-clone-${index}`}
                  className="flex-shrink-0 mx-4 lg:mx-8"
                >
                  <div className="relative w-32 h-16 lg:w-40 lg:h-20 overflow-hidden">
                    <img 
                      src={logo} 
                      alt={`Channel Logo ${index + 1}`}
                      className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '12px';
                        target.alt = `Channel Logo ${index + 1}`;
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

export default ChannelLogoSlider;
