"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from './SettenKareler.module.css';

interface SettenKarelerSectionProps {
  duration?: number;
  className?: string;
  noBg?: boolean;
}

const SettenKarelerSection: React.FC<SettenKarelerSectionProps> = ({ 
  duration = 60,
  className = "",
  noBg = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Sample set images - replace with actual project images
  const setImages = [
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1486693326701-1ea88b73c8f7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1486693326701-1ea88b73c8f7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1486693326701-1ea88b73c8f7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1486693326701-1ea88b73c8f7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop"
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
    <section className={`relative py-16 lg:py-24 overflow-hidden ${className}`}>
      {/* Background - only if noBg is false */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />
        </>
      )}
      
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Setten Kareler
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Projelerimizden unutulmaz anlar ve yaratıcı sürecin arka planından kareler
          </p>
        </div>

        {/* Modern Flow Container */}
        <div ref={containerRef} className="w-full overflow-hidden">
          <div 
            className={`${styles.modernFlow} ${isVisible ? styles.flowActive : ''}`}
            style={{ animationDuration: `${duration}s` }}
          >
            {/* First Flow Set */}
            <div className={styles.flowSet}>
              {/* Top Row - Large Images */}
              <div className={styles.flowRow}>
                {setImages.slice(0, 4).map((image, index) => (
                  <div key={`top-${index}`} className={`${styles.imageWrapper} ${styles.largeImage}`}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={image} 
                        alt={`Set karesi ${index + 1}`}
                        className={styles.image}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.backgroundColor = '#4c1d95';
                          target.style.display = 'flex';
                          target.style.alignItems = 'center';
                          target.style.justifyContent = 'center';
                          target.style.color = 'white';
                          target.style.fontSize = '16px';
                          target.alt = `Set karesi ${index + 1}`;
                        }}
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.overlayContent}>
                          <span className={styles.imageNumber}>#{index + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle Row - Medium Images */}
              <div className={styles.flowRow}>
                {setImages.slice(4, 8).map((image, index) => (
                  <div key={`middle-${index}`} className={`${styles.imageWrapper} ${styles.mediumImage}`}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={image} 
                        alt={`Set karesi ${index + 5}`}
                        className={styles.image}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.backgroundColor = '#4c1d95';
                          target.style.display = 'flex';
                          target.style.alignItems = 'center';
                          target.style.justifyContent = 'center';
                          target.style.color = 'white';
                          target.style.fontSize = '14px';
                          target.alt = `Set karesi ${index + 5}`;
                        }}
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.overlayContent}>
                          <span className={styles.imageNumber}>#{index + 5}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Row - Small Images */}
              <div className={styles.flowRow}>
                {setImages.slice(8, 12).map((image, index) => (
                  <div key={`bottom-${index}`} className={`${styles.imageWrapper} ${styles.smallImage}`}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={image} 
                        alt={`Set karesi ${index + 9}`}
                        className={styles.image}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.backgroundColor = '#4c1d95';
                          target.style.display = 'flex';
                          target.style.alignItems = 'center';
                          target.style.justifyContent = 'center';
                          target.style.color = 'white';
                          target.style.fontSize = '12px';
                          target.alt = `Set karesi ${index + 9}`;
                        }}
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.overlayContent}>
                          <span className={styles.imageNumber}>#{index + 9}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Flow Set (Duplicate for seamless loop) */}
            <div className={styles.flowSet}>
              {/* Top Row - Large Images */}
              <div className={styles.flowRow}>
                {setImages.slice(0, 4).map((image, index) => (
                  <div key={`top-clone-${index}`} className={`${styles.imageWrapper} ${styles.largeImage}`}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={image} 
                        alt={`Set karesi ${index + 1}`}
                        className={styles.image}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.backgroundColor = '#4c1d95';
                          target.style.display = 'flex';
                          target.style.alignItems = 'center';
                          target.style.justifyContent = 'center';
                          target.style.color = 'white';
                          target.style.fontSize = '16px';
                          target.alt = `Set karesi ${index + 1}`;
                        }}
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.overlayContent}>
                          <span className={styles.imageNumber}>#{index + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle Row - Medium Images */}
              <div className={styles.flowRow}>
                {setImages.slice(4, 8).map((image, index) => (
                  <div key={`middle-clone-${index}`} className={`${styles.imageWrapper} ${styles.mediumImage}`}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={image} 
                        alt={`Set karesi ${index + 5}`}
                        className={styles.image}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.backgroundColor = '#4c1d95';
                          target.style.display = 'flex';
                          target.style.alignItems = 'center';
                          target.style.justifyContent = 'center';
                          target.style.color = 'white';
                          target.style.fontSize = '14px';
                          target.alt = `Set karesi ${index + 5}`;
                        }}
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.overlayContent}>
                          <span className={styles.imageNumber}>#{index + 5}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Row - Small Images */}
              <div className={styles.flowRow}>
                {setImages.slice(8, 12).map((image, index) => (
                  <div key={`bottom-clone-${index}`} className={`${styles.imageWrapper} ${styles.smallImage}`}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={image} 
                        alt={`Set karesi ${index + 9}`}
                        className={styles.image}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.backgroundColor = '#4c1d95';
                          target.style.display = 'flex';
                          target.style.alignItems = 'center';
                          target.style.justifyContent = 'center';
                          target.style.color = 'white';
                          target.style.fontSize = '12px';
                          target.alt = `Set karesi ${index + 9}`;
                        }}
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.overlayContent}>
                          <span className={styles.imageNumber}>#{index + 9}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`${styles.floatingElement} ${styles.float1}`}></div>
          <div className={`${styles.floatingElement} ${styles.float2}`}></div>
          <div className={`${styles.floatingElement} ${styles.float3}`}></div>
        </div>
      </div>
    </section>
  );
};

export default SettenKarelerSection; 