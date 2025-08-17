"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const ServicesGridSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Film Prodüksiyonu",
      description: "Sinema filmleri, kısa filmler ve uzun metrajlı yapımlar için kapsamlı prodüksiyon hizmetleri sunuyoruz."
    },
    {
      icon: (
        <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Dizi Prodüksiyonu",
      description: "Televizyon dizileri için profesyonel prodüksiyon çözümleri. Çekim planlaması ve set yönetimi hizmetleri."
    },
    {
      icon: (
        <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Reklam Prodüksiyonu",
      description: "Markalar için yaratıcı reklam filmleri ve tanıtım videoları. Konsept geliştirmeden final teslime kadar."
    },
    {
      icon: (
        <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "Belgesel Prodüksiyonu",
      description: "Belgesel filmler ve TV programları için özel prodüksiyon hizmetleri. Gerçek hikayeleri görselleştiriyoruz."
    },
    {
      icon: (
        <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "Post-Prodüksiyon",
      description: "Kurgu, montaj, renk düzenleme ve ses prodüksiyonu ile projelerinizi mükemmelliğe taşıyoruz."
    },
    {
      icon: (
        <svg className="w-10 h-10 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Set Yönetimi",
      description: "Profesyonel set yönetimi ve ekip koordinasyonu. Her aşamada titizlikle planlanmış prodüksiyon süreçleri."
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
              {/* Animated Wave Background */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-5"
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
                  className="absolute inset-0 opacity-5"
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
                  className="absolute inset-0 opacity-5"
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
              16 Yıllık Deneyim
            </button>
            <span className="text-white text-lg">
              84 ilde profesyonel prodüksiyon hizmetleri.
            </span>
          </div>
          
          <Link 
            href="/contact" 
            className="text-white underline hover:text-gray-300 transition-colors duration-300 font-medium"
          >
            Proje Teklifi Al
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
