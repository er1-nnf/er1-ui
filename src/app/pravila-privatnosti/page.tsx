import { Metadata } from 'next';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Pravila privatnosti',
  description: 'Pravila privatnosti za ER1 aplikaciju.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-ice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy text-center">
              Pravila privatnosti
            </h1>
            <p className="mt-4 text-brand-slate text-center">
              Posljednje azuriranje: Sijecanj 2025.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-brand-slate prose-headings:text-brand-navy prose-a:text-brand-green">
              <h2>1. Uvod</h2>
              <p>
                ER1 Brza Aplikacija d.o.o. (u daljnjem tekstu: &quot;mi&quot;, &quot;nas&quot; ili
                &quot;ER1&quot;) cijeni vasu privatnost i obvezuje se stititi vase osobne
                podatke. Ova Pravila privatnosti objasanjavaju kako prikupljamo,
                koristimo i stitimo vase podatke kada koristite nasu mobilnu
                aplikaciju ER1.
              </p>

              <h2>2. Podaci koje prikupljamo</h2>
              <h3>2.1 Podaci koje vi unosite</h3>
              <p>
                Kada koristite ER1 aplikaciju, mozete unijeti sljedece podatke o
                vasim tvrtkama:
              </p>
              <ul>
                <li>OIB (Osobni identifikacijski broj) tvrtke</li>
                <li>Naziv tvrtke</li>
                <li>Adresa tvrtke</li>
              </ul>
              <p>
                <strong>Vazno:</strong> Svi ovi podaci pohranjuju se iskljucivo
                lokalno na vasem uredaju. Ne salju se na nikakve vanjske servere
                i mi nemamo pristup tim podacima.
              </p>

              <h3>2.2 Automatski prikupljeni podaci</h3>
              <p>
                Aplikacija ne prikuplja automatski nikakve osobne podatke. Ne
                koristimo alate za pracenje, analitiku ili slicne tehnologije koje
                bi prikupljale podatke o vasem koristenju aplikacije.
              </p>

              <h2>3. Kako koristimo vase podatke</h2>
              <p>
                Podaci koje unosite u aplikaciju koriste se iskljucivo za:
              </p>
              <ul>
                <li>Generiranje QR kodova i barkodova za vase tvrtke</li>
                <li>Prikazivanje podataka tvrtke unutar aplikacije</li>
              </ul>
              <p>
                Podaci se ne koriste u nikakve druge svrhe i ne dijele se s
                trecim stranama.
              </p>

              <h2>4. Pohrana podataka</h2>
              <p>
                Svi podaci pohranjuju se lokalno na vasem uredaju koristeci
                sigurne mehanizme pohrane operativnog sustava. Podaci nisu
                enkriptirani dodatno jer se ne prenose izvan vaseg uredaja.
              </p>
              <p>
                Ako obrisete aplikaciju, svi podaci ce biti trajno izbrisani s
                vaseg uredaja.
              </p>

              <h2>5. Dijeljenje podataka</h2>
              <p>
                Ne dijelimo vase podatke s trecim stranama. Buduci da podaci
                nikada ne napustaju vas uredaj, nemamo mogucnost dijeljenja.
              </p>

              <h2>6. Vasa prava</h2>
              <p>
                Sukladno Opcoj uredbi o zastiti podataka (GDPR), imate sljedeca
                prava:
              </p>
              <ul>
                <li>
                  <strong>Pravo pristupa:</strong> Mozete pregledati sve podatke
                  u aplikaciji u bilo kojem trenutku.
                </li>
                <li>
                  <strong>Pravo na ispravak:</strong> Mozete urediti podatke
                  tvrtke unutar aplikacije.
                </li>
                <li>
                  <strong>Pravo na brisanje:</strong> Mozete izbrisati pojedine
                  tvrtke ili deinstalirati aplikaciju za brisanje svih podataka.
                </li>
                <li>
                  <strong>Pravo na prenosivost:</strong> Mozete podijeliti QR kod
                  ili barkod s drugim korisnicima.
                </li>
              </ul>

              <h2>7. Sigurnost</h2>
              <p>
                Buduci da se podaci pohranjuju lokalno na vasem uredaju, sigurnost
                podataka ovisi o sigurnosnim mjerama vaseg uredaja (PIN, lozinka,
                biometrija). Preporucujemo koristenje sigurnosnih mjera na vasem
                uredaju.
              </p>

              <h2>8. Djeca</h2>
              <p>
                Nasa aplikacija nije namijenjena djeci mladoj od 16 godina i
                svjesno ne prikupljamo podatke od djece.
              </p>

              <h2>9. Promjene Pravila privatnosti</h2>
              <p>
                Mozemo povremeno azurirati ova Pravila privatnosti. O svim
                znacajnim promjenama obavijestit cemo vas putem aplikacije ili
                nase web stranice.
              </p>

              <h2>10. Kontakt</h2>
              <p>
                Za sva pitanja vezana uz privatnost, mozete nas kontaktirati na:
              </p>
              <ul>
                <li>Email: info@er1.hr</li>
                <li>Tvrtka: ER1 Brza Aplikacija d.o.o.</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
