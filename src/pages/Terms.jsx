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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Last updated: September 15, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. General</h2>
            <p>These Terms of Service ("Terms") govern your access to and use of the FoodShare mobile application and website (the "Service"). By creating an account or using the Service, you agree to be bound by these Terms.</p>
            <p className="mt-2">If you do not accept these Terms, you may not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. About the Service</h2>
            <p>FoodShare is a technology platform that enables users to connect with each other and share information about homemade food. FoodShare acts solely as an intermediary platform and is not a party to any agreement, transaction, or interaction between users.</p>
            <p className="mt-2">FoodShare does not prepare, handle, store, inspect, or sell any food. Any food-related interaction, transaction, or agreement is solely between the users involved.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Account and Registration</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Age:</strong> You must be at least 13 years old to use the Service, or the minimum age required in your jurisdiction. If you are under 18, you must have permission from a parent or legal guardian.</li>
              <li><strong>Accurate Information:</strong> You are responsible for ensuring that all information you provide is accurate, current, and complete.</li>
              <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately if you suspect unauthorized access.</li>
              <li><strong>One Account Per Person:</strong> You may not create multiple accounts to circumvent rules or restrictions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. User Responsibilities</h2>
            <p>You are solely responsible for your use of the Service, including any content you post, any interaction you have with other users, and compliance with all laws and regulations that apply to you.</p>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.1 If you offer food through the Service</h3>
            <p>If you use the Service to offer, share, or make food available to others, you are solely responsible for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Ensuring that all food is safe, properly prepared, and handled in accordance with applicable food safety laws and regulations in your jurisdiction</li>
              <li>Providing accurate and complete information about ingredients, allergens, and preparation methods</li>
              <li>Complying with all applicable registration, licensing, tax, and reporting obligations</li>
              <li>Obtaining any permits or authorizations required for your activities</li>
              <li>Ensuring that your offerings do not violate any applicable law</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.2 If you obtain food through the Service</h3>
            <p>If you use the Service to obtain food from other users, you are solely responsible for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Providing accurate contact information</li>
              <li>Complying with any agreements you make with other users</li>
              <li>Communicating any allergies, dietary restrictions, or special requirements directly to the other user</li>
              <li>Treating other users with respect</li>
              <li>Reporting any concerns to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Orders and Payments</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Agreements Between Users:</strong> Any agreement, transaction, or arrangement is made directly between the users involved. FoodShare is not a party to these agreements.</li>
              <li><strong>Payments:</strong> FoodShare does not currently process payments. Any payment arrangement is made directly between users and is their sole responsibility.</li>
              <li><strong>Cancellations and Disputes:</strong> Any cancellations, refunds, or disputes must be resolved directly between the users involved. FoodShare may, at its sole discretion, assist with communication but is under no obligation to do so and assumes no liability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Prohibited Behavior</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use the Service for any unlawful purpose</li>
              <li>Harass, threaten, or harm other users</li>
              <li>Post false, misleading, or deceptive information</li>
              <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
              <li>Send spam or unauthorized advertising</li>
              <li>Sell, transfer, or share your account with others</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. User-Generated Content and Reporting</h2>
            <p>You are solely responsible for any content you upload, post, or share through the Service. You must not post content that is unlawful, misleading, defamatory, infringing, or otherwise harmful.</p>
            <p className="mt-2">If you encounter content that you believe violates these Terms or applicable law, you can report it through the app or by contacting us at foodshare.service@gmail.com. We review reports and may remove content or suspend accounts where we deem appropriate.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Intellectual Property</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Our Property:</strong> FoodShare owns all rights, title, and interest in the Service, including its design, logo, and code.</li>
              <li><strong>Your Content:</strong> You retain ownership of the content you upload. By uploading content, you grant FoodShare a non-exclusive, worldwide, royalty-free license to display, distribute, and use that content within the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Disclaimer and Limitation of Liability</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Platform Role:</strong> FoodShare is solely a technology platform. We do not prepare, inspect, or verify any food, and we do not verify the identity, qualifications, or claims of any user.</li>
              <li><strong>No Warranties:</strong> The Service is provided "as is" and "as available" without warranties of any kind, whether express or implied.</li>
              <li><strong>Limitation of Liability:</strong> To the maximum extent permitted by applicable law, FoodShare shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss arising from your use of the Service or interactions with other users. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.</li>
              <li><strong>Force Majeure:</strong> We are not liable for any failure or delay caused by events beyond our reasonable control.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Account Suspension and Termination</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>By Us:</strong> We may suspend or terminate your account if you violate these Terms or applicable law, with or without prior notice.</li>
              <li><strong>By You:</strong> You may request deletion of your account at any time. Instructions are available on our{" "}
                <a href="/delete-account" className="text-primary hover:underline">Delete Account</a>{" "}page.</li>
              <li><strong>After Termination:</strong> Certain data may be retained where required by law (for example, accounting or legal records), for the required retention period.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to the Terms</h2>
            <p>We may update these Terms from time to time. If we make significant changes, we will notify you through the app or by email where required. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of Sweden, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of Sweden, unless mandatory consumer protection laws in your country of residence provide otherwise.</p>
            <p className="mt-2">Nothing in these Terms limits any rights you may have under mandatory consumer protection laws in your jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Contact</h2>
            <p>For questions about these Terms, please contact us:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Email:</strong> foodshare.service@gmail.com</li>
              <li><strong>Website:</strong> https://foodshare.se</li>
              <li><strong>Support:</strong> foodshare.service@gmail.com</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}