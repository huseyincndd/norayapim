'use client'

export default function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Fortis Film hangi hizmetleri sunuyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fortis Film dizi yapımı, film prodüksiyon, reklam çekimi, kurumsal video üretimi, belgesel yapımı ve post-prodüksiyon hizmetleri sunmaktadır."
        }
      },
      {
        "@type": "Question", 
        "name": "İstanbul'da video çekimi yapıyor musunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, İstanbul merkezli olarak Türkiye genelinde ve uluslararası projelerde video çekimi yapıyoruz. Ofisimiz Kadıköy'de bulunmaktadır."
        }
      },
      {
        "@type": "Question",
        "name": "Proje süreçleri nasıl işliyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proje süreci ön görüşme, senaryo geliştirme, ön prodüksiyon, çekim, post-prodüksiyon ve teslimat aşamalarından oluşur. Her aşamada müşteriyle yakın iletişim halinde kalırız."
        }
      },
      {
        "@type": "Question",
        "name": "Kaç yıllık deneyiminiz var?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "16 yılı aşkın deneyimimizle film, dizi ve reklam sektöründe köklü bir geçmişe sahibiz. Bu sürede yüzlerce başarılı projeye imza attık."
        }
      },
      {
        "@type": "Question",
        "name": "Sosyal medya içerikleri de üretiyor musunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, sosyal medya platformları için özel olarak tasarlanmış viral videolar, marka içerikleri ve sosyal medya kampanyaları üretiyoruz."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
  )
}
