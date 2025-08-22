import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '../../../lib/supabase'
import BlogPostDetail from '../../components/BlogPostDetail'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params
  
  try {
    const post = await getBlogPostBySlug(slug)
    
    if (!post) {
      return {
        title: 'Blog Yazısı Bulunamadı - Nora Yapım',
        description: 'Aradığınız blog yazısı bulunamadı.',
      }
    }

    return {
      title: post.seo_title || `${post.title} - Nora Yapım Blog`,
      description: post.seo_description || post.content.replace(/<[^>]*>/g, '').substring(0, 160),
      keywords: `${post.category?.name || 'video prodüksiyon'}, ${post.title}, nora yapım, blog`,
      openGraph: {
        title: post.title,
        description: post.seo_description || post.content.replace(/<[^>]*>/g, '').substring(0, 160),
        type: 'article',
        url: `https://norayapim.com/blog/${slug}`,
        images: post.featured_image ? [
          {
            url: post.featured_image,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ] : [],
        publishedTime: post.published_at || post.created_at,
        authors: ['Nora Yapım'],
        section: post.category?.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.seo_description || post.content.replace(/<[^>]*>/g, '').substring(0, 160),
        images: post.featured_image ? [post.featured_image] : [],
      },
      alternates: {
        canonical: `https://norayapim.com/blog/${slug}`,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog - Nora Yapım',
      description: 'Video prodüksiyon dünyasından içgörüler',
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  
  // Server-side check if post exists
  try {
    const post = await getBlogPostBySlug(slug)
    if (!post) {
      notFound()
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  return <BlogPostDetail postId={slug} />
} 