"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './SettenKareler2.module.css';

interface SettenKareler2SectionProps {
  className?: string;
  noBg?: boolean;
  hideSeeMore?: boolean;
}

const SettenKareler2Section: React.FC<SettenKareler2SectionProps> = ({ 
  className = "",
  noBg = false,
  hideSeeMore = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Studio MGX project images from ImageSliderSection - 21 images
  const setImages = [
    "https://www.studiomgx.com/assets/upload/proje/171241825521.png",
    "https://www.studiomgx.com/assets/upload/proje/169631928389.jpg",
    "https://www.studiomgx.com/assets/upload/proje/169097879478.jpg",
    "https://www.studiomgx.com/assets/upload/proje/169097876792.jpg",
    "https://www.studiomgx.com/assets/upload/proje/173581081641.png",
    "https://www.studiomgx.com/assets/upload/proje/169097969041.jpg",
    "https://www.studiomgx.com/assets/upload/proje/171232458761.png",
    "https://www.studiomgx.com/assets/upload/proje/17123245191.png",
    "https://www.studiomgx.com/assets/upload/proje/171232446066.png",
    "https://www.studiomgx.com/assets/upload/proje/169631884266.jpg",
    "https://www.studiomgx.com/assets/upload/proje/173581081641.png",
    "https://www.studiomgx.com/assets/upload/proje/169097969041.jpg",
    "https://www.studiomgx.com/assets/upload/proje/171241825521.png",
    "https://www.studiomgx.com/assets/upload/proje/169631928389.jpg",
    "https://www.studiomgx.com/assets/upload/proje/169097879478.jpg",
    "https://www.studiomgx.com/assets/upload/proje/169097876792.jpg",
    "https://www.studiomgx.com/assets/upload/proje/173581081641.png",
    "https://www.studiomgx.com/assets/upload/proje/169097969041.jpg",
    "https://www.studiomgx.com/assets/upload/proje/171232458761.png",
    "https://www.studiomgx.com/assets/upload/proje/17123245191.png",
    "https://www.studiomgx.com/assets/upload/proje/171232446066.png"
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

  const handleImageClick = (index: number) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
        <div className="text-left lg:text-center mb-16 lg:mb-20 px-4 lg:px-0">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Setten Kareler
          </h2>
          <p className="text-2xl lg:text-2xl text-gray-300 max-w-3xl lg:mx-auto leading-relaxed">
            Projelerimizden unutulmaz anlar ve yaratıcı sürecin arka planından kareler
          </p>
        </div>

        {/* Gallery Grid Container */}
        <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4">
          <div className={`${styles.galleryGrid} ${isVisible ? styles.gridVisible : ''}`}>
            {setImages.map((image, index) => (
              <div 
                key={index} 
                className={`${styles.galleryItem} ${styles[`item${index + 1}`]}`}
                onClick={() => handleImageClick(index)}
              >
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
                      <div className={styles.overlayText}>
                        <h3 className={styles.imageTitle}>Set Karesi</h3>
                        <p className={styles.imageDescription}>Yaratıcı sürecin anları</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
              <img 
                src={setImages[selectedImage]} 
                alt={`Set karesi ${selectedImage + 1}`}
                className={styles.modalImage}
              />
              <div className={styles.modalInfo}>
                <h3 className={styles.modalTitle}>Set Karesi #{selectedImage + 1}</h3>
                <p className={styles.modalDescription}>
                  Projemizden unutulmaz bir an ve yaratıcı sürecin arka planından bir kare
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`${styles.floatingElement} ${styles.float1}`}></div>
          <div className={`${styles.floatingElement} ${styles.float2}`}></div>
          <div className={`${styles.floatingElement} ${styles.float3}`}></div>
        </div>
      </div>

      {/* See More Section */}
      {!hideSeeMore && (
        <div className="relative z-10 mt-8 lg:mt-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/settenkareler"
                className="inline-block text-gray-400 hover:text-white text-sm lg:text-base font-light tracking-wide transition-all duration-300 border-b border-transparent hover:border-gray-400 pb-1"
              >
                Daha Fazla Gör
              </Link>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SettenKareler2Section; 