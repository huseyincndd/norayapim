# Final Blog Sistemi

## Kategori Sistemi

### 1. Kategoriler Tablosu
```sql
CREATE TABLE blog_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  color VARCHAR(7) DEFAULT '#3B82F6', -- Hex renk kodu
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Güncellenmiş Tablo - blog_posts

```sql
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER REFERENCES blog_categories(id),
  seo_title VARCHAR(255),
  seo_description TEXT,
  faq TEXT,
  featured_image VARCHAR(255), -- Ana blog sayfasındaki kapak resmi
  detail_image VARCHAR(255), -- Detay sayfasında en üstteki kapak resmi
  slug VARCHAR(255) UNIQUE, -- URL için güzel link
  is_featured BOOLEAN DEFAULT FALSE, -- Öne çıkan yazı mı?
  status VARCHAR(20) DEFAULT 'published', -- Yeni yazılar direkt yayınlansın
  published_at TIMESTAMP DEFAULT NOW(), -- Yayın tarihi otomatik
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## TypeScript Interface

```typescript
interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  category_id?: number;
  category?: BlogCategory; // JOIN ile gelecek
  seo_title?: string;
  seo_description?: string;
  faq?: string;
  featured_image?: string;
  detail_image?: string;
  slug?: string;
  is_featured: boolean;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
}
```

## URL Slug Nedir?

**Slug**, blog yazınızın URL'inde görünecek kısımdır:

### Örnekler:
- **Başlık:** "Yapım Süreci Nedir? Fikirden Perdeye Yolculuk"
- **Slug:** "yapim-sureci-nedir-fikirden-perdeye-yolculuk"
- **URL:** `https://fortisyapim.com/blog/yapim-sureci-nedir-fikirden-perdeye-yolculuk`

### Slug Oluşturma Kuralları:
- Küçük harfler
- Türkçe karakterler İngilizce karşılıkları (ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u)
- Boşluklar tire (-) ile değiştirilir
- Noktalama işaretleri kaldırılır

### Örnek Dönüşümler:
```
"Yapım Süreci Nedir?" → "yapim-sureci-nedir"
"Film Yapım Teknikleri" → "film-yapim-teknikleri"
"Post-Prodüksiyon Süreci" → "post-produksiyon-sureci"
```

## Örnek Veri

### 1. Kategoriler
```sql
INSERT INTO blog_categories (name, slug, description, color) VALUES
('Yapım Süreci', 'yapim-sureci', 'Film, dizi ve reklam yapım süreçleri hakkında bilgiler', '#3B82F6'),
('Teknik Bilgiler', 'teknik-bilgiler', 'Kamera, ışık, ses ve post-prodüksiyon teknikleri', '#10B981'),
('Sektör Haberleri', 'sektor-haberleri', 'Film ve televizyon sektöründen güncel haberler', '#F59E0B'),
('Ekipman İncelemeleri', 'ekipman-incelemeleri', 'Kamera, lens ve diğer ekipman incelemeleri', '#EF4444'),
('Röportajlar', 'roportajlar', 'Sektör profesyonelleri ile röportajlar', '#8B5CF6');
```

### 2. Blog Yazıları
```sql
INSERT INTO blog_posts (
  title, 
  content, 
  category_id, 
  seo_title, 
  seo_description, 
  faq, 
  featured_image,
  detail_image,
  slug,
  is_featured,
  status,
  published_at
) VALUES (
  'Yapım Süreci Nedir? Fikirden Perdeye Yolculuk',
  'Bir film, dizi, reklam veya belgeselin izleyiciyle buluşması, yaratıcı fikirlerin titizlikle yürütülen aşamalı bir yapım sürecine dönüşmesiyle mümkündür. Fortis Yapım olarak, fikirden perdeye uzanan bu yolculuğu profesyonel ve stratejik bir yaklaşımla yönetiyoruz.

Türkiye''de yapım süreçleri genellikle üç ana evrede gerçekleşir: Ön Prodüksiyon, Prodüksiyon ve Post-Prodüksiyon. Her aşama, projeyi hem sanatsal hem teknik açıdan ileriye taşıyan kritik adımlar içerir.

Ön Prodüksiyon (Pre-Production)
Yapım sürecinin temeli burada atılır. Güçlü bir ön prodüksiyon, başarılı bir projenin anahtarıdır.

Prodüksiyon (Production)
Ön hazırlıkların ardından, kameraların çalışmaya başladığı en heyecanlı aşama başlar.

Post-Prodüksiyon (Post-Production)
Çekimler tamamlandıktan sonra ham görüntüler, seyircinin izleyeceği son hâle getirilir.',
  1, -- Yapım Süreci kategorisi
  'Yapım Süreci Nedir? Prodüksiyon Aşamaları ve Film/Dizi Yapımı | Fortis Yapım',
  'Fortis Yapım olarak fikirden perdeye uzanan yapım sürecini detaylandırıyoruz.',
  'Soru: Yapım süreci nedir?
Cevap: Yapım süreci, bir projenin fikir aşamasından seyirciyle buluşmasına kadar geçen aşamaları kapsar.

Soru: Prodüksiyon aşamasında neler yapılır?
Cevap: Prodüksiyon aşamasında çekimler gerçekleştirilir, ekip ve ekipman yönetimi yapılır.',
  'https://example.com/blog-list-image.jpg',
  'https://example.com/blog-detail-image.jpg',
  'yapim-sureci-nedir-fikirden-perdeye-yolculuk',
  true, -- Bu yazı öne çıkan
  'published',
  NOW()
);
```

## Slug Oluşturma Fonksiyonu

```typescript
// Türkçe karakterleri İngilizce karşılıklarına çeviren fonksiyon
const createSlug = (title: string): string => {
  const turkishToEnglish: { [key: string]: string } = {
    'ç': 'c', 'Ç': 'C',
    'ğ': 'g', 'Ğ': 'G', 
    'ı': 'i', 'I': 'I',
    'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S',
    'ü': 'u', 'Ü': 'U'
  };

  let slug = title.toLowerCase();
  
  // Türkçe karakterleri değiştir
  Object.keys(turkishToEnglish).forEach(turkish => {
    slug = slug.replace(new RegExp(turkish, 'g'), turkishToEnglish[turkish]);
  });
  
  // Özel karakterleri kaldır, boşlukları tire yap
  slug = slug
    .replace(/[^a-z0-9\s-]/g, '') // Sadece harf, rakam, boşluk ve tire bırak
    .replace(/\s+/g, '-') // Boşlukları tire yap
    .replace(/-+/g, '-') // Birden fazla tireyi tek tire yap
    .trim();
  
  return slug;
};

// Kullanım örneği
const title = "Yapım Süreci Nedir? Fikirden Perdeye Yolculuk";
const slug = createSlug(title); // "yapim-sureci-nedir-fikirden-perdeye-yolculuk"
```

## Güncellenmiş Kullanım

```typescript
// Kategorileri getirme
const getBlogCategories = async (): Promise<BlogCategory[]> => {
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .eq('is_active', true)
    .order('name', { ascending: true });
  
  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
  return data || [];
};

// Blog yazılarını kategori ile birlikte getirme
const getBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
  return data || [];
};

// Öne çıkan blog yazılarını getirme
const getFeaturedBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('is_featured', true)
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
  return data || [];
};

// Slug ile blog yazısı getirme
const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  
  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
  return data;
};

// Kategoriye göre blog yazıları getirme
const getBlogPostsByCategory = async (categorySlug: string): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('category.slug', categorySlug)
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
  return data || [];
};

// Blog yazısı ekleme (slug otomatik oluşturulur)
const saveBlogPost = async (post: {
  title: string;
  content: string;
  category_id?: number;
  seo_title?: string;
  seo_description?: string;
  faq?: string;
  featured_image?: string;
  detail_image?: string;
  is_featured?: boolean;
  status: 'draft' | 'published';
}) => {
  const slug = createSlug(post.title);
  
  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      ...post,
      slug,
      is_featured: post.is_featured || false,
      published_at: post.status === 'published' ? new Date().toISOString() : null
    });
  return { data, error };
};

// Kategori ekleme
const addBlogCategory = async (category: {
  name: string;
  description?: string;
  color?: string;
}) => {
  const slug = createSlug(category.name);
  
  const { data, error } = await supabase
    .from('blog_categories')
    .insert({
      ...category,
      slug,
      color: category.color || '#3B82F6'
    });
  return { data, error };
};
```

## Alanlar Özeti:

### Blog Posts Tablosu:
- **id**: Benzersiz kimlik
- **title**: Blog başlığı
- **content**: Blog içeriği
- **category_id**: Kategori ID (foreign key)
- **seo_title**: SEO başlığı
- **seo_description**: SEO açıklaması
- **faq**: SSS bölümü
- **featured_image**: Ana sayfa kapak resmi
- **detail_image**: Detay sayfa kapak resmi
- **slug**: URL için güzel link (otomatik oluşturulur)
- **is_featured**: Öne çıkan yazı mı? (true/false)
- **status**: Durum (draft/published)
- **published_at**: Yayın tarihi
- **created_at**: Oluşturulma tarihi
- **updated_at**: Güncelleme tarihi

### Blog Categories Tablosu:
- **id**: Benzersiz kimlik
- **name**: Kategori adı
- **slug**: URL için kategori slug'ı
- **description**: Kategori açıklaması
- **color**: Kategori rengi (hex)
- **is_active**: Aktif mi? (true/false)
- **created_at**: Oluşturulma tarihi
- **updated_at**: Güncelleme tarihi

## Öne Çıkan Yazı Kullanım Alanları:

1. **Ana Sayfa**: En üstte büyük kart olarak
2. **Blog Listesi**: İlk sırada özel tasarımla
3. **Sidebar**: "Öne Çıkan Yazılar" bölümü
4. **Email Newsletter**: Öne çıkan içerik olarak

Bu özellik ile en önemli blog yazılarınızı vurgulayabilirsiniz! 🚀 