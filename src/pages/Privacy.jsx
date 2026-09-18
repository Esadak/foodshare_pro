import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy for FoodShare</h1>
        <p className="text-muted-foreground mb-10">Last updated: September 15, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>Welcome to FoodShare ("we", "us", "our"). We value your privacy and strive to protect your personal data. This privacy policy explains how we collect, use, and protect your information when you use the FoodShare app and website foodshare.se.</p>
            <p className="mt-2">By using our service, you agree to the terms of this privacy policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Data Controller</h2>
            <p>FoodShare is the data controller under the EU General Data Protection Regulation (GDPR).</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Email:</strong> privacy@foodshare.se</li>
              <li><strong>Website:</strong> https://foodshare.se</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. What Personal Data We Collect</h2>
            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.1 Data you provide directly:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Phone number</li>
              <li>City and address</li>
              <li>Profile picture (optional)</li>
              <li>Dishes and descriptions (for chefs)</li>
              <li>Order history</li>
              <li>Reviews and ratings</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">3.2 Data collected automatically:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Device information (phone model, operating system)</li>
              <li>Push notification tokens (to send order notifications)</li>
              <li>IP address</li>
              <li>App usage data (pages visited, features used)</li>
              <li>Time and date of activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Create and manage your account</li>
              <li>Process and fulfill orders between buyers and chefs</li>
              <li>Send push notifications about order status and updates</li>
              <li>Improve our service and user experience</li>
              <li>Handle customer support and answer questions</li>
              <li>Prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Legal Basis for Processing</h2>
            <p>Under GDPR, we process your personal data based on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Contract:</strong> To fulfill our agreement with you (e.g., processing orders)</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and protect against fraud</li>
              <li><strong>Consent:</strong> For marketing and push notifications (you can withdraw consent at any time)</li>
              <li><strong>Legal Obligation:</strong> To comply with legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Sharing Your Information</h2>
            <p>We never sell your personal data to third parties. We may share information with:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Chefs and Buyers:</strong> Necessary information (name, contact info) is shared to fulfill the order.</li>
              <li><strong>Service Providers:</strong> Expo (push notifications), Payment providers, Hosting providers (Vercel, database), Analytics tools.</li>
              <li><strong>Legal Requirements:</strong> If we are legally required to disclose information to authorities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Data Storage and Security</h2>
            <p><strong>Retention:</strong> Account details are saved as long as your account is active. Order history is kept for 3 years for accounting purposes. When you delete your account, your personal data is deleted within 30 days.</p>
            <p className="mt-2"><strong>Security:</strong> We use industry standards to protect your data, including encrypted passwords (bcrypt), HTTPS/TLS for all data transfer, restricted access, and regular security reviews.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Your Rights (GDPR)</h2>
            <p>You have the following rights:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Right of access: Request a copy of your personal data</li>
              <li>Right to rectification: Correct inaccurate data</li>
              <li>Right to erasure: Request deletion of your data ("right to be forgotten")</li>
              <li>Right to restriction: Limit how we process your data</li>
              <li>Right to data portability: Receive your data in a structured format</li>
              <li>Right to object: Object to processing based on legitimate interest</li>
              <li>Right to withdraw consent: At any time for consent-based processing</li>
            </ul>
            <p className="mt-2">To exercise your rights, contact us at privacy@foodshare.se. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Cookies</h2>
            <p>Our website uses cookies to keep you logged in, remember your preferences, and analyze website usage. You can manage cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Push Notifications</h2>
            <p>With your consent, we send push notifications about new orders, order status updates, and important messages. You can turn off notifications at any time in the app settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Children's Privacy</h2>
            <p>Our service is not intended for children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Changes to This Policy</h2>
            <p>We may update this privacy policy. For significant changes, we will notify you via the app or email. The date of the latest update is shown at the top of the document.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact</h2>
            <p>For questions about this privacy policy or your personal data:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Email:</strong> privacy@foodshare.se</li>
              <li><strong>Website:</strong> https://foodshare.se</li>
              <li><strong>Support:</strong> support@foodshare.se</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}