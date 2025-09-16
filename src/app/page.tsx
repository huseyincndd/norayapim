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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fortis Film",
    "url": "https://fortisfilm.com",
    "logo": "https://villaqrmenu.b-cdn.net/nora/fortis%20film%20logo.png",
    "description": "16 yılı aşkın deneyimi ile dizi, sinema ve reklam projelerinde öncü olan Fortis Film. Modern teknoloji ve yaratıcı çözümlerle hikâyeleri unutulmaz görsel deneyimlere dönüştürüyoruz.",
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business İstanbul, Merdivenköy Mahallesi, Dikyol Sokak No:2, Kat:18",
      "addressLocality": "Kadıköy",
      "addressRegion": "İstanbul",
      "postalCode": "34732",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "fortisfilmtr@gmail.com",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://instagram.com/fortisfilm",
      "https://linkedin.com/company/fortisfilm",
      "https://youtube.com/@fortisfilm"
    ],
    "services": [
      {
        "@type": "Service",
        "name": "Dizi Yapımı",
        "description": "Profesyonel dizi prodüksiyon hizmetleri"
      },
      {
        "@type": "Service", 
        "name": "Film Yapımı",
        "description": "Sinema filmi prodüksiyon hizmetleri"
      },
      {
        "@type": "Service",
        "name": "Reklam Çekimi",
        "description": "Yaratıcı reklam prodüksiyon hizmetleri"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
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
    </>
  )
}
