"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
      <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 lg:mb-4">
          {count}{suffix}
      </div>
      <div className="text-base lg:text-base text-white/80 uppercase tracking-wider font-medium">{label}</div>
    </motion.div>
  );
};

// --- Ana Bileşen ---
const StatsSection = ({ noBg = false }: { noBg?: boolean }) => {
  return (
    <section className={`relative py-12 lg:py-20 ${noBg ? 'bg-transparent' : 'bg-black'} overflow-hidden`}>
      {/* Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/3 left-1/4 w-32 h-32 lg:w-48 lg:h-48 bg-white/5 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-24 h-24 lg:w-40 lg:h-40 bg-white/5 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Açıklama Metni */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-24 text-left lg:text-center"
          >
            <h2 className="text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight">
              Başarılarımızın{" "}
              <span className="text-white">Rakamlarla</span> Hikayesi
            </h2>
            <p className="text-xl lg:text-xl xl:text-2xl text-white/80 max-w-3xl lg:max-w-4xl lg:mx-auto leading-relaxed">
              2008 yılından bu yana sektörde kazandığımız deneyim ve tamamladığımız projelerle güvenilirliğimizi pekiştirdik. İşte başarılarımızın öne çıkan sayısal göstergeleri:
            </p>
          </motion.div>

          {/* Sayaçlar - 2x2 Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 lg:gap-16 xl:gap-20"
          >
            <Counter end={16} suffix="+" label="Yıllık Deneyim" />
            <Counter end={500} suffix="+" label="Tamamlanan Proje" />
            <Counter end={99} suffix="%" label="Proje Başarı Oranı" />
            <Counter end={45} suffix="K+" label="Saat Video Üretimi" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 