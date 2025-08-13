"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
     const services = [
     {
       title: "16 Yıllık Deneyim",
       description: "Film, dizi ve reklam prodüksiyonu alanında 16 yılı aşkın köklü deneyimimizle sektörün öncü şirketlerinden biriyiz."
     },
     {
       title: "84 İlde Üretim Gücü",
       description: "Türkiye'nin 84 ilinde konseptten son teslimata kadar her aşamayı titizlikle planlayarak projelerin kendi ruhunu taşıyan yaratıcı dokunuşlar katıyoruz."
     },
     {
       title: "Kapsamlı Prodüksiyon Hizmetleri",
       description: "Senaryo geliştirmeden çekim ve yapım süreçlerine, post-prodüksiyondan yayına kadar tüm aşamalarda aktif rol alıyoruz."
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
           className="p-8 lg:p-16 flex flex-col justify-center lg:col-span-4"
         >
                     <div className="max-w-md">


             {/* Main Heading */}
             <motion.h3
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               viewport={{ once: true }}
               className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
             >
               Sanat ve <span className="text-white">tutku</span> ile <span className="text-white">mükemmellik</span>
             </motion.h3>

             {/* Description */}
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               viewport={{ once: true }}
               className="text-white/80 text-base leading-relaxed mb-8"
             >
               Sanatsal mükemmeliyet ve yüksek kalite standartlarından taviz vermeden özgün ve yenilikçi projeler üretiyoruz. Toplumsal kültürün gelişimine katkı sağlayarak, izleyicilere unutulmaz görsel deneyimler sunuyoruz.
             </motion.p>

                         {/* Bullet Points */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               viewport={{ once: true }}
               className="space-y-4 mb-7"
             >
               <div className="flex items-start gap-3">
                 <div className="w-6 h-6 bg-white rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                   <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <p className="text-white text-lg">Film, Dizi ve Reklam Prodüksiyonu</p>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-6 h-6 bg-white rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                   <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <p className="text-white text-lg">Ulusal ve Uluslararası İşbirlikleri</p>
               </div>
             </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
                             <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300"
               >
                 Bize Ulaşın
               </motion.button>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

                 {/* Right Column - Image with Connected Green Boxes */}
         <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="px-6 py-8 lg:pt-16 lg:pb-16 lg:pr-16 lg:pl-0 flex flex-col justify-center lg:col-span-6"
         >
           <div className="flex flex-col lg:flex-row items-center justify-center">
             {/* Main Image - Vertical */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
               className="relative overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-2xl flex-shrink-0 bg-white p-1.5 w-full lg:w-auto"
             >
               <img
                 src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop&q=80"
                 alt="Film prodüksiyonu"
                 className="w-full h-[450px] lg:w-84 lg:h-[500px] object-cover rounded-xl"
               />
             </motion.div>

             {/* Services List - Connected White Boxes */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               viewport={{ once: true }}
               className="bg-white rounded-b-2xl lg:rounded-r-2xl lg:rounded-l-none p-4 lg:p-6 flex flex-col justify-center w-full lg:w-auto"
             >
               <div className="space-y-4">
                 {services.map((service, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                     viewport={{ once: true }}
                     className={`${index < services.length - 1 ? 'border-b border-black/40 pb-4 mx-4' : 'mx-4'}`}
                   >
                     <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                       {service.title}
                     </h4>
                     <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                       {service.description}
                     </p>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
           </div>
         </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 