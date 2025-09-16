"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import CreativeFlowSection from '../components/CreativeFlowSection';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [consent, setConsent] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('TR');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    { code: 'TR', name: 'Türkiye', dialCode: '+90', flag: 'https://flagcdn.com/w20/tr.png' },
    { code: 'US', name: 'United States', dialCode: '+1', flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: 'https://flagcdn.com/w20/gb.png' },
    { code: 'DE', name: 'Germany', dialCode: '+49', flag: 'https://flagcdn.com/w20/de.png' },
    { code: 'FR', name: 'France', dialCode: '+33', flag: 'https://flagcdn.com/w20/fr.png' },
    { code: 'IT', name: 'Italy', dialCode: '+39', flag: 'https://flagcdn.com/w20/it.png' },
    { code: 'ES', name: 'Spain', dialCode: '+34', flag: 'https://flagcdn.com/w20/es.png' },
    { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: 'https://flagcdn.com/w20/nl.png' },
    { code: 'CA', name: 'Canada', dialCode: '+1', flag: 'https://flagcdn.com/w20/ca.png' },
    { code: 'AU', name: 'Australia', dialCode: '+61', flag: 'https://flagcdn.com/w20/au.png' },
    { code: 'JP', name: 'Japan', dialCode: '+81', flag: 'https://flagcdn.com/w20/jp.png' },
    { code: 'KR', name: 'South Korea', dialCode: '+82', flag: 'https://flagcdn.com/w20/kr.png' },
    { code: 'CN', name: 'China', dialCode: '+86', flag: 'https://flagcdn.com/w20/cn.png' },
    { code: 'IN', name: 'India', dialCode: '+91', flag: 'https://flagcdn.com/w20/in.png' },
    { code: 'BR', name: 'Brazil', dialCode: '+55', flag: 'https://flagcdn.com/w20/br.png' },
    { code: 'RU', name: 'Russia', dialCode: '+7', flag: 'https://flagcdn.com/w20/ru.png' },
  ];

  const selectedCountryData = countries.find(country => country.code === selectedCountry);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.country-selector')) {
        setShowCountryDropdown(false);
      }
    };

    if (showCountryDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCountryDropdown]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      setShowConsentError(true);
      return;
    }
    
    setShowConsentError(false);
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setConsent(false);
    setIsSubmitting(false);
    
    // Show success message
    alert('Mesajınız başarıyla gönderildi!');
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
         {/* Hero Section with Background */}
         <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Image - black & white aesthetic */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://www.sineplusakademi.com/wp-content/themes/yootheme/cache/f6/freelance-film-production-f608a5c7.jpeg"
              alt="Contact Page Background"
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
                <span className="uppercase tracking-wider text-sm text-white/80">Hoşgeldiniz</span>
                <span className="h-px w-28 bg-white/40" />
              </div>

              {/* Big headline - same as About/Services */}
              <h1 className="uppercase font-extrabold text-white leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block">Bizimle İletişime</span>
                <span className="block">Geçin</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Projeleriniz, iş birliği teklifleri veya sorularınız için doğrudan bizimle iletişime geçin.
              </p>
            </motion.div>
          </div>
        </section>

                         {/* Slogan Slider - Using CreativeFlowSection */}
        <div className="pb-2 lg:pb-3 bg-black">
          <CreativeFlowSection 
            duration={40} 
            className="py-0" 
            noBg={true}
          />
        </div>

         {/* Contact Content */}
         <section className="pt-8 lg:pt-12 pb-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              
                             {/* Left Column - Contact Info & Introduction */}
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="space-y-0"
               >
                

                 {/* Main Title */}
                 <div>
                   <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                     İletişim
                   </h1>
                   <p className="text-lg text-white/80 leading-relaxed mb-4">
                    Fortis Yapım Adres ve İletişim Bilgileri
                   </p>
                   <p className="text-base text-white/70 leading-relaxed mb-8">
                     Aşağıdan Fortis Yapım'ın adres ve iletişim kanallarına ulaşabilirsiniz. Projelerimizle ilgili bilgi almak, soru, görüş ve önerileriniz için bizimle iletişime geçebilirsiniz.
                   </p>
                 </div>

                                 {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-white font-semibold mb-1">Bizi arayın:</p>
                    <p className="text-white text-lg">+90 (555) 123 45 67</p>
                  </div>
                  
                  <div>
                    <p className="text-white font-semibold mb-2">Adres</p>
                    <div className="space-y-1">
                      <p className="text-white/90">Business İstanbul</p>
                      <p className="text-white/90">Merdivenköy Mahallesi, Dikyol Sokak No:2, Kat:18</p>
                      <p className="text-white/90">34732 Kadıköy / İstanbul</p>
                      <p className="text-white/70 text-sm mt-2 italic">Not: Ofisimiz yalnızca randevu ile ziyaret kabul etmektedir.</p>
                    </div>
                  </div>
                </div>

                                 {/* Decorative Arrow */}
                 <div className="relative hidden lg:block">
                   <svg className="w-24 h-12 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17L17 7M17 7H7M17 7V17" />
                   </svg>
                 </div>
              </motion.div>

                             {/* Right Column - Contact Form */}
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
                 className="space-y-0"
               >
                                                   <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                      Bize <span className="text-white">mesaj</span> gönderin.
                    </h2>
                  </div>

                 <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                                             <input
                         type="text"
                         name="firstName"
                         placeholder="Ad"
                         required
                         className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300"
                       />
                     </div>
                     <div>
                       <input
                         type="text"
                         name="lastName"
                         placeholder="Soyad"
                         required
                         className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300"
                       />
                     </div>
                   </div>
                   
                   <div>
                     <input
                       type="tel"
                       name="phone"
                       placeholder="Telefon numaranızı girin"
                       required
                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300"
                     />
                   </div>
                   
                   <div>
                     <input
                       type="email"
                       name="email"
                       placeholder="E-posta adresinizi girin"
                       required
                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300"
                     />
                   </div>
                   
                   <div>
                     <textarea
                       name="message"
                       placeholder="Mesajınızı yazın..."
                       rows={6}
                       required
                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all duration-300 resize-none"
                     />
                   </div>
                   
                   {/* KVKK Consent Checkbox */}
                   <div className="flex items-start gap-3">
                     <input
                       type="checkbox"
                       id="consent"
                       checked={consent}
                       onChange={(e) => {
                         setConsent(e.target.checked);
                         if (e.target.checked) {
                           setShowConsentError(false);
                         }
                       }}
                       className="mt-1 w-4 h-4 text-white bg-white/10 border-white/20 rounded focus:ring-white focus:ring-2"
                     />
                     <label htmlFor="consent" className="text-white/80 text-sm leading-relaxed">
                       <Link href="#" className="text-white/80 hover:text-white transition-colors underline">
                         Aydınlatma Metni
                       </Link>'ni ve <Link href="#" className="text-white/80 hover:text-white transition-colors underline">
                         Açık Rıza Onayı
                       </Link>'nı okudum ve kabul ediyorum.
                     </label>
                   </div>
                   
                   {/* Consent Error Message */}
                   {showConsentError && (
                     <div className="text-red-400 text-sm mt-2 flex items-center gap-2">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                       Lütfen KVKK onayını veriniz.
                     </div>
                   )}
                  
                                     <motion.button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                   >
                     {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                   </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
                 </section>
       </div>
       <Footer />
     </div>
   );
 };

export default ContactPage; 