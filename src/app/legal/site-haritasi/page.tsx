"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import CreativeFlowSection from '../../components/CreativeFlowSection';
import Footer from '../../components/Footer';

const SiteHaritasiPage = () => {
  const siteStructure = [
    {
      title: "Ana Sayfa",
      path: "/",
      description: "Nora Yapım ana sayfası - Video prodüksiyon ve yaratıcı ajans hizmetleri"
    },
    {
      title: "Hakkımızda",
      path: "/about",
      description: "Şirket hakkında bilgi, misyon, vizyon ve değerlerimiz"
    },
    {
      title: "Hizmetler",
      path: "/services",
      description: "Video prodüksiyon, reklam filmi, kurumsal video ve dijital içerik hizmetleri"
    },
    {
      title: "Setten Kareler",
      path: "/settenkareler",
      description: "Çekim setlerinden özel kareler ve proje galerisi"
    },
    {
      title: "Blog",
      path: "/blog",
      description: "Video prodüksiyon, sinema ve yaratıcı endüstri hakkında makaleler"
    },
    {
      title: "İletişim",
      path: "/contact",
      description: "İletişim bilgileri ve iletişim formu"
    }
  ];

  const legalPages = [
    {
      title: "Aydınlatma Metni",
      path: "/legal/aydinlatma-metni",
      description: "Kişisel verilerin korunması hakkında aydınlatma metni"
    },
    {
      title: "Açık Rıza Onayı",
      path: "/legal/acik-riza-onayi",
      description: "Kişisel verilerin işlenmesi için açık rıza onayı"
    },
    {
      title: "KVKK Politikası",
      path: "/legal/kvkk-politikasi",
      description: "Kişisel verilerin korunması kanunu politikası"
    },
    {
      title: "BGYS Politikası",
      path: "/legal/bgys-politikasi",
      description: "Bilgi güvenliği yönetim sistemi politikası"
    },
    {
      title: "KVKK Başvuru Formu",
      path: "/legal/kvkk-basvuru-formu",
      description: "Kişisel verilerle ilgili başvuru formu"
    },
    {
      title: "Gizlilik Politikası",
      path: "/legal/gizlilik-politikasi",
      description: "Gizlilik ve veri koruma politikası"
    },
    {
      title: "Çerez Politikası",
      path: "/legal/cerez-politikasi",
      description: "Çerezler ve benzer teknolojiler hakkında politika"
    },
    {
      title: "Site Haritası",
      path: "/legal/site-haritasi",
      description: "Web sitesi yapısı ve sayfa listesi"
    }
  ];

  const serviceCategories = [
    {
      title: "Video Prodüksiyon",
      items: [
        "Kurumsal Video",
        "Reklam Filmi",
        "Tanıtım Videosu",
        "Event Videosu",
        "Ürün Videosu"
      ]
    },
    {
      title: "Dijital İçerik",
      items: [
        "Sosyal Medya İçerikleri",
        "Web Sitesi Videoları",
        "Eğitim Videoları",
        "Animasyon",
        "Motion Graphics"
      ]
    },
    {
      title: "Post Prodüksiyon",
      items: [
        "Video Düzenleme",
        "Renk Düzenleme",
        "Ses Tasarımı",
        "Özel Efektler",
        "Alt Yazı ve Dublaj"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        {/* Animated Background Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
        {/* White Blur Effects */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <Header />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://www.sineplusakademi.com/wp-content/themes/yootheme/cache/f6/freelance-film-production-f608a5c7.jpeg"
              alt="Legal Page Background"
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-black/85" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl pt-8 lg:pt-16 mx-0 lg:mx-auto"
            >
              {/* Small label + line */}
              <div className="flex items-center gap-6 mb-6">
                <span className="uppercase tracking-wider text-sm text-white/80">Legal</span>
                <span className="h-px w-28 bg-white/40" />
              </div>

              {/* Big headline */}
              <h1 className="uppercase font-extrabold text-white leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block">Site</span>
                <span className="block">Haritası</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Web sitemizin tüm sayfalarını ve içeriklerini keşfedin.
              </p>

              {/* Breadcrumb */}
              <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/legal" className="hover:text-white transition-colors">Yasal</Link>
                <span>/</span>
                <span className="text-white">Site Haritası</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Slogan Slider */}
        <div className="pb-2 lg:pb-3 bg-black">
          <CreativeFlowSection 
            duration={40} 
            className="py-0" 
            noBg={true}
          />
        </div>

        {/* Content Section */}
        <section className="pt-8 lg:pt-12 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="space-y-12">
                {/* Ana Sayfalar */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8">Ana Sayfalar</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteStructure.map((page, index) => (
                      <motion.div
                        key={page.path}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Link href={page.path} className="block">
                          <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                              {page.title}
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                              {page.description}
                            </p>
                            <div className="mt-4 flex items-center text-white/60 text-sm group-hover:text-white transition-colors">
                              <span>Sayfayı Ziyaret Et</span>
                              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hizmet Kategorileri */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8">Hizmet Kategorileri</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {serviceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 bg-white/5 rounded-lg border border-white/10"
                      >
                        <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-white/70 text-sm flex items-center">
                              <span className="w-2 h-2 bg-white/40 rounded-full mr-3"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Yasal Sayfalar */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8">Yasal Sayfalar</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {legalPages.map((page, index) => (
                      <motion.div
                        key={page.path}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <Link href={page.path} className="block">
                          <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                              {page.title}
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                              {page.description}
                            </p>
                            <div className="mt-4 flex items-center text-white/60 text-sm group-hover:text-white transition-colors">
                              <span>Detayları Görüntüle</span>
                              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hızlı Erişim */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8">Hızlı Erişim</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link href="/contact" className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center group">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">İletişim</span>
                    </Link>
                    
                    <Link href="/services" className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center group">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Hizmetler</span>
                    </Link>
                    
                    <Link href="/about" className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center group">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Hakkımızda</span>
                    </Link>
                    
                    <Link href="/blog" className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center group">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Blog</span>
                    </Link>
                  </div>
                </div>

                {/* İletişim Bilgileri */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8">İletişim Bilgileri</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
                      <p className="text-white/70">+90 (555) 123 45 67</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">E-posta</h3>
                      <p className="text-white/70">info@norayapim.com</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Adres</h3>
                      <p className="text-white/70">İstanbul, Türkiye</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default SiteHaritasiPage;
