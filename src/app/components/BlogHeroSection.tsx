'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const BlogHeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image - black & white aesthetic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.sineplusakademi.com/wp-content/themes/yootheme/cache/f6/freelance-film-production-f608a5c7.jpeg"
          alt="Blog Page Background"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl pt-8 lg:pt-16 mx-0 lg:mx-auto"
        >
          {/* Small label + line */}
          <div className="flex items-center gap-6 mb-6">
            <span className="uppercase tracking-wider text-sm text-white/80">Blog</span>
            <span className="h-px w-28 bg-white/40" />
          </div>

          {/* Big headline */}
          <h1 className="uppercase font-extrabold text-white leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">Sektöre Dair</span>
            <span className="block">Güncel Bilgi</span>
            <span className="block">ve Paylaşımlar</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg">
            Yapım süreçlerimiz, güncel projelerimiz, sektördeki güncel gelişmeleri ve profesyonel bakış açısını düzenli olarak paylaşıyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogHeroSection 