import Header from '../components/Header'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Nora Yapım Hakkında</h1>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nora Yapım, dijital markaların hikayelerini güçlü ve etkileyici videolarla anlatmaya adanmış 
                yaratıcı bir video prodüksiyon şirketidir. Müşterilerimizin benzersiz seslerini ve vizyonlarını 
                ekrana yansıtmak için tutkuyla çalışıyoruz.
              </p>
              
              <p>
                Her projede, yaratıcılığı teknoloji ile birleştirerek, izleyicilerin duygularına dokunan 
                ve markalar için somut sonuçlar üreten içerikler oluşturuyoruz.
              </p>
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Yaratıcı ve özgün prodüksiyon yaklaşımı</li>
                <li>Yüksek kaliteli görsel içerik</li>
                <li>Müşteri odaklı profesyonel hizmet</li>
                <li>Dijital pazarlama trendlerinde uzmanlık</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/team-photo.jpg"  // You'll need to add this image
                alt="Nora Yapım Ekibi" 
                width={500} 
                height={500} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 