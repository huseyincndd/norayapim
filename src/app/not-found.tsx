'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        
        {/* Subtle Lines */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Elegant 404 Display */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="relative">
              {/* Large 404 Number */}
              <h1 className="text-9xl sm:text-[12rem] lg:text-[16rem] font-black text-white/5 leading-none tracking-tighter">
                404
              </h1>
              
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-6xl sm:text-8xl lg:text-10xl font-bold text-white leading-none tracking-tight">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    404
                  </span>
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Sophisticated Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
              Sayfa Bulunamadı
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8" />
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
              <br />
              Ana sayfaya dönerek yeni bir yolculuğa başlayabilirsiniz.
            </p>
          </motion.div>

          {/* Modern Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Ana Sayfaya Dön</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-4 border border-white/20 text-white font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10">İletişime Geç</span>
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Elegant Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="pt-12 border-t border-white/10"
          >
            <p className="text-sm text-white/50 font-light tracking-wide">
              Fortis Yapım • Video Production & Creative Agency
            </p>
            <p className="text-xs text-white/30 mt-2 font-light">
              Crafting cinematic stories since 2008
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Design Elements */}
      <motion.div
        className="absolute top-32 left-16 w-1 h-1 bg-white/40 rounded-full"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-2 h-2 bg-white/30 rounded-full"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/50 rounded-full"
        animate={{ 
          x: [0, 15, 0],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </main>
  )
}
