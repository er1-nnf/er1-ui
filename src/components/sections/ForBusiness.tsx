'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function ForBusiness() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <ScrollReveal>
            {/* Decorative element */}
            <div className="w-12 h-12 bg-brand-green/10 rounded-lg rotate-12 mb-6" />

            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-green text-brand-green text-sm font-medium mb-6">
              Za tvrtke
            </span>

            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy leading-tight">
              Jednostavno upravljanje
              <br />
              R1 računima
            </h2>

            <p className="mt-6 text-lg text-brand-slate">
              Omogućite zaposlenicima da brzo i točno izdaju R1 račune bez potrebe za pamćenjem OIB-a i drugih podataka tvrtke.
            </p>

            <Link
              href="/za-tvrtke"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-green/10 to-brand-teal/10 rounded-full text-brand-navy font-medium hover:from-brand-green/20 hover:to-brand-teal/20 transition-all group"
            >
              Saznajte više
              <span className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </ScrollReveal>

          {/* Right - Demo Video Placeholder */}
          <ScrollReveal delay={0.2}>
            <div className="relative bg-brand-ice rounded-3xl p-4 lg:p-6">
              <div className="relative aspect-video bg-gradient-to-br from-brand-navy to-brand-navy-mid rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer group">
                {/* Play button */}
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent pointer-events-none" />

                {/* Video label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white/80 text-sm font-medium">Pogledajte demo</span>
                  <span className="text-white/60 text-xs">2:30</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
