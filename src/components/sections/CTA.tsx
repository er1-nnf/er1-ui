'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import Grainient from '@/components/backgrounds/Grainient';

export function CTA() {
  return (
    <section id="preuzmi" className="pt-40 pb-12 lg:pt-56 lg:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative">
            {/* Card with background - has overflow hidden for bottom clipping */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <Grainient
                  color1="#13c48a"
                  color2="#2341d6"
                  color3="#0a9fbb"
                  timeSpeed={0.6}
                  colorBalance={0.25}
                  warpStrength={0.7}
                  warpFrequency={3}
                  warpSpeed={1.2}
                  warpAmplitude={70}
                  blendAngle={-10}
                  blendSoftness={0.12}
                  rotationAmount={350}
                  noiseScale={2}
                  grainAmount={0.08}
                  grainScale={2}
                  grainAnimated={false}
                  contrast={1.35}
                  gamma={1}
                  saturation={1.05}
                  centerX={0.2}
                  centerY={0}
                  zoom={0.85}
                />
              </div>

              {/* Content padding */}
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-end p-8 lg:p-12 min-h-[320px]">
                {/* Left - spacer for phone */}
                <div className="hidden lg:block order-1" />

                {/* Right - Content */}
                <div className="text-center lg:text-left order-2 py-4">
                  <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                    Započnite s bržim
                    <br />
                    R1 računima
                  </h2>

                  <p className="mt-6 text-lg text-white/70 max-w-md mx-auto lg:mx-0">
                    Pridružite se tisućama korisnika koji su pojednostavili izdavanje R1 računa s ER1 aplikacijom.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all group"
                    >
                      Preuzmi sada
                      <span className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>

                  {/* App store badges */}
                  <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                    <Link
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src="/icons/app-store.svg"
                        alt="App Store"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                    <Link
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src="/icons/play-store.svg"
                        alt="Play Store"
                        width={135}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Image - positioned absolutely to extend above card */}
            <div className="absolute left-8 lg:left-16 bottom-0 z-20 hidden lg:block">
              <Image
                src="/mockups/004.png"
                alt="ER1 aplikacija"
                width={480}
                height={960}
                className="drop-shadow-2xl"
              />
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
