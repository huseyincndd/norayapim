"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface FlowingImagesSectionProps {
  noBg?: boolean;
}

const FlowingImagesSection: React.FC<FlowingImagesSectionProps> = ({ noBg = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Sample images for the flowing effect
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
      title: "Video Production",
      alt: "Video Production"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=500&fit=crop",
      title: "Film Making",
      alt: "Film Making"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
      title: "Cinematography",
      alt: "Cinematography"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=500&fit=crop",
      title: "Post Production",
      alt: "Post Production"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
      title: "Editing",
      alt: "Editing"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
      title: "Sound Design",
      alt: "Sound Design"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=500&fit=crop",
      title: "Color Grading",
      alt: "Color Grading"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=500&fit=crop",
      title: "Visual Effects",
      alt: "Visual Effects"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
      title: "Motion Graphics",
      alt: "Motion Graphics"
    }
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
    <section className={`h-[70vh] ${noBg ? 'bg-transparent' : 'bg-black'} overflow-hidden relative`}>
      {/* Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-black" />
          
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

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
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
        </>
      )}

      <div className="relative z-20 h-full">
        {/* Flowing Images Container */}
        <div 
          ref={containerRef}
          className="relative h-full overflow-hidden"
        >
          {/* Multiple rows of flowing images */}
          <div className="absolute inset-0">
            {/* Row 1 - Top */}
            <motion.div
              className={`absolute top-8 left-0 flex gap-4 ${isVisible ? 'animate-flow-right' : ''}`}
              style={{ animationDuration: '20s' }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={`row1-${image.id}`}
                  className="flex-shrink-0"
                  initial={{ x: '100vw' }}
                  animate={isVisible ? { x: '-100vw' } : { x: '100vw' }}
                  transition={{
                    duration: 20,
                    delay: index * 0.5,
                    ease: 'linear',
                    repeat: Infinity
                  }}
                >
                  <div className="relative w-64 h-80 rounded-xl overflow-hidden bg-white shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Row 2 - Middle */}
            <motion.div
              className={`absolute top-1/2 left-0 flex gap-4 -translate-y-1/2 ${isVisible ? 'animate-flow-left' : ''}`}
              style={{ animationDuration: '25s' }}
            >
              {images.slice().reverse().map((image, index) => (
                <motion.div
                  key={`row2-${image.id}`}
                  className="flex-shrink-0"
                  initial={{ x: '-100vw' }}
                  animate={isVisible ? { x: '100vw' } : { x: '-100vw' }}
                  transition={{
                    duration: 25,
                    delay: index * 0.7,
                    ease: 'linear',
                    repeat: Infinity
                  }}
                >
                  <div className="relative w-56 h-72 rounded-xl overflow-hidden bg-white shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold text-base">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Row 3 - Bottom */}
            <motion.div
              className={`absolute bottom-8 left-0 flex gap-4 ${isVisible ? 'animate-flow-right' : ''}`}
              style={{ animationDuration: '30s' }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={`row3-${image.id}`}
                  className="flex-shrink-0"
                  initial={{ x: '100vw' }}
                  animate={isVisible ? { x: '-100vw' } : { x: '100vw' }}
                  transition={{
                    duration: 30,
                    delay: index * 0.3,
                    ease: 'linear',
                    repeat: Infinity
                  }}
                >
                  <div className="relative w-48 h-64 rounded-xl overflow-hidden bg-white shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes flow-right {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100vw);
          }
        }
        
        @keyframes flow-left {
          0% {
            transform: translateX(-100vw);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        
        .animate-flow-right {
          animation: flow-right linear infinite;
        }
        
        .animate-flow-left {
          animation: flow-left linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FlowingImagesSection; 