'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_CONSENT_KEY = 'er1-cookie-consent';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setIsVisible(false);

    // Here you would initialize analytics/marketing based on consent
    if (prefs.analytics) {
      // Initialize Google Analytics or similar
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing pixels
      console.log('Marketing enabled');
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptSelected = () => {
    savePreferences(preferences);
  };

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-brand-mist overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-brand-mist rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-brand-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-brand-navy">
                Koristimo kolacice
              </h2>
              <p className="mt-1 text-sm text-brand-slate">
                Koristimo kolacice kako bismo poboljsali vase iskustvo na nasoj
                stranici. Mozete prilagoditi svoje postavke ili prihvatiti sve
                kolacice.{' '}
                <Link
                  href="/kolacici"
                  className="text-brand-green hover:underline"
                >
                  Saznajte vise
                </Link>
              </p>
            </div>
          </div>

          {showDetails && (
            <div className="mt-6 space-y-4 border-t border-brand-mist pt-6">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-brand-navy">
                    Neophodni kolacici
                  </h3>
                  <p className="text-sm text-brand-slate">
                    Potrebni za osnovnu funkcionalnost stranice
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="sr-only"
                  />
                  <div className="w-11 h-6 bg-brand-green rounded-full">
                    <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-brand-navy">
                    Analiticki kolacici
                  </h3>
                  <p className="text-sm text-brand-slate">
                    Pomazu nam razumjeti kako koristite stranicu
                  </p>
                </div>
                <button
                  onClick={() =>
                    setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                  }
                  className="relative"
                >
                  <div
                    className={`w-11 h-6 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-brand-green' : 'bg-brand-slate/30'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        preferences.analytics ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </div>
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-brand-navy">
                    Marketinski kolacici
                  </h3>
                  <p className="text-sm text-brand-slate">
                    Koristimo ih za prikazivanje relevantnih oglasa
                  </p>
                </div>
                <button
                  onClick={() =>
                    setPreferences((p) => ({ ...p, marketing: !p.marketing }))
                  }
                  className="relative"
                >
                  <div
                    className={`w-11 h-6 rounded-full transition-colors ${
                      preferences.marketing ? 'bg-brand-green' : 'bg-brand-slate/30'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        preferences.marketing ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {!showDetails ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(true)}
                  className="sm:mr-auto"
                >
                  Prilagodi postavke
                </Button>
                <Button variant="secondary" size="sm" onClick={rejectAll}>
                  Samo neophodni
                </Button>
                <Button variant="primary" size="sm" onClick={acceptAll}>
                  Prihvati sve
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                  className="sm:mr-auto"
                >
                  Nazad
                </Button>
                <Button variant="secondary" size="sm" onClick={rejectAll}>
                  Odbij sve
                </Button>
                <Button variant="primary" size="sm" onClick={acceptSelected}>
                  Spremi odabir
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
