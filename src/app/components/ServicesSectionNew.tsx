"use client";

import React, { useState, useRef, useEffect, createContext, useContext, Children, ReactNode } from 'react';
import { motion, Transition, useMotionValue } from 'framer-motion';

// Service data
const servicesData = [
  {
    id: 1,
    title: "Video Productions",
    description: "An international digital design studio reimagining how people connect with brands.",
    poster: "https://cactuscastagency.com/wp-content/uploads/Ask-101.jpg",
    videoId: "1088965285",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg"
  },
  {
    id: 2,
    title: "Digital Media",
    description: "We prioritize flexibility, streamlined processes, and creative that positively impacts your business.",
    poster: "https://image.tmdb.org/t/p/original/i6t3GScKxSuF5A65qjQymEpo9au.jpg",
    videoId: "1088965204",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg"
  },
  {
    id: 3,
    title: "Commercial",
    description: "We are dedicated to transforming businesses by providing expert consulting services.",
    poster: "https://i.pinimg.com/564x/b0/83/4f/b0834fb287167f07a0656572a5d5bcb4.jpg",
    videoId: "1088965267",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg"
  },
  {
    id: 4,
    title: "Content Creation",
    description: "We are a creative production company that specializes in crafting unique stories.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTk2Nzc0OTExNl5BMl5BanBnXkFtZTgwMDc5MTI1NjE@._V1_.jpg",
    videoId: "1088965238",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg"
  },
  {
    id: 5,
    title: "Creative Directions",
    description: "It's not about being right but rather about discovering the right idea.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQ4ZTMxM2UtYTY2MS00NjlmLTlmNmYtYWFmMjMyMzZmZjZkXkEyXkFqcGc@._V1_.jpg",
    videoId: "1088965175",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg"
  },
  {
    id: 6,
    title: "Studio Rental",
    description: "We got into this business to tell compelling stories and connect ideas with people.",
    poster: "https://image.hurimg.com/i/hurriyet/75/770x0/5d6e22b567b0a918780f4cca.jpg",
    videoId: "1088965150",
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
    <section className={`py-12 lg:py-20 ${noBg ? 'bg-transparent' : 'bg-gradient-to-br from-black via-gray-900 to-black'} overflow-hidden relative`}>
      {/* Unified Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black" />
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
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-white leading-tight"
          >
            Benzersiz{" "}
            <span className="text-white">Projeler</span>
          </motion.h2>

          {/* Açıklama Metni */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl lg:mx-auto"
          >
            Her proje, yaratıcı vizyonumuzun ve teknik uzmanlığımızın bir yansımasıdır. Farklı sektörlerden markalarla çalışarak, her birinin benzersiz hikayesini görsel bir şölene dönüştürüyoruz.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-white via-white/60 to-transparent mt-8 lg:mx-auto"
          />
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
              classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
              alwaysShow
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionNew; 