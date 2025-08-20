"use client";

import React, { useState, useRef, useEffect, createContext, useContext, Children, ReactNode } from 'react';
import { motion, Transition, useMotionValue } from 'framer-motion';

// Service data
const servicesData = [
  {
    id: 1,
    title: "Video Productions",
    description: "An international digital design studio reimagining how people connect with brands.",
    poster: "https://norayapim.xyz/_assets/media/390a4d97c2a911c6c5288a8e60b901e7.jpg",
    videoId: "1088965285",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg"
  },
  {
    id: 2,
    title: "Digital Media",
    description: "We prioritize flexibility, streamlined processes, and creative that positively impacts your business.",
    poster: "https://norayapim.xyz/_assets/media/42ab8b39ea20e6463d398652a976e13a.jpg",
    videoId: "1088965204",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg"
  },
  {
    id: 3,
    title: "Commercial",
    description: "We are dedicated to transforming businesses by providing expert consulting services.",
    poster: "https://norayapim.xyz/_assets/media/47230946f363ef20051e51cafc3dcdff.jpg",
    videoId: "1088965267",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg"
  },
  {
    id: 4,
    title: "Content Creation",
    description: "We are a creative production company that specializes in crafting unique stories.",
    poster: "https://norayapim.xyz/_assets/media/49a64215211360af66f457eb773e77d2.jpg",
    videoId: "1088965238",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg"
  },
  {
    id: 5,
    title: "Creative Directions",
    description: "It's not about being right but rather about discovering the right idea.",
    poster: "https://norayapim.xyz/_assets/media/522f67e2602ff41683885da245a46f0a.jpg",
    videoId: "1088965175",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg"
  },
  {
    id: 6,
    title: "Studio Rental",
    description: "We got into this business to tell compelling stories and connect ideas with people.",
    poster: "https://norayapim.xyz/_assets/media/52f994ed6afbf599aa372f271457dedd.jpg",
    videoId: "1088965150",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/lighting.svg"
  },
  {
    id: 7,
    title: "Film Production",
    description: "Creating cinematic experiences that captivate and inspire audiences worldwide.",
    poster: "https://norayapim.xyz/_assets/media/59edb701e24db057f9f0a9fc9fdf698f.jpg",
    videoId: "1088965149",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg"
  },
  {
    id: 8,
    title: "Advertising",
    description: "Strategic advertising solutions that drive engagement and deliver results.",
    poster: "https://norayapim.xyz/_assets/media/5f53320dd1302bca88145669f6ac31cb.jpg",
    videoId: "1088965148",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg"
  },
  {
    id: 9,
    title: "Brand Storytelling",
    description: "Crafting compelling narratives that connect brands with their audiences.",
    poster: "https://norayapim.xyz/_assets/media/6212466731fe62ced311fcffd0868cb9.jpg",
    videoId: "1088965147",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg"
  },
  {
    id: 10,
    title: "Corporate Videos",
    description: "Professional corporate video production for businesses of all sizes.",
    poster: "https://norayapim.xyz/_assets/media/69bdeedd52bb3f1425f7c519ba8ec7e6.jpg",
    videoId: "1088965146",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg"
  },
  {
    id: 11,
    title: "Event Coverage",
    description: "Comprehensive event coverage and live streaming services.",
    poster: "https://norayapim.xyz/_assets/media/72be2afe12ae076a5225f82a7ceb2a4a.jpg",
    videoId: "1088965145",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg"
  },
  {
    id: 12,
    title: "Documentary",
    description: "Documentary filmmaking that tells real stories with authenticity.",
    poster: "https://norayapim.xyz/_assets/media/75c063c5717dabf1a90242341b5c5369.png",
    videoId: "1088965144",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/lighting.svg"
  },
  {
    id: 13,
    title: "Music Videos",
    description: "Creative music video production for artists and musicians.",
    poster: "https://norayapim.xyz/_assets/media/77132f50e03162d994bc45bb89d2bf3b.jpg",
    videoId: "1088965143",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg"
  },
  {
    id: 14,
    title: "Product Videos",
    description: "Showcasing products with stunning visual storytelling.",
    poster: "https://norayapim.xyz/_assets/media/79c3e80ec848d799d25b291f0a89a985.jpg",
    videoId: "1088965142",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg"
  },
  {
    id: 15,
    title: "Social Media",
    description: "Engaging social media content that drives audience interaction.",
    poster: "https://norayapim.xyz/_assets/media/7ff22b339a52fc8fe3659fad99b91e45.jpg",
    videoId: "1088965141",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg"
  },
  {
    id: 16,
    title: "Animation",
    description: "Creative animation and motion graphics for dynamic storytelling.",
    poster: "https://norayapim.xyz/_assets/media/80e6c06d519a9af9f8a872021ee35b4c.jpg",
    videoId: "1088965140",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg"
  },
  {
    id: 17,
    title: "Post Production",
    description: "Professional post-production services for polished final products.",
    poster: "https://norayapim.xyz/_assets/media/82b20caf71ec3776afcadbe49981ddb4.jpg",
    videoId: "1088965139",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg"
  },
  {
    id: 18,
    title: "Live Streaming",
    description: "High-quality live streaming solutions for events and broadcasts.",
    poster: "https://norayapim.xyz/_assets/media/9671304c91110994886639ff61eccae3.jpg",
    videoId: "1088965138",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/lighting.svg"
  }
];

// Carousel Context
export type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
};

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within an CarouselProvider');
  }
  return context;
}

export type CarouselProviderProps = {
  children: ReactNode;
  initialIndex?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
};

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

// Carousel Components
export type CarouselProps = {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
};

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex);
  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
    >
      <div className={`group/hover relative ${className}`}>
        <div className='overflow-hidden'>{children}</div>
      </div>
    </CarouselProvider>
  );
}

export type CarouselNavigationProps = {
  className?: string;
  classNameButton?: string;
  alwaysShow?: boolean;
};

function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
}: CarouselNavigationProps) {
  const { index, setIndex, itemsCount } = useCarousel();
  const [visibleItemsCount, setVisibleItemsCount] = useState(4);
  
  // Responsive visible items count
  useEffect(() => {
    const updateVisibleItemsCount = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 1024) {
        setVisibleItemsCount(4); // lg - 4 kart
      } else {
        setVisibleItemsCount(2); // sm ve xs - 2 kart
      }
    };

    updateVisibleItemsCount();
    window.addEventListener('resize', updateVisibleItemsCount);
    return () => window.removeEventListener('resize', updateVisibleItemsCount);
  }, []);
  
  const maxIndex = Math.max(0, itemsCount - visibleItemsCount);

  return (
    <div
      className={`pointer-events-none absolute left-[-12.5%] top-1/2 flex w-[125%] -translate-y-1/2 justify-between px-2 ${className}`}
    >
      <button
        type='button'
        aria-label='Previous slide'
        className={`pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-3 transition-opacity duration-300 dark:bg-zinc-950 ${
          alwaysShow
            ? 'opacity-100'
            : 'opacity-0 group-hover/hover:opacity-100'
        } ${
          alwaysShow
            ? 'disabled:opacity-40'
            : 'group-hover/hover:disabled:opacity-40'
        } ${classNameButton}`}
        disabled={index === 0}
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
      >
        <svg className="w-5 h-5 stroke-zinc-600 dark:stroke-zinc-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type='button'
        className={`pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-3 transition-opacity duration-300 dark:bg-zinc-950 ${
          alwaysShow
            ? 'opacity-100'
            : 'opacity-0 group-hover/hover:opacity-100'
        } ${classNameButton}`}
        aria-label='Next slide'
        onClick={() => {
          if (index >= maxIndex) {
            setIndex(0); // Başa dön
          } else {
            setIndex(index + 1);
          }
        }}
      >
        <svg className="w-5 h-5 stroke-zinc-600 dark:stroke-zinc-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export type CarouselContentProps = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
};

function CarouselContent({
  children,
  className,
  transition,
}: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag } = useCarousel();
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsLength = Children.count(children);
  const [visibleItemsCount, setVisibleItemsCount] = useState(4);
  
  // Responsive visible items count
  useEffect(() => {
    const updateVisibleItemsCount = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 1024) {
        setVisibleItemsCount(4); // lg - 4 kart
      } else {
        setVisibleItemsCount(2); // sm ve xs - 2 kart
      }
    };

    updateVisibleItemsCount();
    window.addEventListener('resize', updateVisibleItemsCount);
    return () => window.removeEventListener('resize', updateVisibleItemsCount);
  }, []);
  
  const maxIndex = Math.max(0, itemsLength - visibleItemsCount);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= maxIndex) {
        setIndex(0); // Başa dön
      } else {
        setIndex(index + 1);
      }
    }, 4000); // 4 saniyede bir geçiş

    return () => clearInterval(interval);
  }, [index, setIndex, maxIndex]);

  useEffect(() => {
    if (!itemsLength) {
      return;
    }

    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -10) {
      if (index >= maxIndex) {
        setIndex(0); // Başa dön
      } else {
        setIndex(index + 1);
      }
    } else if (x >= 10 && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <motion.div
      drag={disableDrag ? false : 'x'}
      dragConstraints={
        disableDrag
          ? undefined
          : {
              left: 0,
              right: 0,
            }
      }
      dragMomentum={disableDrag ? undefined : false}
      style={{
        x: disableDrag ? undefined : dragX,
      }}
      animate={{
        translateX: `-${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={
        transition || {
          damping: 18,
          stiffness: 90,
          type: 'spring',
          duration: 0.2,
        }
      }
      className={`flex items-center ${
        !disableDrag && 'cursor-grab active:cursor-grabbing'
      } ${className}`}
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
}

export type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <motion.div
      className={`w-full min-w-0 shrink-0 grow-0 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ServiceCard Component
const ServiceCard = ({ 
  service, 
  isActive, 
}: { 
  service: typeof servicesData[0], 
  isActive: boolean, 
}) => {
  return (
    <motion.div 
      className="
        relative overflow-hidden rounded-2xl 
        w-full aspect-[27/35] max-w-[320px] mx-auto
        shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm
        flex-shrink-0
      "
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        {/* Poster Image - Always visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${service.poster})` }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        
        {/* White Glow on Active */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent
          transition-opacity duration-500
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `} />
      </div>


    </motion.div>
  );
};

// Services Section Component
const ServicesSectionNew = ({ noBg = false }: { noBg?: boolean }) => {
  const [activeId, setActiveId] = useState<number>(1); // İlk kartı aktif başlat

  return (
    <section className={`py-12 lg:py-20 ${noBg ? 'bg-transparent' : 'bg-black'} overflow-hidden relative`}>
      {/* Unified Background Elements */}
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
          {/* White Blur Effects */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl z-0"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl z-0"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-left lg:text-center mb-16 lg:mb-24">
          {/* Ana Başlık */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-white leading-tight"
          >
            Birçok <span className="text-white">Proje</span>
          </motion.h2>

          {/* Açıklama Metni */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-lg text-white/80 leading-relaxed max-w-3xl lg:mx-auto"
          >
            Her proje, yaratıcı vizyon ve teknik uzmanlığın bir yansımasıdır. Hikâyeler, etkileyici görsel deneyimlerle buluşuyor.
          </motion.p>

          {/* Alt Başlık ve Açıklama */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              2008'den Bugüne
            </h3>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl lg:mx-auto">
              Senaryodan yayına kadar, ulusal ve uluslararası birçok projede yer alındı ve katkı sağlandı.
            </p>
          </motion.div>


        </div>

        {/* Carousel Container */}
        <div className='relative w-full px-4 pb-8'>
          <Carousel>
            <CarouselContent className='-ml-4'>
              {servicesData.map((service) => (
                <CarouselItem key={service.id} className='basis-1/2 lg:basis-1/4 xl:basis-1/4 pl-4'>
                  <ServiceCard
                    service={service}
                    isActive={activeId === service.id}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
                         <CarouselNavigation
               className='absolute -bottom-24 left-auto top-auto w-full justify-end gap-2 z-30'
               classNameButton='bg-white *:stroke-black'
               alwaysShow
             />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionNew; 