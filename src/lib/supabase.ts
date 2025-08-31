import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Blog category interface
export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Blog post interface
export interface BlogPost {
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
  is_homepage_featured: boolean;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
}

// Türkçe karakterleri İngilizce karşılıklarına çeviren fonksiyon
export const createSlug = (title: string): string => {
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

// Kategorileri getirme
export const getBlogCategories = async (): Promise<BlogCategory[]> => {
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
export const getBlogPosts = async (): Promise<BlogPost[]> => {
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

// Sayfalama ile blog yazılarını getirme
export const getBlogPostsPaginated = async (page: number = 1, limit: number = 10): Promise<{
  posts: BlogPost[];
  total: number;
  totalPages: number;
  currentPage: number;
}> => {
  const offset = (page - 1) * limit;

  // Toplam blog sayısını al
  const { count, error: countError } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published');

  if (countError) {
    console.error('Error fetching blog count:', countError);
    return { posts: [], total: 0, totalPages: 0, currentPage: page };
  }

  // Sayfalı blog yazılarını al
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Error fetching paginated blog posts:', error);
    return { posts: [], total: 0, totalPages: 0, currentPage: page };
  }

  const total = count || 0;
  const totalPages = Math.ceil(total / limit);

  return {
    posts: data || [],
    total,
    totalPages,
    currentPage: page
  };
};

export const getFeaturedBlogPosts = async (): Promise<BlogPost[]> => {
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
    console.error('Error fetching featured blog posts:', error);
    return [];
  }

  return data || [];
};

export const getHomepageFeaturedPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('is_homepage_featured', true)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching homepage featured blog posts:', error);
    return [];
  }

  return data || [];
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
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

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(*)
    `)
    .eq('id', id)
    .eq('status', 'published')
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data;
};

// Kategoriye göre blog yazıları getirme
export const getBlogPostsByCategory = async (categorySlug: string): Promise<BlogPost[]> => {
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
export const saveBlogPost = async (post: {
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
export const addBlogCategory = async (category: {
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

// SettenKareler Image interface
export interface SettenKarelerImage {
  id: number;
  title: string;
  description?: string;
  image_url: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// SettenKareler resimlerini getirme
export const getSettenKarelerImages = async (): Promise<SettenKarelerImage[]> => {
  const { data, error } = await supabase
    .from('settenkareler_images')
    .select('*')
    .eq('is_active', true)
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching settenkareler images:', error);
    return [];
  }
  return data || [];
};

// SettenKareler resmi ekleme
export const addSettenKarelerImage = async (image: {
  title: string;
  description?: string;
  image_url: string;
  order_index?: number;
  is_active?: boolean;
}) => {
  const { data, error } = await supabase
    .from('settenkareler_images')
    .insert({
      ...image,
      order_index: image.order_index || 0,
      is_active: image.is_active !== false
    });
  return { data, error };
};

// SettenKareler resmi güncelleme
export const updateSettenKarelerImage = async (id: number, updates: {
  title?: string;
  description?: string;
  image_url?: string;
  order_index?: number;
  is_active?: boolean;
}) => {
  const { data, error } = await supabase
    .from('settenkareler_images')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id);
  return { data, error };
};

// SettenKareler resmi silme
export const deleteSettenKarelerImage = async (id: number) => {
  const { data, error } = await supabase
    .from('settenkareler_images')
    .delete()
    .eq('id', id);
  return { data, error };
}; 