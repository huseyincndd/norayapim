"use client";

import React from 'react';

interface Company {
  id: number;
  name: string;
  logoUrl: string;
}

// Sample company data - replace with actual client logos
const companies: Company[] = [
  {
    id: 1,
    name: "Nike",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Nike_Logo.svg"
  },
  {
    id: 2,
    name: "Apple",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    id: 3,
    name: "Microsoft",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    id: 4,
    name: "Google",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: 5,
    name: "Amazon",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    id: 6,
    name: "Tesla",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
  },
  {
    id: 7,
    name: "Netflix",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  {
    id: 8,
    name: "Spotify",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
  },
  {
    id: 9,
    name: "Adobe",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg"
  },
  {
    id: 10,
    name: "Intel",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%2C_light_blue%29.svg"
  }
];

const LogoMarquee: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-black/80 to-black" />
      
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />
          
          {/* The Infinite Marquee */}
          <div className="group relative flex animate-scroll items-center py-8">
            {/* First Set of Logos */}
            {companies.map((company) => (
              <div
                key={`first-${company.id}`}
                className="mx-8 lg:mx-12 flex h-12 lg:h-16 w-24 lg:w-32 flex-shrink-0 items-center justify-center"
              >
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="h-auto max-h-8 lg:max-h-12 w-auto max-w-full filter brightness-0 invert opacity-40 transition-all duration-300 hover:scale-110 hover:opacity-80"
                />
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {companies.map((company) => (
              <div
                key={`second-${company.id}`}
                className="mx-8 lg:mx-12 flex h-12 lg:h-16 w-24 lg:w-32 flex-shrink-0 items-center justify-center"
              >
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="h-auto max-h-8 lg:max-h-12 w-auto max-w-full filter brightness-0 invert opacity-40 transition-all duration-300 hover:scale-110 hover:opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
        
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee; 