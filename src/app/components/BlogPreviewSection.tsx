"use client";

import React, { useState, useRef, useId, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Blog post data structure
interface BlogPost {
  id: number;
  title: string;
  excerpt?: string;
  imageUrl: string;
  slug: string;
  date?: string;
}

// Dummy blog posts data
const dummyPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Doğru Headshot Fotoğrafı Nasıl Çekilir?',
    excerpt: 'Profesyonel oyuncu portreleri için temel teknikler ve ipuçları',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
    slug: '/blog/dogru-headshot-fotografi',
    date: '15 Mart 2024'
  },
  {
    id: 2,
    title: 'Casting Sürecinde Dikkat Edilmesi Gerekenler',
    excerpt: 'Başarılı bir casting deneyimi için hazırlık rehberi',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=1000&fit=crop',
    slug: '/blog/casting-sureci',
    date: '12 Mart 2024'
  },
  {
    id: 3,
    title: 'Sosyal Medyada Oyuncu Markası Oluşturma',
    excerpt: 'Dijital çağda oyuncu kimliğinizi nasıl geliştirirsiniz?',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=1000&fit=crop',
    slug: '/blog/oyuncu-markasi',
    date: '10 Mart 2024'
  },
  {
    id: 4,
    title: 'Türk Sinemasında Yeni Trendler',
    excerpt: '2024 yılında öne çıkan projeler ve fırsatlar',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=1000&fit=crop',
    slug: '/blog/turk-sinemasi-trendleri',
    date: '8 Mart 2024'
  },
  {
    id: 5,
    title: 'Oyunculuk Teknikleri ve Metodlar',
    excerpt: 'Profesyonel oyunculuk için temel teknikler',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
    slug: '/blog/oyunculuk-teknikleri',
    date: '5 Mart 2024'
  },
  {
    id: 6,
    title: 'Dijital Çağda Oyunculuk',
    excerpt: 'Teknoloji ile değişen oyunculuk sektörü',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=1000&fit=crop',
    slug: '/blog/dijital-cagda-oyunculuk',
    date: '3 Mart 2024'
  }
];

// Blog Slide Component with 3D effects
interface BlogSlideProps {
  post: BlogPost;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const BlogSlide = ({ post, index, current, handleSlideClick }: BlogSlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { imageUrl, title, excerpt, date, slug } = post;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={imageUrl}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Date */}
          {date && (
            <p className="text-sm text-white/70 mb-2 font-light">
              {date}
            </p>
          )}

          {/* Title */}
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-4 relative">
            {title}
          </h2>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed max-w-md mx-auto">
              {excerpt}
            </p>
          )}

          {/* Read More Button */}
          <div className="flex justify-center">
            <Link href={slug}>
              <button className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                Devamını Oku
              </button>
            </Link>
          </div>
        </article>
      </li>
    </div>
  );
};

// Carousel Control Component
interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-premium-red focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

// Main Blog Preview Section Component
const BlogPreviewSection = ({ posts = dummyPosts, noBg = false }: { posts?: BlogPost[], noBg?: boolean }) => {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? posts.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === posts.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <section className={`py-24 lg:py-32 ${noBg ? 'bg-transparent' : 'bg-gradient-to-br from-black via-gray-900 to-black'} overflow-hidden relative`}>
      {/* Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black/80 to-black" />
          
          {/* Animated Background Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-red/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/3 left-1/4 w-32 h-32 bg-premium-red/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-premium-red/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* About Us Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-2 h-2 bg-premium-red rounded-full" />
            <span className="text-white/60 text-sm uppercase tracking-wider">Blog</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Ajans'tan{" "}
            <span className="text-premium-red">Haberler</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Sektörden son gelişmeler, başarı hikayeleri ve ipuçları.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-premium-red mx-auto mt-8"
          />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full h-full py-20">
          <div
            className="relative w-[70vmin] h-[70vmin] mx-auto"
            aria-labelledby={`carousel-heading-${id}`}
          >
            <ul
              className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${current * (100 / posts.length)}%)`,
              }}
            >
              {posts.map((post, index) => (
                <BlogSlide
                  key={post.id}
                  post={post}
                  index={index}
                  current={current}
                  handleSlideClick={handleSlideClick}
                />
              ))}
            </ul>

            {/* Navigation Controls */}
            <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
              <CarouselControl
                type="previous"
                title="Go to previous slide"
                handleClick={handlePreviousClick}
              />

              <CarouselControl
                type="next"
                title="Go to next slide"
                handleClick={handleNextClick}
              />
            </div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            href="/blog"
            className="group inline-flex items-center gap-3 text-white font-semibold text-lg hover:text-premium-red transition-colors duration-300"
          >
            <span>Tümünü Gör</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="transition-transform group-hover:translate-x-1"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection; 