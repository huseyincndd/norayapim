'use client';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

export type InfiniteSliderProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  gap?: number;
  direction?: 'left' | 'right';
} & HTMLMotionProps<'div'>;

export function InfiniteSlider({
  children,
  className,
  duration = 20,
  gap = 16,
  direction = 'left',
  ...props
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const content = container.children[0] as HTMLElement;
      
      setContainerWidth(container.offsetWidth);
      setContentWidth(content.offsetWidth);

      const resizeObserver = new ResizeObserver(() => {
        setContainerWidth(container.offsetWidth);
        setContentWidth(content.offsetWidth);
      });

      resizeObserver.observe(container);
      resizeObserver.observe(content);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const distance = contentWidth / 2;
  const animationDuration = contentWidth / 50; // Adjust speed based on content width

  return (
    <motion.div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...props}
    >
      <motion.div
        className="flex"
        animate={{
          x: direction === 'left' ? -distance : distance,
        }}
        transition={{
          duration: animationDuration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{
          gap: `${gap}px`,
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </motion.div>
    </motion.div>
  );
} 