'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'
import BlogHeroSection from '../components/BlogHeroSection'
import BlogContentSection from '../components/BlogContentSection'

export default function BlogPage() {
  return (
    <main className="bg-black">
      <Header />
      <BlogHeroSection />
      <BlogContentSection />
    </main>
  )
} 