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

          {/* Right - Card Stack */}
          <ScrollReveal delay={0.2}>
            <div className="relative bg-brand-ice rounded-3xl p-8 lg:p-12">
              {/* Stacked cards visual */}
              <div className="relative">
                {/* Background cards */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-48 bg-brand-navy-mid rounded-2xl -rotate-3" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[95%] h-48 bg-brand-navy rounded-2xl rotate-1" />

                {/* Main card */}
                <div className="relative bg-gradient-to-br from-brand-green to-brand-teal rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/70 text-sm">Podaci tvrtke</span>
                    <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </div>

                  <div className="text-3xl font-bold mb-1 font-mono">OIB spremljen</div>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <div className="text-white/70 text-xs">Naziv tvrtke</div>
                      <div className="font-medium">Vaša tvrtka d.o.o.</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/70 text-xs">Status</div>
                      <div className="font-medium">Aktivan</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction card */}
              <div className="mt-6 bg-white rounded-xl p-4 shadow-sm border border-brand-mist flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-brand-slate">Posljednji R1 račun</div>
                  <div className="font-semibold text-brand-navy">Uspješno izdano</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-brand-navy">Danas</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
