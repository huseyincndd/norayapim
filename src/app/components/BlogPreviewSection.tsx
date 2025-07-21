"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group cursor-pointer"
    >
      <Link href={post.slug} className="block">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-200">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

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
              className="mt-4 flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors duration-300"
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
const BlogPreviewSection = ({ posts = dummyPosts }: { posts?: BlogPost[] }) => {
  // Stagger animation variants for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-[#181818] font-serif mb-6"
          >
            Ajans'tan Haberler
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed"
          >
            Sektörden son gelişmeler, başarı hikayeleri ve ipuçları.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-[#D4AF37] mx-auto mt-8"
          />
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 mb-16"
        >
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link 
            href="/blog"
            className="group inline-flex items-center gap-3 text-[#181818] font-semibold text-lg hover:text-[#D4AF37] transition-colors duration-300"
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