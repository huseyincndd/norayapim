"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import CreativeFlowSection from '../../components/CreativeFlowSection';
import Footer from '../../components/Footer';

const AydinlatmaMetniPage = () => {
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
                <span className="block">Aydınlatma</span>
                <span className="block">Metni</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Kişisel verilerinizin işlenmesi hakkında detaylı bilgi ve haklarınız.
              </p>

              {/* Breadcrumb */}
              <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/legal" className="hover:text-white transition-colors">Yasal</Link>
                <span>/</span>
                <span className="text-white">Aydınlatma Metni</span>
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
                  <h2 className="text-3xl font-bold text-white mb-8">Kişisel Verilerin Korunması Hakkında Aydınlatma Metni</h2>
                  
                  <div className="space-y-6 text-white/80 leading-relaxed">
                    <p>
                      <strong className="text-white">6698 Sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")</strong> uyarınca, 
                      <strong className="text-white">Fortis Yapım</strong> olarak, veri sorumlusu sıfatıyla, kişisel verilerinizin 
                      işlenmesi hakkında sizi aşağıdaki konularda aydınlatmayı amaçlamaktayız.
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">1. Veri Sorumlusu</h3>
                      <p>
                        Kişisel verilerinizin veri sorumlusu, <strong className="text-white">Fortis Yapım</strong> firmasıdır.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">2. Kişisel Verilerin İşlenme Amaçları</h3>
                      <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Hizmet kalitesinin artırılması ve müşteri memnuniyetinin sağlanması</li>
                        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                        <li>İletişim faaliyetlerinin yürütülmesi</li>
                        <li>Pazarlama ve tanıtım faaliyetlerinin gerçekleştirilmesi</li>
                        <li>İş süreçlerinin yönetimi ve geliştirilmesi</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">3. İşlenen Kişisel Veri Kategorileri</h3>
                      <p>Aşağıdaki kişisel veri kategorileri işlenmektedir:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Kimlik bilgileri (ad, soyad, TC kimlik numarası vb.)</li>
                        <li>İletişim bilgileri (telefon, e-posta, adres vb.)</li>
                        <li>Müşteri işlem bilgileri</li>
                        <li>İşlem güvenliği bilgileri</li>
                        <li>Pazarlama bilgileri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">4. Kişisel Verilerin Aktarılması</h3>
                      <p>
                        Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, 
                        hizmet aldığımız tedarikçilere, iş ortaklarımıza, grup şirketlerimize ve yetkili 
                        kamu kurum ve kuruluşlarına aktarılabilecektir.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
                      <p>
                        Kişisel verileriniz, elektronik ortamda, fiziki ortamda veya üçüncü kişilerden 
                        toplanmaktadır. Bu veriler, KVKK'nın 5. maddesinde belirtilen hukuki sebeplere 
                        dayanılarak işlenmektedir.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">6. KVKK Kapsamındaki Haklarınız</h3>
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
                      <h3 className="text-xl font-semibold text-white mb-4">7. Başvuru Hakkı</h3>
                      <p>
                        Yukarıda belirtilen haklarınızı kullanmak için, kimlik doğrulama yöntemlerinden 
                        birini kullanarak aşağıdaki kanallardan başvurabilirsiniz:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>E-posta: fortisfilmtr@gmail.com</li>
                        <li>Adres: [Firma Adresi]</li>
                        <li>Telefon: +90 (555) 123 45 67</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">8. Güncellemeler</h3>
                      <p>
                        Bu aydınlatma metni, mevzuatta yapılacak değişiklikler veya iş süreçlerimizde 
                        yapılacak güncellemeler doğrultusunda güncellenebilir. Güncel metin her zaman 
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

export default AydinlatmaMetniPage;
