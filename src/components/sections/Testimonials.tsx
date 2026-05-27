'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import Grainient from '@/components/backgrounds/Grainient';

const testimonial = {
  quote:
    'ER1 je potpuno promijenio način na koji izdajemo R1 račune. Više nema diktiranja OIB-a, više nema pogrešaka. Jednostavno skeniram kod i račun je izdan.',
  author: 'Marina Kovačević',
  role: 'Vlasnica obrta',
};

const avatars = [
  { name: 'Ivan', image: 'https://i.pravatar.cc/100?img=12' },
  { name: 'Ana', image: 'https://i.pravatar.cc/100?img=5' },
  { name: 'Marko', image: 'https://i.pravatar.cc/100?img=8' },
  { name: 'Petra', image: 'https://i.pravatar.cc/100?img=9' },
  { name: 'Luka', image: 'https://i.pravatar.cc/100?img=11' },
];

export function Testimonials() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#13c48a"
          color2="#2341d6"
          color3="#0a9fbb"
          timeSpeed={0.5}
          colorBalance={0.3}
          warpStrength={0.6}
          warpFrequency={2.5}
          warpSpeed={1}
          warpAmplitude={80}
          blendAngle={30}
          blendSoftness={0.15}
          rotationAmount={300}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.3}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <ScrollReveal>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              Svjedočanstva
            </span>

            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Što kažu naši
              <br />
              korisnici
            </h2>

            <p className="mt-4 text-lg text-white/60">
              Naši korisnici dijele svoja iskustva, iskrene povratne informacije i mišljenja koja odražavaju povjerenje i zadovoljstvo.
            </p>

            {/* Navigation arrows */}
            <div className="flex gap-3 mt-8">
              <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white hover:bg-brand-green/90 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </ScrollReveal>

          {/* Right - Testimonial Card */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Quote card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <p className="text-xl text-brand-navy leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-brand-mist">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-green to-brand-teal flex items-center justify-center text-white text-xl font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-brand-slate">{testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* Avatar row */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar.image}
                      alt={avatar.name}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-lg"
                    />
                  ))}
                </div>
                <div className="text-white/60 text-sm">
                  <span className="text-white font-semibold">5000+</span> zadovoljnih korisnika
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
