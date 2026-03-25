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
        title: 'Blog Yazısı Bulunamadı - Fortis Yapım',
        description: 'Aradığınız blog yazısı bulunamadı.',
      }
    }

    const autoExcerpt = (post.content || '').replace(/<[^>]*>/g, '').substring(0, 160);
    const metaTitle = post.meta_title || `${post.title} - Fortis Yapım Blog`;
    const metaDesc = post.meta_description || autoExcerpt;

    return {
      title: metaTitle,
      description: metaDesc,
      keywords: `video prodüksiyon, ${post.title}, fortis yapım, blog`,
      openGraph: {
        title: metaTitle,
        description: metaDesc,
        type: 'article',
        url: `https://fortisyapim.com/blog/${slug}`,
        images: post.featured_image ? [
          {
            url: post.featured_image,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ] : [],
        publishedTime: post.published_at || post.created_at,
        authors: ['Fortis Yapım'],
      },
      twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDesc,
        images: post.featured_image ? [post.featured_image] : [],
      },
      alternates: {
        canonical: `https://fortisyapim.com/blog/${slug}`,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog - Fortis Yapım',
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