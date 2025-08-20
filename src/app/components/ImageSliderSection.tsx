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

  // Brand images from marka_linkleri.txt
  const topImages = [
    "https://norayapim.xyz/_assets/media/006b77961ed27cd981a893e8893ad05d.png",
    "https://norayapim.xyz/_assets/media/01eb0cfa2c86eb03f299c11881f83556.png",
    "https://norayapim.xyz/_assets/media/0cfddea3396bee27c2b24f2c3782ae20.jpg",
    "https://norayapim.xyz/_assets/media/1895da1c3dce3d60968b69cf2e17115e.jpg",
    "https://norayapim.xyz/_assets/media/1f31a9f5f046f67d24b1fac25f727378.jpg",
    "https://norayapim.xyz/_assets/media/4d969f9dd54aece43a2bd27bff065bcc.png",
    "https://norayapim.xyz/_assets/media/6d8d1997e6a201760c82773cb8b5d480.jpg",
    "https://norayapim.xyz/_assets/media/73f5e79f63cf6e7acb6dcd34226b7f5a.jpg",
    "https://norayapim.xyz/_assets/media/77b76180102f2f036c9817cb22822e31.png",
    "https://norayapim.xyz/_assets/media/806be557458f2152863eee8f95010210.png",
    "https://norayapim.xyz/_assets/media/84a516c2c07ed0aa1c4404cd374a9da9.png",
    "https://norayapim.xyz/_assets/media/902981800a3d475aefef1247dfc8c528.jpg",
    "https://norayapim.xyz/_assets/media/9671304c91110994886639ff61eccae3.jpg",
    "https://norayapim.xyz/_assets/media/98f8e90ff9651182849cd4bae6a83eb7.jpg",
    "https://norayapim.xyz/_assets/media/9ad7842a41a57e1cba7e4ffbdd90fc60.png"
  ];

  const bottomImages = [
    "https://norayapim.xyz/_assets/media/9c4128d96406eb95b12e0b69351b8672.png",
    "https://norayapim.xyz/_assets/media/9e6ab51354b946e0a4ab21f63e1cd0cd.jpg",
    "https://norayapim.xyz/_assets/media/a1b6c9670d77dee08dd2724e4a9d9510.png",
    "https://norayapim.xyz/_assets/media/a9bbc130069da54023507a3d5180f3e8.png",
    "https://norayapim.xyz/_assets/media/ac2825cba943566075fa5d4446d15645.png",
    "https://norayapim.xyz/_assets/media/b451f8126b41ef6a28bfe896c9c95426.jpg",
    "https://norayapim.xyz/_assets/media/b5d11fc99cdcf3ef726bb387fc11d2d9.jpg",
    "https://norayapim.xyz/_assets/media/b7e1ef7fc6acc50739a46824143a0c08.jpg",
    "https://norayapim.xyz/_assets/media/d0b3b3e253c9358720eda5da2369489a.png",
    "https://norayapim.xyz/_assets/media/d74b7e205b43a47e793c194884bb6cf0.jpg",
    "https://norayapim.xyz/_assets/media/e7277bece92b5c072cb6a699d0881a47.jpg",
    "https://norayapim.xyz/_assets/media/e7dc05cc3c103494ffe0e7b416c3e9f2.png",
    "https://norayapim.xyz/_assets/media/ed0eb97b42a798066eee028cef06018e.jpg",
    "https://norayapim.xyz/_assets/media/fb87c06f8f80841a901dcf6f72994eb5.png"
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