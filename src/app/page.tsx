import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
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

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionStatementSection/>
      <IconGridSection/>
      
      <AboutSection />
      <ServicesSection />
      
      <LogoMarquee />
      <ProjectsShowcase />
      <ArtisticProjectsSection />
      <BlogPreviewSection />
      <InstagramFilmstrip />
      <PosterGallery />
      
      <Footer />
    </main>
  )
}
