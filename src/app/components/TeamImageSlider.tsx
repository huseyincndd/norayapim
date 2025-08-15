"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TeamImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Voya Digital ekip fotoğrafları - 10 farklı URL
  const teamImages = [
    'https://voya.digital/img/voya-team-1.png',
    'https://voya.digital/img/voya-team-2.png',
    'https://voya.digital/img/voya-team-3.png',
    'https://voya.digital/img/voya-team-4.png',
    'https://voya.digital/img/voya-team-5.png',
    'https://voya.digital/img/voya-team-6.png',
    'https://voya.digital/img/voya-team-7.png',
    'https://voya.digital/img/voya-team-8.png',
    'https://voya.digital/img/voya-team-9.png',
    'https://voya.digital/img/voya-team-10.png',
  ];

  // Her resmin pozisyonunu hesapla ve otomatik hizala
  const scrollToImage = (index: number) => {
    if (sliderRef.current && imageRefs.current[index]) {
      const imageElement = imageRefs.current[index];
      if (imageElement) {
        const offsetLeft = imageElement.offsetLeft;
        sliderRef.current.scrollTo({
          left: offsetLeft,
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    }
  };

  const nextSlide = () => {
    const newIndex = currentIndex === teamImages.length - 1 ? 0 : currentIndex + 1;
    scrollToImage(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? teamImages.length - 1 : currentIndex - 1;
    scrollToImage(newIndex);
  };

  // Touch events for better mobile control
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    const handleTouchStart = (e: TouchEvent) => {
      isDown = true;
      setIsDragging(true);
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.style.scrollBehavior = 'auto';
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 0.8; // Sürükleme hassasiyetini azalt
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDown = false;
      setIsDragging(false);
      slider.style.scrollBehavior = 'smooth';
      
      // Snap to nearest image
      const imageWidth = slider.scrollWidth / teamImages.length;
      const currentScroll = slider.scrollLeft;
      const nearestIndex = Math.round(currentScroll / imageWidth);
      scrollToImage(Math.max(0, Math.min(nearestIndex, teamImages.length - 1)));
    };

    // Mouse events for desktop
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      setIsDragging(true);
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.style.scrollBehavior = 'auto';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 0.8;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      setIsDragging(false);
      slider.style.scrollBehavior = 'smooth';
      
      const imageWidth = slider.scrollWidth / teamImages.length;
      const currentScroll = slider.scrollLeft;
      const nearestIndex = Math.round(currentScroll / imageWidth);
      scrollToImage(Math.max(0, Math.min(nearestIndex, teamImages.length - 1)));
    };

    // Add event listeners
    slider.addEventListener('touchstart', handleTouchStart, { passive: false });
    slider.addEventListener('touchmove', handleTouchMove, { passive: false });
    slider.addEventListener('touchend', handleTouchEnd);
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseUp);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [teamImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section className="relative py-12 lg:py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Ekibimizden <span className="text-white">Kareler</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
            Yaratıcı süreçlerimizin arkasındaki tutkulu ekibimizi tanıyın
          </p>
        </motion.div>

        {/* Image Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group"
            aria-label="Önceki resim"
          >
            <svg className="w-6 h-6 text-white group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group"
            aria-label="Sonraki resim"
          >
            <svg className="w-6 h-6 text-white group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div
              ref={sliderRef}
              className={`flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory select-none ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                touchAction: 'pan-x',
                scrollBehavior: 'smooth'
              }}
            >
              {teamImages.map((image, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  className="flex-shrink-0 relative group snap-start"
                >
                  <img
                    src={image}
                    alt={`Ekip üyesi ${index + 1}`}
                    className="h-[200px] md:h-[280px] lg:h-[371px] w-auto object-cover transition-all duration-500 group-hover:brightness-110"
                                         onError={(e) => {
                       // Fallback image if URL doesn't exist
                       e.currentTarget.src = 'https://via.placeholder.com/400x371/1a1a1a/ffffff?text=Ekip+Üyesi+' + (index + 1);
                     }}
                  />
                  
                                     {/* Hover Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>


        </motion.div>

        {/* Team Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 lg:mt-12"
        >
          <p className="text-base lg:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Her projede tutkumuzla çalışan, yaratıcılığımızla sınırları zorlayan ve
            müşterilerimizin vizyonlarını gerçeğe dönüştüren dinamik ekibimiz.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Mobile scroll optimizations */
        @media (max-width: 768px) {
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-x: contain;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamImageSlider;
