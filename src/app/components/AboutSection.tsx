// app/components/AboutSection.tsx

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
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      className="text-center bg-white border border-[#E5E5E5] rounded-xl shadow-md p-6 relative overflow-hidden"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-2 font-serif">
          {count}{suffix}
        </div>
        <div className="text-xs text-[#888] uppercase tracking-wider">{label}</div>
      </div>
    </motion.div>
  );
};

// --- Ana Bileşen ---
const AboutSection = () => {
  const headingText = "Tasarım ustalığı ile hikayeler yaratıyoruz";
  const letters = headingText.split('');

  return (
    <section className="relative py-24 lg:py-32 bg-[#F9F9F9] bg-noise overflow-hidden">
      {/* Açık watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <h1 className="text-[200px] lg:text-[300px] font-black text-black/5 select-none">NORA</h1>
      </div>

      {/* Minimal Tasarım Elementleri */}
      <motion.div
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-32 h-32 border border-[#E5E5E5] rounded-full opacity-30"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-16 h-16 bg-[#E5E5E5] rounded-full"
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Mobile: Single column layout, Desktop: Two column grid */}
        <div className="block lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Metin İçeriği - Her zaman üstte */}
          <div className="space-y-8 mb-16 lg:mb-0">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-semibold text-sm uppercase tracking-wider text-[#888]">
              Hakkımızda
            </motion.h3>
            <motion.h2
              initial="hidden" 
              whileInView="visible" 
              transition={{ staggerChildren: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-[#181818] leading-tight font-serif"
            >
              <motion.span 
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 30, x: -20 },
                  visible: { opacity: 1, y: 0, x: 0 }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Tasarım ustalığı ile
              </motion.span>
              <motion.span 
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 30, x: 20 },
                  visible: { opacity: 1, y: 0, x: 0 }
                }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                hikayeler yaratıyoruz
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#444] leading-relaxed">
              Nora Yapım olarak, her projede yaratıcılığın sınırlarını zorluyor ve markaların hikayelerini görsel sanatla birleştiriyoruz. 25 yılı aşkın deneyimimizle, her karede mükemmelliği hedefliyor ve müşterilerimizin vizyonunu gerçeğe dönüştürüyoruz.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <Counter end={25} suffix="+" label="Year's Of Experience" />
              <Counter end={36} suffix="K+" label="Project Complete" />
              <Counter end={98} suffix="%" label="Client Reach" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8">
              <button className="group inline-flex items-center gap-3 bg-[#181818] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#D4AF37] hover:text-black">
                <span>Daha Fazla</span>
                <div className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Görsel Alanı - Mobile: Yazıdan sonra, Desktop: Sol tarafta */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center">
            {/* Kart görseli - Sol Alt */}
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 z-10 w-[70%] h-[60%] rounded-xl overflow-hidden shadow-md border border-[#E5E5E5] bg-white"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ 
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.img 
                src="https://demo.awaikenthemes.com/artistics/creative-portfolio/wp-content/uploads/2025/02/about-image-1.jpg" 
                alt="About Nora Yapım" 
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Kart görseli - Sağ Üst */}
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 z-20 w-[70%] h-[60%] rounded-xl overflow-hidden shadow-md border border-[#E5E5E5] bg-white"
              whileHover={{ 
                scale: 1.05,
                rotateY: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ 
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
              }}
            >
              <motion.img 
                src="https://demo.awaikenthemes.com/artistics/creative-portfolio/wp-content/uploads/2025/02/about-image-2.jpg" 
                alt="Studio work" 
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-2, 2, -2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 z-30 w-4 h-4 bg-white/20 rounded-full"
            />

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [2, -2, 2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-1/4 right-1/4 z-30 w-3 h-3 bg-white/30 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;