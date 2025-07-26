export const metadata = {
  title: "Privacy Policy – Hyperblog",
  description: "Privacy Policy for Hyperblog platform",
};

import FooterSeparator from "@/components/footer-separator";

export default function PrivacyPolicy() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="pb-12 text-center">
              <h1 className="text-4xl font-semibold text-black md:text-4xl">
                Privacy Policy – Hyperblog
              </h1>
            </div>

            <div className="prose prose-indigo max-w-none text-[#475467] mb-10">
              <p>
                Your privacy matters to us. This Privacy Policy explains how Hyperblog collects, uses, shares, and protects your personal information when you use our platform and services.
              </p>
            </div>

            <div className="text-[#475467] space-y-10 max-w-none mx-auto">
              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">1. What Information We Collect</h2>
                <p className="mb-4">We collect the following types of information:</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li>
                    <strong>Account Information</strong>
                    <ul className="list-disc list-inside ml-6 space-y-1 mt-1">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Company name (if provided)</li>
                      <li>Billing information</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Usage Data</strong>
                    <ul className="list-disc list-inside ml-6 space-y-1 mt-1">
                      <li>IP address</li>
                      <li>Device type and browser</li>
                      <li>Pages visited and actions taken</li>
                      <li>Time spent on the site</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Content Data</strong> — Blog posts, images, polls, or files you upload to Hyperblog
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li>Provide, operate, and improve Hyperblog</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Communicate with you (support, updates, billing, marketing)</li>
                  <li>Secure and protect our platform</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-4"><strong>Legal Bases for Processing (GDPR):</strong> We process your data based on your consent, to fulfill our contractual obligations, to comply with legal requirements, and for our legitimate interests (such as improving our services). We do not sell or rent your personal data to third parties for marketing purposes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">3. Third-Party Services</h2>
                <p className="mb-4">We use trusted third-party providers to help operate Hyperblog, including:</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li>Stripe for payment processing (Stripe Privacy Policy)</li>
                  <li>Google Analytics for usage analytics (Google Privacy Policy)</li>
                  <li>[Eg: Gitlab or helpdesk] for customer support</li>
                  <li>[Using Mailchimp or something] for sending product updates and newsletters</li>
                </ul>
                <p className="mt-4">These providers may process your data on our behalf and are contractually required to protect your information. Please review their privacy policies for more details.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="mb-4">Hyperblog uses cookies and similar technologies to:</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li>Keep you logged in</li>
                  <li>Remember your preferences</li>
                  <li>Analyze site traffic and usage patterns</li>
                </ul>
                <p className="mb-4 mt-4">Types of cookies used:</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li>Essential cookies (required for site functionality)</li>
                  <li>Analytics cookies (to understand usage and improve the platform)</li>
                  <li>Preference cookies (to remember your settings)</li>
                </ul>
                <p className="mt-4">You can manage or disable cookies in your browser settings. Some features may not function properly if cookies are disabled. If you are in the EU/EEA, you will be presented with a cookie consent banner to manage your preferences.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">5. Data Retention</h2>
                <p className="mb-4">We retain your personal data:</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li>As long as your account is active</li>
                  <li>As necessary to comply with legal, financial, or contractual obligations</li>
                  <li>For as long as needed to fulfill the purposes outlined in this policy</li>
                </ul>
                <p className="mt-4">You may request deletion of your data at any time (see Section 7).</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">6. Data Security</h2>
                <p>We use industry-standard security measures, including encryption, access controls, and secure infrastructure, to protect your data. While no system is 100% secure, we take strong precautions to safeguard your information.</p>
                <p className="mt-4"><strong>Data Breach Notification:</strong> In the unlikely event of a data breach affecting your personal information, we will notify you and relevant authorities as required by law.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">7. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have rights under data protection laws such as the GDPR (EU/EEA) or CCPA (California):</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li>
                    <strong>GDPR (EU/EEA users):</strong> Access, correct, or delete your data; request data portability; object to or restrict certain types of processing; withdraw consent at any time.
                  </li>
                  <li>
                    <strong>CCPA (California users):</strong> Know what personal information we collect; request deletion of your data; opt out of data sharing (we do not sell personal data).
                  </li>
                </ul>
                <p className="mt-4"><strong>How to exercise your rights:</strong> To make a request, email us at <a href="mailto:hello@hyperblog.io" className="underline text-indigo-600">hello@hyperblog.io</a> with the subject line: “Privacy Request.” We may need to verify your identity before fulfilling your request and will respond within 30 days.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">8. Account and Data Deletion</h2>
                <p>To delete your account and associated data, contact us at <a href="mailto:hello@hyperblog.io" className="underline text-indigo-600">hello@hyperblog.io</a>. After verifying your identity, we will delete your data within 30 days, except for information we are required to retain by law.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">9. Children’s Privacy</h2>
                <p>Hyperblog is not intended for users under 13. We do not knowingly collect personal information from children. If we become aware that we have collected data from a minor, we will promptly delete it.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">10. International Users and Data Transfers</h2>
                <p>Our servers may be located outside your country. By using Hyperblog, you consent to the transfer and processing of your information in other jurisdictions.</p>
                <p>We use legal mechanisms such as Standard Contractual Clauses to safeguard international data transfers where required.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">11. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. When we make significant changes, we will post the updated version on our site and notify you via email or in-app notification where appropriate.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-black mb-4">12. Contact Us</h2>
                <p>If you have any questions about this policy or your data, please contact us: <a href="mailto:hello@hyperblog.io" className="underline text-indigo-600">hello@hyperblog.io</a>.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
