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
      <div class="text-white/90 leading-relaxed space-y-6">
        <p>
          2024 yılı, video prodüksiyon sektöründe teknolojik gelişmelerin ve yaratıcı yaklaşımların hızla evrim geçirdiği bir dönem olarak karşımıza çıkıyor. Bu yazıda, bu yılın en önemli trendlerini ve bunların prodüksiyon süreçlerinizi nasıl etkileyebileceğini detaylı olarak inceleyeceğiz.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Yapay Zeka Destekli Post Prodüksiyon</h2>
        
        <p>
          Yapay zeka, video düzenleme süreçlerinde devrim yaratıyor. Otomatik renk düzenleme, akıllı kesme önerileri ve AI destekli ses düzenleme araçları, prodüksiyon süreçlerini hızlandırıyor ve maliyetleri düşürüyor. Adobe Premiere Pro, DaVinci Resolve ve Final Cut Pro gibi popüler yazılımlar artık AI özelliklerini entegre ediyor.
        </p>

        <p>
          AI destekli araçlar sayesinde, saatler süren manuel işlemler artık dakikalar içinde tamamlanabiliyor. Özellikle renk düzenleme ve ses temizleme konularında yapay zeka, profesyonel sonuçlar elde etmeyi kolaylaştırıyor.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">8K ve Yüksek Çözünürlük</h2>
        
        <p>
          8K çözünürlük, video prodüksiyon dünyasında yeni standartlar belirliyor. 7680x4320 piksel çözünürlüğü ile 33.2 milyon piksel içeren bu format, ultra yüksek kalitede içerik üretme imkanı sunuyor.
        </p>

        <p>
          Ancak 8K çekim yaparken dikkat edilmesi gereken önemli noktalar var. Depolama alanı gereksinimleri, işleme gücü ihtiyaçları, lens kalitesi ve ışıklandırma gereksinimleri bu formatın başarılı kullanımı için kritik öneme sahip.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Drone Teknolojisi ve Havadan Çekimler</h2>
        
        <p>
          Drone teknolojisi, video prodüksiyon sektöründe büyük bir dönüşüm yaratıyor. Artık daha küçük, daha akıllı ve daha güvenli drone'lar mevcut. Bu teknoloji, önceden erişilemeyen açılardan çekim yapma imkanı sunuyor.
        </p>

        <p>
          Drone çekimlerinde başarılı sonuçlar elde etmek için hava durumunu kontrol etmek, gerekli yasal izinleri almak ve güvenlik önlemlerini göz ardı etmemek gerekiyor. Ayrıca çekim öncesi planlama ve teknik ekipman seçimi de büyük önem taşıyor.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Sosyal Medya Optimizasyonu</h2>
        
        <p>
          Sosyal medya platformları için optimize edilmiş video içerik üretimi, günümüzde büyük önem taşıyor. Her platformun kendine özgü gereksinimleri ve kullanıcı davranışları bulunuyor.
        </p>

        <p>
          Instagram Reels için dikey format (9:16), 15-60 saniye süre, hızlı kesmeler ve müzik kullanımı önemli. YouTube Shorts için de benzer gereksinimler geçerli ancak 60 saniyeye kadar uzunluk kabul ediliyor. TikTok için ise trend müzikler, hızlı geçişler ve viral potansiyeli taşıyan içerikler öne çıkıyor.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Virtual Production</h2>
        
        <p>
          Virtual Production, gerçek zamanlı render teknolojileri kullanarak fiziksel setlerin yerini alan yenilikçi bir yaklaşım. Bu teknoloji, prodüksiyon süreçlerini hızlandırıyor ve maliyetleri düşürüyor.
        </p>

        <p>
          Virtual Production'ın en büyük avantajları arasında maliyet tasarrufu, zaman tasarrufu, yaratıcı özgürlük ve güvenlik yer alıyor. Seyahat maliyetleri, set kurulumu ve lokasyon izinleri ortadan kalkıyor. Gerçek zamanlı görüntüleme ile hızlı karar verme imkanı sunuyor.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Sonuç</h2>
        
        <p>
          2024'te video prodüksiyon sektörü, teknoloji ve yaratıcılığın mükemmel birleşimini sunuyor. Yapay zeka, yüksek çözünürlük, drone teknolojisi ve virtual production gibi trendler, içerik üreticilerine yeni imkanlar sunuyor. Bu trendleri takip ederek, daha etkili ve modern içerikler üretebilir, sektörde öne çıkabilirsiniz.
        </p>

        <p>
          Bu trendleri projelerinize uygulamak için profesyonel ekibimizle çalışabilirsiniz. Deneyimli ekibimiz, en güncel teknolojileri kullanarak projelerinizi hayata geçirmenize yardımcı oluyor.
        </p>
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
      <div class="text-white/90 leading-relaxed space-y-6">
        <p>
          Drone çekimleri, video prodüksiyon dünyasında yeni perspektifler açıyor. Bu yazıda, profesyonel drone çekim tekniklerini ve güvenlik önlemlerini detaylı olarak inceleyeceğiz.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Drone Seçimi ve Ekipman</h2>
        
        <p>
          Doğru drone seçimi, başarılı bir çekim için kritik öneme sahip. En az 4K çözünürlük, minimum 20-25 dakika uçuş süresi, en az 2-3 km menzil ve 3 eksenli gimbal gibi teknik özellikler dikkat edilmesi gereken faktörler arasında yer alıyor.
        </p>

        <p>
          Güvenlik özellikleri de drone seçiminde önemli rol oynuyor. Obstacle avoidance sistemi, return to home özelliği, GPS stabilizasyonu ve düşük pil uyarısı gibi özellikler güvenli uçuş için gerekli.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Temel Çekim Teknikleri</h2>
        
        <p>
          Reveal Shot (Açılma Çekimi) tekniği, izleyiciyi yavaş yavaş sahneye tanıtır. Drone'u yüksek bir noktadan başlatıp, yavaşça aşağıya doğru hareket ettirerek sahneyi açarsınız. Bu teknik özellikle manzara çekimlerinde çok etkilidir.
        </p>

        <p>
          Orbit Shot (Yörünge Çekimi) tekniği, bir nesne veya kişi etrafında dairesel hareket yaparak dinamik bir çekim elde edersiniz. Bu teknik özellikle mimari çekimlerde ve portre çekimlerinde etkili.
        </p>

        <p>
          Follow Shot (Takip Çekimi) tekniği, hareket halindeki bir nesneyi veya kişiyi takip ederek dinamik bir çekim oluşturursunuz. Bu teknik aksiyon sahnelerinde ve spor çekimlerinde çok etkili.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Güvenlik Önlemleri</h2>
        
        <p>
          Drone çekimlerinde güvenlik her zaman öncelik olmalıdır. Hava durumunu kontrol edin ve uygun koşulları bekleyin. Yasal izinleri alın ve güvenlik kurallarına uyun. Güvenli uçuş alanları seçin ve insan yoğunluğundan kaçının.
        </p>

        <p>
          Pil durumunu sürekli kontrol edin ve yedek pil bulundurun. Drone'u görüş alanınızda tutun ve uzak mesafelerde dikkatli olun. Bu önlemler, güvenli ve başarılı bir çekim için kritik öneme sahip.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Işıklandırma ve Zamanlama</h2>
        
        <p>
          Drone çekimlerinde doğal ışık çok önemlidir. Altın saat (golden hour) ve mavi saat (blue hour) çekimleri için en ideal zamanlardır. Gün içi çekimlerde güneşin konumunu hesaplayın, gölge yönlerini planlayın, ND filtreleri kullanın ve ISO ayarlarını optimize edin.
        </p>

        <p>
          Özel zamanlar için gün doğumu ve gün batımı, mavi saat, bulutlu havalar ve mevsimsel değişiklikler ideal çekim koşulları sunuyor. Bu zamanlarda elde edilen görüntüler daha etkileyici ve profesyonel görünüyor.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Post Prodüksiyon</h2>
        
        <p>
          Drone çekimlerinin post prodüksiyon süreci de özel dikkat gerektirir. Drone kameraları genellikle flat profile kaydeder. Bu, post prodüksiyon sırasında daha fazla esneklik sağlar. Color grading sırasında doğal renkleri korumaya özen gösterin.
        </p>

        <p>
          Gimbal olsa bile, ek stabilizasyon gerekebilir. Adobe Premiere Pro veya DaVinci Resolve'da Warp Stabilizer kullanabilirsiniz. Ancak aşırı stabilizasyon görüntü kalitesini düşürebilir, bu yüzden dengeli bir yaklaşım benimseyin.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Yasal Gereklilikler</h2>
        
        <p>
          Türkiye'de drone kullanımı için gerekli izinler arasında SHGM'den drone kaydı yaptırmak, gerekli durumlarda uçuş izni almak, sigorta poliçesi yaptırmak ve ticari kullanım için pilot lisansı almak yer alıyor.
        </p>

        <p>
          Bu yasal gereklilikleri yerine getirmek, hem güvenli hem de yasal bir drone kullanımı için şart. Aksi takdirde ciddi yasal sorunlarla karşılaşabilirsiniz.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Sonuç</h2>
        
        <p>
          Drone çekimleri, video prodüksiyon dünyasında yeni ufuklar açıyor. Doğru teknikler, güvenlik önlemleri ve yasal gereklilikleri yerine getirerek, etkileyici içerikler üretebilirsiniz. Bu teknolojiyi kullanarak, önceden erişilemeyen açılardan çekim yapma imkanı elde edebilirsiniz.
        </p>

        <p>
          Drone çekim projeleriniz için deneyimli ekibimizle çalışabilirsiniz. Profesyonel ekibimiz, güvenli ve etkileyici drone çekimleri gerçekleştirmenize yardımcı oluyor.
        </p>
      </div>
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
          <Link href="/blog" className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
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
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">
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
                className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 group"
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