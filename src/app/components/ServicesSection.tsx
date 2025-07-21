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
        relative overflow-hidden rounded-xl 
        flex-1 transition-all duration-700 ease-in-out
        ${isHovered ? 'lg:flex-[2.5]' : 'lg:flex-[1]'}
        aspect-[4/5] lg:aspect-auto
        w-full lg:h-[600px]
        shadow-lg border border-[#E5E5E5]
      `}
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        {/* Poster Image */}
        <div 
          className={`
            absolute inset-0 bg-cover bg-center 
            transition-opacity duration-500
            ${isHovered ? 'opacity-0' : 'opacity-100'}
          `}
          style={{ backgroundImage: `url(${service.poster})` }}
        />

        {/* Video Background */}
        <div className={`
          absolute inset-0 overflow-hidden
          transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          <iframe
            src={`https://player.vimeo.com/video/${service.videoId}?muted=1&autoplay=${isHovered ? 1 : 0}&loop=1&background=1&controls=0`}
            className="absolute w-[230%] md:w-[130%] h-[110%] md:h-[130%] object-cover"
            style={{ 
              pointerEvents: 'none',
              top: '-5%',
              left: '-5%',
              transform: 'scale(1.1)'
            }}
            allow="autoplay; fullscreen"
          />
        </div>

        {/* Light Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="
        absolute inset-0
        flex flex-col items-center justify-center
        p-6 text-white text-center
      ">
        {/* SVG Icon */}
        <div className="mb-6">
          <img 
            src={service.icon} 
            alt={service.title}
            className="w-16 h-16 lg:w-20 lg:h-20 opacity-90"
          />
        </div>

        {/* Title - Always Visible and Centered */}
        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          {service.title}
        </h3>

        {/* Description - Visible only on hover */}
        <p className={`
          text-base lg:text-lg transition-all duration-500 max-w-sm
          ${isHovered 
            ? 'opacity-100 max-h-40 mt-4' 
            : 'opacity-0 max-h-0 mt-0 overflow-hidden'
          }
        `}>
          {service.description}
        </p>
      </div>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-[#F9F9F9] bg-noise">
      <div className="container-fluid px-0 max-w-full">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24 px-4">
          {/* Ana Başlık - Harf Harf Animasyon */}
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-6xl font-bold mb-8 text-[#181818] font-serif"
          >
            Hizmetlerimiz
          </motion.h2>

          {/* Alt Çizgi Animasyonu */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ 
              duration: 1, 
              delay: 0.8,
              ease: "easeOut"
            }}
            className="h-1 bg-[#D4AF37] mx-auto mb-8"
          />

          {/* Açıklama Metni - Satır Satır Animasyon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2,
              ease: "easeOut"
            }}
            className="text-[#444] max-w-3xl mx-auto text-xl leading-relaxed"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.4,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              Markanızın görsel hikayesini bir üst seviyeye taşımak
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.6,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              ve hedef kitlenizle anlamlı bağlar kurmak için
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.8,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              tasarlanmış kapsamlı video prodüksiyon hizmetleri sunuyoruz.
            </motion.span>
          </motion.div>

          {/* Dekoratif Elementler */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 2.2,
              ease: "easeOut"
            }}
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
              className="w-2 h-2 bg-[#D4AF37] rounded-full"
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
              className="w-2 h-2 bg-[#D4AF37] rounded-full"
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
              className="w-2 h-2 bg-[#D4AF37] rounded-full"
            />
          </motion.div>
        </div>

        {/* Services Container */}
        <div className="space-y-16 lg:space-y-20">
          {/* First Row */}
          <div 
            className="
              flex flex-col lg:flex-row 
              gap-10 lg:gap-16 lg:h-[600px] 
              w-full px-8 lg:px-16
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
              gap-10 lg:gap-16 lg:h-[600px] 
              w-full px-8 lg:px-16
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