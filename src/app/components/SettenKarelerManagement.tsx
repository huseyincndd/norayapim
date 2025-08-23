'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  getSettenKarelerImages, 
  addSettenKarelerImage, 
  updateSettenKarelerImage, 
  deleteSettenKarelerImage,
  SettenKarelerImage 
} from '../../lib/supabase'
import { uploadImageToBunny, deleteImageFromBunny } from '../../lib/bunny'

export default function SettenKarelerManagement() {
  const [images, setImages] = useState<SettenKarelerImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [editingImage, setEditingImage] = useState<SettenKarelerImage | null>(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    order_index: 0,
    is_active: true
  })

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      setLoading(true)
      const fetchedImages = await getSettenKarelerImages()
      setImages(fetchedImages)
    } catch (error) {
      console.error('Error fetching images:', error)
      setError('Resimler yüklenirken bir hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      // Upload to Bunny.net
      const uploadResult = await uploadImageToBunny(file)
      
      if (uploadResult.success && uploadResult.url) {
        setFormData(prev => ({
          ...prev,
          image_url: uploadResult.url || ''
        }))
        setSuccess('Resim başarıyla yüklendi!')
      } else {
        setError(uploadResult.message || 'Resim yüklenirken bir hata oluştu')
      }
    } catch (error) {
      console.error('Upload error:', error)
      setError('Resim yüklenirken bir hata oluştu')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.title.trim()) {
      setError('Başlık gereklidir')
      return
    }

    if (!formData.image_url.trim()) {
      setError('Resim URL\'i gereklidir')
      return
    }

    try {
      if (editingImage) {
        // Update existing image
        const { error } = await updateSettenKarelerImage(editingImage.id, {
          title: formData.title,
          description: formData.description,
          image_url: formData.image_url,
          order_index: formData.order_index,
          is_active: formData.is_active
        })

        if (error) throw error
        setSuccess('Resim başarıyla güncellendi!')
      } else {
        // Add new image
        const { error } = await addSettenKarelerImage({
          title: formData.title,
          description: formData.description,
          image_url: formData.image_url,
          order_index: formData.order_index,
          is_active: formData.is_active
        })

        if (error) throw error
        setSuccess('Resim başarıyla eklendi!')
      }

      // Reset form and refresh images
      resetForm()
      fetchImages()
    } catch (error: any) {
      console.error('Error saving image:', error)
      setError(error.message || 'Resim kaydedilirken bir hata oluştu')
    }
  }

  const handleDelete = async (image: SettenKarelerImage) => {
    if (!confirm('Bu resmi silmek istediğinizden emin misiniz?')) return

    try {
      // Delete from Bunny.net first
      if (image.image_url) {
        await deleteImageFromBunny(image.image_url)
      }

      // Delete from database
      const { error } = await deleteSettenKarelerImage(image.id)
      if (error) throw error

      setSuccess('Resim başarıyla silindi!')
      fetchImages()
    } catch (error: any) {
      console.error('Error deleting image:', error)
      setError(error.message || 'Resim silinirken bir hata oluştu')
    }
  }

  const handleEdit = (image: SettenKarelerImage) => {
    setEditingImage(image)
    setFormData({
      title: image.title,
      description: image.description || '',
      image_url: image.image_url,
      order_index: image.order_index,
      is_active: image.is_active
    })
    setShowUploadForm(true)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image_url: '',
      order_index: 0,
      is_active: true
    })
    setEditingImage(null)
    setShowUploadForm(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">SettenKareler Yönetimi</h1>
          <p className="text-gray-600 mt-1 text-sm lg:text-base">SettenKareler sayfasındaki resimleri yönetin</p>
        </div>
        <button
          onClick={() => setShowUploadForm(true)}
          className="bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-sm lg:text-base"
        >
          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Yeni Resim Ekle</span>
        </button>
      </div>

      {/* Messages */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
        >
          {error}
        </motion.div>
      )}

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm"
        >
          {success}
        </motion.div>
      )}

      {/* Upload Form */}
      {showUploadForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
              {editingImage ? 'Resmi Düzenle' : 'Yeni Resim Ekle'}
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resim Seç
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                disabled={uploading}
              />
              {uploading && (
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                  Resim yükleniyor...
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Başlık *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                placeholder="Resim başlığı"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Açıklama
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                placeholder="Resim açıklaması"
                rows={3}
              />
            </div>

            {/* Order Index */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sıralama
              </label>
              <input
                type="number"
                value={formData.order_index}
                onChange={(e) => handleInputChange('order_index', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                placeholder="0"
              />
            </div>

            {/* Active Status */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => handleInputChange('is_active', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">
                Aktif
              </label>
            </div>

            {/* Preview */}
            {formData.image_url && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Önizleme
                </label>
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 border border-gray-300 rounded-lg overflow-hidden">
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
              <button
                type="button"
                onClick={resetForm}
                className="w-full sm:w-auto px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm lg:text-base"
              >
                İptal
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
              >
                {editingImage ? 'Güncelle' : 'Ekle'}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative aspect-video">
              <img
                src={image.image_url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                #{image.order_index}
              </div>
            </div>

            {/* Content */}
            <div className="p-3 lg:p-4">
              <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">{image.title}</h3>
              {image.description && (
                <p className="text-xs lg:text-sm text-gray-600 mb-3 line-clamp-2">{image.description}</p>
              )}
              
              {/* Status */}
              <div className="flex items-center mb-3">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  image.is_active 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {image.is_active ? 'Aktif' : 'Pasif'}
                </span>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(image)}
                  className="flex-1 bg-blue-50 text-blue-700 px-2 lg:px-3 py-2 rounded text-xs lg:text-sm hover:bg-blue-100 transition-colors"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => handleDelete(image)}
                  className="flex-1 bg-red-50 text-red-700 px-2 lg:px-3 py-2 rounded text-xs lg:text-sm hover:bg-red-100 transition-colors"
                >
                  Sil
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {images.length === 0 && !loading && (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Henüz resim yok</h3>
          <p className="mt-1 text-sm text-gray-500">İlk resminizi ekleyerek başlayın.</p>
          <div className="mt-6">
            <button
              onClick={() => setShowUploadForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              İlk Resmi Ekle
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 