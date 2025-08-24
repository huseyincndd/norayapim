'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import DashboardOverview from '../components/DashboardOverview'
import BlogManagement from '../components/BlogManagement'
import CategoryManagement from '../components/CategoryManagement'
import SettenKarelerManagement from '../components/SettenKarelerManagement'

type ActiveTab = 'dashboard' | 'blog' | 'categories' | 'settenkareler' | 'settings'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Environment variable'dan şifreyi al
      const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
      
      if (!adminPassword) {
        setError('Admin şifresi yapılandırılmamış!')
        return
      }
      
      if (password === adminPassword) {
        localStorage.setItem('adminAuthenticated', 'true')
        setIsAuthenticated(true)
      } else {
        setError('Yanlış şifre!')
      }
    } catch (err) {
      setError('Giriş yapılırken bir hata oluştu.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated')
    setIsAuthenticated(false)
    setPassword('')
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Nora Yapım</h1>
              <p className="text-white/70">Admin Paneli</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                  Admin Şifresi
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Şifrenizi girin"
                  required
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/50 text-sm">
                Sadece yetkili kişiler giriş yapabilir
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />
      case 'blog':
        return <BlogManagement />
      case 'categories':
        return <CategoryManagement />
      case 'settenkareler':
        return <SettenKarelerManagement />
      case 'settings':
        return <div className="p-6">Ayarlar sayfası yakında...</div>
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} onLogout={handleLogout} />
      
      <div className="flex pt-16">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition duration-200 ease-in-out`}>
          <AdminSidebar 
            activeTab={activeTab} 
            setActiveTab={(tab) => {
              setActiveTab(tab as ActiveTab)
              setSidebarOpen(false) // Close sidebar on mobile after selection
            }} 
          />
        </div>
        
        {/* Main content */}
        <main className="flex-1 lg:ml-64 min-w-0">
          <div className="p-4 lg:p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
} 