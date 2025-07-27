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
  },
  {
    id: 'film-6',
    title: 'Karanlık Sular',
    posterUrl: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&h=1200&fit=crop',
    detailsUrl: '/projects/karanlik-sular',
    year: '2024',
    category: 'Aksiyon'
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
          className="w-2 h-2 bg-premium-red rounded-full flex-shrink-0"
        />

        {/* Project Title */}
        <motion.h3
          animate={{ 
            opacity: isActive ? 1 : 0.5,
            x: isActive ? 0 : -10
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white group-hover:opacity-100 transition-opacity duration-300"
        >
          {project.title}
        </motion.h3>

        {/* Year Badge */}
        {project.year && (
          <motion.span
            animate={{ opacity: isActive ? 1 : 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-sm text-white/80 font-medium px-3 py-1 bg-premium-red/20 backdrop-blur-sm rounded-full border border-premium-red/30"
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
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-900 border border-white/10">
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
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
            <h3 className="text-sm md:text-base font-bold mb-1">{project.title}</h3>
            {project.category && (
              <p className="text-xs md:text-sm text-white/80 mb-1">{project.category}</p>
            )}
            {project.year && (
              <p className="text-xs text-white/60">{project.year}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// Main Artistic Projects Section Component
const ArtisticProjectsSection = ({ projects = dummyProjects, noBg = false }: { projects?: Project[], noBg?: boolean }) => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || '');
  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];

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
            <span className="text-white/60 text-sm uppercase tracking-wider">Projelerimiz</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Öne Çıkan{" "}
            <span className="text-premium-red">Projeler</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            En etkileyici projelerimizden seçkiler
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-premium-red mx-auto mt-8"
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

        {/* Mobile Layout - Two Columns */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 md:gap-6"
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