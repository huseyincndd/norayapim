'use client'

export default function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://fortisfilm.com",
    "name": "Fortis Film",
    "image": "https://villaqrmenu.b-cdn.net/nora/fortis%20film%20logo.png",
    "url": "https://fortisfilm.com",
    "telephone": "+90-XXX-XXX-XXXX", // Telefon numaranızı ekleyin
    "email": "fortisfilmtr@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business İstanbul, Merdivenköy Mahallesi, Dikyol Sokak No:2, Kat:18",
      "addressLocality": "Kadıköy",
      "addressRegion": "İstanbul",
      "postalCode": "34732",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.9767,
      "longitude": 29.0359
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "foundingDate": "2008",
    "slogan": "Tutku ve Sanatla Yarınları Aydınlatan Vizyon",
    "description": "16 yılı aşkın deneyimi ile dizi, sinema ve reklam projelerinde öncü olan Fortis Film. Modern teknoloji ve yaratıcı çözümlerle hikâyeleri unutulmaz görsel deneyimlere dönüştürüyoruz.",
    "priceRange": "$$$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Turkey"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Istanbul"
      },
      {
        "@type": "Country", 
        "name": "Turkey"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fortis Film Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dizi Yapımı"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Film Prodüksiyon"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Reklam Çekimi"
          }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/fortisfilm",
      "https://linkedin.com/company/fortisfilm", 
      "https://youtube.com/@fortisfilm"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  )
}
