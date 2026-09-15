import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
          Användarvillkor för FoodShare Sweden
        </h1>
        <p className="text-muted-foreground mb-10">
          Senast uppdaterad: 15 september 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Allmänt</h2>
            <p>Dessa användarvillkor ("Villkoren") gäller för din användning av FoodShare Sweden-appen och webbplatsen foodshare.se ("Tjänsten"). Genom att skapa ett konto eller använda Tjänsten godkänner du dessa Villkor.</p>
            <p className="mt-2">Om du inte accepterar Villkoren får du inte använda Tjänsten.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Om Tjänsten</h2>
            <p>FoodShare Sweden är en plattform som kopplar samman hemmakockar ("Kockar") med personer som vill köpa hemlagad mat ("Köpare"). FoodShare Sweden är endast en förmedlande plattform och är inte part i avtalet mellan Kock och Köpare.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Konto och registrering</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Ålder:</strong> Du måste vara minst 13 år för att använda Tjänsten. Om du är under 18 år måste du ha vårdnadshavares tillstånd.</li>
              <li><strong>Korrekt information:</strong> Du ansvarar för att all information du anger är korrekt och uppdaterad.</li>
              <li><strong>Kontosäkerhet:</strong> Du ansvarar för att hålla ditt lösenord hemligt. Meddela oss omedelbart vid misstänkt obehörig åtkomst.</li>
              <li><strong>Ett konto per person:</strong> Du får inte skapa flera konton för att kringgå regler.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Kockars ansvar</h2>
            <p>Som Kock ansvarar du för:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Att all mat är säker att äta och tillagad enligt svenska livsmedelsregler</li>
              <li>Att korrekt information om ingredienser och allergener anges</li>
              <li>Att priser och portioner är korrekt angivna</li>
              <li>Att uppfylla dina skattemässiga skyldigheter</li>
              <li>Att ha nödvändiga tillstånd för livsmedelshantering (vid behov)</li>
            </ul>
            <p className="mt-3">Kockar får inte sälja otillåten/olaglig mat, mat som inte uppfyller livsmedelssäkerhetskrav, alkohol utan tillstånd, eller mat med vilseledande beskrivning.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Köpares ansvar</h2>
            <p>Som Köpare ansvarar du för att ge korrekt kontaktinformation, hämta maten vid avtalad tid, betala enligt överenskommelse, behandla Kockar med respekt, och rapportera eventuella problem till oss.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Beställningar och betalning</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Beställning:</strong> När du gör en beställning ingår du ett avtal direkt med Kocken.</li>
              <li><strong>Betalning:</strong> Betalning sker i nuläget direkt mellan Köpare och Kock (kontant eller Swish). FoodShare Sweden hanterar inte betalningar.</li>
              <li><strong>Avbokning:</strong> Avbokning sker enligt överenskommelse mellan Köpare och Kock.</li>
              <li><strong>Tvister:</strong> Eventuella tvister mellan Köpare och Kock ska lösas direkt mellan parterna. FoodShare Sweden kan assistera men är inte ansvarig.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Förbjudet beteende</h2>
            <p>Du får inte använda Tjänsten för olagliga ändamål, trakassera eller hota andra användare, publicera falsk information, försöka hacka Tjänsten, skicka spam, eller sälja/överföra ditt konto.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Immateriella rättigheter</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Vår egendom:</strong> FoodShare Sweden äger alla rättigheter till Tjänsten, logotypen och koden.</li>
              <li><strong>Ditt innehåll:</strong> Du behåller rättigheterna till det innehåll du laddar upp (bilder, beskrivningar). Genom att ladda upp ger du oss en icke-exklusiv licens att visa det inom Tjänsten.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Ansvarsbegränsning</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Plattformens roll:</strong> FoodShare Sweden är endast en förmedlande plattform. Vi ansvarar inte för matens kvalitet, säkerhet eller smak, användares beteende, skador vid möten, förseningar eller ekonomiska förluster.</li>
              <li><strong>Maximalt ansvar:</strong> Vårt maximala ansvar gentemot dig är begränsat till 1 000 SEK.</li>
              <li><strong>Force majeure:</strong> Vi ansvarar inte för hinder utanför vår kontroll (naturkatastrofer, krig, pandemier etc.).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Kontosuspendering och avslutning</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Av oss:</strong> Vi kan stänga av eller radera ditt konto om du bryter mot Villkoren, utan förvarning.</li>
              <li><strong>Av dig:</strong> Du kan när som helst radera ditt konto via appens inställningar.</li>
              <li><strong>Efter avslutning:</strong> Vissa data sparas enligt lag (t.ex. bokföring) även efter kontots stängning.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Ändringar i Villkoren</h2>
            <p>Vi kan uppdatera dessa Villkor. Vid väsentliga ändringar meddelar vi dig via appen eller e-post minst 30 dagar i förväg. Fortsatt användning innebär godkännande av de nya Villkoren.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Tillämplig lag och tvistlösning</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Svensk lag:</strong> Dessa Villkor regleras av svensk lag.</li>
              <li><strong>Tvistlösning:</strong> Tvister ska i första hand lösas genom förhandling. Om ingen lösning nås kan tvisten avgöras av svensk domstol.</li>
              <li><strong>Konsumenträttigheter:</strong> Ingenting i dessa Villkor begränsar dina rättigheter enligt svensk konsumentlagstiftning.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Kontakt</h2>
            <p>För frågor om dessa Villkor:</p>
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