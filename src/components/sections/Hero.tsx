'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from '@/lib/gsap';
import Grainient from '@/components/backgrounds/Grainient';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the floating cards
      gsap.from('.float-card', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.4,
      });

      // Phone mockup - animate from further down since it's partially off-screen
      gsap.from('.phone-mockup', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Connector lines - draw in effect
      gsap.from('.connector-lines path', {
        strokeDashoffset: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.8,
      });

      // Text content
      gsap.from('.hero-text > *', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#13c48a"
          color2="#2341d6"
          color3="#0a9fbb"
          timeSpeed={0.8}
          colorBalance={0.2}
          warpStrength={0.8}
          warpFrequency={3}
          warpSpeed={1.5}
          warpAmplitude={60}
          blendAngle={-20}
          blendSoftness={0.1}
          rotationAmount={400}
          noiseScale={2}
          grainAmount={0.08}
          grainScale={2}
          grainAnimated={false}
          contrast={1.4}
          gamma={1}
          saturation={1.1}
          centerX={0}
          centerY={0}
          zoom={0.85}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 w-full">
        {/* Top Badge & Text */}
        <div className="hero-text flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            Dostupno u cijeloj Hrvatskoj
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-4xl tracking-tight">
            Jednostavno rješenje za
            <br />
            <span className="text-white">brže R1 račune.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl">
            Skenirajte QR kod ili barkod na blagajni i dobijte R1 račun bez čekanja. Bez diktiranja OIB-a, bez pogrešaka.
          </p>

          {/* CTA Button */}
          <Link
            href="#preuzmi"
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all group"
          >
            Započnite besplatno
            <span className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Phone Mockup with Floating Cards */}
        <div className="relative flex-1 flex items-start justify-center">
          {/* Dashed connector lines - SVG */}
          <svg
            className="absolute inset-0 w-full h-full z-[15] pointer-events-none hidden lg:block connector-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Left connector line - curved path from card to phone */}
            <path
              d="M 24 22 Q 34 26, 43 32"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="0.3"
              strokeDasharray="1.5 1"
              strokeLinecap="round"
              className="connector-line-left"
            />
            {/* Right connector line - curved path from phone to card */}
            <path
              d="M 57 30 Q 66 24, 76 22"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="0.3"
              strokeDasharray="1.5 1"
              strokeLinecap="round"
              className="connector-line-right"
            />
          </svg>

          {/* Left Floating Card - positioned absolutely */}
          <div className="absolute left-4 lg:left-[2%] xl:left-[5%] top-[8%] z-20 hidden lg:block">
            {/* Balance Card */}
            <div className="float-card float-card-left glass-white rounded-3xl p-6 w-72 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-base text-brand-slate">Ukupno računa</span>
                <span className="text-base text-brand-green font-medium">+12%</span>
              </div>
              <div className="text-4xl font-bold text-brand-navy font-mono">1.478</div>
              <div className="text-base text-brand-slate mt-2">ovaj mjesec</div>
            </div>
          </div>

          {/* Phone Mockup - larger, cut off at bottom */}
          <div className="phone-mockup relative z-10 -translate-y-[15%]">
            <Image
              src="/mockups/001.png"
              alt="ER1 aplikacija"
              width={420}
              height={840}
              className="drop-shadow-2xl"
              priority
            />
          </div>

          {/* Right Floating Card - positioned absolutely */}
          <div className="absolute right-4 lg:right-[2%] xl:right-[5%] top-[8%] z-20 hidden lg:block">
            {/* Multiple Companies Card */}
            <div className="float-card float-card-right glass-white rounded-3xl p-6 w-72 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-base text-brand-slate">Višestruke tvrtke</span>
              </div>
              <div className="text-3xl font-bold text-brand-navy">Neograničeno</div>
              <div className="text-base text-brand-slate mt-2">tvrtki po korisniku</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
