"use client";

import { useState } from "react";
import type { ProductConfig } from "@/lib/product-config";

interface Props {
  product: ProductConfig;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection({ product }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Do I have to pay any money before delivery?",
      answer:
        "ABSOLUTELY NOT! We operate 100% Pay on Delivery nationwide across all 36 states and Abuja FCT. You pay zero Naira upfront. When our delivery partner brings the parcel to your doorstep, you are free to open the box, inspect the machine, check the free bonus blade set and accessories, before paying via cash or bank transfer.",
    },
    {
      question: "What items and accessories are included inside the box?",
      answer:
        "Every Grandmaster Pro box comes fully equipped with: (1) Heavy-duty pulverizer machine with pure copper motor, (2) FREE Extra 6-leaf stainless blade replacement assembly, (3) FREE 2x replacement carbon brushes, (4) FREE stainless steel sifting sieve, (5) FREE soft cleaning brush, (6) Food pusher / tamper bar, and (7) Comprehensive instruction manual.",
    },
    {
      question: "Can it really crush hard Nigerian food staples like dried yam (elubo) and corn?",
      answer:
        "Yes! The 25,000 RPM high-torque pure copper motor and 304 food-grade surgical steel blades are specifically built for hard dry items. It effortlessly crushes dried yam slices (for elubo), hard yellow corn (for pap/ogi), dried beans (for bean flour/akara), melon seeds (egusi), ogbono, dried chili pepper, tiger nuts, and dried crayfish into ultra-smooth flour in under 2 minutes.",
    },
    {
      question: "How long does delivery take to my state?",
      answer:
        "Orders within Lagos, Abuja FCT, and Port Harcourt are typically delivered within 24 to 48 hours. Orders to all other states across Nigeria take 2 to 4 business days via insured express interstate dispatch. Our delivery agent will always call your phone number before arriving at your address.",
    },
    {
      question: "Can it run on a 'Tiger' or medium-sized generator?",
      answer:
        "The Grandmaster Pro connects to standard 220V–240V home wall outlets. Because of its high-torque industrial copper motor, it is best powered by NEPA/PHCN mains power or a generator rated 2.5kVA and above (it cannot run on a small 0.9kVA 'I-pass-my-neighbor' generator).",
    },
    {
      question: "What is your warranty and guarantee policy?",
      answer:
        "Every machine is backed by our official 1-Year Comprehensive Warranty and a 14-Day Immediate Swap Policy. If your machine encounters any manufacturer defect, our dedicated customer service team will service or replace it immediately.",
    },
    {
      question: "How do I place my order right now?",
      answer:
        "Simply click any 'Order Now' button on this page, select your preferred capacity model (from 400g up to 5000g), fill in your delivery name, phone number, and address. We will immediately phone you to confirm your order and dispatch your parcel.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-[#F4F6F8]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[#0052CC]/10 text-[#0052CC] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <span>❓ Frequently Asked Questions</span>
          </div>
          <h2 id="faq-heading" className="font-poppins text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-[#344054] text-lg">
            Clear, honest answers to common questions from our Nigerian customers.
          </p>
        </div>

        <div className="space-y-3 reveal-on-scroll" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
              role="listitem"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-[#0052CC]"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="font-semibold text-[#0B1F3A] text-sm lg:text-base">
                  {faq.question}
                </span>
                <span
                  className={`text-[#0052CC] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={openIndex !== i}
              >
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-[#344054] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal-on-scroll">
          <p className="text-[#344054] text-sm mb-4">Still have a question or need special delivery arrangements?</p>
          <a
            href={`https://wa.me/${product.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm shadow-md shadow-green-500/20"
          >
            Chat Directly on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
