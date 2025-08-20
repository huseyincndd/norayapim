"use client";

import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Nora Yapım hangi alanlarda hizmet veriyor?",
      answer: "Film, dizi, reklam ve belgesel yapımında kapsamlı çözümler sunuyoruz. Senaryo geliştirmeden çekim ve yapım süreçlerine, post-prodüksiyondan yayına kadar tüm aşamalarda aktif rol alıyoruz."
    },
    {
      question: "Projelerinizin süresi ne kadar sürüyor?",
      answer: "Proje süresi türüne ve kapsamına göre değişir. Kısa reklam filmleri genellikle 1-2 hafta, dizi bölümleri 1-3 ay, sinema filmleri ise 3-12 ay arasında tamamlanır."
    },
    {
      question: "Türkiye'nin hangi bölgelerinde çalışıyorsunuz?",
      answer: "Türkiye'nin 84 ilinde projeleri planlıyor ve hayata geçiriyoruz. Konsept geliştirmeden son teslimata kadar tüm aşamalarda titizlikle çalışıyoruz."
    },
    {
      question: "Uluslararası projeler üretiyor musunuz?",
      answer: "Evet, ulusal ve uluslararası platformlarda projeler geliştiriyor, film dağıtımı ve işbirlikleri ile global projelerde yer alıyoruz."
    },
    {
      question: "Dizi yapımında sunduğunuz hizmetler nelerdir?",
      answer: "Televizyon ve dijital platform dizilerinde; çekim planlaması, set yönetimi, oyuncu koordinasyonu, görüntü ve ses prodüksiyonu ile post-prodüksiyon hizmetleri sağlıyoruz."
    },
    {
      question: "Sinema filmi yapımında hangi aşamalarda yer alıyorsunuz?",
      answer: "Senaryo geliştirme, çekim, kurgu, görsel efekt ve renk düzenleme dahil tüm aşamalarda aktif rol alıyoruz. Her projede yüksek kalite ve sanatsal mükemmeliyeti ön planda tutuyoruz."
    },
    {
      question: "Markalar için özel içerik üretiyor musunuz?",
      answer: "Evet, markalara özgün reklam filmleri, tanıtım videoları ve dijital içerikler üretiyoruz. Konseptten teslimata kadar tüm süreçte aktif destek sağlıyoruz."
    },
    {
      question: "Projelerinizde kalite ve standartlar nasıl korunuyor?",
      answer: "Her aşamada sanatsal mükemmeliyet ve yüksek kalite standartlarını uygular, deneyimli ekibimizle projelerin kusursuz ilerlemesini sağlarız."
    },
    {
      question: "Post-prodüksiyon hizmetleriniz neleri kapsıyor?",
      answer: "Kurgu, renk düzenlemesi, görsel efekt (VFX), ses miksajı ve final mastering dahil olmak üzere tüm post-prodüksiyon süreçlerini yönetiyoruz."
    },
    {
      question: "Konsept geliştirme süreciniz nasıl ilerliyor?",
      answer: "Hedef kitle, marka kimliği ve yaratıcı vizyon doğrultusunda fikir geliştirme, storyboard ve senaryo tasarımı aşamalarını titizlikle yürütüyoruz."
    },
    {
      question: "Çekim mekanları konusunda destek veriyor musunuz?",
      answer: "Evet, Türkiye'nin 84 ilinde ve uluslararası lokasyonlarda çekim mekanları seçimi ve planlaması konusunda danışmanlık ve organizasyon sağlıyoruz."
    },
    {
      question: "Nora Yapım'ı diğer yapım şirketlerinden farklı kılan nedir?",
      answer: "16+ yıllık deneyim, yaratıcı vizyon, ulusal ve uluslararası projelerdeki başarımız ve yüksek kalite standartlarımızla her projeyi izleyiciye unutulmaz bir deneyim olarak sunuyoruz."
    }
  ];

  return (
                   <section className="pt-12 pb-20 relative">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-left lg:text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
           {/* Main title */}
           <h2 className="text-4xl lg:text-5xl font-bold">
             <span className="text-white">Sıkça Sorulan Sorular</span>
             <span className="text-white"> – </span>
             <span className="text-white">Nora Yapım</span>
           </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {faqs.slice(0, 6).map((faq, index) => (
              <motion.div 
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Question Mark Icon */}
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">?</span>
                </div>
                
                {/* Question and Answer */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {faqs.slice(6, 12).map((faq, index) => (
              <motion.div 
                key={index + 6}
                className="flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 6) * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Question Mark Icon */}
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold text-sm">?</span>
                </div>
                
                {/* Question and Answer */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
