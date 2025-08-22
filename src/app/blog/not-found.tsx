import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function BlogNotFound() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      
      <section className="py-20 flex items-center justify-center min-h-[70vh]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-8xl font-bold text-white mb-8">404</h1>
            <h2 className="text-3xl font-bold text-white mb-6">
              Blog Yazısı Bulunamadı
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Aradığınız blog yazısı mevcut değil veya taşınmış olabilir.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Tüm Blog Yazıları
              </Link>
              <Link 
                href="/"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 