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
          <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">Blog Yönetimi</h1>
          <p className="text-white/60 mt-1 lg:mt-2 text-sm lg:text-base">Blog yazılarınızı yönetin ve düzenleyin</p>
        </div>
        <button
          onClick={handleAddNewPost}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-300 font-medium tracking-wide text-sm lg:text-base"
        >
          Yeni Yazı Ekle
        </button>
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5 lg:p-6 shadow-xl">
        <input
          type="text"
          placeholder="Blog yazılarında ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 lg:px-5 py-3 bg-white/5 text-white placeholder-white/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm lg:text-base transition-colors"
        />
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden">
        <div className="p-5 lg:p-6 border-b border-white/10 bg-white/5">
          <h2 className="text-lg lg:text-xl font-bold text-white">
            Blog Yazıları ({filteredPosts.length})
          </h2>
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Başlık</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Durum</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">Tarih</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white/50 uppercase tracking-wider">İşlemler</th>
              </tr>
            </thead>
            <tbody className="bg-transparent divide-y divide-white/10">
              {filteredPosts.map((post, index) => (
                <motion.tr
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-white/5"
                >
                  <td className="px-4 py-4">
                    <div>
                      <div className="text-sm font-semibold text-white">{post.title}</div>
                      <div className="text-sm text-white/50 mt-1 line-clamp-1">
                        {(post.content || '').replace(/<[^>]*>/g, '').substring(0, 80)}...
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${
                      post.status === 'published' 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                        : 'bg-white/5 text-white/60 border-white/10'
                    }`}>
                      {post.status === 'published' ? 'Yayında' : 'Taslak'}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-sm text-white/50">
                    {new Date(post.created_at).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="px-3 py-4 text-sm font-medium">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditPost(post)}
                        className="px-3 py-1.5 text-xs font-semibold bg-indigo-500/20 text-indigo-400 rounded-lg hover:bg-indigo-500/30 transition-colors whitespace-nowrap"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="px-3 py-1.5 text-xs font-semibold bg-rose-500/20 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-colors whitespace-nowrap"
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
                className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-5 border border-white/10"
              >
                <div className="space-y-4">
                  {post.featured_image && (
                    <div className="h-40 w-full rounded-xl overflow-hidden mb-2">
                      <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-white text-base">{post.title}</h3>
                    <p className="text-white/50 text-xs mt-1 line-clamp-2">
                      {(post.content || '').replace(/<[^>]*>/g, '').substring(0, 80)}...
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${
                      post.status === 'published' 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                        : 'bg-white/5 text-white/60 border-white/10'
                    }`}>
                      {post.status === 'published' ? 'Yayında' : 'Taslak'}
                    </span>
                  </div>
                  <div className="text-xs text-white/50 font-medium tracking-wide">
                    {new Date(post.created_at).toLocaleDateString('tr-TR')}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    <button
                      onClick={() => handleEditPost(post)}
                      className="px-4 py-2 text-xs font-semibold bg-indigo-500/20 text-indigo-400 rounded-lg hover:bg-indigo-500/30 transition-colors flex-1"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="px-4 py-2 text-xs font-semibold bg-rose-500/20 text-rose-400 rounded-lg hover:bg-rose-500/30 transition-colors flex-1"
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
            <p className="text-white/50">Blog yazısı bulunamadı</p>
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
