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
  metadataBase: new URL('https://fortisfilm.com'),
  title: {
    default: 'Fortis Film - Dizi, Film ve Reklam Yapımcısı | İstanbul',
    template: '%s | Fortis Film'
  },
  description: '16 yılı aşkın deneyimi ile dizi, sinema ve reklam projelerinde öncü olan Fortis Film. Modern teknoloji ve yaratıcı çözümlerle hikâyeleri unutulmaz görsel deneyimlere dönüştürüyoruz.',
  keywords: [
    'dizi yapımı istanbul',
    'film yapımı türkiye', 
    'reklam çekimi istanbul',
    'video prodüksiyon şirketi',
    'sinema prodüksiyon',
    'Fortis Film',
    'İstanbul film yapımcısı',
    'prodüksiyon şirketi kadıköy',
    'görsel prodüksiyon ajansı',
    'yaratıcı reklam ajansı',
    'tv dizi prodüksiyon',
    'belgesel yapımı',
    'kurumsal video çekimi',
    'marka videoları',
    'sosyal medya videoları',
    'viral reklam yapımı',
    'sinema filmi prodüksiyon',
    'kısa film yapımı',
    'müzik videosu çekimi',
    'etkinlik videosu',
    'profesyonel video çekimi',
    'film yapım şirketi istanbul',
    'reklam prodüksiyon şirketi',
    'video editörlük hizmetleri',
    'post prodüksiyon hizmetleri',
    'senaryo yazımı',
    'casting hizmetleri',
    'lokasyon bulma',
    'oyuncu yönetimi',
    'kamera kiralama',
    'ses kayıt hizmetleri'
  ],
  authors: [{ name: 'Fortis Film' }],
  creator: 'Fortis Film',
  publisher: 'Fortis Film',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://villaqrmenu.b-cdn.net/nora/fortis%20film%20logo.png',
    apple: 'https://villaqrmenu.b-cdn.net/nora/fortis%20film%20logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://fortisfilm.com',
    siteName: 'Fortis Film',
    title: 'Fortis Film - Dizi, Film ve Reklam Yapımcısı | İstanbul',
    description: '16 yılı aşkın deneyimi ile dizi, sinema ve reklam projelerinde öncü olan Fortis Film. Modern teknoloji ve yaratıcı çözümlerle hikâyeleri unutulmaz görsel deneyimlere dönüştürüyoruz.',
    images: [
      {
        url: 'https://villaqrmenu.b-cdn.net/nora/fortis%20film%20logo.png',
        width: 1200,
        height: 630,
        alt: 'Fortis Film Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortis Film - Dizi, Film ve Reklam Yapımcısı',
    description: '16 yılı aşkın deneyimi ile dizi, sinema ve reklam projelerinde öncü olan Fortis Film.',
    images: ['https://villaqrmenu.b-cdn.net/nora/fortis%20film%20logo.png'],
    creator: '@fortisfilm',
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console'dan alacağınız kod
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