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
    status: 'published' as 'draft' | 'published',
    meta_title: '',
    meta_description: '',
    faq_data: [] as { question: string, answer: string }[]
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        content: post.content || '',
        featured_image: post.featured_image || '',
        status: post.status || 'published',
        meta_title: post.meta_title || '',
        meta_description: post.meta_description || '',
        faq_data: post.faq_data || []
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
        status: formData.status,
        meta_title: formData.meta_title,
        meta_description: formData.meta_description,
        faq_data: formData.faq_data.length > 0 ? formData.faq_data : undefined
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

  const handleAddFaq = () => {
    setFormData(prev => ({
      ...prev,
      faq_data: [...prev.faq_data, { question: '', answer: '' }]
    }))
  }

  const handleRemoveFaq = (index: number) => {
    setFormData(prev => ({
      ...prev,
      faq_data: prev.faq_data.filter((_, i) => i !== index)
    }))
  }

  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setFormData(prev => ({
      ...prev,
      faq_data: prev.faq_data.map((faq, i) => 
        i === index ? { ...faq, [field]: value } : faq
      )
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            {post ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı Ekle'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl">
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
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              İçerik *
            </label>
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
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
              <p className="text-sm text-gray-500 mt-2 font-medium">
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
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              >
                <option value="published">Yayınla</option>
                <option value="draft">Taslak</option>
              </select>
            </div>
          </div>

          {/* SEO Section */}
          <div className="border-t border-gray-100 pt-6 mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Bilgileri</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Başlık (Maks 60 Karakter)
                </label>
                <input
                  type="text"
                  value={formData.meta_title}
                  onChange={(e) => handleInputChange('meta_title', e.target.value)}
                  maxLength={60}
                  placeholder="Arama motorlarında görünecek başlık..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Açıklama (Maks 160 Karakter)
                </label>
                <textarea
                  value={formData.meta_description}
                  onChange={(e) => handleInputChange('meta_description', e.target.value)}
                  maxLength={160}
                  rows={3}
                  placeholder="Arama motorlarında görünecek kısa açıklama..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="border-t border-gray-100 pt-6 mt-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Sıkça Sorulan Sorular (SSS)</h3>
              <button
                type="button"
                onClick={handleAddFaq}
                className="text-sm bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors font-semibold border border-indigo-200"
              >
                + Yeni Soru Ekle
              </button>
            </div>
            
            <div className="space-y-4">
              {formData.faq_data.length === 0 && (
                <p className="text-gray-500 text-sm italic">Henüz SSS eklenmemiş.</p>
              )}
              {formData.faq_data.map((faq, index) => (
                <div key={index} className="p-5 border border-gray-200 rounded-xl bg-gray-50 relative group">
                  <button
                    type="button"
                    onClick={() => handleRemoveFaq(index)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Sil
                  </button>
                  <div className="space-y-4 pt-1 pr-10">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Soru {index + 1}
                      </label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                        placeholder="Soruyu buraya yazın..."
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cevap {index + 1}
                      </label>
                      <textarea
                        value={faq.answer}
                        onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                        placeholder="Cevabı buraya yazın..."
                        rows={2}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 mt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-200 text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-colors font-medium"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white rounded-xl shadow-lg shadow-indigo-500/20 transition-all font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Kaydediliyor...' : (post ? 'Güncelle' : 'Kaydet')}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
} 