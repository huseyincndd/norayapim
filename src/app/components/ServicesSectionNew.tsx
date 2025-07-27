"use client";

import React, { useState, useRef, useEffect, createContext, useContext, Children, ReactNode } from 'react';
import { motion, Transition, useMotionValue } from 'framer-motion';

// Service data
const servicesData = [
  {
    id: 1,
    title: "Video Productions",
    description: "An international digital design studio reimagining how people connect with brands.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_6-1024x576.jpg",
    videoId: "1088965285",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/videography.svg"
  },
  {
    id: 2,
    title: "Digital Media",
    description: "We prioritize flexibility, streamlined processes, and creative that positively impacts your business.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_3-1024x539.jpg",
    videoId: "1088965204",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/playlist.svg"
  },
  {
    id: 3,
    title: "Commercial",
    description: "We are dedicated to transforming businesses by providing expert consulting services.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_5-1024x539.jpg",
    videoId: "1088965267",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/megaphone.svg"
  },
  {
    id: 4,
    title: "Content Creation",
    description: "We are a creative production company that specializes in crafting unique stories.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_4-1024x576.jpg",
    videoId: "1088965238",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/movie-reel.svg"
  },
  {
    id: 5,
    title: "Creative Directions",
    description: "It's not about being right but rather about discovering the right idea.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_2-1024x540.jpg",
    videoId: "1088965175",
    icon: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/clapper.svg"
  },
  {
    id: 6,
    title: "Studio Rental",
    description: "We got into this business to tell compelling stories and connect ideas with people.",
    poster: "https://demo2.wpopal.com/framek/wp-content/uploads/2025/05/service_1-1024x538.jpg",
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
  
  // Desktop'ta 3, tablet'te 2, mobilde 1 kart görünür
  const getVisibleItemsCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // sm
  };
  
  const visibleItemsCount = getVisibleItemsCount();
  const maxIndex = Math.max(0, itemsCount - visibleItemsCount);

  return (
    <div
      className={`pointer-events-none absolute left-[-12.5%] top-1/2 flex w-[125%] -translate-y-1/2 justify-between px-2 ${className}`}
    >
      <button
        type='button'
        aria-label='Previous slide'
        className={`pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950 ${
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
        <svg className="w-4 h-4 stroke-zinc-600 dark:stroke-zinc-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type='button'
        className={`pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950 ${
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
        <svg className="w-4 h-4 stroke-zinc-600 dark:stroke-zinc-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  
  // Desktop'ta 3, tablet'te 2, mobilde 1 kart görünür
  const getVisibleItemsCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // sm
  };
  
  const visibleItemsCount = getVisibleItemsCount();
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
  onMouseEnter,
  onMouseLeave,
}: { 
  service: typeof servicesData[0], 
  isActive: boolean, 
  onMouseEnter: () => void,
  onMouseLeave: () => void
}) => {
  return (
    <motion.div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="
        relative overflow-hidden rounded-2xl 
        w-full h-[400px] lg:h-[500px]
        shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm
        group cursor-pointer
        flex-shrink-0
      "
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        {/* Poster Image - Always visible as fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${service.poster})` }}
        />

        {/* Video Background - Only load and play when active */}
        {isActive && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <iframe
              src={`https://player.vimeo.com/video/${service.videoId}?muted=1&autoplay=1&loop=1&background=1&controls=0&quality=480p&dnt=1&autopause=0&title=0&byline=0&portrait=0&cover=1`}
              className="absolute inset-0 w-full h-full"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '16px'
              }}
              allow="autoplay; fullscreen"
              loading="lazy"
              frameBorder="0"
              title=""
            />
          </div>
        )}

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        
        {/* Premium Red Glow on Active */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-premium-red/30 via-transparent to-transparent
          transition-opacity duration-500
          ${isActive ? 'opacity-100' : 'opacity-0'}
        `} />
      </div>

      {/* Content */}
      <div className="
        absolute inset-0
        flex flex-col items-center justify-center
        p-6 text-white text-center
      ">
        {/* SVG Icon */}
        <motion.div 
          className="mb-6"
          animate={{ 
            scale: isActive ? 1.1 : 1,
            y: isActive ? -10 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-premium-red/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-premium-red/30">
            <img 
              src={service.icon} 
              alt={service.title}
              className="w-8 h-8 lg:w-10 lg:h-10 opacity-90 filter brightness-0 invert"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center"
          animate={{ 
            y: isActive ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-sm sm:text-base lg:text-lg max-w-sm text-white/90"
          animate={{ 
            opacity: isActive ? 1 : 0.8,
            y: isActive ? 0 : 10
          }}
          transition={{ duration: 0.3 }}
        >
          {service.description}
        </motion.p>

        {/* Active Indicator */}
        <motion.div
          className="absolute bottom-4 right-4 w-8 h-8 bg-premium-red/80 backdrop-blur-sm rounded-full flex items-center justify-center"
          animate={{ 
            scale: isActive ? 1 : 0.8,
            opacity: isActive ? 1 : 0.7
          }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Services Section Component
const ServicesSectionNew = ({ noBg = false }: { noBg?: boolean }) => {
  const [activeId, setActiveId] = useState<number>(1); // İlk kartı aktif başlat

  return (
    <section className={`py-16 lg:py-32 ${noBg ? 'bg-transparent' : 'bg-gradient-to-br from-black via-gray-900 to-black'} overflow-hidden relative`}>
      {/* Unified Background Elements */}
      {!noBg && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/90 to-black" />
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
          {/* Red Blur Effects */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-premium-red/5 rounded-full blur-2xl z-0"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-premium-red/5 rounded-full blur-2xl z-0"
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
        <div className="text-center mb-16 lg:mb-24">
          {/* Services Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-2 h-2 bg-premium-red rounded-full" />
            <span className="text-white/60 text-sm uppercase tracking-wider">Hizmetlerimiz</span>
          </motion.div>

          {/* Ana Başlık */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-white leading-tight"
          >
            Yaratıcı{" "}
            <span className="text-premium-red">Çözümler</span> Sunuyoruz
          </motion.h2>

          {/* Açıklama Metni */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            Markanızın görsel hikayesini bir üst seviyeye taşımak ve hedef kitlenizle anlamlı bağlar kurmak için tasarlanmış kapsamlı video prodüksiyon hizmetleri sunuyoruz.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className='relative w-full px-4'>
          <Carousel>
            <CarouselContent className='-ml-4'>
              {servicesData.map((service) => (
                <CarouselItem key={service.id} className='basis-full md:basis-1/2 lg:basis-1/3 pl-4'>
                  <ServiceCard
                    service={service}
                    isActive={activeId === service.id}
                    onMouseEnter={() => setActiveId(service.id)}
                    onMouseLeave={() => setActiveId(1)} // İlk karta geri dön
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNavigation
              className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
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