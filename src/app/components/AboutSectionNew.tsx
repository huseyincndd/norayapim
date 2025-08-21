"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutSectionNew = () => {
  const stats = [
    { number: "16+", label: "Yıllık Deneyim", description: "2008'den bu yana" },
    { number: "500+", label: "Tamamlanan Proje", description: "Başarılı yapımlar" },
    { number: "81", label: "İlde Çekim", description: "Türkiye geneli" },
    { number: "45K+", label: "Saatlik İçerik", description: "Video prodüksiyonu" }
  ];

  const services = [
    {
      title: "Dizi Yapımı",
      description: "Ulusal kanallar ve dijital platformlar için yüksek kalite standartlarında diziler üretiyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Sinema Filmleri",
      description: "Festival filmleri, bağımsız yapımlar ve geniş kitlelere ulaşan projelerle sektörde fark yaratıyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-1 16h12l-1-16" />
        </svg>
      )
    },
    {
      title: "Reklam Prodüksiyonu",
      description: "Markaların hedef kitlelerine en etkili şekilde ulaşmalarını sağlayan reklam filmleri çekiyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "Post-Prodüksiyon & VFX",
      description: "Kurgu, renk düzenleme, ses miksajı ve VFX alanlarında son teknoloji altyapımızla hizmet veriyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const additionalServices = [
    {
      title: "Belgesel Yapımları",
      description: "Toplumsal konularda farkındalık yaratan belgesel projelerinde uzmanız.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Senaryo Geliştirme",
      description: "Yaratıcı ekibimizle fikir aşamasından yayın aşamasına kadar tüm süreci yönetiyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Prodüksiyon Yönetimi ve Dağıtım",
      description: "Profesyonel prodüksiyon yönetimi ve dağıtım hizmetleri sunuyoruz.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-900/30" />
        
        {/* Animated Grid Lines */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/10 h-full" />
            ))}
          </div>
        </motion.div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Hero Section - Modern ve şık tasarım */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            
            {/* Main content with modern layout */}
            <div className="pl-8 lg:pl-12">
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <span className="text-sm lg:text-base font-medium text-white/60 tracking-wider uppercase">
                  Hakkımızda
                </span>
              </motion.div>

              {/* Main description with enhanced typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed max-w-5xl font-light">
                  İstanbul merkezli uluslararası faaliyet gösteren bir dizi yapım şirketi, sinema yapım firması ve reklam prodüksiyon şirketi olarak sektörde uzun yıllara dayanan deneyime sahiptir.
                </p>
                
                <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-4xl">
                  2008 yılından bu yana televizyon kanalları, dijital platformlar ve markalar için dizi, sinema filmi, reklam filmi, belgesel ve kurumsal içerikler üretiyoruz.
                </p>
              </motion.div>


            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Vizyonumuz</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Türkiye'nin en güvenilir yapım şirketi olmak ve uluslararası arenada ses getiren projelere imza atmak.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Misyonumuz</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              İzleyiciyi etkileyen, estetik açıdan güçlü ve kalıcı yapımlar üretmek. Her projede kalite, yaratıcılık ve teknolojiyi bir arada sunmak.
            </p>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Rakamlarla Nora Yapım</h2>
            <p className="text-white/80 text-lg">Bu rakamlar, sadece işimizi değil, izleyiciyle kurduğumuz güveni ve markaların bize duyduğu bağlılığı da gösteriyor.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Uzmanlık Alanlarımız</h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              2008 yılından bu yana televizyon kanalları, dijital platformlar ve markalar için dizi, sinema filmi, reklam filmi, belgesel ve kurumsal içerikler üretiyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                  <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Services - Tüm hizmetler dahil edildi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">Neler Yapıyoruz</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Yaratıcı fikirleri profesyonel prodüksiyon süreçleriyle birleştiriyoruz
            </h3>
            <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
              Kurulduğumuz günden bu yana amacımız, yaratıcı fikirleri profesyonel prodüksiyon süreçleriyle birleştirerek izleyicilere değerli hikâyeler sunmak oldu. Bugün Nora Yapım, film yapım şirketi denildiğinde akla gelen güvenilir markalardan biridir.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSectionNew;
