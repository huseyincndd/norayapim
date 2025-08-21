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
    <section id="mission-statement-section" className="relative bg-black py-4 md:py-12 lg:py-20">
      {/* Sophisticated Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://macksennettstudios.net/wp-content/uploads/2021/01/how-does-filming-work-in-a-sound-stage.jpg')"
        }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-black/90" />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-0 md:pt-8 -mt-2 md:-mt-0 md:ml-48 lg:ml-64 flex flex-col justify-center">
        
        {/* Heading Section - Compact Layout */}
        <motion.div
          className="text-left max-w-4xl md:max-w-6xl"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase leading-tight text-white mb-4 md:mb-10 lg:mb-14 font-montserrat tracking-wide">
            <strong>TUTKU VE SANATLA YARINLARI AYDINLATAN VİZYON</strong>
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-extralight uppercase leading-tight text-white mb-3 md:mb-6 lg:mb-8 font-lato tracking-wider drop-shadow">
            YAPIM ŞİRKETİMİZ, DİZİ, SİNEMA VE REKLAM PROJELERİNDE ÖZGÜN FİKİRLER GELİŞTİRİYOR. HER YAPIMDA TUTKU, SANAT VE VİZYONU BİR ARAYA GETİRİYORUZ.
          </p>
          <p className="text-base md:text-base lg:text-lg font-normal text-white/95 leading-relaxed font-lato mb-3 md:mb-6 lg:mb-8 drop-shadow">
            Nora Yapım, sanat ve yaratıcı vizyonu rehber edinerek, dizi, sinema ve reklam projelerinde öncü bir konumda yer alıyor. 16 yılı aşkın deneyimiyle her projeye özgün yaklaşım getiriyor, modern teknoloji ve yenilikçi çözümlerle hikâyeleri unutulmaz görsel deneyimlere dönüştürüyor. Senaryo geliştirmeden çekim ve post-prodüksiyona kadar tüm süreçlerde kalite ve sanatsal mükemmeliyetten ödün vermeden çalışıyor; izleyiciye etkileyici ve kalıcı işler sunmayı misyon ediniyor.
          </p>
        </motion.div>
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