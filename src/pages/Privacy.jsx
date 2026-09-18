import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 h-16 flex items-center">
          <a
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-10">
          Last updated: September 15, 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to FoodShare ("we", "us", "our"). We respect your privacy
              and are committed to protecting your personal data. This Privacy
              Policy explains how we collect, use, store, and share information
              when you use the FoodShare mobile application and website.
            </p>
            <p className="mt-2">
              By using our service, you agree to the practices described in this
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Data Controller
            </h2>
            <p>
              FoodShare is the data controller responsible for the processing of
              personal data described in this policy.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Email:</strong> foodshare.service@gmail.com
              </li>
              <li>
                <strong>Website:</strong> https://foodshare.se
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. What Personal Data We Collect
            </h2>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">
              3.1 Data you provide directly:
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Phone number (optional)</li>
              <li>City and general location</li>
              <li>Profile picture (optional)</li>
              <li>Dish listings and descriptions (for users who post food)</li>
              <li>Order history</li>
              <li>Reviews and ratings</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">
              3.2 Data collected automatically:
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Device information (phone model, operating system, app version)
              </li>
              <li>
                Push notification tokens (to send order-related notifications)
              </li>
              <li>IP address</li>
              <li>App usage data (pages visited, features used)</li>
              <li>Time and date of activity</li>
              <li>Crash logs and diagnostic data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. How We Use Your Information
            </h2>
            <p>
              We process your personal data only for the purposes described
              below:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Create and manage your account</li>
              <li>Enable communication and transactions between users</li>
              <li>
                Send transactional notifications such as order status updates
              </li>
              <li>Improve our service, features, and user experience</li>
              <li>Provide customer support</li>
              <li>Detect, prevent, and address fraud or abuse</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Legal Basis for Processing
            </h2>
            <p>
              Where required by law (for example under the GDPR), we process
              personal data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Contract:</strong> To provide the service you have
                requested, such as creating an account or processing an order.
              </li>
              <li>
                <strong>Legitimate Interest:</strong> To improve our services,
                ensure platform security, and prevent fraud or abuse.
              </li>
              <li>
                <strong>Consent:</strong> For optional features such as
                marketing communications or non-essential push notifications. You
                may withdraw consent at any time.
              </li>
              <li>
                <strong>Legal Obligation:</strong> To comply with applicable
                laws, such as accounting, tax, or lawful requests from
                authorities.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Sharing Your Information
            </h2>
            <p>
              We do not sell your personal data. We may share limited
              information with the following categories of recipients:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Other Users:</strong> When you interact with another
                user (for example, to complete an order), limited information
                such as your name and contact details may be shared with that
                user to facilitate the interaction.
              </li>
              <li>
                <strong>Service Providers:</strong> Trusted third-party
                providers that help us operate the service, such as hosting
                providers, push notification services (e.g. Expo), database
                providers, and analytics tools. These providers process data only
                on our instructions.
              </li>
              <li>
                <strong>Legal Authorities:</strong> If we are legally required
                to disclose information to comply with applicable law or valid
                legal requests.
              </li>
            </ul>
            <p className="mt-2">
              Some of our service providers may process personal data outside
              your country of residence. Where required, we take appropriate
              safeguards to ensure an adequate level of protection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Data Retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill
              the purposes described in this policy, unless a longer retention
              period is required or permitted by law.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Account data:</strong> Stored as long as your account is
                active.
              </li>
              <li>
                <strong>Order and transaction data:</strong> Retained for the
                period required for accounting, tax, and legal compliance.
              </li>
              <li>
                <strong>Support and communication data:</strong> Retained as
                long as necessary to handle your request and for our legitimate
                business interests.
              </li>
              <li>
                <strong>After account deletion:</strong> Personal data that is
                no longer needed is deleted or anonymized. Certain data may be
                retained where we are legally required to do so (for example,
                accounting records), and will be kept only for the required
                retention period.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Security
            </h2>
            <p>
              We take reasonable technical and organizational measures to
              protect your personal data, including encrypted passwords,
              encrypted data transfer (HTTPS/TLS), restricted access, and
              regular security reviews. However, no method of transmission or
              storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have some or all of the
              following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Right of access – request a copy of your personal data</li>
              <li>Right to rectification – correct inaccurate data</li>
              <li>
                Right to erasure – request deletion of your data, subject to
                legal retention obligations
              </li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>
                Right to object to processing based on legitimate interests
              </li>
              <li>
                Right to withdraw consent at any time for consent-based
                processing
              </li>
            </ul>
            <p className="mt-2">
              To exercise your rights, contact us at foodshare.service@gmail.com.
              We will respond within the timeframe required by applicable law,
              normally within one month.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Account and Data Deletion
            </h2>
            <p>
              You can request deletion of your account and associated personal
              data at any time. Instructions are available on our{" "}
              <a
                href="/delete-account"
                className="text-primary hover:underline"
              >
                Delete Account
              </a>{" "}
              page, or by contacting us directly at
              foodshare.service@gmail.com.
            </p>
            <p className="mt-2">
              When you request deletion, we will delete or anonymize personal
              data that is no longer necessary. Certain information may be
              retained where required by law, such as accounting records, and
              only for the legally required retention period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Cookies and Similar Technologies
            </h2>
            <p>
              Our website may use cookies and similar technologies to keep you
              logged in, remember your preferences, and analyze how the website
              is used. You can manage or disable cookies in your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Push Notifications
            </h2>
            <p>
              If you enable push notifications, we may send you transactional
              messages such as order confirmations, status updates, and
              important account-related information. You can turn off
              notifications at any time in your device or app settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              13. Children's Privacy
            </h2>
            <p>
              Our service is not intended for children under the age of 13 (or
              the minimum age required in your jurisdiction). We do not
              knowingly collect personal data from children. If you believe a
              child has provided us with personal data, please contact us so we
              can take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              14. User-Generated Content and Reporting
            </h2>
            <p>
              FoodShare allows users to post content such as dish listings,
              images, and reviews. You are responsible for the content you
              upload, and you must not post content that is unlawful,
              misleading, or infringes the rights of others.
            </p>
            <p className="mt-2">
              If you encounter content that you believe is unlawful or violates
              our Terms of Service, you can report it through the app or by
              contacting us at foodshare.service@gmail.com. We review reports
              and may remove content or suspend accounts where appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              15. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. If we make
              significant changes, we will notify you through the app or by
              email where required. The date of the latest update is shown at the
              top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              16. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your personal data, please contact us:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>Email:</strong> foodshare.service@gmail.com
              </li>
              <li>
                <strong>Website:</strong> https://foodshare.se
              </li>
              <li>
                <strong>Support:</strong> foodshare.service@gmail.com
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}