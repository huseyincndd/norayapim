"use client";

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import CreativeFlowSection from '../components/CreativeFlowSection';
import Footer from '../components/Footer';
import styles from '../components/SettenKareler2.module.css';

const SettenKarelerPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Çok daha fazla resim - 60+ resim
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
    "https://www.studiomgx.com/assets/upload/proje/171232446066.png",
    // Ek resimler - toplam 60+ resim
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=800&fit=crop&q=80"
  ];

  // Intersection Observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const handleImageClick = (index: number) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black/90 to-black" />
        {/* Animated Background Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
        {/* White Blur Effects */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <Header />
      
      <div className="relative z-10">
        {/* Hero Section with Background */}
        <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://demo.awaikenthemes.com/artistics/creative-portfolio/wp-content/uploads/2025/02/page-header-bg.jpg"
              alt="Setten Kareler Page Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto pt-8 lg:pt-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12 lg:mb-16"
              >
                <h1 className="text-4xl lg:text-7xl font-bold text-white tracking-wider mb-4">
                  <span className="text-white">Setten Kareler</span>
                </h1>
                
                {/* Breadcrumb Navigation */}
                <div className="text-sm lg:text-lg text-white/80">
                  <span className="text-white">Ana Sayfa</span>
                  <span className="text-white mx-2">*</span>
                  <span className="text-white">Setten Kareler</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Slogan Slider - Using CreativeFlowSection */}
        <div className="pb-2 lg:pb-3">
          <CreativeFlowSection 
            duration={40} 
            className="py-0" 
            noBg={true}
          />
        </div>

        {/* Setten Kareler Gallery Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="relative z-10">
            {/* Section Title */}
            <div className="text-left lg:text-center mb-16 lg:mb-20 px-4 lg:px-0">
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Setten Kareler Galerisi
              </h2>
              <p className="text-2xl lg:text-2xl text-gray-300 max-w-3xl lg:mx-auto leading-relaxed">
                Projelerimizden unutulmaz anlar ve yaratıcı sürecin arka planından kareler - Tüm koleksiyon
              </p>
            </div>

            {/* Gallery Grid Container */}
            <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4">
              <div className={`${styles.galleryGrid} ${isVisible ? styles.gridVisible : ''}`}>
                {setImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`${styles.galleryItem} ${styles[`item${(index % 21) + 1}`]}`}
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
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default SettenKarelerPage;
