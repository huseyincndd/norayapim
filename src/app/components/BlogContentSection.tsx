'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "2024'te Video Prodüksiyon Trendleri",
    excerpt: "Bu yılın en popüler video prodüksiyon teknikleri ve yaratıcı yaklaşımları hakkında detaylı bir rehber.",
    category: "Trendler",
    author: "Nora Yapım",
    date: "15 Mart 2024",
    readTime: "8 dk",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Drone Çekim Teknikleri: Profesyonel İpuçları",
    excerpt: "Drone ile etkileyici çekimler yapmanın sırları ve güvenlik önlemleri hakkında kapsamlı bir kılavuz.",
    category: "Teknik",
    author: "Ahmet Yılmaz",
    date: "12 Mart 2024",
    readTime: "12 dk",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Kurumsal Video İçerik Stratejisi",
    excerpt: "Markanız için etkili video içerik stratejisi geliştirme ve hedef kitleye ulaşma yöntemleri.",
    category: "Strateji",
    author: "Zeynep Kaya",
    date: "10 Mart 2024",
    readTime: "10 dk",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Post Prodüksiyon: Renk Düzenleme Rehberi",
    excerpt: "Video düzenleme sürecinde renk düzenleme teknikleri ve profesyonel görünüm elde etme yöntemleri.",
    category: "Teknik",
    author: "Mehmet Demir",
    date: "8 Mart 2024",
    readTime: "15 dk",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Sosyal Medya Video İçerikleri",
    excerpt: "Instagram, TikTok ve YouTube için optimize edilmiş video içerik üretme ve yayınlama stratejileri.",
    category: "Sosyal Medya",
    author: "Elif Özkan",
    date: "5 Mart 2024",
    readTime: "9 dk",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Müzik Video Prodüksiyon Süreci",
    excerpt: "Bir müzik videosunun konsept aşamasından final ürüne kadar olan tüm prodüksiyon süreci.",
    category: "Prodüksiyon",
    author: "Can Yıldız",
    date: "3 Mart 2024",
    readTime: "11 dk",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
  }
]

const categories = ["Tümü", "Trendler", "Teknik", "Strateji", "Sosyal Medya", "Prodüksiyon"]

const BlogContentSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Tümü" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            En Son Blog Yazıları
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Video prodüksiyon dünyasından en güncel bilgiler, teknik ipuçları ve yaratıcı içgörüler
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-6 mb-12"
        >
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-premium-red/50 transition-colors"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-premium-red text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

                 {/* Featured Post */}
         {filteredPosts.length > 0 && filteredPosts[0]?.featured && (
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             viewport={{ once: true }}
             className="mb-32"
           >
             <Link href={`/blog/${filteredPosts[0].id}`} className="group">
               <section className="flex flex-col lg:flex-row gap-16 items-center">
                 {/* Large Image - Left Side */}
                 <div className="lg:w-1/2">
                   <div className="relative h-[500px] overflow-hidden rounded-2xl">
                     <img
                       src={filteredPosts[0].image}
                       alt={filteredPosts[0].title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                   </div>
                 </div>

                 {/* Content - Right Side */}
                 <div className="lg:w-1/2 lg:pl-8">
                   {/* Date */}
                   <div className="text-white/60 text-sm mb-4">
                     {filteredPosts[0].date}
                   </div>
                   
                   {/* Category and Title */}
                   <div className="mb-6">
                     <div className="flex items-center justify-between mb-4">
                       <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight group-hover:text-premium-red transition-colors">
                         {filteredPosts[0].title}
                       </h2>
                       <div className="flex flex-col items-end gap-2 ml-4">
                         <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                           {filteredPosts[0].category}
                         </span>
                         <span className="text-white/60 text-sm">Öne Çıkan</span>
                       </div>
                     </div>
                   </div>
                   
                   {/* Excerpt */}
                   <p className="text-white/80 text-xl leading-relaxed mb-6">
                     {filteredPosts[0].excerpt}
                   </p>
                   
                   {/* Meta Info */}
                   <div className="flex items-center gap-4 text-white/60 text-sm">
                     <span>{filteredPosts[0].author}</span>
                     <span>•</span>
                     <span>{filteredPosts[0].readTime} okuma</span>
                   </div>
                 </div>
               </section>
             </Link>
           </motion.div>
         )}

        {/* Blog Posts */}
        <div className="space-y-32">
          {filteredPosts
            .filter(post => !post.featured)
            .map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.id}`} className="group">
                  <section className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Large Image - Left Side */}
                    <div className="lg:w-1/2">
                      <div className="relative h-[500px] overflow-hidden rounded-2xl">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Content - Right Side */}
                    <div className="lg:w-1/2 lg:pl-8">
                      {/* Date */}
                      <div className="text-white/60 text-sm mb-4">
                        {post.date}
                      </div>
                      
                      {/* Category and Title */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight group-hover:text-premium-red transition-colors">
                            {post.title}
                          </h2>
                          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ml-4">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Excerpt */}
                      <p className="text-white/80 text-xl leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-white/60 text-sm">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime} okuma</span>
                      </div>
                    </div>
                  </section>
                </Link>
              </motion.div>
            ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="bg-premium-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-premium-red/90 transition-all duration-300">
              Daha Fazla Yazı Yükle
            </button>
          </motion.div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
                       <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
             <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
           </div>
           <h3 className="text-2xl font-bold text-white mb-2">Sonuç Bulunamadı</h3>
           <p className="text-white/60">Arama kriterlerinize uygun blog yazısı bulunamadı.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default BlogContentSection 