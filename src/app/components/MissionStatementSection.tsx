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
    <section className="relative bg-black py-24 lg:py-40 overflow-hidden">
      {/* Sophisticated Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-bottom"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80')"
        }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-black/80" />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        
        {/* Refined Heading Block with Red Marker Lines */}
        <div className="relative">
          {/* Left Red Marker Line */}
          <motion.div
            className="absolute top-0 left-0 w-1 h-full bg-premium-red origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          {/* Right Red Marker Line */}
          <motion.div
            className="absolute top-0 right-0 w-1 h-full bg-premium-red origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-white">
              {/* Line 1: Standard White Text */}
              <div className="mb-2">GELENEKSEL VE YENİLİKÇİ</div>
              
              {/* Line 2: Standard White Text */}
              <div className="mb-4">SİNEMATOGRAFİ TEKNİKLERİNİ</div>
              
              {/* Line 3: Signature Outline Text */}
              <div>
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>
                  BİRLEŞTİRİYORUZ
                </span>
              </div>
              
              {/* Line 4: Standard White Text */}
              <div className="mt-4 text-2xl md:text-3xl lg:text-4xl">
                GERÇEK DÜNYA İLE LED EKRAN ARASINDA BİR KÖPRÜ KURUYORUZ
              </div>
            </h2>
          </motion.div>
        </div>

        {/* Details Block */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column - Paragraph */}
            <motion.div
              className="lg:col-span-7 relative"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Red Marker Line for Left Column */}
              <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-premium-red origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
                viewport={{ once: true }}
              />
              
              <p className="text-base font-light text-white/80 leading-relaxed pl-6">
                Norayapım olarak, sinema ve reklam prodüksiyonlarında geleneksel sinematografi tekniklerini 
                modern LED ekran teknolojisi ile harmanlayarak, izleyicilere benzersiz görsel deneyimler sunuyoruz. 
                Gerçek dünya ile dijital dünya arasında kusursuz bir köprü kuran yaklaşımımız, 
                her projede özgün ve etkileyici sonuçlar elde etmemizi sağlıyor.
              </p>
            </motion.div>

            {/* Right Column - Button */}
            <motion.div
              className="lg:col-span-5 text-center relative"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {/* Red Marker Line for Right Column */}
              <motion.div
                className="absolute top-0 right-0 w-1 h-full bg-premium-red origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
                viewport={{ once: true }}
              />
              
              <a 
                href="/about"
                className="inline-block bg-white text-black rounded-full px-10 py-4 uppercase font-semibold transition-colors duration-300 hover:bg-gray-200 hover:text-premium-red"
              >
                Hakkımızda
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatementSection; 