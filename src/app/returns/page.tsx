import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns Policy",
  robots: { index: false },
};

export default function ReturnsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-poppins text-3xl font-bold text-[#0B1F3A] mb-2">Returns Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: October 2026</p>

      <div className="prose prose-sm max-w-none text-[#344054] space-y-6">
        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">Our Commitment</h2>
          <p>
            We understand that buying online means you cannot physically inspect the item
            before purchase. Home Essentials is committed to ensuring you are satisfied
            with your Grandmaster Pro.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">Inspection on Delivery</h2>
          <p>
            Please inspect your item at the time of delivery before accepting it from our
            courier. If you notice visible damage, report it immediately to the courier
            and contact us at the details below.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">Return Window</h2>
          <p>
            The return and replacement window is confirmed at the time of your order
            confirmation call. Within this window, if your item has a manufacturing defect
            or arrives damaged, contact us to arrange a replacement or refund.
          </p>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">Conditions for Return</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Item must be in its original condition and packaging</li>
            <li>Item must not have been modified or misused</li>
            <li>Defect must be reported within the confirmed return window</li>
            <li>Proof of purchase (order reference) must be provided</li>
          </ul>
        </section>

        <section>
          <h2 className="font-poppins font-bold text-[#0B1F3A] text-xl mb-3">How to Request a Return</h2>
          <p>
            Contact us via WhatsApp at +234 704 578 7045 or by email at{" "}
            <a href="mailto:order@homeessentials.com.ng" className="text-[#155EEF] underline">
              order@homeessentials.com.ng
            </a>{" "}
            with your order reference number and a description of the issue. We will
            respond within 24 hours with instructions.
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
