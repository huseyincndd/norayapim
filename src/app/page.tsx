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
import SettenKarelerSection from './components/SettenKarelerSection'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionStatementSection/>
      <IconGridSection/>
      
      {/* Unified background wrapper for About, Stats, SloganSlider, Services, LogoMarquee */}
      <section className="relative bg-gradient-to-br from-red-900/20 via-black/90 to-black overflow-hidden">
        {/* Modern Gradient Mesh */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)
              `
            }}
          />
        </div>

        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/10 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/10 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-premium-red/10 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-premium-red/10 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute w-2 h-2 bg-premium-red/30 rounded-full"
            style={{ top: '15%', left: '20%' }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-1 h-1 bg-premium-red/40 rounded-full"
            style={{ top: '25%', right: '25%' }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute w-3 h-0.5 bg-premium-red/25"
            style={{ top: '70%', left: '15%', rotate: 45 }}
            animate={{
              x: [0, 30, 0],
              opacity: [0.25, 0.6, 0.25]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute w-0.5 h-3 bg-premium-red/35"
            style={{ top: '60%', right: '20%', rotate: -30 }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.35, 0.7, 0.35]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>

        {/* Pulse Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute w-32 h-32 rounded-full border border-premium-red/10"
            style={{ top: '30%', left: '10%' }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-24 h-24 rounded-full border border-premium-red/15"
            style={{ bottom: '25%', right: '10%' }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </div>

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
      <ArtisticProjectsSection noBg />
      <BlogPreviewSection noBg />
      <InstagramFilmstrip noBg />
      <SettenKarelerSection noBg />
      <PosterGallery />
      
      <Footer />
    </main>
  )
}
