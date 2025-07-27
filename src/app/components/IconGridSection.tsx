"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Large, bold line-art SVG icons
const SpeedIcon = () => (
  <img 
    src="https://villaqrmenu.b-cdn.net/nora/filmroll.png"
    alt="Film Roll Icon"
    className="w-20 h-20 md:w-24 md:h-24 object-contain filter brightness-0 invert"
  />
);

const LocationIcon = () => (
  <img 
    src="https://villaqrmenu.b-cdn.net/nora/isik.png"
    alt="Işık Icon"
    className="w-20 h-20 md:w-24 md:h-24 object-contain filter brightness-0 invert"
  />
);

const CameraIcon = () => (
  <img 
    src="https://villaqrmenu.b-cdn.net/nora/camera.png"
    alt="Camera Icon"
    className="w-20 h-20 md:w-24 md:h-24 object-contain filter brightness-0 invert"
  />
);

const WeatherIcon = () => (
  <img 
    src="https://villaqrmenu.b-cdn.net/nora/klaket.png"
    alt="Klaket Icon"
    className="w-20 h-20 md:w-24 md:h-24 object-contain filter brightness-0 invert"
  />
);

const FantasyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="10" />
    <text x="12" y="16" textAnchor="middle" fontSize="8" fill="currentColor">360°</text>
    <path d="M12 2a10 10 0 0 1 0 20" strokeDasharray="2 2" />
    <path d="M12 2a10 10 0 0 0 0 20" strokeDasharray="2 2" />
  </svg>
);

const IconGridSection = ({ noBg = false }: { noBg?: boolean }) => {
  // Feature data matching the new icons
  const features = [
    { 
      icon: SpeedIcon, // Film Roll
      title: "PROFESYONEL",
      subtitle: "FİLM PRODÜKSİYON"
    },
    { 
      icon: LocationIcon, // Işık
      title: "STÜDYO",
      subtitle: "IŞIKLANDIRMA"
    },
    { 
      icon: CameraIcon, // Kamera
      title: "YÜKSEK KALİTE",
      subtitle: "KAMERA ÇEKİM"
    },
    { 
      icon: WeatherIcon, // Klaket
      title: "SET YÖNETİMİ",
      subtitle: "PROFESYONEL EKİP"
    }
  ];

  // Animation variants
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-24 lg:py-32 overflow-hidden relative ${noBg ? 'bg-transparent' : 'bg-[#0A0A0A]'}`}>
      {/* Premium Background Layers - Only show when noBg is false */}
      {!noBg && (
        <>
          {/* Base Texture */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop&q=80')"
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/80 via-black/60 to-premium-red/20" />

          {/* Red Dot Pattern */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'radial-gradient(theme("colors.premium-red") 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              opacity: 0.2
            }}
          />
        </>
      )}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              TEKNOLOJİK
            </h2>
            <div className="w-24 h-0.5 bg-premium-red mx-auto" />
          </motion.div>

          {/* Icon Grid - Horizontal Layout */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative flex flex-col items-center text-center p-6 rounded-lg transition-all duration-500 hover:bg-white/5 hover:scale-105"
                  variants={cardVariants}
                >
                  {/* Icon Container with Glow Effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-premium-red opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full" />
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-medium uppercase text-white/90 tracking-wider group-hover:text-white transition-colors duration-300 mb-1">
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs md:text-sm font-light uppercase text-white/70 tracking-wider group-hover:text-white/90 transition-colors duration-300">
                    {feature.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IconGridSection; 