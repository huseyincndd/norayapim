// app/layout.tsx

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

// Ana metin fontu
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // CSS değişkeni olarak tanımla
})

// Başlık fontu
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair', // CSS değişkeni olarak tanımla
})

export const metadata: Metadata = {
  title: 'Nora Yapım - Video Production & Creative Agency',
  description: 'Markanızın hikayesini sinematik bir dille anlatan, yaratıcı video prodüksiyon ajansı.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      {/* Font değişkenlerini body'e uygulayarak tüm projede kullanılabilir hale getiriyoruz */}
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#121212]`}>
        {children}
      </body>
    </html>
  )
}