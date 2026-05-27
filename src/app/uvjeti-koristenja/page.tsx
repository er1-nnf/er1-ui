import { Metadata } from 'next';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Uvjeti koristenja',
  description: 'Uvjeti koristenja za ER1 aplikaciju.',
};

export default function TermsOfUsePage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-ice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy text-center">
              Uvjeti koristenja
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
              <h2>1. Prihvacanje uvjeta</h2>
              <p>
                Preuzimanjem, instaliranjem ili koristenjem mobilne aplikacije ER1
                (u daljnjem tekstu: &quot;Aplikacija&quot;), prihvacate ove Uvjete koristenja.
                Ako se ne slazete s ovim uvjetima, molimo vas da ne koristite
                Aplikaciju.
              </p>

              <h2>2. Opis usluge</h2>
              <p>
                ER1 je besplatna mobilna aplikacija koja omogucuje korisnicima:
              </p>
              <ul>
                <li>Pohranu podataka o tvrtkama (OIB, naziv, adresa)</li>
                <li>Generiranje QR kodova i barkodova za te tvrtke</li>
                <li>Koristenje kodova za izdavanje R1 racuna na blagajnama</li>
              </ul>

              <h2>3. Korisnicka prava i obveze</h2>
              <h3>3.1 Tocnost podataka</h3>
              <p>
                Korisnik je odgovoran za tocnost podataka koje unosi u Aplikaciju.
                ER1 ne provjerava valjanost unesenih podataka (OIB, naziv tvrtke,
                adresa).
              </p>

              <h3>3.2 Zakonito koristenje</h3>
              <p>
                Korisnik se obvezuje koristiti Aplikaciju iskljucivo za zakonite
                svrhe i u skladu s vazecim zakonima Republike Hrvatske. Zabranjeno
                je koristenje Aplikacije za:
              </p>
              <ul>
                <li>Unos laznih ili tuđih podataka bez ovlastenja</li>
                <li>Pokusaj prijevare ili zlouporabe</li>
                <li>Bilo kakve nezakonite aktivnosti</li>
              </ul>

              <h3>3.3 Sigurnost uredaja</h3>
              <p>
                Korisnik je odgovoran za sigurnost svog uredaja na kojem je
                instalirana Aplikacija.
              </p>

              <h2>4. Intelektualno vlasnistvo</h2>
              <p>
                Sva prava intelektualnog vlasnistva vezana uz Aplikaciju,
                ukljucujuci ali ne ogranicavajuci se na softver, dizajn, logotipe
                i sadrzaj, pripadaju tvrtki ER1 Brza Aplikacija d.o.o.
              </p>
              <p>
                Korisnicima se daje ogranicena, neiskljuciva, neprenosiva licenca
                za koristenje Aplikacije u osobne ili poslovne svrhe.
              </p>

              <h2>5. Ogranicenje odgovornosti</h2>
              <p>
                Aplikacija se pruza &quot;kakva jest&quot; bez ikakvih garancija, izricitih
                ili impliciranih. ER1 Brza Aplikacija d.o.o. ne garantira:
              </p>
              <ul>
                <li>Da ce Aplikacija raditi bez prekida ili gresaka</li>
                <li>Da ce QR kodovi i barkodovi biti prihvaceni na svim blagajnama</li>
                <li>Tocnost ili potpunost bilo kojih informacija u Aplikaciji</li>
              </ul>
              <p>
                ER1 Brza Aplikacija d.o.o. nece biti odgovorna za bilo kakvu
                izravnu, neizravnu, slucajnu, posebnu ili posljednicnu stetu koja
                proizlazi iz koristenja ili nemogucnosti koristenja Aplikacije.
              </p>

              <h2>6. Promjene Aplikacije</h2>
              <p>
                Zadrzavamo pravo izmjene, azuriranja ili ukidanja bilo kojeg
                dijela Aplikacije u bilo kojem trenutku bez prethodne obavijesti.
              </p>

              <h2>7. Promjene Uvjeta koristenja</h2>
              <p>
                Mozemo povremeno azurirati ove Uvjete koristenja. Nastavak
                koristenja Aplikacije nakon objave izmjena smatra se prihvacanjem
                novih uvjeta.
              </p>

              <h2>8. Raskid</h2>
              <p>
                Mozete prestati koristiti Aplikaciju u bilo kojem trenutku
                jednostavnim brisanjem aplikacije s vaseg uredaja. Zadrzavamo
                pravo uskratiti pristup Aplikaciji korisnicima koji krse ove
                Uvjete koristenja.
              </p>

              <h2>9. Mjerodavno pravo</h2>
              <p>
                Ovi Uvjeti koristenja tumace se u skladu sa zakonima Republike
                Hrvatske. Za sve sporove nadlezan je sud u Zagrebu.
              </p>

              <h2>10. Kontakt</h2>
              <p>
                Za sva pitanja vezana uz ove Uvjete koristenja, mozete nas
                kontaktirati na:
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
