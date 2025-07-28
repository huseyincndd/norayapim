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

export default function Home() {

  return (
    <main>
      <HeroSection />
      <MissionStatementSection/>
      
      {/* Premium Black Background Section */}
      <section className="relative bg-black">
        <div className="relative z-10">
          <IconGridSection noBg />
        </div>
        <div className="relative z-10">
          <AboutSection noBg />
        </div>
        <div className="relative z-10">
          <SloganSliderSection noBg />
        </div>
        <div className="relative z-10">
          <ServicesSectionNew noBg />
        </div>
        <div className="relative z-10">
          <LogoMarquee noBg />
        </div>
      </section>
      <ProjectsShowcase />
      
      {/* Second Premium Black Background Section */}
      <section className="relative bg-black">
        <div className="relative z-10">
          <ArtisticProjectsSection noBg />
        </div>
        <div className="relative z-10">
          <BlogPreviewSection noBg />
        </div>
        <div className="relative z-10">
          <InstagramFilmstrip noBg />
        </div>
        <div className="relative z-10">
          <SettenKarelerSection noBg />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
