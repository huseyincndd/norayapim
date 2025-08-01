"use client";

import React from 'react';
import InfiniteSloganBanner from './InfiniteSloganBanner';

interface CreativeFlowSectionProps {
  duration?: number;
  className?: string;
  noBg?: boolean;
}

const CreativeFlowSection: React.FC<CreativeFlowSectionProps> = ({ 
  duration = 60,
  className = "",
  noBg = false
}) => {
  return (
    <section className={`relative py-8 lg:py-16 overflow-hidden ${className}`}>
      {/* Background - only if noBg is false */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
          <div className="absolute inset-0 bg-noise opacity-30" />
        </>
      )}
      
      <div className="relative z-10">
        {/* Gradient Overlay for Side Darkness */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black/80 to-transparent"></div>
        </div>
        
        {/* Infinite Slogan Banner - Full Width */}
        <InfiniteSloganBanner duration={duration} />
      </div>
    </section>
  );
};

export default CreativeFlowSection; 