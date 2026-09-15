import React from "react";
import { ArrowLeft } from "lucide-react";

export default function DeleteAccount() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ta bort ditt konto
        </h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          Vi är ledsna att se dig gå! Om du vill ta bort ditt FoodShare-konto och all tillhörande data, följ stegen nedan.
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Så här tar du bort ditt konto</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Öppna FoodShare-appen på din telefon</li>
              <li>Gå till fliken <strong className="text-white">Profile</strong> i bottenmenyn</li>
              <li>Scrolla ner och tryck på <strong className="text-white">Logga ut</strong></li>
              <li>Skicka ett mail till <a href="mailto:foodshare.service@gmail.com" className="text-blue-400 hover:text-blue-300 underline">foodshare.service@gmail.com</a> med ämnet <strong className="text-white">"Radera mitt konto"</strong></li>
              <li>Ange den e-postadress som är kopplad till ditt konto</li>
              <li>Vi raderar ditt konto inom 30 dagar</li>
            </ol>

            <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-r-xl my-6">
              <p className="text-gray-200">
                <strong className="text-white">Alternativ:</strong> Maila oss direkt på <a href="mailto:foodshare.service@gmail.com" className="text-blue-400 hover:text-blue-300 underline">foodshare.service@gmail.com</a> och begär att få ditt konto raderat. Vi svarar inom 30 dagar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Vilken data raderas?</h2>
            <p className="mb-3">När du begär att ditt konto raderas tar vi bort följande data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ditt namn, e-post och telefonnummer</li>
              <li>Din profilbild</li>
              <li>Din orderhistorik</li>
              <li>Dina recensioner och betyg</li>
              <li>Dina sparade push-notifikationstokens</li>
              <li>All annan personlig information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Vilken data behålls?</h2>
            <p className="mb-3">Viss data måste vi behålla enligt svensk lag:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Bokföringsunderlag</strong> – sparas i 3 år enligt bokföringslagen. Detta är anonymiserat och kopplas inte till dig som person.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Hur lång tid tar det?</h2>
            <p>Vi behandlar din begäran inom <strong className="text-white">30 dagar</strong>. Du får en bekräftelse via e-post när kontot är raderat.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Frågor?</h2>
            <p>Kontakta oss på <a href="mailto:foodshare.service@gmail.com" className="text-blue-400 hover:text-blue-300 underline">foodshare.service@gmail.com</a> om du har några frågor om radering av ditt konto eller dina data.</p>
          </section>
        </div>
      </main>
    </div>
  );
}