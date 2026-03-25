'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { BlogPost, createSlug, saveBlogPost, updateBlogPost } from '../../lib/supabase'
import ImageUploader from './ImageUploader'

// Dynamic import for React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface BlogFormProps {
  post?: BlogPost | null
  onClose: () => void
  onSuccess: () => void
}

export default function BlogForm({ post, onClose, onSuccess }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    featured_image: '',
    status: 'published' as 'draft' | 'published'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        content: post.content || '',
        featured_image: post.featured_image || '',
        status: post.status || 'published'
      })
    }
  }, [post])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (/data:image\/[a-zA-Z+]+;base64,/i.test(formData.content)) {
        throw new Error('İçerikte base64 görsel kullanılamaz. Lütfen Bunny üzerinden görsel yükleyin.')
      }
      if (formData.featured_image && !formData.featured_image.includes('b-cdn.net')) {
        throw new Error('Kapak görseli Bunny CDN URL olmalıdır.')
      }

      const dataToSubmit = {
        title: formData.title,
        content: formData.content,
        featured_image: formData.featured_image || undefined,
        status: formData.status
      }

      if (post) {
        const { error } = await updateBlogPost(post.id, dataToSubmit)
        if (error) throw error
      } else {
        const { error } = await saveBlogPost(dataToSubmit)
        if (error) throw error
      }

      onSuccess()
      onClose()
    } catch (error: any) {
      console.error('Error saving blog post:', error)
      setError(error.message || 'Blog yazısı kaydedilirken bir hata oluştu.')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {post ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı Ekle'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Başlık *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              İçerik *
            </label>
            <div className="border border-gray-300 rounded-lg">
              <ReactQuill
                value={formData.content}
                onChange={(value) => handleInputChange('content', value)}
                modules={{
                  toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'color': [] }, { 'background': [] }],
                    ['link'],
                    ['clean']
                  ]
                }}
                placeholder="Blog içeriğinizi buraya yazın..."
                className="blog-editor"
                style={{ 
                  height: '400px',
                  maxHeight: '500px'
                }}
              />
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <ImageUploader
                label="Kapak Görseli"
                initialUrl={formData.featured_image}
                folder="nora"
                nameHint={createSlug(formData.title) || 'blog-cover'}
                onChange={(url) => handleInputChange('featured_image', url)}
              />
              <p className="text-sm text-gray-500 mt-1">
                Yalnızca Bunny CDN URL kullanılır.
              </p>
            </div>
          </div>

          {/* Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Durum
              </label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="published">Yayınla</option>
                <option value="draft">Taslak</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Kaydediliyor...' : (post ? 'Güncelle' : 'Kaydet')}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
} 