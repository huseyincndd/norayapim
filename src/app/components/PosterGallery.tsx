// app/components/PosterGallery.tsx

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Veri Yapısı ve Mock Data ---
interface MoviePoster {
  id: number;
  title: string;
  posterUrl: string;
}

// DÜZELTİLDİ: [ ... ] hatası giderildi, tam veri eklendi.
const moviePosters: MoviePoster[] = [
  { id: 1, title: "Dune: Part Two", posterUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=900&fit=crop" },
  { id: 2, title: "Poor Things", posterUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=900&fit=crop" },
  { id: 3, title: "The Zone of Interest", posterUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=900&fit=crop" },
  { id: 4, title: "Anatomy of a Fall", posterUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=900&fit=crop" },
  { id: 5, title: "Killers of the Flower Moon", posterUrl: "https://images.unsplash.com/photo-1506947411487-a56738267384?w=600&h=900&fit=crop" }
];


// --- Ana Bileşen ---
const PosterGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPoster = () => { setCurrentIndex((prev) => (prev + 1) % moviePosters.length); };
  const prevPoster = () => { setCurrentIndex((prev) => (prev - 1 + moviePosters.length) % moviePosters.length); };
  const currentPoster = moviePosters[currentIndex];

  return (
    // DEĞİŞTİ: Arkaplan rengi ve noise deseni global sınıfla standart hale getirildi.
    <section className="min-h-screen bg-[#121212] py-24 lg:py-32 bg-noise">
      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* DEĞİŞTİ: Bölüm başlığı font-serif ve sistem rengi ile güncellendi. */}
          <h2 className="text-4xl md:text-5xl font-semibold text-[#EAEAEA] mb-4 font-serif">
            Vizyondakiler
          </h2>
          {/* DEĞİŞTİ: Divider daha ince ve zarif hale getirildi. */}
          <div className="w-24 h-px bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-2 space-y-12">
            {/* Layout kaymasını engellemek için minimum yükseklik */}
            <div className="min-h-[140px] md:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentPoster.id}
                  initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.4, ease: "easeInOut" }}
                  // DEĞİŞTİ: Film başlığı rengi güncellendi
                  className="text-4xl md:text-5xl font-serif text-[#EAEAEA] leading-tight"
                >
                  {currentPoster.title}
                </motion.h3>
              </AnimatePresence>
            </div>

            <div className="space-y-4">
              <motion.div
                key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                // DEĞİŞTİ: Sayaç rengi sistemle uyumlu hale getirildi.
                className="text-3xl font-light text-[#888888] tracking-widest"
              >
                {String(currentIndex + 1).padStart(2, '0')} / {String(moviePosters.length).padStart(2, '0')}
              </motion.div>
              <div className="w-16 h-px bg-white/20"></div>
            </div>

            <div className="flex items-center gap-6">
              {/* DEĞİŞTİ: Navigasyon elemanlarının rengi ve border'ı sistemle uyumlu hale getirildi */}
              <button onClick={prevPoster} className="group flex items-center gap-3 text-[#888888] hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/50 transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180"> <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                </div>
                <span className="text-sm font-light tracking-wide">Önceki</span>
              </button>
              <button onClick={nextPoster} className="group flex items-center gap-3 text-[#888888] hover:text-white transition-colors duration-300">
                <span className="text-sm font-light tracking-wide">Sonraki</span>
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/50 transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPoster.id}
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* DEĞİŞTİ: Gölge efekti daha temiz bir versiyonla değiştirildi. */}
                  <img
                    src={currentPoster.posterUrl}
                    alt={`${currentPoster.title} poster`}
                    className="w-full max-w-sm lg:max-w-md shadow-2xl shadow-black/50"
                  />
                  {/* Zarif bir border efekti eklendi */}
                  <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterGallery;