"use client";

import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Hangi prodüksiyon hizmetlerini sunuyorsunuz?",
      answer: "Film, dizi ve reklam prodüksiyonu alanında kapsamlı hizmetler sunuyoruz. Senaryo geliştirmeden çekim ve yapım süreçlerine, post-prodüksiyondan yayına kadar tüm aşamalarda aktif rol alıyoruz."
    },
    {
      question: "Proje süreleri ne kadar sürüyor?",
      answer: "Proje süreleri projenin kapsamına ve karmaşıklığına göre değişmektedir. Kısa reklam filmleri 1-2 hafta, dizi bölümleri 2-3 ay, sinema filmleri ise 6-12 ay sürebilmektedir."
    },
    {
      question: "Türkiye'nin hangi illerinde hizmet veriyorsunuz?",
      answer: "Türkiye'nin 84 ilinde hizmet veriyoruz. Konseptin oluşumundan çekim sürecine, kurgu ve renk düzenlemesinden son teslimata kadar her aşamayı titizlikle planlıyoruz."
    },
    {
      question: "Uluslararası projeler yapıyor musunuz?",
      answer: "Evet, ulusal ve uluslararası platformlarda başarılı işbirlikleri kuruyoruz. Film dağıtımı ve uluslararası yapımlara destek gibi sektörel faaliyetleri de sürdürüyoruz."
    },
    {
      question: "Prodüksiyon süreciniz nasıl işliyor?",
      answer: "Önce konsept geliştirme ve storyboard hazırlığı yapıyoruz. Ardından çekim planlaması, set yönetimi, görüntü ve ses prodüksiyonu ile ileri düzey post-prodüksiyon süreçlerini entegre şekilde yönetiyoruz."
    },
    {
      question: "Hangi markalarla çalıştınız?",
      answer: "Mavi, Türk Telekom, Kiğılı, Balparmak, Sütaş, Dalin, Vodafone, Haribo, Turkcell, Halkbank, Albaraka, Media Markt, LC Waikiki, Burger King, Vestel, Opet, Migros, Bellona gibi önemli markalarla çalıştık."
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
             <span className="text-white">En çok sorulan </span>
             <span className="text-white">soruların</span>
             <span className="text-white"> cevapları</span>
           </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {faqs.slice(0, 3).map((faq, index) => (
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
            {faqs.slice(3, 6).map((faq, index) => (
              <motion.div 
                key={index + 3}
                className="flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
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
