"use client";

import { motion } from 'framer-motion';

const BrandsSection = () => {
  const brandLogos = [
    'https://norayapim.xyz/_assets/media/006b77961ed27cd981a893e8893ad05d.png',
    'https://norayapim.xyz/_assets/media/01eb0cfa2c86eb03f299c11881f83556.png',
    'https://norayapim.xyz/_assets/media/0cfddea3396bee27c2b24f2c3782ae20.jpg',
    'https://norayapim.xyz/_assets/media/1895da1c3dce3d60968b69cf2e17115e.jpg',
    'https://norayapim.xyz/_assets/media/1f31a9f5f046f67d24b1fac25f727378.jpg',
    'https://norayapim.xyz/_assets/media/4d969f9dd54aece43a2bd27bff065bcc.png',
    'https://norayapim.xyz/_assets/media/6d8d1997e6a201760c82773cb8b5d480.jpg',
    'https://norayapim.xyz/_assets/media/73f5e79f63cf6e7acb6dcd34226b7f5a.jpg',
    'https://norayapim.xyz/_assets/media/77b76180102f2f036c9817cb22822e31.png',
    'https://norayapim.xyz/_assets/media/806be557458f2152863eee8f95010210.png',
    'https://norayapim.xyz/_assets/media/84a516c2c07ed0aa1c4404cd374a9da9.png',
    'https://norayapim.xyz/_assets/media/902981800a3d475aefef1247dfc8c528.jpg',
    'https://norayapim.xyz/_assets/media/9671304c91110994886639ff61eccae3.jpg',
    'https://norayapim.xyz/_assets/media/98f8e90ff9651182849cd4bae6a83eb7.jpg',
    'https://norayapim.xyz/_assets/media/9ad7842a41a57e1cba7e4ffbdd90fc60.png',
    'https://norayapim.xyz/_assets/media/9c4128d96406eb95b12e0b69351b8672.png',
    'https://norayapim.xyz/_assets/media/9e6ab51354b946e0a4ab21f63e1cd0cd.jpg',
    'https://norayapim.xyz/_assets/media/a1b6c9670d77dee08dd2724e4a9d9510.png',
    'https://norayapim.xyz/_assets/media/a9bbc130069da54023507a3d5180f3e8.png',
    'https://norayapim.xyz/_assets/media/ac2825cba943566075fa5d4446d15645.png',
    'https://norayapim.xyz/_assets/media/b451f8126b41ef6a28bfe896c9c95426.jpg',
    'https://norayapim.xyz/_assets/media/b5d11fc99cdcf3ef726bb387fc11d2d9.jpg',
    'https://norayapim.xyz/_assets/media/b7e1ef7fc6acc50739a46824143a0c08.jpg',
    'https://norayapim.xyz/_assets/media/d0b3b3e253c9358720eda5da2369489a.png',
    'https://norayapim.xyz/_assets/media/d74b7e205b43a47e793c194884bb6cf0.jpg',
    'https://norayapim.xyz/_assets/media/e7277bece92b5c072cb6a699d0881a47.jpg',
    'https://norayapim.xyz/_assets/media/e7dc05cc3c103494ffe0e7b416c3e9f2.png',
    'https://norayapim.xyz/_assets/media/ed0eb97b42a798066eee028cef06018e.jpg',
    'https://norayapim.xyz/_assets/media/fb87c06f8f80841a901dcf6f72994eb5.png',
    'https://norayapim.xyz/_assets/media/006b77961ed27cd981a893e8893ad05d.png'
  ];

  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-black to-black" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              BİRÇOK MARKA...
            </h2>

            {/* First Paragraph */}
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              Birçok markanın reklam projelerinde; brief'e uygun, hızlı ve sonuç odaklı prodüksiyon çözümleri sunuyoruz.
            </p>

            {/* Second Paragraph */}
            <p className="text-base lg:text-lg text-white/70 leading-relaxed">
              Birçok markanın reklam projelerinde, konsept geliştirme, storyboard hazırlığı, çekim planlaması, set yönetimi, görüntü ve ses prodüksiyonu ile ileri düzey post-prodüksiyon süreçlerini entegre şekilde yönetiyoruz. Böylece, marka hedeflerine uygun, yaratıcı ve teknik açıdan kusursuz çözümler sunuyoruz.
            </p>
          </motion.div>

          {/* Right Section - Brand Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-5 gap-3 lg:gap-4">
              {brandLogos.map((logoUrl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  {/* Logo Container - White rounded square like app icons */}
                  <div className="aspect-square bg-white rounded-xl p-3 lg:p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-gray-50 overflow-hidden">
                    <img 
                      src={logoUrl} 
                      alt={`Brand Logo ${index + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback for failed image loads
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-medium text-xs lg:text-sm text-center">
                            Brand ${index + 1}
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Brand {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
