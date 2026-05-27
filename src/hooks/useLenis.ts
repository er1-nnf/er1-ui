'use client';

import { useEffect, useCallback } from 'react';
import { initLenis, getLenis, destroyLenis, scrollTo } from '@/lib/lenis';
import type Lenis from 'lenis';

export function useLenis(callback?: (lenis: Lenis) => void) {
  useEffect(() => {
    const lenis = initLenis();

    if (callback && lenis) {
      lenis.on('scroll', callback);
    }

    return () => {
      if (callback && lenis) {
        lenis.off('scroll', callback);
      }
    };
  }, [callback]);

  return { getLenis, scrollTo };
}

export function useLenisInit() {
  useEffect(() => {
    const lenis = initLenis();

    // Add lenis class to html element
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    return () => {
      destroyLenis();
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);
}

export function useScrollToHash() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          scrollTo(element as HTMLElement, { offset: -80 });
        }
      }
    };

    // Handle initial hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
}
