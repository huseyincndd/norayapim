"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import CreativeFlowSection from '../../components/CreativeFlowSection';
import Footer from '../../components/Footer';

const KvkkBasvuruFormuPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    tcKimlik: '',
    email: '',
    phone: '',
    address: '',
    requestType: '',
    description: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const requestTypes = [
    { value: 'bilgi', label: 'Kişisel verilerimin işlenip işlenmediğini öğrenme' },
    { value: 'bilgi_talep', label: 'Kişisel verilerim işlenmişse buna ilişkin bilgi talep etme' },
    { value: 'islenme_amaci', label: 'Kişisel verilerimin işlenme amacını öğrenme' },
    { value: 'ucuncu_kisiler', label: 'Kişisel verilerimin aktarıldığı üçüncü kişileri bilme' },
    { value: 'duzeltme', label: 'Kişisel verilerimin düzeltilmesini isteme' },
    { value: 'silme', label: 'Kişisel verilerimin silinmesini isteme' },
    { value: 'itiraz', label: 'Kişisel verilerimin işlenmesine itiraz etme' },
    { value: 'zarar', label: 'Zararın giderilmesini talep etme' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      fullName: '',
      tcKimlik: '',
      email: '',
      phone: '',
      address: '',
      requestType: '',
      description: '',
      consent: false
    });
  };

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
                <span className="block">Başvuru Formu</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Kişisel verilerinizle ilgili haklarınızı kullanmak için başvuru formu.
              </p>

              {/* Breadcrumb */}
              <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/legal" className="hover:text-white transition-colors">Yasal</Link>
                <span>/</span>
                <span className="text-white">KVKK Başvuru Formu</span>
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

        {/* Form Section */}
        <section className="pt-8 lg:pt-12 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {showSuccess ? (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Başvurunuz Alındı!</h2>
                  <p className="text-white/80 mb-6">
                    KVKK başvurunuz başarıyla alınmıştır. En kısa sürede size dönüş yapılacaktır.
                  </p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Yeni Başvuru
                  </button>
                </div>
              ) : (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-8">KVKK Başvuru Formu</h2>
                  
                  <div className="mb-8 p-6 bg-white/10 rounded-lg border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Başvuru Hakkında Bilgi</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 11. maddesi uyarınca sahip olduğunuz 
                      hakları kullanmak için aşağıdaki formu doldurabilirsiniz. Başvurunuz en geç 30 gün içinde 
                      yanıtlanacaktır.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">Ad Soyad *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300"
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">TC Kimlik No *</label>
                        <input
                          type="text"
                          name="tcKimlik"
                          value={formData.tcKimlik}
                          onChange={handleInputChange}
                          required
                          maxLength={11}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300"
                          placeholder="TC Kimlik Numaranız"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">E-posta *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300"
                          placeholder="E-posta adresiniz"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">Telefon</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300"
                          placeholder="Telefon numaranız"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Adres *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300 resize-none"
                        placeholder="Açık adresiniz"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Başvuru Türü *</label>
                      <select
                        name="requestType"
                        value={formData.requestType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300"
                      >
                        <option value="">Başvuru türünü seçiniz</option>
                        {requestTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Açıklama</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300 resize-none"
                        placeholder="Başvurunuzla ilgili ek açıklamalarınız (isteğe bağlı)"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-4 h-4 text-white bg-white/10 border-white/20 rounded focus:ring-white focus:ring-2"
                      />
                      <label className="text-white/80 text-sm leading-relaxed">
                        <Link href="/legal/aydinlatma-metni" className="text-white/80 hover:text-white transition-colors underline">
                          Aydınlatma Metni
                        </Link>'ni okudum ve kişisel verilerimin işlenmesine açık rıza veriyorum.
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
                    </motion.button>
                  </form>

                  <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Önemli Notlar:</h3>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Başvurunuz en geç 30 gün içinde yanıtlanacaktır.</li>
                      <li>• Başvurunuzu kimlik doğrulama yöntemlerinden biriyle yapmanız gerekmektedir.</li>
                      <li>• Başvuru ücretsizdir, herhangi bir ücret talep edilmez.</li>
                      <li>• Başvurunuzla ilgili ek belgeler varsa e-posta ile gönderebilirsiniz.</li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default KvkkBasvuruFormuPage;
