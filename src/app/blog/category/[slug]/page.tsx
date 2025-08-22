import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogCategories, getBlogPostsByCategory } from '../../../../lib/supabase'
import Header from '../../../components/Header'
import BlogContentSection from '../../../components/BlogContentSection'
import Footer from '../../../components/Footer'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = params
  
  try {
    const categories = await getBlogCategories()
    const category = categories.find(cat => cat.slug === slug)
    
    if (!category) {
      return {
        title: 'Kategori Bulunamadı - Nora Yapım Blog',
        description: 'Aradığınız kategori bulunamadı.',
      }
    }

    return {
      title: `${category.name} - Nora Yapım Blog`,
      description: category.description || `${category.name} kategorisindeki blog yazıları`,
      keywords: `${category.name}, video prodüksiyon, nora yapım, blog`,
      openGraph: {
        title: `${category.name} - Nora Yapım Blog`,
        description: category.description || `${category.name} kategorisindeki blog yazıları`,
        type: 'website',
        url: `https://norayapim.com/blog/category/${slug}`,
      },
    }
  } catch (error) {
    console.error('Error generating category metadata:', error)
    return {
      title: 'Blog Kategorisi - Nora Yapım',
      description: 'Video prodüksiyon kategorileri',
    }
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  
  // Server-side check if category exists
  try {
    const categories = await getBlogCategories()
    const category = categories.find(cat => cat.slug === slug)
    
    if (!category) {
      notFound()
    }
  } catch (error) {
    console.error('Error fetching category:', error)
    notFound()
  }

  return (
    <main className="bg-black">
      <Header />
      
      {/* Category Hero */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            {/* Category name will be handled by BlogContentSection */}
            Blog Kategorisi
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Seçili kategorideki yazılar
          </p>
        </div>
      </section>
      
      <BlogContentSection />
      <Footer />
    </main>
  )
} 