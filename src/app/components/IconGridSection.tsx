"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Large, bold line-art SVG icons for the new categories
const SinemaIcon = () => (
  <img 
    src="https://villaqrmenu.b-cdn.net/nora/klaket.png"
    alt="Sinema Icon"
    className="w-20 h-20 md:w-24 md:h-24 object-contain filter brightness-0 invert"
  />
);

const DiziIcon = () => (
  <img 
    src="https://villaqrmenu.b-cdn.net/nora/dizi.png"
    alt="Dizi Icon"
    className="w-20 h-20 md:w-24 md:h-24 object-contain filter brightness-0 invert"
  />
);

const ReklamIcon = () => (
  <img 
    src="https://villaqrmenu.b-cdn.net/nora/reklam.png"
    alt="Reklam Icon"
    className="w-20 h-20 md:w-24 md:h-24 object-contain filter brightness-0 invert"
  />
);

const BelgeselIcon = () => (
  <img 
    src="https://villaqrmenu.b-cdn.net/nora/belgesel.png"
    alt="Belgesel Icon"
    className="w-20 h-20 md:w-24 md:h-24 object-contain filter brightness-0 invert"
  />
);

const IconGridSection = ({ noBg = false }: { noBg?: boolean }) => {
  // Feature data matching the new categories
  const features = [
    { 
      icon: SinemaIcon,
      title: "SİNEMA",
      subtitle: "Büyük ekranın büyülü dünyası"
    },
    { 
      icon: DiziIcon,
      title: "DİZİ",
      subtitle: "Her bölümde mükemmellik"
    },
    { 
      icon: ReklamIcon,
      title: "REKLAM",
      subtitle: "Markaların hikayesini anlatıyoruz"
    },
    { 
      icon: BelgeselIcon,
      title: "BELGESEL",
      subtitle: "Gerçeğin objektifinden"
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
    <section className={`py-12 lg:py-20 overflow-hidden relative ${noBg ? 'bg-transparent' : 'bg-[#0A0A0A]'}`}>
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
              NELER YAPIYORUZ?
            </h2>
            <div className="w-24 h-0.5 bg-white mx-auto" />
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