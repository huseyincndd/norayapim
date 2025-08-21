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

  // Setten Kareler images - 24 images mixed from old and new sources
  const setImages = [
    // First 12 from new villaqrmenu CDN links
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-1.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-2.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-3.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-4.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-5.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-6.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-7.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-8.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-9.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-10.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-11.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-12.webp",
    // 12 selected from old norayapim.xyz links
    "https://norayapim.xyz/_assets/media/a7947a71e33cd2f673459c47d35094f8.jpg",
    "https://norayapim.xyz/_assets/media/3c199d4af4b02a77c1efa7c415787df2.jpg",
    "https://norayapim.xyz/_assets/media/b57a77ceff8176b5e3018b505cf7376d.jpg",
    "https://norayapim.xyz/_assets/media/292bacc2f4d4415a7b0d9d5e747bf6e5.jpg",
    "https://norayapim.xyz/_assets/media/31b94a0f4c44ac5aa9b88f0134f0b74d.jpg",
    "https://norayapim.xyz/_assets/media/5428660a970db918e9051ae4646b2427.jpg",
    "https://norayapim.xyz/_assets/media/bfda080f68faf6c2f9d4ab0945e31543.jpg",
    "https://norayapim.xyz/_assets/media/7170bae3f4cf04938935cfa053a3bc04.jpg",
    "https://norayapim.xyz/_assets/media/9188603306a533bfe07d9c5cd8f1b432.jpg",
    "https://norayapim.xyz/_assets/media/2f70b78136628d390ffcefdbfccf52af.jpg",
    "https://norayapim.xyz/_assets/media/f622a9294b97b25d6ba23cfbb2e48c04.jpg",
    "https://norayapim.xyz/_assets/media/b2097b5633356d2ce1397c8342ffcfd1.jpg",
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