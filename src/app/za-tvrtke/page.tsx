import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { ScrollReveal, StaggerReveal } from '@/components/animations/ScrollReveal';
import { FeatureCard } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';
import Grainient from '@/components/backgrounds/Grainient';

export const metadata: Metadata = {
  title: 'Za tvrtke',
  description:
    'ER1 za tvrtke - omogucite zaposlenicima jednostavno izdavanje R1 racuna. Centralizirana distribucija podataka, smanjenje pogresaka.',
};

const problems = [
  {
    title: 'Zaposlenici pamte OIB?',
    description: 'Koliko puta su vaši zaposlenici zaboravili OIB tvrtke na blagajni?',
  },
  {
    title: 'Pogrešni podaci na računima?',
    description: 'Krive adrese, krivo napisani nazivi tvrtke - sve to stvara probleme u knjiženju.',
  },
  {
    title: 'Neprofesionalan dojam?',
    description: 'Diktiranje podataka na blagajni oduzima vrijeme i ostavlja loš dojam.',
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Jedan kod za sve',
    description:
      'Kreirajte podatke tvrtke jednom i podijelite QR kod sa svim zaposlenicima.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '100% točnost',
    description:
      'Nema ljudske greške - podaci su uvijek ispravni jer se skeniraju, ne diktiraju.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ušteda vremena',
    description:
      'Bez diktiranja, bez čekanja - R1 račun u nekoliko sekundi.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Sigurnost podataka',
    description:
      'Podaci ostaju na uređajima zaposlenika - ne koriste se vanjski serveri.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Neograničeno korisnika',
    description:
      'Podijelite kod s proizvoljnim brojem zaposlenika bez dodatnih troškova.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Jednostavna integracija',
    description:
      'Nema potrebe za IT podrškom - zaposlenici mogu početi koristiti odmah.',
  },
];

const deploySteps = [
  {
    step: 1,
    title: 'Kreirajte podatke tvrtke',
    description: 'Unesite OIB, naziv i adresu u ER1 aplikaciju.',
  },
  {
    step: 2,
    title: 'Podijelite QR kod',
    description: 'Pošaljite sliku QR koda zaposlenicima putem emaila ili messaging aplikacije.',
  },
  {
    step: 3,
    title: 'Zaposlenici skeniraju kod',
    description: 'Zaposlenici dodaju tvrtku u svoju ER1 aplikaciju skeniranjem koda.',
  },
  {
    step: 4,
    title: 'Spremni za korištenje',
    description: 'Zaposlenici mogu odmah početi koristiti aplikaciju za R1 račune.',
  },
];

export default function ForBusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
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
            blendAngle={-20}
            blendSoftness={0.12}
            rotationAmount={350}
            noiseScale={2}
            grainAmount={0.08}
            grainScale={2}
            grainAnimated={false}
            contrast={1.35}
            gamma={1}
            saturation={1.05}
            centerX={0}
            centerY={0}
            zoom={0.85}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                Rješenje za tvrtke
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Vaši zaposlenici, uvijek spremni za R1
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-white/70">
                Omogućite svojim zaposlenicima da brzo i točno izdaju R1 račune bez
                potrebe za pamćenjem OIB-a i drugih podataka tvrtke.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="#kontakt-forma" variant="primary" size="lg">
                  Kontaktirajte nas
                </Button>
                <Button href="#kako-implementirati" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Kako funkcionira
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative flex justify-center">
                <Image
                  src="/mockups/001.png"
                  alt="ER1 za tvrtke"
                  width={320}
                  height={640}
                  className="drop-shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-red-300 text-red-500 text-sm font-medium mb-6">
              Problemi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy">
              Prepoznajete li ove probleme?
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid md:grid-cols-3 gap-8" stagger={0.1}>
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">
                  {problem.title}
                </h3>
                <p className="text-brand-slate">{problem.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Solution / Benefits */}
      <section className="py-20 lg:py-32 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-green text-brand-green text-sm font-medium mb-6">
              Rješenje
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy">
              ER1 rješava sve te probleme
            </h2>
            <p className="mt-4 text-lg text-brand-slate max-w-2xl mx-auto">
              Jednostavno rješenje koje vaši zaposlenici mogu početi koristiti danas.
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {benefits.map((benefit) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* How to Deploy */}
      <section id="kako-implementirati" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-green text-brand-green text-sm font-medium mb-6">
              Implementacija
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy">
              Samo 4 koraka
            </h2>
            <p className="mt-4 text-lg text-brand-slate">
              Bez IT podrške, bez kompliciranja. Počnite koristiti danas.
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-green via-brand-teal to-brand-blue hidden md:block" />

            <StaggerReveal className="space-y-8" stagger={0.15}>
              {deploySteps.map((step) => (
                <div key={step.step} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-brand-green to-brand-blue flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-brand-ice rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-brand-slate">{step.description}</p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt-forma" className="py-20 lg:py-32 bg-brand-ice">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-green text-brand-green text-sm font-medium mb-6">
              Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy">
              Imate pitanja?
            </h2>
            <p className="mt-4 text-lg text-brand-slate">
              Kontaktirajte nas za više informacija o implementaciji u vašoj tvrtki.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form className="bg-white rounded-3xl p-8 shadow-sm border border-brand-mist">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Ime i prezime"
                    name="name"
                    placeholder="Ivan Horvat"
                    required
                  />
                  <Input
                    label="Naziv tvrtke"
                    name="company"
                    placeholder="Moja tvrtka d.o.o."
                    required
                  />
                </div>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="ivan@tvrtka.hr"
                  required
                />
                <Input
                  label="Broj zaposlenika"
                  name="employees"
                  placeholder="npr. 10-50"
                />
                <Textarea
                  label="Poruka"
                  name="message"
                  placeholder="Kako vam možemo pomoći?"
                  rows={4}
                />
                <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                  Pošaljite upit
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
