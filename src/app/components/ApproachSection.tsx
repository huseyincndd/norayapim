"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ApproachSection = () => {
  const approachItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Misyonumuz",
      description: "16 yılı aşkın deneyimimizle, sanat ve tutkuyu rehber edinerek film, dizi ve reklam prodüksiyonu alanında sanatsal mükemmeliyet ve yüksek kalite standartlarından taviz vermeden özgün ve yenilikçi projeler üretmek. Toplumsal kültürün gelişimine katkı sağlayarak, izleyicilere unutulmaz görsel deneyimler sunmak."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Değerlerimiz",
      description: "Yaratıcılık, kalite, güvenilirlik ve sürekli yenilik. Her projede edindiğimiz deneyimi yetkin ekibimiz ve organize çalışma anlayışımızla birleştirerek sektörde kalıcı bir üretim standardı oluşturmak. Türkiye'nin 84 ilinde konseptten son teslimata kadar her aşamayı titizlikle planlayarak projelerin kendi ruhunu taşıyan yaratıcı dokunuşlar katmak."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Vizyonumuz",
      description: "Film, dizi ve reklam prodüksiyonu sektöründe öncü bir yapım şirketi olarak, gelişen teknoloji ve yaratıcı yaklaşımlarla desteklenen tecrübemizi kullanarak ulusal ve uluslararası platformlarda başarılı işbirlikleri kurmak. Sektörün önde gelen yapım şirketlerinden biri olmanın haklı gururunu yaşayarak, gelecekte de kalıcı bir üretim standardı oluşturmaya devam etmek."
    }
  ];

  const images = [
    "https://www.amazingstudiosinc.com/wp-content/uploads/2023/11/5e2b66ba23cad582a6ac30f5_5-MovieMagicSetHERO.jpg",
    "https://theblackcapmedia.com/media/blogs/produksiyon_film_resim.jpg",
    "https://macksennettstudios.net/wp-content/uploads/2022/01/What-is-set-design-in-film.jpg"
  ];

  return (
         <section className="relative pt-0 pb-12 lg:pb-16 overflow-hidden">

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >

          
                     <motion.h3
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             viewport={{ once: true }}
                          className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto text-left lg:text-center"
            >
              Mükemmelliğe ulaşmak için yaratıcı <span className="text-white">yaklaşımımız</span>
            </motion.h3>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Animated Wave Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)`,
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-15"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, white 30%, transparent 100%)`,
                  backgroundSize: '300% 100%',
                }}
                animate={{
                  backgroundPosition: ['300% 0', '-300% 0'],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, white 20%, transparent 100%)`,
                  backgroundSize: '400% 100%',
                }}
                animate={{
                  backgroundPosition: ['400% 0', '-400% 0'],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 4,
                }}
              />
            </div>
            <div className="text-white mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black/20 backdrop-blur-md rounded-2xl">
                {approachItems[0].icon}
              </div>
            </div>
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {approachItems[0].title}
            </h4>
            <p className="text-white/80 leading-relaxed">
              {approachItems[0].description}
            </p>
          </motion.div>

          {/* Middle Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
                         <img
               src={images[0]}
               alt="Film prodüksiyonu"
               className="w-full h-full object-cover"
             />
          </motion.div>

          {/* Right Column - Value Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Animated Wave Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)`,
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-15"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, white 30%, transparent 100%)`,
                  backgroundSize: '300% 100%',
                }}
                animate={{
                  backgroundPosition: ['300% 0', '-300% 0'],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, white 20%, transparent 100%)`,
                  backgroundSize: '400% 100%',
                }}
                animate={{
                  backgroundPosition: ['400% 0', '-400% 0'],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 4,
                }}
              />
            </div>
            <div className="text-white mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black/20 backdrop-blur-md rounded-2xl">
                {approachItems[1].icon}
              </div>
            </div>
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {approachItems[1].title}
            </h4>
            <p className="text-white/80 leading-relaxed">
              {approachItems[1].description}
            </p>
          </motion.div>

          {/* Bottom Row - Image, Vision Card, Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
                         <img
               src={images[1]}
               alt="Dizi prodüksiyonu"
               className="w-full h-full object-cover"
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Animated Wave Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)`,
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-15"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, white 30%, transparent 100%)`,
                  backgroundSize: '300% 100%',
                }}
                animate={{
                  backgroundPosition: ['300% 0', '-300% 0'],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, white 20%, transparent 100%)`,
                  backgroundSize: '400% 100%',
                }}
                animate={{
                  backgroundPosition: ['400% 0', '-400% 0'],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 4,
                }}
              />
            </div>
            <div className="text-white mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black/20 backdrop-blur-md rounded-2xl">
                {approachItems[2].icon}
              </div>
            </div>
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {approachItems[2].title}
            </h4>
            <p className="text-white/80 leading-relaxed">
              {approachItems[2].description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
                         <img
               src={images[2]}
               alt="Reklam prodüksiyonu"
               className="w-full h-full object-cover"
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection; 