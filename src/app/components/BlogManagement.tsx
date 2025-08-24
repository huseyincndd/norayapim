'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getBlogPosts, BlogPost, getBlogCategories, BlogCategory, supabase } from '../../lib/supabase'
import BlogForm from './BlogForm'

export default function BlogManagement() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<BlogCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [posts, categoriesList] = await Promise.all([
        getBlogPosts(),
        getBlogCategories()
      ])
      setBlogPosts(posts)
      setCategories(categoriesList)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchBlogPosts = async () => {
    try {
      const posts = await getBlogPosts()
      setBlogPosts(posts)
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    }
  }

  const toggleFeaturedStatus = async (id: number, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ is_featured: !currentStatus })
        .eq('id', id)

      if (error) throw error

      // Update local state
      setBlogPosts(posts => 
        posts.map(post => 
          post.id === id ? { ...post, is_featured: !currentStatus } : post
        )
      )
    } catch (error) {
      console.error('Error updating featured status:', error)
    }
  }

  const deletePost = async (id: number) => {
    if (!confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) return

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id)

      if (error) throw error

      // Update local state
      setBlogPosts(posts => posts.filter(post => post.id !== id))
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post)
    setShowForm(true)
  }

  const handleAddNewPost = () => {
    setEditingPost(null)
    setShowForm(true)
  }

  const handleFormSuccess = () => {
    fetchBlogPosts() // Refresh the list
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingPost(null)
  }

  // Create category options including "All"
  const categoryOptions = [
    { id: 'all', name: 'Tümü' },
    ...categories.map(cat => ({ id: cat.id.toString(), name: cat.name }))
  ]

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.seo_description && post.seo_description.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'Tümü' || 
                           (post.category_id && post.category_id.toString() === selectedCategory)
    
    return matchesSearch && matchesCategory
  })

  // Get category name by id
  const getCategoryName = (categoryId?: number): string => {
    if (!categoryId) return 'Kategorisiz'
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.name : 'Kategorisiz'
  }

  // Get category color by id
  const getCategoryColor = (categoryId?: number): string => {
    if (!categoryId) return '#6B7280'
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.color : '#6B7280'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Blog Yönetimi</h1>
          <p className="text-gray-600 mt-1 lg:mt-2 text-sm lg:text-base">Blog yazılarınızı yönetin ve düzenleyin</p>
        </div>
        <button 
          onClick={handleAddNewPost}
          className="bg-blue-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm lg:text-base"
        >
          Yeni Yazı Ekle
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Blog yazılarında ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
            />
          </div>

          {/* Category Filter */}
          <div className="lg:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
            >
              {categoryOptions.map(option => (
                <option key={option.id} value={option.id === 'all' ? 'Tümü' : option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
            Blog Yazıları ({filteredPosts.length})
          </h2>
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Başlık
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kategori
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tarih
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPosts.map((post, index) => (
                <motion.tr
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                      <div className="text-sm text-gray-500">
                        {post.seo_description && post.seo_description.length > 50 
                          ? `${post.seo_description.substring(0, 50)}...` 
                          : post.seo_description}
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <span 
                      className="px-2 py-1 text-xs font-medium rounded-full text-white"
                      style={{ backgroundColor: getCategoryColor(post.category_id) }}
                    >
                      {getCategoryName(post.category_id)}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex flex-col gap-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        post.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {post.status === 'published' ? 'Yayında' : 'Taslak'}
                      </span>
                      {post.is_featured && (
                        <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                          Öne Çıkan
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                      <button
                        onClick={() => toggleFeaturedStatus(post.id, post.is_featured)}
                        className={`px-2 py-1 text-xs rounded whitespace-nowrap ${
                          post.is_featured
                            ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {post.is_featured ? 'Öne Çıkanı Kaldır' : 'Öne Çıkan Yap'}
                      </button>
                      <button 
                        onClick={() => handleEditPost(post)}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200 whitespace-nowrap"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200 whitespace-nowrap"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden">
          <div className="p-4 space-y-4">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{post.title}</h3>
                    <p className="text-gray-500 text-xs mt-1">
                      {post.seo_description && post.seo_description.length > 80 
                        ? `${post.seo_description.substring(0, 80)}...` 
                        : post.seo_description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span 
                      className="px-2 py-1 text-xs font-medium rounded-full text-white"
                      style={{ backgroundColor: getCategoryColor(post.category_id) }}
                    >
                      {getCategoryName(post.category_id)}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {post.status === 'published' ? 'Yayında' : 'Taslak'}
                    </span>
                    {post.is_featured && (
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Öne Çıkan
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('tr-TR')}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                    <button
                      onClick={() => toggleFeaturedStatus(post.id, post.is_featured)}
                      className={`px-2 py-1 text-xs rounded ${
                        post.is_featured
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {post.is_featured ? 'Öne Çıkanı Kaldır' : 'Öne Çıkan Yap'}
                    </button>
                    <button 
                      onClick={() => handleEditPost(post)}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Blog yazısı bulunamadı</p>
          </div>
        )}
      </div>

      {/* Blog Form Modal */}
      {showForm && (
        <BlogForm
          post={editingPost}
          onClose={handleCloseForm}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  )
} 