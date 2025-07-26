export const metadata = {
  title: "Refund Policy - Hyperblog",
  description: "Refund and cancellation policy for Hyperblog users",
};

import FooterSeparator from "@/components/footer-separator";

export default function RefundPolicy() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="pb-12 text-center">
              <h1 className="text-4xl font-semibold text-black md:text-4xl">
                Refund Policy
              </h1>
            </div>
            <div className="prose prose-indigo max-w-none text-[#475467]">
                Thank you for choosing Hyperblog, your trusted blogging CMS platform. We are committed to transparency and clarity in our subscription and refund policies. Please read the following information carefully to understand how our system handles cancellations, refunds, and data retention.
            </div>

            <div className="py-12 md:py-10 text-[#475467]">
              <div>
                <h2 className="text-2xl font-semibold text-black">1. Monthly Subscription Plan</h2>
                <h3 className="py-6 md:py-4 font-semibold">Cancellation & Refund</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>You may cancel your monthly plan at any time through your Hyperblog dashboard.</li>
                  <li>However, once the monthly payment is successfully processed, no refund will be issued, even if you cancel at the beginning of the month.</li>
                </ul>
                <h3 className="py-6 md:py-4 font-semibold">Data Retention After Cancellation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>After cancellation, your blog content will remain on the Hyperblog system for 2 months.</li>
                  <li>During this period, your blog will not be visible to your website visitors, but you will still be able to log in to the dashboard and export your data.</li>
                  <li>We will retain your blog content and leads for an additional 2 months (total of 4 months from cancellation).</li>
                  <li>If you reactivate your subscription within this period, your content can be restored.</li>
                  <li>After 4 months, we will email you a final export and permanently delete your data.</li>
                </ul>
              </div>
            </div>

            <div className="text-[#475467]">
              <div>
                <h2 className="text-2xl py-3 md:py-1 font-semibold text-black">2. Yearly Subscription Plan</h2>
                <h3 className="py-2 md:py-4 font-semibold">Cancellation & Refund</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>You may cancel your yearly plan at any time through your dashboard.</li>
                  <li>Refunds are issued on a pro-rata basis for the unused portion of the subscription.</li>
                  <li>Example: If you cancel after 3 months, you will receive a refund for the remaining 9 months.</li>
                </ul>
                <h3 className="py-6 md:py-4 font-semibold">Data Retention After Cancellation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Content will be exportable for 2 months after cancellation.</li>
                  <li>We retain your content and leads for a total of 4 months post-cancellation.</li>
                  <li>If you return within this period, simply subscribe again to restore access.</li>
                  <li>After 4 months, a final export will be sent before permanent deletion.</li>
                </ul>
              </div>
            </div>

            <div className="py-12 md:py-10 text-[#475467]">
              <div>
                <h2 className="text-2xl py-3 md:py-1 font-semibold text-black">3. Failed Payments – Monthly Subscribers</h2>
                <h3 className="py-2 md:py-4 font-semibold">Payment Decline & Retention Policy</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>If your payment fails, we will notify you via email and retry for 30 days.</li>
                  <li>If unsuccessful after 1 month, the subscription will be canceled automatically.</li>
                </ul>
                <h3 className="py-6 md:py-4 font-semibold">Post-Cancellation Procedure</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Your blog will be deactivated but accessible for export for 2 months.</li>
                  <li>Data will be retained for 4 months.</li>
                  <li>You may restore your subscription anytime within this period.</li>
                  <li>After 4 months, data is permanently deleted and a final export is emailed.</li>
                </ul>
              </div>
            </div>

            <div className="text-[#475467]">
              <div>
                <h2 className="text-2xl py-3 md:py-1 font-semibold text-black">Important Notes</h2>
                <ul className="py-2 md:py-4 list-disc list-inside">
                  <li>Export your content before the 4-month retention period ends.</li>
                  <li>Refunds for yearly plans are processed within 7–10 business days.</li>
                  <li>No refunds for partial use or non-usage of the monthly plan.</li>
                </ul>
              </div>
            </div>

            <p className="text-md mt-3 text-black">
              If you have any questions or need assistance, please contact our support team at <a className="text-indigo-600 underline" href="mailto:support@hyperblog.io">support@hyperblog.io</a>.
            </p>
          </div>
        </div>
      </section>
      <FooterSeparator />
    </>
  );
}
