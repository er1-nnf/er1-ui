import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import Grainient from '@/components/backgrounds/Grainient';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktirajte nas za pitanja o ER1 aplikaciji. Email: info@er1.hr',
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    value: 'info@er1.hr',
    href: 'mailto:info@er1.hr',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Tvrtka',
    value: 'ER1 Brza Aplikacija d.o.o.',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
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
            blendAngle={10}
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
              Kontakt
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Kontaktirajte nas
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Imate pitanje ili prijedlog? Rado ćemo vam odgovoriti.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
                  Javite nam se
                </h2>
                <p className="text-lg text-brand-slate mb-8">
                  Bilo da imate pitanje o aplikaciji, prijedlog za poboljšanje ili
                  trebate pomoć s korištenjem - tu smo za vas.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start gap-4 p-5 bg-brand-ice rounded-2xl"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-brand-slate">
                          {info.title}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-lg font-semibold text-brand-navy hover:text-brand-green transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-lg font-semibold text-brand-navy">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ Link */}
                <div className="mt-8 p-6 bg-brand-ice rounded-2xl border border-brand-mist">
                  <h3 className="font-semibold text-brand-navy mb-2">
                    Možda već imamo odgovor
                  </h3>
                  <p className="text-brand-slate mb-4">
                    Pogledajte naša česta pitanja prije nego što nam se javite.
                  </p>
                  <Link
                    href="/#faq"
                    className="inline-flex items-center gap-2 text-brand-green font-medium hover:underline"
                  >
                    Pogledaj FAQ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={0.2}>
              <form className="bg-brand-ice rounded-3xl p-8 border border-brand-mist">
                <h3 className="text-xl font-semibold text-brand-navy mb-6">
                  Pošaljite nam poruku
                </h3>

                <div className="space-y-6">
                  <Input
                    label="Ime i prezime"
                    name="name"
                    placeholder="Vaše ime"
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="vas@email.com"
                    required
                  />
                  <Input
                    label="Tvrtka (opcionalno)"
                    name="company"
                    placeholder="Naziv tvrtke"
                  />
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-1.5">
                      Tema
                    </label>
                    <select
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-brand-mist bg-white text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                      required
                    >
                      <option value="">Odaberite temu</option>
                      <option value="general">Opće pitanje</option>
                      <option value="support">Podrška / Pomoć</option>
                      <option value="business">Poslovni upit</option>
                      <option value="feedback">Povratna informacija</option>
                      <option value="other">Ostalo</option>
                    </select>
                  </div>
                  <Textarea
                    label="Poruka"
                    name="message"
                    placeholder="Kako vam možemo pomoći?"
                    rows={5}
                    required
                  />

                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                    Pošaljite poruku
                  </Button>

                  <p className="text-sm text-brand-slate text-center">
                    Odgovaramo u roku od 24 sata.
                  </p>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
