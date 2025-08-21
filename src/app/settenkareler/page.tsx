"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import CreativeFlowSection from '../components/CreativeFlowSection';
import Footer from '../components/Footer';
import Link from 'next/link';

const SettenKarelerPage = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string; index: number } | null>(null);

  // Setten Kareler - First 24 images same as SettenKareler2Section, then additional unique images
  const setImages = [
    // First 24 images - same as SettenKareler2Section.tsx
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-1.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-2.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-3.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-4.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-5.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-6.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-7.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-8.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-9.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-10.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-11.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-12.webp",
    "https://norayapim.xyz/_assets/media/a7947a71e33cd2f673459c47d35094f8.jpg",
    "https://norayapim.xyz/_assets/media/3c199d4af4b02a77c1efa7c415787df2.jpg",
    "https://norayapim.xyz/_assets/media/b57a77ceff8176b5e3018b505cf7376d.jpg",
    "https://norayapim.xyz/_assets/media/292bacc2f4d4415a7b0d9d5e747bf6e5.jpg",
    "https://norayapim.xyz/_assets/media/31b94a0f4c44ac5aa9b88f0134f0b74d.jpg",
    "https://norayapim.xyz/_assets/media/5428660a970db918e9051ae4646b2427.jpg",
    "https://norayapim.xyz/_assets/media/bfda080f68faf6c2f9d4ab0945e31543.jpg",
    "https://norayapim.xyz/_assets/media/7170bae3f4cf04938935cfa053a3bc04.jpg",
    "https://norayapim.xyz/_assets/media/9188603306a533bfe07d9c5cd8f1b432.jpg",
    "https://norayapim.xyz/_assets/media/2f70b78136628d390ffcefdbfccf52af.jpg",
    "https://norayapim.xyz/_assets/media/f622a9294b97b25d6ba23cfbb2e48c04.jpg",
    "https://norayapim.xyz/_assets/media/b2097b5633356d2ce1397c8342ffcfd1.jpg",
    "https://norayapim.xyz/_assets/media/f26287deacf79c417240900e43f16a2d.jpg",
    // Additional unique images from settenkareler_resim_linkleri.txt (avoiding duplicates)
    "https://norayapim.xyz/_assets/media/811c798ff552a60ec746340990fe7725.jpg",
    "https://norayapim.xyz/_assets/media/faafa706123a8c11b99df84796f40e89.jpg",
    "https://norayapim.xyz/_assets/media/c08ee4e915ffd05f3dce26c92dba69e2.jpg",
    "https://norayapim.xyz/_assets/media/08bd60829b4b7e13908da3152bf08d1b.jpg",
    "https://norayapim.xyz/_assets/media/a24c81374cdc21dc496778b235f2cc55.jpg",
    "https://norayapim.xyz/_assets/media/427ebd7453682591be356a6926264d9a.jpg",
    "https://norayapim.xyz/_assets/media/3c7f3a95855dff001eb9ef93d2f1140b.jpg",
    "https://norayapim.xyz/_assets/media/2060255c8bece77119d1737fd4cf8e59.jpg",
    "https://norayapim.xyz/_assets/media/a955859fe3363680c50c9023d38c0894.jpg",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-13.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-14.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-15.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-16.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-17.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-18.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-19.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-20.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-21.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-22.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-23.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-24.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-25.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-26.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-27.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-28.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-29.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-30.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-31.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-32.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-33.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-34.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-35.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-36.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-37.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-38.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-39.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-40.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-41.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-42.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-43.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-44.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-45.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-46.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-47.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-48.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-49.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-50.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-51.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-52.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-53.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-54.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-55.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-56.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-57.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-58.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-59.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-60.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-61.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-62.webp",
    "https://villaqrmenu.b-cdn.net/nora/norasettenkareler/nora_yap%C4%B1m_settenkareler-63.webp"
  ];

  const handleImageClick = (src: string, title: string, description: string, index: number) => {
    setSelectedImage(selectedImage?.index === index ? null : { src, title, description, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Gallery Item Component for Set Images
  const SetGalleryItem = ({ src, index }: { src: string; index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => handleImageClick(src, `Set Karesi #${index + 1}`, "Projelerimizden unutulmaz anlar ve yaratıcı sürecin arka planından kareler", index)}
      layout
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3]">
        <img
          src={src}
          alt={`Set karesi ${index + 1}`}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-white font-bold text-xl mb-2">Set Karesi #{index + 1}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Yaratıcı sürecin anları</p>
            <div className="mt-4 flex items-center text-white/80 text-sm">
              <span className="mr-2">●</span>
              <span>Detayları Gör</span>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.02)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      <Header />
      
      <div className="relative z-10">
        {/* Hero Section with Background */}
        <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Image - black & white aesthetic */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://norayapim.xyz/_assets/media/42ab8b39ea20e6463d398652a976e13a.jpg"
              alt="Gallery Page Background"
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
                <span className="uppercase tracking-wider text-sm text-white/80">Welcome</span>
                <span className="h-px w-28 bg-white/40" />
              </div>

              {/* Big headline - same as other pages */}
              <h1 className="uppercase font-extrabold text-white leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block">Let's make your</span>
                <span className="block">Film + TV Shows</span>
                <span className="block">& More</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Show Plan
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Slogan Slider */}
        <div className="py-8 bg-black">
          <CreativeFlowSection 
            duration={40} 
            className="py-0" 
            noBg={true}
          />
        </div>

        {/* Main Gallery Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Gallery Grid */}
            <motion.div 
              className="space-y-20"
              layout
            >
              {/* Set Images Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                    Setten Kareler
                  </h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Projelerimizden unutulmaz anlar ve yaratıcı sürecin arka planından kareler
                  </p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
                  {setImages.map((image, index) => (
                    <SetGalleryItem key={index} src={image} index={index} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Modern Modal */}
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-5xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-16 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                onClick={closeModal}
              >
                ×
              </button>
              <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                  <h3 className="text-white font-bold text-3xl mb-3">{selectedImage.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default SettenKarelerPage;
