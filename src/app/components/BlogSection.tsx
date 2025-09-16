"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  imageUrl: string;
  readTime: string;
  isFeatured?: boolean;
}

// Sample blog data - replace with actual content
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "2024'te Video Prodüksiyon Trendleri: AI ve Yaratıcılığın Buluşması",
    excerpt: "Yapay zeka teknolojilerinin video prodüksiyon sektörüne getirdiği yenilikler ve gelecekte bizi bekleyen dönüşümler hakkında detaylı bir analiz.",
    category: "Sektör Haberleri",
    publishDate: "15 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    readTime: "5 dk okuma",
    isFeatured: true
  },
  {
    id: 2,
    title: "Kamera Arkası: Lüks Villa Tanıtım Projesi",
    excerpt: "",
    category: "Kamera Arkası",
    publishDate: "12 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    readTime: "3 dk okuma"
  },
  {
    id: 3,
    title: "Müzik Video Çekimlerinde Işık Teknikleri",
    excerpt: "",
    category: "Teknik Rehber",
    publishDate: "10 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    readTime: "4 dk okuma"
  },
  {
    id: 4,
    title: "Kurumsal Video Prodüksiyonunda Hikaye Anlatımı",
    excerpt: "",
    category: "İçgörüler",
    publishDate: "8 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    readTime: "6 dk okuma"
  },
  {
    id: 5,
    title: "Drone Çekimlerinde Güvenlik ve Yasal Düzenlemeler",
    excerpt: "",
    category: "Teknik Rehber",
    publishDate: "5 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1506947411487-a56738267384?w=600&h=400&fit=crop",
    readTime: "4 dk okuma"
  },
  {
    id: 6,
    title: "Sosyal Medya İçerik Stratejileri",
    excerpt: "",
    category: "Dijital Pazarlama",
    publishDate: "3 Mart 2024",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    readTime: "7 dk okuma"
  }
];

// Featured Blog Card Component
const FeaturedBlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl bg-gray-900 shadow-2xl"
    >
      {/* Background Image */}
      <div className="relative h-80 md:h-96 w-full overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Glassmorphism Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6">
          {/* Category and Date */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span>{post.publishDate}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-4 text-2xl md:text-3xl font-bold text-white leading-tight">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="mb-6 text-white/90 text-sm md:text-base leading-relaxed">
            {post.excerpt}
          </p>

          {/* Read More Link */}
          <motion.a
            href={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span>Devamını Oku</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

// Standard Blog Card Component
const StandardBlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-lg"
    >
      {/* Background Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Glassmorphism Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-4">
          {/* Category and Date */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block rounded-full bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <span>{post.publishDate}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-3 text-lg font-bold text-white leading-tight line-clamp-2">
            {post.title}
          </h3>

          {/* Read More Link */}
          <motion.a
            href={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm">Devamını Oku</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

const BlogSection: React.FC = () => {
  const featuredPost = blogPosts.find(post => post.isFeatured);
  const standardPosts = blogPosts.filter(post => !post.isFeatured);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{ filter: 'brightness(0.3) contrast(1.2)' }}
        >
          <source 
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          {/* Fallback for browsers that don't support video */}
          <div className="h-full w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
        </video>
        
        {/* Dark Overlay for Content Readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Subtle Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Fortis Yapım'dan Haberler & İçgörüler
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Video prodüksiyon dünyasından en güncel trendler, teknik rehberler ve sektör içgörüleri.
          </p>
        </motion.div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Featured Post */}
          {featuredPost && (
            <FeaturedBlogCard post={featuredPost} />
          )}

          {/* Standard Posts */}
          {standardPosts.map((post, index) => (
            <StandardBlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span>Tüm Yazıları Gör</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection; 