"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import CreativeFlowSection from '../../components/CreativeFlowSection';
import Footer from '../../components/Footer';

const AcikRizaOnayiPage = () => {
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
                <span className="block">Açık Rıza</span>
                <span className="block">Onayı</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Kişisel verilerinizin işlenmesi için açık rızanız hakkında detaylı bilgi.
              </p>

              {/* Breadcrumb */}
              <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/legal" className="hover:text-white transition-colors">Yasal</Link>
                <span>/</span>
                <span className="text-white">Açık Rıza Onayı</span>
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
                  <h2 className="text-3xl font-bold text-white mb-8">Açık Rıza Onayı</h2>
                  
                  <div className="space-y-6 text-white/80 leading-relaxed">
                    <p>
                      <strong className="text-white">6698 Sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")</strong> uyarınca, 
                      kişisel verilerinizin işlenmesi için açık rızanızı almamız gerekmektedir.
                    </p>

                    <div className="p-6 bg-white/10 rounded-lg border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">Açık Rıza Nedir?</h3>
                      <p>
                        Açık rıza, belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rızadır. 
                        Bu rıza, kişisel verilerinizin işlenmesi için gerekli olan yasal dayanaklardan biridir.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">1. Veri Sorumlusu</h3>
                      <p>
                        Kişisel verilerinizin veri sorumlusu, <strong className="text-white">Nora Yapım</strong> firmasıdır.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">2. Açık Rıza Kapsamında İşlenen Veriler</h3>
                      <p>Aşağıdaki kişisel verileriniz açık rızanıza dayanılarak işlenmektedir:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Ad, soyad, e-posta adresi, telefon numarası</li>
                        <li>İletişim tercihleri ve geçmişi</li>
                        <li>Web sitesi kullanım verileri</li>
                        <li>Pazarlama ve tanıtım amaçlı veriler</li>
                        <li>Müşteri deneyimi ve memnuniyet verileri</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">3. İşleme Amaçları</h3>
                      <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Hizmet kalitesinin artırılması</li>
                        <li>Müşteri memnuniyetinin sağlanması</li>
                        <li>Pazarlama ve tanıtım faaliyetlerinin yürütülmesi</li>
                        <li>İletişim faaliyetlerinin gerçekleştirilmesi</li>
                        <li>Yeni hizmet ve ürünlerin geliştirilmesi</li>
                        <li>Müşteri ilişkilerinin yönetimi</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">4. Veri Aktarımı</h3>
                      <p>
                        Açık rızanız kapsamında toplanan kişisel verileriniz, yukarıda belirtilen amaçların 
                        gerçekleştirilmesi doğrultusunda aşağıdaki taraflarla paylaşılabilir:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Hizmet aldığımız tedarikçiler</li>
                        <li>İş ortaklarımız</li>
                        <li>Grup şirketlerimiz</li>
                        <li>Pazarlama ve iletişim ajansları</li>
                        <li>Yasal yükümlülükler gereği yetkili kamu kurumları</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">5. Rızanızın Kapsamı</h3>
                      <p>
                        Bu açık rıza onayı ile aşağıdaki işlemler için rızanızı vermektesiniz:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Kişisel verilerinizin toplanması</li>
                        <li>Kişisel verilerinizin kaydedilmesi</li>
                        <li>Kişisel verilerinizin saklanması</li>
                        <li>Kişisel verilerinizin işlenmesi</li>
                        <li>Kişisel verilerinizin aktarılması</li>
                        <li>Kişisel verilerinizin sınıflandırılması</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">6. Rızanızı Geri Alma Hakkı</h3>
                      <p>
                        KVKK'nın 11. maddesi uyarınca, açık rızanızı istediğiniz zaman geri alabilirsiniz. 
                        Rızanızı geri almanız durumunda, kişisel verileriniz rızanızın geri alındığı tarihten 
                        itibaren işlenmeyecek ve mevcut verileriniz silinecektir.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">7. Rıza Geri Alma Yöntemleri</h3>
                      <p>
                        Açık rızanızı geri almak için aşağıdaki yöntemlerden birini kullanabilirsiniz:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>E-posta: kvkk@norayapim.com</li>
                        <li>Telefon: +90 (555) 123 45 67</li>
                        <li>Yazılı başvuru: [Firma Adresi]</li>
                        <li>Web sitesi üzerinden: İletişim formu</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">8. Rıza Verilmemesi Durumu</h3>
                      <p>
                        Açık rızanızı vermemeniz durumunda, yukarıda belirtilen amaçlarla kişisel verileriniz 
                        işlenmeyecektir. Ancak bu durum, bazı hizmetlerimizden yararlanmanızı kısıtlayabilir.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">9. Güncellemeler</h3>
                      <p>
                        Bu açık rıza onayı, mevzuatta yapılacak değişiklikler veya iş süreçlerimizde yapılacak 
                        güncellemeler doğrultusunda değiştirilebilir. Güncel metin her zaman web sitemizde 
                        yayınlanacaktır.
                      </p>
                    </div>

                    <div className="mt-8 p-6 bg-white/10 rounded-lg border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">Onay Beyanı</h3>
                      <p className="text-white/90">
                        Yukarıda yer alan bilgileri okudum ve anladım. Kişisel verilerimin yukarıda belirtilen 
                        amaçlarla işlenmesine açık rıza veriyorum. Bu rızamı istediğim zaman geri alabileceğimi 
                        biliyorum.
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

export default AcikRizaOnayiPage;
