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
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://demo.awaikenthemes.com/artistics/creative-portfolio/wp-content/uploads/2025/02/page-header-bg.jpg"
              alt="Contact Page Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto pt-8 lg:pt-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12 lg:mb-16"
              >
                <h1 className="text-4xl lg:text-7xl font-bold text-white tracking-wider mb-4">
                  <span className="text-white">İletişim</span>
                </h1>
                
                {/* Breadcrumb Navigation */}
                <div className="text-sm lg:text-lg text-white/80">
                  <span className="text-white">Ana Sayfa</span>
                  <span className="text-white mx-2">*</span>
                  <span className="text-white">İletişim</span>
                </div>
              </motion.div>
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
                     Ulaşın ve <span className="text-white">hikayenizi</span> bugün başlatın.
                   </h1>
                   <p className="text-lg text-white/80 leading-relaxed mb-8">
                     Projeleriniz, iş birliği teklifleri veya sorularınız için doğrudan bizimle iletişime geçin.
                   </p>
                 </div>

                 {/* Contact Details */}
                 <div className="space-y-4">
                   <div>
                     <p className="text-white font-semibold mb-1">Bizi arayın:</p>
                     <p className="text-white text-lg">+90 (555) 123 45 67</p>
                   </div>
                   <div>
                     <p className="text-white font-semibold mb-1">E-posta adresi:</p>
                     <p className="text-white text-lg">info@norayapim.com</p>
                   </div>
                 </div>

                {/* Social Media */}
                <div>
                  <p className="text-white font-semibold mb-4">Bizi takip edin:</p>
                  <div className="flex items-center gap-4">
                    <motion.a 
                      href="#" 
                      className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </motion.a>
                    
                    <motion.a 
                      href="#" 
                      className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </motion.a>
                    
                    <motion.a 
                      href="#" 
                      className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                    
                    <motion.a 
                      href="#" 
                      className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </motion.a>
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