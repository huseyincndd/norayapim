"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import CreativeFlowSection from '../../components/CreativeFlowSection';
import Footer from '../../components/Footer';

const CerezPolitikasiPage = () => {
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
                <span className="block">Çerez</span>
                <span className="block">Politikası</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Web sitemizde kullanılan çerezler ve benzer teknolojiler hakkında bilgi.
              </p>

              {/* Breadcrumb */}
              <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/legal" className="hover:text-white transition-colors">Yasal</Link>
                <span>/</span>
                <span className="text-white">Çerez Politikası</span>
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
              className="max-w-4xl mx-auto"
            >
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8">Çerez Politikası</h2>
                  
                  <div className="space-y-6 text-white/80 leading-relaxed">
                    <p>
                      <strong className="text-white">Nora Yapım</strong> web sitesi, kullanıcı deneyimini iyileştirmek, 
                      web sitesi performansını analiz etmek ve kişiselleştirilmiş içerik sunmak amacıyla 
                      çerezler ve benzer teknolojiler kullanmaktadır. Bu politika, hangi çerezlerin 
                      kullanıldığını ve nasıl yönetilebileceğini açıklamaktadır.
                    </p>

                    <div className="p-6 bg-white/10 rounded-lg border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">Çerez Nedir?</h3>
                      <p>
                        Çerezler, web sitesini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet, telefon) 
                        kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin sizi tanımasını, 
                        tercihlerinizi hatırlamasını ve kullanıcı deneyimini iyileştirmesini sağlar.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">1. Kullandığımız Çerez Türleri</h3>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <h4 className="text-lg font-semibold text-white mb-2">Zorunlu Çerezler</h4>
                          <p className="text-white/80 text-sm mb-2">
                            Bu çerezler web sitesinin temel işlevlerini yerine getirmesi için gereklidir.
                          </p>
                          <ul className="text-white/70 text-sm space-y-1 ml-4">
                            <li>• Oturum yönetimi ve güvenlik</li>
                            <li>• Dil tercihleri</li>
                            <li>• Form verilerinin geçici saklanması</li>
                            <li>• Çerez tercihlerinin hatırlanması</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <h4 className="text-lg font-semibold text-white mb-2">Analitik Çerezler</h4>
                          <p className="text-white/80 text-sm mb-2">
                            Web sitesi kullanımını analiz etmek ve performansı iyileştirmek için kullanılır.
                          </p>
                          <ul className="text-white/70 text-sm space-y-1 ml-4">
                            <li>• Sayfa ziyaret sayıları</li>
                            <li>• Kullanıcı davranışları</li>
                            <li>• Popüler içerikler</li>
                            <li>• Hata raporları</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <h4 className="text-lg font-semibold text-white mb-2">Fonksiyonel Çerezler</h4>
                          <p className="text-white/80 text-sm mb-2">
                            Gelişmiş işlevsellik ve kişiselleştirme için kullanılır.
                          </p>
                          <ul className="text-white/70 text-sm space-y-1 ml-4">
                            <li>• Kullanıcı tercihleri</li>
                            <li>• Kişiselleştirilmiş içerik</li>
                            <li>• Sosyal medya entegrasyonu</li>
                            <li>• Hatırlatmalar ve bildirimler</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <h4 className="text-lg font-semibold text-white mb-2">Pazarlama Çerezleri</h4>
                          <p className="text-white/80 text-sm mb-2">
                            Reklam ve pazarlama amaçlı kullanılır (sadece izin verilmesi durumunda).
                          </p>
                          <ul className="text-white/70 text-sm space-y-1 ml-4">
                            <li>• Hedefli reklamlar</li>
                            <li>• Sosyal medya reklamları</li>
                            <li>• E-posta pazarlama</li>
                            <li>• Dönüşüm takibi</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">2. Üçüncü Taraf Çerezler</h3>
                      <p>
                        Web sitemizde aşağıdaki üçüncü taraf hizmetlerin çerezleri kullanılmaktadır:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Google Analytics:</strong> Web sitesi analizi ve performans ölçümü</li>
                        <li><strong className="text-white">Google Fonts:</strong> Yazı tipi hizmeti</li>
                        <li><strong className="text-white">YouTube:</strong> Video içerik entegrasyonu</li>
                        <li><strong className="text-white">Sosyal Medya Platformları:</strong> Sosyal medya paylaşım ve takip</li>
                        <li><strong className="text-white">Ödeme İşlemcileri:</strong> Güvenli ödeme işlemleri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">3. Çerez Yönetimi</h3>
                      <p>
                        Çerez tercihlerinizi aşağıdaki yöntemlerle yönetebilirsiniz:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <h4 className="text-lg font-semibold text-white mb-2">Tarayıcı Ayarları</h4>
                          <ul className="text-white/70 text-sm space-y-1">
                            <li>• Chrome: Ayarlar &gt; Gizlilik ve Güvenlik</li>
                            <li>• Firefox: Seçenekler &gt; Gizlilik ve Güvenlik</li>
                            <li>• Safari: Tercihler &gt; Gizlilik</li>
                            <li>• Edge: Ayarlar &gt; Çerezler ve Site İzinleri</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <h4 className="text-lg font-semibold text-white mb-2">Çerez Yönetim Araçları</h4>
                          <ul className="text-white/70 text-sm space-y-1">
                            <li>• Çerez tercihleri paneli</li>
                            <li>• Opt-out linkleri</li>
                            <li>• Tarayıcı eklentileri</li>
                            <li>• Üçüncü taraf araçlar</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">4. Çerez Tercihleri</h3>
                      <p>
                        Web sitemizde çerez tercihlerinizi yönetmek için aşağıdaki seçenekler mevcuttur:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Tüm Çerezleri Kabul Et:</strong> Tüm çerez türlerini kabul eder</li>
                        <li><strong className="text-white">Sadece Zorunlu Çerezler:</strong> Sadece temel işlevsellik için gerekli çerezleri kabul eder</li>
                        <li><strong className="text-white">Özelleştir:</strong> Her çerez kategorisi için ayrı tercih belirler</li>
                        <li><strong className="text-white">Tümünü Reddet:</strong> Tüm isteğe bağlı çerezleri reddeder</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">5. Çerez Süreleri</h3>
                      <p>
                        Çerezler aşağıdaki süreler boyunca cihazınızda saklanır:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Oturum Çerezleri:</strong> Tarayıcı kapatıldığında silinir</li>
                        <li><strong className="text-white">Kalıcı Çerezler:</strong> Belirlenen süre boyunca (genellikle 1-2 yıl)</li>
                        <li><strong className="text-white">Analitik Çerezler:</strong> 1-2 yıl</li>
                        <li><strong className="text-white">Pazarlama Çerezleri:</strong> 1-3 yıl</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">6. Çerezlerin Etkileri</h3>
                      <p>
                        Çerezleri devre dışı bırakmanız durumunda aşağıdaki etkiler olabilir:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Web sitesinin bazı özelliklerinin çalışmaması</li>
                        <li>Kullanıcı tercihlerinin hatırlanmaması</li>
                        <li>Kişiselleştirilmiş içerik gösterilmemesi</li>
                        <li>Analitik verilerin toplanmaması</li>
                        <li>Reklam deneyiminin etkilenmesi</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">7. Mobil Uygulamalar</h3>
                      <p>
                        Mobil uygulamalarımızda da benzer teknolojiler kullanılmaktadır. Bu teknolojiler:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Uygulama performans analizi</li>
                        <li>Kullanıcı davranış takibi</li>
                        <li>Kişiselleştirilmiş içerik</li>
                        <li>Bildirim yönetimi</li>
                        <li>Hata raporlama</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">8. Güncellemeler</h3>
                      <p>
                        Bu çerez politikası, teknolojik gelişmeler, yasal değişiklikler veya 
                        iş süreçlerindeki güncellemeler doğrultusunda değiştirilebilir. 
                        Önemli değişiklikler web sitemizde duyurulacaktır.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">9. İletişim</h3>
                      <p>
                        Çerez politikamızla ilgili sorularınız için aşağıdaki kanallardan 
                        bizimle iletişime geçebilirsiniz:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>E-posta: privacy@norayapim.com</li>
                        <li>Telefon: +90 (555) 123 45 67</li>
                        <li>Web sitesi: İletişim formu</li>
                      </ul>
                    </div>

                    <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
                      <p className="text-sm text-white/70">
                        <strong>Son Güncelleme Tarihi:</strong> {new Date().toLocaleDateString('tr-TR')}
                      </p>
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

export default CerezPolitikasiPage;
