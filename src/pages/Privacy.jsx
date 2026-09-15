import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enkel header med tillbakalänk */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 h-16 flex items-center">
          <a 
            href="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till startsidan
          </a>
        </div>
      </header>

      {/* Huvudinnehåll */}
      <main className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Integritetspolicy för FoodShare Sweden
        </h1>
        <p className="text-muted-foreground mb-10">
          Senast uppdaterad: 15 september 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Inledning</h2>
            <p>Välkommen till FoodShare Sweden ("vi", "oss", "vår"). Vi värnar om din integritet och strävar efter att skydda dina personuppgifter. Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar din information när du använder FoodShare Sweden-appen och webbplatsen foodshare.se.</p>
            <p className="mt-2">Genom att använda vår tjänst godkänner du villkoren i denna integritetspolicy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Personuppgiftsansvarig</h2>
            <p>FoodShare Sweden är personuppgiftsansvarig enligt EU:s dataskyddsförordning (GDPR).</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>E-post:</strong> foodshare.service@gmail.com</li>
              <li><strong>Webbplats:</strong> https://foodshare.se</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Vilka personuppgifter vi samlar in</h2>
            <p>Vi samlar in följande typer av personuppgifter:</p>
            
            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.1 Uppgifter du ger oss direkt:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Namn (för- och efternamn)</li>
              <li>E-postadress</li>
              <li>Lösenord (krypterat)</li>
              <li>Telefonnummer</li>
              <li>Stad och adress</li>
              <li>Profilbild (valfritt)</li>
              <li>Maträtter och beskrivningar (för kockar)</li>
              <li>Beställningshistorik</li>
              <li>Recensioner och betyg</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.2 Uppgifter som samlas in automatiskt:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Enhetsinformation (telefonmodell, operativsystem)</li>
              <li>Push-notifikationstoken (för att skicka ordernotiser)</li>
              <li>IP-adress</li>
              <li>App-användningsdata (sidor du besöker, funktioner du använder)</li>
              <li>Tid och datum för aktivitet</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.3 Uppgifter från tredje part:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Betalningsinformation (via framtida betaltjänstleverantörer)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Hur vi använder din information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Skapa och hantera ditt konto</li>
              <li>Behandla och genomföra beställningar mellan köpare och kockar</li>
              <li>Skicka push-notiser om orderstatus och uppdateringar</li>
              <li>Förbättra vår tjänst och användarupplevelse</li>
              <li>Hantera kundsupport och svara på frågor</li>
              <li>Skicka viktig information om tjänsten (t.ex. ändringar i villkor)</li>
              <li>Förhindra bedrägerier och missbruk</li>
              <li>Uppfylla rättsliga skyldigheter</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Rättslig grund för behandling</h2>
            <p>Enligt GDPR behandlar vi dina personuppgifter baserat på:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Avtal:</strong> För att fullgöra vårt avtal med dig (t.ex. hantera beställningar)</li>
              <li><strong>Berättigat intresse:</strong> För att förbättra våra tjänster och skydda mot bedrägerier</li>
              <li><strong>Samtycke:</strong> För marknadsföring och push-notiser (du kan återkalla samtycke när som helst)</li>
              <li><strong>Rättslig skyldighet:</strong> För att uppfylla lagkrav</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Delning av din information</h2>
            <p>Vi säljer aldrig dina personuppgifter till tredje part. Vi kan dela information med:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Kockar och köpare:</strong> Vid beställning delas nödvändig information (namn, kontaktinfo) mellan köpare och kock för att genomföra ordern.</li>
              <li><strong>Tjänsteleverantörer:</strong> Expo (push-notifikationer), Betaltjänstleverantörer, Hosting-leverantörer (Vercel, databas), Analysverktyg.</li>
              <li><strong>Rättsliga krav:</strong> Om vi är skyldiga enligt lag att lämna ut information till myndigheter.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Datalagring och säkerhet</h2>
            <p><strong>Lagringstid:</strong> Kontouppgifter sparas så länge ditt konto är aktivt. Beställningshistorik sparas i 3 år för bokföringsändamål. När du raderar ditt konto raderas dina personuppgifter inom 30 dagar.</p>
            <p className="mt-2"><strong>Säkerhet:</strong> Vi använder branschstandard för att skydda dina uppgifter, inklusive krypterade lösenord (bcrypt), HTTPS/TLS för all dataöverföring, begränsad åtkomst och regelbundna säkerhetsöversyner.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Dina rättigheter (GDPR)</h2>
            <p>Du har följande rättigheter:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Rätt till tillgång: Begära kopia av dina personuppgifter</li>
              <li>Rätt till rättelse: Korrigera felaktiga uppgifter</li>
              <li>Rätt till radering: Begära att dina uppgifter raderas ("rätten att bli bortglömd")</li>
              <li>Rätt till begränsning: Begränsa hur vi behandlar dina uppgifter</li>
              <li>Rätt till dataportabilitet: Få dina uppgifter i ett strukturerat format</li>
              <li>Rätt att invända: Invända mot behandling baserad på berättigat intresse</li>
              <li>Rätt att återkalla samtycke: När som helst för samtyckesbaserad behandling</li>
            </ul>
            <p className="mt-2">För att utöva dina rättigheter, kontakta oss på privacy@foodshare.se. Vi svarar inom 30 dagar.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Cookies och liknande teknik</h2>
            <p>Vår webbplats använder cookies för att hålla dig inloggad, komma ihåg dina preferenser och analysera användning av webbplatsen. Du kan hantera cookies i din webbläsarinställningar.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Push-notifikationer</h2>
            <p>Med ditt samtycke skickar vi push-notifikationer om nya beställningar, orderstatus-uppdateringar och viktiga meddelanden. Du kan när som helst stänga av notifikationer i appens inställningar.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Barn och integritet</h2>
            <p>Vår tjänst är inte avsedd för barn under 13 år. Vi samlar inte medvetet in personuppgifter från barn. Om du tror att ett barn har gett oss personuppgifter, kontakta oss omedelbart.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Ändringar i denna policy</h2>
            <p>Vi kan uppdatera denna integritetspolicy. Vid väsentliga ändringar meddelar vi dig via appen eller e-post. Datum för senaste uppdatering visas högst upp i dokumentet.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Kontakt</h2>
            <p>För frågor om denna integritetspolicy eller dina personuppgifter:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>E-post:</strong> foodshare.service@gmail.com</li>
              <li><strong>Webbplats:</strong> https://foodshare.se</li>
              <li><strong>Support:</strong> foodshare.service@gmail.com</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}