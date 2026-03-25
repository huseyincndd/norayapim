'use client'

import { useState } from 'react'
import Link from 'next/link'

interface AdminHeaderProps {
  onMenuClick: () => void
  onLogout: () => void
}

export default function AdminHeader({ onMenuClick, onLogout }: AdminHeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className="bg-slate-900/80 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/admin" className="text-xl lg:text-2xl font-bold text-white">
            <span className="hidden sm:inline">Fortis Yapım Admin</span>
            <span className="sm:hidden">Admin</span>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Notifications */}
          <button className="p-2 text-white/50 hover:text-white transition-colors">
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 1 6 6v3.75a2.25 2.25 0 0 0 4.5 0V9.75a8.25 8.25 0 1 0-16.5 0v3.75a2.25 2.25 0 0 0 4.5 0V9.75a6 6 0 0 1 6-6Z" />
            </svg>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="w-7 h-7 lg:w-8 lg:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-xs lg:text-sm">A</span>
              </div>
              <span className="hidden lg:inline text-white/80 font-medium">Admin</span>
              <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-slate-800/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 py-2 overflow-hidden ring-1 ring-black/5">
                <Link href="/" className="block px-4 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                  Siteye Git
                </Link>
                <button 
                  onClick={() => {
                    onLogout()
                    setIsProfileOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-white/80 hover:bg-white/10"
                >
                  Çıkış Yap
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 