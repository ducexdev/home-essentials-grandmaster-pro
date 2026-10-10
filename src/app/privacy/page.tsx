import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPage() {
  const lastUpdated = "October 2026";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-poppins text-3xl font-bold text-[#0B1F3A] mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: {lastUpdated}</p>

      <div className="prose prose-sm max-w-none text-[#344054] space-y-6">
        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">Who We Are</h2>
          <p>
            Home Essentials operates the website homeessentials.com.ng and sells products
            including Grandmaster Pro to customers across Nigeria. References to
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;Home Essentials&rdquo; in this policy refer to this business.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">What Information We Collect</h2>
          <p>When you place an order, we collect:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your full name</li>
            <li>Phone number (to confirm your order and arrange delivery)</li>
            <li>WhatsApp number (if provided, for order updates)</li>
            <li>Email address (if provided, for order confirmation)</li>
            <li>Delivery address (state, city, and full address)</li>
            <li>Product selection and quantity</li>
            <li>Order notes (if provided)</li>
          </ul>
          <p className="mt-3">
            We may also automatically collect standard web analytics data (such as page
            views and referral sources via UTM parameters) to understand how customers
            find us.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Process and confirm your order</li>
            <li>Arrange and track delivery</li>
            <li>Contact you about your order (by phone, WhatsApp, or email)</li>
            <li>Handle returns, replacements, or warranty claims</li>
            <li>Respond to enquiries and customer service requests</li>
          </ul>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">Who We Share Your Data With</h2>
          <p>
            We do not sell your personal data. We may share your delivery name and address
            with our courier partner solely for the purpose of delivering your order.
            Your data is stored securely using Supabase (a GDPR-compliant cloud database
            provider).
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">How Long We Keep Your Data</h2>
          <p>
            We retain order records for a minimum of 2 years for accounting and warranty
            purposes. After this period, personal data is deleted or anonymised unless
            required by law to retain it longer.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your
            personal data. To make such a request, contact us at{" "}
            <a href="mailto:order@homeessentials.com.ng" className="text-[#155EEF] underline">
              order@homeessentials.com.ng
            </a>{" "}
            or via WhatsApp at +234 704 578 7045.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">Contact</h2>
          <p>
            For any privacy-related questions, please contact us at{" "}
            <a href="mailto:order@homeessentials.com.ng" className="text-[#155EEF] underline">
              order@homeessentials.com.ng
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-10">
        <a href="/grandmaster-pro" className="text-[#155EEF] hover:underline text-sm">
          ← Back to Grandmaster Pro
        </a>
      </div>
    </main>
  );
}
