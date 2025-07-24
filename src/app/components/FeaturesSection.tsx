"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Minimalist Icons ---
const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75C15.996 18.75 19.25 15.504 19.25 11.5C19.25 7.496 15.996 4.25 12 4.25C8.004 4.25 4.75 7.496 4.75 11.5C4.75 15.504 8.004 18.75 12 18.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.5L12 8.75L8.25 11.5" />
  </svg>
);

const LightingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3V6M12 18V21M6 12H3M21 12H18M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364M18.364 18.364L16.95 16.95M7.05 7.05L5.636 5.636" />
  </svg>
);

const ClapperboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75V20.25H20.25V3.75H3.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25H20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75V20.25" />
  </svg>
);

const FilmRollIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75H20.25V20.25H3.75V3.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75V20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5H7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 16.5H7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5H20.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 16.5H20.25" />
  </svg>
);

// --- Abstract Red Glyphs ---
const GlyphOne = () => (
  <div className="absolute top-0 left-0">
    <div className="h-0.5 w-8 bg-premium-red" />
    <div className="h-0.5 w-6 bg-premium-red mt-1" style={{ transform: 'rotate(45deg)' }} />
  </div>
);

const GlyphTwo = () => (
  <div className="absolute top-0 left-0">
    <div className="h-0.5 w-6 bg-premium-red" style={{ transform: 'rotate(-30deg)' }} />
    <div className="h-0.5 w-8 bg-premium-red mt-2" />
  </div>
);

const GlyphThree = () => (
  <div className="absolute top-0 left-0">
    <div className="h-0.5 w-8 bg-premium-red" />
    <div className="h-0.5 w-4 bg-premium-red mt-1 ml-2" />
    <div className="h-0.5 w-6 bg-premium-red mt-1" style={{ transform: 'rotate(60deg)' }} />
  </div>
);

const GlyphFour = () => (
  <div className="absolute top-0 left-0">
    <div className="h-0.5 w-6 bg-premium-red" style={{ transform: 'rotate(15deg)' }} />
    <div className="h-0.5 w-8 bg-premium-red mt-1" style={{ transform: 'rotate(-15deg)' }} />
  </div>
);

const FeaturesSection = () => {
  // Feature data with unique glyphs
  const features = [
    { glyph: <GlyphOne />, icon: CameraIcon, text: "YÜKSEK ÇÖZÜNÜRLÜKLÜ KAMERALAR" },
    { glyph: <GlyphTwo />, icon: LightingIcon, text: "PROFESYONEL IŞIK EKİPMANLARI" },
    { glyph: <GlyphThree />, icon: ClapperboardIcon, text: "KUSURSUZ SET YÖNETİMİ" },
    { glyph: <GlyphFour />, icon: FilmRollIcon, text: "SİNEMATİK POST-PRODÜKSİYON" }
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
    <section className="relative bg-[#0A0A0A] py-24 lg:py-32">
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Features Grid */}
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
                  className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-white/5"
                  variants={cardVariants}
                >
                  {/* Abstract Red Glyph */}
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {feature.glyph}
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-4">
                    <IconComponent className="w-12 h-12 text-white/60 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-semibold text-white mt-4 leading-tight">
                    {feature.text}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;