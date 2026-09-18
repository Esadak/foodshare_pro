import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Foodshare</h3>
            <p className="text-sm text-muted-foreground">
             Discover homemade food in your neighborhood.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/delete-account" className="hover:text-white transition-colors">Delete Account</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Support: support@foodshare.se</li>
              <li>Privacy: privacy@foodshare.se</li>
              <li>Legal: legal@foodshare.se</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Foodshare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}