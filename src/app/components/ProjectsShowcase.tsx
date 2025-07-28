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
    posterUrl: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_6-1024x576.jpg",
    description: "Müziğin ruhunu görsel sanatla birleştiren, sanatsal ve yaratıcı müzik video prodüksiyonu."
  },
  {
    id: 2,
    title: "Brand Evolution",
    category: "REKLAM FİLMİ",
    videoUrl: "https://player.vimeo.com/video/1088965204?muted=1&autoplay=1&loop=1&background=1&controls=0",
    posterUrl: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_3-1024x539.jpg",
    description: "Markanın değerlerini ve vizyonunu etkileyici görsel hikayelerle anlatan kurumsal reklam çalışması."
  },
  {
    id: 3,
    title: "Corporate Vision",
    category: "KURUMSAL VİDEO",
    videoUrl: "https://player.vimeo.com/video/1088965267?muted=1&autoplay=1&loop=1&background=1&controls=0",
    posterUrl: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_5-1024x539.jpg",
    description: "Kurumsal kimliği ve vizyonu güçlü bir şekilde aktaran profesyonel video prodüksiyonu."
  },
  {
    id: 4,
    title: "Creative Storytelling",
    category: "İÇERİK ÜRETİMİ",
    videoUrl: "https://player.vimeo.com/video/1088965238?muted=1&autoplay=1&loop=1&background=1&controls=0",
    posterUrl: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_4-1024x576.jpg",
    description: "Yaratıcı hikaye anlatımı teknikleriyle üretilen etkileyici içerik çalışmaları."
  },
  {
    id: 5,
    title: "Artistic Direction",
    category: "YARATICI YÖNETİM",
    videoUrl: "https://player.vimeo.com/video/1088965175?muted=1&autoplay=1&loop=1&background=1&controls=0",
    posterUrl: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_2-1024x540.jpg",
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
          src={`${project.videoUrl}&quality=720p&dnt=1`}
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
const MobileProjectCard: React.FC<{ 
  project: Project, 
  isActive: boolean,
  cardId: number
}> = ({ project, isActive, cardId }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-white/10 shadow-xl"
      data-card-id={cardId}
    >
      {/* Video Background */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {/* Poster Image - Always visible as fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 z-10"
          style={{ backgroundImage: `url(${project.posterUrl})` }}
        />

        {/* Video Background - Only load and play when active */}
        {isActive && (
        <iframe
          src={project.videoUrl}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 z-20"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: 'none' }}
        />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-30" />
        
        {/* Play Button Overlay - Only show when not active */}
        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        )}

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 w-8 h-8 bg-premium-red/80 backdrop-blur-sm rounded-full flex items-center justify-center z-40"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <div className="mb-3">
          <span className="inline-block rounded-full bg-premium-red/20 px-3 py-1 text-xs font-semibold text-premium-red border border-premium-red/30">
            {project.category}
          </span>
        </div>
        
        <h3 className="mb-3 text-xl md:text-2xl font-bold text-white group-hover:text-premium-red transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="mb-4 text-sm md:text-base text-gray-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-lg bg-premium-red px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-premium-red/90 hover:shadow-lg hover:shadow-premium-red/25"
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
  const [activeId, setActiveId] = useState<number>(1); // İlk kartı aktif başlat
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll event listener to detect which card is in the center
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll('[data-card-id]');
      const viewportCenter = window.innerHeight / 2;
      let closestCard = 1;
      let minDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestCard = parseInt(card.getAttribute('data-card-id') || '1');
        }
      });

      setActiveId(closestCard);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900/50 to-black py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-2 h-2 bg-premium-red rounded-full" />
            <span className="text-white/60 text-sm uppercase tracking-wider">Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Öne Çıkan{" "}
            <span className="text-premium-red">Projeler</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Nora Yapım'ın yaratıcı vizyonunu ve teknik mükemmelliğini yansıtan 
            seçkin projelerimizi keşfedin.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-premium-red mx-auto mt-8"
          />
        </motion.div>

        {/* Projects Grid */}
        <div ref={containerRef} className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MobileProjectCard 
                project={project} 
                isActive={activeId === project.id}
                cardId={project.id}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 rounded-full bg-premium-red px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-premium-red/90 hover:shadow-xl hover:shadow-premium-red/25"
          >
            <span>Tüm Projeleri Görüntüle</span>
            <svg 
              width="20" 
              height="20" 
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
      className="relative bg-black"
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