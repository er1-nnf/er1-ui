'use client';

import Image from 'next/image';
import { ScrollReveal, StaggerReveal } from '@/components/animations/ScrollReveal';

const steps = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: 'Dodajte tvrtku',
    description: 'Unesite OIB, naziv i adresu tvrtke. Podaci se spremaju lokalno na vaš uređaj.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Odaberite tvrtku',
    description: 'Prije plaćanja, odaberite tvrtku za koju želite R1 račun iz popisa.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
    title: 'Skenirajte i gotovo',
    description: 'Pokažite QR kod blagajniku. R1 račun se automatski izdaje bez diktiranja.',
  },
];

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Sigurna pohrana',
    description: 'Podaci ostaju samo na vašem uređaju',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Brzo skeniranje',
    description: 'QR i barkod za sve blagajne',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
      </svg>
    ),
    title: 'Offline pristup',
    description: 'Radi i bez internet veze',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ušteda vremena',
    description: 'R1 račun u nekoliko sekundi',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-brand-green/10 rounded-lg rotate-12" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-brand-green/10 rounded-lg -rotate-12" />
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-brand-green/20 rounded-lg rotate-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-green text-brand-green text-sm font-medium mb-6">
            Kako funkcionira
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy">
            ER1 proces rada
            <br />
            korak po korak
          </h2>
          <p className="mt-4 text-lg text-brand-slate max-w-2xl mx-auto">
            Preuzmite aplikaciju, dodajte podatke tvrtke i počnite koristiti odmah.
          </p>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Stacked Image with Phone Mockup */}
          <ScrollReveal className="relative">
            <div className="relative flex items-end justify-start pb-12">
              {/* Background person image container */}
              <div className="relative rounded-3xl overflow-hidden w-64 lg:w-72 aspect-[3/4] bg-gradient-to-br from-brand-green/80 via-brand-teal/70 to-brand-green/60 flex items-end justify-center">
                <Image
                  src="/mockups/dude.png"
                  alt="Osoba koristi ER1 aplikaciju"
                  width={240}
                  height={320}
                  className="w-[85%] h-auto object-contain"
                />
              </div>

              {/* Phone mockup - overlapping and moved down */}
              <div className="relative -ml-16 lg:-ml-20 z-10 translate-y-12">
                <Image
                  src="/mockups/002.png"
                  alt="ER1 aplikacija"
                  width={340}
                  height={700}
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-8 bg-brand-green/20 mx-auto mt-2" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-1">
                      {step.title}
                    </h3>
                    <p className="text-brand-slate">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Feature Cards Row */}
        <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20" stagger={0.1}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-brand-mist rounded-2xl p-6 hover:shadow-lg hover:border-brand-green/20 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-4">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-brand-navy mb-1">{feature.title}</h4>
              <p className="text-sm text-brand-slate">{feature.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
