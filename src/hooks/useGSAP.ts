'use client';

import { useEffect, useRef, useCallback } from 'react';
import { gsap, ScrollTrigger, defaultEase, defaultDuration } from '@/lib/gsap';

export function useGSAP() {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return () => {
      // Cleanup all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { scopeRef, gsap, ScrollTrigger };
}

export function useScrollReveal(options?: {
  threshold?: number;
  stagger?: number;
  y?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { threshold = 0.1, stagger = 0.1, y = 40 } = options || {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.querySelectorAll('[data-reveal]');
    const targets = children.length > 0 ? children : [element];

    gsap.set(targets, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: `top bottom-=${threshold * 100}%`,
      onEnter: () => {
        gsap.to(targets, {
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
  }, [threshold, stagger, y]);

  return ref;
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const yOffset = (progress - 0.5) * speed * 100;
        gsap.set(element, { y: yOffset });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [speed]);

  return ref;
}

export function useCountUp(
  end: number,
  options?: {
    duration?: number;
    delay?: number;
    prefix?: string;
    suffix?: string;
  }
) {
  const ref = useRef<HTMLElement>(null);
  const { duration = 2, delay = 0, prefix = '', suffix = '' } = options || {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const counter = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom-=10%',
      onEnter: () => {
        gsap.to(counter, {
          value: end,
          duration,
          delay,
          ease: 'power2.out',
          onUpdate: () => {
            element.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
          },
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [end, duration, delay, prefix, suffix]);

  return ref;
}
