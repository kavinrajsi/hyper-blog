export const metadata = {
  title: "Terms & Conditions - Hyperblog",
  description: "Read the terms and conditions for using our website.",
};

import FooterSeparator from "@/components/footer-separator";

export default function Terms() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="pb-12 text-center">
              <h1 className="text-4xl font-semibold text-black md:text-4xl">
                Terms and Conditions
              </h1>
            </div>

            <div className="prose prose-indigo max-w-none text-[#475467]">
              <p>
                These Terms and Conditions (“Terms”) govern your use of Hyperblog. By using our platform, you agree to these Terms. If you do not agree, you must not use Hyperblog.
              </p>

              <h2>1. What We Offer</h2>
              <p>
                Hyperblog is a cloud-based platform (SaaS) that helps users create, manage, and optimize blog content using AI-generated tools for writing, images, infographics, polls, and lead capture. We offer subscription-based access to our services and features.
              </p>

              <h2>2. Your Account</h2>
              <p>To use Hyperblog, you must sign up for an account. You are responsible for:</p>
              <ul>
                <li>Providing accurate registration information.</li>
                <li>Keeping your login credentials secure.</li>
                <li>All activities that occur under your account.</li>
              </ul>
              <p>
                You must be at least 13 years old (or the minimum legal age in your jurisdiction) to use Hyperblog. Accounts for minors are not permitted. We may suspend, terminate, or restrict your account, remove content, or block access if we detect misuse, violation of these Terms, or illegal activity.
              </p>

              <h2>3. Subscription, Billing & Cancellation</h2>
              <p>Hyperblog offers paid subscription plans. By subscribing:</p>
              <ul>
                <li>You authorize us to charge your payment method on a recurring basis (monthly or yearly).</li>
                <li>You agree to the pricing outlined at the time of purchase.</li>
                <li>You can cancel your subscription anytime from your dashboard.</li>
              </ul>
              <p>
                No long-term contracts. Cancel before your next billing cycle to avoid charges. Refunds are only provided where required by law or for unresolved technical failures. Please contact support for refund requests.
              </p>

              <h2>4. Acceptable Use</h2>
              <p>You agree to use Hyperblog only for lawful purposes. You may not:</p>
              <ul>
                <li>Use our service to generate illegal, harmful, or abusive content.</li>
                <li>Interfere with or disrupt our platform.</li>
                <li>Reverse engineer or resell our software.</li>
                <li>Violate copyright, intellectual property laws, or third-party rights.</li>
              </ul>
              <p>
                We reserve the right to remove or block any content that violates these Terms or applicable law.
              </p>

              <h2>5. Your Content</h2>
              <p>
                You own the content you create using Hyperblog. We don't claim ownership. However, to operate the service, you grant us a license to store, display, and process your content as needed.
              </p>
              <p>
                You are responsible for ensuring your content complies with laws and doesn't infringe third-party rights.
              </p>
              <p>
                Upon account termination, your content may be deleted or retained as required by law or for legitimate business purposes. You may request deletion of your data by contacting support.
              </p>

              <h2>6. Intellectual Property</h2>
              <p>
                Hyperblog (the product, design, brand, and underlying technology) is owned by Hyperblog Inc. You may not copy, reproduce, or use any part of our platform without permission.
              </p>

              <h2>7. Beta Features</h2>
              <p>
                Some features may be labeled “beta” or “experimental.” These may be incomplete or subject to change. Use them at your own risk.
              </p>

              <h2>8. Termination</h2>
              <p>We reserve the right to suspend or terminate access to Hyperblog for:</p>
              <ul>
                <li>Breach of these Terms</li>
                <li>Non-payment</li>
                <li>Fraudulent or harmful activity</li>
              </ul>
              <p>
                You can cancel your subscription at any time. Upon cancellation, your account will remain active until the end of your billing cycle. Upon termination, your access will cease, and your content may be deleted in accordance with our data retention policy.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                To the extent allowed by law: Hyperblog is provided “as is” and “as available.” We make no warranties, express or implied, regarding the platform’s reliability, availability, or suitability for your purposes.
              </p>
              <p>
                We are not responsible for indirect, incidental, or consequential damages. Our total liability for any claim is limited to the amount you paid in the last 12 months.
              </p>
              <p>
                We are not liable for any failure or delay caused by circumstances beyond our reasonable control, including but not limited to natural disasters, internet outages, or government actions.
              </p>

              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Hyperblog Inc. and its affiliates from any claims, damages, or expenses arising from your use of the platform or violation of these Terms.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We’ll notify you of significant changes via email or dashboard notification.
              </p>

              <h2>12. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles.
              </p>
              <p>
                Any disputes arising out of or relating to these Terms or your use of Hyperblog shall be resolved exclusively in the courts located in [Your City, Your State/Country], and you consent to the personal jurisdiction of such courts.
              </p>

              <h2>13. Contact Us</h2>
              <p>
                Questions? Reach out to us at: <a href="mailto:hello@hyperblog.io">hello@hyperblog.io</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
