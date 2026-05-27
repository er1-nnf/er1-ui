import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerReveal } from '@/components/animations/ScrollReveal';
import { Accordion } from '@/components/ui/Accordion';
import { CTA } from '@/components/sections/CTA';
import Grainient from '@/components/backgrounds/Grainient';

export const metadata: Metadata = {
  title: 'Kako funkcionira',
  description:
    'Saznajte kako ER1 aplikacija funkcionira. Tri jednostavna koraka do R1 racuna bez cekanja.',
};

const detailedSteps = [
  {
    number: 1,
    title: 'Preuzmite aplikaciju',
    description:
      'ER1 je dostupan besplatno na App Store i Google Play. Instalacija traje samo nekoliko sekundi.',
    details: [
      'Nema registracije - krenite koristiti odmah',
      'Minimalna veličina aplikacije',
      'Kompatibilno sa svim modernim uređajima',
    ],
    image: '/mockups/001.png',
  },
  {
    number: 2,
    title: 'Unesite podatke tvrtke',
    description:
      'Dodajte OIB, naziv i adresu tvrtke. Možete dodati neograničen broj tvrtki.',
    details: [
      'Jednostavan obrazac za unos',
      'Automatska validacija OIB-a',
      'Podaci se čuvaju lokalno na uređaju',
    ],
    image: '/mockups/002.png',
  },
  {
    number: 3,
    title: 'Odaberite tvrtku prije plaćanja',
    description:
      'Na popisu vaših tvrtki odaberite onu za koju želite R1 račun.',
    details: [
      'Brzo prebacivanje između tvrtki',
      'Označite često korištene tvrtke',
      'Pregled svih podataka prije skeniranja',
    ],
    image: '/mockups/003.png',
  },
  {
    number: 4,
    title: 'Pokažite kod blagajniku',
    description:
      'Aplikacija generira QR kod i barkod. Blagajnik skenira kod i R1 račun je izdan!',
    details: [
      'Automatski generirani QR i barkod',
      'Prilagodba svjetline za lakše skeniranje',
      'Radi i bez internet veze',
    ],
    image: '/mockups/004.png',
  },
];

const usageFaq = [
  {
    id: 'first-time',
    title: 'Kako početi koristiti aplikaciju?',
    content:
      'Nakon instalacije, jednostavno dodajte podatke vaše tvrtke (OIB, naziv, adresa) i aplikacija će automatski generirati QR kod i barkod. Nema potrebe za registracijom ili aktivacijom.',
  },
  {
    id: 'change-company',
    title: 'Kako promijeniti tvrtku?',
    content:
      'Na glavnom zaslonu dodirnite ime trenutne tvrtke na vrhu ekrana. Otvorit će se popis svih vaših tvrtki gdje možete odabrati drugu.',
  },
  {
    id: 'edit-company',
    title: 'Mogu li urediti podatke tvrtke?',
    content:
      'Da, dodirnite ikonu postavki pored tvrtke na popisu. Možete urediti sve podatke ili izbrisati tvrtku ako je više ne trebate.',
  },
  {
    id: 'share-code',
    title: 'Kako podijeliti kod sa zaposlenicima?',
    content:
      'Dodirnite ikonu dijeljenja ispod QR koda. Možete poslati sliku koda putem WhatsApp-a, emaila ili bilo koje druge aplikacije.',
  },
];

export default function HowItWorksPage() {
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
            blendAngle={20}
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
          <ScrollReveal className="text-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              Vodič za korištenje
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Kako funkcionira
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Od preuzimanja do R1 računa u četiri jednostavna koraka. Bez
              kompliciranja, bez čekanja.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-green text-brand-green text-sm font-medium mb-6">
              Korak po korak
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy">
              Četiri jednostavna koraka
            </h2>
          </ScrollReveal>

          <div className="space-y-24 lg:space-y-32">
            {detailedSteps.map((step, index) => (
              <ScrollReveal key={step.number}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-xl font-bold">
                        {step.number}
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
                      {step.title}
                    </h2>

                    <p className="text-lg text-brand-slate mb-6">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-brand-green"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-brand-slate">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mockup */}
                  <div
                    className={`relative ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="relative bg-brand-ice rounded-3xl p-8 lg:p-12">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={280}
                        height={560}
                        className="mx-auto drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
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
            blendAngle={-30}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Pogledajte u akciji
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Kratki video koji pokazuje kako koristiti ER1 aplikaciju.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative aspect-video bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand-green flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/60">Video uskoro dolazi</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Usage FAQ */}
      <section className="py-20 lg:py-32 bg-brand-ice">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-green text-brand-green text-sm font-medium mb-6">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
              Česta pitanja o korištenju
            </h2>
            <p className="mt-4 text-lg text-brand-slate">
              Sve što trebate znati o korištenju ER1 aplikacije.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Accordion items={usageFaq} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
