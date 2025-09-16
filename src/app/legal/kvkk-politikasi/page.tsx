"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import CreativeFlowSection from '../../components/CreativeFlowSection';
import Footer from '../../components/Footer';

const KvkkPolitikasiPage = () => {
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
                <span className="block">KVKK</span>
                <span className="block">Politikası</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Kişisel Verilerin Korunması Kanunu kapsamında veri işleme politikamız.
              </p>

              {/* Breadcrumb */}
              <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/legal" className="hover:text-white transition-colors">Yasal</Link>
                <span>/</span>
                <span className="text-white">KVKK Politikası</span>
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
                  <h2 className="text-3xl font-bold text-white mb-8">Kişisel Verilerin Korunması Politikası</h2>
                  
                  <div className="space-y-6 text-white/80 leading-relaxed">
                    <p>
                      <strong className="text-white">Fortis Yapım</strong> olarak, kişisel verilerinizin güvenliği bizim için 
                      son derece önemlidir. Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 
                      uyarınca kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">1. Politika Kapsamı</h3>
                      <p>
                        Bu politika, <strong className="text-white">Fortis Yapım</strong> tarafından yürütülen tüm faaliyetlerde 
                        kişisel verilerin işlenmesine ilişkin temel ilkeleri ve uygulamaları kapsamaktadır.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">2. Temel İlkelerimiz</h3>
                      <p>Kişisel verilerinizin işlenmesinde aşağıdaki temel ilkelere uygun hareket ediyoruz:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Hukuka ve dürüstlük kurallarına uygunluk:</strong> Tüm işlemlerimiz yasal düzenlemelere uygun olarak gerçekleştirilir.</li>
                        <li><strong className="text-white">Doğruluk ve güncellik:</strong> Kişisel verilerinizin doğru ve güncel tutulması sağlanır.</li>
                        <li><strong className="text-white">Belirli, açık ve meşru amaçlarla işleme:</strong> Verileriniz sadece belirlenen amaçlar doğrultusunda işlenir.</li>
                        <li><strong className="text-white">İşlendikleri amaçla sınırlı ve ölçülü olma:</strong> Sadece gerekli veriler toplanır ve işlenir.</li>
                        <li><strong className="text-white">İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme:</strong> Verileriniz sadece gerekli süre boyunca saklanır.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">3. Kişisel Veri İşleme Amaçları</h3>
                      <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Hizmet kalitesinin artırılması ve müşteri memnuniyetinin sağlanması</li>
                        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                        <li>İletişim faaliyetlerinin yürütülmesi</li>
                        <li>Pazarlama ve tanıtım faaliyetlerinin gerçekleştirilmesi</li>
                        <li>İş süreçlerinin yönetimi ve geliştirilmesi</li>
                        <li>Müşteri ilişkilerinin yönetimi</li>
                        <li>Güvenlik ve kalite kontrolü</li>
                        <li>Reklam ve pazarlama faaliyetleri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">4. Kişisel Veri Kategorileri</h3>
                      <p>İşlediğimiz kişisel veri kategorileri şunlardır:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Kimlik Bilgileri:</strong> Ad, soyad, TC kimlik numarası, doğum tarihi, cinsiyet</li>
                        <li><strong className="text-white">İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres bilgileri</li>
                        <li><strong className="text-white">Müşteri İşlem Bilgileri:</strong> Sipariş geçmişi, ödeme bilgileri, tercihler</li>
                        <li><strong className="text-white">İşlem Güvenliği Bilgileri:</strong> IP adresi, tarayıcı bilgileri, çerez verileri</li>
                        <li><strong className="text-white">Pazarlama Bilgileri:</strong> İletişim tercihleri, abonelik durumu</li>
                        <li><strong className="text-white">Fiziksel Mekan Güvenliği:</strong> Kamera kayıtları, ziyaretçi kayıtları</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">5. Kişisel Veri Toplama Yöntemleri</h3>
                      <p>Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Web sitesi formları ve iletişim kanalları</li>
                        <li>E-posta, telefon ve sosyal medya iletişimleri</li>
                        <li>Çerezler ve benzer teknolojiler</li>
                        <li>Üçüncü taraf hizmet sağlayıcıları</li>
                        <li>Fiziksel ortamda yapılan başvurular</li>
                        <li>İş ortakları ve tedarikçiler</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">6. Kişisel Veri Aktarımı</h3>
                      <p>
                        Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda 
                        aşağıdaki taraflarla paylaşılabilir:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Hizmet aldığımız tedarikçiler ve iş ortakları</li>
                        <li>Grup şirketlerimiz</li>
                        <li>Pazarlama ve iletişim ajansları</li>
                        <li>Yasal yükümlülükler gereği yetkili kamu kurumları</li>
                        <li>Mahkemeler ve icra müdürlükleri</li>
                        <li>Danışmanlık hizmeti aldığımız kişi ve kuruluşlar</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">7. Kişisel Veri Güvenliği</h3>
                      <p>
                        Kişisel verilerinizin güvenliği için aşağıdaki teknik ve idari tedbirler alınmaktadır:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Veri şifreleme ve güvenli iletişim protokolleri</li>
                        <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
                        <li>Düzenli güvenlik değerlendirmeleri ve testleri</li>
                        <li>Çalışan eğitimleri ve farkındalık programları</li>
                        <li>Veri yedekleme ve felaket kurtarma planları</li>
                        <li>Fiziksel güvenlik önlemleri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">8. Kişisel Veri Saklama Süreleri</h3>
                      <p>
                        Kişisel verileriniz, işlendikleri amaç için gerekli olan süre boyunca saklanır. 
                        Bu süreler, ilgili mevzuat hükümleri ve iş süreçlerimizin gereksinimleri doğrultusunda 
                        belirlenmektedir.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">9. KVKK Kapsamındaki Haklarınız</h3>
                      <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                        <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                        <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                        <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                        <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                        <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                        <li>Kişisel verilerinizin aktarıldığı üçüncü kişilere yukarıda sayılan (e) ve (f) bentleri uyarınca yapılan işlemlerin bildirilmesini isteme</li>
                        <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişiliğiniz aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                        <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">10. Başvuru ve İletişim</h3>
                      <p>
                        Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki kanallardan başvurabilirsiniz:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>E-posta: kvkk@norayapim.com</li>
                        <li>Telefon: +90 (555) 123 45 67</li>
                        <li>Adres: [Firma Adresi]</li>
                        <li>Web sitesi: İletişim formu</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">11. Politika Güncellemeleri</h3>
                      <p>
                        Bu politika, mevzuatta yapılacak değişiklikler, iş süreçlerimizde yapılacak güncellemeler 
                        veya teknolojik gelişmeler doğrultusunda güncellenebilir. Güncel politika her zaman 
                        web sitemizde yayınlanacaktır.
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

export default KvkkPolitikasiPage;
