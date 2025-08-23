'use client'

import { useState } from 'react'
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
      <AdminHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
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