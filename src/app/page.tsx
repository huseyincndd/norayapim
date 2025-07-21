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

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      
      <LogoMarquee />
      <ArtisticProjectsSection />
      <BlogPreviewSection />
      <InstagramFilmstrip />
      <PosterGallery />
      <ProjectsShowcase />
      <Footer />
    </main>
  )
}
