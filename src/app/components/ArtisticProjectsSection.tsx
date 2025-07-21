"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Project data structure
interface Project {
  id: string;
  title: string;
  posterUrl: string;
  detailsUrl: string;
  year?: string;
  category?: string;
}

// Dummy projects data
const dummyProjects: Project[] = [
  {
    id: 'film-1',
    title: 'Görkemli Bir Gece',
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=1200&fit=crop',
    detailsUrl: '/projects/gorkemli-bir-gece',
    year: '2024',
    category: 'Drama'
  },
  {
    id: 'film-2',
    title: 'Sokağın Çocukları',
    posterUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=1200&fit=crop',
    detailsUrl: '/projects/sokagin-cocuklari',
    year: '2023',
    category: 'Belgesel'
  },
  {
    id: 'film-3',
    title: 'Sonbahar Rüzgarları',
    posterUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop',
    detailsUrl: '/projects/sonbahar-ruzgarlari',
    year: '2024',
    category: 'Romantik'
  },
  {
    id: 'film-4',
    title: 'Şehrin Gizli Yüzü',
    posterUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=1200&fit=crop',
    detailsUrl: '/projects/sehrin-gizli-yuzu',
    year: '2023',
    category: 'Gerilim'
  },
  {
    id: 'film-5',
    title: 'Yıldızların Altında',
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=1200&fit=crop',
    detailsUrl: '/projects/yildizlarin-altinda',
    year: '2024',
    category: 'Bilim Kurgu'
  }
];

// Project List Item Component
const ProjectListItem = ({ 
  project, 
  isActive, 
  onHover 
}: { 
  project: Project, 
  isActive: boolean, 
  onHover: () => void 
}) => {
  return (
    <motion.li
      onMouseEnter={onHover}
      onFocus={onHover}
      className="group cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 py-4">
        {/* Active Indicator */}
        <motion.div
          animate={{ 
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.5
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-2 h-2 bg-[#D4AF37] rounded-full flex-shrink-0"
        />

        {/* Project Title */}
        <motion.h3
          animate={{ 
            opacity: isActive ? 1 : 0.5,
            x: isActive ? 0 : -10
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#181818] group-hover:opacity-100 transition-opacity duration-300"
        >
          {project.title}
        </motion.h3>

        {/* Year Badge */}
        {project.year && (
          <motion.span
            animate={{ opacity: isActive ? 1 : 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-sm text-[#666] font-medium px-3 py-1 bg-[#F5F5F5] rounded-full"
          >
            {project.year}
          </motion.span>
        )}
      </div>
    </motion.li>
  );
};

// Poster Display Component with Ken Burns Effect
const PosterDisplay = ({ project }: { project: Project }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full h-full rounded-2xl overflow-hidden"
    >
      {/* Ken Burns Effect Container */}
      <div className="absolute inset-0">
        <motion.img
          src={project.posterUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Project Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-2">{project.title}</h3>
          {project.category && (
            <p className="text-lg text-white/80 mb-4">{project.category}</p>
          )}
          <Link 
            href={project.detailsUrl}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-lg">Detayları Gör</span>
            <motion.svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Mobile Project Card Component
const MobileProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      <Link href={project.detailsUrl} className="block">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-200">
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.img
              src={project.posterUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            {project.category && (
              <p className="text-sm text-white/80 mb-2">{project.category}</p>
            )}
            {project.year && (
              <p className="text-sm text-white/60">{project.year}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// Main Artistic Projects Section Component
const ArtisticProjectsSection = ({ projects = dummyProjects }: { projects?: Project[] }) => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || '');
  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-[#181818] font-serif mb-6"
          >
            Öne Çıkanlar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed"
          >
            En etkileyici projelerimizden seçkiler
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-[#D4AF37] mx-auto mt-8"
          />
        </motion.div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Column - Project List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-2"
          >
            <ul className="space-y-2">
              {projects.map((project) => (
                <ProjectListItem
                  key={project.id}
                  project={project}
                  isActive={activeProjectId === project.id}
                  onHover={() => setActiveProjectId(project.id)}
                />
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Poster Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <PosterDisplay key={activeProjectId} project={activeProject} />
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <MobileProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticProjectsSection; 