'use client'

import { useParams } from 'next/navigation'
import BlogPostDetail from '../../components/BlogPostDetail'

export default function BlogPostPage() {
  const params = useParams()
  const postId = params.id as string

  return <BlogPostDetail postId={postId} />
} 