// nora-production/components/ServicesSection.tsx

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Service data
const servicesData = [
  {
    id: 1,
    title: "Video Productions",
    description: "An international digital design studio reimagining how people connect with brands.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_6-1024x576.jpg",
    videoId: "1088965285",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg"
  },
  {
    id: 2,
    title: "Digital Media",
    description: "We prioritize flexibility, streamlined processes, and creative that positively impacts your business.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_3-1024x539.jpg",
    videoId: "1088965204",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg"
  },
  {
    id: 3,
    title: "Commercial",
    description: "We are dedicated to transforming businesses by providing expert consulting services.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_5-1024x539.jpg",
    videoId: "1088965267",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg"
  },
  {
    id: 4,
    title: "Content Creation",
    description: "We are a creative production company that specializes in crafting unique stories.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_4-1024x576.jpg",
    videoId: "1088965238",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg"
  },
  {
    id: 5,
    title: "Creative Directions",
    description: "It's not about being right but rather about discovering the right idea.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_2-1024x540.jpg",
    videoId: "1088965175",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg"
  },
  {
    id: 6,
    title: "Studio Rental",
    description: "We got into this business to tell compelling stories and connect ideas with people.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_1-1024x538.jpg",
    videoId: "1088965150",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/lighting.svg"
  }
];

// ServiceCard Component
const ServiceCard = ({ 
  service, 
  isHovered, 
  onMouseEnter 
}: { 
  service: typeof servicesData[0], 
  isHovered: boolean, 
  onMouseEnter: () => void 
}) => {
  return (
    <div 
      onMouseEnter={onMouseEnter}
      className={`
        relative overflow-hidden rounded-2xl 
        transition-all duration-500 ease-out
        flex-1
        ${isHovered ? 'lg:flex-[2.5]' : 'lg:flex-[0.8]'}
        aspect-[4/5] lg:aspect-auto
        w-full lg:h-[600px]
        shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm
        group
      `}
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        {/* Poster Image */}
        <div 
          className={`
            absolute inset-0 bg-cover bg-center 
            transition-opacity duration-300
            ${isHovered ? 'opacity-0' : 'opacity-100'}
          `}
          style={{ backgroundImage: `url(${service.poster})` }}
        />

        {/* Video Background - Only load when hovered */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src={`https://player.vimeo.com/video/${service.videoId}?muted=1&autoplay=1&loop=1&background=1&controls=0&quality=480p&dnt=1`}
              className="absolute w-[130%] h-[130%] object-cover"
              style={{ 
                pointerEvents: 'none',
                top: '-15%',
                left: '-15%',
              }}
              allow="autoplay; fullscreen"
              loading="lazy"
            />
          </div>
        )}

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        {/* Premium Red Glow on Hover */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-premium-red/20 via-transparent to-transparent
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} />
      </div>

      {/* Content */}
      <div className="
        absolute inset-0
        flex flex-col items-center justify-center
        p-6 text-white text-center
      ">
        {/* SVG Icon */}
        <div 
          className={`
            mb-6 transition-all duration-300
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
        >
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-premium-red/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-premium-red/30">
            <img 
              src={service.icon} 
              alt={service.title}
              className="w-8 h-8 lg:w-10 lg:h-10 opacity-90 filter brightness-0 invert"
            />
          </div>
        </div>

        {/* Title - Always Visible and Centered */}
        <h3 
          className={`
            text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center
            transition-transform duration-300
            ${isHovered ? '-translate-y-2' : 'translate-y-0'}
          `}
        >
          {service.title}
        </h3>

        {/* Description - Visible only on hover */}
        <p 
          className={`
            text-sm sm:text-base lg:text-lg transition-all duration-300 max-w-sm text-white/90
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          {service.description}
        </p>

        {/* Hover Indicator */}
        <div
          className={`
            absolute bottom-4 right-4 w-8 h-8 bg-premium-red/80 backdrop-blur-sm rounded-full flex items-center justify-center
            transition-all duration-300
            ${isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
          `}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Services Section Component
const ServicesSection = ({ noBg = false }: { noBg?: boolean }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className={`py-16 lg:py-32 ${noBg ? 'bg-transparent' : 'bg-gradient-to-br from-black via-gray-900 to-black'} overflow-hidden relative`}>
      {/* Unified Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/90 to-black" />
          {/* Animated Background Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
          {/* Red Blur Top Left */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-premium-red/5 rounded-full blur-2xl z-0"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Red Blur Bottom Right */}
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-premium-red/5 rounded-full blur-2xl z-0"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          {/* Red Blur Bottom Left */}
          <motion.div
            className="absolute bottom-1/4 left-0 w-32 h-32 bg-premium-red/10 rounded-full blur-2xl z-0"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          {/* About Us Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-2 h-2 bg-premium-red rounded-full" />
            <span className="text-white/60 text-sm uppercase tracking-wider">Hizmetlerimiz</span>
          </motion.div>

          {/* Ana Başlık */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-white leading-tight"
          >
            Yaratıcı{" "}
            <span className="text-premium-red">Çözümler</span> Sunuyoruz
          </motion.h2>

          {/* Açıklama Metni */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            Markanızın görsel hikayesini bir üst seviyeye taşımak ve hedef kitlenizle anlamlı bağlar kurmak için tasarlanmış kapsamlı video prodüksiyon hizmetleri sunuyoruz.
          </motion.p>

          {/* Dekoratif Elementler */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mt-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-premium-red rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="w-2 h-2 bg-premium-red rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="w-2 h-2 bg-premium-red rounded-full"
            />
          </motion.div>
        </div>

        {/* Services Container */}
        <div className="space-y-12 lg:space-y-16">
          {/* First Row */}
          <div 
            className="
              flex flex-col lg:flex-row 
              gap-6 lg:gap-8
              w-full
            "
            onMouseLeave={() => setHoveredId(null)}
          >
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isHovered={hoveredId === service.id}
                onMouseEnter={() => setHoveredId(service.id)}
              />
            ))}
          </div>

          {/* Second Row */}
          <div 
            className="
              flex flex-col lg:flex-row 
              gap-6 lg:gap-8
              w-full
            "
            onMouseLeave={() => setHoveredId(null)}
          >
            {servicesData.slice(3, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isHovered={hoveredId === service.id}
                onMouseEnter={() => setHoveredId(service.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;