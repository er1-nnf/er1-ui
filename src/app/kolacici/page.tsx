import { Metadata } from 'next';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export const metadata: Metadata = {
  title: 'Politika kolacica',
  description: 'Politika kolacica za ER1 web stranicu.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-ice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy text-center">
              Politika kolacica
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
              <h2>1. Sto su kolacici?</h2>
              <p>
                Kolacici (cookies) su male tekstualne datoteke koje web stranica
                pohranjuje na vas uredaj (racunalo, tablet ili mobitel) kada
                posjetite stranicu. Kolacici omogucuju web stranici da zapamti
                vase postavke i preferencije.
              </p>

              <h2>2. Koje kolacice koristimo?</h2>

              <h3>2.1 Neophodni kolacici</h3>
              <p>
                Ovi kolacici su nuzni za funkcioniranje web stranice i ne mogu se
                iskljuciti. Obicno se postavljaju samo kao odgovor na vase radnje,
                kao sto je postavljanje postavki privatnosti.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Naziv</th>
                    <th>Svrha</th>
                    <th>Trajanje</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>er1-cookie-consent</td>
                    <td>Pamti vase postavke kolacica</td>
                    <td>1 godina</td>
                  </tr>
                </tbody>
              </table>

              <h3>2.2 Analiticki kolacici</h3>
              <p>
                Ovi kolacici nam pomazu razumjeti kako posjetitelji koriste nasu
                web stranicu. Koristimo Google Analytics za prikupljanje
                anonimiziranih podataka o posjetama.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Naziv</th>
                    <th>Svrha</th>
                    <th>Trajanje</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>Razlikovanje korisnika (Google Analytics)</td>
                    <td>2 godine</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Razlikovanje korisnika (Google Analytics)</td>
                    <td>24 sata</td>
                  </tr>
                  <tr>
                    <td>_gat</td>
                    <td>Ogranicavanje broja zahtjeva</td>
                    <td>1 minuta</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>Napomena:</strong> Analiticki kolacici se postavljaju
                samo ako date pristanak.
              </p>

              <h3>2.3 Marketinski kolacici</h3>
              <p>
                Ovi kolacici koriste se za pracenje posjetitelja na razlicitim
                web stranicama. Svrha im je prikazivanje oglasa koji su relevantni
                za pojedinog korisnika.
              </p>
              <p>
                Trenutno ne koristimo marketinske kolacice, ali mozemo ih uvesti
                u buducnosti. Ako to ucinimo, azurirat cemo ovu politiku.
              </p>

              <h2>3. Upravljanje kolacicima</h2>
              <p>
                Mozete upravljati postavkama kolacica na nekoliko nacina:
              </p>

              <h3>3.1 Putem naseg bannera</h3>
              <p>
                Kada prvi put posjetite nasu stranicu, prikazat ce vam se banner
                za pristanak na kolacice. Mozete odabrati koje vrste kolacica
                zelite prihvatiti.
              </p>

              <h3>3.2 Putem postavki preglednika</h3>
              <p>
                Vecina web preglednika omogucuje kontrolu kolacica putem postavki.
                Evo kako pristupiti postavkama u popularnim preglednicima:
              </p>
              <ul>
                <li>
                  <strong>Chrome:</strong> Postavke → Privatnost i sigurnost →
                  Kolacici
                </li>
                <li>
                  <strong>Firefox:</strong> Postavke → Privatnost i sigurnost →
                  Kolacici
                </li>
                <li>
                  <strong>Safari:</strong> Postavke → Privatnost → Kolacici
                </li>
                <li>
                  <strong>Edge:</strong> Postavke → Kolacici i dozvole web mjesta
                </li>
              </ul>

              <h3>3.3 Brisanje kolacica</h3>
              <p>
                Mozete izbrisati postojece kolacice u bilo kojem trenutku putem
                postavki preglednika. Imajte na umu da ce to mozda utjecati na
                funkcionalnost nekih web stranica.
              </p>

              <h2>4. Kolacici trecih strana</h2>
              <p>
                Neki kolacici mogu biti postavljeni od strane trecih strana (npr.
                Google Analytics). Te trece strane imaju vlastite politike
                privatnosti i mi nemamo kontrolu nad njihovim kolacicima.
              </p>

              <h2>5. Promjene politike kolacica</h2>
              <p>
                Mozemo povremeno azurirati ovu Politiku kolacica. Preporucujemo
                povremeno provjeravanje ove stranice za najnovije informacije.
              </p>

              <h2>6. Kontakt</h2>
              <p>
                Za sva pitanja vezana uz kolacice, mozete nas kontaktirati na:
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
