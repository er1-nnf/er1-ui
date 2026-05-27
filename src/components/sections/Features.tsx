'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const featuresLeft = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Višestruke tvrtke',
    description: 'Upravljajte neograničenim brojem tvrtki iz jedne aplikacije.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
    title: 'QR i barkod',
    description: 'Generirani kodovi za brzo skeniranje na blagajni.',
  },
];

const featuresRight = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Pregled računa',
    description: 'Vizualni pregled svih izdanih R1 računa.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
      </svg>
    ),
    title: 'Offline pristup',
    description: 'Aplikacija radi i bez internet veze.',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-brand-ice overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-green text-brand-green text-sm font-medium mb-6">
            Glavne značajke
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Aplikacija za R1 račune
          </h2>
          <p className="mt-4 text-lg text-brand-slate max-w-2xl mx-auto">
            Sve što trebate za jednostavno izdavanje R1 računa na jednom mjestu.
          </p>
        </ScrollReveal>

        {/* Features Layout with Phone in Center */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting dashed lines - behind everything */}
          <svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Top left card to phone */}
            <path
              d="M 24 25 Q 38 30, 48 45"
              fill="none"
              stroke="#0f172a"
              strokeWidth="0.3"
              strokeDasharray="1.5 1"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Bottom left card to phone */}
            <path
              d="M 24 75 Q 38 70, 48 55"
              fill="none"
              stroke="#0f172a"
              strokeWidth="0.3"
              strokeDasharray="1.5 1"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Top right card to phone */}
            <path
              d="M 76 25 Q 62 30, 52 45"
              fill="none"
              stroke="#0f172a"
              strokeWidth="0.3"
              strokeDasharray="1.5 1"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Bottom right card to phone */}
            <path
              d="M 76 75 Q 62 70, 52 55"
              fill="none"
              stroke="#0f172a"
              strokeWidth="0.3"
              strokeDasharray="1.5 1"
              strokeLinecap="round"
              opacity="0.3"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Features */}
            <div className="space-y-4">
              {featuresLeft.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-mist hover:shadow-lg transition-shadow w-56 h-56 flex flex-col justify-center items-center text-center ml-auto">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-3">{feature.icon}</div>
                    <h3 className="font-semibold text-brand-navy text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-brand-slate text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Phone Mockup in Center */}
            <ScrollReveal className="flex justify-center">
              <Image
                src="/mockups/001.png"
                alt="ER1 aplikacija"
                width={260}
                height={520}
                className="drop-shadow-2xl"
              />
            </ScrollReveal>

            {/* Right Features */}
            <div className="space-y-4">
              {featuresRight.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.1 + 0.2}>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-mist hover:shadow-lg transition-shadow w-56 h-56 flex flex-col justify-center items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-3">{feature.icon}</div>
                    <h3 className="font-semibold text-brand-navy text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-brand-slate text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
