'use client';

import { ReactNode, useRef, useEffect } from 'react';
import { gsap, ScrollTrigger, defaultEase, defaultDuration } from '@/lib/gsap';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  stagger?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 40,
  x = 0,
  duration = defaultDuration,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, y, x });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom-=10%',
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: defaultEase,
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [delay, y, x, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}

export function StaggerReveal({
  children,
  className = '',
  stagger = 0.1,
  y = 40,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const items = element.children;
    gsap.set(items, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom-=10%',
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: defaultDuration,
          ease: defaultEase,
          stagger,
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [stagger, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
