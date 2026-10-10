import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-poppins text-3xl font-bold text-[#0B1F3A] mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: October 2026</p>

      <div className="prose prose-sm max-w-none text-[#344054] space-y-6">
        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">1. Ordering</h2>
          <p>
            By placing an order on this website, you confirm that the information provided
            is accurate and that you are available to receive and pay for the delivery.
            Submitting an order form is an expression of intent — it becomes a confirmed
            order only after Home Essentials contacts you to verify and confirm the order
            details.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">2. Prices and Payment</h2>
          <p>
            Prices displayed are subject to confirmation at the time of order. Home
            Essentials reserves the right to correct pricing errors. Payment terms will
            be confirmed when we call to verify your order.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">3. Delivery</h2>
          <p>
            Delivery timelines and charges are subject to your location and will be
            confirmed at the time of order. Home Essentials is not liable for delays
            caused by third-party courier services, force majeure, or inaccurate delivery
            addresses provided by the customer.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">4. Returns and Replacements</h2>
          <p>
            Return and replacement policies are confirmed at the time of purchase.
            Customers must inspect the item upon delivery and report any defects within
            the applicable window. Items must be unused and in original condition to
            qualify for replacement.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">5. Warranty</h2>
          <p>
            Warranty terms (duration and coverage) are confirmed at the time of sale.
            Warranty does not cover damage resulting from misuse, accidents, or
            unauthorised modifications.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">6. Limitation of Liability</h2>
          <p>
            Home Essentials&apos; liability is limited to the value of the product purchased.
            We are not liable for indirect, consequential, or incidental damages.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">7. Contact</h2>
          <p>
            For queries, contact us at{" "}
            <a href="mailto:order@homeessentials.com.ng" className="text-[#155EEF] underline">
              order@homeessentials.com.ng
            </a>{" "}
            or via WhatsApp at +234 704 578 7045.
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
