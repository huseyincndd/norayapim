"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import CreativeFlowSection from '../../components/CreativeFlowSection';
import Footer from '../../components/Footer';

const BgysPolitikasiPage = () => {
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
                <span className="block">BGYS</span>
                <span className="block">Politikası</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Bilgi Güvenliği Yönetim Sistemi politikamız ve güvenlik standartlarımız.
              </p>

              {/* Breadcrumb */}
              <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/legal" className="hover:text-white transition-colors">Yasal</Link>
                <span>/</span>
                <span className="text-white">BGYS Politikası</span>
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
                  <h2 className="text-3xl font-bold text-white mb-8">Bilgi Güvenliği Yönetim Sistemi (BGYS) Politikası</h2>
                  
                  <div className="space-y-6 text-white/80 leading-relaxed">
                    <p>
                      <strong className="text-white">Fortis Yapım</strong> olarak, bilgi güvenliği bizim için en önemli önceliklerden 
                      biridir. Bu politika, ISO 27001 standardına uygun olarak geliştirilmiş Bilgi Güvenliği 
                      Yönetim Sistemi (BGYS) kapsamında bilgi varlıklarımızın korunması için temel ilkeleri 
                      ve uygulamaları tanımlamaktadır.
                    </p>

                    <div className="p-6 bg-white/10 rounded-lg border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">BGYS Nedir?</h3>
                      <p>
                        Bilgi Güvenliği Yönetim Sistemi (BGYS), kurumsal bilgi varlıklarının güvenliğini 
                        sağlamak amacıyla oluşturulan, uygulanan, işletilen, izlenen, gözden geçirilen, 
                        sürdürülen ve iyileştirilen sistematik yaklaşımdır.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">1. Politika Kapsamı</h3>
                      <p>
                        Bu politika, <strong className="text-white">Fortis Yapım</strong> bünyesinde bulunan tüm bilgi varlıklarını, 
                        bilgi sistemlerini, ağ altyapısını, uygulamaları ve verileri kapsamaktadır. 
                        Tüm çalışanlar, iş ortakları, tedarikçiler ve üçüncü taraflar bu politika kapsamında 
                        bilgi güvenliği kurallarına uymakla yükümlüdür.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">2. Bilgi Güvenliği Hedefleri</h3>
                      <p>BGYS kapsamında aşağıdaki hedeflere ulaşmayı amaçlıyoruz:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Bilgi varlıklarının gizliliğini, bütünlüğünü ve erişilebilirliğini korumak</li>
                        <li>İş sürekliliğini sağlamak ve bilgi güvenliği olaylarından kaynaklanan riskleri minimize etmek</li>
                        <li>Yasal ve düzenleyici gerekliliklere uyum sağlamak</li>
                        <li>Müşteri güvenini korumak ve artırmak</li>
                        <li>Rekabet avantajı elde etmek ve sürdürmek</li>
                        <li>Çalışanların bilgi güvenliği farkındalığını artırmak</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">3. Bilgi Güvenliği İlkeleri</h3>
                      <p>Aşağıdaki temel ilkelere uygun hareket ediyoruz:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Gizlilik (Confidentiality):</strong> Bilgilerin yetkisiz kişiler tarafından erişilemez olması</li>
                        <li><strong className="text-white">Bütünlük (Integrity):</strong> Bilgilerin doğruluğunun ve tamlığının korunması</li>
                        <li><strong className="text-white">Erişilebilirlik (Availability):</strong> Bilgilere yetkili kişiler tarafından gerektiğinde erişilebilmesi</li>
                        <li><strong className="text-white">Sorumluluk (Accountability):</strong> Bilgi güvenliği ihlallerinden sorumlu kişilerin belirlenebilmesi</li>
                        <li><strong className="text-white">Güvenilirlik (Reliability):</strong> Bilgilerin güvenilir ve doğru olması</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">4. Bilgi Varlıkları</h3>
                      <p>Korunan bilgi varlıklarımız şunlardır:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Yazılım Varlıkları:</strong> Uygulama yazılımları, sistem yazılımları, geliştirme araçları</li>
                        <li><strong className="text-white">Donanım Varlıkları:</strong> Bilgisayarlar, sunucular, ağ cihazları, depolama sistemleri</li>
                        <li><strong className="text-white">Veri Varlıkları:</strong> Müşteri verileri, iş verileri, yedekler, arşivler</li>
                        <li><strong className="text-white">İnsan Varlıkları:</strong> Çalışanlar, yöneticiler, iş ortakları</li>
                        <li><strong className="text-white">Fiziksel Varlıklar:</strong> Ofisler, veri merkezleri, güvenlik sistemleri</li>
                        <li><strong className="text-white">Hizmet Varlıkları:</strong> İletişim hizmetleri, güç kaynağı, soğutma sistemleri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">5. Güvenlik Kontrolleri</h3>
                      <p>Bilgi güvenliğini sağlamak için aşağıdaki kontrol önlemleri uygulanmaktadır:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Erişim Kontrolü:</strong> Kullanıcı kimlik doğrulama, yetkilendirme, erişim yönetimi</li>
                        <li><strong className="text-white">Ağ Güvenliği:</strong> Güvenlik duvarları, VPN, şifreleme, ağ izleme</li>
                        <li><strong className="text-white">Uygulama Güvenliği:</strong> Güvenli kod geliştirme, güvenlik testleri, güncellemeler</li>
                        <li><strong className="text-white">Fiziksel Güvenlik:</strong> Erişim kontrolü, video gözetimi, çevre güvenliği</li>
                        <li><strong className="text-white">İnsan Kaynakları Güvenliği:</strong> Arka plan kontrolleri, eğitimler, sözleşmeler</li>
                        <li><strong className="text-white">İş Sürekliliği:</strong> Yedekleme, felaket kurtarma, iş sürekliliği planları</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">6. Risk Yönetimi</h3>
                      <p>
                        Bilgi güvenliği riskleri düzenli olarak değerlendirilir ve yönetilir. Risk değerlendirme 
                        süreci şu adımları içerir:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Risk tanımlama ve kategorilendirme</li>
                        <li>Risk analizi ve değerlendirme</li>
                        <li>Risk işleme stratejilerinin belirlenmesi</li>
                        <li>Kontrol önlemlerinin uygulanması</li>
                        <li>Risk izleme ve gözden geçirme</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">7. Olay Yönetimi</h3>
                      <p>
                        Bilgi güvenliği olayları için kapsamlı bir olay yönetimi süreci bulunmaktadır:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Olay tespit ve raporlama</li>
                        <li>Olay sınıflandırma ve önceliklendirme</li>
                        <li>Müdahale ve kurtarma</li>
                        <li>Olay analizi ve öğrenme</li>
                        <li>İyileştirme önlemleri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">8. Uyum ve Denetim</h3>
                      <p>
                        BGYS'nin etkinliği düzenli olarak denetlenir ve değerlendirilir. Bu süreç şunları içerir:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>İç denetimler ve değerlendirmeler</li>
                        <li>Dış denetimler ve sertifikasyon</li>
                        <li>Yasal ve düzenleyici uyum kontrolleri</li>
                        <li>Sürekli iyileştirme faaliyetleri</li>
                        <li>Yönetim gözden geçirme toplantıları</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">9. Eğitim ve Farkındalık</h3>
                      <p>
                        Tüm çalışanlar için düzenli bilgi güvenliği eğitimleri ve farkındalık programları 
                        düzenlenmektedir. Bu programlar şunları içerir:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Temel bilgi güvenliği eğitimleri</li>
                        <li>Güvenlik politikaları ve prosedürleri</li>
                        <li>Sosyal mühendislik farkındalığı</li>
                        <li>Veri koruma ve gizlilik</li>
                        <li>Olay raporlama ve müdahale</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">10. İletişim ve Başvuru</h3>
                      <p>
                        Bilgi güvenliği ile ilgili sorularınız ve başvurularınız için aşağıdaki kanalları 
                        kullanabilirsiniz:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>E-posta: fortisfilmtr@gmail.com</li>
                        <li>Telefon: +90 (555) 123 45 67</li>
                        <li>Güvenlik olayları: fortisfilmtr@gmail.com</li>
                        <li>Web sitesi: İletişim formu</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">11. Politika Güncellemeleri</h3>
                      <p>
                        Bu politika, teknolojik gelişmeler, yasal değişiklikler, iş süreçlerindeki güncellemeler 
                        veya güvenlik tehditlerindeki değişiklikler doğrultusunda güncellenebilir. 
                        Güncel politika her zaman web sitemizde yayınlanacaktır.
                      </p>
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

export default BgysPolitikasiPage;
