'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from './Header'
import { getBlogPostBySlug, getPublicBlogPosts, BlogPost } from '../../lib/supabase'

const BlogPostDetail = ({ postId }: { postId: string }) => {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const safeImageUrl = post?.featured_image?.startsWith('https://') && post.featured_image.includes('b-cdn.net')
    ? post.featured_image
    : null

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const blogPost = await getBlogPostBySlug(postId);
        setPost(blogPost);
        
        if (blogPost) {
          const allPosts = await getPublicBlogPosts();
          const filtered = allPosts.filter(p => p.id !== blogPost.id);
          const shuffled = filtered.sort(() => 0.5 - Math.random());
          setRelatedPosts(shuffled.slice(0, 3));
        }
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
      
      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Title and Meta Info */}
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
              >
                {post.title}
              </motion.h1>
              
              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center gap-6 text-white/80 text-lg"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{formatDate(post.published_at || post.created_at)}</span>
                </div>
              </motion.div>
            </div>

            {/* Featured image */}
            {safeImageUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-16"
              >
                <div className="relative h-64 sm:h-[400px] md:h-[600px] w-full rounded-2xl md:rounded-3xl overflow-hidden">
                  <img
                    src={safeImageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}

            {/* Article Content */}
            <article className="max-w-none">
              <div 
                className="text-white/90 leading-relaxed prose prose-lg prose-invert max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </article>

            {/* FAQs Section */}
            {post.faq_data && post.faq_data.length > 0 && (
              <div className="mt-20">
                <h2 className="text-3xl font-bold text-white mb-8">Sıkça Sorulan Sorular</h2>
                <div className="space-y-4">
                  {post.faq_data.map((faq, index) => (
                    <div 
                      key={index} 
                      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                        <motion.span 
                          animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                          className="flex-shrink-0 text-white/50"
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.span>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{ height: openFaqIndex === index ? 'auto' : 0, opacity: openFaqIndex === index ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-white/70 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-20 p-10 bg-white/5 rounded-3xl border border-white/10">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">FF</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Fortis Film</h3>
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

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-24 border-t border-white/10 pt-16">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">Bunu Da Okumak İsteyebilirsiniz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map(rp => (
                    <Link href={`/blog/${rp.slug}`} key={rp.id} className="group block h-full">
                      <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                        {rp.featured_image ? (
                          <div className="h-48 overflow-hidden relative">
                            <img src={rp.featured_image} alt={rp.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        ) : (
                          <div className="h-48 bg-gray-900" />
                        )}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/80 transition-colors line-clamp-2">{rp.title}</h3>
                          <p className="text-white/60 text-sm line-clamp-3">
                            {rp.meta_description || (rp.content || '').replace(/<[^>]*>/g, '').substring(0, 100) + '...'}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostDetail 