"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Large, bold line-art SVG icons
const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75C15.996 18.75 19.25 15.504 19.25 11.5C19.25 7.496 15.996 4.25 12 4.25C8.004 4.25 4.75 7.496 4.75 11.5C4.75 15.504 8.004 18.75 12 18.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.5L12 8.75L8.25 11.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z" />
  </svg>
);

const LightingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3V6M12 18V21M6 12H3M21 12H18M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364M18.364 18.364L16.95 16.95M7.05 7.05L5.636 5.636" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z" />
  </svg>
);

const ClapperboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75V20.25H20.25V3.75H3.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25H20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75V20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75V20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75V20.25" />
  </svg>
);

const FilmRollIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75H20.25V20.25H3.75V3.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75V20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5H7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12H7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 16.5H7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5H20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12H20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 16.5H20.25" />
  </svg>
);

const IconGridSection = () => {
  // Helper function to get descriptions
  const getDescription = (slogan: string) => {
    const descriptions: { [key: string]: string } = {
      "GÖRÜNTÜ KALİTESİ": "4K ve 8K çözünürlük teknolojileri ile en yüksek görüntü kalitesi",
      "IŞIK TEKNOLOJİSİ": "Profesyonel LED ve geleneksel ışık sistemleri",
      "SET YÖNETİMİ": "Deneyimli ekip ile kusursuz prodüksiyon süreci",
      "POST-PRODÜKSİYON": "Modern yazılımlar ile sinematik düzenleme"
    };
    return descriptions[slogan] || "";
  };

  // Feature data
  const features = [
    { icon: CameraIcon, slogan: "GÖRÜNTÜ KALİTESİ" },
    { icon: LightingIcon, slogan: "IŞIK TEKNOLOJİSİ" },
    { icon: ClapperboardIcon, slogan: "SET YÖNETİMİ" },
    { icon: FilmRollIcon, slogan: "POST-PRODÜKSİYON" }
  ];

  // Animation variants
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden">
      {/* Premium Background Layers */}
      
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

      {/* Premium Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated Red Lines */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute h-0.5 w-32 bg-premium-red opacity-40"
          style={{ top: '15%', left: '10%', rotate: -25 }}
          animate={{ x: ['0%', '20%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />
        <motion.div
          className="absolute h-0.5 w-24 bg-premium-red opacity-50"
          style={{ bottom: '20%', right: '15%', rotate: 15 }}
          animate={{ x: ['0%', '-15%'] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />
        <motion.div
          className="absolute h-0.5 w-28 bg-premium-red opacity-35"
          style={{ top: '60%', left: '5%', rotate: -10 }}
          animate={{ x: ['0%', '30%'] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />
      </div>

      {/* Premium Red Accent Circles */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{ 
            top: '10%', 
            right: '5%',
            background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full"
          style={{ 
            bottom: '15%', 
            left: '8%',
            background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 60%)'
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-premium-red rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              opacity: 0.6
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Premium Border Accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-premium-red to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-0.5 bg-gradient-to-l from-premium-red to-transparent" />
        <div className="absolute bottom-0 left-0 w-32 h-0.5 bg-gradient-to-r from-premium-red to-transparent" />
        <div className="absolute bottom-0 right-0 w-32 h-0.5 bg-gradient-to-l from-premium-red to-transparent" />
      </div>

      {/* Floating Metallic Knot Icon */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute right-12 top-2/3 transform -translate-y-1/2"
          animate={{ 
            y: [-500, -50, -500],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        >
          <img 
            src="https://static.vecteezy.com/system/resources/previews/060/344/142/non_2x/impressive-contemporary-ultra-detailed-photorealistic-isolated-cutout-of-a-single-intricate-celtic-knot-made-of-liquid-chrome-professional-render-with-transparent-background-crisp-free-png.png"
            alt="Metallic Knot"
            className="w-64 h-64 object-cover rounded-full opacity-30"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(220,38,38,0.4)) brightness(1.2) contrast(1.1)',
              transform: 'perspective(1000px) rotateX(15deg)'
            }}
          />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
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

          {/* Icon Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-20"
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
                  className="group relative flex flex-col items-center text-center p-8 rounded-lg transition-all duration-500 hover:bg-white/5 hover:scale-105"
                  variants={cardVariants}
                >
                  {/* Red Accent Line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-premium-red opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Container with Glow Effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-premium-red opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full" />
                    <IconComponent className="relative w-32 h-32 text-white group-hover:text-premium-red transition-all duration-500" />
                  </div>

                  {/* Slogan */}
                  <h3 className="text-lg font-light uppercase text-white/80 tracking-widest group-hover:text-white transition-colors duration-300">
                    {feature.slogan}
                  </h3>

                  {/* Subtle Description */}
                  <p className="mt-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                    {getDescription(feature.slogan)}
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