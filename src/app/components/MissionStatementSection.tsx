"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MissionStatementSection = () => {
  // Refined animation variants for more elegant feel
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section id="mission-statement-section" className="relative h-[40vh] md:h-[60vh] lg:h-[80vh] bg-black py-4 md:py-12 lg:py-20 overflow-hidden">
      {/* Sophisticated Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://macksennettstudios.net/wp-content/uploads/2021/01/how-does-filming-work-in-a-sound-stage.jpg')"
        }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-black/85" />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-0 md:pt-8 -mt-2 md:-mt-0 md:ml-48 lg:ml-64 h-full flex flex-col justify-center">
        
        {/* Heading Section - Compact Layout */}
        <motion.div
          className="text-left max-w-4xl md:max-w-6xl"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase leading-tight text-white mb-4 md:mb-10 lg:mb-14 font-montserrat tracking-wide">
            <strong>YARATICI VİZYONU GERÇEĞE DÖNÜŞTÜREN PROFESYONEL YAPIM EKİBİ</strong>
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-light uppercase leading-tight text-white/90 mb-4 md:mb-8 lg:mb-10 font-lato tracking-wider">
            REKLAM, MÜZİK VİDEOSU, KURUMSAL İÇERİK VE ÇOK DAHA FAZLASI.
          </p>
        </motion.div>

        {/* Details Section - Closer to Heading */}
        <div className="mt-2 lg:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            
            {/* Paragraph */}
            <motion.div
              className="max-w-4xl"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm md:text-base lg:text-lg font-light text-white/95 leading-relaxed font-lato">
                İstanbul merkezli yenilikçi yapım şirketimiz, reklam filmleri, müzik videoları ve kurumsal içeriklerde uzmanlaşmış ekibiyle her projeye özgün yaklaşım getiriyor. Modern teknoloji ve yaratıcı vizyonu birleştirerek markaların hikayelerini etkileyici görsel anlatımlarla hayata geçiriyoruz.
              </p>
            </motion.div>


          </div>
        </div>
      </div>
      {/* Down Arrow for Mobile */}
      <button
        type="button"
        onClick={() => {
          const el = document.getElementById('after-mission-statement');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="md:hidden absolute left-1/2 bottom-1 -translate-x-1/2 z-20 flex flex-col items-center"
        aria-label="Aşağı kaydır"
      >
        <span className="animate-bounce">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
    </section>
  );
};

export default MissionStatementSection; 