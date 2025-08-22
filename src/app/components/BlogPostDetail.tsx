'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from './Header'
import { getBlogPostBySlug, BlogPost } from '../../lib/supabase'

const BlogPostDetail = ({ postId }: { postId: string }) => {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const blogPost = await getBlogPostBySlug(postId);
        setPost(blogPost);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p className="text-white/60 mt-4">Blog yazısı yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 font-montserrat tracking-wide">Yazı Bulunamadı</h1>
          <p className="text-white/60 mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link href="/blog" className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
            Blog'a Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={post.detail_image || post.featured_image || "https://demo.awaikenthemes.com/artistics/creative-portfolio/wp-content/uploads/2025/02/page-header-bg.jpg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-white/80 text-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(post.published_at || post.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span>{post.category?.name || 'Blog'}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm">Aşağı Kaydır</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <img
                src={post.detail_image || post.featured_image || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=1080&fit=crop"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Article Content */}
            <article className="max-w-none">
              <div 
                className="text-white/90 leading-relaxed prose prose-lg prose-invert max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* FAQ Section */}
            {post.faq && (
              <div className="mt-20 p-10 bg-white/5 rounded-3xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-8">Sık Sorulan Sorular</h3>
                <div className="space-y-6">
                  {post.faq.split('\n').map((line, index) => {
                    if (line.startsWith('Soru:')) {
                      const question = line.replace('Soru:', '').trim();
                      const answer = post.faq?.split('\n')[index + 1]?.replace('Cevap:', '').trim() || '';
                      return (
                        <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                          <h4 className="text-xl font-semibold text-white mb-3">{question}</h4>
                          <p className="text-white/70 leading-relaxed">{answer}</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-20 p-10 bg-white/5 rounded-3xl border border-white/10">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">NY</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Nora Yapım</h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    Video prodüksiyon alanında uzmanlaşmış deneyimli bir ekip. 
                    Teknoloji ve yaratıcılığın kesişiminde yer alan konularda 
                    içerik üretiyor. 10+ yıllık sektör deneyimi ile en güncel 
                    trendleri ve teknikleri paylaşıyor.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-20 text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tüm Yazılara Dön
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostDetail 