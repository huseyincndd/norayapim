"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CustomerServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const chartData = [
    { percentage: 39, label: 'Reklam Filmleri', color: '#ffffff', shortLabel: 'Reklam' },
    { percentage: 32, label: 'Dizi Projeleri', color: '#e0e0e0', shortLabel: 'Dizi' },
    { percentage: 11, label: 'Sinema Filmleri', color: '#b8b8b8', shortLabel: 'Sinema' },
    { percentage: 10, label: 'Belgesel Yapımları', color: '#909090', shortLabel: 'Belgesel' },
    { percentage: 8, label: 'TV Programları', color: '#686868', shortLabel: 'TV' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('customer-services-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="customer-services-section"
      className="relative py-20 lg:py-32 bg-black overflow-hidden"
    >
             {/* Background Elements */}
       <div className="absolute inset-0">
         <div className="absolute inset-0 bg-black" />
       </div>

             <div className="container mx-auto px-4 lg:px-8 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
           
           {/* Left Column - Production Distribution */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={isVisible ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="space-y-8 lg:min-h-full flex flex-col"
           >
                         {/* Title */}
             <div className="space-y-3 lg:space-y-4">
               <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                 ALAN BAZLI ÜRETİM DAĞILIMI
               </h2>
               <p className="text-lg lg:text-xl xl:text-2xl text-white/80 font-light">
                 (2008–2025)
               </p>
             </div>

                         {/* Description */}
             <div className="space-y-4 lg:space-y-6 text-white/90 leading-relaxed text-sm lg:text-base">
               <p>
                 2008'den bu yana ağırlıklı olarak reklam projelerinde faaliyet gösteriyoruz. 
                 Markaların ihtiyaçlarına yönelik kreatif çözümler üretiyor, prodüksiyonun 
                 her aşamasında yüksek kalite standartlarıyla hizmet sunuyoruz.
               </p>
               <p>
                 Her projede edindiğimiz deneyimi, yetkin ekibimiz ve organize çalışma 
                 anlayışımızla birleştirerek, sektörde kalıcı bir üretim standardı oluşturduk.
               </p>
             </div>

                         {/* Modern Wheel Chart */}
             <div className="relative flex justify-center items-center py-8 lg:py-12 flex-1">
               <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  <defs>
                    {/* Gradients for each segment */}
                    {chartData.map((item, index) => (
                      <linearGradient key={index} id={`wheel-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={item.color} />
                        <stop offset="100%" stopColor={item.color} stopOpacity="0.8" />
                      </linearGradient>
                    ))}
                    
                    {/* Drop shadow filter */}
                    <filter id="wheel-shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.4"/>
                    </filter>
                  </defs>
                  
                  {/* Wheel segments */}
                  {chartData.map((item, index) => {
                    let startAngle = 0;
                    for (let i = 0; i < index; i++) {
                      startAngle += (chartData[i].percentage / 100) * 360;
                    }
                    const endAngle = startAngle + (item.percentage / 100) * 360;
                    
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    const startAngleRad = (startAngle * Math.PI) / 180;
                    const endAngleRad = (endAngle * Math.PI) / 180;
                    
                    const radius = 80;
                    const centerX = 100;
                    const centerY = 100;
                    
                    const x1 = centerX + radius * Math.cos(startAngleRad);
                    const y1 = centerY + radius * Math.sin(startAngleRad);
                    const x2 = centerX + radius * Math.cos(endAngleRad);
                    const y2 = centerY + radius * Math.sin(endAngleRad);
                    
                    const pathData = [
                      `M ${centerX} ${centerY}`,
                      `L ${x1} ${y1}`,
                      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                      'Z'
                    ].join(' ');
                    
                    return (
                      <motion.path
                        key={index}
                        d={pathData}
                        fill={`url(#wheel-gradient-${index})`}
                        stroke="rgba(0,0,0,0.1)"
                        strokeWidth="1"
                        filter="url(#wheel-shadow)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isVisible ? { 
                          scale: hoveredSegment === index ? 1.05 : 1, 
                          opacity: 1 
                        } : { scale: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredSegment(index)}
                        onMouseLeave={() => setHoveredSegment(null)}
                        style={{
                          transformOrigin: '100px 100px'
                        }}
                      />
                    );
                  })}
                </svg>
                
                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="relative w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gray-800 to-black rounded-full flex flex-col items-center justify-center border border-gray-600 shadow-2xl"
                    animate={{ 
                      scale: hoveredSegment !== null ? 1.1 : 1,
                      boxShadow: hoveredSegment !== null ? '0 20px 40px rgba(0,0,0,0.5)' : '0 10px 20px rgba(0,0,0,0.3)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-lg lg:text-xl font-bold text-white">
                      {hoveredSegment !== null ? `${chartData[hoveredSegment].percentage}%` : '2008'}
                    </div>
                    <div className="text-xs text-gray-300 text-center leading-tight">
                      {hoveredSegment !== null ? chartData[hoveredSegment].shortLabel : 'Dan Bu Yana'}
                    </div>
                  </motion.div>
                </div>
                
                {/* Segment Labels */}
                {chartData.map((item, index) => {
                  let startAngle = 0;
                  for (let i = 0; i < index; i++) {
                    startAngle += (chartData[i].percentage / 100) * 360;
                  }
                  // SVG -90 derece döndürüldüğü için başlangıç açısını düzeltiyoruz
                  const adjustedStartAngle = startAngle - 90;
                  const midAngle = adjustedStartAngle + (item.percentage / 100) * 360 / 2;
                  const labelRadius = 95; // Wheel'a daha yakın
                  const x = 100 + labelRadius * Math.cos((midAngle * Math.PI) / 180);
                  const y = 100 + labelRadius * Math.sin((midAngle * Math.PI) / 180);
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-gray-600"
                      style={{
                        left: `${(x / 200) * 100}%`,
                        top: `${(y / 200) * 100}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isVisible ? { 
                        opacity: hoveredSegment === index ? 1 : 0.7, 
                        scale: hoveredSegment === index ? 1.1 : 1 
                      } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.5 + index * 0.1 
                      }}
                    >
                      {item.percentage}%
                    </motion.div>
                  );
                })}
              </div>
            </div>

                         {/* Legend */}
             <div className="bg-gradient-to-br from-gray-800/40 via-gray-800/50 to-gray-900/60 p-4 lg:p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4 text-center">Üretim Alanları</h3>
              <div className="space-y-4">
                {chartData.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                      hoveredSegment === index 
                        ? 'bg-white/10 border border-white/20 shadow-lg' 
                        : 'bg-white/5 border border-transparent hover:bg-white/8'
                    }`}
                    onMouseEnter={() => setHoveredSegment(index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-4 h-4 rounded-full shadow-md"
                        style={{ backgroundColor: item.color }}
                        animate={{
                          scale: hoveredSegment === index ? 1.2 : 1,
                          boxShadow: hoveredSegment === index 
                            ? `0 0 15px ${item.color}40` 
                            : '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className={`text-white transition-all duration-300 ${
                        hoveredSegment === index ? 'font-semibold' : 'font-medium'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    <motion.span 
                      className={`font-bold transition-all duration-300 ${
                        hoveredSegment === index ? 'text-white text-lg' : 'text-white/80'
                      }`}
                      animate={{
                        scale: hoveredSegment === index ? 1.1 : 1
                      }}
                    >
                      %{item.percentage}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

                     {/* Right Column - Nationwide Presence */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isVisible ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="space-y-8 lg:min-h-full flex flex-col"
           >
                         {/* Title */}
             <div className="space-y-3 lg:space-y-4">
               <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                 84 İL, SINIRSIZ HİKÂYE
               </h2>
               <p className="text-lg lg:text-xl xl:text-2xl text-white/80 font-light">
                 Her Yerde, Her Aşamada.
               </p>
             </div>

                         {/* Description */}
             <div className="space-y-4 lg:space-y-6 text-white/90 leading-relaxed text-sm lg:text-base">
               <p>
                 Fikir bir masa başında doğar, bir sokakta hayat bulur, bir kamerayla gerçeğe dönüşür. 
                 Biz, 84 ilde bu dönüşümün her anında varız. Konseptin oluşumundan çekim sürecine, 
                 kurgu ve renk düzenlemesinden son teslimata kadar her aşamayı titizlikle planlıyor, 
                 her projeye kendi ruhunu taşıyan yaratıcı dokunuşlar katıyoruz. Türkiye'nin dört bir 
                 yanında, hayalleri ekrana yansıtan üretim gücümüzle fark yaratıyoruz.
               </p>
             </div>

                         {/* Turkey Map */}
             <div className="relative flex justify-center items-center py-6 lg:py-8 flex-1">
               <div className="relative w-full max-w-md lg:max-w-lg group">
                                 {/* Turkey Map Image */}
                 <div className="relative overflow-hidden rounded-lg">
                   <img 
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Turkey_provinces_blank_gray.svg/1200px-Turkey_provinces_blank_gray.svg.png"
                     alt="Türkiye Haritası - 84 İl Hizmet Alanı"
                     className="w-full h-auto transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                   />
                  
                   {/* Overlay with subtle gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                 </div>
              </div>
            </div>

                         {/* Additional Info */}
             <div className="bg-gray-800/30 p-4 lg:p-6 rounded-lg border border-gray-700/50">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">84</div>
                <div className="text-white/80 text-sm">İlde Hizmet</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerServicesSection;
