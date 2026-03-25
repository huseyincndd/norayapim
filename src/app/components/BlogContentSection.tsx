'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getBlogPostsPaginated, BlogPost } from '../../lib/supabase'

const BlogContentSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalPosts, setTotalPosts] = useState(0)

  useEffect(() => {
    fetchPosts()
  }, [currentPage])

  const fetchPosts = async () => {
    try {
      const paginatedData = await getBlogPostsPaginated(currentPage, 10)
      
      setBlogPosts(paginatedData.posts)
      setTotalPages(paginatedData.totalPages)
      setTotalPosts(paginatedData.total)
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getSafeImageUrl = (url?: string) => {
    if (!url) return null
    if (!url.startsWith('https://')) return null
    if (!url.includes('b-cdn.net')) return null
    return url
  }

  const getExcerpt = (html?: string) => {
    if (!html) return 'İçerik yakında eklenecek.'
    return html.replace(/<[^>]*>/g, '').trim().slice(0, 160) + '...'
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

        {/* Regular Blog Posts */}
        <div className="space-y-32">
          {blogPosts.map((post, index) => (
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
                        {getSafeImageUrl(post.featured_image) && (
                          <img
                            src={getSafeImageUrl(post.featured_image) || ''}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                        </div>
                      </div>
                      
                      {/* Excerpt */}
                      <p className="text-white/80 text-xl leading-relaxed mb-6">
                        {getExcerpt(post.content)}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-white/60 text-sm">
                        <span>Fortis Yapım</span>
                        <span>•</span>
                        <span>5 dk okuma</span>
                      </div>
                      

                    </div>
                  </section>
                </Link>
              </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center mt-20 space-x-2"
          >
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              Önceki
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-white text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              Sonraki
            </button>
          </motion.div>
        )}

        {/* Page Info */}
        {totalPosts > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-8"
          >
            <p className="text-white/60 text-sm">
              Sayfa {currentPage} / {totalPages} • Toplam {totalPosts} blog yazısı
            </p>
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