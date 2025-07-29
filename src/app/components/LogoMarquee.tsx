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

const LogoMarquee: React.FC<{ noBg?: boolean }> = ({ noBg = false }) => {
  return (
    <section className={`py-8 lg:py-16 ${noBg ? 'bg-transparent' : 'bg-gradient-to-br from-black via-gray-900 to-black'} overflow-hidden relative`}>
      {/* Unified Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/90 to-black" />
          {/* Animated Background Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent" />
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent" />
          </div>
          {/* Red Blur Top Left */}
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-premium-red/5 rounded-full blur-2xl z-0" />
          {/* Red Blur Bottom Right */}
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-premium-red/5 rounded-full blur-2xl z-0" />
          {/* Red Blur Bottom Left */}
          <div className="absolute bottom-1/4 left-0 w-32 h-32 bg-premium-red/10 rounded-full blur-2xl z-0" />
        </>
      )}

      <div className="relative z-20">
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* The Infinite Marquee */}
          <div className="group relative flex animate-scroll items-center py-4">
            {/* First Set of Logos */}
            {companies.map((company) => (
              <div
                key={`first-${company.id}`}
                className="mx-4 lg:mx-6 flex h-12 lg:h-16 w-24 lg:w-32 flex-shrink-0 items-center justify-center"
              >
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="h-auto max-h-8 lg:max-h-12 w-auto max-w-full filter brightness-0 invert opacity-100 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {companies.map((company) => (
              <div
                key={`second-${company.id}`}
                className="mx-4 lg:mx-6 flex h-12 lg:h-16 w-24 lg:w-32 flex-shrink-0 items-center justify-center"
              >
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="h-auto max-h-8 lg:max-h-12 w-auto max-w-full filter brightness-0 invert opacity-100 transition-all duration-300 hover:scale-110"
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
          animation: scroll 15s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 12s linear infinite;
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