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
      <AdminHeader />
      
      <div className="flex pt-16">
        <AdminSidebar activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab as ActiveTab)} />
        
        <main className="flex-1 ml-64">
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
} 