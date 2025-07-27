'use client'

import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import SloganSliderSection from './components/SloganSliderSection'
import PremiumStatsSection from './components/PremiumStatsSection'
import ProjectsShowcase from './components/ProjectsShowcase'
import ServicesSection from './components/ServicesSection'
import ServicesSectionNew from './components/ServicesSectionNew'
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
import { GeometricShapes } from './components/GeometricShapes'

export default function Home() {

  return (
    <main>
      <HeroSection />
      <MissionStatementSection/>
      
      {/* Advanced Digital Art Background Canvas */}
      <section className="relative bg-[#0A0A0A] overflow-hidden">
        
        {/* Layer 0: Base Canvas with Subtle Texture */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          />
        </div>

        {/* Layer 1: Geometric Shapes */}
        <div className="absolute inset-0 z-10">
          <GeometricShapes />
        </div>

        <div className="relative z-40">
          <IconGridSection noBg />
        </div>
        <div className="relative z-40">
          <AboutSection noBg />
        </div>
        <div className="relative z-40">
          <SloganSliderSection noBg />
        </div>
        <div className="relative z-40">
          <ServicesSectionNew noBg />
        </div>
        <div className="relative z-40">
          <LogoMarquee noBg />
        </div>
      </section>
      <ProjectsShowcase />
      
      {/* Second Unified Background for Additional Sections */}
      <section className="relative bg-[#0A0A0A] overflow-hidden">
        
        {/* Layer 0: Base Canvas with Subtle Texture */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          />
        </div>

        {/* Layer 1: Geometric Shapes */}
        <div className="absolute inset-0 z-10">
          <GeometricShapes />
        </div>

        <div className="relative z-40">
          <ArtisticProjectsSection noBg />
        </div>
        <div className="relative z-40">
          <BlogPreviewSection noBg />
        </div>
        <div className="relative z-40">
          <InstagramFilmstrip noBg />
        </div>
        <div className="relative z-40">
          <SettenKarelerSection noBg />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
