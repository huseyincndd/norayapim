"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Blog post data structure
interface BlogPost {
  id: number;
  title: string;
  excerpt?: string;
  imageUrl: string;
  slug: string;
  date?: string;
}

// Dummy blog posts data
const dummyPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Doğru Headshot Fotoğrafı Nasıl Çekilir?',
    excerpt: 'Profesyonel oyuncu portreleri için temel teknikler ve ipuçları',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
    slug: '/blog/dogru-headshot-fotografi',
    date: '15 Mart 2024'
  },
  {
    id: 2,
    title: 'Casting Sürecinde Dikkat Edilmesi Gerekenler',
    excerpt: 'Başarılı bir casting deneyimi için hazırlık rehberi',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=1000&fit=crop',
    slug: '/blog/casting-sureci',
    date: '12 Mart 2024'
  },
  {
    id: 3,
    title: 'Sosyal Medyada Oyuncu Markası Oluşturma',
    excerpt: 'Dijital çağda oyuncu kimliğinizi nasıl geliştirirsiniz?',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=1000&fit=crop',
    slug: '/blog/oyuncu-markasi',
    date: '10 Mart 2024'
  },
  {
    id: 4,
    title: 'Türk Sinemasında Yeni Trendler',
    excerpt: '2024 yılında öne çıkan projeler ve fırsatlar',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=1000&fit=crop',
    slug: '/blog/turk-sinemasi-trendleri',
    date: '8 Mart 2024'
  },
  {
    id: 5,
    title: 'Oyunculuk Teknikleri ve Metodlar',
    excerpt: 'Profesyonel oyunculuk için temel teknikler',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
    slug: '/blog/oyunculuk-teknikleri',
    date: '5 Mart 2024'
  },
  {
    id: 6,
    title: 'Dijital Çağda Oyunculuk',
    excerpt: 'Teknoloji ile değişen oyunculuk sektörü',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=1000&fit=crop',
    slug: '/blog/dijital-cagda-oyunculuk',
    date: '3 Mart 2024'
  }
];

// Blog Card Component
const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group cursor-pointer flex-shrink-0"
    >
      <Link href={post.slug} className="block">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-900 border border-white/10">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {/* Date */}
            {post.date && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-sm text-white/70 mb-2 font-light"
              >
                {post.date}
              </motion.p>
            )}

            {/* Title */}
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-xl lg:text-2xl font-bold mb-3 leading-tight group-hover:text-white transition-colors duration-300"
            >
              {post.title}
            </motion.h3>

            {/* Excerpt */}
            {post.excerpt && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-sm text-white/80 leading-relaxed line-clamp-2"
              >
                {post.excerpt}
              </motion.p>
            )}

            {/* Read More Indicator */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-4 flex items-center gap-2 text-sm text-premium-red/80 group-hover:text-premium-red transition-colors duration-300"
            >
              <span>Devamını Oku</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

// Main Blog Preview Section Component
const BlogPreviewSection = ({ posts = dummyPosts, noBg = false }: { posts?: BlogPost[], noBg?: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsPerView = 3; // Desktop'ta 3 card görünür
  const maxIndex = posts.length - cardsPerView; // 6 - 3 = 3, yani 0,1,2,3 indexleri (4 slide)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Her slide'da tam olarak 1 card genişliği kadar kaydır
  const slideOffset = (110 / cardsPerView) * currentIndex; // 33.333% * currentIndex

  return (
    <section className={`py-24 lg:py-32 ${noBg ? 'bg-transparent' : 'bg-gradient-to-br from-black via-gray-900 to-black'} overflow-hidden relative`}>
      {/* Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black/80 to-black" />
          
          {/* Animated Background Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/3 left-1/4 w-32 h-32 bg-premium-red/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-premium-red/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
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
            <span className="text-white/60 text-sm uppercase tracking-wider">Blog</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Ajans'tan{" "}
            <span className="text-premium-red">Haberler</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Sektörden son gelişmeler, başarı hikayeleri ve ipuçları.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-premium-red mx-auto mt-8"
          />
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-premium-red/20 hover:border-premium-red/50 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-premium-red/20 hover:border-premium-red/50 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <motion.div
              ref={sliderRef}
              className="flex gap-6 lg:gap-8"
              animate={{ x: `-${slideOffset}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {posts.map((post) => (
                <div key={post.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
                  <BlogCard post={post} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'bg-premium-red scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            href="/blog"
            className="group inline-flex items-center gap-3 text-white font-semibold text-lg hover:text-premium-red transition-colors duration-300"
          >
            <span>Tümünü Gör</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="transition-transform group-hover:translate-x-1"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection; 