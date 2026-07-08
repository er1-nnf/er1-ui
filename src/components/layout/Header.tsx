'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Početna' },
  { href: '/kako-funkcionira', label: 'Kako funkcionira' },
  { href: '/za-tvrtke', label: 'Rješenje za tvrtke' },
  { href: '/kontakt', label: 'Kontakt' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/90 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={isScrolled || isMobileMenuOpen ? '/logos/color-logo.svg' : '/logos/white-logo.svg'}
                alt="ER1"
                width={80}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? 'text-brand-navy hover:text-brand-green'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="#preuzmi"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  isScrolled
                    ? 'bg-brand-green text-white hover:bg-brand-green/90'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 -mr-2 ${isScrolled || isMobileMenuOpen ? 'text-brand-navy' : 'text-white'}`}
              aria-label={isMobileMenuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Fullscreen */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[100]"
          style={{ backgroundColor: '#0D1B3E' }}
        >
          {/* Background gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom right, #0D1B3E, #0D1B3E, #1A2D57)' }}
          />

          {/* Decorative elements */}
          <div
            className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(19, 196, 138, 0.15)' }}
          />
          <div
            className="absolute bottom-20 left-10 w-48 h-48 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgba(10, 159, 187, 0.15)' }}
          />

          {/* Header with logo and close */}
          <div className="relative z-10 flex items-center justify-between px-6 h-16">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/logos/white-logo.svg"
                alt="ER1"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-white"
              aria-label="Zatvori izbornik"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-8rem)] px-6">
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-semibold text-white hover:text-brand-green transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-12">
              <Link
                href="#preuzmi"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full font-semibold text-lg transition-colors"
                style={{ backgroundColor: '#13C48A' }}
              >
                Preuzmi aplikaciju
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
