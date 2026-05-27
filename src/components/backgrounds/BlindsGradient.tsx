'use client';

import { useEffect, useRef } from 'react';

interface BlindsGradientProps {
  className?: string;
}

export function BlindsGradient({ className = '' }: BlindsGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const blinds = container.querySelectorAll('.blind');

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      blinds.forEach((blind, index) => {
        const element = blind as HTMLElement;
        const offset = (index / blinds.length - x) * 20;
        const opacity = 0.3 + Math.abs(index / blinds.length - x) * 0.4;
        element.style.transform = `translateX(${offset}px)`;
        element.style.opacity = String(opacity);
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const blindCount = 24;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-brand-teal/5 to-brand-blue/5" />

      {/* Blinds */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: blindCount }).map((_, i) => (
          <div
            key={i}
            className="blind flex-1 h-full transition-all duration-300 ease-out"
            style={{
              background: `linear-gradient(180deg,
                ${i % 3 === 0 ? 'rgba(19, 196, 138, 0.15)' : i % 3 === 1 ? 'rgba(10, 159, 187, 0.15)' : 'rgba(35, 65, 214, 0.15)'} 0%,
                transparent 100%)`,
              opacity: 0.5 + (i / blindCount) * 0.3,
            }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-teal/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
