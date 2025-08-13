"use client";

import React from 'react';
import InfiniteSloganBanner from './InfiniteSloganBanner';

interface CreativeFlowSectionNoPaddingProps {
  duration?: number;
  className?: string;
  noBg?: boolean;
}

const CreativeFlowSectionNoPadding: React.FC<CreativeFlowSectionNoPaddingProps> = ({ 
  duration = 60,
  className = "",
  noBg = false
}) => {
  return (
    <section className={`relative py-1.5 lg:py-1 overflow-hidden bg-white ${className}`}>
      {/* Background - always white for police tape effect */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="relative z-10">
        {/* Gradient Overlay for Side Darkness */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
        
        {/* Infinite Slogan Banner - Medium size */}
        <div className="py-0.5 lg:py-0">
          <InfiniteSloganBanner duration={duration} textColor="black" />
        </div>
      </div>
    </section>
  );
};

export default CreativeFlowSectionNoPadding; 