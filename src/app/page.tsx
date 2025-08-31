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
import CreativeFlowSection from './components/CreativeFlowSection'
import ImageSliderSection from './components/ImageSliderSection'
import InstagramFeedSection from './components/InstagramFeedSection'
import FlowingImagesSection from './components/FlowingImagesSection'
import HighlightsFromSetSection from './components/HighlightsFromSetSection'
import SettenKareler2Section from './components/SettenKareler2Section'
import ChannelLogoSlider from './components/ChannelLogoSlider'
import Image from 'next/image'
import InstagramEmbedSection from './components/InstagramEmbedSection'

export default function Home() {

  return (
    <main className="relative">
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
          <ServicesSectionNew noBg />
        </div>
        <div className="relative z-10">
          {/* Creative Flow Section */}
          <CreativeFlowSection noBg />
        </div>
        
        <div className="relative z-10">
          <StatsSection noBg />
        </div>
        <div className="relative z-10">
          {/* Image Slider Section */}
          <ImageSliderSection noBg />
        </div>

        <div className="relative z-10">
          <ChannelLogoSlider noBg />
        </div>

      </section>
      
      
      
      {/* Second Premium Black Background Section */}
      <section className="relative bg-black">
        <div className="relative z-10">
          <BlogPreviewSection noBg />
        </div>
        
        <div className="relative z-10">
          <SettenKareler2Section noBg />
        </div>
        <div className="relative z-10">
          <InstagramFeedSection noBg />
        </div>
        
      </section>
      
      <Footer />
    </main>
  )
}
