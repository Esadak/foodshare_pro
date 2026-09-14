import React from "react";
import { UtensilsCrossed, Mail } from "lucide-react";

// Footer with logo, legal links, contact and copyright.
export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 text-white font-semibold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
              <UtensilsCrossed className="w-5 h-5" />
            </span>
            Foodshare.se
          </a>

          {/* Contact */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>Support: </span>
            <a href="mailto:support@foodshare.se" className="text-primary hover:brightness-125 transition">
              foodshare@gmail.com
            </a>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-white transition-colors">Användarvillkor</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Foodshare. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}