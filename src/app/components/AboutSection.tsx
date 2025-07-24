"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- İkonlar ---
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Sayaç Bileşeni ---
const Counter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = end / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div 
      ref={ref} 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-4xl lg:text-5xl font-bold text-premium-red mb-2">
          {count}{suffix}
      </div>
      <div className="text-sm text-white/80 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

// --- Ana Bileşen ---
const AboutSection = () => {
  return (
    <section className="relative py-16 lg:py-32 bg-gradient-to-br from-red-900/20 via-black to-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black/80 to-black" />

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Sol Taraf - Görsel Alanı */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] order-2 lg:order-1">
            {/* Top-Left Green X Pattern Panel */}
      <motion.div
              className="absolute top-4 left-4 lg:top-10 lg:left-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-48 lg:h-48 bg-black/0 rounded-2xl z-20 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-0.5 sm:gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-10 text-red-400 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 sm:w-3 sm:h-3 lg:w-6 lg:h-6">
                      <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                ))}
                </div>
            </motion.div>

            {/* Rear Image Panel (Top-Right - Background Layer) */}
            <motion.div
              className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-8 lg:right-8 w-[65%] h-[50%] sm:w-[70%] sm:h-[55%] lg:w-[70%] lg:h-[55%] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl z-10"
              initial={{ opacity: 0, x: 100, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Front Image Panel (Bottom-Left - Foreground Layer) */}
            <motion.div
              className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 lg:bottom-8 lg:left-8 w-[70%] h-[55%] sm:w-[75%] sm:h-[60%] lg:w-[75%] lg:h-[60%] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl z-30"
              initial={{ opacity: 0, x: -100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80" 
                alt="Collaborative work" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Call-to-Action Box (Highest Layer) */}
            <motion.div
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-8 lg:right-8 z-40"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                x: [-15, 15],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.8 },
                scale: { duration: 0.6, delay: 0.8 },
                x: {
                duration: 6,
                repeat: Infinity,
                  repeatType: "reverse",
                ease: "easeInOut"
                }
              }}
            >
              <div className="flex items-center bg-black/80 backdrop-blur-md rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:border-red-400/50 transition-all duration-300 group min-w-[200px] sm:min-w-[240px] lg:min-w-[280px]">
                <div className="bg-premium-red p-3 sm:p-4 lg:p-7 rounded-l-2xl lg:rounded-l-3xl group-hover:bg-red-600 transition-colors duration-300 flex-shrink-0">
                  <PhoneIcon />
                </div>
                <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex-1">
                  <div className="text-white font-semibold text-sm sm:text-base lg:text-lg">İletişime Geç</div>
                  <div className="text-white/80 text-xs sm:text-sm font-medium">+90 555 123 4567</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sağ Taraf - Metin İçeriği */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* About Us Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-premium-red rounded-full" />
              <span className="text-white/60 text-sm uppercase tracking-wider">Hakkımızda</span>
            </motion.div>

            {/* Ana Başlık */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              Tasarım ustalığı ile{" "}
              <span className="text-premium-red">hikayeler</span> yaratıyoruz
            </motion.h2>

            {/* Açıklama */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg"
            >
              Fikirleri etkileyici görsellere dönüştürüyor, yaratıcılık ve stratejiyi harmanlayarak vizyonunuzu hayata geçiriyoruz.
            </motion.p>

            {/* İstatistikler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8"
            >
              <Counter end={25} suffix="+" label="Yıllık Deneyim" />
              <Counter end={36} suffix="K+" label="Tamamlanan Proje" />
              <Counter end={98} suffix="%" label="Müşteri Memnuniyeti" />
            </motion.div>

            {/* More About Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 sm:gap-4 pt-6 lg:pt-8"
            >
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 border border-white/20 text-sm sm:text-base">
                Daha Fazla
              </button>
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-premium-red rounded-full flex items-center justify-center cursor-pointer group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-white"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowIcon />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;