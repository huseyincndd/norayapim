import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Blog post interface
export interface BlogPost {
  id: number;
  title: string;
  content?: string;
  featured_image?: string;
  slug: string;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
  meta_title?: string;
  meta_description?: string;
  faq_data?: { question: string, answer: string }[];
}

// Legacy compatibility type. Category-based blog flow is disabled.
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

const BLOG_LIST_COLUMNS = 'id,title,slug,featured_image,status,published_at,created_at,updated_at,content';
const BLOG_DETAIL_COLUMNS = `${BLOG_LIST_COLUMNS},meta_title,meta_description,faq_data`;

const hasDataUri = (value?: string | null): boolean => {
  if (!value) return false;
  return /data:image\/[a-zA-Z+]+;base64,/i.test(value);
};

const isValidBunnyUrl = (url?: string | null): boolean => {
  if (!url) return true;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.hostname.includes('b-cdn.net');
  } catch {
    return false;
  }
};

const validateBlogPayload = (post: { content: string; featured_image?: string | null }) => {
  if (hasDataUri(post.content)) {
    throw new Error('İçerikte base64 görsel kullanılamaz. Lütfen Bunny CDN URL kullanın.');
  }
  if (hasDataUri(post.featured_image || '')) {
    throw new Error('Kapak görselinde base64 kullanılamaz. Lütfen Bunny CDN URL kullanın.');
  }
  if (!isValidBunnyUrl(post.featured_image)) {
    throw new Error('Kapak görseli yalnızca Bunny CDN URL formatında olmalıdır.');
  }
};

export const getBlogPosts = async (includeDrafts: boolean = true): Promise<BlogPost[]> => {
  let query = supabase
    .from('blog_posts')
    .select(BLOG_LIST_COLUMNS)
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false });

  if (!includeDrafts) {
    query = query.eq('status', 'published');
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return data || [];
};

export const getPublicBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(BLOG_LIST_COLUMNS)
    .eq('status', 'published')
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return data || [];
};

export const getBlogCategories = async (): Promise<BlogCategory[]> => {
  return [];
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
    .select(BLOG_LIST_COLUMNS)
    .eq('status', 'published')
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })
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
  return [];
};

export const getHomepageFeaturedPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(BLOG_LIST_COLUMNS)
    .eq('status', 'published')
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })
    .limit(6);

  if (error) {
    console.error('Error fetching homepage featured blog posts:', error);
    return [];
  }

  return data || [];
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(BLOG_DETAIL_COLUMNS)
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
    .select(BLOG_DETAIL_COLUMNS)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data;
};

export const saveBlogPost = async (post: {
  title: string;
  content: string;
  featured_image?: string;
  status: 'draft' | 'published';
  meta_title?: string;
  meta_description?: string;
  faq_data?: { question: string, answer: string }[];
}) => {
  validateBlogPayload(post);
  const slug = createSlug(post.title);
  
  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      title: post.title,
      content: post.content,
      slug,
      featured_image: post.featured_image || null,
      status: post.status,
      published_at: post.status === 'published' ? new Date().toISOString() : null,
      meta_title: post.meta_title || null,
      meta_description: post.meta_description || null,
      faq_data: post.faq_data || null
    });
  return { data, error };
};

export const updateBlogPost = async (
  id: number,
  post: {
    title: string;
    content: string;
    featured_image?: string;
    status: 'draft' | 'published';
    meta_title?: string;
    meta_description?: string;
    faq_data?: { question: string, answer: string }[];
  }
) => {
  validateBlogPayload(post);
  const slug = createSlug(post.title);

  const payload: {
    title: string;
    slug: string;
    content: string;
    featured_image: string | null;
    status: 'draft' | 'published';
    published_at?: string | null;
    meta_title?: string | null;
    meta_description?: string | null;
    faq_data?: any;
  } = {
    title: post.title,
    slug,
    content: post.content,
    featured_image: post.featured_image || null,
    status: post.status,
    meta_title: post.meta_title || null,
    meta_description: post.meta_description || null,
    faq_data: post.faq_data || null
  };

  if (post.status === 'published') {
    payload.published_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .update(payload)
    .eq('id', id);

  return { data, error };
};

export const addBlogCategory = async (_category: {
  name: string;
  description?: string;
  color?: string;
}) => {
  return {
    data: null,
    error: { message: 'Kategori yapisi devre disi birakildi.' }
  };
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