"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDoSection = () => {
  const services = [
    {
      title: "Film Yapımı",
      description: "Fortis Yapım, ulusal ve uluslararası deneyimiyle sinema filmleri, belgeseller ve kısa filmler için kapsamlı yapım çözümleri sunar. Senaryo geliştirmeden çekim ve post-prodüksiyona kadar tüm süreçleri titizlikle yönetir, her projeye sanatsal değer ve teknik mükemmeliyet katar."
    },
    {
      title: "Dizi Yapımı",
      description: "Televizyon ve dijital platform dizilerinde profesyonel yapım çözümleri sağlıyoruz. Çekim planlaması, set yönetimi ve yayın süreçlerinde uzman ekibimizle projeleri zamanında ve yüksek kalite standartlarında hayata geçiriyoruz."
    },
    {
      title: "Reklam Yapımı",
      description: "Markalar için yaratıcı reklam filmleri ve tanıtım videoları üretiyoruz. Konsept geliştirmeden final teslimine kadar her aşamada aktif rol alıyor, izleyiciye unutulmaz görsel deneyimler sunuyoruz."
    }
  ];

  return (
         <section className="relative overflow-hidden">
       <div className="grid grid-cols-1 lg:grid-cols-10 min-h-screen">
         
         {/* Left Column */}
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="p-8 lg:p-16 flex flex-col justify-center lg:col-span-6"
         >
                     <div className="max-w-lg">

                         {/* Main Heading */}
             <motion.h3
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               viewport={{ once: true }}
               className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
             >
               Yaratıcı Fikirleri <span className="text-white">Etkileyici Yapımlara</span><br />
               Dönüştürüyoruz
             </motion.h3>

            {/* Service Descriptions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {services.map((service, index) => (
                <div key={index} className={`${index < services.length - 1 ? 'border-b border-white/20 pb-6' : ''}`}>
                                     <div className="flex items-start gap-3 mb-3">
                     <div className="w-6 h-6 border-2 border-white rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                       <div className="w-2 h-2 bg-white rounded-full" />
                     </div>
                     <h4 className="text-lg lg:text-xl font-bold text-white">
                       {service.title}
                     </h4>
                   </div>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed ml-9">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

                 {/* Right Column - Image with Get Started Button */}
         <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="px-6 py-8 lg:pt-16 lg:pb-16 lg:pr-16 lg:pl-0 flex flex-col justify-center lg:col-span-4"
         >
          <div className="relative">
            {/* Top Right Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-right mb-8"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-wider">
                FORTİS YAPIM
              </h2>
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image */}
               <div className="relative overflow-hidden rounded-2xl flex-shrink-0 w-full lg:w-auto">
                 <img
                   src="https://img.freepik.com/premium-photo/production-team-working-together-studio_1257223-129210.jpg"
                   alt="Film prodüksiyonu"
                   className="w-full h-[450px] lg:w-96 lg:h-[550px] object-cover rounded-2xl"
                 />
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection; 