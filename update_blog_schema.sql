-- Blog tablosuna SEO ve Sıkça Sorulan Sorular için gerekli sütunların eklenmesi
ALTER TABLE public.blog_posts 
ADD COLUMN meta_title text,
ADD COLUMN meta_description text,
ADD COLUMN faq_data jsonb;
