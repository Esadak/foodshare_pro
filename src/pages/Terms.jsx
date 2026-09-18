import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 h-16 flex items-center">
          <a href="/" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms of Service for FoodShare</h1>
        <p className="text-muted-foreground mb-10">Last updated: September 15, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. General</h2>
            <p>These Terms of Service ("Terms") apply to your use of the FoodShare app and website foodshare.se ("the Service"). By creating an account or using the Service, you agree to these Terms.</p>
            <p className="mt-2">If you do not accept the Terms, you may not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. About the Service</h2>
            <p>FoodShare is a platform that connects home chefs ("Chefs") with people who want to buy home-cooked food ("Buyers"). FoodShare is solely an intermediary platform and is not a party to the agreement between the Chef and the Buyer.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Account and Registration</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Age:</strong> You must be at least 13 years old to use the Service. If you are under 18, you must have parental consent.</li>
              <li><strong>Accurate Information:</strong> You are responsible for ensuring all information you provide is accurate and up to date.</li>
              <li><strong>Account Security:</strong> You are responsible for keeping your password secret. Notify us immediately of any suspected unauthorized access.</li>
              <li><strong>One Account Per Person:</strong> You may not create multiple accounts to circumvent rules.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Chef Responsibilities</h2>
            <p>As a Chef, you are responsible for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Ensuring all food is safe to eat and prepared according to Swedish food safety regulations</li>
              <li>Providing accurate information about ingredients and allergens</li>
              <li>Stating prices and portions correctly</li>
              <li>Fulfilling your tax obligations</li>
              <li>Having necessary permits for food handling (if required)</li>
            </ul>
            <p className="mt-3">Chefs may not sell prohibited/illegal food, food that does not meet safety standards, alcohol without a permit, or food with misleading descriptions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Buyer Responsibilities</h2>
            <p>As a Buyer, you are responsible for providing accurate contact information, picking up the food at the agreed time, paying as agreed, treating Chefs with respect, and reporting any issues to us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Orders and Payment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Order:</strong> When you place an order, you enter into an agreement directly with the Chef.</li>
              <li><strong>Payment:</strong> Payment currently occurs directly between the Buyer and the Chef (cash or Swish). FoodShare does not handle payments.</li>
              <li><strong>Cancellation:</strong> Cancellations are made by agreement between the Buyer and the Chef.</li>
              <li><strong>Disputes:</strong> Any disputes between Buyers and Chefs should be resolved directly between the parties. FoodShare may assist but is not liable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Prohibited Behavior</h2>
            <p>You may not use the Service for illegal purposes, harass or threaten other users, publish false information, attempt to hack the Service, send spam, or sell/transfer your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Our Property:</strong> FoodShare owns all rights to the Service, logo, and code.</li>
              <li><strong>Your Content:</strong> You retain rights to the content you upload (images, descriptions). By uploading, you grant us a non-exclusive license to display it within the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Platform Role:</strong> FoodShare is solely an intermediary. We are not liable for food quality, safety, or taste, user behavior, damages during meetings, delays, or financial losses.</li>
              <li><strong>Maximum Liability:</strong> Our maximum liability to you is limited to 1,000 SEK.</li>
              <li><strong>Force Majeure:</strong> We are not liable for obstacles beyond our control (natural disasters, war, pandemics, etc.).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Account Suspension and Termination</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>By Us:</strong> We may suspend or delete your account if you violate the Terms, without prior notice.</li>
              <li><strong>By You:</strong> You can delete your account at any time via the app settings.</li>
              <li><strong>After Termination:</strong> Certain data is retained by law (e.g., accounting) even after account closure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to the Terms</h2>
            <p>We may update these Terms. For significant changes, we will notify you via the app or email at least 30 days in advance. Continued use implies acceptance of the new Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Swedish Law:</strong> These Terms are governed by Swedish law.</li>
              <li><strong>Dispute Resolution:</strong> Disputes should first be resolved through negotiation. If no solution is reached, the dispute may be settled by a Swedish court.</li>
              <li><strong>Consumer Rights:</strong> Nothing in these Terms limits your rights under Swedish consumer protection laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact</h2>
            <p>For questions about these Terms:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Email:</strong> legal@foodshare.se</li>
              <li><strong>Website:</strong> https://foodshare.se</li>
              <li><strong>Support:</strong> support@foodshare.se</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}