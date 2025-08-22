import { Metadata } from 'next'
import Header from '../components/Header'
import BlogHeroSection from '../components/BlogHeroSection'
import BlogContentSection from '../components/BlogContentSection'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Blog - Nora Yapım | Video Prodüksiyon İçgörüleri',
  description: 'Video prodüksiyon dünyasından en güncel haberler, teknik rehberler ve yaratıcı içgörüler. Film, dizi ve reklam yapım süreçleri hakkında uzman görüşleri.',
  keywords: 'video prodüksiyon, film yapımı, dizi çekimi, reklam filmi, teknik rehber, yapım süreci',
  openGraph: {
    title: 'Blog - Nora Yapım',
    description: 'Video prodüksiyon dünyasından en güncel haberler ve teknik rehberler',
    type: 'website',
    url: 'https://norayapim.com/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="bg-black">
      <Header />
      <BlogHeroSection />
      <BlogContentSection />
      <Footer />
    </main>
  )
} 