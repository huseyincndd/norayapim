'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const BlogHeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
          alt="Blog Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      </div>



      {/* Main Content */}
      <div className="relative z-20 h-full flex items-end">
        <div className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight font-bebas-neue tracking-wider">
                BLOG
              </h1>
              <p className="text-xl text-white/80 max-w-lg font-lato">
                Sektöre Dair Güncel Bilgi ve Paylaşımlar
              </p>
              <p className="text-lg text-white/70 max-w-xl font-lato">
                Yapım süreçlerimiz, güncel projelerimiz, sektördeki güncel gelişmeleri ve profesyonel bakış açısını düzenli olarak paylaşıyoruz.
              </p>
            </motion.div>

            {/* Right Side - CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col items-end space-y-6"
            >
              <div className="flex items-center gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 group font-montserrat tracking-wide">
                  EN SON YAZILAR
                </button>
                <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 group">
                  <svg className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12"
          >
            <nav className="flex items-center gap-2 text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>•</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            </nav>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
  )
}

export default BlogHeroSection 