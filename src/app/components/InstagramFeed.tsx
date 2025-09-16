"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface InstagramPost {
  id: string;
  imageUrl: string;
  postUrl: string;
  likes: number;
  comments: number;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

// Mock Instagram data - replace with actual API data
const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example1',
    likes: 1247,
    comments: 89,
    mediaType: 'IMAGE'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example2',
    likes: 892,
    comments: 45,
    mediaType: 'VIDEO'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example3',
    likes: 2156,
    comments: 123,
    mediaType: 'CAROUSEL_ALBUM'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example4',
    likes: 678,
    comments: 34,
    mediaType: 'IMAGE'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1506947411487-a56738267384?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example5',
    likes: 1543,
    comments: 67,
    mediaType: 'VIDEO'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop',
    postUrl: 'https://instagram.com/p/example6',
    likes: 987,
    comments: 56,
    mediaType: 'IMAGE'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop&crop=center',
    postUrl: 'https://instagram.com/p/example7',
    likes: 2341,
    comments: 145,
    mediaType: 'CAROUSEL_ALBUM'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop&crop=top',
    postUrl: 'https://instagram.com/p/example8',
    likes: 756,
    comments: 42,
    mediaType: 'IMAGE'
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=bottom',
    postUrl: 'https://instagram.com/p/example9',
    likes: 1892,
    comments: 98,
    mediaType: 'VIDEO'
  },
  {
    id: '10',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=left',
    postUrl: 'https://instagram.com/p/example10',
    likes: 1123,
    comments: 78,
    mediaType: 'IMAGE'
  },
  {
    id: '11',
    imageUrl: 'https://images.unsplash.com/photo-1506947411487-a56738267384?w=400&h=400&fit=crop&crop=right',
    postUrl: 'https://instagram.com/p/example11',
    likes: 654,
    comments: 29,
    mediaType: 'VIDEO'
  },
  {
    id: '12',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop&crop=center',
    postUrl: 'https://instagram.com/p/example12',
    likes: 1456,
    comments: 87,
    mediaType: 'IMAGE'
  },
  {
    id: '13',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop&crop=top',
    postUrl: 'https://instagram.com/p/example13',
    likes: 892,
    comments: 54,
    mediaType: 'CAROUSEL_ALBUM'
  },
  {
    id: '14',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop&crop=bottom',
    postUrl: 'https://instagram.com/p/example14',
    likes: 1678,
    comments: 92,
    mediaType: 'IMAGE'
  },
  {
    id: '15',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=left',
    postUrl: 'https://instagram.com/p/example15',
    likes: 743,
    comments: 38,
    mediaType: 'VIDEO'
  }
];

// Instagram Post Card Component
const InstagramPostCard: React.FC<{ post: InstagramPost }> = ({ post }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getMediaTypeIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'VIDEO':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5L19 12L8 19V5Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'CAROUSEL_ALBUM':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" fill="white" stroke="white" strokeWidth="2"/>
            <rect x="14" y="3" width="7" height="7" fill="white" stroke="white" strokeWidth="2"/>
            <rect x="3" y="14" width="7" height="7" fill="white" stroke="white" strokeWidth="2"/>
            <rect x="14" y="14" width="7" height="7" fill="white" stroke="white" strokeWidth="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.a
      href={post.postUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative aspect-square overflow-hidden bg-gray-900"
    >
      {/* Background Image */}
      <img
        src={post.imageUrl}
        alt={`Instagram post ${post.id}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Media Type Icon (Top Right) */}
      {post.mediaType !== 'IMAGE' && (
        <div className="absolute top-3 right-3 z-20">
          {getMediaTypeIcon(post.mediaType)}
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {/* Stats Container */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            {/* Likes */}
            <div className="flex items-center gap-2 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span className="text-sm font-semibold">{formatNumber(post.likes)}</span>
            </div>

            {/* Comments */}
            <div className="flex items-center gap-2 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="text-sm font-semibold">{formatNumber(post.comments)}</span>
            </div>
          </div>
        </div>

        {/* Instagram Icon (Center) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-white/20 backdrop-blur-sm p-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const InstagramFeed: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Anlık: Instagram'da Biz
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
            Günlük çalışmalarımızdan, kamera arkası anlardan ve yaratıcı süreçlerimizden kareler.
          </p>
          
          {/* Follow Button */}
          <motion.a
            href="https://instagram.com/norayapim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Bizi Takip Et</span>
          </motion.a>
        </motion.div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {instagramPosts.map((post) => (
            <InstagramPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Daha fazla içerik için Instagram'da bizi takip edin
          </p>
          <a
            href="https://instagram.com/norayapim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300"
          >
            <span>@fortisyapim</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed; 