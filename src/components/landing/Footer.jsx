import React from "react";

export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Kolonn 1: Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Foodshare</h3>
            <p className="text-sm text-muted-foreground">
              Köp och sälj hemlagad mat lokalt. Upptäck lokala kockar i ditt område.
            </p>
          </div>

          {/* Kolonn 2: Länkar */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Länkar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#funktioner" className="hover:text-white transition-colors">Funktioner</a></li>
              <li><a href="#hur-det-fungerar" className="hover:text-white transition-colors">Hur det fungerar</a></li>
            </ul>
          </div>

          {/* Kolonn 3: Juridik */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Juridik</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Integritetspolicy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Användarvillkor
                </a>
              </li>
              <li>
                <a href="/delete-account" className="hover:text-white transition-colors">
                  Ta bort konto
                </a>
              </li>
            </ul>
          </div>

          {/* Kolonn 4: Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Support: support@foodshare.se</li>
              <li>Privacy: privacy@foodshare.se</li>
              <li>Legal: legal@foodshare.se</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Foodshare Sweden. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}