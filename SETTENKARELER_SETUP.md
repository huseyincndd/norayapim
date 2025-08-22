# SettenKareler Yönetim Sistemi Kurulum Rehberi

## Özellikler

- ✅ Bunny.net ile resim yükleme
- ✅ Resim düzenleme ve silme
- ✅ Sıralama sistemi
- ✅ Aktif/Pasif durumu
- ✅ Admin panel entegrasyonu
- ✅ Responsive tasarım

## Kurulum Adımları

### 1. Environment Variables

`.env.local` dosyasına aşağıdaki değişkenleri ekleyin:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Bunny.net Configuration
NEXT_PUBLIC_BUNNY_STORAGE_ZONE=villaqrmenu
BUNNY_API_KEY=your_bunny_api_key_here
NEXT_PUBLIC_BUNNY_REGION=de
```

### 2. Supabase Tablosu Oluşturma

Supabase Dashboard'da SQL Editor'ü açın ve `settenkareler-schema.sql` dosyasındaki SQL'i çalıştırın.

### 3. Bunny.net API Key

Bunny.net Dashboard'dan API key alın:
1. Storage > API Keys
2. Yeni API key oluşturun
3. Storage Zone: `villaqrmenu`
4. Permissions: Read & Write

### 4. Kullanım

1. Admin paneline gidin (`/admin`)
2. Sol menüden "SettenKareler Yönetimi"ni seçin
3. "Yeni Resim Ekle" butonuna tıklayın
4. Resim seçin ve bilgileri doldurun
5. Kaydedin

## Dosya Yapısı

```
src/
├── lib/
│   ├── bunny.ts              # Bunny.net API utilities
│   └── supabase.ts           # Supabase functions (güncellendi)
├── app/
│   ├── admin/
│   │   └── page.tsx          # Admin panel (güncellendi)
│   └── components/
│       ├── AdminSidebar.tsx  # Sidebar (güncellendi)
│       └── SettenKarelerManagement.tsx # Ana komponent
```

## API Endpoints

### Bunny.net
- `PUT /storage.bunnycdn.com/{storage-zone}/{file-path}` - Resim yükleme
- `DELETE /storage.bunnycdn.com/{storage-zone}/{file-path}` - Resim silme

### Supabase
- `getSettenKarelerImages()` - Resimleri getir
- `addSettenKarelerImage()` - Yeni resim ekle
- `updateSettenKarelerImage()` - Resim güncelle
- `deleteSettenKarelerImage()` - Resim sil

## Güvenlik

- Row Level Security (RLS) aktif
- Sadece authenticated kullanıcılar yazma işlemi yapabilir
- Public read access sadece aktif resimler için
- Dosya boyutu limiti: 10MB
- Desteklenen formatlar: JPEG, PNG, WebP

## Sorun Giderme

### Resim yüklenmiyor
1. Bunny.net API key'in doğru olduğunu kontrol edin
2. Storage zone adının doğru olduğunu kontrol edin
3. Dosya boyutunun 10MB'dan küçük olduğunu kontrol edin

### Database hatası
1. Supabase tablosunun oluşturulduğunu kontrol edin
2. RLS policy'lerin doğru olduğunu kontrol edin
3. Supabase credentials'ların doğru olduğunu kontrol edin

## Gelecek Özellikler

- [ ] Toplu resim yükleme
- [ ] Resim kırpma ve düzenleme
- [ ] Drag & drop sıralama
- [ ] Resim optimizasyonu
- [ ] Kategori sistemi 