'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getBlogPosts, BlogPost, supabase } from '../../lib/supabase'
import BlogForm from './BlogForm'

export default function BlogManagement() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    try {
      const posts = await getBlogPosts()
      setBlogPosts(posts)
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    } finally {
      setLoading(false)
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
    fetchBlogPosts()
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingPost(null)
  }

  const filteredPosts = blogPosts
    .filter(post => {
      const normalized = searchTerm.toLowerCase()
      const plainContent = (post.content || '').replace(/<[^>]*>/g, '').toLowerCase()
      return post.title.toLowerCase().includes(normalized) || plainContent.includes(normalized)
    })
    .sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime())

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4 lg:space-y-6">
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

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
        <input
          type="text"
          placeholder="Blog yazılarında ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 lg:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
            Blog Yazıları ({filteredPosts.length})
          </h2>
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Başlık</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
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
                        {(post.content || '').replace(/<[^>]*>/g, '').substring(0, 80)}...
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {post.status === 'published' ? 'Yayında' : 'Taslak'}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="px-3 py-4 text-sm font-medium">
                    <div className="flex gap-2">
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
                      {(post.content || '').replace(/<[^>]*>/g, '').substring(0, 80)}...
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {post.status === 'published' ? 'Yayında' : 'Taslak'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('tr-TR')}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
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
