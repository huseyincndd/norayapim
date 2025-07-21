"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Bize Güvenen Markalar
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Dünya çapında tanınan markalarla çalışarak, kalitemizi ve güvenilirliğimizi kanıtlıyoruz.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent" />
          
          {/* The Infinite Marquee */}
          <div className="group relative flex animate-scroll items-center">
            {/* First Set of Logos */}
            {companies.map((company) => (
              <div
                key={`first-${company.id}`}
                className="mx-12 flex h-16 w-32 flex-shrink-0 items-center justify-center"
              >
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="h-auto max-h-12 w-auto max-w-full filter grayscale transition-all duration-300 hover:scale-110 hover:filter-none"
                  style={{ filter: 'grayscale(1)' }}
                />
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {companies.map((company) => (
              <div
                key={`second-${company.id}`}
                className="mx-12 flex h-16 w-32 flex-shrink-0 items-center justify-center"
              >
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="h-auto max-h-12 w-auto max-w-full filter grayscale transition-all duration-300 hover:scale-110 hover:filter-none"
                  style={{ filter: 'grayscale(1)' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>10+ Yıllık Deneyim</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>500+ Tamamlanan Proje</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>%98 Müşteri Memnuniyeti</span>
            </div>
          </div>
        </motion.div>
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
          animation: scroll 20s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }
        
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
        
        /* Ensure smooth grayscale transitions */
        img {
          filter: grayscale(1) !important;
          transition: all 0.3s ease !important;
        }
        
        img:hover {
          filter: grayscale(0) !important;
          transform: scale(1.1) !important;
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee; 