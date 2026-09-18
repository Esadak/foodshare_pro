import React from "react";
import { ArrowLeft } from "lucide-react";

export default function DeleteAccount() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Delete Your Account</h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          We are sorry to see you go! If you wish to delete your FoodShare account and all associated data, please follow the steps below.
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">How to delete your account</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Open the FoodShare app on your phone</li>
              <li>Go to the <strong className="text-white">Profile</strong> tab in the bottom menu</li>
              <li>Scroll down and tap <strong className="text-white">Log out</strong></li>
              <li>Send an email to <a href="mailto:foodshare.service@gmail.com" className="text-blue-400 hover:text-blue-300 underline">foodshare.service@gmail.com</a> with the subject <strong className="text-white">"Delete my account"</strong></li>
              <li>Include the email address associated with your account</li>
              <li>We will delete your account within 30 days</li>
            </ol>

            <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-r-xl my-6">
              <p className="text-gray-200">
                <strong className="text-white">Alternative:</strong> Email us directly at <a href="mailto:foodshare.service@gmail.com" className="text-blue-400 hover:text-blue-300 underline">foodshare.service@gmail.com</a> and request account deletion. We will respond within 30 days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What data is deleted?</h2>
            <p className="mb-3">When you request account deletion, we remove the following data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your name, email, and phone number</li>
              <li>Your profile picture</li>
              <li>Your order history</li>
              <li>Your reviews and ratings</li>
              <li>Your saved push notification tokens</li>
              <li>All other personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What data is retained?</h2>
            <p className="mb-3">We must retain certain data according to Swedish law:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Accounting records</strong> – retained for 3 years according to the Swedish Accounting Act. This data is anonymized and not linked to you as an individual.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">How long does it take?</h2>
            <p>We process your request within <strong className="text-white">30 days</strong>. You will receive a confirmation email once the account is deleted.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Questions?</h2>
            <p>Contact us at <a href="mailto:foodshare.service@gmail.com" className="text-blue-400 hover:text-blue-300 underline">foodshare.service@gmail.com</a> if you have any questions about deleting your account or your data.</p>
          </section>
        </div>
      </main>
    </div>
  );
}