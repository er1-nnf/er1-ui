'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const faqItems = [
  {
    question: 'Što je R1 račun?',
    answer:
      'R1 račun je fiskalizirani račun koji sadrži podatke o kupcu (OIB, naziv i adresa tvrtke). Potreban je za knjiženje troškova u poslovanju i priznavanje PDV-a.',
  },
  {
    question: 'Kako mogu dodati novu tvrtku?',
    answer:
      'Otvorite aplikaciju, dodirnite "Dodaj tvrtku" i unesite OIB, naziv i adresu. Aplikacija će automatski generirati QR kod i barkod za tu tvrtku.',
  },
  {
    question: 'Radi li aplikacija bez interneta?',
    answer:
      'Da, svi podaci se pohranjuju lokalno na vašem uređaju. Aplikacija radi i bez internet veze - QR kodovi i barkodovi su uvijek dostupni.',
  },
  {
    question: 'Je li aplikacija besplatna?',
    answer:
      'Da, ER1 je potpuno besplatna aplikacija. Nema skrivenih troškova, pretplata ili ograničenja u broju tvrtki koje možete dodati.',
  },
  {
    question: 'Koje trgovine podržavaju skeniranje?',
    answer:
      'Većina modernih POS sustava podržava skeniranje QR kodova i barkodova za R1 račune. To uključuje većinu supermarketa, benzinskih postaja i trgovina u Hrvatskoj.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-green text-brand-green text-sm font-medium mb-6">
            FAQ
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy">
            Često postavljana pitanja
          </h2>
        </ScrollReveal>

        {/* FAQ List */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-brand-mist last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-medium text-brand-navy group-hover:text-brand-green transition-colors pr-8">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index
                        ? 'bg-brand-green text-white rotate-45'
                        : 'bg-transparent border border-brand-slate/30 text-brand-slate'
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-brand-slate pr-16">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
