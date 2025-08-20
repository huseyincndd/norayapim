"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import CreativeFlowSection from '../components/CreativeFlowSection';
import Footer from '../components/Footer';

const SettenKarelerPage = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string; index: number } | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'projects' | 'brands' | 'sets'>('all');

  // Proje Alanımız - ServicesSectionNew'den alınan tüm proje görselleri
  const projectImages = [
    {
      src: "https://norayapim.xyz/_assets/media/390a4d97c2a911c6c5288a8e60b901e7.jpg",
      title: "Video Productions",
      description: "An international digital design studio reimagining how people connect with brands."
    },
    {
      src: "https://norayapim.xyz/_assets/media/42ab8b39ea20e6463d398652a976e13a.jpg",
      title: "Digital Media",
      description: "We prioritize flexibility, streamlined processes, and creative that positively impacts your business."
    },
    {
      src: "https://norayapim.xyz/_assets/media/47230946f363ef20051e51cafc3dcdff.jpg",
      title: "Commercial",
      description: "We are dedicated to transforming businesses by providing expert consulting services."
    },
    {
      src: "https://norayapim.xyz/_assets/media/49a64215211360af66f457eb773e77d2.jpg",
      title: "Content Creation",
      description: "We are a creative production company that specializes in crafting unique stories."
    },
    {
      src: "https://norayapim.xyz/_assets/media/522f67e2602ff41683885da245a46f0a.jpg",
      title: "Creative Directions",
      description: "It's not about being right but rather about discovering the right idea."
    },
    {
      src: "https://norayapim.xyz/_assets/media/52f994ed6afbf599aa372f271457dedd.jpg",
      title: "Studio Rental",
      description: "We got into this business to tell compelling stories and connect ideas with people."
    },
    {
      src: "https://norayapim.xyz/_assets/media/59edb701e24db057f9f0a9fc9fdf698f.jpg",
      title: "Film Production",
      description: "Creating cinematic experiences that captivate and inspire audiences worldwide."
    },
    {
      src: "https://norayapim.xyz/_assets/media/5f53320dd1302bca88145669f6ac31cb.jpg",
      title: "Advertising",
      description: "Strategic advertising solutions that drive engagement and deliver results."
    },
    {
      src: "https://norayapim.xyz/_assets/media/6212466731fe62ced311fcffd0868cb9.jpg",
      title: "Brand Storytelling",
      description: "Crafting compelling narratives that connect brands with their audiences."
    },
    {
      src: "https://norayapim.xyz/_assets/media/69bdeedd52bb3f1425f7c519ba8ec7e6.jpg",
      title: "Corporate Videos",
      description: "Professional corporate video production for businesses of all sizes."
    },
    {
      src: "https://norayapim.xyz/_assets/media/72be2afe12ae076a5225f82a7ceb2a4a.jpg",
      title: "Event Coverage",
      description: "Comprehensive event coverage and live streaming services."
    },
    {
      src: "https://norayapim.xyz/_assets/media/75c063c5717dabf1a90242341b5c5369.png",
      title: "Documentary",
      description: "Documentary filmmaking that tells real stories with authenticity."
    },
    {
      src: "https://norayapim.xyz/_assets/media/77132f50e03162d994bc45bb89d2bf3b.jpg",
      title: "Music Videos",
      description: "Creative music video production for artists and musicians."
    },
    {
      src: "https://norayapim.xyz/_assets/media/79c3e80ec848d799d25b291f0a89a985.jpg",
      title: "Product Videos",
      description: "Showcasing products with stunning visual storytelling."
    },
    {
      src: "https://norayapim.xyz/_assets/media/7ff22b339a52fc8fe3659fad99b91e45.jpg",
      title: "Social Media",
      description: "Engaging social media content that drives audience interaction."
    },
    {
      src: "https://norayapim.xyz/_assets/media/80e6c06d519a9af9f8a872021ee35b4c.jpg",
      title: "Animation",
      description: "Creative animation and motion graphics for dynamic storytelling."
    },
    {
      src: "https://norayapim.xyz/_assets/media/82b20caf71ec3776afcadbe49981ddb4.jpg",
      title: "Post Production",
      description: "Professional post-production services for polished final products."
    },
    {
      src: "https://norayapim.xyz/_assets/media/9671304c91110994886639ff61eccae3.jpg",
      title: "Live Streaming",
      description: "High-quality live streaming solutions for events and broadcasts."
    }
  ];

  // Markalar - ImageSliderSection'dan alınan tüm marka görselleri
  const brandImages = [
    "https://norayapim.xyz/_assets/media/006b77961ed27cd981a893e8893ad05d.png",
    "https://norayapim.xyz/_assets/media/01eb0cfa2c86eb03f299c11881f83556.png",
    "https://norayapim.xyz/_assets/media/0cfddea3396bee27c2b24f2c3782ae20.jpg",
    "https://norayapim.xyz/_assets/media/1895da1c3dce3d60968b69cf2e17115e.jpg",
    "https://norayapim.xyz/_assets/media/1f31a9f5f046f67d24b1fac25f727378.jpg",
    "https://norayapim.xyz/_assets/media/4d969f9dd54aece43a2bd27bff065bcc.png",
    "https://norayapim.xyz/_assets/media/6d8d1997e6a201760c82773cb8b5d480.jpg",
    "https://norayapim.xyz/_assets/media/73f5e79f63cf6e7acb6dcd34226b7f5a.jpg",
    "https://norayapim.xyz/_assets/media/77b76180102f2f036c9817cb22822e31.png",
    "https://norayapim.xyz/_assets/media/806be557458f2152863eee8f95010210.png",
    "https://norayapim.xyz/_assets/media/84a516c2c07ed0aa1c4404cd374a9da9.png",
    "https://norayapim.xyz/_assets/media/902981800a3d475aefef1247dfc8c528.jpg",
    "https://norayapim.xyz/_assets/media/9671304c91110994886639ff61eccae3.jpg",
    "https://norayapim.xyz/_assets/media/98f8e90ff9651182849cd4bae6a83eb7.jpg",
    "https://norayapim.xyz/_assets/media/9ad7842a41a57e1cba7e4ffbdd90fc60.png",
    "https://norayapim.xyz/_assets/media/9c4128d96406eb95b12e0b69351b8672.png",
    "https://norayapim.xyz/_assets/media/9e6ab51354b946e0a4ab21f63e1cd0cd.jpg",
    "https://norayapim.xyz/_assets/media/a1b6c9670d77dee08dd2724e4a9d9510.png",
    "https://norayapim.xyz/_assets/media/a9bbc130069da54023507a3d5180f3e8.png",
    "https://norayapim.xyz/_assets/media/ac2825cba943566075fa5d4446d15645.png",
    "https://norayapim.xyz/_assets/media/b451f8126b41ef6a28bfe896c9c95426.jpg",
    "https://norayapim.xyz/_assets/media/b5d11fc99cdcf3ef726bb387fc11d2d9.jpg",
    "https://norayapim.xyz/_assets/media/b7e1ef7fc6acc50739a46824143a0c08.jpg",
    "https://norayapim.xyz/_assets/media/d0b3b3e253c9358720eda5da2369489a.png",
    "https://norayapim.xyz/_assets/media/d74b7e205b43a47e793c194884bb6cf0.jpg",
    "https://norayapim.xyz/_assets/media/e7277bece92b5c072cb6a699d0881a47.jpg",
    "https://norayapim.xyz/_assets/media/e7dc05cc3c103494ffe0e7b416c3e9f2.png",
    "https://norayapim.xyz/_assets/media/ed0eb97b42a798066eee028cef06018e.jpg",
    "https://norayapim.xyz/_assets/media/fb87c06f8f80841a901dcf6f72994eb5.png"
  ];

  // Setten Kareler - SettenKareler2Section'dan alınan görseller
  const setImages = [
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
    "https://norayapim.xyz/_assets/media/811c798ff552a60ec746340990fe7725.jpg",
    "https://norayapim.xyz/_assets/media/faafa706123a8c11b99df84796f40e89.jpg",
    "https://norayapim.xyz/_assets/media/c08ee4e915ffd05f3dce26c92dba69e2.jpg",
    "https://norayapim.xyz/_assets/media/08bd60829b4b7e13908da3152bf08d1b.jpg",
    "https://norayapim.xyz/_assets/media/a24c81374cdc21dc496778b235f2cc55.jpg",
    "https://norayapim.xyz/_assets/media/427ebd7453682591be356a6926264d9a.jpg",
    "https://norayapim.xyz/_assets/media/3c7f3a95855dff001eb9ef93d2f1140b.jpg",
    "https://norayapim.xyz/_assets/media/2060255c8bece77119d1737fd4cf8e59.jpg",
    "https://norayapim.xyz/_assets/media/a955859fe3363680c50c9023d38c0894.jpg"
  ];

  const handleImageClick = (src: string, title: string, description: string, index: number) => {
    setSelectedImage(selectedImage?.index === index ? null : { src, title, description, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Filter Component
  const FilterButtons = () => (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {[
        { key: 'all', label: 'Tümü' },
        { key: 'projects', label: 'Projeler' },
        { key: 'brands', label: 'Markalar' },
        { key: 'sets', label: 'Set Kareleri' }
      ].map((filter) => (
        <motion.button
          key={filter.key}
          onClick={() => setActiveFilter(filter.key as any)}
          className={`px-8 py-3 rounded-full border-2 font-medium transition-all duration-300 ${
            activeFilter === filter.key
              ? 'border-white bg-white text-black'
              : 'border-white/30 text-white hover:border-white/60 hover:bg-white/5'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );

  // Gallery Item Component for Projects
  const ProjectGalleryItem = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => handleImageClick(project.src, project.title, project.description, index)}
      layout
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3]">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{project.description}</p>
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

  // Gallery Item Component for Brands
  const BrandGalleryItem = ({ src, index }: { src: string; index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => handleImageClick(src, `Marka #${index + 1}`, "İş birliği yaptığımız değerli markalardan biri", index + 1000)}
      layout
    >
      <div className="relative overflow-hidden rounded-2xl bg-white p-6 aspect-[4/3]">
        <img
          src={src}
          alt={`Marka ${index + 1}`}
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-2xl" />
        <div className="absolute top-4 right-4 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );

  // Gallery Item Component for Set Images
  const SetGalleryItem = ({ src, index }: { src: string; index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => handleImageClick(src, `Set Karesi #${index + 1}`, "Projelerimizden unutulmaz anlar ve yaratıcı sürecin arka planından kareler", index + 2000)}
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
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tight mb-6">
                  GALERİ & PORTFÖY
                </h1>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Yaratıcı vizyonumuzun ve profesyonel çalışmalarımızın görsel hikayesi
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-8 mt-16"
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{projectImages.length}+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{brandImages.length}+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Marka</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{setImages.length}+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Set Karesi</div>
                </div>
              </motion.div>
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
            {/* Filter Buttons */}
            <FilterButtons />

            {/* Gallery Grid */}
            <motion.div 
              className="space-y-20"
              layout
            >
              {/* Projects Section */}
              {(activeFilter === 'all' || activeFilter === 'projects') && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                      Proje Alanımız
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                      Gerçekleştirdiğimiz tüm projeler - Video prodüksiyon, dijital medya, reklam ve daha fazlası
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {projectImages.map((project, index) => (
                      <ProjectGalleryItem key={index} project={project} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Brands Section */}
              {(activeFilter === 'all' || activeFilter === 'brands') && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                      İş Birliği Yaptığımız Markalar
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                      Güvenlerini kazandığımız ve projelerinde tercih edilen değerli iş ortaklarımız
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {brandImages.map((brand, index) => (
                      <BrandGalleryItem key={index} src={brand} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Set Images Section */}
              {(activeFilter === 'all' || activeFilter === 'sets') && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {setImages.map((image, index) => (
                      <SetGalleryItem key={index} src={image} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}
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
