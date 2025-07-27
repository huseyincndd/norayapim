"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SetPhoto {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  location?: string;
}

// Mock set photos data
const setPhotos: SetPhoto[] = [
  {
    id: 1,
    title: "Kamera Arkası",
    description: "Ana karakterin duygusal sahnesi çekilirken",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    category: "Drama",
    date: "Mart 2024",
    location: "İstanbul Film Stüdyosu"
  },
  {
    id: 2,
    title: "Işık Kurulumu",
    description: "Gece sahnesi için profesyonel ışıklandırma",
    imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    category: "Teknik",
    date: "Şubat 2024",
    location: "Açık Hava Seti"
  },
  {
    id: 3,
    title: "Makyaj Hazırlığı",
    description: "Oyuncuların karakter makyajı sırasında",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    category: "Hazırlık",
    date: "Ocak 2024",
    location: "Makyaj Odası"
  },
  {
    id: 4,
    title: "Set Dekorasyonu",
    description: "Sahne için detaylı dekor hazırlığı",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    category: "Sanat",
    date: "Aralık 2023",
    location: "Stüdyo 3"
  },
  {
    id: 5,
    title: "Kamera Hareketi",
    description: "Steadicam ile dinamik sahne çekimi",
    imageUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop",
    category: "Teknik",
    date: "Kasım 2023",
    location: "Sokak Seti"
  },
  {
    id: 6,
    title: "Oyuncu Provası",
    description: "Sahne öncesi son prova anları",
    imageUrl: "https://images.unsplash.com/photo-1506947411487-a56738267384?w=800&h=600&fit=crop",
    category: "Hazırlık",
    date: "Ekim 2023",
    location: "Prova Odası"
  },
  {
    id: 7,
    title: "Ses Kaydı",
    description: "Profesyonel ses kayıt ekipmanları",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    category: "Teknik",
    date: "Eylül 2023",
    location: "Ses Stüdyosu"
  },
  {
    id: 8,
    title: "Kostüm Fitting",
    description: "Karakter kostümlerinin son ayarları",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    category: "Hazırlık",
    date: "Ağustos 2023",
    location: "Kostüm Atölyesi"
  }
];

// Photo Card Component
const PhotoCard = ({ photo, isSelected, onSelect }: { 
  photo: SetPhoto, 
  isSelected: boolean, 
  onSelect: () => void 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className={`relative aspect-[4/3] overflow-hidden cursor-pointer group ${
        isSelected ? 'ring-2 ring-premium-red' : ''
      }`}
      onClick={onSelect}
    >
      {/* Background Image */}
      <img
        src={photo.imageUrl}
        alt={photo.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Hover Overlay - Only visible on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
        {/* Content - Only visible on hover */}
        <div className="p-4 lg:p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
          {/* Category Badge */}
          <div className="inline-flex items-center px-2 py-1 lg:px-3 lg:py-1 bg-premium-red/90 backdrop-blur-sm rounded-full border border-premium-red/50 mb-2 lg:mb-3">
            <span className="text-xs font-semibold text-white">{photo.category}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-white leading-tight">
            {photo.title}
          </h3>

          {/* Description */}
          <p className="text-xs lg:text-sm text-white/90 mb-2 lg:mb-3 line-clamp-2 leading-relaxed">
            {photo.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-white/70">
            <span className="font-medium">{photo.date}</span>
            {photo.location && (
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="hidden sm:inline">{photo.location}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Modal Component
const PhotoModal = ({ photo, isOpen, onClose }: { 
  photo: SetPhoto | null, 
  isOpen: boolean, 
  onClose: () => void 
}) => {
  if (!photo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-premium-red/20 hover:border-premium-red/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-video">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Category Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-premium-red/20 backdrop-blur-sm rounded-full border border-premium-red/30 mb-4">
                <span className="text-sm font-medium text-premium-red">{photo.category}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white mb-4">{photo.title}</h2>

              {/* Description */}
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                {photo.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{photo.date}</span>
                {photo.location && (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {photo.location}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Setten Kareler Section Component
const SettenKarelerSection = ({ noBg = false }: { noBg?: boolean }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<SetPhoto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoSelect = (photo: SetPhoto) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <section className={`py-24 lg:py-32 ${noBg ? 'bg-transparent' : 'bg-gradient-to-br from-black via-gray-900 to-black'} overflow-hidden relative`}>
      {/* Background Elements (Animated Lines, Floating Blurs) */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black/80 to-black" />
          <div className="absolute inset-0 overflow-hidden">
            <motion.div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} viewport={{ once: true }} />
            <motion.div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }} viewport={{ once: true }} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <motion.div className="absolute top-1/3 left-1/4 w-32 h-32 bg-premium-red/5 rounded-full blur-2xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-premium-red/5 rounded-full blur-2xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
          </div>
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* About Us Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-2 h-2 bg-premium-red rounded-full" />
            <span className="text-white/60 text-sm uppercase tracking-wider">Kamera Arkası</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Setten{" "}
            <span className="text-premium-red">Kareler</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Film setlerinden, kamera arkasından ve yaratıcı süreçlerimizden özel anlar
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-premium-red mx-auto mt-8"
          />
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {setPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isSelected={selectedPhoto?.id === photo.id}
              onSelect={() => handlePhotoSelect(photo)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 mb-6">
            Daha fazla set fotoğrafı için sosyal medya hesaplarımızı takip edin
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-xl bg-premium-red px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black border border-premium-red/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Daha Fazla Gör</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <PhotoModal
        photo={selectedPhoto}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default SettenKarelerSection; 