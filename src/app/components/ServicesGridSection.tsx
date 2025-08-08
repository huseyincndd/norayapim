"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const ServicesGridSection = () => {
  const services = [
                   {
        icon: (
          <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
          </svg>
        ),
        title: "Marka Kimliği Tasarımı",
        description: "Logo, renk paletleri ve kurumsal kimlik rehberleri ile benzersiz kimliğinizi tanımlıyoruz."
      },
         {
       icon: (
         <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
         </svg>
       ),
       title: "Web Tasarım & Geliştirme",
       description: "Modern ve kullanıcı dostu web siteleri tasarlayıp geliştiriyoruz."
     },
         {
       icon: (
         <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
         </svg>
       ),
       title: "Grafik Tasarım",
       description: "Etkileyici görsel materyaller ve yaratıcı tasarımlar oluşturuyoruz."
     },
         {
       icon: (
         <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
         </svg>
       ),
       title: "Hareketli Grafik & Animasyon",
       description: "Dinamik animasyonlar ve hareketli grafikler ile içeriklerinizi canlandırıyoruz."
     },
         {
       icon: (
         <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
         </svg>
       ),
       title: "Fotoğraf & Video Çekimi",
       description: "Profesyonel fotoğraf ve video çekimleri ile markanızı görselleştiriyoruz."
     },
         {
       icon: (
         <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
       ),
       title: "Yaratıcı Danışmanlık",
       description: "Markanızın yaratıcı stratejilerini geliştirmek için uzman danışmanlık hizmeti sunuyoruz."
     }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-12 lg:py-20 px-4 relative overflow-hidden bg-black">
      {/* Background glow effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        {/* Sol üstten beyaz blur */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
        >
          {services.map((service, index) => (
                                       <motion.div
                key={index}
                variants={cardVariants}
                                className="bg-transparent backdrop-blur-xl rounded-2xl p-6 lg:p-8 text-center border border-gray-700/50 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 relative overflow-hidden group"
              >
                                {/* Sol üstten beyaz blur - her kartta */}
                                <div className="absolute top-0 left-0 w-40 h-40 bg-white/15 rounded-full blur-3xl" />
                                
                                {/* Subtle hover glow effect */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                                {/* Icon */}
                <div className="flex justify-center mb-3 lg:mb-4 relative z-10">
                  <div className="text-white p-1 lg:p-2 rounded-full transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
               
                              {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-3 relative z-10">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/80 text-base lg:text-lg leading-relaxed relative z-10">
                  {service.description}
                </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
                         <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors duration-300">
               Ücretsiz
             </button>
             <span className="text-white text-lg">
               Harika bir şeyler birlikte yapalım.
             </span>
          </div>
          
                     <Link 
             href="/contact" 
             className="text-white underline hover:text-gray-300 transition-colors duration-300 font-medium"
           >
             Ücretsiz Teklif Al
           </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
