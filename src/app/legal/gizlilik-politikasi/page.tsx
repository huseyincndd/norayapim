"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import CreativeFlowSection from '../../components/CreativeFlowSection';
import Footer from '../../components/Footer';

const GizlilikPolitikasiPage = () => {
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
                <span className="block">Gizlilik</span>
                <span className="block">Politikası</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Kişisel verilerinizin korunması ve gizliliğiniz hakkında detaylı bilgi.
              </p>

              {/* Breadcrumb */}
              <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/legal" className="hover:text-white transition-colors">Yasal</Link>
                <span>/</span>
                <span className="text-white">Gizlilik Politikası</span>
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
                  <h2 className="text-3xl font-bold text-white mb-8">Gizlilik Politikası</h2>
                  
                  <div className="space-y-6 text-white/80 leading-relaxed">
                    <p>
                      <strong className="text-white">Nora Yapım</strong> olarak, gizliliğinizi korumaya ve kişisel verilerinizin 
                      güvenliğini sağlamaya büyük önem veriyoruz. Bu gizlilik politikası, web sitemizi ziyaret 
                      ettiğinizde veya hizmetlerimizi kullandığınızda hangi bilgileri topladığımızı, 
                      nasıl kullandığımızı ve koruduğumuzu açıklamaktadır.
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">1. Toplanan Bilgiler</h3>
                      <p>Aşağıdaki bilgileri toplayabiliriz:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Kişisel Bilgiler:</strong> Ad, soyad, e-posta adresi, telefon numarası</li>
                        <li><strong className="text-white">İletişim Bilgileri:</strong> Adres, şirket bilgileri</li>
                        <li><strong className="text-white">Teknik Bilgiler:</strong> IP adresi, tarayıcı türü, işletim sistemi</li>
                        <li><strong className="text-white">Kullanım Verileri:</strong> Sayfa ziyaretleri, tıklama verileri, oturum süreleri</li>
                        <li><strong className="text-white">Çerez Verileri:</strong> Tercihler, oturum bilgileri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">2. Bilgilerin Kullanım Amaçları</h3>
                      <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Hizmetlerimizi sağlamak ve iyileştirmek</li>
                        <li>Müşteri desteği ve iletişim</li>
                        <li>Web sitesi performansını analiz etmek</li>
                        <li>Güvenliği sağlamak ve dolandırıcılığı önlemek</li>
                        <li>Yasal yükümlülükleri yerine getirmek</li>
                        <li>Pazarlama ve tanıtım faaliyetleri (izin verilmesi durumunda)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">3. Bilgi Paylaşımı</h3>
                      <p>
                        Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Açık rızanızın bulunması</li>
                        <li>Yasal zorunluluklar</li>
                        <li>Hizmet sağlayıcılarımızla (veri işleme sözleşmeleri kapsamında)</li>
                        <li>İş ortaklarımızla (gerekli olduğunda)</li>
                        <li>Güvenlik ve dolandırıcılık önleme amaçlı</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">4. Çerezler ve Benzer Teknolojiler</h3>
                      <p>
                        Web sitemizde çerezler ve benzer teknolojiler kullanılmaktadır. Bu teknolojiler:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Web sitesi işlevselliğini sağlamak</li>
                        <li>Kullanıcı deneyimini iyileştirmek</li>
                        <li>Analitik ve performans verilerini toplamak</li>
                        <li>Kişiselleştirilmiş içerik sunmak</li>
                        <li>Güvenliği artırmak</li>
                      </ul>
                      <p className="mt-4">
                        Çerez tercihlerinizi tarayıcı ayarlarından yönetebilirsiniz. Ancak bazı çerezler 
                        web sitesinin düzgün çalışması için gereklidir.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">5. Veri Güvenliği</h3>
                      <p>
                        Kişisel verilerinizin güvenliği için aşağıdaki önlemleri alıyoruz:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>SSL şifreleme ve güvenli iletişim protokolleri</li>
                        <li>Düzenli güvenlik değerlendirmeleri</li>
                        <li>Erişim kontrolü ve yetkilendirme</li>
                        <li>Veri yedekleme ve felaket kurtarma</li>
                        <li>Çalışan eğitimleri ve farkındalık programları</li>
                        <li>Fiziksel ve teknik güvenlik önlemleri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">6. Veri Saklama Süreleri</h3>
                      <p>
                        Kişisel verilerinizi, toplama amacına uygun olarak gerekli süre boyunca saklarız. 
                        Bu süreler:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Müşteri verileri: Hizmet süresi + yasal saklama süreleri</li>
                        <li>İletişim verileri: İletişim süresi + 2 yıl</li>
                        <li>Teknik veriler: 1-2 yıl</li>
                        <li>Çerez verileri: Çerez türüne göre değişken</li>
                        <li>Yasal yükümlülükler: İlgili mevzuat gereği</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">7. Kullanıcı Hakları</h3>
                      <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                        <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                        <li>Kişisel verilerinizin işlenme amacını öğrenme</li>
                        <li>Kişisel verilerinizin düzeltilmesini isteme</li>
                        <li>Kişisel verilerinizin silinmesini isteme</li>
                        <li>Kişisel verilerinizin işlenmesine itiraz etme</li>
                        <li>Zararın giderilmesini talep etme</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">8. Üçüncü Taraf Hizmetler</h3>
                      <p>
                        Web sitemizde aşağıdaki üçüncü taraf hizmetler kullanılmaktadır:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Google Analytics:</strong> Web sitesi analizi</li>
                        <li><strong className="text-white">Google Fonts:</strong> Yazı tipi hizmeti</li>
                        <li><strong className="text-white">Sosyal Medya Eklentileri:</strong> Sosyal medya entegrasyonu</li>
                        <li><strong className="text-white">Ödeme İşlemcileri:</strong> Güvenli ödeme işlemleri</li>
                      </ul>
                      <p className="mt-4">
                        Bu hizmetlerin kendi gizlilik politikaları bulunmaktadır. Bu politikaları 
                        incelemenizi öneririz.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">9. Çocukların Gizliliği</h3>
                      <p>
                        Web sitemiz 13 yaş altı çocuklardan bilerek kişisel bilgi toplamaz. 
                        13 yaş altı bir çocuk olduğunuzu düşünüyorsanız ve kişisel bilgilerinizi 
                        sağladıysanız, lütfen bizimle iletişime geçin.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">10. Uluslararası Veri Transferi</h3>
                      <p>
                        Kişisel verileriniz, hizmet sağlayıcılarımızın bulunduğu ülkelere 
                        aktarılabilir. Bu durumda, uygun güvenlik önlemleri alınır ve 
                        yasal gerekliliklere uyulur.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">11. Politika Değişiklikleri</h3>
                      <p>
                        Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler 
                        olduğunda web sitemizde duyurulacak ve gerekirse e-posta ile bilgilendirme 
                        yapılacaktır.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">12. İletişim</h3>
                      <p>
                        Gizlilik politikamızla ilgili sorularınız için aşağıdaki kanallardan 
                        bizimle iletişime geçebilirsiniz:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>E-posta: privacy@norayapim.com</li>
                        <li>Telefon: +90 (555) 123 45 67</li>
                        <li>Adres: [Firma Adresi]</li>
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

export default GizlilikPolitikasiPage;
