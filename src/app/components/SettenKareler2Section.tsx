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

  // Setten Kareler images - 24 images from 202 to 226 (excluding 215)
  const setImages = [
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-202.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-203.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-204.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-205.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-206.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-207.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-208.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-209.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-210.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-211.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-212.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-213.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-214.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-216.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-217.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-218.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-219.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-220.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-221.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-222.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-223.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-224.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-225.webp",
    "https://villaqrmenu.b-cdn.net/nora/noraanasayfasettenkareler/nora-setten-kareler-226.webp"
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
            Kamera Arkası
          </h2>
          <p className="text-2xl lg:text-2xl text-gray-300 max-w-3xl lg:mx-auto leading-relaxed">
            Projelerimizden seçilmiş unutulmaz anlar ve yaratıcı sürecin perde arkası görüntüleri
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