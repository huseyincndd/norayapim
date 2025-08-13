"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const JourneySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Top Section - Text and Image */}
        <div className="mb-20">
          <motion.div 
            className="bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-5">
              {/* Left Panel - Text and Button */}
              <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-white">Yaratıcı yolculuğumuz </span>
                  <span className="text-white">sizin ilhamınız</span>
                </h2>
                
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  16 yılı aşkın deneyimimizle, sanat ve tutkuyu rehber edinerek, film, dizi ve reklam prodüksiyonu alanında özgün ve yenilikçi projeler üretiyoruz.
                </p>
                
                <div className="flex items-center gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    İletişime Geçin
                  </Link>
                  <button className="w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="w-5 h-5 text-black transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Panel - Image */}
              <div className="lg:col-span-3 relative h-[320px] lg:h-[380px]">
                <img
                  src="https://www.adobe.com/vn_vi/creativecloud/video/discover/media_159a1e642fe84ef617323500d5103b30e30e8bacf.png?width=750&format=png&optimize=medium"
                  alt="Prodüksiyon ekibi çalışması"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay from right edge */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Section - Three Feature Columns */}
        <div className="relative grid md:grid-cols-3 gap-8 mb-20">
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/20"></div>
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/20"></div>
          
          {/* Column 1 - Yaratıcı Vizyon */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Yaratıcı Vizyon</h3>
            <p className="text-white/80 leading-relaxed">
              Her projede özgün ve yenilikçi yaklaşımlarla, markaların hedeflerine uygun yaratıcı çözümler sunuyoruz.
            </p>
          </motion.div>

          {/* Column 2 - Profesyonel Ekip */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Profesyonel Ekip</h3>
            <p className="text-white/80 leading-relaxed">
              Yetkin ekibimiz ve organize çalışma anlayışımızla, sektörde kalıcı bir üretim standardı oluşturuyoruz.
            </p>
          </motion.div>

          {/* Column 3 - Teknolojik Altyapı */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Teknolojik Altyapı</h3>
            <p className="text-white/80 leading-relaxed">
              Gelişen teknoloji ve yaratıcı yaklaşımlarla desteklenen tecrübemiz, unutulmaz görsel deneyimler sunuyor.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section - Statistics */}
        <motion.div 
          className="bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Desktop çizgileri */}
            <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-white/20"></div>
            <div className="hidden md:block absolute left-2/4 top-0 bottom-0 w-px bg-white/20"></div>
            <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-px bg-white/20"></div>
            {/* Mobil çizgileri */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
            <div className="md:hidden absolute top-1/2 left-0 right-0 h-px bg-white/20"></div>
            
            {/* Stat 1 - Reklam Filmleri */}
            <div className="text-left">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">%39</div>
              <p className="text-white/80 text-sm">Reklam filmleri prodüksiyonu</p>
            </div>

            {/* Stat 2 - Dizi Projeleri */}
            <div className="text-left">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">%32</div>
              <p className="text-white/80 text-sm">Dizi projeleri ve yapımları</p>
            </div>

            {/* Stat 3 - Sinema Filmleri */}
            <div className="text-left">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">%11</div>
              <p className="text-white/80 text-sm">Sinema filmi prodüksiyonu</p>
            </div>

            {/* Stat 4 - Belgesel & TV */}
            <div className="text-left">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">%18</div>
              <p className="text-white/80 text-sm">Belgesel ve TV programları</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default JourneySection;
