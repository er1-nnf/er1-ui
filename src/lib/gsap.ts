'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// Default animation settings
export const defaultEase = 'power3.out';
export const defaultDuration = 0.8;

// Common animation presets
export const fadeInUp = {
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0, duration: defaultDuration, ease: defaultEase },
};

export const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1, duration: defaultDuration, ease: defaultEase },
};

export const scaleIn = {
  from: { opacity: 0, scale: 0.9 },
  to: { opacity: 1, scale: 1, duration: defaultDuration, ease: defaultEase },
};

export const slideInLeft = {
  from: { opacity: 0, x: -60 },
  to: { opacity: 1, x: 0, duration: defaultDuration, ease: defaultEase },
};

export const slideInRight = {
  from: { opacity: 0, x: 60 },
  to: { opacity: 1, x: 0, duration: defaultDuration, ease: defaultEase },
};
