"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface Project {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern Soundscapes",
    category: "MÜZİK VİDEOSU",
    videoUrl: "https://player.vimeo.com/video/1088965285?muted=1&autoplay=1&loop=1&background=1&controls=0",
    posterUrl: "/api/placeholder/1920/1080/2a2a2a/ffffff?text=Modern+Soundscapes",
    description: "Müziğin ruhunu görsel sanatla birleştiren, sanatsal ve yaratıcı müzik video prodüksiyonu."
  },
  {
    id: 2,
    title: "Brand Evolution",
    category: "REKLAM FİLMİ",
    videoUrl: "https://player.vimeo.com/video/1088965204?muted=1&autoplay=1&loop=1&background=1&controls=0",
    posterUrl: "/api/placeholder/1920/1080/3a3a3a/ffffff?text=Brand+Evolution",
    description: "Markanın değerlerini ve vizyonunu etkileyici görsel hikayelerle anlatan kurumsal reklam çalışması."
  },
  {
    id: 3,
    title: "Corporate Vision",
    category: "KURUMSAL VİDEO",
    videoUrl: "https://player.vimeo.com/video/1088965267?muted=1&autoplay=1&loop=1&background=1&controls=0",
    posterUrl: "/api/placeholder/1920/1080/4a4a4a/ffffff?text=Corporate+Vision",
    description: "Kurumsal kimliği ve vizyonu güçlü bir şekilde aktaran profesyonel video prodüksiyonu."
  },
  {
    id: 4,
    title: "Creative Storytelling",
    category: "İÇERİK ÜRETİMİ",
    videoUrl: "https://player.vimeo.com/video/1088965238?muted=1&autoplay=1&loop=1&background=1&controls=0",
    posterUrl: "/api/placeholder/1920/1080/5a5a5a/ffffff?text=Creative+Storytelling",
    description: "Yaratıcı hikaye anlatımı teknikleriyle üretilen etkileyici içerik çalışmaları."
  },
  {
    id: 5,
    title: "Artistic Direction",
    category: "YARATICI YÖNETİM",
    videoUrl: "https://player.vimeo.com/video/1088965175?muted=1&autoplay=1&loop=1&background=1&controls=0",
    posterUrl: "/api/placeholder/1920/1080/6a6a6a/ffffff?text=Artistic+Direction",
    description: "Sanatsal yönetim ve yaratıcı vizyonla şekillendirilen özgün projeler."
  }
];

// Desktop Project Slide Component
const DesktopProjectSlide: React.FC<{ project: Project; isActive: boolean }> = ({ project, isActive }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <iframe
          src={project.videoUrl}
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-[110%] min-h-[110%] -translate-x-1/2 -translate-y-1/2 object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0.3, 
              y: isActive ? 0 : 30 
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              {project.category}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0.3, 
              y: isActive ? 0 : 30 
            }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6 text-5xl font-bold md:text-7xl"
          >
            {project.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0.3, 
              y: isActive ? 0 : 30 
            }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0.3, 
              y: isActive ? 0 : 30 
            }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-8"
          >
            <button className="rounded-full bg-white px-8 py-3 text-black transition-all hover:bg-gray-100">
              Projeyi İncele
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex space-x-2">
          {projectsData.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === projectsData.findIndex(p => p.id === project.id) 
                  ? 'bg-white w-8' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile Project Card Component
const MobileProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl"
    >
      {/* Video Background */}
      <div className="relative aspect-video w-full overflow-hidden">
        <iframe
          src={project.videoUrl}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: 'none' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="mb-3">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        
        <h3 className="mb-2 text-2xl font-bold text-white">
          {project.title}
        </h3>
        
        <p className="mb-4 text-sm text-gray-300 line-clamp-2">
          {project.description}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-gray-100"
        >
          <span>Projeyi İncele</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:translate-x-1"
          >
            <path 
              d="M5 12H19M12 5L19 12L12 19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

// Desktop Showcase Component - The existing scrollytelling logic
const DesktopShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate the total height for the film strip (5 projects = 500vh)
  const filmStripHeight = `${projectsData.length * 100}vh`;

  // Use scroll to track progress through the film strip
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // The critical connection logic: bridge between scroll and state
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Calculate which slide should be active based on scroll progress
      const newIndex = Math.min(
        Math.floor(latest * projectsData.length),
        projectsData.length - 1
      );
      
      // Only update if the index has actually changed
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });

    return unsubscribe;
  }, [scrollYProgress, activeIndex]);

  return (
    <div className="relative bg-black">
      {/* The Film Strip - The tall scrollable container */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: filmStripHeight }}
      >
        {/* The Projector - The sticky container that holds the slides */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* The moving slides container */}
          <motion.div
            className="h-full w-full"
            animate={{ y: `-${activeIndex * 100}vh` }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            {projectsData.map((project) => (
              <DesktopProjectSlide
                key={project.id}
                project={project}
                isActive={projectsData[activeIndex]?.id === project.id}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Mobile Showcase Component - Clean card-based layout
const MobileShowcase: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">
            Projelerimiz
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Nora Yapım'ın yaratıcı vizyonunu ve teknik mükemmelliğini yansıtan 
            seçkin projelerimizi keşfedin.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MobileProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-gray-100">
            Tüm Projeleri Görüntüle
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// Main Projects Showcase Component with universal entry logic
const ProjectsShowcase: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const showcaseRef = useRef<HTMLElement>(null);
  const [isEngaged, setIsEngaged] = useState(false);
  
  // Universal intersection observer for entry detection
  const { ref: intersectionRef, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: false, // Allow re-entry
  });

  // Universal "proactive entry" logic for both mobile and desktop
  useEffect(() => {
    // If the section is in view AND we haven't engaged the user yet
    if (inView && !isEngaged) {
      // We are now in "cinema mode"
      setIsEngaged(true);

      // THE CRITICAL STEP: Programmatically scroll the section to the top
      // This ensures both mobile and desktop start from the perfect position
      showcaseRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // If the user scrolls away, reset the state so they can re-enter later
    if (!inView && isEngaged) {
      setIsEngaged(false);
    }
  }, [inView, isEngaged]);

  return (
    <section 
      ref={(el) => {
        // Combine both refs: one for intersection observer, one for scroll positioning
        intersectionRef(el);
        if (showcaseRef) {
          (showcaseRef as React.MutableRefObject<HTMLElement | null>).current = el;
        }
      }}
      className="relative"
    >
      {isDesktop ? (
        <DesktopShowcase />
      ) : (
        <MobileShowcase />
      )}
    </section>
  );
};

export default ProjectsShowcase; 