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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Delete Your Account
        </h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          We're sorry to see you go. This page explains how to request deletion of your FoodShare account and associated personal data.
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              How to request account deletion
            </h2>

            <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-r-xl mb-6">
              <p className="text-gray-200">
                <strong className="text-white">Note:</strong> In-app account deletion is not yet available. This feature is planned for a future update. Until then, please follow the email procedure below.
              </p>
            </div>

            <p className="mb-3">
              To request deletion of your account and associated personal data, please send an email to us with the following information:
            </p>

            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Send an email to{" "}
                <a
                  href="mailto:foodshare.service@gmail.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  foodshare.service@gmail.com
                </a>
              </li>
              <li>
                Use the subject line: <strong className="text-white">"Delete my account"</strong>
              </li>
              <li>
                Include the email address associated with your FoodShare account
              </li>
              <li>
                Optionally, let us know if you have any feedback about the app
              </li>
            </ol>

            <p className="mt-4">
              We will confirm receipt of your request and process the deletion within the timeframe described below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              What data is deleted?
            </h2>
            <p className="mb-3">
              When your account is deleted, we delete or anonymize the following personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your name, email address, and phone number</li>
              <li>Your profile picture</li>
              <li>Your order history (unless retention is required by law)</li>
              <li>Your reviews and ratings</li>
              <li>Your saved push notification tokens</li>
              <li>Any other personal information associated with your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              What data is retained?
            </h2>
            <p className="mb-3">
              Certain data may be retained where we are legally required or permitted to do so, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">Accounting and transaction records</strong> — retained for the period required by applicable accounting and tax laws in the relevant jurisdiction. Such records are stored securely and used only for legal and accounting purposes.
              </li>
              <li>
                <strong className="text-white">Data required for legal compliance</strong> — such as records needed to comply with legal obligations, resolve disputes, or enforce our agreements.
              </li>
            </ul>
            <p className="mt-3">
              Any retained data is kept only for the period required by applicable law, after which it is deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              How long does it take?
            </h2>
            <p>
              We aim to process deletion requests without undue delay, and normally within <strong className="text-white">one month</strong> of receiving your request, in accordance with applicable data protection laws. If your request is complex or we have received a high volume of requests, we may extend this period where permitted by law, and we will inform you if that is the case.
            </p>
            <p className="mt-3">
              You will receive a confirmation email once your account has been deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Deleting some data without deleting your account
            </h2>
            <p>
              If you would like to request deletion of specific personal data without deleting your entire account, you can also contact us at the email address above. We will review your request and respond within the timeframe required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Questions?
            </h2>
            <p>
              If you have any questions about deleting your account or your personal data, please contact us at{" "}
              <a
                href="mailto:foodshare.service@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                foodshare.service@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}