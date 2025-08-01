"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from './HighlightsFromSet.module.css';

interface HighlightsFromSetSectionProps {
  duration?: number;
  className?: string;
  noBg?: boolean;
}

const HighlightsFromSetSection: React.FC<HighlightsFromSetSectionProps> = ({ 
  duration = 45,
  className = "",
  noBg = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Sample behind-the-scenes images - replace with actual project images
  const highlightImages = [
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486693326701-1ea88b73c8f7?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486693326701-1ea88b73c8f7?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486693326701-1ea88b73c8f7?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486693326701-1ea88b73c8f7?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
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

  // Create diamond pattern rows
  const createDiamondRow = (imageCount: number, startIndex: number) => {
    const images = [];
    for (let i = 0; i < imageCount; i++) {
      const imageIndex = (startIndex + i) % highlightImages.length;
      images.push(highlightImages[imageIndex]);
    }
    return images;
  };

  return (
    <section className={`relative py-12 lg:py-16 overflow-hidden ${className}`}>
      {/* Background - only if noBg is false */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div className="absolute inset-0 bg-noise opacity-30" />
        </>
      )}
      
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Highlights from the Set
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Behind-the-scenes moments that capture the magic of our creative process
          </p>
        </div>

        {/* Diamond Carousel Container */}
        <div ref={containerRef} className="w-full overflow-hidden">
          <div 
            className={`${styles.diamondCarousel} ${isVisible ? styles.scrollLeft : ''}`}
            style={{ animationDuration: `${duration}s` }}
          >
            {/* First Set */}
            <div className={styles.diamondSet}>
              {/* Row 1: 1 image */}
              <div className={styles.diamondRow}>
                {createDiamondRow(1, 0).map((image, index) => (
                  <div key={`row1-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 1}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 1}`;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 2: 3 images */}
              <div className={styles.diamondRow}>
                {createDiamondRow(3, 1).map((image, index) => (
                  <div key={`row2-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 2}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 2}`;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 3: 5 images (middle) */}
              <div className={styles.diamondRow}>
                {createDiamondRow(5, 4).map((image, index) => (
                  <div key={`row3-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 5}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 5}`;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 4: 3 images */}
              <div className={styles.diamondRow}>
                {createDiamondRow(3, 9).map((image, index) => (
                  <div key={`row4-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 10}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 10}`;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 5: 1 image */}
              <div className={styles.diamondRow}>
                {createDiamondRow(1, 12).map((image, index) => (
                  <div key={`row5-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 13}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 13}`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second Set (Duplicate for seamless loop) */}
            <div className={styles.diamondSet}>
              {/* Row 1: 1 image */}
              <div className={styles.diamondRow}>
                {createDiamondRow(1, 0).map((image, index) => (
                  <div key={`row1-clone-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 1}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 1}`;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 2: 3 images */}
              <div className={styles.diamondRow}>
                {createDiamondRow(3, 1).map((image, index) => (
                  <div key={`row2-clone-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 2}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 2}`;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 3: 5 images (middle) */}
              <div className={styles.diamondRow}>
                {createDiamondRow(5, 4).map((image, index) => (
                  <div key={`row3-clone-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 5}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 5}`;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 4: 3 images */}
              <div className={styles.diamondRow}>
                {createDiamondRow(3, 9).map((image, index) => (
                  <div key={`row4-clone-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 10}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 10}`;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 5: 1 image */}
              <div className={styles.diamondRow}>
                {createDiamondRow(1, 12).map((image, index) => (
                  <div key={`row5-clone-${index}`} className={styles.imageContainer}>
                    <img 
                      src={image} 
                      alt={`Behind the scenes ${index + 13}`}
                      className={styles.image}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#374151';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.style.color = 'white';
                        target.style.fontSize = '14px';
                        target.alt = `Behind the scenes ${index + 13}`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsFromSetSection; 