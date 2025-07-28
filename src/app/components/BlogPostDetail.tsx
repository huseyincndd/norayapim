'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from './Header'

// Blog post data (gerçek uygulamada API'den gelecek)
const blogPosts = [
  {
    id: '1',
    title: "2024'te Video Prodüksiyon Trendleri",
    excerpt: "Bu yılın en popüler video prodüksiyon teknikleri ve yaratıcı yaklaşımları hakkında detaylı bir rehber.",
    content: `
      <!-- Introduction Section -->
      <div class="mb-16 p-8 bg-gradient-to-r from-premium-red/10 to-transparent rounded-2xl border border-premium-red/20">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-premium-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-premium-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-white mb-3">2024 Video Prodüksiyon Trendleri</h3>
            <p class="text-lg leading-relaxed text-white/80">
              Video prodüksiyon dünyası sürekli evrim geçiriyor. 2024 yılında teknolojik gelişmeler ve yaratıcı yaklaşımlar, sektörü yeniden şekillendiriyor. Bu yazıda, bu yılın en önemli trendlerini ve bunların prodüksiyon süreçlerinizi nasıl etkileyebileceğini detaylı olarak inceleyeceğiz.
            </p>
          </div>
        </div>
      </div>

      <!-- AI Section -->
      <div class="mb-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 class="text-4xl font-bold text-white font-montserrat tracking-wide">1. Yapay Zeka Destekli Post Prodüksiyon</h2>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div class="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h4 class="text-xl font-bold text-white mb-4 font-montserrat">AI Özellikleri</h4>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-white/80">
                <div class="w-2 h-2 bg-premium-red rounded-full"></div>
                Otomatik renk düzenleme
              </li>
              <li class="flex items-center gap-3 text-white/80">
                <div class="w-2 h-2 bg-premium-red rounded-full"></div>
                Akıllı kesme önerileri
              </li>
              <li class="flex items-center gap-3 text-white/80">
                <div class="w-2 h-2 bg-premium-red rounded-full"></div>
                AI destekli ses düzenleme
              </li>
            </ul>
          </div>
          
          <div class="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h4 class="text-xl font-bold text-white mb-4 font-montserrat">Popüler Yazılımlar</h4>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-white/80">
                <div class="w-2 h-2 bg-premium-red rounded-full"></div>
                Adobe Premiere Pro
              </li>
              <li class="flex items-center gap-3 text-white/80">
                <div class="w-2 h-2 bg-premium-red rounded-full"></div>
                DaVinci Resolve
              </li>
              <li class="flex items-center gap-3 text-white/80">
                <div class="w-2 h-2 bg-premium-red rounded-full"></div>
                Final Cut Pro
              </li>
            </ul>
          </div>
        </div>
        
        <p class="text-lg leading-relaxed text-white/80">
          Yapay zeka, video düzenleme süreçlerinde devrim yaratıyor. Otomatik renk düzenleme, akıllı kesme önerileri ve hatta AI destekli ses düzenleme araçları, prodüksiyon süreçlerini hızlandırıyor ve maliyetleri düşürüyor.
        </p>
      </div>

      <!-- 8K Section -->
      <div class="mb-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 class="text-4xl font-bold text-white font-montserrat tracking-wide">2. 8K ve Yüksek Çözünürlük</h2>
        </div>
        
        <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-2xl border border-green-500/20 mb-8">
          <div class="text-center mb-6">
            <div class="text-6xl font-bold text-green-400 mb-2">8K</div>
            <p class="text-white/80 text-lg">Ultra Yüksek Çözünürlük</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="text-center p-4 bg-white/5 rounded-xl">
              <div class="text-2xl font-bold text-white mb-1">7680</div>
              <div class="text-white/60 text-sm">Genişlik (px)</div>
            </div>
            <div class="text-center p-4 bg-white/5 rounded-xl">
              <div class="text-2xl font-bold text-white mb-1">4320</div>
              <div class="text-white/60 text-sm">Yükseklik (px)</div>
            </div>
            <div class="text-center p-4 bg-white/5 rounded-xl">
              <div class="text-2xl font-bold text-white mb-1">33.2M</div>
              <div class="text-white/60 text-sm">Toplam Piksel</div>
            </div>
            <div class="text-center p-4 bg-white/5 rounded-xl">
              <div class="text-2xl font-bold text-white mb-1">16:9</div>
              <div class="text-white/60 text-sm">Aspect Ratio</div>
            </div>
          </div>
        </div>
        
        <div class="bg-yellow-500/10 p-6 rounded-2xl border border-yellow-500/20">
                      <h4 class="text-xl font-bold text-white mb-4 flex items-center gap-2 font-montserrat">
            <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Dikkat Edilmesi Gerekenler
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center gap-3 text-white/80">
              <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Depolama alanı gereksinimleri
            </div>
            <div class="flex items-center gap-3 text-white/80">
              <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
              İşleme gücü ihtiyaçları
            </div>
            <div class="flex items-center gap-3 text-white/80">
              <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Lens kalitesi
            </div>
            <div class="flex items-center gap-3 text-white/80">
              <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Işıklandırma gereksinimleri
            </div>
          </div>
        </div>
      </div>

      <!-- Drone Section -->
      <div class="mb-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
            </svg>
          </div>
          <h2 class="text-4xl font-bold text-white font-montserrat tracking-wide">3. Drone Teknolojisi ve Havadan Çekimler</h2>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div class="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 text-center">
            <div class="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-2 font-montserrat">Hava Durumu</h4>
            <p class="text-white/80">Çekim öncesi hava durumunu kontrol edin</p>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 text-center">
            <div class="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-2 font-montserrat">Yasal İzinler</h4>
            <p class="text-white/80">Gerekli izinleri almayı unutmayın</p>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 text-center">
            <div class="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-2 font-montserrat">Güvenlik</h4>
            <p class="text-white/80">Güvenlik önlemlerini göz ardı etmeyin</p>
          </div>
        </div>
        
        <p class="text-lg leading-relaxed text-white/80">
          Drone teknolojisi, video prodüksiyon sektöründe büyük bir dönüşüm yaratıyor. Artık daha küçük, daha akıllı ve daha güvenli drone'lar mevcut.
        </p>
      </div>

      <!-- Social Media Section -->
      <div class="mb-20">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
            </svg>
          </div>
          <h2 class="text-4xl font-bold text-white font-montserrat tracking-wide">4. Sosyal Medya Optimizasyonu</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl border border-pink-500/20">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span class="text-white font-bold text-lg">IG</span>
              </div>
              <h3 class="text-xl font-bold text-white font-montserrat">Instagram Reels</h3>
            </div>
            <ul class="space-y-2 text-white/80">
              <li>• Dikey format (9:16)</li>
              <li>• 15-60 saniye</li>
              <li>• Hızlı kesmeler</li>
              <li>• Müzik kullanımı</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl border border-red-500/20">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <span class="text-white font-bold text-lg">YT</span>
              </div>
              <h3 class="text-xl font-bold text-white font-montserrat">YouTube Shorts</h3>
            </div>
            <ul class="space-y-2 text-white/80">
              <li>• Dikey format (9:16)</li>
              <li>• 60 saniyeye kadar</li>
              <li>• Güçlü açılış</li>
              <li>• Etkileşim odaklı</li>
            </ul>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <span class="text-white font-bold text-lg">TT</span>
              </div>
              <h3 class="text-xl font-bold text-white font-montserrat">TikTok</h3>
            </div>
            <ul class="space-y-2 text-white/80">
              <li>• Dikey format</li>
              <li>• Trend müzikler</li>
              <li>• Hızlı geçişler</li>
              <li>• Viral potansiyeli</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Conclusion Section -->
      <div class="mb-16 p-8 bg-gradient-to-r from-premium-red/10 to-transparent rounded-2xl border border-premium-red/20">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6 font-montserrat tracking-wide">Sonuç</h2>
          <p class="text-lg leading-relaxed text-white/80 mb-6">
            2024'te video prodüksiyon sektörü, teknoloji ve yaratıcılığın mükemmel birleşimini sunuyor. Bu trendleri takip ederek, daha etkili ve modern içerikler üretebilirsiniz.
          </p>
          <div class="inline-flex items-center gap-2 bg-premium-red text-white px-6 py-3 rounded-xl font-semibold">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Projeleriniz için bizimle iletişime geçin
          </div>
        </div>
      </div>
    `,
    category: "Trendler",
    author: "Nora Yapım",
    date: "15 Mart 2024",
    readTime: "8 dk",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=1080&fit=crop",
    featured: true
  },
  {
    id: '2',
    title: "Drone Çekim Teknikleri: Profesyonel İpuçları",
    excerpt: "Drone ile etkileyici çekimler yapmanın sırları ve güvenlik önlemleri hakkında kapsamlı bir kılavuz.",
    content: `
      <p>Drone çekimleri, video prodüksiyon dünyasında yeni perspektifler açıyor. Bu yazıda, profesyonel drone çekim tekniklerini ve güvenlik önlemlerini detaylı olarak inceleyeceğiz.</p>

      <h2>Drone Seçimi ve Ekipman</h2>
      <p>Doğru drone seçimi, başarılı bir çekim için kritik öneme sahip. İşte dikkat etmeniz gereken faktörler:</p>
      
      <ul>
        <li><strong>Kamera Kalitesi:</strong> En az 4K çözünürlük</li>
        <li><strong>Uçuş Süresi:</strong> Minimum 20-25 dakika</li>
        <li><strong>Menzil:</strong> En az 2-3 km</li>
        <li><strong>Stabilizasyon:</strong> 3 eksenli gimbal</li>
      </ul>

      <h2>Temel Çekim Teknikleri</h2>
      
      <h3>1. Reveal Shot (Açılma Çekimi)</h3>
      <p>Bu teknik, izleyiciyi yavaş yavaş sahneye tanıtır. Drone'u yüksek bir noktadan başlatıp, yavaşça aşağıya doğru hareket ettirerek sahneyi açarsınız.</p>
      
      <h3>2. Orbit Shot (Yörünge Çekimi)</h3>
      <p>Bir nesne veya kişi etrafında dairesel hareket yaparak dinamik bir çekim elde edersiniz. Bu teknik özellikle mimari çekimlerde etkili.</p>
      
      <h3>3. Follow Shot (Takip Çekimi)</h3>
      <p>Hareket halindeki bir nesneyi veya kişiyi takip ederek dinamik bir çekim oluşturursunuz. Bu teknik aksiyon sahnelerinde çok etkili.</p>

      <h2>Güvenlik Önlemleri</h2>
      <p>Drone çekimlerinde güvenlik her zaman öncelik olmalıdır:</p>
      
      <ul>
        <li>Hava durumunu kontrol edin</li>
        <li>Yasal izinleri alın</li>
        <li>Güvenli uçuş alanları seçin</li>
        <li>İnsan yoğunluğundan kaçının</li>
        <li>Pil durumunu sürekli kontrol edin</li>
      </ul>

      <h2>Işıklandırma ve Zamanlama</h2>
      <p>Drone çekimlerinde doğal ışık çok önemlidir. Altın saat (golden hour) ve mavi saat (blue hour) çekimleri için en ideal zamanlardır.</p>
      
      <p>Gün içinde çekim yaparken dikkat edilmesi gerekenler:</p>
      <ul>
        <li>Güneşin konumunu hesaplayın</li>
        <li>Gölge yönlerini planlayın</li>
        <li>ND filtreleri kullanın</li>
        <li>ISO ayarlarını optimize edin</li>
      </ul>

      <h2>Post Prodüksiyon</h2>
      <p>Drone çekimlerinin post prodüksiyon süreci de özel dikkat gerektirir:</p>
      
      <h3>Renk Düzenleme</h3>
      <p>Drone kameraları genellikle flat profile kaydeder. Bu, post prodüksiyon sırasında daha fazla esneklik sağlar.</p>
      
      <h3>Stabilizasyon</3>
      <p>Gimbal olsa bile, ek stabilizasyon gerekebilir. Adobe Premiere Pro veya DaVinci Resolve'da Warp Stabilizer kullanabilirsiniz.</p>

      <h2>Yasal Gereklilikler</h2>
      <p>Türkiye'de drone kullanımı için gerekli izinler:</p>
      <ul>
        <li>SHGM'den drone kaydı</li>
        <li>Uçuş izni (gerekli durumlarda)</li>
        <li>Sigorta poliçesi</li>
        <li>Pilot lisansı (ticari kullanım için)</li>
      </ul>

      <h2>Sonuç</h2>
      <p>Drone çekimleri, video prodüksiyon dünyasında yeni ufuklar açıyor. Doğru teknikler ve güvenlik önlemleriyle, etkileyici içerikler üretebilirsiniz.</p>
    `,
    category: "Teknik",
    author: "Ahmet Yılmaz",
    date: "12 Mart 2024",
    readTime: "12 dk",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
  }
]

const BlogPostDetail = ({ postId }: { postId: string }) => {
  const post = blogPosts.find(p => p.id === postId)

  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
                      <h1 className="text-4xl font-bold text-white mb-4 font-montserrat tracking-wide">Yazı Bulunamadı</h1>
          <p className="text-white/60 mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link href="/blog" className="bg-premium-red text-white px-6 py-3 rounded-xl hover:bg-premium-red/90 transition-colors">
            Blog'a Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://demo.awaikenthemes.com/artistics/creative-portfolio/wp-content/uploads/2025/02/page-header-bg.jpg"
            alt="Blog Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-white/80 text-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span>{post.category}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm">Aşağı Kaydır</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Article Content */}
            <article className="max-w-none">
              <div 
                className="text-white/90 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Author Bio */}
            <div className="mt-20 p-10 bg-white/5 rounded-3xl border border-white/10">
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-premium-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-premium-red font-bold text-2xl">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{post.author}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    Video prodüksiyon alanında uzmanlaşmış deneyimli bir yazar. 
                    Teknoloji ve yaratıcılığın kesişiminde yer alan konularda 
                    içerik üretiyor. 10+ yıllık sektör deneyimi ile en güncel 
                    trendleri ve teknikleri paylaşıyor.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-20 text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-4 bg-premium-red text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-premium-red/90 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tüm Yazılara Dön
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostDetail 