import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = params
  return {
    title: `${slug} - Kategori Kullanılmıyor`,
    description: 'Yeni blog yapısında kategori sayfaları kapatıldı.',
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  void params
  notFound()
} 