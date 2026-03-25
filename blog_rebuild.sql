-- Blog rebuild SQL for new Supabase project
-- This script resets blog tables to a minimal, egress-friendly schema.

begin;

-- Keep only the core blog table. Category table is no longer required.
drop table if exists public.blog_categories cascade;

create table if not exists public.blog_posts (
  id bigint generated always as identity primary key,
  title text not null,
  slug text not null unique,
  content text not null,
  featured_image text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_blog_posts_status on public.blog_posts (status);
create index if not exists idx_blog_posts_published_at on public.blog_posts (published_at desc);
create index if not exists idx_blog_posts_created_at on public.blog_posts (created_at desc);

-- Always keep updated_at fresh.
create or replace function public.set_updated_at_blog_posts()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_blog_posts_updated_at on public.blog_posts;
create trigger trg_blog_posts_updated_at
before update on public.blog_posts
for each row
execute function public.set_updated_at_blog_posts();

-- Remove old records to start from scratch.
truncate table public.blog_posts restart identity;

commit;
