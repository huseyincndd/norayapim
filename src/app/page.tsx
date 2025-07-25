'use client'

import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import SloganSliderSection from './components/SloganSliderSection'
import PremiumStatsSection from './components/PremiumStatsSection'
import ProjectsShowcase from './components/ProjectsShowcase'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import LogoMarquee from './components/LogoMarquee'
import BlogSection from './components/BlogSection'
import BlogPreviewSection from './components/BlogPreviewSection'
import ArtisticProjectsSection from './components/ArtisticProjectsSection'
import InstagramFeed from './components/InstagramFeed'
import InstagramFilmstrip from './components/InstagramFilmstrip'
import PosterGallery from './components/PosterGallery'
import { Miss_Fajardose } from 'next/font/google'
import MissionStatementSection from './components/MissionStatementSection'
import FeaturesSection from './components/FeaturesSection'
import IconGridSection from './components/IconGridSection'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionStatementSection/>
      <IconGridSection/>
      
      {/* Unified background wrapper for About, Stats, SloganSlider, Services, LogoMarquee */}
      <section className="relative bg-gradient-to-br from-red-900/20 via-black/90 to-black overflow-hidden">
        {/* Animated Red Lines (optional, can be removed if not wanted) */}
        {/*
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute h-0.5 w-32 bg-premium-red opacity-30"
            style={{ top: '15%', left: '10%', rotate: -25 }}
            animate={{ x: ['0%', '20%'] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          />
          <motion.div
            className="absolute h-0.5 w-24 bg-premium-red opacity-40"
            style={{ bottom: '20%', right: '15%', rotate: 15 }}
            animate={{ x: ['0%', '-15%'] }}
            transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          />
          <motion.div
            className="absolute h-0.5 w-28 bg-premium-red opacity-25"
            style={{ top: '60%', left: '5%', rotate: -10 }}
            animate={{ x: ['0%', '30%'] }}
            transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          />
          <motion.div
            className="absolute h-0.5 w-20 bg-premium-red opacity-35"
            style={{ top: '80%', right: '5%', rotate: 45 }}
            animate={{ x: ['0%', '25%'] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          />
        </div>
        */}

        {/* Floating Metallic Knot Icon (IconGridSection style) */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute right-12 top-2/3 transform -translate-y-1/2"
            animate={{ 
              y: [-500, -50, -500],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          >
            <img 
              src="https://static.vecteezy.com/system/resources/previews/060/344/142/non_2x/impressive-contemporary-ultra-detailed-photorealistic-isolated-cutout-of-a-single-intricate-celtic-knot-made-of-liquid-chrome-professional-render-with-transparent-background-crisp-free-png.png"
              alt="Metallic Knot"
              className="w-64 h-64 object-cover rounded-full opacity-30"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(220,38,38,0.4)) brightness(1.2) contrast(1.1)',
                transform: 'perspective(1000px) rotateX(15deg)'
              }}
            />
          </motion.div>
        </div>

        {/* Premium Red Accent Circles (Blur) */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute w-64 h-64 rounded-full"
            style={{ 
              top: '10%', 
              right: '5%',
              background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)'
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full"
            style={{ 
              bottom: '15%', 
              left: '8%',
              background: 'radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 60%)'
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.06, 0.12, 0.06]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <AboutSection noBg />
        <StatsSection noBg />
        <SloganSliderSection noBg />
        <ServicesSection noBg />
        <LogoMarquee noBg />
      </section>
      <ProjectsShowcase />
      <ArtisticProjectsSection />
      <BlogPreviewSection />
      <InstagramFilmstrip />
      <PosterGallery />
      
      <Footer />
    </main>
  )
}
