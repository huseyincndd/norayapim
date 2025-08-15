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
    imageUrl: 'https://assets.videomaker.com/2022/08/shooting-studio-for-photographer-and-creative-art-2021-10-13-00-39-44-utc-1.jpg',
    slug: '/blog/dogru-headshot-fotografi',
    date: '15 Mart 2024'
  },
  {
    id: 2,
    title: 'Casting Sürecinde Dikkat Edilmesi Gerekenler',
    excerpt: 'Başarılı bir casting deneyimi için hazırlık rehberi',
    imageUrl: 'https://blaremedia.net/wp/wp-content/uploads/2022/07/jakob-owens-ntqaFfrDdEA-unsplash-1024x683.jpg',
    slug: '/blog/casting-sureci',
    date: '12 Mart 2024'
  },
  {
    id: 3,
    title: 'Sosyal Medyada Oyuncu Markası Oluşturma',
    excerpt: 'Dijital çağda oyuncu kimliğinizi nasıl geliştirirsiniz?',
    imageUrl: 'https://maestrofilmworks.com/wp-content/uploads/2022/03/Video-Production_Vertical-Split-1.jpg',
    slug: '/blog/oyuncu-markasi',
    date: '10 Mart 2024'
  },
  {
    id: 4,
    title: 'Türk Sinemasında Yeni Trendler',
    excerpt: '2024 yılında öne çıkan projeler ve fırsatlar',
    imageUrl: 'https://assets.videomaker.com/2022/08/shooting-studio-for-photographer-and-creative-art-2021-10-13-00-39-44-utc-1.jpg',
    slug: '/blog/turk-sinemasi-trendleri',
    date: '8 Mart 2024'
  },
  {
    id: 5,
    title: 'Oyunculuk Teknikleri ve Metodlar',
    excerpt: 'Profesyonel oyunculuk için temel teknikler',
    imageUrl: 'https://blaremedia.net/wp/wp-content/uploads/2022/07/jakob-owens-ntqaFfrDdEA-unsplash-1024x683.jpg',
    slug: '/blog/oyunculuk-teknikleri',
    date: '5 Mart 2024'
  },
  {
    id: 6,
    title: 'Dijital Çağda Oyunculuk',
    excerpt: 'Teknoloji ile değişen oyunculuk sektörü',
    imageUrl: 'https://maestrofilmworks.com/wp-content/uploads/2022/03/Video-Production_Vertical-Split-1.jpg',
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
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-screen md:w-[60vw] lg:w-[30vw] h-[160vmin] md:h-[90vmin] lg:h-[60vmin] mx-0 z-10 cursor-pointer"
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
          className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 md:p-8 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="max-w-2xl text-left">
            {/* Category Tag */}
            <div className="inline-block bg-white text-black px-3 py-1 rounded-full text-xs font-medium mb-3">
              Blog
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
              {title}
            </h2>

            {/* Excerpt */}
            {excerpt && (
              <p className="text-sm md:text-base text-white/80 mb-4 leading-relaxed">
                {excerpt}
              </p>
            )}

            {/* Date and Read More */}
            <div className="flex items-center justify-between">
              {date && (
                <p className="text-sm text-white/60 font-light">
                  {date}
                </p>
              )}
              
              <Link href="/blog/1">
                <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-100 transition duration-200 flex items-center gap-2">
                  Devamını Oku
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
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
      className={`w-12 h-12 flex items-center justify-center bg-white border-2 border-white focus:outline-none hover:bg-gray-100 active:bg-gray-200 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section className={`py-12 lg:py-20 ${noBg ? 'bg-transparent' : 'bg-black'} overflow-hidden relative`}>
      {/* Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-black" />
          
          {/* Animated Background Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </>
      )}

      <div className="container mx-auto px-0 relative z-20 overflow-visible">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left lg:text-center mb-8 lg:mb-12 px-6 lg:px-8 relative"
        >
          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold text-white mb-4 text-left lg:text-center"
          >
            Sahnelerden{" "}
            <span className="text-white">Hikayeler</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl text-white/80 max-w-3xl leading-relaxed lg:text-center lg:mx-auto"
          >
            Oyuncuların dünyasından en güncel deneyimler, başarı hikayeleri ve profesyonel ipuçları.
          </motion.p>


        </motion.div>



        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full py-20 mx-0">
          <div
            className="relative w-screen md:w-[60vw] lg:w-[30vw] h-[160vmin] md:h-[90vmin] lg:h-[60vmin] mx-auto"
            aria-labelledby={`carousel-heading-${id}`}
          >
            {/* Mobile Navigation Controls - Positioned at top right of carousel */}
            <div className="lg:hidden absolute -top-16 -right-1 flex gap-1 z-[9999] pointer-events-auto bg-black/20 p-2 rounded-lg">
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
            <ul
              className="absolute flex mx-0 transition-transform duration-1000 ease-in-out"
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

            {/* Desktop Navigation Controls */}
            <div className="hidden lg:flex absolute justify-center w-full top-[calc(100%+2rem)]">
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
          className="text-left mt-6 lg:mt-12 px-6 lg:px-8"
        >
          <Link 
            href="/blog/1"
            className="group inline-flex items-center gap-3 text-white font-semibold text-lg hover:text-gray-300 transition-colors duration-300"
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