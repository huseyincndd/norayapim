"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
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
    
    // Show success message (you can implement a toast notification here)
    alert('Mesajınız başarıyla gönderildi!');
  };

  const navItems = [
    { 
      id: 'home',
      label: 'Ana Sayfa', 
      href: '/'
    },
    { 
      id: 'about',
      label: 'Hakkımızda', 
      href: '/about'
    },
    { 
      id: 'services',
      label: 'Neler Yapıyoruz', 
      href: '/services'
    },
    { 
      id: 'blog',
      label: 'Blog', 
      href: '/blog'
    },
    { 
      id: 'contact',
      label: 'İletişim', 
      href: '/contact'
    }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />

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

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column - Company Info & Navigation */}
            <div className="space-y-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <h1 className="text-3xl font-bold text-white tracking-wider font-bebas-neue">
                    NORA
                  </h1>
                </div>
                <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-lg">
                  Nora Yapım, 16 yılı aşkın süredir film, dizi ve reklam yapımlarında fark yaratan bir üretim şirketidir. Her projede yenilikçi çözümler ve yaratıcı anlatımı ön planda tutarak, izleyiciler ve iş ortakları için etkileyici deneyimler sunuyoruz. Hem yerel hem de global arenada yürüttüğümüz çalışmalarla sektör standartlarını yükselten güvenilir bir yapım ortağıyız.
                </p>
                
                {/* Social Media */}
                <div className="flex items-center gap-4">
                  <motion.a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              {/* Navigation Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white">Sayfalar</h4>
                <div className="space-y-3">
                  {navItems.map((item) => (
                                         <div key={item.id} className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-white rounded-full" />
                       <Link 
                         href={item.href}
                         className="text-white/80 hover:text-white transition-colors"
                       >
                         {item.label}
                       </Link>
                     </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Middle Column - Contact Form */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white">İletişim Formu</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Adınız Soyadınız"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-premium-red/50 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E-Posta Adresiniz"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-premium-red/50 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 country-selector">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                      >
                        <img 
                          src={selectedCountryData?.flag} 
                          alt={selectedCountryData?.name}
                          className="w-4 h-3 object-cover rounded-sm"
                        />
                        <span className="text-sm font-medium">{selectedCountryData?.dialCode}</span>
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-white/20 rounded-xl shadow-2xl z-[999999] max-h-60 overflow-y-auto">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country.code);
                                setShowCountryDropdown(false);
                              }}
                              className="w-full px-4 py-3 flex items-center gap-3 text-white hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
                            >
                              <img 
                                src={country.flag} 
                                alt={country.name}
                                className="w-4 h-3 object-cover rounded-sm"
                              />
                              <span className="text-sm flex-1 text-left">{country.name}</span>
                              <span className="text-sm font-medium">{country.dialCode}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        // Sadece rakam girişine izin ver
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        setFormData(prev => ({
                          ...prev,
                          phone: value
                        }));
                      }}
                      placeholder="Telefon numaranız"
                      required
                      pattern="[0-9]*"
                      inputMode="numeric"
                      className="w-full pl-24 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-premium-red/50 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Konu"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-premium-red/50 focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mesajınız"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-premium-red/50 focus:bg-white/15 transition-all duration-300 resize-none"
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
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF' }}
                    className="w-full px-6 py-3 text-black font-semibold rounded-xl hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Right Column - Contact Info & Map */}
            <div className="space-y-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white">İletişim Bilgileri</h4>
                <div className="space-y-4">
                                     <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-white border border-white/30 rounded-xl flex items-center justify-center flex-shrink-0">
                       <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>
                     </div>
                    <div>
                      <p className="text-white font-medium">Telefon</p>
                      <p className="text-white/80">+90 (555) 123 45 67</p>
                      <p className="text-white/60 text-sm">Pazartesi - Cuma, 09:00 - 18:00</p>
                    </div>
                  </div>

                                     <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-white border border-white/30 rounded-xl flex items-center justify-center flex-shrink-0">
                       <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                     </div>
                    <div>
                      <p className="text-white font-medium">E-posta</p>
                      <p className="text-white/80">info@norayapim.com</p>
                      <p className="text-white/60 text-sm">24 saat içinde yanıt veriyoruz</p>
                    </div>
                  </div>

                                     <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-white border border-white/30 rounded-xl flex items-center justify-center flex-shrink-0">
                       <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg>
                     </div>
                    <div>
                      <p className="text-white font-medium">Adres</p>
                      <p className="text-white/80">İstanbul</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative lg:relative -mx-4 lg:mx-0"
              >
                <h4 className="text-xl font-semibold mb-6 text-white px-4 lg:px-0">Konum</h4>
                <div className="relative w-full aspect-square lg:h-64 lg:aspect-auto bg-gradient-to-br from-gray-800 to-gray-900 lg:rounded-2xl overflow-hidden border-0 lg:border lg:border-white/10 group cursor-pointer">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24071.710958671446!2d28.995949315414!3d41.024112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAxJzI2LjgiTiAyOMKwNTknNTIuMCJF!5e0!3m2!1str!2str!4v1640995200000!5m2!1str!2str&style=feature:all|element:all|visibility:simplified|color:0x2d2d2d|weight:0.1|gamma:0.8|saturation:-100|lightness:-50"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) brightness(0.7) contrast(1.2)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="İstanbul Boğazı Konumu"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay with click indicator */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <motion.p 
                className="text-white/60 text-sm text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Nora Yapım. Tüm hakları saklıdır.
              </motion.p>

              {/* Quick Links */}
              <motion.div 
                className="flex flex-wrap items-center justify-center lg:justify-end gap-4 lg:gap-6 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="/legal/aydinlatma-metni" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                  Aydınlatma Metni
                </Link>
                <Link href="/legal/acik-riza-onayi" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                  Açık Rıza Onayı
                </Link>
                <Link href="/legal/kvkk-politikasi" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                  Kvkk Politikası
                </Link>
                <Link href="/legal/bgys-politikasi" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                  Bgys Politikası
                </Link>
                <Link href="/legal/kvkk-basvuru-formu" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                  Kvkk Başvuru Formu
                </Link>
                <Link href="/legal/gizlilik-politikasi" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                  Gizlilik Politikası
                </Link>
                <Link href="/legal/cerez-politikasi" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                  Çerez Politikası
                </Link>
                <Link href="/legal/site-haritasi" className="text-white/60 hover:text-white transition-colors whitespace-nowrap">
                  Site Haritası
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 