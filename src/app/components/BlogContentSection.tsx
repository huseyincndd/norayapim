'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getBlogPosts, getFeaturedBlogPosts, BlogPost } from '../../lib/supabase'

const BlogContentSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const [posts, featured] = await Promise.all([
        getBlogPosts(),
        getFeaturedBlogPosts()
      ])
      setBlogPosts(posts)
      setFeaturedPosts(featured)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            Blog Yazıları
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Yapım dünyasından hikayeler, teknikler ve sektörel gelişmeler
          </motion.p>
        </div>

        {/* Featured Posts - First 3 */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-32"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Öne Çıkan Yazılar</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                    {post.featured_image && (
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${post.featured_image})` }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                        {post.category?.name || 'Blog'}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {formatDate(post.published_at || post.created_at)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Blog Posts */}
        <div className="space-y-32">
          {blogPosts
            .filter(post => !featuredPosts.find(featured => featured.id === post.id))
            .map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Image - Left Side */}
                    <div className="lg:w-1/2">
                      <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black group-hover:shadow-2xl transition-shadow duration-500">
                        {post.featured_image && (
                          <div 
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                            style={{ backgroundImage: `url(${post.featured_image})` }}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    </div>

                    {/* Content - Right Side */}
                    <div className="lg:w-1/2 lg:pl-8">
                      {/* Date */}
                      <div className="text-white/60 text-sm mb-4">
                        {formatDate(post.published_at || post.created_at)}
                      </div>
                      
                      {/* Category and Title */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight group-hover:text-white/80 transition-colors">
                            {post.title}
                          </h2>
                          <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ml-4">
                            {post.category?.name || 'Blog'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Excerpt */}
                      <p className="text-white/80 text-xl leading-relaxed mb-6">
                        {post.seo_description || 'Blog yazısı açıklaması...'}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-white/60 text-sm">
                        <span>Nora Yapım</span>
                        <span>•</span>
                        <span>5 dk okuma</span>
                      </div>
                    </div>
                  </section>
                </Link>
              </motion.div>
            ))}
        </div>

        {/* Load More Button */}
        {blogPosts.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Daha Fazla Yükle
            </button>
          </motion.div>
        )}

        {/* No Posts Message */}
        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-xl">Henüz blog yazısı bulunmuyor.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogContentSection 