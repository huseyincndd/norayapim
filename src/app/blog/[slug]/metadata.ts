import { Metadata } from 'next'

interface BlogPost {
  title: string
  description: string
  slug: string
  publishedAt: string
  category: string
  tags: string[]
  author: string
  image?: string
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  const baseUrl = 'https://fortisfilm.com'
  
  return {
    title: `${post.title} | Fortis Film Blog`,
    description: post.description,
    keywords: [
      ...post.tags,
      'fortis film blog',
      'film yapımı makaleleri',
      'dizi prodüksiyon rehberi',
      'sinema haberleri',
      'video prodüksiyon ipuçları'
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: 'Fortis Film',
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  }
}
