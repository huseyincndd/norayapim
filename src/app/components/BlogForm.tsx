'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { supabase, BlogPost, getBlogCategories, BlogCategory, createSlug } from '../../lib/supabase'

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
    category_id: '',
    seo_title: '',
    seo_description: '',
    faq: '',
    featured_image: '',
    detail_image: '',
    is_featured: false,
    status: 'published' as 'draft' | 'published'
  })
  const [categories, setCategories] = useState<BlogCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        content: post.content || '',
        category_id: post.category_id ? String(post.category_id) : '',
        seo_title: post.seo_title || '',
        seo_description: post.seo_description || '',
        faq: post.faq || '',
        featured_image: post.featured_image || '',
        detail_image: post.detail_image || '',
        is_featured: post.is_featured || false,
        status: post.status || 'published'
      })
    }
  }, [post])

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await getBlogCategories()
      setCategories(fetchedCategories)
    } catch (error) {
      console.error('Error fetching categories:', error)
    } finally {
      setCategoriesLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const slug = createSlug(formData.title)
      const dataToSubmit = {
        title: formData.title,
        content: formData.content,
        category_id: formData.category_id ? parseInt(formData.category_id) : null,
        seo_title: formData.seo_title || null,
        seo_description: formData.seo_description || null,
        faq: formData.faq || null,
        featured_image: formData.featured_image || null,
        detail_image: formData.detail_image || null,
        is_featured: formData.is_featured,
        status: formData.status,
        slug,
        published_at: formData.status === 'published' ? new Date().toISOString() : null
      }

      if (post) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update({
            ...dataToSubmit,
            updated_at: new Date().toISOString()
          })
          .eq('id', post.id)

        if (error) throw error
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert(dataToSubmit)

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

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategori
            </label>
            {categoriesLoading ? (
              <div className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50">
                Kategoriler yükleniyor...
              </div>
            ) : (
              <select
                value={formData.category_id}
                onChange={(e) => handleInputChange('category_id', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Kategori seçin</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            )}
            {categories.length === 0 && !categoriesLoading && (
              <p className="text-sm text-gray-500 mt-1">
                Henüz kategori eklenmemiş. Önce kategori oluşturun.
              </p>
            )}
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
                    ['link', 'image'],
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

          {/* SEO Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEO Başlığı
              </label>
              <input
                type="text"
                value={formData.seo_title}
                onChange={(e) => handleInputChange('seo_title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="SEO için özel başlık"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEO Açıklaması
              </label>
              <textarea
                value={formData.seo_description}
                onChange={(e) => handleInputChange('seo_description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="SEO için açıklama"
              />
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ana Sayfa Resmi URL
              </label>
              <input
                type="url"
                value={formData.featured_image}
                onChange={(e) => handleInputChange('featured_image', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detay Sayfa Resmi URL
              </label>
              <input
                type="url"
                value={formData.detail_image}
                onChange={(e) => handleInputChange('detail_image', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/detail-image.jpg"
              />
            </div>
          </div>

          {/* FAQ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SSS (Sık Sorulan Sorular)
            </label>
            <textarea
              value={formData.faq}
              onChange={(e) => handleInputChange('faq', e.target.value)}
              rows={8}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y min-h-[120px] max-h-[300px]"
              placeholder="Soru: Soru metni&#10;Cevap: Cevap metni&#10;&#10;Soru: Başka soru&#10;Cevap: Başka cevap"
            />
            <p className="text-sm text-gray-500 mt-1">
              Her soru ve cevap için yeni satır kullanın. Format: "Soru: ..." ve "Cevap: ..." • Metin alanını yukarı-aşağı yönde boyutlandırabilirsiniz
            </p>
          </div>

          {/* Settings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_featured"
                checked={formData.is_featured}
                onChange={(e) => handleInputChange('is_featured', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900">
                Öne Çıkan Yazı
              </label>
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