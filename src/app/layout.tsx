// app/layout.tsx

import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat, Bebas_Neue, Lato, Poppins } from 'next/font/google'
import './globals.css'

// Ana metin fontu
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

// Başlık fontu
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
})

// Profesyonel başlık fontu
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

// Yaratıcı başlık fontu
const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
})

// Modern metin fontu
const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})

// Poppins fontu
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://norayapim.com'),
  title: 'Nora Yapım - Video Production & Creative Agency',
  description: 'Markanızın hikayesini sinematik bir dille anlatan, yaratıcı video prodüksiyon ajansı.',
  icons: {
    icon: 'https://villaqrmenu.b-cdn.net/nora/Nora%20logo%20BEYAZ%20(1).png',
  },
  openGraph: {
    title: 'Nora Yapım - Video Production & Creative Agency',
    description: 'Markanızın hikayesini sinematik bir dille anlatan, yaratıcı video prodüksiyon ajansı.',
    url: 'https://norayapim.com',
    siteName: 'Nora Yapım',
    images: [
      {
        url: 'https://villaqrmenu.b-cdn.net/nora/Nora%20logo%20BEYAZ%20(1).png',
        width: 1200,
        height: 630,
        alt: 'Nora Yapım Logo',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nora Yapım - Video Production & Creative Agency',
    description: 'Markanızın hikayesini sinematik bir dille anlatan, yaratıcı video prodüksiyon ajansı.',
    images: ['https://villaqrmenu.b-cdn.net/nora/Nora%20logo%20BEYAZ%20(1).png'],
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
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${bebasNeue.variable} ${lato.variable} ${poppins.variable} font-sans bg-[#121212]`}>
        {children}
      </body>
    </html>
  )
}